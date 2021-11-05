---
lastUpdated: "03/26/2020"
title: "ec_growbuf_io_cur_chunk"
description: "ec growbuf io cur chunk Return a pointer to the current growbuf chunk and its length int ec growbuf io cur chunk io outbuf io object io char outbuf This reference page was automatically generated from functions found in the header files in the development branch The function described here..."
---

<a name="apis.ec_growbuf_io_cur_chunk"></a> 
## Name

ec_growbuf_io_cur_chunk — Return a pointer to the current growbuf chunk and its length

## Synopsis

`#include "ec_growbuf.h"`

| `int **ec_growbuf_io_cur_chunk** (` | <var class="pdparam">io</var>, |   |
|   | <var class="pdparam">outbuf</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;
`char ** <var class="pdparam">outbuf</var>`;<a name="idp48021280"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Return a pointer to the current growbuf chunk and its length.

**<a name="idp48024176"></a> Parameters**

<dl class="variablelist">

<dt>io</dt>

<dd>

the io_object corresponding to the growbuf string

</dd>

<dt>outbuf</dt>

<dd>

filled in with a pointer to the current chunk or NULL if there is none

</dd>

</dl>

**<a name="idp48028832"></a> Return Values**

Returns the length of the current chunk