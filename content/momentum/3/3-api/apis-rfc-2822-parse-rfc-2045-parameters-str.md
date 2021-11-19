---
lastUpdated: "03/26/2020"
title: "rfc2822_parse_rfc2045_parameters_str"
description: "rfc 2822 parse rfc 2045 parameters str Parse out the RFC 2045 parameters of a header value string into a dictionary EC Dict rfc 2822 parse rfc 2045 parameters str str const char str This reference page was automatically generated from functions found in the header files in the development..."
---

<a name="apis.rfc2822_parse_rfc2045_parameters_str"></a> 
## Name

rfc2822_parse_rfc2045_parameters_str — Parse out the RFC2045 parameters of a header value string into a dictionary

## Synopsis

`#include "rfc2822_parser.h"`

| `ECDict **rfc2822_parse_rfc2045_parameters_str** (` | <var class="pdparam">str</var>`)`; |   |

`const char * <var class="pdparam">str</var>`;<a name="idp58769104"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Parse out the RFC2045 parameters of a header value string into a dictionary.

This function is a wrapper around rfc2822_parse_rfc2045_parameters.

**<a name="idp58772528"></a> Parameters**

<dl class="variablelist">

<dt>str</dt>

<dd>

a header value

</dd>

</dl>

**<a name="idp58775232"></a> Return Values**

a dictionary

**Configuration Change. ** This feature is available starting from Momentum 3.1.