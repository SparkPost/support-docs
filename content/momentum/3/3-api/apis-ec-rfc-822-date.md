---
lastUpdated: "03/26/2020"
title: "ec_rfc822_date"
description: "ec rfc 822 date Renders a timeval into a buffer per RFC 822 size t ec rfc 822 date buf maxsize tv char buf size t maxsize struct timeval tv Renders a timeval into a buffer per RFC 822 buf The target buffer maxsize The size of buf in bytes..."
---

<a name="apis.ec_rfc822_date"></a> 
## Name

ec_rfc822_date — Renders a timeval into a buffer per RFC822

## Synopsis

`#include "util.h"`

| `size_t **ec_rfc822_date** (` | <var class="pdparam">buf</var>, |   |
|   | <var class="pdparam">maxsize</var>, |   |
|   | <var class="pdparam">tv</var>`)`; |   |

`char * <var class="pdparam">buf</var>`;
`size_t <var class="pdparam">maxsize</var>`;
`struct timeval * <var class="pdparam">tv</var>`;<a name="idp58404032"></a> 
## Description

Renders a timeval into a buffer per RFC822.

**<a name="idp58405248"></a> Parameters**

<dl class="variablelist">

<dt>buf</dt>

<dd>

The target buffer.

</dd>

<dt>maxsize</dt>

<dd>

The size of `buf` in bytes.

</dd>

<dt>tv</dt>

<dd>

A struct timeval.

</dd>

</dl>

**<a name="idp58412064"></a> Return Value**

On success this function returns the size of the buffer; on failure it returns `0`.

**<a name="idp58413488"></a> Threading**

It is legal to call this function in any thread.