---
lastUpdated: "11/26/2024"
title: "msys.validate.openarc.sign"
description: "msys validate openarc sign seal add ARC set headers"
---

<a name="lua.ref.msys.validate.openarc.sign"></a>
## Name

msys.validate.openarc.sign — builds and adds the ARC set headers into an email.

msys.validate.openarc.seal - synonym of `msys.validation.openarc.sign`.

## Synopsis

`msys.validate.openarc.sign(msg, options, ar)`

`msys.validate.openarc.seal(msg, options, ar)`

```
msg: userdata, ec_message type
options: table
ar: string, optional. It's the message's authentication assessment to be copied as-is into the AAR header.

```

## Description

This function acquires ARC chain status (i.e. `cv`) from `ec_message` context variable `arc_cv`. The `cv`
 will be used in the AS (ARC-Seal) header, and combined with authentication assessments from other
 methods (e.g. SPF, DKIM, etc) defined by the `ar` and put into the AAR (ARC-Authentication-Results)
 header. This function signs and seals the message by adding the AMS (ARC-Message-Signature) and AS
 (ARC-Seal) headers, using the signing mechanism defined in the `options` table.

If `ec_message` context variable `arc_cv` is not set when the function is called, the function will do an
 internal ARC validation (to set the `arc_cv`), followed by the regular `cv` based signing.

This function requires the [`openarc`](/momentum/4/modules/openarc) module.

Enable this function with the statement `require('msys.validate.openarc')`.

This function takes the following parameters:

*   `msg` - mail message to sign

*   `options`   - table defines the options for signature generation/signing:

    *   `signing_domain` – signing domain

    *   `selector` – signing selector

    *   `authservid` – authentication service identifier, as
        [authserv-id](https://datatracker.ietf.org/doc/html/rfc8601#section-2.5) defined in RFC.

        If not set, will be defaulted to the hostname.

    *   `header_canon` – header canonicalization setting.

        Supported values are `relaxed`, `simple`. Defaults to `relaxed`.

    *   `body_canon` – body canonicalization setting

        Supported values are `relaxed`, `simple`. Defaults to `relaxed`.

    *   `digest` – signing algorithm digest setting.

        Supported values are `rsa-sha1` and `rsa-sha256`. Defaults to `rsa-sha256`.

    *   `keyfile` – signing key file

    *   `keybuf` – signing key

        Must contain the PEM encoded private key to use for signing the
        message. This must be a contiguous string, with no line breaks and no white spaces, without the
        `BEGIN` and `END` tags that are found in the key file itself. The format is similar to the
        format used for OpenDKIM signing.

        If not defined, will be built from the `keyfile`.

    *   `headerlist` – colon-separated list of headers to sign

    *   `oversign_headerlist` – colon-separated list of headers for over signing

    *   `skip_ar_header_update` – if set, no update to the AR (Authentication-Results) header.

        If not set, Momentum will append the ARC verification result (e.g. `arc=pass`) to
        the existing AR header or create one if it does not exist.

*   `ar` - authentication assessment to be copied as-is into the AAR (ARC-Authentication-Results) header.

    If not provided, Momentum will take the value from the existing `Authentication-Results` header.
    Momentum appends this value with the ARC verification result (e.g. `arc=pass`) and uses it to
    build the AAR header.


### Note

Since ARC sealing  must not happen until all potential modification of a message is done, if you
 already have implementations in some other validation phases/hooks, this function
 should be invoked in the `post_final_validation` stage to guarantee that it is called
 after all the other hook implementations.

The function would cause the `ec_message` context variable `arc_seal` to be set:

`ok`: ARC signing/sealing is done, and ARC set headers are added

`skip`: ARC signing/sealing is skipped, because the ARC chain already fails before reaching the
 current MTA.

If the context variable `arc_seal` of the `ec_message` is not set, it indicates an unexpected ARC
 signing/sealing failure, e.g. due to mis-configuration. The error reason is logged in paniclog.


<a name="lua.ref.msys.validate.openarc.sign.example"></a>
### Example


```
require("msys.core");
require("msys.validate.openarc");
local mod = {};

function mod:core_post_final_validation(msg, accept, vctx)
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

msys.registerModule("openarc_sign", mod);
```

## See Also

[msys.validate.openarc.verify](/momentum/4/lua/ref-msys-validate-openarc-verify)
