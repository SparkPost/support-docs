---
lastUpdated: "05/13/2026"
title: "spamassassin – SpamAssassin Client"
description: "The spamassassin module is a SpamAssassin client introduced in Momentum 5.0. It connects to an external spamd daemon using the SPAMC protocol, scans a message, and stores the verdict, score, threshold, and symbol list as message context variables that policy and hooks can consume."
---

The spamassassin module is a SpamAssassin client introduced in Momentum 5.0. It connects to an external spamd daemon using the SPAMC protocol, scans a message, and stores the verdict, score, threshold, and symbol list as message context variables that policy and hooks can consume.

> **NOTE:** This module replaces the legacy, Sieve-based `spamc` module, which was never a supported product feature. New deployments should use `spamassassin`.

The spamassassin module does not bundle the SpamAssassin engine. You must install and operate `spamd` separately by following the upstream [Apache SpamAssassin documentation](https://spamassassin.apache.org/), then point this module at it via the `daemon` configuration option.

### <a name="modules.spamassassin.configuration"></a> Configuration

The spamassassin module is a singleton in the global scope and is declared without an instance name. The following is a minimal configuration:

<a name="example.spamassassin.config"></a>

```
spamassassin {
  daemon = "127.0.0.1:783"
  timeout = 30
  max_size = 51200
}
```

The module reads its configuration during initialization and resolves `daemon` into a sockaddr at that time; changes to these options require a configuration reload to take effect.

The following configuration options are available:

<dl class="variablelist">

<dt>daemon</dt>

<dd>

The `host:port` address of the spamd daemon to connect to. Either an IPv4 or IPv6 literal address (or a hostname that resolves to one) may be used. Defaults to `"localhost:783"`.

</dd>

<dt>timeout</dt>

<dd>

Per-I/O timeout, in seconds, applied to each `poll` while writing the request to spamd and while reading the response. Defaults to `30`.

</dd>

<dt>max_size</dt>

<dd>

The maximum number of body bytes sent to spamd for any one message. Messages whose body exceeds this size are truncated at this boundary before being sent; the remainder is not scanned. Defaults to `51200` (50 KiB).

</dd>

</dl>

### <a name="modules.spamassassin.protocol"></a> Protocol

The module uses the SPAMC `SYMBOLS` request (`SYMBOLS SPAMC/1.2`) with a `Content-Length` header. It expects a `SPAMD/1.1` response with a zero status code, an `EX_OK` indicator, and a `Spam:` line of the form

```
Spam: true ; 7.12 / 5.00
```

followed by the matched rule symbols on the next line. Any other response shape, a non-zero status, or an I/O failure causes the scan to be marked as failed (see `spamc_status` below).

### <a name="modules.spamassassin.context.variables"></a> Message Context Variables

After `spamc_scan` returns, the following variables are available on the message in the `ECMESS_CTX_MESS` scope. Policy and hooks can read them with `msys.core.ec_message_context_get(msg, msys.core.ECMESS_CTX_MESS, "<name>")` or the equivalent C API.

<dl class="variablelist">

<dt>spamc_status</dt>

<dd>

`"ok"` if the scan completed and a valid `SPAMD/1.1` response was parsed; `"failed"` otherwise. When the status is `"failed"`, the underlying error is logged to the paniclog and the remaining variables below are not set for the current scan.

</dd>

<dt>spamc_spam</dt>

<dd>

`"true"` if spamd classified the message as spam; `"false"` otherwise. Set only when `spamc_status` is `"ok"`.

</dd>

<dt>spamc_score</dt>

<dd>

The SpamAssassin score reported by spamd, formatted as `"%.2f"`. Set only when `spamc_status` is `"ok"`.

</dd>

<dt>spamc_thresh</dt>

<dd>

The required score (spam threshold) reported by spamd, formatted as `"%.2f"`. Set only when `spamc_status` is `"ok"`.

</dd>

<dt>spamc_symbols</dt>

<dd>

The comma-separated list of SpamAssassin rule symbols that matched the message, as returned on the line following the `Spam:` line. Set only when `spamc_status` is `"ok"`.

</dd>

</dl>

### <a name="modules.spamassassin.api"></a> Programmatic Use

Scanning is **not** automatic. The spamassassin module does not register any validation hooks of its own; nothing happens until something explicitly calls the scan entry point on a message. That call is most commonly made from a Lua policy hook that runs after the message body has been spooled.

#### <a name="modules.spamassassin.lua"></a> Lua

The scan entry point is exposed to Lua under the legacy `msys.spamc` namespace (kept for compatibility with policy written against the older Sieve-based `spamc` module):

```
msys.spamc.spamc_scan(msg)
```

The call is synchronous and blocking with respect to the `spamd` exchange; invoke it from a hook that runs in an async/IO context, such as `validate_data_spool`, where the message body has been spooled and a blocking call is safe. After it returns, read the `spamc_*` variables off the message context and act on them.

<a name="example.spamassassin.lua"></a>

The following scriptlet is adapted from `tests/perl-tests/generic/spamc/basic_lua.t` and shows the canonical pattern — call the scan, branch on `spamc_status`, then on `spamc_spam`, and use `spamc_score`, `spamc_thresh`, and `spamc_symbols` to shape the SMTP response or downstream policy:

```lua
require("msys.core");
require("msys.extended.message");
require("msys.spamc");

local mod = {};

function mod:validate_data_spool(msg, ac, vctx)
  msys.spamc.spamc_scan(msg)

  local status  = msg:context_get(msys.core.ECMESS_CTX_MESS, "spamc_status")
  local is_spam = msg:context_get(msys.core.ECMESS_CTX_MESS, "spamc_spam")
  local score   = msg:context_get(msys.core.ECMESS_CTX_MESS, "spamc_score")
  local thresh  = msg:context_get(msys.core.ECMESS_CTX_MESS, "spamc_thresh")
  local symbols = msg:context_get(msys.core.ECMESS_CTX_MESS, "spamc_symbols")

  if status == "failed" then
    -- spamd was unreachable or returned an unparseable response;
    -- the underlying error is already in the paniclog.
    vctx:set_code(451, "spamc error")
  elseif is_spam == "true" then
    vctx:set_code(550,
      string.format("spam %s %s %s", score, thresh, symbols))
  else
    vctx:set_code(250,
      string.format("ham %s %s %s", score, thresh, symbols))
  end

  return msys.core.VALIDATE_CONT
end

msys.registerModule("spamc_scan", mod);
```

To activate the scriptlet, load it through the [scriptlet](/momentum/4/modules/scriptlet) module alongside the spamassassin configuration in [“spamassassin Configuration”](/momentum/4/modules/spamassassin#example.spamassassin.config):

```
scriptlet "scriptlet" {
  script "spamc_scan" { source = "/etc/ecelerity/scriptlets/spamc_scan.lua" }
}
```

Instead of writing the SMTP code, an integration may prefer to tag the message and let a later hook deliver it. The relay-webhook integration uses this pattern (see `modules/cloud/scriptlets/msys/sparkpost/relay_webhook.lua`), writing the verdict into a custom header so that downstream consumers can act on it:

```lua
local spam_header = "X-MSYS-Spam-Status"
if status == "ok" then
  if is_spam == "true" then
    msg:header(spam_header, string.format("Yes, score=%s required=%s tests=%s",
                                          score, thresh, symbols))
  else
    msg:header(spam_header, string.format("No, score=%s required=%s tests=%s",
                                          score, thresh, symbols))
  end
else
  msg:header(spam_header, "failed")
end
```

#### <a name="modules.spamassassin.capi"></a> C

The Lua binding is a thin wrapper over the C entry point declared in `modules/generic/ec_spamassassin.h`:

```
SPAMC_EXPORT(void) spamc_scan(ec_message *m);
```

The same blocking-I/O contract applies — call it from an async thread (for example, via `sp_async_thread_pool_run`) so the main scheduler is not held up while `spamd` processes the message.

### <a name="modules.spamassassin.notes"></a> Notes

This module is a singleton and does not accept per-instance configuration. Loading it more than once is not supported.

For deployment, package SpamAssassin separately and ensure `spamd` is reachable at the address configured under `daemon` before starting Momentum; otherwise every scan will be recorded with `spamc_status = "failed"`.
