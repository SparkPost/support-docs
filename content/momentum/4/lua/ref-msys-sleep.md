---
lastUpdated: "03/26/2020"
title: "msys.sleep"
description: "msys sleep When called in the scheduler thread suspend the current session for the specified duration msys sleep duration in seconds When called in the scheduler thread this function suspends the current session for the specified duration When called in a secondary thread or if called on the scheduler thread..."
---

<a name="lua.ref.msys.sleep"></a> 
## Name

msys.sleep — When called in the scheduler thread, suspend the current session for the specified duration

<a name="idp16354368"></a> 
## Synopsis

`msys.sleep(duration_in_seconds);`

`duration_in_seconds: number`<a name="idp16357360"></a> 
## Description

When called in the scheduler thread, this function suspends the current session for the specified duration. When called in a secondary thread, or if called on the scheduler thread and suspension is not possible, this function blocks the calling thread for the specified duration in seconds.

<a name="lua.ref.msys.sleep.example"></a> 


`msys.sleep(0.2)`

Because this function is in the `msys` namespace, an explicit `require` is not necessary.