---
lastUpdated: "03/26/2020"
title: "ec_mod_vdebug"
description: "ec mod vdebug Log debugging information for a module void ec mod vdebug mod level fmt arg generic module infrastructure mod int level const char fmt va list arg Log debugging information for a module mod The module to log on behalf of This is a pointer to a generic..."
---

<a name="apis.ec_mod_vdebug"></a> 
## Name

ec_mod_vdebug — Log debugging information for a module

## Synopsis

`#include "module.h"`

| `void **ec_mod_vdebug** (` | <var class="pdparam">mod</var>, |   |
|   | <var class="pdparam">level</var>, |   |
|   | <var class="pdparam">fmt</var>, |   |
|   | <var class="pdparam">arg</var>`)`; |   |

`generic_module_infrastructure * <var class="pdparam">mod</var>`;
`int <var class="pdparam">level</var>`;
`const char * <var class="pdparam">fmt</var>`;
`va_list <var class="pdparam">arg</var>`;<a name="idp49834960"></a> 
## Description

Log debugging information for a module.

**<a name="idp49836176"></a> Parameters**

<dl class="variablelist">

<dt>mod</dt>

<dd>

The module to log on behalf of. This is a pointer to a [generic_module_infrastructure](/momentum/3/3-api/structs-generic-module-infrastructure)

</dd>

<dt>level</dt>

<dd>

Typically one of the following: `DDEBUG`, `DINFO`, `DNOTICE`, `DWARNING`, `DERROR`, or `DCRITICAL`. If `level` is greater than the `debug_level` set in the module, then log it.

</dd>

<dt>fmt</dt>

<dd>

The string to log.

</dd>

<dt>arg</dt>

<dd>

Optional arguments????

</dd>

</dl>

**<a name="idp49848800"></a> Return Values**

This function returns `void`.

**<a name="idp49850160"></a> Threading**

It is legal to call this function in any thread.