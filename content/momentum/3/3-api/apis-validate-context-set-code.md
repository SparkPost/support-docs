---
lastUpdated: "03/26/2020"
title: "validate_context_set_code"
description: "validate context set code Set the SMTP response code and message for the session int validate context set code vctx code str validate context vctx int code const char str This reference page was automatically generated from functions found in the header files in the development branch The function described..."
---

<a name="apis.validate_context_set_code"></a> 
## Name

validate_context_set_code — Set the SMTP response code and message for the session

## Synopsis

`#include "validate.h"`

| `int **validate_context_set_code** (` | <var class="pdparam">vctx</var>, |   |
|   | <var class="pdparam">code</var>, |   |
|   | <var class="pdparam">str</var>`)`; |   |

`validate_context * <var class="pdparam">vctx</var>`;
`int <var class="pdparam">code</var>`;
`const char * <var class="pdparam">str</var>`;<a name="idp64556784"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Set the SMTP response code and message for the session.