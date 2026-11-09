---
lastUpdated: "11/09/2026"
title: "Search Your Templates"
description: "Find any template on the Templates page by name, ID, description, status or the date it was last updated, and share a search with a URL."
---

The search box on the [Templates page](https://app.sparkpost.com/templates) ([EU](https://app.eu.sparkpost.com/templates)) finds any template in your account, however many you have. You can search by name, ID, description, status and the date a template was last updated, then share the search with a link.

These instructions are for the new Templates page, which shows a **New Templates page** banner at the top.

## Search for a template

1. Open the [Templates page](https://app.sparkpost.com/templates) ([EU](https://app.eu.sparkpost.com/templates)).
1. In the search box above the table, type a word, part of a name, or part of an ID.

The table updates a moment after you stop typing. A word finds every template that holds it in its name, ID or description, and a primary account also searches subaccount IDs. Searches are not case-sensitive, and a word matches inside longer text, so `welc` finds `Welcome Email` and `prewelcome-v2`.

If the search box cannot read what you typed, a message under the box says what to fix. For example, `welcome AND` shows `AND needs a term after it`.

## Filter by status

1. Above the table, click **Status**.
1. Tick **Draft**, **Published**, **Unpublished changes**, or any mix of them.

Ticking a box writes the matching search into the search box, such as `status:draft,published`, so you can see and edit it. A status search you type in the box ticks the matching boxes. When the box holds a status search the checkboxes cannot show, such as `welcome OR status:draft`, the button reads **Status: Custom**.

## Sort and page through results

* **Last Updated** sorts the table by the date each template was last changed. The newest template is first. Click **Last Updated** to reverse the order.
* The footer shows where you are, such as **1–25 of 4,321 results**. Above 10,000 matches, it shows **10,000+ results**.
* **Next** and **Previous** move one page at a time, and **Return to First Page** goes back to the start. To reach the oldest templates, reverse the sort.
* The per-page buttons show 10, 25, 50 or 100 templates on a page.
* **Save as CSV** downloads your account's templates, up to 50,000, whatever the search box holds.
* **Recent Activity**, above the table, always shows your four most recently updated templates.

A template you create, duplicate, edit or delete on this page shows in the list at once. A change made somewhere else, such as through the API, can take a few seconds to appear in search results.

## Share a search

The page URL holds the search box text and the sort. Copy the URL from your browser's address bar to bookmark a search or send it to a colleague. The link opens on the first page of results.

## Examples

**Published templates about a topic.** Find published templates that hold `welcome`.

`welcome status:published`

**A template by its exact ID.** Find the template with the ID `welcome`, and not `welcome-v2`.

`id:=welcome`

**Two words together.** Find templates that hold `welcome email`, with the words next to each other and in that order.

`"welcome email"`

**Either of two names.** Find drafts named `welcome` or `onboarding`.

`(name:welcome OR name:onboarding) status:draft`

**Everything but drafts.** Find templates that are not drafts.

`-status:draft`

**Recently changed templates.** Find templates last updated on or after 1 January 2026.

`last_updated:>=2026-01-01`

**Templates changed in a date range.** Find templates last updated in the first half of 2026, both days included.

`last_updated:2026-01-01..2026-06-30`

**One subaccount's templates.** On a primary account, find the templates that belong to subaccount 5.

`subaccount:5`

## Search syntax

A search is one or more words and filters, separated by spaces. A filter is a field name, a colon and a value, with no spaces between them, such as `status:draft`.

| Syntax | Usage | Description | Example |
|---|---|---|---|
| `:` | `field:value` | Matches part of a name, ID or description, and the whole value of any other field | `name:welc` |
| `:=` | `field:=value` | Matches the whole value | `id:=welcome` |
| space or `AND` | `term term` | Matches templates that match both | `welcome status:published` |
| `OR` | `term OR term` | Matches templates that match either | `name:welcome OR name:onboarding` |
| `-` or `NOT` | `-term` | Excludes templates that match | `-status:draft` |
| `( )` | `(term OR term) term` | Groups terms | `(name:welcome OR name:onboarding) status:draft` |
| `,` | `field:value,value` | Matches any of the values | `status:draft,published` |
| `" "` | `field:"value"` | Holds a value with a space or a special character | `name:"Re: your order"` |
| `>`, `>=`, `<`, `<=` | `field:>=date` | Compares a date | `last_updated:>=2026-01-01` |
| `..` | `field:date..date` | Matches a date range, both days included | `last_updated:2026-01-01..2026-06-30` |

Write `AND`, `OR` and `NOT` in capitals. In lowercase they are ordinary words. When a search mixes `OR` with other terms, put the `OR` part in parentheses, so it reads the way you mean it.

Quotes keep words together, but they do not change how a search matches. A quoted value still matches inside longer text, so `name:"welcome email"` also finds `New welcome emails`. A quoted value is still not case-sensitive, so `"Welcome Email"` and `"welcome email"` find the same templates. To match a whole name or ID, use `:=`.

Put a value in double quotes when it holds a space, or one of the characters `"`, `\`, `(`, `)` and `:`.

Write a date as `YYYY-MM-DD`. A date is a whole day in UTC, so `last_updated:>2026-06-30` finds templates updated after the end of 30 June.

## Fields you can search

| Field | Usage | Matches |
|---|---|---|
| `name` | `name:welc` | part of the template name |
| `id` | `id:summer` | part of the template ID |
| `description` | `description:receipt` | part of the description |
| `status` | `status:draft` | `draft`, `published`, or `published_with_draft`, which the **Status** filter calls **Unpublished changes** |
| `subaccount` | `subaccount:5` | the subaccount ID, on a primary account |
| `published` | `published:true` | `true` or `false` |
| `has_draft` | `has_draft:true` | `true` or `false` |
| `has_published` | `has_published:false` | `true` or `false` |
| `shared_with_subaccounts` | `shared_with_subaccounts:true` | `true` or `false`, for a primary account's templates |
| `last_updated` | `last_updated:2026-06-30` | the date the template was last changed |
| `created_at` | `created_at:>=2026-01-01` | the date the template was created |

A word with no field in front of it searches `name`, `id` and `description`, and `subaccount` on a primary account.

## Search with the API

The search box sends what you type to the Templates API as it is, so a search that works here works the same way in the API. See [Search](https://developers.sparkpost.com/api/search/) in the API reference.
