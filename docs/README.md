---
title: Read me
published: false
---

## Pages

### Files

Pages are `.md` files. The files must be in the `docs` folder.

### Folder structure

Each folder needs an `index.md` file.

    docs
    |--index.html
    |--product-1
    |  |--index.md
    |
    |--product-2
    |  |--index.md
    |  |
    |  |--chapter-1
    |  |  |--index.md
    |  |
    |  |--chapter-2
    |  |  |--index.html
    |  |  |--page-1.md
    |  |  |--page-2.md  
    |  |  |--page-3.md

### Front Matter Handles

#### published

Make pages _internal_:

    ---
    title: My page
    published: false
    ---

Alternatively move the pages to the `_drafts` folder.

#### index

Position the page in the sidebar:

    ---
    title: My page
    index: 10
    ---

#### no_toc

Disable the mini-toc for a page:

    ---
    title: My page
    no_toc: true
    ---

#### no_breadcrumbs

Disable the breadcrumbs for a page:

    ---
    title: My page
    no_breadcrumbs: true
    ---

#### layout

Set the layout template for a page. Default is _page_.

    ---
    layout: index
    title: My page
    ---
