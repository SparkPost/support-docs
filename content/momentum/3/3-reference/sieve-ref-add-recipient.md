---
lastUpdated: "03/26/2020"
title: "add_recipient"
description: "add recipient add a new envelope recipient to the mail add recipient address This action will add an envelope recipient a RCPT TO address to the current mail The headers and the body of the message will not be changed in any way Existing recipients will also not be affected..."
---

<a name="sieve.ref.add_recipient"></a> 
## Name

add_recipient — add a new envelope recipient to the mail

## Synopsis

`add_recipient` { *`address`* }

<a name="idp28500496"></a> 
## Description

This action will add an envelope recipient (a `RCPT TO`) address to the current mail. The headers and the body of the message will not be changed in any way. Existing recipients will also not be affected.

### Warning

This function should only be used in the each_rcpt phase.

<a name="example.add_recipient"></a> 


```
if envelope :domain :is "to" "bar.com" {
  add_recipient "sideline@foo.com";
  stop;
}
```