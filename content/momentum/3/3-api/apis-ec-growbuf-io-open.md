---
lastUpdated: "03/26/2020"
title: "ec_growbuf_io_open"
description: "ec growbuf io open Allocate and initialize an io object for a new growbuf backed string io object ec growbuf io open size size t size This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist..."
---

<a name="apis.ec_growbuf_io_open"></a> 
## Name

ec_growbuf_io_open — Allocate and initialize an io_object for a new growbuf-backed string

## Synopsis

`#include "ec_growbuf.h"`

| `io_object * **ec_growbuf_io_open** (` | <var class="pdparam">size</var>`)`; |   |

`size_t <var class="pdparam">size</var>`;<a name="idp48055840"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Allocate and initialize an io_object for a new growbuf-backed string.

**<a name="idp48058736"></a> Parameters**

<dl class="variablelist">

<dt>size</dt>

<dd>

the size of the initial buffer to allocate (including the terminating NUL) or 0 to use the growbuf_size configuration value

</dd>

</dl>

**<a name="idp48061600"></a> Return Values**

Returns the new io_object on success or NULL on failute