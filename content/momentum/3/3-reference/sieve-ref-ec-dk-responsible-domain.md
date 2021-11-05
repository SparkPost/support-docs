---
lastUpdated: "03/26/2020"
title: "ec_dk_responsible_domain"
description: "ec dk responsible domain Return the responsible domain for the current message ec dk responsible domain ec dk responsible domain returns a string containing the responsible domain of the current message This can be used as an argument to the ec dk sign extension This feature requires the Domain Keys..."
---

<a name="sieve.ref.ec_dk_responsible_domain"></a> 
## Name

ec_dk_responsible_domain — Return the responsible domain for the current message

## Synopsis

`ec_dk_responsible_domain`

<a name="idp29338608"></a> 
## Description

`ec_dk_responsible_domain` returns a string containing the responsible domain of the current message. This can be used as an argument to the [ec_dk_sign](/momentum/3/3-reference/sieve-ref-ec-dk-sign) extension.

### Note

This feature requires the DomainKeys module. See [“domainkeys – Yahoo! DomainKeys”](/momentum/3/3-reference/3-reference-modules-domainkeys) for more information.

<a name="example.ec_dk_responsible_domain"></a> 


```
$responsible = ec_dk_responsible_domain;
if ec_test :is "foo.com" $responsible {
  ec_log "foo.com is responsible for this message.";
}
else {
  ec_log "foo.com is not responsible for this message.";
}
```