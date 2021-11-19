---
lastUpdated: "03/26/2020"
title: "cidr_query"
description: "cidr query Obtain data associated with a CIDR block int cidr query name addr ac bag value resumeptr resumefunc const char name char addr accept construct ac ec bag bag string value void resumeptr void void resumefunc Obtain data associated with a CIDR block In order to use this function..."
---

<a name="apis.cidr_query"></a> 
## Name

cidr_query — Obtain data associated with a CIDR block

## Synopsis

`#include "modules/generic/cidrdb.h"`

| `int **cidr_query** (` | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">addr</var>, |   |
|   | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">bag</var>, |   |
|   | <var class="pdparam">value</var>, |   |
|   | <var class="pdparam">resumeptr</var>, |   |
|   | <var class="pdparam">resumefunc</var>`)`; |   |

`const char * <var class="pdparam">name</var>`;
`char * <var class="pdparam">addr</var>`;
`accept_construct * <var class="pdparam">ac</var>`;
`ec_bag * <var class="pdparam">bag</var>`;
`string * <var class="pdparam">value</var>`;
`void * <var class="pdparam">resumeptr</var>`;
`void(*)(void *) <var class="pdparam">resumefunc</var>`;<a name="idp48255104"></a> 
## Description

Obtain data associated with a CIDR block. In order to use this function you must load the [cidrdb](/momentum/3/3-reference/3-reference-modules-cidrdb) module.

**<a name="idp48257152"></a> Parameters**

<dl class="variablelist">

<dt>name</dt>

<dd>

The name of the CIDR block.

</dd>

<dt>addr</dt>

<dd>

the address of interest (may be NULL).

</dd>

<dt>ac</dt>

<dd>

The accept construct (may be NULL). For more information about this struct see [“accept_construct”](/momentum/3/3-api/structs-accept-construct).

</dd>

<dt>bag</dt>

<dd>

The environmental bag (may be NULL). For more information about this struct see [“ec_bag”](/momentum/3/3-api/structs-ec-bag).

</dd>

<dt>value</dt>

<dd>

The variable to hold the matching value, or NULL if you are not interested.

</dd>

<dt>resumeptr</dt>

<dd>

The context for the resumefunc (may be NULL).

</dd>

<dt>resumefunc</dt>

<dd>

The optional resumption function (may be NULL).

</dd>

</dl>

**<a name="idp48272272"></a> Return Values**

This function returns `1` if the query matched an entry in the CIDR, or `0` if it does not.

If the resumefunc is specified, then in cases where the underlying data is pending resolution, the cidr_query function will return CIDR_QUERY_PENDING and will arrange to call resumefunc(resumeptr) when the load completes.

If resumefunc is not provided, and the data is pending, then the caller will block until it is made available.