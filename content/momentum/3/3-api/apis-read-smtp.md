---
lastUpdated: "03/26/2020"
title: "read_smtp"
description: "read smtp Reads the SMTP response from peer int read smtp dc expected code now mask delivery construct dc int expected code struct timeval now int mask Reads the SMTP response from peer dc The delivery construct For a description of this data type see Section 68 11 delivery construct..."
---

<a name="apis.read_smtp"></a> 
## Name

read_smtp — Reads the SMTP response from peer

## Synopsis

`#include "smtp.h"`

| `int **read_smtp** (` | <var class="pdparam">dc</var>, |   |
|   | <var class="pdparam">expected_code</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">mask</var>`)`; |   |

`delivery_construct * <var class="pdparam">dc</var>`;
`int <var class="pdparam">expected_code</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`int * <var class="pdparam">mask</var>`;<a name="idp61754976"></a> 
## Description

Reads the SMTP response from peer.

**<a name="idp61756192"></a> Parameters**

<dl class="variablelist">

<dt>dc</dt>

<dd>

The delivery construct. For a description of this data type see [“delivery_construct”](/momentum/3/3-api/structs-delivery-construct).

</dd>

<dt>expected_code</dt>

<dd>

The expected SMTP response code from peer.

</dd>

<dt>now</dt>

<dd>

The current time.

</dd>

<dt>mask</dt>

<dd>

The IO mask such as `E_READ`.

</dd>

</dl>

**<a name="idp61765488"></a> Return Values**

On success this function returns a value greater than `0` and on failure a number less than `0`.

**<a name="idp61767360"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61768912"></a> 
## See Also

[*SMTP-related Functions*](/momentum/3/3-api/smtp)