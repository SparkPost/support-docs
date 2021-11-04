---
lastUpdated: "03/26/2020"
title: "discard"
description: "discard ec discard discard the current message it will not be delivered discard ec discard reason Discard is used to silently throw away the message It does so by simply canceling the implicit keep If discard is used with other actions the other actions still happen Discard is compatible with..."
---

<a name="sieve.ref.discard"></a> 
## Name

discard, ec_discard — discard the current message; it will not be delivered

## Synopsis

`discard`

`ec_discard` [ *`reason`* ]

<a name="idp28949424"></a> 
## Description

Discard is used to silently throw away the message. It does so by simply canceling the implicit keep. If discard is used with other actions, the other actions still happen. Discard is compatible with all other actions. (For instance fileinto+discard is equivalent to fileinto.)

If discard throws the message away, the message will appear (to the sender) to have been accepted and delivered; no error status or out-of-band delivery notification will occur.

In the following script, any mail from the bad-guy.com domain is thrown out.

<a name="example.discard"></a> 


```
if envelope :domain :is "from" "bad-guy.com" {
  discard;
}
```

This is a terminal action; no further Sieve rules will be run for the current message in the current phase.

For an overview of Sieve actions see [“Actions”](/momentum/3/3-reference/sieve-syntax-basic#sieve.syntax.basic.actions).