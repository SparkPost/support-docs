---
lastUpdated: "11/26/2024"
title: "openarc – Open Source ARC"
description: "The openarc module wraps the open source libopenarc API into Momentum to provide Momentum APIs to do ARC validation verification signature signing and sealing..."
---

ARC is an acronym for Authenticated Received Chain. It’s a technology protocol defined in
[RFC8617](https://datatracker.ietf.org/doc/html/rfc8617). It provides an authenticated "chain of
custody" for a message, allowing each entity that handles the message to see what entities handled
it before and what the message's authentication assessment was at each step in the handling flow.

The openarc module adds ARC capability to Momentum. It provides Lua and C APIs for
ARC validation on a received email, and ARC siging and sealing on an outgoing email.
When the module is enabled, ARC validation and signing/sealing can be achieved through calling these APIs from hook policies.


## <a name="modules.openarc.configuration"></a> Configuration

You need to enable the openarc module in the ecelerity configuration file to use the feature:

```
openarc {}
```

The only configuration option available to the `openarc` module is `debug_level`.


## Lua APIs and examples

[msys.validate.openarc.verify](/momentum/4/lua/ref-msys-validate-openarc-verify)

[msys.validate.openarc.sign](/momentum/4/lua/ref-msys-validate-openarc-sign)


## C APIs

All the related C structures and C API functions are defined in the header file
 `validate/ec_openarc.h`. Please refer to the header file for the usage of the C structures and
 functions. Please contact support if further assistance is needed.


## Hook points to invoke the APIs

Invoke `msys.validate.openarc.verify` to do ARC verification on a received message. It would verify
the existing ARC headers, including the AS (ARC Seal) and the AMS (ARC Message Signature). ARC
verification shall be done before any potential message modifications, in `validate_data_spool` or
[`validate_data_spool_each_rcpt`](/momentum/3/3-api/hooks-core-validate-data-spool-each-rcpt) hook.

Invoke `msys.validate.openarc.sign` to do ARC signing/sealing to add the ARC headers. It should
 happen after all possible message modifications are done, in the regular
 [`final_validation`](/momentum/3/3-api/hooks-core-final-validation) hook, or the new
 [`post_final_validation`](/momentum/4/hooks/core-post-final-validation) hook.
 Any message modification after `msys.validate.openarc.sign` is called can break the integrity of
 the ARC headers added during ARC signing.

Since ARC signing requires the ARC chain verification result (aka `cv`). `msys.validate.openarc.sign`
 will get the `cv` value from the `ec_message` context variable `arc_cv` for signing. If `arc_cv` is not
 set, indicating a not-yet-done ARC verification, `msys.validate.openarc.sign` will do ARC verification
 implicitly.

If message modification is expected, an MTA shall call `msys.validate.openarc.verify` first (to get
 `arc_cv` set) and then `msys.validate.openarc.sign` later in a different hooks, as recommended above.

If there is absolutely no message modification, e.g. for a passthrough MTA which doesn't alter the
message other than ARC signing, calling `msys.validate.openarc.sign` alone can have some performance
benefits: the message will be scanned once for both ARC verification and signing.

### Example 1:
The following policies define an intermediate MTA which does ARC signing and can potentially
 modify the email, e.g. through DKIM signing, engagement tracking insertion and modification, etc.
 In such case, ARC verify needs to happen first, followed by the logic to alter the message (e.g.
 DKIM signing in the example), and then finally ARC sign at the last.

```
require("msys.core");
require("msys.extended.message");
require("msys.validate.openarc");
local mod = {};

function mod:validate_data_spool(msg, ac, vctx)
  -- do ARC verify
  msys.validate.openarc.verify(msg)
  local cv = msg:context_get(msys.core.ECMESS_CTX_MESS, "arc_cv")
  if cv then
    print("ARC validation result: ", cv)
  else
    print("Failed to do ARC validation. Check paniclog for reasons.")
  end
end

function mod:core_final_validation(msg, accept, vctx)
  -- do DKIM signing
  local base_domain = 'ectest.example.com';
  local header_canon = 'relaxed';
  local body_canon = 'relaxed';
  local digest = 'rsa-sha1';
  local identity = '\@ectest.example.com';
  local selector = 'dkim-s1024';
  local key_file = '/opt/msys/ecelerity/etc/conf/default/dk/ectest.example.com/dkim-s1024.key';
  local body_length_limit = 0;

  local options = {};
  options["base_domain"] = base_domain
  options["header_canon"] = header_canon
  options["body_canon"] = body_canon
  options["digest"] = digest
  options["selector"] = selector
  options["keyfile"] = key_file
  options["identity"] = identity

  msys.validate.opendkim.sign(msg, vctx, options);
end

function mod:core_post_final_validation(msg, accept, vctx)
  -- do ARC sign
  local sealer = {}
  sealer.signing_domain = "sparkpost.com"
  sealer.selector = "dkim-s1024"
  sealer.keyfile = "path-to-keyfile"
  sealer.headerlist = "From:Subject:Date:To:MIME-Version:Content-Type:DKIM-Signature"
  sealer.oversign_headerlist = "From:To:Subject"

  msys.validate.openarc.sign(msg, sealer)

  -- check sign/seal result
  local ok = msg:context_get(msys.core.ECMESS_CTX_MESS, "arc_seal")
  if ok == nil or ok == '' then
    print("ARC seal failed. No ARC set add! Check paniclog for reasons.")
  elseif ok == "skip" then
  	print("ARC seal skipped. No ARC set add: ARC chain failed before reaching me.")
  else
    print("ARC seal ok. ARC set added!")
  end
end

msys.registerModule("arc_sign", mod);
```

### Example 2:
The following policy defines an intermediate MTA relay which does not modify the message other than ARC signing.
 In such case, ARC verify and ARC sign can be done at the same time, in any hook in DATA phase
 which does not block the main tasks.

```
require("msys.core");
require("msys.validate.openarc");
local mod = {};

function mod:core_final_validation(msg, accept, vctx)
  -- do ARC signing (will trigger ARC verification implicitly)
  local sealer = {}
  sealer.signing_domain = "sparkpost.com"
  sealer.selector = "dkim-s1024"
  sealer.keyfile = "path-to-keyfile"
  sealer.headerlist = "From:Subject:Date:To:MIME-Version:Content-Type"
  sealer.oversign_headerlist = "From:To:Subject"

  msys.validate.openarc.sign(msg, sealer)

  -- check sign/seal result
  local ok = msg:context_get(msys.core.ECMESS_CTX_MESS, "arc_seal")
  if ok == nil or ok == '' then
    print("ARC seal failed. No ARC set add! Check paniclog for reasons.")
  elseif ok == "skip" then
  	print("ARC seal skipped. No ARC set add: ARC chain failed before reaching me.")
  else
    print("ARC seal ok. ARC set added!")
  end
end


msys.registerModule("arc_sign", mod);
```

