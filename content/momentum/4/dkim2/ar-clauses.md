---
lastUpdated: "10/03/2026"
title: "DKIM2 Authentication-Results — ar_clauses()"
description: "Reference for the msys.validate.dkim2.ar_clauses() Lua API: usage examples and Authentication-Results output format."
---

## Authentication-Results Output

When `authservid` is supplied to `verify()`, Momentum automatically builds
and prepends a fresh `Authentication-Results:` header (RFC 8601 §5 — an MTA
MUST NOT add to an existing AR header):

```lua
msys.validate.dkim2.verify(msg, vctx, {
  authservid = "mta-1.example.com",
})
```

For full control — or to merge DKIM2 results with other authentication methods
(SPF, DKIM1, ARC) into a single combined header — use
`msys.validate.dkim2.ar_clauses(result)`.

`ar_clauses()` returns an array of DKIM2 `Authentication-Results:` clause
strings for the given verify result, one for each entry of `result.ar`. An
entry whose result is `none` — an unsigned message, or a signature set aside
under §3.4 or for a key in testing mode — gives no clause. `ar_clauses()`
returns `nil` when `result` is `nil` or no entry gives a clause.

Each entry is a complete clause string, for example
``dkim2=pass header.d=example.com header.s="sel-1:rsa-sha256" ...``.

### Usage examples

```lua
require("msys.core")
require("msys.validate.dkim2")

local mod = {}

function mod:validate_data_spool_each_rcpt(msg, ac, vctx)
  -- Pass an empty options table (no authservid) so verify() does not
  -- auto-prepend a DKIM2-only AR header; build the combined header below.
  local result, err = msys.validate.dkim2.verify(msg, vctx, {})
  if not result then
    msys.log(msys.core.LOG_WARNING, "dkim2 verify error: " .. (err or "unknown"))
    vctx:set_code(451, "4.7.5 DKIM2 verification unavailable; please retry")
    return msys.core.VALIDATE_DONE
  end

  local dkim2_clauses = msys.validate.dkim2.ar_clauses(result) or {}
  local spf_clause    = build_spf_clause()   -- caller-supplied; returns nil when absent
  local all_clauses   = {}
  if spf_clause then all_clauses[#all_clauses + 1] = spf_clause end
  for _, c in ipairs(dkim2_clauses) do all_clauses[#all_clauses + 1] = c end
  if #all_clauses > 0 then
    msg:header("Authentication-Results",
               "mta-1.example.com; " .. table.concat(all_clauses, "; "),
               "prepend")
  end

  -- NOTE: This example only shows AR header construction.
  -- You must still enforce SMTP policy based on result.overall —
  -- see the full skeleton in /momentum/4/dkim2/verify for the
  -- set_code / VALIDATE_DONE pattern for fail, permerror, and temperror.
  return msys.core.VALIDATE_CONT
end

msys.registerModule("my_combined_ar_policy", mod)
```

### Output format

There is one clause for each signature that was checked, in ascending `i=`
order, followed by one for each problem that no signature accounts for, such
as a `Message-Instance` that no signature covers. Each clause has the form:

```
dkim2=<result> [reason=<text>] [header.d=<domain>] [header.s=<selector>:<algorithm>]
  [header.i=<i>] [header.m=<m>] [header.mf=<address>] [header.rt=<addresses>]
```

`result` is `pass`, `fail`, `permerror` or `temperror`. `reason=` is the
problem's text, in the draft's wording where it has one, with its values
filled in, for example `Message Instance m=1 header hash sha256 mismatch`;
it is present on every clause except a plain pass, and ends with the
problem's detail in parentheses when it has one. Every value is written as
it stands when it is a plain token, and otherwise as an RFC 8601
quoted-string. A value with a colon, an at sign or a comma is quoted, so
`header.s`, `header.mf` and `header.rt` are usually quoted and `header.d` is
not. A control character other than tab, or a byte that is not ASCII,
becomes `?`. `header.i=` (the signature's `i=`) and `header.m=` (its `m=`)
link the clause to its signature.

A `header.rt` too long for one line keeps its first entries and the number
of the rest, for example
`header.rt="a@example.com,b@example.com,c@example.com,...(+97 more)"`. When
the field `verify()` adds would pass 8 KiB, Momentum shortens its clauses,
and a comment counts any clauses it leaves out.

> **Note on `header.s=`:** In DKIM1, `header.s=` carries just the selector name.
> In DKIM2 the `s=` wire tag encodes selector, algorithm, and signature together;
> Momentum emits only the selector and algorithm of the first sig-set (e.g.
> `"sel-1:rsa-sha256"`) in `header.s=`, omitting the bulk base64 signature bytes.

Normal pass:

```
Authentication-Results: mta-1.example.com; dkim2=pass header.d=example.com
	header.s="sel-1:rsa-sha256" header.i=1 header.m=1
	header.mf="sender@example.com" header.rt="rcpt@a.com"
```

A signature below a `{"b":null}` recipe passes with a `reason=` saying that
its body was not verified.

Transient DNS failure (`key_unavailable`):

```
Authentication-Results: mta-1.example.com; dkim2=temperror
	reason="DKIM2-Signature i=1 public key sel-1 could not be fetched (DNS lookup failed for sel-1._domainkey.example.com)"
	header.d=example.com header.s="sel-1:rsa-sha256" header.i=1 header.m=1
	header.mf="sender@example.com" header.rt="rcpt@a.com"
```

Hash mismatch (`header_hash_mismatch`):

```
Authentication-Results: mta-1.example.com; dkim2=fail
	reason="Message Instance m=1 header hash sha256 mismatch"
	header.d=example.com header.s="sel-1:rsa-sha256" header.i=1 header.m=1
	header.mf="sender@example.com" header.rt="rcpt@a.com"
```

A multi-hop message gives one clause for each signature, and a failure in
a lower hop is reported on that hop's clause:

```
Authentication-Results: mta-1.example.com; dkim2=fail
	reason="Message Instance m=1 body hash sha256 mismatch (hash_mismatch)"
	header.d=sender.example header.s="sel-1:rsa-sha256" header.i=1 header.m=1
	header.mf="alice@sender.example" header.rt="list@forwarder.example.net";
	dkim2=pass header.d=forwarder.example.net header.s="sel-2:rsa-sha256"
	header.i=2 header.m=2 header.mf="bounce@forwarder.example.net"
	header.rt="rcpt@a.com"
```

An entry in `result.ar` that names no signature gets a clause without
`header.i=`. This is the case when verification stops at a limit, such as
a signature field larger than the limit allows:

```
Authentication-Results: mta-1.example.com; dkim2=permerror
	reason="DKIM2 verification failed: a limit was exceeded"
```
