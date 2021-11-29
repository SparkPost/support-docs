---
lastUpdated: "03/26/2020"
title: "msys.core.get_now_ts"
description: "msys core get now ts Get the current time msys core get now ts If this function is called from a scheduler thread it will return the time from the current ec scheduler inst structure If it is called from a non scheduler thread it will return the value returned..."
---

<a name="lua.ref.msys.core.get_now_ts"></a> 
## Name

msys.core.get_now_ts — Get the current time

<a name="idp24110688"></a> 
## Synopsis

`msys.core.get_now_ts();`

<a name="idp24112288"></a> 
## Description

If this function is called from a scheduler thread, it will return the time from the current [ec_scheduler_inst](/momentum/3/3-api/structs-ec-scheduler-inst) structure. If it is called from a non-scheduler thread, it will return the value returned by `time()`.

The value returned is the epoch time in UTC measured in seconds.

Because this function is in the msys.core namespace, an explicit `require('msys.core')` is not necessary.