---
lastUpdated: "11/26/2024"
title: "openarc – Open Source ARC"
description: "The openarc module wraps the open source libopenarc API into Momentum to provide Momentum APIs to do ARC validation verification signature signing and sealing..."
---

ARC is an acronym for Authenticated Received Chain. It’s a technology protocol defined in
[RFC8617](https://datatracker.ietf.org/doc/html/rfc8617). It provides an authenticated "chain of
custody" for a message, allowing each entity that handles the message to see what entities handled
it before and what the message's authentication assessment was at each step in the handling flow.

The openarc module add ARC capability to Momentum. It provides Lua APIs for
ARC validation on a received email, and ARC siging and sealing on an outgoing email.
When the module is enabled, ARC validation and signing/sealing can be achieved through calling these APIs from hook policies.


### <a name="modules.openarc.configuration"></a> Configuration

You need to enable the openarc module in the ecelerity configuration file to use the feature:

```
openarc {}
```

### Lua APIs and examples

[msys.validate.opendarc.verify](/momentum/4/lua/ref-msys-validate-openarc-verify)

[msys.validate.opendarc.sign](/momentum/4/lua/ref-msys-validate-openarc-sign)


### Hook points to invoke the APIs

The `msys.validate.opendarc.sign` does verification first. You should only invoke one of the APIs,
    either `verify` or `sign` but not both.
It's recommended to invoke `msys.validate.opendarc.verify` in `validate_data_spool` or
[`validate_data_spool_each_rcpt`](/momentum/3/3-api/hooks-core-validate-data-spool-each-rcpt) hook.
`msys.validate.opendarc.sign` shall be invoked in the last validation phase, in
[`post_final_validation`](/momentum/4/hooks/core-post-final-validation) hook.

See API examples for hook usages.
