/* Helpers for authoring Portable Text blocks in code.
   Sanity's rich-text editor produces this exact shape, so the same
   <PortableText> renderer on the blog handles both the built-in fallback
   articles (below, in lib/data.ts) and anything written later in Sanity. */

let counter = 0;
const key = () => `k${(counter++).toString(36)}`;

type Span = { _type: 'span'; _key: string; text: string; marks: string[] };
type LinkDef = { _type: 'link'; _key: string; href: string };

export type Block = {
  _type: 'block';
  _key: string;
  style: 'normal' | 'h2' | 'h3' | 'blockquote';
  markDefs: LinkDef[];
  children: Span[];
  listItem?: 'bullet' | 'number';
  level?: number;
};

const span = (text: string, marks: string[] = []): Span => ({
  _type: 'span',
  _key: key(),
  text,
  marks,
});

/* Paragraph. */
export const p = (text: string): Block => ({
  _type: 'block',
  _key: key(),
  style: 'normal',
  markDefs: [],
  children: [span(text)],
});

/* Section heading. */
export const h2 = (text: string): Block => ({
  _type: 'block',
  _key: key(),
  style: 'h2',
  markDefs: [],
  children: [span(text)],
});

/* Bullet list item. */
export const li = (text: string): Block => ({
  _type: 'block',
  _key: key(),
  style: 'normal',
  listItem: 'bullet',
  level: 1,
  markDefs: [],
  children: [span(text)],
});

/* Bullet list item with a bold lead-in phrase, e.g. liLead('Buy for value.', ' The rest…'). */
export const liLead = (lead: string, rest: string): Block => ({
  _type: 'block',
  _key: key(),
  style: 'normal',
  listItem: 'bullet',
  level: 1,
  markDefs: [],
  children: [span(lead, ['strong']), span(rest)],
});

/* Paragraph containing a single inline link. */
export const pLink = (
  before: string,
  linkText: string,
  href: string,
  after: string
): Block => {
  const linkKey = key();
  return {
    _type: 'block',
    _key: key(),
    style: 'normal',
    markDefs: [{ _type: 'link', _key: linkKey, href }],
    children: [span(before), span(linkText, [linkKey]), span(after)],
  };
};
