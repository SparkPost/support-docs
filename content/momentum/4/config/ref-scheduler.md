---
lastUpdated: "03/26/2020"
title: "scheduler"
description: "scheduler override the default IO scheduler scheduler scheduler name Momentum automatically selects the best available I O scheduling mechanism for the platform on which it is running You should not change this option unless advised by a Message Systems support engineer Changing the value of this option at runtime requires..."
---

<a name="conf.ref.scheduler"></a> 
## Name

scheduler — override the default IO scheduler

## Synopsis

`scheduler = "scheduler-name"`

<a name="idp26343904"></a> 
## Description

Momentum automatically selects the best available I/O scheduling mechanism for the platform on which it is running. You should not change this option unless advised by a Message Systems support engineer.

Changing the value of this option at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

<a name="idp26346944"></a> 
## Scope

`scheduler` is valid in the global scope.