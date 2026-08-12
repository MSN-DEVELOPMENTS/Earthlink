import { defineField, defineType } from 'sanity';

/* A simple data table the team fills in from the Studio.

   Shape is a plain array of rows, each row a plain array of cell strings —
   the same shape Sanity's own table tooling uses, so it stays portable.
   A new table starts life as a 10 x 10 grid (see initialValue below), but
   rows and columns can be added or removed freely; the renderer in
   components/ContentTable.tsx drops any row or column left completely
   empty, so a half-filled 10 x 10 still looks tidy on the site. */

const ROWS = 10;
const COLUMNS = 10;

/* Array items need a stable _key. initialValue runs in the browser, so a
   per-document timestamp plus the row index is unique enough. */
function rowKey(index: number): string {
  return `r${index}-${Date.now().toString(36)}`;
}

function emptyRows() {
  return Array.from({ length: ROWS }, (_, i) => ({
    _type: 'tableRow',
    _key: rowKey(i),
    cells: Array.from({ length: COLUMNS }, () => ''),
  }));
}

export const tableRow = defineType({
  name: 'tableRow',
  title: 'Row',
  type: 'object',
  fields: [
    defineField({
      name: 'cells',
      title: 'Cells',
      type: 'array',
      description: 'One entry per column, left to right. Leave a cell blank to show an empty box.',
      of: [{ type: 'string' }],
      initialValue: () => Array.from({ length: COLUMNS }, () => ''),
    }),
  ],
  preview: {
    select: { cells: 'cells' },
    prepare({ cells }: { cells?: string[] }) {
      const filled = (cells ?? []).map((c) => (c ?? '').trim()).filter(Boolean);
      return {
        title: filled.length ? filled.join('  ·  ') : 'Empty row',
        subtitle: `${(cells ?? []).length} columns`,
      };
    },
  },
});

export const contentTable = defineType({
  name: 'contentTable',
  title: 'Table',
  type: 'object',
  fields: [
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional line shown under the table, e.g. "Source: DLD, 2026".',
    }),
    defineField({
      name: 'hasHeaderRow',
      title: 'First row is a header',
      type: 'boolean',
      description: 'On: row 1 is styled as column headings. Off: every row is plain data.',
      initialValue: true,
    }),
    defineField({
      name: 'rows',
      title: 'Rows',
      type: 'array',
      description:
        'Starts as 10 rows x 10 columns. Open a row to type into its cells, and use Add item to add more rows or columns. Rows and columns you leave completely empty are not shown on the website.',
      of: [{ type: 'tableRow' }],
      initialValue: emptyRows,
    }),
  ],
  preview: {
    select: { caption: 'caption', rows: 'rows' },
    prepare({ caption, rows }: { caption?: string; rows?: { cells?: string[] }[] }) {
      const list = rows ?? [];
      const columns = list.reduce((w, r) => Math.max(w, (r?.cells ?? []).length), 0);
      return {
        title: caption || 'Table',
        subtitle: `${list.length} rows × ${columns} columns`,
      };
    },
  },
});
