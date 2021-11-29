---
lastUpdated: "03/26/2020"
title: "redirect"
description: "redirect ec redirect change the envelope recipient redirect address ec redirect address counter This action will replace the rcptto address on the envelope to the one supplied and redirect the message The headers and the body of the message will not be changed The optional counter parameter to ec redirect..."
---

<a name="sieve.ref.redirect"></a> 
## Name

redirect, ec_redirect — change the envelope recipient

## Synopsis

`redirect` { *`address`* }

`ec_redirect` { *`address`* } [ *`counter`* ]

<a name="idp31104096"></a> 
## Description

This action will replace the rcptto address on the envelope to the one supplied and redirect the message. The headers and the body of the message will not be changed.

The optional counter parameter to `ec_redirect` is used to count the number of hits for this particular action; if omitted, the script filename and line number will be assumed. You can see the hit count via **ec_console** using the **sieve stats**       command.

Sieve scripts using `redirect` or `ec_redirect` can be set during data_phase1 or any subsequent phase except the set_binding_phase. It is recommended that this action be used in the each_rcpt_phase.

<a name="example.ec_redirect"></a> 


```
if envelope :domain :is "from" "do-redirect.com" {
  redirect "bar@foo.com";
  stop;
}
```

<a name="example.ec_redirect.second"></a> 


```
require "ec_redirect";
if envelope :domain :is "from" "do-redirect.com" {
  ec_redirect "bar@foo.com" "policy:do-redirect.com";
  stop;
}
```

This is a terminal action; no further Sieve rules will be run for the current message in the current phase and the message will not be logged. If a log entry is desirable, use [ec_forward](/momentum/3/3-reference/sieve-ref-ec-forward).

For an overview of Sieve actions see [“Actions”](/momentum/3/3-reference/sieve-syntax-basic#sieve.syntax.basic.actions).