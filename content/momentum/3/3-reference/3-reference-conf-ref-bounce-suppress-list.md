---
lastUpdated: "03/26/2020"
title: "bounce_suppress_list"
description: "bounce suppress list configure a list of email addresses that may not be considered original recipients bounce suppress list comma separated list of email addresses When a Message Delivery Notification MDN is received this option will suppress certain addresses from being identified as the purported original sender An MDN is..."
---

<a name="conf.ref.bounce_suppress_list"></a> 
## Name

bounce_suppress_list — configure a list of email addresses that may not be considered original recipients.

## Synopsis

`bounce_suppress_list = "comma-separated list of email addresses"`

<a name="idp8411376"></a> 
## Description

When a Message Delivery Notification (MDN) is received, this option will suppress certain addresses from being identified as the purported original sender.

An MDN is an out-of-band notification of delivery failure. Momentum's out-of-band bounce processing capability includes an algorithm which attempts to extract the original recipient from the MDN. You can use the `Bounce_Suppress_List` option to improve the accuracy of this algorithm by excluding addresses and/or domains that you know could not have been the original recipient.

To disqualify an email address like `bounces@bounces.example.com` from being considered a potential original recipient, you would specify:

```
bounce_domains = ( bounces.example.com )
bounce_suppress_list = "bounces@bounces.example.com"
```

You can also specify domains that you would like to disqualify, as shown below. Multiple addresses can be specified by using a comma separated list.

```
bounce_domains = ( bounces.example.com )
bounce_suppress_list = "bounces@bounces.example.com,@bounces.example.org"
```
<a name="idp8417488"></a> 
## Scope

`bounce_suppress_list` is valid in the global scope.

<a name="idp8419536"></a> 
## See Also

[bounce_domains](/momentum/3/3-reference/3-reference-conf-ref-bounce-domains), [bounce_pattern](/momentum/3/3-reference/3-reference-conf-ref-bounce-pattern), [bounce_behavior](/momentum/3/3-reference/3-reference-conf-ref-bounce-behavior), [“bounce_logger – Momentum-Style Bounce Logging”](/momentum/3/3-reference/3-reference-modules-bounce-logger)