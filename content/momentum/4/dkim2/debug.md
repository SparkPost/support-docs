---
lastUpdated: "06/09/2026"
title: "DKIM2 Debugging Reference"
description: "Per-signature reason codes, recipe_chain detail strings, and ec_message context fields for DKIM2 sign and verify operations."
---

## Debugging

Setting `debug_level` on the `dkim2` configuration stanza routes sign and
verify activity to `paniclog`:

```
dkim2 {
  debug_level = "info"
}
```

| Level | What surfaces |
|---|---|
| `error` | Failures and resolver problems only. **Default.** |
| `warning` | Adds DNS issues and SHOULD-violation warnings. |
| `info` | Adds one DNS resolution line per verified signature plus verification failures with their cause (`bh_mismatch` with expected vs. actual hash; `sig_invalid` with selector, algorithm, signed-input length, and OpenSSL detail). |
| `debug` | Adds raw TXT-record bytes from the resolver, a per-crypto-check trace line, and the raw signed-input bytes on failure. Too noisy for steady-state production; useful when chasing a specific sign/verify mismatch. |
