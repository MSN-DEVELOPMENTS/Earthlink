import type { SchemaTypeDefinition } from 'sanity';
import { property } from './property';
import { post } from './post';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [property, post],
};
