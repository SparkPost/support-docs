---
lastUpdated: "03/26/2020"
title: "read_smtp2"
description: "read smtp 2 Read the SMTP response from peer int read smtp 2 dc expected code now mask extra codes delivery construct dc int expected code struct timeval now int mask int extra codes Configuration Change This feature is available starting from Momentum 3 1 0 Read the SMTP response..."
---

<a name="apis.read_smtp2"></a> 
## Name

read_smtp2 — Read the SMTP response from peer

## Synopsis

`#include "smtp.h"`

| `int **read_smtp2** (` | <var class="pdparam">dc</var>, |   |
|   | <var class="pdparam">expected_code</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">mask</var>, |   |
|   | <var class="pdparam">extra_codes</var>`)`; |   |

`delivery_construct * <var class="pdparam">dc</var>`;
`int <var class="pdparam">expected_code</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`int * <var class="pdparam">mask</var>`;
`int <var class="pdparam">extra_codes</var>`;<a name="idp61781984"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.1.0.

Read the SMTP response from peer.

This function is the same as [read_smtp](/momentum/3/3-api/apis-read-smtp) except that it takes extra SMTP codes besides expected_code.

**<a name="idp61785952"></a> Parameters**

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

<dt>extra_codes</dt>

<dd>

list of SMTP codes in addition to the expected_code. Use a value <= 0 to terminate the list.

</dd>

</dl>

**<a name="idp61797168"></a> Return Values**

On success this function returns a value greater than `0` and on failure a number less than `0`.

**<a name="idp61799040"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61800592"></a> 
## See Also

[*SMTP-related Functions*](/momentum/3/3-api/smtp)