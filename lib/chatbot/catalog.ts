/* Builds the knowledge base the chatbot is grounded on: the live property
   listings plus services, FAQs, and contact details. The catalog is small, so
   we load a compact text summary into the model's system prompt each request
   and cache it in-memory (short TTL) to avoid rebuilding it on every message. */

import { getProperties } from '@/lib/properties';
import { getPosts } from '@/lib/blog';
import { getNews } from '@/lib/news';
import {
  faqs,
  services,
  contact,
  communities,
  offers,
  matchSteps,
  inquiryTypes,
  stats,
  type Post,
} from '@/lib/data';
import { developers } from '@/lib/developers';
import { ABOUT_TEXT, SITE_PAGES_TEXT, SOCIAL_TEXT } from '@/lib/chatbot/site';

const TTL_MS = 5 * 60 * 1000; // 5 minutes
let cache: { text: string; at: number } | null = null;

function buildListings(properties: Awaited<ReturnType<typeof getProperties>>): string {
  if (!properties.length) return 'No listings are currently available.';
  return properties
    .map((p, i) => {
      const desc = (p.description || []).join(' ');
      const parts = [
        `${i + 1}. ${p.name} — ${p.tag}`,
        `${p.type}, ${p.beds}, ${p.area}`,
        `Location: ${p.location}`,
        `Price: ${p.price}`,
        `Ref: ${p.ref}`,
        p.permit ? `Permit: ${p.permit}` : '',
        `Property page: /properties/${p.slug}`,
        desc ? `About: ${desc}` : '',
      ].filter(Boolean);
      return parts.join(' | ');
    })
    .join('\n');
}

/* Compact summary of the developers Earth Link works with and their off-plan
   projects. Descriptions/amenities are omitted to keep the prompt small — each
   project links to its on-site page for full detail. */
function buildDevelopers(): string {
  return developers
    .map((d) => {
      const header = `### ${d.name} — ${d.tagline} (page: /developers/${d.slug})`;
      const projects = d.projects
        .map((p) => {
          const bits = [
            p.name,
            p.community,
            p.price,
            p.handover ? `handover ${p.handover}` : '',
            `page: /developers/${d.slug}/${p.slug}`,
          ].filter(Boolean);
          return `- ${bits.join(' | ')}`;
        })
        .join('\n');
      return `${header}\n${projects}`;
    })
    .join('\n\n');
}

/* Compact list of articles (blog posts or news) with their on-site links. */
function buildArticles(items: Post[], basePath: string): string {
  if (!items.length) return 'None published yet.';
  return items
    .map((a) => {
      const date = a.publishedAt ? a.publishedAt.slice(0, 10) : '';
      const excerpt = a.excerpt ? ` — ${a.excerpt.trim()}` : '';
      const meta = [a.category, date].filter(Boolean).join(', ');
      return `- ${a.title}${meta ? ` (${meta})` : ''}${excerpt} | page: ${basePath}/${a.slug}`;
    })
    .join('\n');
}

/* Assemble the full knowledge base as plain text. */
export async function getKnowledgeBase(): Promise<string> {
  if (cache && Date.now() - cache.at < TTL_MS) return cache.text;

  const [properties, posts, news] = await Promise.all([
    getProperties(),
    getPosts(),
    getNews(),
  ]);

  const servicesText = services.map((s) => `- ${s.title}: ${s.text}`).join('\n');
  const offersText = offers.map((o) => `- ${o.title}: ${o.text}`).join('\n');
  const processText = matchSteps.map((s) => `${s.n}. ${s.title}: ${s.text}`).join('\n');
  const statsText = stats.map((s) => `- ${s.big} ${s.lbl}`).join('\n');
  const faqText = faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n');

  const communitiesText = communities.map((c) => `- ${c.name}: ${c.note}`).join('\n');

  const text = `## ABOUT EARTH LINK
${ABOUT_TEXT}

## WEBSITE PAGES
${SITE_PAGES_TEXT}

## CURRENT PROPERTY LISTINGS (${properties.length})
${buildListings(properties)}

## DEVELOPERS WE WORK WITH (${developers.length})
Earth Link works with ${developers.length} leading Dubai developers. Their off-plan
projects are listed below (link each to its /developers page for full details).
${buildDevelopers()}

## COMMUNITIES WE COVER
${communitiesText}

## MEDIA CENTER
Blog (The Journal) — market insight, neighbourhood guides, investor notes:
${buildArticles(posts, '/blog')}

News (Newsroom) — press releases, milestones, market updates:
${buildArticles(news, '/news')}

## SERVICES
${servicesText}

## WHAT WE OFFER
${offersText}

## OUR PROCESS (how we work with clients)
${processText}

## BY THE NUMBERS
${statsText}

## HOW TO ENQUIRE
Visitors can enquire about: ${inquiryTypes.join(', ')}. Use the contact form on
/contact, WhatsApp, phone, or this chat.

## CONTACT
Phone: ${contact.phone}
WhatsApp: ${contact.whatsapp}
Email: ${contact.email}
Office: ${contact.location}
Map (Google Maps): https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.location)}
Directions (Google Maps): https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(contact.location)}
Contact page (with map): /contact

## SOCIAL MEDIA
${SOCIAL_TEXT}

## FREQUENTLY ASKED QUESTIONS
${faqText}`;

  cache = { text, at: Date.now() };
  return text;
}
