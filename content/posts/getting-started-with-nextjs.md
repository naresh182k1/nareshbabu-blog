---
title: "Getting Started with Next.js and Static Site Generation"
date: "2025-03-18"
excerpt: "A practical guide to building a statically exported blog with Next.js, Tailwind CSS, and Markdown."
tags: ["nextjs", "react", "tutorial"]
---

## Why Next.js for a Blog?

Next.js has become one of the most popular React frameworks, and for good reason. Its support for static site generation (SSG) makes it an excellent choice for blogs -- you get the developer experience of React with the performance benefits of static HTML.

## Static Export

One of the most powerful features for a blog is `output: 'export'` in the Next.js configuration. This tells Next.js to generate a fully static site at build time, producing plain HTML, CSS, and JavaScript files that can be hosted anywhere -- including GitHub Pages.

```typescript
// next.config.ts
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};
```

## Markdown for Content

Using Markdown for blog content keeps things simple and portable. With libraries like `gray-matter` for frontmatter parsing and `remark` for rendering, you get a lightweight content pipeline:

1. Write posts as `.md` files with YAML frontmatter
2. Parse the frontmatter for metadata (title, date, tags)
3. Convert the Markdown body to HTML
4. Render it in your React components

## Tailwind CSS for Styling

Tailwind CSS v4 pairs beautifully with Next.js. The utility-first approach means you spend less time switching between files and more time building. The new v4 CSS-first configuration makes setup even simpler.

## Deploying to GitHub Pages

With static export, deploying to GitHub Pages is straightforward. A GitHub Actions workflow can build the site and deploy it automatically on every push:

1. Check out the code
2. Install dependencies
3. Run `next build`
4. Upload the `out/` directory as a Pages artifact
5. Deploy

The result is a fast, free, and maintenance-free hosting solution for your blog.

## Wrapping Up

If you're looking for a modern, performant blog setup, Next.js with static export is hard to beat. You get a great developer experience, excellent performance, and the flexibility to extend your site as it grows.
