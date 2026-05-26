---
name: create-blog-article
description: Use when creating or updating a blog article in this `seduerr91.github.io` Jekyll repo. Covers choosing `_posts` vs `_ai_daily`, naming files, matching local front matter conventions, adding images with credit, and validating the result locally.
---

# Create Blog Article

This repo is a Jekyll site.

- Use `_posts/` for normal long-form blog articles.
- Use `_ai_daily/` only for the recurring AI roundup format.

## Choose the target collection

For a normal article, create:

`_posts/YYYY-MM-DD-slug.md`

For an AI roundup, create:

`_ai_daily/YYYY-MM-DD-ai-blogs-update.md`

Prefer the requested date. If none is given, use today's date. Avoid future dates unless the user is intentionally scheduling a post, because default Jekyll/GitHub Pages setups usually hide future-dated entries until that day.

## Standard post workflow

1. Read 1-2 nearby examples in `_posts/` that match the topic or style.
2. Pick a lowercase kebab-case slug from the title.
3. Create the file in `_posts/`.
4. Use this front matter pattern:

```md
---
title: My Post Title
tags: [Tag1, Tag2]
style: fill
color: success
description: One sentence that explains the article.
---

# My Post Title
```

Notes:

- Do not add `layout:` for regular posts unless there is a strong reason. `_config.yml` already assigns `layout: post` to the `posts` collection.
- Keep the H1 identical to the `title`.
- `tags` use inline bracket syntax, for example `[Travel, AI]`.
- `style: fill` and `color: success` are the repo's common defaults for regular posts.

## AI daily roundup workflow

Use `_ai_daily/` only when the article is a daily or batch summary of outside AI posts.

Use this pattern:

```md
---
title: Specific roundup title
tags: [AI, Blogs]
style: fill
color: primary
description: "A summary of new posts from source-name on MM-DD"
---
```

Notes:

- `_config.yml` already assigns `layout: post` to the `ai_daily` collection.
- These posts often start directly with a bold meta-summary instead of repeating the title as an H1.
- If multiple sources are summarized, expand tags only when helpful, for example `[AI, Blogs, Cookbooks]`.

## Images

- Many posts use a hero image near the top of the article.
- Existing posts often use an Unsplash image URL directly, followed by a short credit line.
- If you add a local image, place it under `assets/posts/` and reference it with an absolute site path such as `/assets/posts/topic/image.jpg`.
- Prefer absolute asset paths over fragile relative paths.

Example:

```md
![Ireland coast](https://images.unsplash.com/photo-1588963940468-9e6e4d202209?q=80&w=2671&auto=format&fit=crop)

*Photo by [Photographer Name](https://unsplash.com/@handle) on [Unsplash](https://unsplash.com)*
```

## Validation

Before finishing:

1. Confirm the filename, date, slug, title, and opening heading all agree.
2. Confirm front matter is valid YAML and bracket tags are closed.
3. Run `bundle exec jekyll build` to catch rendering or front matter issues.
4. Use `bundle exec jekyll serve` or `just run` if you need a local preview.
5. If bundler dependencies are missing, run `bundle install`.

## Repo-specific reminders

- The site permalink for standard posts is `/blog/:title`, so the filename slug matters.
- Keep descriptions concise; most existing posts use a short single-sentence summary.
- When uncertain about formatting, copy the structure from a nearby recent post instead of inventing a new pattern.
