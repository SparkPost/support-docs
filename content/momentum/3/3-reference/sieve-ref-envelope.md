---
lastUpdated: "03/26/2020"
title: "envelope"
description: "envelope return the envelope sender or recipient recip envelope to sender envelope from sender domain envelope domain from Returns the envelope sender or recipient into a variable You may use the localpart domain user and detail subaddressing tags to obtain the corresponding parts of the address address..."
---

<a name="sieve.ref.envelope"></a> 
## Name

envelope — return the envelope sender or recipient

## Synopsis

`$recip = envelope "to";`

`$sender = envelope "from";`

`$sender_domain = envelope :domain "from";`

<a name="idp30835952"></a> 
## Description

Returns the envelope sender or recipient into a variable. You may use the `:localpart`, `:domain`, `:user` and `:detail` subaddressing tags to obtain the corresponding parts of the address.

<a name="idp30839776"></a> 
## See Also

[address](/momentum/3/3-reference/sieve-ref-address).