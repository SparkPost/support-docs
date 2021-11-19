---
lastUpdated: "02/08/2020"
title: "CSS Inlining"
description: "When creating HTML content for email CSS is often an issue Many email clients use HTML themselves so special care is needed to avoid clashing with their page layout and style The traditional solution is to ensure your email's HTML uses only inline styles that is CSS is used only..."
---

When creating HTML content for email, CSS is often an issue.  Many email clients use HTML themselves so special care is needed to avoid clashing with their page layout and style.  The traditional solution is to ensure your email's HTML uses only *inline* styles; that is, CSS is used only within *style* attributes on your HTML tags themselves.

Since this can be an onerous task, SparkPost includes an CSS inlining feature to automate this at transmission time.

### Using CSS Inlining With The REST API

To enable CSS inlining with the SparkPost REST API, set `options.inline_css=true` when submitting your transmissions:
```
{
    "recipients": [ ... ],
    "content": { ... },
    "options": {
        "inline_css": true
    }
}
```

### Using CSS Inlining with SMTP

To enable CSS inlining when using SparkPost's SMTP service, set `options.inline_css=true` to the `X-MSYS-API` header when submitting your messages:
```
X-MSYS-API: {"options": { "inline_css": true } }
From: you@yourdomain.com
Subject: Inline CSS Message

...
```
For more detail, you could also read our [CSS inlining blog post](https://www.sparkpost.com/blog/automatic-css-inlining-sparkpost/).
