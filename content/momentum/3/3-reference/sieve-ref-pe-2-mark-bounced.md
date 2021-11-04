---
lastUpdated: "03/26/2020"
title: "pe2_mark_bounced"
description: "pe 2 mark bounced log bounce events when the pe 2 logger module is loaded passively pe 2 mark bounced reason bounce code This function requires that the pe 2 logger module be loaded Use this function to log bounce events when the pe 2 logger module is loaded in..."
---

<a name="sieve.ref.pe2_mark_bounced"></a> 
## Name

pe2_mark_bounced — log bounce events when the pe2_logger module is loaded passively

## Synopsis

`pe2_mark_bounced` { *`reason`* } [ *`bounce_code`* ]

<a name="idp31046656"></a> 
## Description

### Note

This function requires that the pe2_logger module be loaded.

Use this function to log bounce events when the pe2_logger module is loaded in passive mode. Note that on an inbound MTA the pe2_logger module must be loaded in passive mode. The first argument to this function is a string parameter and is required. The second argument, the bounce type, is optional. The bounce code should be one of the classification codes listed at [Table E.12, “Bounce classification codes”](/momentum/3/3-reference/3-reference-bounce-logger-classification-codes#log_formats.bounce.classification.codes).

You may use any Sieve logic you wish to determine whether an incoming message is an bounce. In the following example this is done by prefixing `bounces-` to the local part of the address.

<a name="idp31050944"></a> 


```
if envelope :localpart :matches "to" "bounces-*" {
  $msg = ec_header_get "Subject";
  $res = pe2_mark_bounced "${msg}" 40;
  if ec_test "${res}" "0" {
    ec_action 500 "pe2_mark_bounced failed";
  }
  if not ec_test "${res}" "1" {
    ec_action 550 "pe2_mark_bounced failed unexpectedly";
  }
}
```

<a name="idp31053248"></a> 
## See Also

[“pe2_logger – Module”](/momentum/3/3-reference/modules-pe-2-logger), [pe2_mark_unsubscribed](/momentum/3/3-reference/sieve-ref-pe-2-mark-unsubscribed)