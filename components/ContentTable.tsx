/* Renders a `contentTable` authored in Sanity (see sanity/schemaTypes/contentTable.ts).

   Tables are seeded as a 10 x 10 grid, so most of them arrive part-filled.
   normalizeGrid drops every row and every column that is entirely empty and
   squares off the remainder, which keeps a 3-column table from rendering
   seven blank columns. Server component — no interactivity needed. */

import type { TableBlock, TableRowValue } from '@/lib/portable';

export type ContentTableRow = TableRowValue;
export type ContentTableValue = TableBlock;

export function normalizeGrid(rows?: ContentTableRow[]): string[][] {
  const raw = (rows ?? []).map((row) => (row?.cells ?? []).map((cell) => (cell ?? '').trim()));

  const width = raw.reduce((max, row) => Math.max(max, row.length), 0);
  if (!width) return [];

  // Keep only the columns that carry content somewhere in the table.
  const keptColumns: number[] = [];
  for (let c = 0; c < width; c++) {
    if (raw.some((row) => (row[c] ?? '') !== '')) keptColumns.push(c);
  }
  if (!keptColumns.length) return [];

  return raw
    .filter((row) => row.some((cell) => cell !== ''))
    .map((row) => keptColumns.map((c) => row[c] ?? ''));
}

export default function ContentTable({ value }: { value: ContentTableValue }) {
  const grid = normalizeGrid(value?.rows);
  if (!grid.length) return null;

  // A header row only makes sense when there is at least one data row under it.
  const useHeader = value.hasHeaderRow !== false && grid.length > 1;
  const headerCells = useHeader ? grid[0] : null;
  const bodyRows = useHeader ? grid.slice(1) : grid;

  return (
    <figure className="content-table-figure">
      <div className="content-table-scroll">
        <table className="content-table">
          {headerCells && (
            <thead>
              <tr>
                {headerCells.map((cell, i) => (
                  <th key={i} scope="col">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {bodyRows.map((row, r) => (
              <tr key={r}>
                {row.map((cell, c) => (
                  <td key={c}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {value.caption && <figcaption className="content-table-caption">{value.caption}</figcaption>}
    </figure>
  );
}
