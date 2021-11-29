---
lastUpdated: "03/26/2020"
title: "signing_stats"
description: "signing stats control how signing statistics are recorded Signing Stats all Signing Stats global Signing Stats off This option is used to control whether signing statistics are recorded per binding as a global summary only or disabled entirely You might consider setting this option to global or off if you..."
---

<a name="conf.ref.signing_stats"></a> 
## Name

signing_stats — control how signing statistics are recorded

## Synopsis

`Signing_Stats = "all"`

`Signing_Stats = "global"`

`Signing_Stats = "off"`

<a name="idp11727024"></a> 
## Description

This option is used to control whether signing statistics are recorded per binding, as a global summary only, or disabled entirely. You might consider setting this option to `global` or `off` if you have a very large number of bindings and don't need to track message signing statistics such as DKIM on a per-binding basis.

**Configuration Change. ** This feature is available starting from Momentum 3.0.17.

The default value for this option is `all`.

<a name="idp11733776"></a> 
## Scope

Signing_Stats is valid in the global scope.

<a name="idp11735408"></a> 
## See Also

[“dkim – DomainKeys Identified Mail Signatures”](/momentum/3/3-reference/modules-dkim), [“domainkeys – Yahoo! DomainKeys”](/momentum/3/3-reference/3-reference-modules-domainkeys) , [signing_stats](/momentum/3/3-reference/3-reference-console-commands-signing-stats), [“opendkim – OpenDKIM module”](/momentum/3/3-reference/3-reference-modules-opendkim) and [signing_stats reset](/momentum/3/3-reference/3-reference-console-commands-signing-stats-reset)