import type { SchemaTypeDefinition } from 'sanity';
import { property } from './property';
import { post } from './post';
import { news } from './news';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [property, post, news],
};
