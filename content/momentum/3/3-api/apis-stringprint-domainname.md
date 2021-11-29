---
lastUpdated: "03/26/2020"
title: "stringprint_domainname"
description: "stringprint domainname Renders a domain name respecting the raw domain rendering mode size t stringprint domainname str cc name string str command construct cc const char name This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.stringprint_domainname"></a> 
## Name

stringprint_domainname — Renders a domain name, respecting the raw-domain rendering mode

## Synopsis

`#include "controls/controls.h"`

| `size_t **stringprint_domainname** (` | <var class="pdparam">str</var>, |   |
|   | <var class="pdparam">cc</var>, |   |
|   | <var class="pdparam">name</var>`)`; |   |

`string * <var class="pdparam">str</var>`;
`command_construct * <var class="pdparam">cc</var>`;
`const char * <var class="pdparam">name</var>`;<a name="idp62955232"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Renders a domain name, respecting the raw-domain rendering mode.

**<a name="idp62958128"></a> Parameters**

<dl class="variablelist">

<dt>str</dt>

<dd>

the string to render into

</dd>

<dt>cc</dt>

<dd>

the command_construct for the session (may be NULL)

</dd>

<dt>name</dt>

<dd>

the raw domain name string (must not be NULL)

</dd>

</dl>

**<a name="idp62964560"></a> Return Values**

the number of bytes written to the string.

If cc is NULL, the system will call [ec_control_get_command_construct](/momentum/3/3-api/apis-ec-control-get-command-construct). It is only safe to do use stringprint_domainname with a NULL cc parameter when running on the scheduler thread.

The command construct parameter is needed by this function to determine the domain rendering mode.

This function respects the XML mode flag that is set in command_construct, and will appropriately escape special XML characters in what it emits.