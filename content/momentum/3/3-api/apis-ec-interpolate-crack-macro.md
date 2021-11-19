---
lastUpdated: "03/26/2020"
title: "ec_interpolate_crack_macro"
description: "ec interpolate crack macro Return the name and argument portions of a macro string int ec interpolate crack macro input style namestart nameend argstart argend const string input int style const char namestart const char nameend const char argstart const char argend This function returns the name and argument portions..."
---

<a name="apis.ec_interpolate_crack_macro"></a> 
## Name

ec_interpolate_crack_macro — Return the name and argument portions of a macro string

## Synopsis

`#include "misc/expand_string.h"`

| `int **ec_interpolate_crack_macro** (` | <var class="pdparam">input</var>, |   |
|   | <var class="pdparam">style</var>, |   |
|   | <var class="pdparam">namestart</var>, |   |
|   | <var class="pdparam">nameend</var>, |   |
|   | <var class="pdparam">argstart</var>, |   |
|   | <var class="pdparam">argend</var>`)`; |   |

`const string * <var class="pdparam">input</var>`;
`int <var class="pdparam">style</var>`;
`const char ** <var class="pdparam">namestart</var>`;
`const char ** <var class="pdparam">nameend</var>`;
`const char ** <var class="pdparam">argstart</var>`;
`const char ** <var class="pdparam">argend</var>`;<a name="idp53380976"></a> 
## Description

This function returns the name and argument portions of a macro string.

A helper function for getting at the name and argument pieces of a macro from inside an ec_interpolator_func. This is required because there are multiple styles of macro placeholders in the various Message Systems' products/ Additionally, macro styles may be expanded in the future.

**<a name="idp53382992"></a> Parameters**

<dl class="variablelist">

<dt>input</dt>

<dd>

The input parameter to the interpolator function.

</dd>

<dt>style</dt>

<dd>

The placeholder style detected by the parser.

</dd>

<dt>namestart</dt>

<dd>

Set to point to the first character of the macro. name.

</dd>

<dt>nameend</dt>

<dd>

Set to point to the character after the last character of the macro name.

</dd>

<dt>argstart</dt>

<dd>

Set to point to the first character of the argument, or `NULL` if not present.

</dd>

<dt>argend</dt>

<dd>

Set to point to the character after the last character of the macro argument, or `NULL` if not present.

</dd>

</dl>

**<a name="idp53396096"></a> Return Values**

This function returns non-zero if successful; on error it returns zero.

**<a name="idp53397072"></a> Threading**

It is legal to call this function in any thread.