import type { StructureResolver } from 'sanity/structure';
import { TagIcon, DocumentTextIcon, WarningOutlineIcon, HomeIcon, BellIcon } from '@sanity/icons';

/* Custom Content sidebar for the Studio.

   The default structureTool lists every document type flat, which gives the
   team no way to see which posts still need a category. This mirrors the
   layout used on the MSN Developments studio: categories get their own
   section, and an explicit "needs category" list surfaces posts that would
   otherwise appear nowhere on the site's category pages. */

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Posts missing a category never show up under any /category/<slug>
      // page and get no chip, so they are worth calling out first.
      S.listItem()
        .title('Blog Posts — Needs Category')
        .icon(WarningOutlineIcon)
        .child(
          S.documentList()
            .title('Blog Posts — Needs Category')
            .filter('_type == "post" && !defined(category)')
            .apiVersion('2024-01-01')
        ),

      S.listItem()
        .title('Blog Posts (All)')
        .icon(DocumentTextIcon)
        .child(S.documentTypeList('post').title('Blog Posts (All)')),

      S.listItem()
        .title('Categories')
        .icon(TagIcon)
        .child(S.documentTypeList('category').title('Categories')),

      S.divider(),

      S.listItem()
        .title('News')
        .icon(BellIcon)
        .child(S.documentTypeList('news').title('News')),

      S.listItem()
        .title('Properties')
        .icon(HomeIcon)
        .child(S.documentTypeList('property').title('Properties')),
    ]);
