---
lastUpdated: "03/26/2020"
title: "commtouch_scan"
description: "commtouch scan email virus scan commtouch scan Use commtouch scan in a data phase Sieve script and then read the message context variable commtouch virus threat The possible return values are non virus unknown medium high virus Sieve scripts using commtouch scan can be used in the data phase Example..."
---

<a name="sieve.ref.commtouch_scan"></a> 
## Name

commtouch_scan — email virus scan

## Synopsis

`commtouch_scan`

<a name="idp28907792"></a> 
## Description

Use commtouch_scan in a data phase Sieve script and then read the message context variable commtouch-virus-threat. The possible return values are:

*   non-virus

*   unknown

*   medium

*   high

*   virus

Sieve scripts using `commtouch_scan` can be used in the data phase.

<a name="example.commtouch_scan"></a> 


```
commtouch_scan;

if vctx_mess :is :comparator "i;ascii-casemap"  "commtouch-virus-threat" ["high", "virus"]
{
        ec_action 550 "Virus detected" "virus:Viruses rejected";
        stop;
}
```

Use of this function requires that the commtouch module be loaded.

<a name="idp28918096"></a> 
## See Also

[“commtouch_ctasd – Commtouch_ctasd Module”](/momentum/3/3-reference/3-reference-modules-commtouch)