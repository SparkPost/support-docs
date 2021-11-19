---
lastUpdated: "03/26/2020"
title: "ec_converter_convert"
description: "ec converter convert Convert a chunk of data int ec converter convert conv srcbuf srcbuflen destbuf destbuflen src consumed dest used ec converter conv const char srcbuf size t srcbuflen char destbuf size t destbuflen size t src consumed size t dest used This reference page was automatically generated from..."
---

<a name="apis.ec_converter_convert"></a> 
## Name

ec_converter_convert — Convert a chunk of data

## Synopsis

`#include "misc/converter.h"`

| `int **ec_converter_convert** (` | <var class="pdparam">conv</var>, |   |
|   | <var class="pdparam">srcbuf</var>, |   |
|   | <var class="pdparam">srcbuflen</var>, |   |
|   | <var class="pdparam">destbuf</var>, |   |
|   | <var class="pdparam">destbuflen</var>, |   |
|   | <var class="pdparam">src_consumed</var>, |   |
|   | <var class="pdparam">dest_used</var>`)`; |   |

`ec_converter * <var class="pdparam">conv</var>`;
`const char * <var class="pdparam">srcbuf</var>`;
`size_t <var class="pdparam">srcbuflen</var>`;
`char * <var class="pdparam">destbuf</var>`;
`size_t <var class="pdparam">destbuflen</var>`;
`size_t * <var class="pdparam">src_consumed</var>`;
`size_t * <var class="pdparam">dest_used</var>`;<a name="idp57423728"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Convert a chunk of data.

Pushes a chunk of data through a converter. The converter transforms the data and stores it into your destination buffer.

**<a name="idp57427152"></a> Parameters**

<dl class="variablelist">

<dt>conv</dt>

<dd>

an existing converter

</dd>

<dt>srcbuf</dt>

<dd>

the data buffer to convert

</dd>

<dt>srcbuflen</dt>

<dd>

the size of the input data buffer in bytes

</dd>

<dt>destbuf</dt>

<dd>

receives converted data

</dd>

<dt>destbuflen</dt>

<dd>

the size of the destination buffer

</dd>

<dt>src_consumed</dt>

<dd>

the number of bytes consumed from srcbuf

</dd>

<dt>dest_used</dt>

<dd>

the number of bytes used in destbuf

</dd>

</dl>

If you have reached the end of your input stream, you should call this function one final time with a NULL srcbuf and 0 srcbuflen. The converter may emit an epilogue to terminate the decoded data, so you should anticipate that you will receive data in your destination buffer in this case.

**<a name="idp57441744"></a> Return Values**

Returns ECCONV_OK on success, or some other value on error.