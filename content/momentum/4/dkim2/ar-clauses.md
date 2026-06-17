---
lastUpdated: "06/09/2026"
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
strings for the given verify result. It returns `nil` when `result` is `nil`, or `result.signatures` is absent or
empty. It also returns `nil` when all per-signature entries are non-actionable
(`status="chain_verified"` or `status="none"`) and `result.overall` is `"none"`.

Each entry is a complete clause string (e.g.
`"dkim2=pass header.d=example.com header.s=sel-1:rsa-sha256 ..."`).
The array contains one entry per actionable signature — signatures with
`status="chain_verified"` (lower-hop: public-key verification not
performed, so no `dkim2=pass` claim can be asserted for them) and
`status="none"` (unsupported algorithm, §3.4 — no `dkim2=none` token exists)
are excluded. Extra overall clauses for chain failures or policy downgrades
are appended when applicable.

### Usage examples

```lua
-- Omit authservid so no DKIM2-only AR header is auto-prepended; build
-- the combined header below.
local result, err = msys.validate.dkim2.verify(msg, vctx)
local dkim2_clauses = msys.validate.dkim2.ar_clauses(result) or {}
local spf_clause    = build_spf_clause()   -- caller-supplied
local all_clauses   = { spf_clause }
for _, c in ipairs(dkim2_clauses) do all_clauses[#all_clauses + 1] = c end
msg:header("Authentication-Results",
           "mta-1.example.com; " .. table.concat(all_clauses, "; "),
           "prepend")
```

### Output format

> **Note on `header.s=`:** In DKIM1, `header.s=` carries just the selector name.
> In DKIM2 the `s=` wire tag encodes selector, algorithm, and signature together;
> Momentum emits only the selector and algorithm (e.g. `sel-1:rsa-sha256`) in
> `header.s=`, omitting the bulk base64 signature bytes.

Normal pass:

```
Authentication-Results: mta-1.example.com;
  dkim2=pass header.d=example.com header.s=sel-1:rsa-sha256 header.i=1 header.m=1
        header.mf=sender@example.com header.rt=rcpt@a.com
```

Transient DNS failure (`key_unavailable` → `dkim2=temperror`):

```
Authentication-Results: mta-1.example.com;
  dkim2=temperror reason="public key could not be fetched" header.d=example.com header.s=sel-1:rsa-sha256 header.i=1 header.m=1
        header.mf=sender@example.com header.rt=rcpt@a.com
```

Permanent error — key does not exist in DNS (`no_key` → `dkim2=permerror`):

```
Authentication-Results: mta-1.example.com;
  dkim2=permerror reason="public key does not exist" header.d=example.com header.s=sel-1:rsa-sha256 header.i=1 header.m=1
        header.mf=sender@example.com header.rt=rcpt@a.com
```

Failure with reason (simplified string per §10.1 — ordinals come from `header.i=` / `header.m=`):

```
Authentication-Results: mta-1.example.com;
  dkim2=fail reason="body hash mismatch" header.d=example.com header.s=sel-1:rsa-sha256 header.i=1 header.m=1
        header.mf=sender@example.com header.rt=rcpt@a.com
```

When the overall verdict is worse than the per-sig result — chain failure or
policy downgrade after a crypto pass — an extra overall clause is appended:

Chain-broken example (2-hop message: crypto passed but recipe-chain check failed):

```
Authentication-Results: mta-1.example.com;
  dkim2=pass header.d=example.com header.s=sel-2:rsa-sha256 header.i=2 header.m=2
        header.mf=bounce@forwarder.example.net header.rt=rcpt@a.com;
  dkim2=permerror reason="chain of custody broken"
```

Policy-downgrade example (`d=` does not match the `mf=` domain):

```
Authentication-Results: mta-1.example.com;
  dkim2=pass header.d=example.com header.s=sel-1:rsa-sha256 header.i=1 header.m=1
        header.mf=sender@example.com header.rt=rcpt@a.com;
  dkim2=fail reason="MAIL FROM and d= do not match"
```
