---
lastUpdated: "03/26/2020"
title: "cloudmark_score"
description: "cloudmark score Analyze a message with Cloudmark Authority cloudmark score Configuration Change This feature is available starting from Momentum 3 0 23 cloudmark score returns a string containing the numeric score assigned to the active message by the Cloudmark Authority Engine Additionally all of the validation context variables set by..."
---

<a name="sieve.ref.cloudmark_score"></a> 
## Name

cloudmark_score — Analyze a message with Cloudmark Authority

## Synopsis

`cloudmark_score`

<a name="idp28889776"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.23.

`cloudmark_score` returns a string containing the numeric score assigned to the active message by the Cloudmark Authority Engine. Additionally, all of the validation context variables set by the Cloudmark module will be set. For a list of these variables see [“Cloudmark Runtime Usage”](/momentum/3/3-reference/3-reference-modules-cloudmark#modules.cloudmark.runtime.usage).

<a name="example.cloudmark_score"></a> 


```
$score = cloudmark_score;
if ec_test :value "gt" :comparator "i;ascii-numeric" "${score}" "80" {
  ec_tarpit 10 "tarpit before reject";
  ec_action 554 "5.7.1 your mail has been rejected by policy";
}
```