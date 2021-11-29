---
lastUpdated: "03/26/2020"
title: "rfc2822_clone_headers"
description: "rfc 2822 clone headers Clones the headers portion of an rfc 2822 context rfc 2822 context rfc 2822 clone headers ctx rfc 2822 context ctx This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in..."
---

<a name="apis.rfc2822_clone_headers"></a> 
## Name

rfc2822_clone_headers — Clones the headers portion of an rfc2822 context

## Synopsis

`#include "rfc2822_parser.h"`

| `rfc2822_context * **rfc2822_clone_headers** (` | <var class="pdparam">ctx</var>`)`; |   |

`rfc2822_context * <var class="pdparam">ctx</var>`;<a name="idp58577136"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Clones the headers portion of an rfc2822 context.

You must call [rfc2822_free_context](/momentum/3/3-api/apis-rfc-2822-free-context) to dispose of the clone when you are done with it.