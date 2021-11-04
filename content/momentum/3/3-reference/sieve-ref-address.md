---
lastUpdated: "03/26/2020"
title: "address"
description: "address return the address from a header address header element string This function implements the standard address Sieve test it parses addresses out of the header you request and tests against them For more information see Section 8 2 Sieve's Basic Syntax Example 16 2 address example This function returns..."
---

<a name="sieve.ref.address"></a> 
## Name

address — return the address from a header

## Synopsis

`address` { header_element } { *`string`* }

<a name="idp28517968"></a> 
## Description

This function implements the standard "address" Sieve test; it parses addresses out of the header you request and tests against them. For more information see [“Sieve's Basic Syntax”](/momentum/3/3-reference/sieve-syntax-basic).

<a name="example.address"></a> 


```
if address ["From", "To"] "lemon@test.messagesystems.com" {
    ec_log "lemon";
} else {
    ec_log "not-lemon";
}
```

This function returns the first matching address as a string value. When using the `test` form of address, with a comparator or regex, it will match against all addresses. See also [“Sieve's Basic Syntax”](/momentum/3/3-reference/sieve-syntax-basic).

<a name="idp28524624"></a> 
## See Also

[envelope](/momentum/3/3-reference/sieve-ref-envelope)