---
lastUpdated: "03/26/2020"
title: "is_valid_IP"
description: "is valid IP Determines whether or not string is a valid IP address int is valid IP string family address const char string u int 8 t family struct in 6 addr address Determines whether or not string is a valid IP address string The string to be validated family..."
---

<a name="apis.is_valid_IP"></a> 
## Name

is_valid_IP — Determines whether or not `string` is a valid IP address

## Synopsis

`#include "dns.h"`

| `int **is_valid_IP** (` | <var class="pdparam">string</var>, |   |
|   | <var class="pdparam">family</var>, |   |
|   | <var class="pdparam">address</var>`)`; |   |

`const char * <var class="pdparam">string</var>`;
`u_int8_t * <var class="pdparam">family</var>`;
`struct in6_addr * <var class="pdparam">address</var>`;<a name="idp64042592"></a> 
## Description

Determines whether or not `string` is a valid IP address.

**<a name="idp64044256"></a> Parameters**

<dl class="variablelist">

<dt>string</dt>

<dd>

The string to be validated.

</dd>

<dt>family</dt>

<dd>

As a side effect, this address will be populated with one of the following values: `AF_INET`, `AF_INET6`, or `AF_UNSPEC`.

The following typedef applies to the `u_int8_t` data type:

`typedef uint8_t u_int8_t;`

</dd>

<dt>address</dt>

<dd>

An address of the system struct `struct in6_addr`. As a side effect, this address will be populated with either `struct in6_addr (AF_INET6)` data or `struct in_addr (AF_INET)` data. If `family` is `AF_INET`, then the caller should cast the value of `address` to a `struct in_addr` in order to access the data structure for an IPv4 address.

</dd>

</dl>

**<a name="idp64057296"></a> Return Values**

This is a Boolean function that returns `1` if `string` is valid IP address and `0` otherwise. If the string validates, then `address` will have `struct in6_addr` data.

**<a name="idp64060512"></a> Threading**

It is legal to call this function in any thread.

<a name="idp64061936"></a> 
## See Also

[is_valid_email](/momentum/3/3-api/apis-is-valid-email).