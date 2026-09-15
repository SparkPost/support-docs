---
lastUpdated: "09/15/2026"
title: "msys.validate.authentication_results.remove"
description: "Remove incoming Authentication-Results fields that claim to come from the local authentication service before publishing local results."
---

<a name="lua.ref.msys.validate.authentication_results.remove"></a>

## Name

msys.validate.authentication_results.remove - Remove incoming authentication results claiming a local identity

## Synopsis

`msys.validate.authentication_results.remove(msg, authservid)`

`msg: userdata, ec_message type`

`authservid: string, optional`

## Description

This function removes every `Authentication-Results` field whose leading authentication service identifier matches `authservid`. If omitted, the identifier is `external_hostname`, falling back to [hostname](/momentum/4/config/ref-hostname). A supplied identifier must be a nonempty string and should be the same identifier your policy uses when publishing its results.

Matching ignores case, recognizes equivalent internationalized domain names, and handles quoted identifiers, comments, folded whitespace, and RFC2047-encoded values. Fields naming other services keep their original position and encoding. `ARC-Authentication-Results` fields are retained. Retaining a field does not establish trust in its contents.

Call this function in the inbound `validate_data` hook after DKIM and ARC verification and before adding local authentication result headers. An incoming signature may cover the fields being removed, so verification must finish first. Repeated calls also remove any matching local results added since the previous call.

```lua
local authentication_results = require("msys.validate.authentication_results")
authentication_results.remove(msg)
```

The function returns no values. Loading the module does not register a policy hook. See [Removing incoming authentication results](/momentum/4/using-dkim-validation#removing-incoming-authentication-results) for trusted relay handling and the cloud policy setting.

Available starting in Momentum 5.4.

## See Also

[DKIM Validation](/momentum/4/using-dkim-validation), [msys.validate.opendkim.verify](/momentum/4/lua/ref-msys-validate-opendkim-verify), [msg:header](/momentum/4/lua/ref-header)
