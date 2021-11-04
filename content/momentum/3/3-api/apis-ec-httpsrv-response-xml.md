---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_response_xml"
description: "ec httpsrv response xml Set the session response to an XML object int ec httpsrv response xml sess xmldoc ec httpsrv session sess xml Doc Ptr xmldoc This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.ec_httpsrv_response_xml"></a> 
## Name

ec_httpsrv_response_xml — Set the session response to an XML object

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `int **ec_httpsrv_response_xml** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">xmldoc</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;
`xmlDocPtr <var class="pdparam">xmldoc</var>`;<a name="idp53242240"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Set the session response to an XML object.

**<a name="idp53245104"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to modify

</dd>

<dt>xmldoc</dt>

<dd>

A libxml2 document

</dd>

</dl>

Sets the response payload to be the xml representation of the supplied xmldoc pointer.

**<a name="idp53250224"></a> Return Values**

0 if successful, else returns an errno indicating what went wrong. In particular, ENOMEM indicates that insuficient memory was available.