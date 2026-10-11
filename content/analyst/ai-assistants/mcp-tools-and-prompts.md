---
lastUpdated: '10/10/2026'
title: 'Inbox Tracker MCP Tools and Example Prompts'
description: 'Every tool the Inbox Tracker & Competitive Tracker MCP server offers, what it needs, whether it reads or changes data, and prompts to try.'
---

Your assistant picks the tools. You don't need to name them, but knowing what's there helps you ask better questions. A tool only appears if your subscription includes what it needs. To see what's on for your account, ask:

```text
What can I do with the Inbox Tracker connector?
```

**Access** says whether a tool only reads data or changes your account. Changes need the Manager role and the **Optional: allow changes** box ticked when you signed in.

## Tools

### Account and setup

| Tool | What it does | Access | Needs |
|---|---|---|---|
| `account_get_context` | Your account, child accounts, tracked domains against your limit, seed-test usage, and which areas are on or hidden | Reads | Any eDataSource subscription |
| `account_list_domains` | Your tracked domains, pending domain requests and domain limit | Reads | Inbox Tracker |
| `account_add_domain` | Starts tracking a sending domain and returns the DNS TXT record to publish | Changes | Inbox Tracker, domain management on your account |
| `account_validate_domain` | Checks a pending domain's TXT record and adds the domain once it's found | Changes | Inbox Tracker, domain management on your account |
| `account_remove_domain` | Stops tracking a domain, or cancels a pending request. Asks you to confirm | Changes | Inbox Tracker, domain management on your account |
| `account_get_seed_list` | The seed addresses to include in a send, with each one's mailbox provider and region | Reads | Inbox Tracker with seed lists |
| `account_get_intelliseed_list` | IntelliSeed™ addresses to include in a send, from a saved filter set or ad-hoc options | Reads | Inbox Tracker with seed lists |
| `account_list_intelliseed_filter_sets` | Your saved IntelliSeed™ filter sets | Reads | Inbox Tracker |
| `account_add_intelliseed_filter_set` | Saves a named IntelliSeed™ filter set | Changes | Inbox Tracker |
| `account_remove_intelliseed_filter_set` | Removes a saved filter set. Asks you to confirm | Changes | Inbox Tracker |

### Brands, companies and domains

| Tool | What it does | Access | Needs |
|---|---|---|---|
| `discover_search_entities` | Finds brands, companies, domains, ESPs and industries by name | Reads | Any eDataSource subscription |
| `discover_get_entity` | One brand, company, domain, ESP or industry, with its related brands, domains or parent company | Reads | Any eDataSource subscription |

### Inbox placement

| Tool | What it does | Access | Needs |
|---|---|---|---|
| `inbox_search_campaigns` | Your campaigns in a period, with inbox, spam and missing percentages | Reads | Inbox Tracker |
| `inbox_get_campaign` | One of your campaigns with placement by mailbox provider, and optionally its sending IPs, Gmail tabs and authentication results | Reads | Inbox Tracker |
| `inbox_list_campaign_messages` | The individual messages observed for a campaign, where each landed, and optionally their headers | Reads | Inbox Tracker |
| `inbox_get_domain_deliverability` | Where mail from a tracked domain landed over a period, overall and per mailbox provider | Reads | Inbox Tracker |
| `inbox_get_sending_ip_stats` | Placement and blocklist status for each IP your campaigns were sent from | Reads | Inbox Tracker |

### Reputation

| Tool | What it does | Access | Needs |
|---|---|---|---|
| `reputation_get_google_postmaster` | What Google reports in Postmaster Tools: spam rate, authentication, delivery errors, feedback loop and sender-requirements compliance | Reads | Google Postmaster Tools connected |
| `reputation_get_google_share_address` | The address to share a domain with in Google Postmaster Tools, with the steps. Claims the address for your account, so it asks you to confirm | Changes | Google Postmaster Tools connected |
| `reputation_get_yahoo_domain_metrics` | Yahoo-reported inbox, spam and complaint volumes for your domains | Reads | Yahoo sender data |
| `reputation_get_yahoo_campaign_metrics` | Yahoo's per-campaign opens, clicks, read time and spam marks, keyed by your campaign header | Reads | Yahoo premium |
| `reputation_get_spam_traps` | Spam-trap hits for your domains or IPs by trap type and network, rolled up by campaign or listed one by one | Reads | Spam Trap Monitor |
| `reputation_lookup_blocklists` | Whether a domain or IP is on Spamhaus, Barracuda, SpamCop, Cloudmark and other blocklists, and why | Reads | Inbox Tracker |
| `reputation_get_dns_auth` | A domain's live SPF, DKIM and DMARC records, checked, plus DKIM selectors seen in its recent mail | Reads | Inbox Tracker |

### Competitive Tracker

These tools work on any sender, using what eDataSource's consumer panel observes. Panel data is sampled and projected. For your own domains, the inbox placement tools above are the better source.

| Tool | What it does | Access | Needs |
|---|---|---|---|
| `competitive_search_campaigns` | Any sender's campaigns, filtered by subject, sender, brand, company, industry, ESP, country or volume | Reads | Competitive Tracker API access |
| `competitive_get_campaign` | One observed campaign: placement, read rate, ESPs, and optionally IPs, links and target country | Reads | Competitive Tracker API access |
| `competitive_get_domain_profile` | How a sending domain behaves: volume, placement by mailbox provider, send days, cadence and list size | Reads | Competitive Tracker API access |
| `competitive_get_brand_profile` | A brand's top sending domains, or the volume and ESPs behind a list of domains | Reads | Competitive Tracker API access |
| `competitive_get_ip_deliverability` | Placement, volume and sending domains for any IP or a range of up to 256 addresses | Reads | Competitive Tracker API access |
| `competitive_get_audience_overlap` | Which other senders share a domain's audience | Reads | Competitive Tracker API access |

Competitive Tracker API access means Competitive Tracker plus an API key with Competitive Tracker access on your account.

### Engagement analytics

For accounts that use eDataSource's tracking snippet. Opens and clicks recorded by your sending platform aren't here.

| Tool | What it does | Access | Needs |
|---|---|---|---|
| `analytics_list_campaigns` | Your engagement-tracking campaigns and their status | Reads | Engagement analytics |
| `analytics_get_campaign` | One engagement-tracking campaign, its linked email campaigns and its tracking snippet | Reads | Engagement analytics |
| `analytics_list_campaign_events` | The opens recorded for a campaign on one day, with mail client, device and location | Reads | Engagement analytics |

### Built-in prompt

The server also offers **Investigate an inbox placement drop**. Give it one of your tracked domains and it walks your assistant through placement by provider against the previous period, Google and Yahoo data, spam traps, blocklists, DNS authentication and a comparison with similar senders. In clients that show MCP prompts, it's in the prompt or slash-command menu.

## Example prompts

Use your own domains, campaigns and competitors in place of the examples.

```text
How did my campaigns from example.com place over the last 7 days? Show inbox, spam and missing by mailbox provider.
```

```text
Our Gmail inbox rate dropped this week for example.com. Check Postmaster Tools, spam traps, blocklists and DNS authentication and tell me the likely cause.
```

```text
Give me the seed list and IntelliSeed addresses I should add to tomorrow's send, US mailboxes only.
```

```text
Is 203.0.113.25 or example.com on any blocklist right now? If so, why?
```

```text
Which of my campaigns this month hit spam traps, and what kind of traps?
```

```text
What has Acme Retail sent in the last 30 days? Show projected volume, subject lines and how they placed.
```

```text
Which senders share the most subscribers with example.com, and how often do they mail?
```

```text
Add news.example.com as a tracked domain and tell me the DNS record to publish. Don't change anything else.
```
