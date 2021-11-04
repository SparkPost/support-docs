---
lastUpdated: "03/26/2020"
title: "max_timed_events_per_iter"
description: "max timed events per iter the maximum numer of timed events per scheduler iteration max timed events per iter 1024 This option provides an upper boundary on how many timed events are dispatched in a single scheduler iteration This caps the number of timed events that will be processed by..."
---

<a name="conf.ref.max_timed_events_per_iter"></a> 
## Name

max_timed_events_per_iter — the maximum numer of timed events per scheduler iteration

## Synopsis

`max_timed_events_per_iter = 1024`

<a name="idp25382896"></a> 
## Description

This option provides an upper boundary on how many timed events are dispatched in a single scheduler iteration. This caps the number of timed events that will be processed by the scheduler before tending to events triggered by network traffic, preventing network events from being starved by time-based events.

The default value is `1024`.

<a name="idp25385936"></a> 
## Scope

max_timed_events_per_iter is valid in the global scope.