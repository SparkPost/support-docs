---
lastUpdated: "03/26/2020"
title: "signing_stats"
description: "signing stats control how signing statistics are recorded signing stats all signing stats global signing stats off This option is used to control whether signing statistics are recorded per binding as a global summary only or disabled entirely You might consider setting this option to global or off if you..."
---

<a name="conf.ref.signing_stats"></a> 
## Name

signing_stats — control how signing statistics are recorded

## Synopsis

`signing_stats = "all"`

`signing_stats = "global"`

`signing_stats = "off"`

<a name="idp26477024"></a> 
## Description

This option is used to control whether signing statistics are recorded per binding, as a global summary only, or disabled entirely. You might consider setting this option to `global` or `off` if you have a very large number of bindings and do not need to track message signing statistics such as DKIM on a per-binding basis.

Default value is `all`.

<a name="idp26480928"></a> 
## Scope

`signing_stats` is valid in the global scope.

<a name="idp26483184"></a> 
## See Also

[signing_stats](/momentum/4/console-commands/signing-stats), [signing_stats reset](/momentum/4/console-commands/signing-stats-reset), [*Using Yahoo! DomainKeys*](/momentum/4/using-domainkeys) , and [Chapter 23, *Using DomainKeys Identified Mail (DKIM) Signatures*](using_dkim "Chapter 23. Using DomainKeys Identified Mail (DKIM) Signatures")