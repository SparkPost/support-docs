---
lastUpdated: "03/26/2020"
title: "stop"
description: "stop stop processing the current script stop The stop action is used to explicitly indicate that the current script should stop processing This is similar to the keep function keep but does not increment any internal stats counters This is a terminal action no further Sieve rules will be run..."
---

<a name="sieve.ref.stop"></a> 
## Name

stop — stop processing the current script

## Synopsis

`stop`

<a name="idp31276512"></a> 
## Description

The `stop` action is used to explicitly indicate that the current script should stop processing. This is similar to the keep function: [keep](/momentum/3/3-reference/sieve-ref-keep), but does not increment any internal stats counters.

This is a terminal action; no further Sieve rules will be run for the current message in the current phase.

For an overview of Sieve actions see [“Actions”](/momentum/3/3-reference/sieve-syntax-basic#sieve.syntax.basic.actions).