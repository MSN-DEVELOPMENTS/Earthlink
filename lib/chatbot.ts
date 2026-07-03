/**
 * Chatbot seam.
 *
 * This is the ONLY file that changes when the real bot is wired in. The
 * ChatWidget UI calls `getBotReply` and never knows what's behind it.
 *
 * Phase 1 (now): returns a canned reply after a short, human-feeling delay.
 * Phase 2 (once the company provides OPENAI_API_KEY): swap the body for a
 * POST to `/api/chat`, which reads the key server-side and calls OpenAI —
 * the browser never sees the key, and this widget stays untouched.
 *
 *   export async function getBotReply(text: string): Promise<string> {
 *     const res = await fetch('/api/chat', {
 *       method: 'POST',
 *       headers: { 'Content-Type': 'application/json' },
 *       body: JSON.stringify({ message: text }),
 *     });
 *     const data = await res.json();
 *     return data.reply;
 *   }
 */

const CANNED_REPLY =
  'Thanks for reaching out to Earth Link Real Estate! One of our advisors ' +
  'will assist you shortly. In the meantime, feel free to ask about our ' +
  'Dubai properties, leasing, or investment opportunities.';

export async function getBotReply(_text: string): Promise<string> {
  // Simulate the pause of a real response so the "typing…" indicator reads
  // naturally during the demo.
  await new Promise((resolve) => setTimeout(resolve, 900));
  return CANNED_REPLY;
}
