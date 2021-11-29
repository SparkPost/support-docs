---
lastUpdated: "03/26/2020"
title: "ec_convert_io"
description: "ec convert io Convert an io stream from one encoding to another io object ec convert io from fromcode tocode io object from const char fromcode const char tocode This reference page was automatically generated from functions found in the header files in the development branch The function described here..."
---

<a name="apis.ec_convert_io"></a> 
## Name

ec_convert_io — Convert an io stream from one encoding to another

## Synopsis

`#include "misc/converter.h"`

| `io_object * **ec_convert_io** (` | <var class="pdparam">from</var>, |   |
|   | <var class="pdparam">fromcode</var>, |   |
|   | <var class="pdparam">tocode</var>`)`; |   |

`io_object * <var class="pdparam">from</var>`;
`const char * <var class="pdparam">fromcode</var>`;
`const char * <var class="pdparam">tocode</var>`;<a name="idp47613504"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Convert an io stream from one encoding to another.

**<a name="idp47616384"></a> Parameters**

<dl class="variablelist">

<dt>from</dt>

<dd>

the io stream whose encoding is to be converted

</dd>

<dt>fromcode</dt>

<dd>

the encoding used for the input data

</dd>

<dt>tocode</dt>

<dd>

the encoding to be used for the output data

</dd>

</dl>

**<a name="idp47622848"></a> Return Values**

io stream with desired encoding

**Configuration Change. ** This feature is available starting from Momentum 3.1.