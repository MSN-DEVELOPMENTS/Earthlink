import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Nodemailer needs the Node.js runtime (not Edge).
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  SMTP_FROM,
  CONTACT_FORM_TO,
} = process.env;

const LABELS: Record<string, string> = {
  inquiry_type: 'Inquiry type',
  name: 'Full name',
  email: 'Email',
  phone: 'Phone',
  message: 'Message',
  project: 'Project',
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export async function POST(req: Request) {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_FORM_TO) {
    console.error('[Earthlink] SMTP env vars are not set — cannot send email.');
    return NextResponse.json(
      { success: false, message: 'Email is not configured.' },
      { status: 500 }
    );
  }

  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid request.' }, { status: 400 });
  }

  const subject =
    typeof data.subject === 'string' && data.subject.trim()
      ? data.subject.trim()
      : 'New website enquiry';
  const senderEmail = typeof data.email === 'string' ? data.email.trim() : '';

  // Build the message body from every provided field (except the subject).
  const rows = Object.entries(data)
    .filter(([key]) => key !== 'subject')
    .map(([key, val]) => {
      const label = LABELS[key] ?? key;
      const value = String(val ?? '').trim() || '—';
      return { label, value };
    });

  const text = rows.map((r) => `${r.label}: ${r.value}`).join('\n');
  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#222">
      <h2 style="margin:0 0 16px">${escapeHtml(subject)}</h2>
      <table style="border-collapse:collapse">
        ${rows
          .map(
            (r) =>
              `<tr>
                 <td style="padding:6px 14px 6px 0;font-weight:bold;vertical-align:top">${escapeHtml(r.label)}</td>
                 <td style="padding:6px 0">${escapeHtml(r.value).replace(/\n/g, '<br>')}</td>
               </tr>`
          )
          .join('')}
      </table>
      <p style="margin:20px 0 0;color:#888;font-size:13px">Sent from the Earth Link Real Estate website.</p>
    </div>`;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 465,
    secure: (Number(SMTP_PORT) || 465) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: SMTP_FROM || `Earth Link Real Estate <${SMTP_USER}>`,
      to: CONTACT_FORM_TO.split(',').map((s) => s.trim()).filter(Boolean),
      replyTo: senderEmail || undefined,
      subject,
      text,
      html,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Earthlink] Email send failed:', err);
    return NextResponse.json(
      { success: false, message: 'Failed to send message.' },
      { status: 502 }
    );
  }
}
