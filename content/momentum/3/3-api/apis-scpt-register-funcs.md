---
lastUpdated: "03/26/2020"
title: "scpt_register_funcs"
description: "scpt register funcs registers a set of functions in a namespace int scpt register funcs thr name space funcs scpt thread thr const char name space struct scpt obj method funcs This reference page was automatically generated from functions found in the header files in the development branch The function..."
---

<a name="apis.scpt_register_funcs"></a> 
## Name

scpt_register_funcs — registers a set of functions in a namespace

## Synopsis

`#include "modules/scriptlets/ec_scriptlet.h"`

| `int **scpt_register_funcs** (` | <var class="pdparam">thr</var>, |   |
|   | <var class="pdparam">name_space</var>, |   |
|   | <var class="pdparam">funcs</var>`)`; |   |

`scpt_thread * <var class="pdparam">thr</var>`;
`const char * <var class="pdparam">name_space</var>`;
`struct scpt_obj_method * <var class="pdparam">funcs</var>`;<a name="idp59470624"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

registers a set of functions in a namespace.

The functions provided by Message Systems reside in the msys namespace. Customers and 3rd Party vendors should choose a convenient prefix that is unlikely to collide with functions provided by other modules.

The suggested convention is to use a short identifier for the company name, followed by the name of the module that provides them. For instance, if ACME provided a module called "spam", then "acme.spam" would be an appropriate namespace.