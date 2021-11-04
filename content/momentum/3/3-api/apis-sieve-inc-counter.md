---
lastUpdated: "03/26/2020"
title: "sieve_inc_counter"
description: "sieve inc counter Increment the specified counter void sieve inc counter counter clen phase plen type const char counter int clen const char phase int plen int type Increment the specified counter counter The counter to increment clen The length of the counter parameter phase The phase in which to..."
---

<a name="apis.sieve_inc_counter"></a> 
## Name

sieve_inc_counter — Increment the specified counter

## Synopsis

`#include "sieve/ecsieve.h"`

| `void **sieve_inc_counter** (` | <var class="pdparam">counter</var>, |   |
|   | <var class="pdparam">clen</var>, |   |
|   | <var class="pdparam">phase</var>, |   |
|   | <var class="pdparam">plen</var>, |   |
|   | <var class="pdparam">type</var>`)`; |   |

`const char * <var class="pdparam">counter</var>`;
`int <var class="pdparam">clen</var>`;
`const char * <var class="pdparam">phase</var>`;
`int <var class="pdparam">plen</var>`;
`int <var class="pdparam">type</var>`;<a name="idp60317424"></a> 
## Description

Increment the specified counter.

**<a name="idp60318640"></a> Parameters**

<dl class="variablelist">

<dt>counter</dt>

<dd>

The counter to increment.

</dd>

<dt>clen</dt>

<dd>

The length of the `counter` parameter.

</dd>

<dt>phase</dt>

<dd>

The phase in which to increment the counter.

</dd>

<dt>plen</dt>

<dd>

The length of the `phase` parameter.

</dd>

<dt>type</dt>

<dd>

One of the following counter types:

```
#define SIEVE_COUNTER_TYPE_5XX  0
#define SIEVE_COUNTER_TYPE_4XX  1
#define SIEVE_COUNTER_TYPE_INFO 2
```
</dd>

</dl>

**<a name="idp60330432"></a> Return Values**

This function returns void.

**<a name="idp60331344"></a> Threading**

It is legal to call this function in any thread.