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

Make pages _internal_.
By default `true`.

    ---
    title: My page
    published: false
    ---

Alternatively move the pages to the `_drafts` folder.

#### index

Position the page in the sidebar.
By default `10000`.

    ---
    title: My page
    index: 10
    ---

#### no_toc

Disable the mini-toc for a page.
For `docs` folder by default `false`.

    ---
    title: My page
    no_toc: true
    ---

#### no_breadcrumbs

Disable the breadcrumbs for a page.
For `docs` folder by default `false`.

    ---
    title: My page
    no_breadcrumbs: true
    ---

#### layout

Set the layout template for a page.
For `docs` folder by default `page`.

    ---
    layout: home
    title:  Home
    ---

#### crawl

Exclude page from `sitemap.json`.
For `docs` folder by default `true`.

    ---
    title: Template
    crawl: false
    ---
