---
lastUpdated: "03/26/2020"
title: "ec_parse_url"
description: "ec parse url parses an RFC 3986 URI ec url details ec parse url url len const char url int len This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of..."
---

<a name="apis.ec_parse_url"></a> 
## Name

ec_parse_url — parses an RFC 3986 URI

## Synopsis

`#include "misc/ec_url_parse.h"`

| `ec_url_details * **ec_parse_url** (` | <var class="pdparam">url</var>, |   |
|   | <var class="pdparam">len</var>`)`; |   |

`const char * <var class="pdparam">url</var>`;
`int <var class="pdparam">len</var>`;<a name="idp63925744"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

parses an RFC 3986 URI

Given a URI string, this function parses it according to RFC 3986, additionally parsing userinfo similarly to HTTP:

userinfo.user[:userinfo.pass]

and parsing the query similarly to HTTP:

key=value(&key=value)*

into the attrs dictionary. Since some schemes may not have further encoding within the query, or may not use the HTTP-like query encoding, a raw_query as well as a the entire (percent-decoded) query are made available. Failure to decode the query in an HTTP-like manner will not cause an error, but the attrs dictionary will be absent. A path is always returned, even if empty, per the spec. All values returned have been percent-decoded, except for uri and raw_query.

**<a name="idp63931536"></a> Parameters**

<dl class="variablelist">

<dt>url</dt>

<dd>

pointer to the URI string to parse

</dd>

<dt>len</dt>

<dd>

length of the URI string to parse

</dd>

</dl>

**<a name="idp63936112"></a> Return Values**

Returns an ec_url_details structure on success, or NULL on failure.