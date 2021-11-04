---
lastUpdated: "03/26/2020"
title: "is_valid_email"
description: "is valid email Determines whether emailaddr is a valid email address int is valid email emailaddr mailbox desc mailbox desclen localpart lplen domain domainlen const char emailaddr char mailbox desc int mailbox desclen char localpart int lplen char domain int domainlen Determines whether emailaddr is a valid email address If..."
---

<a name="apis.is_valid_email"></a> 
## Name

is_valid_email — Determines whether `emailaddr` is a valid email address

## Synopsis

`#include "util.h"`

| `int **is_valid_email** (` | <var class="pdparam">emailaddr</var>, |   |
|   | <var class="pdparam">mailbox_desc</var>, |   |
|   | <var class="pdparam">mailbox_desclen</var>, |   |
|   | <var class="pdparam">localpart</var>, |   |
|   | <var class="pdparam">lplen</var>, |   |
|   | <var class="pdparam">domain</var>, |   |
|   | <var class="pdparam">domainlen</var>`)`; |   |

`const char * <var class="pdparam">emailaddr</var>`;
`char * <var class="pdparam">mailbox_desc</var>`;
`int <var class="pdparam">mailbox_desclen</var>`;
`char * <var class="pdparam">localpart</var>`;
`int <var class="pdparam">lplen</var>`;
`char * <var class="pdparam">domain</var>`;
`int <var class="pdparam">domainlen</var>`;<a name="idp64076864"></a> 
## Description

Determines whether `emailaddr` is a valid email address. If it is, then it will populate `localpart` and `domain` with the appropriate, parsed string values.

**<a name="idp64079488"></a> Parameters**

<dl class="variablelist">

<dt>emailaddr</dt>

<dd>

The string that will be validated.

</dd>

<dt>mailbox_desc</dt>

<dd>

This value should always be passed `NULL`.

</dd>

<dt>mailbox_desclen</dt>

<dd>

The length of `mailbox_desc`, in bytes. This value should always be passed `0`.

</dd>

<dt>localpart</dt>

<dd>

The localpart of the email address.

</dd>

<dt>lplen</dt>

<dd>

The length of the `localpart`, in bytes.

</dd>

<dt>domain</dt>

<dd>

The domain part of the email address.

</dd>

<dt>domainlen</dt>

<dd>

The length of `domain`, in bytes.

</dd>

</dl>

**<a name="idp64095552"></a> Return Values**

This function returns the non-zero constant `VALID_NOBRACKET` if the `emailaddr` is valid, and `0` otherwise.

**<a name="idp64097840"></a> Threading**

It is legal to call this function in any thread.

<a name="idp64098944"></a> 
## See Also

[is_valid_IP](/momentum/3/3-api/apis-is-valid-ip) and [rfc2821_address_parse](/momentum/3/3-api/apis-rfc-2821-address-parse).