---
lastUpdated: "03/26/2020"
title: "scpt_run_callout"
description: "scpt run callout Execute or resume execution of a scriptlet callout int scpt run callout thr resuming selfref co nargs args scpt thread thr int resuming void selfref scpt callout co int nargs void args This reference page was automatically generated from functions found in the header files in the..."
---

<a name="apis.scpt_run_callout"></a> 
## Name

scpt_run_callout — Execute or resume execution of a scriptlet callout

## Synopsis

`#include "modules/scriptlets/ec_scriptlet.h"`

| `int **scpt_run_callout** (` | <var class="pdparam">thr</var>, |   |
|   | <var class="pdparam">resuming</var>, |   |
|   | <var class="pdparam">selfref</var>, |   |
|   | <var class="pdparam">co</var>, |   |
|   | <var class="pdparam">nargs</var>, |   |
|   | <var class="pdparam">args</var>`)`; |   |

`scpt_thread * <var class="pdparam">thr</var>`;
`int <var class="pdparam">resuming</var>`;
`void * <var class="pdparam">selfref</var>`;
`scpt_callout * <var class="pdparam">co</var>`;
`int <var class="pdparam">nargs</var>`;
`void ** <var class="pdparam">args</var>`;<a name="idp59514688"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Execute or resume execution of a scriptlet callout.

selfref is a reference to a scriplet table which implements the callout method.

nargs indicates the number of args references by the args array, which must correspond to the parameters defined by the callout. The convention is to pass the pointer types in directly, but take the address of non-pointer parameters.

Returns one of SCPT_OK, SCPT_YIELD or SCPT_ERR.