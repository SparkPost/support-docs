---
lastUpdated: "03/26/2020"
title: "ec_test"
description: "ec test generic test ec test comparison value other value Instead of building comparators into every extension function Momentum provides a generic test facility called ec test through which all comparators can be used See Section 8 2 3 Comparisons for a discussion of Sieve comparators A short example of..."
---

<a name="sieve.ref.ec_test"></a> 
## Name

ec_test — generic test

## Synopsis

`ec_test` { *`comparison`* } { *`value`* } { *`other-value`* }

<a name="idp30627328"></a> 
## Description

Instead of building comparators into every extension function, Momentum provides a generic test facility called `ec_test` through which all comparators can be used. See [“Comparisons”](/momentum/3/3-reference/sieve-syntax-basic#sieve.syntax.basic.comparisons) for a discussion of Sieve comparators.

A short example of variable assignment, interpolation and testing is testing for an SPF -all record. In order to search for an SPF record that explicitly states that a domain sends no email, we look for a TXT record for the domain part of the envelope sender and attempt to match it against something that looks like: "v=spf1 -all".

<a name="example.ec_test"></a> 


```
$txt = ec_dns_lookup "%{spvf1:d}" "txt";
if ec_test :regex "${txt}" "v=spf1\\s+-all" {
  ec_action 550 "SPF says %{spvf1:d} sends no email.";
}
```

For a description of the types of comparisons you can perform using `ec_test` see [“Comparisons”](/momentum/3/3-reference/sieve-syntax-basic#sieve.syntax.basic.comparisons).