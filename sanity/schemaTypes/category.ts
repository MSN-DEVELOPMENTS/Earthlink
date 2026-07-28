import { defineField, defineType } from 'sanity';
import { TagIcon } from '@sanity/icons';

/* Shared taxonomy for both Blog Posts and News articles. Previously each of
   those schemas carried its own hardcoded `list:` of category strings, so
   adding or renaming a category meant a code change and a redeploy. They are
   now documents the team edits in Studio, and both content types reference
   them. Every category gets an archive page at /category/<slug>. */

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Shown on article cards, on the filter chips, and as the archive-page heading.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The URL of the category archive, e.g. /category/market-insights. Click "Generate" to build it from the title.',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      description: 'One or two sentences. Used as the archive-page intro and as its search-result description.',
      validation: (r) => r.max(300),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      description: 'Optional. Shown as the banner across the top of the category archive page. Upload a wide landscape photo (ideally 2400px+).',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          description: 'Describe the image for accessibility and SEO.',
        }),
      ],
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Optional. Controls the left-to-right order of the filter chips — lower numbers come first. Categories without a number are listed alphabetically after the rest.',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
      description: 'Optional. Overrides the browser-tab and search-result title for the archive page. Aim for under 60 characters.',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta description',
      type: 'text',
      rows: 2,
      description: 'Optional. The search-result description. Falls back to the Description above. Aim for under 160 characters.',
    }),
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'displayOrder',
      by: [
        { field: 'order', direction: 'asc' },
        { field: 'title', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'description', media: 'coverImage' },
  },
});
