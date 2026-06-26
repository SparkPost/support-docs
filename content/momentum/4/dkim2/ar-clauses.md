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

Failure with reason (simplified string per §11.1 — ordinals come from `header.i=` / `header.m=`):

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
