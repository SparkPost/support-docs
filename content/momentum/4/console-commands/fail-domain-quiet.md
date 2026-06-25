---
lastUpdated: "06/24/2026"
title: "fail domain quiet"
description: "fail domain quiet ec_console selectively fail messages by metadata or RFC822 header match without bounces optional --meta --header filter --dry-run preview"
---

<a name="console_commands.fail_domain_quiet"></a> 
## Name

fail domain quiet — fail messages for a domain without generating bounces

## Synopsis

`fail domain quiet` [ `--dry-run` ] [ `--meta` *`key`* *`value`* | `--header` *`header_name`* *`header_line`* ] { *`domain_name`* } [ *`note`* … ]

<a name="idp12914352"></a> 
## Description

The **fail domain quiet**              command allows the administrative failure of all messages bound for the specified domain without sending a bounce message, even if Generate_Bounces is set in the configuration file. Its usage is similar to fail domain:

```
10:47:35 /tmp/2025> fail domain quiet unresolvableproblems.com
unresolvableproblems.com purged, 62415 messages failed.
```

<a name="fail_domain_quiet_selective"></a>
### Selective purge (optional filter)

You may restrict which messages are failed by adding **at most one** optional clause **before** the domain name:

| Clause | Meaning |
| --- | --- |
| `--meta` *key* *value* | Fail only messages whose message **or** connection validation context has *key* with exactly *value*. Message context is checked first; connection context is used when the key is not set on the message (for example variables provided through **XSETCONTEXT** during injection). |
| `--header` *name* *line* | Fail only messages where the first MIME part has header *name* and **one physical line** of that header’s value equals *line* (useful when a header is folded across lines). |

<a name="header_filter_physical_lines"></a>
**Folded headers / multi-line values:** Matching uses **physical** RFC822 header lines only. Each continuation line created by folding is tested separately against the single *line* operand. There is **no** match against the unfolded header body as one multi-line string. The *line* you pass on the ec_console command is **one** token string; it must equal **exactly one** stored physical line of that header’s value (including typical leading whitespace on folded continuation lines). If your selection logic needs to treat the whole logical header value as one unit, prefer **`--meta`** or external tooling.

You cannot combine `--meta` and `--header` in the same command. With no filter, every queued message for the domain is failed (original behavior).

Any tokens after the domain name are joined into an optional administrative failure note (same as without a filter).

```
10:47:35 /tmp/2025> fail domain quiet --meta mo_campaign_id summer-sale unresolvableproblems.com
unresolvableproblems.com purged. 12 messages failed.
```

<a name="fail_domain_quiet_dry_run"></a>
### Preview without failing (`--dry-run`)

Add **`--dry-run`** to see what the command *would* do **without failing any messages**. The queue is left untouched; instead, each message that would be failed is listed on its own line, followed by a summary count. Each line shows the message's **spool id**, **domain**, and **envelope** sender and recipient:

```
10:47:35 /tmp/2025> fail domain quiet --dry-run unresolvableproblems.com
  3A/0F-04217-1A3F9C2B  domain=unresolvableproblems.com from=<news@sender.com> to=<user@unresolvableproblems.com>
  7C/1B-04217-2B4E0D8A  domain=unresolvableproblems.com from=<promo@sender.com> to=<admin@unresolvableproblems.com>
  ...
[dry-run] unresolvableproblems.com: 62415 messages would be failed. (Showing first 25; 62390 more not listed.)
```

Key points:

- **Nothing is failed.** The command only reports what a real run would touch, so it is safe to run first to confirm scope.
- **The listing is capped at the first 25 matching messages.** When more match, the trailing `[dry-run]` summary reports the total count and how many were not listed. When 25 or fewer match, the parenthetical is omitted and every match is shown.
- **`--dry-run` may be placed anywhere in the command** — before or after the `--meta` / `--header` clause, or after the domain. It is stripped wherever it appears and is **never** consumed as part of the *note*, so a preview can never accidentally become a real purge.
- **It combines with the optional filter**, so you can confirm exactly which messages a selective purge would remove before running it for real.

<a name="idp12917376"></a> 
## See Also

[fail domain](/momentum/4/console-commands/fail-domain) · [fail all quiet](/momentum/4/console-commands/fail-all-quiet)
