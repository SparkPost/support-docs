---
lastUpdated: "03/26/2020"
title: "counter"
description: "counter add counter help counter increment counter list counter reset counter unlink manage counters counter add counter name delta counter help counter increment counter name counter list counter reset counter name counter unlink counter name Lua makes use of generic counters These commands display and manipulate counters counter add Increments..."
---

<a name="console_commands.counter"></a> 
## Name

counter add, counter help, counter increment, counter list, counter reset, counter unlink — manage counters

## Synopsis

`counter add` { *`counter_name`* } { *`delta`* }

`counter help`

`counter increment` { *`counter_name`* }

`counter list`

`counter reset` { *`counter_name`* }

`counter unlink` { *`counter_name`* }

<a name="idp14506480"></a> 
## Description

Lua makes use of generic counters. These commands display and manipulate counters.

<dl class="variablelist">

<dt>counter add</dt>

<dd>

Increments the specified counter by the value of the second parameter.

</dd>

<dt>counter help</dt>

<dd>

Displays a brief description of each command.

</dd>

<dt>counter list</dt>

<dd>

Displays the statistics for all counters. See below for sample output:

<a name="console_commands.counter.list.example"></a> 


```
07:21:07 /tmp/2025> counter list
VALUE       RESET_TIME       SEMANTICS COUNTER

1024   2010-12-02@07:20:58    relaxed  /vendor/sample

2 counters listed.
```

All content scanning modules record statistics on scanned virus and spam volume metrics. These metrics are exposed via the counters subsystem and can be viewed using the **counter list**      command.

The **counter increment**           command increments the specified counter by one. For example, you can increment the `/vendor/sample` counter shown in [“counter list”](/momentum/4/console-commands/counter#console_commands.counter.list.example) by issuing the command **counter increment /vendor/sample** .

</dd>

<dt>counter unlink</dt>

<dd>

Deletes a counter and the **counter reset**       sets a counter to `0`.

</dd>

</dl>

You can also display and manipulate counters through the following Lua functions:

*   [msys.counter.add](/momentum/4/lua/ref-msys-counter-add)

*   [msys.counter.inc](/momentum/4/lua/ref-msys-counter-inc)

*   [msys.counter.open](/momentum/4/lua/ref-msys-counter-open)

*   [msys.counter.read](/momentum/4/lua/ref-msys-counter-read)

*   [msys.counter.reset](/momentum/4/lua/ref-msys-counter-reset)

*   [msys.counter.unlink](/momentum/4/lua/ref-msys-counter-unlink)