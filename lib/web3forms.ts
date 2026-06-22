/* ==========================================================================
   Web3Forms submission helper
   Web3Forms access keys are designed to be public (they only route to a fixed
   destination email), so NEXT_PUBLIC_ is the correct prefix here.
   Get a free key at https://web3forms.com and add it to .env.local:
     NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key
   ========================================================================== */

export const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '';

export async function submitToWeb3Forms(
  data: Record<string, FormDataEntryValue>,
  subject: string
): Promise<void> {
  if (!WEB3FORMS_KEY) {
    // Dev-time hint; users see a friendly message instead.
    console.warn(
      '[Earthlink] NEXT_PUBLIC_WEB3FORMS_KEY is not set — form submissions will not be delivered. ' +
        'Add your key to .env.local. See lib/web3forms.ts.'
    );
    throw new Error('FORM_NOT_CONFIGURED');
  }

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      from_name: 'Earthlink Website',
      subject,
      ...data,
    }),
  });

  const json = await res.json();
  if (!json.success) {
    throw new Error(json.message || 'Submission failed');
  }
}
