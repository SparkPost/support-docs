---
lastUpdated: "03/26/2020"
title: "smtp_cbv – SMTP Callback Verification"
description: "This module allows Momentum to perform SMTP Callback Verification CBV in its validation process If this module is loaded for every inbound message Momentum will attempt to connect back to the sender domain to determine if the sender address is valid Example 14 97 smtp cbv module Configuration Change This..."
---

<a name="idp21359296"></a> 

This module allows Momentum to perform SMTP Callback Verification (CBV) in its validation process. If this module is loaded, for every inbound message, Momentum will attempt to connect back to the sender domain to determine if the sender address is valid.

### <a name="idp21361616"></a> Configuration

<a name="example.smtp_cbv.3"></a> 


```
smtp_cbv "smtp_cbv1" {
  phase = "mailfrom"
  mailfrom = ""
  map = [
    yahoo.net = "yahoo.com"
  ]
}
```

**Configuration Change. ** This module is not currently supported in a multiple event loop configuration. Future support is planned. For more information about multiple event loops see [“Configuring for Multiple Event Loops in Momentum 3.6”](/momentum/3/3-reference/conf-multi-core).

<dl class="variablelist">

<dt>mailfrom</dt>

<dd>

Specifies the mailfrom address to use in the SMTP Callback Verification. If not specified, a null sender address will be used.

</dd>

<dt>map</dt>

<dd>

If the sending domain matches the value listed on the left hand side, Momentum will attempt SMTP CBV with the domain listed on the right hand side.

### Note

This option supports both `mailfrom` and `rcptto` since Momentum 3.1 and Momentum 2.2.3.47\. Prior releases only provide map support for `rcptto`.

</dd>

<dt>phase</dt>

<dd>

Specifies the SMTP phase to start SMTP Callback Verification. It can be either `mailfrom` or `rcptto`.

</dd>

</dl>

The verification result will be stored in a message context variable `smtp_cbv_result`. See below for more information. You may act on the context variable from a script or from other validation modules as part of your site policy.

You can invoke callback verification from Sieve using the `smtp_callback_verify` function. For more information see [smtp_callback_verify](/momentum/3/3-reference/sieve-ref-smtp-callback-verify).

### <a name="modules.smtp_cbv.runtime.usage"></a> smtp_cbv Runtime Usage

The smtp_cbv module sets the following message context variable:

<dl class="variablelist">

<dt>smtp_cbv_result</dt>

<dd>

If the address was verified, that is, if the remote MTA did not permanently reject the CBV attempt, the `smtp_cbv_result` variable will be set to the string `pass`. Other possible values are `error` and `transient`, reflecting permanent and transient errors during the CBV attempt.

</dd>

</dl>

### <a name="idp21385248"></a> Abuse Issues With CBV

Using SMTP CBV can abuse a remote MTA if a large number of inbound messages are forged to look like they have been sent from a third party's domain. Exercise caution before deploying this module.