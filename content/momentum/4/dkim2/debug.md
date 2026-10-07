---
lastUpdated: "10/03/2026"
title: "DKIM2 Debugging Reference"
description: "What each debug_level of the dkim2 configuration stanza writes to paniclog for DKIM2 sign and verify."
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
| `error` | Errors, such as a `sign()` whose key cannot be read. **Default.** |
| `warning` | Adds a key lookup that fails or returns a resolver error other than NXDOMAIN; a verification that stops at a limit; a `sign()` that signs with `f=exploded` although an earlier signature asked for `f=donotexplode`; and a `sign()` that signs over two fields claiming the same `i=` or the same `m=`. |
| `info` | Adds, for each key looked up in DNS, a line naming the TXT record and a line with the answer; the verdict of each `verify()` with its reason (for example `body_hash_mismatch`); a line for each `sign()` that adds fields; and each refusal by `sign()`, including one it then signs over, bridges or skips. |
| `debug` | Nothing beyond `info`. |
