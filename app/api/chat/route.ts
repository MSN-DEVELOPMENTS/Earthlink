import {
  streamText,
  convertToModelMessages,
  tool,
  stepCountIs,
  createUIMessageStreamResponse,
  toUIMessageStream,
  type UIMessage,
} from 'ai';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';
import { buildSystemPrompt } from '@/lib/chatbot/prompt';
import { sendLeadEmail } from '@/lib/chatbot/lead';
import { findProject, findArticle } from '@/lib/chatbot/lookup';

// OpenAI + nodemailer need the Node.js runtime (not Edge).
export const runtime = 'nodejs';
export const maxDuration = 30;

const MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    console.error('[Earthlink chat] OPENAI_API_KEY is not set.');
    return new Response('Chat is not configured.', { status: 503 });
  }

  let messages: UIMessage[];
  try {
    ({ messages } = await req.json());
  } catch {
    return new Response('Invalid request.', { status: 400 });
  }

  const system = await buildSystemPrompt();

  const result = streamText({
    model: openai(MODEL),
    system,
    messages: await convertToModelMessages(messages),
    stopWhen: stepCountIs(5),
    tools: {
      captureLead: tool({
        description:
          'Save a sales lead and email it to the Earth Link team. Call this once you have the visitor\'s name, a contact (email or phone), and what they are looking for.',
        inputSchema: z.object({
          name: z.string().describe("The visitor's full name"),
          contact: z.string().describe('An email address or phone number to reach them'),
          intent: z
            .enum(['buy', 'rent', 'sell', 'invest', 'other'])
            .describe('What the visitor wants to do'),
          budget: z.string().optional().describe('Budget or price range, if given'),
          area: z.string().optional().describe('Preferred area or community, if given'),
          notes: z.string().optional().describe('Any other useful context'),
        }),
        execute: async (lead) => {
          const { ok } = await sendLeadEmail(lead);
          return ok
            ? { status: 'sent', message: 'Lead sent to the Earth Link team.' }
            : {
                status: 'failed',
                message:
                  'Could not email the lead. Ask the visitor to reach us on WhatsApp instead.',
              };
        },
      }),
      projectDetails: tool({
        description:
          'Get full details for a specific developer project (amenities, payment plan, unit types, sizes, handover, location, description). Use when the visitor asks about a named off-plan project.',
        inputSchema: z.object({
          project: z.string().describe('The project name or slug, e.g. "Golf Vale" or "golf-vale"'),
        }),
        execute: async ({ project }) => ({ detail: findProject(project) }),
      }),
      articleDetails: tool({
        description:
          'Get the full text of a specific blog post or news article. Use when the visitor asks what an article says or wants a summary of its content.',
        inputSchema: z.object({
          article: z.string().describe('The article title or slug'),
        }),
        execute: async ({ article }) => ({ detail: await findArticle(article) }),
      }),
    },
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  });
}
