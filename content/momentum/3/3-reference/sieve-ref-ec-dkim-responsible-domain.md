---
lastUpdated: "03/26/2020"
title: "ec_dkim_responsible_domain"
description: "ec dkim responsible domain Return the responsible domain for the current message ec dkim responsible domain ec dkim responsible domain returns a string containing the responsible domain of the current message This can be used as an argument to the ec dkim sign extension or as a comparison against the..."
---

<a name="sieve.ref.ec_dkim_responsible_domain"></a> 
## Name

ec_dkim_responsible_domain — Return the responsible domain for the current message

## Synopsis

`ec_dkim_responsible_domain`

<a name="idp29405856"></a> 
## Description

`ec_dkim_responsible_domain` returns a string containing the responsible domain of the current message. This can be used as an argument to the [ec_dkim_sign](/momentum/3/3-reference/sieve-ref-ec-dkim-sign) extension or as a comparison against the return values of the [ec_dkim_domains](/momentum/3/3-reference/sieve-ref-ec-dkim-domains) extension.

### Note

This feature requires the DKIM module. See [“dkim – DomainKeys Identified Mail Signatures”](/momentum/3/3-reference/modules-dkim) for more information.

<a name="example.ec_dkim_responsible"></a> 


```
$responsible = ec_dkim_responsible_domain;
$domains = ec_dkim_domains;
if ec_test :is $domains $responsible {
  ec_log "Valid DKIM signature found";
}
else {
  ec_log "No valid DKIM signature found";
}
```