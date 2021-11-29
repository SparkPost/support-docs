---
lastUpdated: "03/26/2020"
title: "eleven_scan"
description: "eleven scan email virus scan eleven scan Configuration Change This feature is available starting from Momentum 3 1 Use of this function requires that the eleven module be loaded The eleven module implements the spam filter and e mail categorization service available from http www eleven de Use eleven scan..."
---

<a name="sieve.ref.eleven_scan"></a> 
## Name

eleven_scan — email virus scan

## Synopsis

`eleven_scan`

<a name="idp30802944"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.1.

Use of this function requires that the eleven module be loaded. The `eleven` module implements the spam filter and e-mail categorization service available from [http://www.eleven.de/](http://www.eleven.de/) .

Use eleven_scan in a data phase Sieve script and then read the context variable `eleven-result`. The possible values are:

*   non-virus

*   unknown

*   medium

*   high

*   virus

Other message context variables are:

*   eleven-majorscore – the numeric classification of the scan

*   eleven-minorscore – the numeric minor classification

*   eleven-result-subtype – the string representation corresponding to the eleven-minorscore number

For a description of the possible values for these variables see [“Runtime Usage”](/momentum/3/3-reference/3-reference-modules-eleven#modules.eleven.runtime).

Sieve scripts using `eleven_scan` should be used in the data phase.

<a name="idp30820112"></a> 


```
eleven_scan;

if vctx :contains "eleven-majorscore" "error" {
 ec_action 451 "AV system offline" "virus:check error";
 stop;
}

if vctx :is :comparator "i;ascii-casemap"  "eleven-result" ["spam", "dangerous"]
{
 ec_action 550 "Virus detected" "virus:Viruses rejected";
 stop;
}
```

<a name="idp30822800"></a> 
## See Also

[“eleven – Module”](/momentum/3/3-reference/3-reference-modules-eleven)