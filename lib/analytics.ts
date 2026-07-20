/* ==========================================================================
   Analytics events
   Pushes events into the Google Tag Manager dataLayer (GTM is loaded in
   app/layout.tsx). GTM forwards these to GA4, where they can be marked as
   "key events" (conversions). When GTM isn't present (local dev without
   NEXT_PUBLIC_GTM_ID) sendGTMEvent is a harmless no-op.
   ========================================================================== */

import { sendGTMEvent } from '@next/third-parties/google';

/** Which form produced the lead — passed through as a GA4 event parameter. */
export type LeadFormType = 'contact' | 'project_inquiry';

/** Fire when a visitor successfully submits a lead (contact / project) form. */
export function trackLead(formType: LeadFormType): void {
  sendGTMEvent({ event: 'generate_lead', form_type: formType });
}

/** Fire when a visitor successfully subscribes to the newsletter. */
export function trackNewsletterSignup(): void {
  sendGTMEvent({ event: 'newsletter_signup', form_type: 'newsletter' });
}
