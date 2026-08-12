import type { SchemaTypeDefinition } from 'sanity';
import { property } from './property';
import { post } from './post';
import { news } from './news';
import { category } from './category';
import { contentTable, tableRow } from './contentTable';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [property, post, news, category, contentTable, tableRow],
};
