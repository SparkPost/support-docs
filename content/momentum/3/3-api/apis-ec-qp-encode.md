---
lastUpdated: "03/26/2020"
title: "ec_qp_encode"
description: "ec qp encode Quoted printable encode a string int ec qp encode src src len dest dest len const char src size t src len char dest size t dest len Quoted printable encode a string src The source string src len The length of the source string dest The..."
---

<a name="apis.ec_qp_encode"></a> 
## Name

ec_qp_encode — Quoted-printable encode a string

## Synopsis

`#include "util.h"`

| `int **ec_qp_encode** (` | <var class="pdparam">src</var>, |   |
|   | <var class="pdparam">src_len</var>, |   |
|   | <var class="pdparam">dest</var>, |   |
|   | <var class="pdparam">dest_len</var>`)`; |   |

`const char * <var class="pdparam">src</var>`;
`size_t <var class="pdparam">src_len</var>`;
`char * <var class="pdparam">dest</var>`;
`size_t <var class="pdparam">dest_len</var>`;<a name="idp47680288"></a> 
## Description

Quoted-printable encode a string.

**<a name="idp47681504"></a> Parameters**

<dl class="variablelist">

<dt>src</dt>

<dd>

The source string.

</dd>

<dt>src_len</dt>

<dd>

The length of the source string.

</dd>

<dt>dest</dt>

<dd>

The destination buffer that will hold the encoded result.

</dd>

<dt>dest_len</dt>

<dd>

The size of the destination buffer.

</dd>

</dl>

**<a name="idp47689808"></a> Return Values**

0 on failure, or the length of the encoded result on success

**<a name="idp47690768"></a> Threading**

It is legal to call this function in any thread.