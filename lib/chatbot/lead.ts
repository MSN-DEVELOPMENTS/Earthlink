/* Emails a captured chatbot lead to the team, reusing the same SMTP setup as the
   contact form. Returns a soft ok/failure so the bot can fall back to WhatsApp
   instead of losing the lead when email is unconfigured. */

import nodemailer from 'nodemailer';

export type Lead = {
  name: string;
  contact: string; // email or phone
  intent?: string; // buy / rent / sell / invest / other
  budget?: string;
  area?: string;
  notes?: string;
};

function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export async function sendLeadEmail(lead: Lead): Promise<{ ok: boolean }> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_FORM_TO } =
    process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_FORM_TO) {
    console.error('[Earthlink chat] SMTP not configured — lead not emailed:', lead);
    return { ok: false };
  }

  const rows: Array<[string, string]> = [
    ['Full name', lead.name],
    ['Contact', lead.contact],
    ['Intent', lead.intent || '—'],
    ['Budget', lead.budget || '—'],
    ['Preferred area', lead.area || '—'],
    ['Notes', lead.notes || '—'],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n');
  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#222">
      <h2 style="margin:0 0 16px">New chatbot lead</h2>
      <table style="border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr>
                 <td style="padding:6px 14px 6px 0;font-weight:bold;vertical-align:top">${escapeHtml(k)}</td>
                 <td style="padding:6px 0">${escapeHtml(v).replace(/\n/g, '<br>')}</td>
               </tr>`
          )
          .join('')}
      </table>
      <p style="margin:20px 0 0;color:#888;font-size:13px">Captured by the Earth Link website chatbot.</p>
    </div>`;

  const port = Number(SMTP_PORT) || 465;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: SMTP_FROM || `Earth Link Real Estate <${SMTP_USER}>`,
      to: CONTACT_FORM_TO.split(',').map((s) => s.trim()).filter(Boolean),
      subject: `New chatbot lead — ${lead.name}`,
      text,
      html,
    });
    return { ok: true };
  } catch (err) {
    console.error('[Earthlink chat] Lead email failed:', err);
    return { ok: false };
  }
}
