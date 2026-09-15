---
lastUpdated: "09/15/2026"
title: "DKIM Validation"
description: "When DKIM is enabled as described in Section 23 1 DKIM Signing DKIM signature verification is performed on all inbound messages received via SMTP Unlike DKIM signing verification of DKIM messages is driven only through Lua policy Links to the appropriate Lua functions are listed at Section 71 50 2..."
---

When DKIM is enabled as described in [“DKIM Signing”](/momentum/4/using-dkim#using_dkim.signing), DKIM signature verification is performed on all inbound messages received via SMTP. Unlike DKIM signing, verification of DKIM messages is driven only through Lua policy. Links to the appropriate Lua functions are listed at [“Lua Functions”](/momentum/4/modules/opendkim#modules.opendkim.lua.functions).

When a message is received, an attempt is made to locate a DKIM-Signature header. If found, the header is parsed for format and content. If the header is valid, the signature value is extracted from the header and the appropriate DNS operations are performed to find the public key for the signer. The message is then canonicalized as indicated by the signature header. Canonicalization includes all headers listed in the signature header, the body of the message, and the signature header itself. The canonicalized message is digested for verification as indicated by the signature header using the retrieved public key and the signature value. The results "dkim=pass" or "dkim=*`reason for failure`*             " are included in an Authentication-Results header prepended to the message. If the message does not contain a DKIM-Signature header, either no Authentication-Results header will be prepended to the message or DKIM results will not appear in an Authentication-Results header prepended because of the actions of a different validation action.

## Removing incoming authentication results

An incoming message can contain `Authentication-Results: mx.example.net; spf=pass` even when `mx.example.net` has never seen it. A policy that publishes results as `mx.example.net` must remove that incoming claim before adding its own results. Headers naming other authentication services do not establish trust merely because they are retained.

Load the [msys.validate.authentication_results.remove](/momentum/4/lua/ref-msys-validate-authentication-results-remove) helper in your Lua policy (available starting in Momentum 5.4):

```lua
local authentication_results = require("msys.validate.authentication_results")
```

In the inbound `validate_data` hook, finish DKIM and ARC verification against the original message, then call the helper once, before adding any local authentication result headers:

```lua
authentication_results.remove(msg)
```

Verification comes first because an incoming signature may cover an `Authentication-Results` field. Cleanup removes every field whose leading authentication service identifier matches `external_hostname`, falling back to [hostname](/momentum/4/config/ref-hostname) when it is unset. Matching ignores case, recognizes equivalent internationalized domain names, and accepts quoted identifiers, comments, and folded whitespace. Encoded values are checked too, so a claim cannot become local only after the webhook decodes it. Fields naming other services keep their original order and encoding. `ARC-Authentication-Results` fields are retained. If your policy publishes results under a different identifier, pass that exact identifier as the second argument.

On a trusted internal relay, skip this cleanup only when the preceding trusted hop has already removed forged claims. Decide that from trusted connection information, never from a header supplied by the sender. Using the same identifier on multiple internal hops otherwise causes a later hop to remove the preceding hop's results. Cleanup is opt-in for custom on-premises policies; loading this helper does not register a hook.

The cloud inbound relay webhook policy performs cleanup by default for messages it validates. Its SPF and DKIM results both use `external_hostname`, with the same `hostname` fallback. A deployment that accepts mail only from trusted relays that already perform cleanup can preserve their results by setting this in `sparkpost_site_config.lua`:

```lua
msys.sparkpost.config.relay_webhook.remove_local_authentication_results = false
```

The default is `true`. This option controls removal of incoming local results; SPF and DKIM validation still run. Outbound messages are outside this policy's cleanup scope.
