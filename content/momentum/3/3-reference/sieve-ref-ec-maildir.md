---
lastUpdated: "03/26/2020"
title: "ec_maildir"
description: "ec maildir write the current message into a maildir mailbox ec maildir email address This action will store the current message into the maildir for the specified email address It can only be called in the each rcpt phase This is a terminal action no further Sieve rules will be..."
---

<a name="sieve.ref.ec_maildir"></a> 
## Name

ec_maildir — write the current message into a maildir mailbox

## Synopsis

`ec_maildir` { *`email-address`* }

<a name="idp30238096"></a> 
## Description

This action will store the current message into the maildir for the specified email address.

It can only be called in the each_rcpt phase.

This is a terminal action; no further Sieve rules will be run for the current message in the current phase.

<a name="example.ec_maildir"></a> 


```
require "ec_maildir";
if envelope :domain :is "to" "localdomain.com" {
  ec_maildir "%{vctx_mess:rcptto_localpart}@%{vctx_mess:rcptto_domain}";
}
```

<a name="example.ec_maildir.second"></a> 


```
require "ec_maildir";
if envelope :domain :is "to" ["localdomain.com", "otherdomain.com"] {
  $rcpt = envelope "to";
  ec_maildir "${rcpt}";
}
```

<a name="idp30246000"></a> 
## See Also

[envelope](/momentum/3/3-reference/sieve-ref-envelope).