---
lastUpdated: "03/26/2020"
title: "pe2_mark_unsubscribed"
description: "pe 2 mark unsubscribed log unsubscribe events when the pe 2 logger module is loaded passively pe 2 mark unsubscribed This function requires that the pe 2 logger module be loaded Use this function to log unsubscribe events when the pe 2 logger module is loaded in passive mode Note..."
---

<a name="sieve.ref.pe2_mark_unsubscribed"></a> 
## Name

pe2_mark_unsubscribed — log unsubscribe events when the pe2_logger module is loaded passively

## Synopsis

`pe2_mark_unsubscribed`

<a name="idp31065808"></a> 
## Description

### Note

This function requires that the pe2_logger module be loaded.

Use this function to log unsubscribe events when the pe2_logger module is loaded in passive mode. Note that on an inbound MTA the pe2_logger module must be loaded in passive mode. You may use any Sieve logic you wish to determine whether an incoming message is an unsubscribe. In the following example this is done by prefixing `unsub-` to the local part of the address.

<a name="idp31068960"></a> 


```
if envelope :localpart :matches "to" "unsub-*" {
  $res = pe2_mark_unsubscribed;
  if ec_test "${res}" "failure" {
    ec_action 500 "pe2_mark_unsubscribed failed";
  }
  if not ec_test "${res}" "success" {
    ec_action 550 "pe2_mark_unsubscribed failed unexpectedly";
  }
  discard;
}
```

<a name="idp31071248"></a> 
## See Also

[“pe2_logger – Module”](/momentum/3/3-reference/modules-pe-2-logger), [pe2_mark_bounced](/momentum/3/3-reference/sieve-ref-pe-2-mark-bounced)