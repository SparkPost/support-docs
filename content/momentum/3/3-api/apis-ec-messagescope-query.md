---
lastUpdated: "03/26/2020"
title: "ec_messagescope_query"
description: "ec messagescope query Query for reputation record int ec messagescope query listname m ac ctx ip to from error text error len status expiration version parameter const char listname ec message m accept construct ac validate context ctx const char ip const char to const char from char error text..."
---

<a name="apis.ec_messagescope_query"></a> 
## Name

ec_messagescope_query — Query for reputation record

## Synopsis

`#include "modules/validate/ec_messagescope.h"`

| `int **ec_messagescope_query** (` | <var class="pdparam">listname</var>, |   |
|   | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">ip</var>, |   |
|   | <var class="pdparam">to</var>, |   |
|   | <var class="pdparam">from</var>, |   |
|   | <var class="pdparam">error_text</var>, |   |
|   | <var class="pdparam">error_len</var>, |   |
|   | <var class="pdparam">status</var>, |   |
|   | <var class="pdparam">expiration</var>, |   |
|   | <var class="pdparam">version</var>, |   |
|   | <var class="pdparam">parameter</var>`)`; |   |

`const char * <var class="pdparam">listname</var>`;
`ec_message * <var class="pdparam">m</var>`;
`accept_construct * <var class="pdparam">ac</var>`;
`validate_context * <var class="pdparam">ctx</var>`;
`const char * <var class="pdparam">ip</var>`;
`const char * <var class="pdparam">to</var>`;
`const char * <var class="pdparam">from</var>`;
`char * <var class="pdparam">error_text</var>`;
`int <var class="pdparam">error_len</var>`;
`char ** <var class="pdparam">status</var>`;
`char ** <var class="pdparam">expiration</var>`;
`char ** <var class="pdparam">version</var>`;
`char ** <var class="pdparam">parameter</var>`;<a name="idp57526880"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Query for reputation record.

Caller must provide a list name plus supplemental information. Depending on type of the list, additional inputs besides list name are needed: type = IP -- ac/ip is needed. Here ac/ip means with ac or IP. type = IP:recip -- (ac, m)/(ip,to) are needed. type = Envelope -- m/(to,from) are needed.

**<a name="idp57530512"></a> Parameters**

<dl class="variablelist">

<dt>listname</dt>

<dd>

- name of the list to be queried.

</dd>

<dt>m</dt>

<dd>

- message.

</dd>

<dt>ac</dt>

<dd>

- accept construct.

</dd>

<dt>ctx</dt>

<dd>

- validation context.

</dd>

<dt>ip</dt>

<dd>

- IP address. Supplemental information for the look up.

</dd>

<dt>to</dt>

<dd>

- rcptto, envelop information.

</dd>

<dt>from</dt>

<dd>

- mailfrom, envelop informatin.

</dd>

<dt>ntries</dt>

<dd>

- this is (ntries)th attempt for the case of return status = 0 (i.e. not ready yet).

</dd>

<dt>wait_interval</dt>

<dd>

- in case of return status = 0, please wait this mount of seconds before trying again.

</dd>

<dt>error_text</dt>

<dd>

- error text. Should be consulted only if return status is -1.

</dd>

<dt>error_len</dt>

<dd>

- buffer length of error_text.

</dd>

<dt>status</dt>

<dd>

- query status: miss, error, hit.

</dd>

<dt>expiration</dt>

<dd>

- expiration time in string format.

</dd>

<dt>version</dt>

<dd>

- version.

</dd>

<dt>parameter</dt>

<dd>

- parameter.

</dd>

</dl>

**<a name="idp57559456"></a> Return Values**

-1 for error; 0 for not ready (please try again); 1 for result is returned.

**Configuration Change. ** This feature is available starting from Momentum 3.1.