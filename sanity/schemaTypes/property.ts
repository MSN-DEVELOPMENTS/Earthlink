import { defineField, defineType } from 'sanity';

export const property = defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      description: 'e.g. Off-Plan, Resort, Ready',
    }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      description: 'e.g. Apartments, Residences, Villas',
    }),
    defineField({ name: 'beds', title: 'Beds', type: 'string' }),
    defineField({ name: 'area', title: 'Area', type: 'string' }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g. AED 950K',
    }),
    defineField({ name: 'ref', title: 'Reference', type: 'string' }),
    defineField({ name: 'permit', title: 'DLD permit number', type: 'string' }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'text', rows: 3 }],
      description: 'One paragraph per item.',
    }),
    defineField({
      name: 'order',
      title: 'Sort order',
      type: 'number',
      description: 'Lower numbers appear first.',
    }),
  ],
  orderings: [
    { title: 'Sort order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'location', media: 'image' },
  },
});
