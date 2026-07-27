import type { SchemaTypeDefinition } from 'sanity';
import { property } from './property';
import { post } from './post';
import { news } from './news';
import { category } from './category';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [property, post, news, category],
};
