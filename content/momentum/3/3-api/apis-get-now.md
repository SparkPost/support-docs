---
lastUpdated: "03/26/2020"
title: "get_now"
description: "get now Populates a struct timeval pointer with current data void get now toset struct timeval toset Populates a struct timeval pointer with current data toset A pointer to a timeval struct This function returns void It is legal to call this function in any thread..."
---

<a name="apis.get_now"></a> 
## Name

get_now — Populates a `struct timeval` pointer with current data

## Synopsis

`#include "scheduler.h"`

| `void **get_now** (` | <var class="pdparam">toset</var>`)`; |   |

`struct timeval * <var class="pdparam">toset</var>`;<a name="idp63978896"></a> 
## Description

Populates a `struct timeval` pointer with current data.

**<a name="idp63980544"></a> Parameters**

<dl class="variablelist">

<dt>toset</dt>

<dd>

A pointer to a `timeval` struct.

</dd>

</dl>

**<a name="idp63983712"></a> Return Values**

This function returns `void`.

**<a name="idp63985072"></a> Threading**

It is legal to call this function in any thread.