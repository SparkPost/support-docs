---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_request_data_get_xml"
description: "ec httpsrv request data get xml Gets an XML object representation of the request payload data int ec httpsrv request data get xml sess xml ec httpsrv session sess xml Doc Ptr xml This reference page was automatically generated from functions found in the header files in the development branch..."
---

<a name="apis.ec_httpsrv_request_data_get_xml"></a> 
## Name

ec_httpsrv_request_data_get_xml — Gets an XML object representation of the request payload data

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `int **ec_httpsrv_request_data_get_xml** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">xml</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;
`xmlDocPtr * <var class="pdparam">xml</var>`;<a name="idp52827360"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Gets an XML object representation of the request payload data.

**<a name="idp52830256"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to interrogate

</dd>

<dt>xml</dt>

<dd>

returns the XML document

</dd>

</dl>

Passes the payload data to the libxml2 parser and returns the resultant xmlDocPtr via the xml parameter.

**<a name="idp52835376"></a> Return Values**

0 on success, or an errno value indicating any issues with consuming the payload data.

The xml object will be set to the successfully created xml representation of the string on success, otherwise it will be NULL.

It is possible for the return value to be 0 and the xml parameter to be set to NULL. The likely cause of this is that that payload was not valid XML text.

The caller owns the return xml document and is responsible for calling xmlFreeDoc() when it is no longer needed.