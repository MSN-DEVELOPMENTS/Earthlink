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
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Optional. Controls the left-to-right order of the filter chips — lower numbers come first. Categories without a number are listed alphabetically after the rest.',
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
    select: { title: 'title', subtitle: 'description' },
  },
});
