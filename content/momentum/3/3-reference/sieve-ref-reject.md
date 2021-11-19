---
lastUpdated: "03/26/2020"
title: "reject"
description: "reject ec reject reject the message returning an MDN to the sender reject message ec reject message counter This action will cause Momentum to bounce the current message and stop processing further rules The message parameter will be used to form the body of the bounce message that is sent..."
---

<a name="sieve.ref.reject"></a> 
## Name

reject, ec_reject — reject the message, returning an MDN to the sender

## Synopsis

`reject` { *`message`* }

`ec_reject` { *`message`* } [ *`counter`* ]

<a name="idp31130848"></a> 
## Description

This action will cause Momentum to bounce the current message, and stop processing further rules. The *`message`* parameter will be used to form the body of the bounce message that is sent back to the envelope sender of the message.

If this action is executed before a complete message has been received, Momentum will instead send back a 550 status response, using the *`message`* as the message portion.

The optional counter parameter to `ec_reject` is used to count the number of hits for this particular action; if omitted, the script filename and line number will be assumed. You can see the hit count via **ec_console** using the **sieve stats**       command.

<a name="example.reject"></a> 


```
if envelope :domain :is "from" "do-reject.com" {
  reject "we don't accept mail from do-reject.com";
}
```

<a name="example.rject.second"></a> 


```
require "ec_reject";
if envelope :domain :is "from" "do-reject.com" {
  ec_reject "we don't accept mail from do-reject.com" "policy:bounce do-reject.com";
}
```

This is a terminal action; no further Sieve rules will be run for the current message in the current phase.

For an overview of Sieve actions see [“Actions”](/momentum/3/3-reference/sieve-syntax-basic#sieve.syntax.basic.actions).

<a name="idp31143168"></a> 
## See Also

[generate_bounces_for_multi_recipient_policy_rejections](/momentum/3/3-reference/3-reference-conf-ref-generate-bounces-for-multi-recipient-policy-rejections)