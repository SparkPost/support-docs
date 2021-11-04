---
lastUpdated: "03/26/2020"
title: "ec_dkim_domains"
description: "ec dkim domains Return a list of valid signing domains ec dkim domains ec dkim domains returns a stringlist of the domain portion of the identities which had valid DKIM signatures for the current message Note that since DKIM allows for third party signatures one should check that there is..."
---

<a name="sieve.ref.ec_dkim_domains"></a> 
## Name

ec_dkim_domains — Return a list of valid signing domains

## Synopsis

`ec_dkim_domains`

<a name="idp29388544"></a> 
## Description

`ec_dkim_domains` returns a stringlist of the domain portion of the identities which had valid DKIM signatures for the current message. Note that since DKIM allows for third party signatures, one should check that there is a valid signature relating to the 'responsible domain' of the message, which is provided by the [ec_dkim_responsible_domain](/momentum/3/3-reference/sieve-ref-ec-dkim-responsible-domain) extension.

### Note

This feature requires the DKIM module. See [“dkim – DomainKeys Identified Mail Signatures”](/momentum/3/3-reference/modules-dkim) for more information.

<a name="example.ec_dkim_domains"></a> 


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