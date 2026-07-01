/* ==========================================================================
   Contact form submission helper
   Posts form data to our own /api/contact route, which emails it via SMTP
   (nodemailer). Replaces the previous Web3Forms integration.
   ========================================================================== */

export async function submitMessage(
  data: Record<string, FormDataEntryValue>,
  subject: string
): Promise<void> {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ subject, ...data }),
  });

  let json: { success?: boolean; message?: string } = {};
  try {
    json = await res.json();
  } catch {
    /* non-JSON response */
  }

  if (!res.ok || !json.success) {
    throw new Error(json.message || 'Submission failed');
  }
}
