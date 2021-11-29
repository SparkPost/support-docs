---
lastUpdated: "03/26/2020"
title: "ec_converter_open"
description: "ec converter open open a converter ec converter ec converter open fromcode tocode status const char fromcode const char tocode int status This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions..."
---

<a name="apis.ec_converter_open"></a> 
## Name

ec_converter_open — open a converter

## Synopsis

`#include "misc/converter.h"`

| `ec_converter * **ec_converter_open** (` | <var class="pdparam">fromcode</var>, |   |
|   | <var class="pdparam">tocode</var>, |   |
|   | <var class="pdparam">status</var>`)`; |   |

`const char * <var class="pdparam">fromcode</var>`;
`const char * <var class="pdparam">tocode</var>`;
`int * <var class="pdparam">status</var>`;<a name="idp57452560"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

open a converter.

The converter can be used to convert from one encoding to another, optionally applying case folding.

The converter is a fairly low-level streaming capable API that maintains conversion state between chunks of data.

By default, the system iconv(3) routines are used, so the supported encodings are those provided by your system iconv(3) library. You may also load the ICU module in your `ecelerity.conf` to increase the number of supported encodings.

In addition, we provide "base64" and "quoted-printable" converters that allow you to convert to and from those transfer encoding schemes.

**<a name="idp57458224"></a> Parameters**

<dl class="variablelist">

<dt>fromcode</dt>

<dd>

the encoding used for the input data

</dd>

<dt>tocode</dt>

<dd>

the encoding to be used for the output data

</dd>

<dt>status</dt>

<dd>

returns additional information about the operation of opening the converter.

</dd>

</dl>

You must not use a converter from multiple threads; create and destroy them as you need them, and the infrastructure will ensure that this is as efficient as possible.