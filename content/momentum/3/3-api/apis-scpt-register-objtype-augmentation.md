---
lastUpdated: "03/26/2020"
title: "scpt_register_objtype_augmentation"
description: "scpt register objtype augmentation Manually augment a set of methods for an objtype int scpt register objtype augmentation type name methods const char type name struct scpt obj method methods This reference page was automatically generated from functions found in the header files in the development branch The function described..."
---

<a name="apis.scpt_register_objtype_augmentation"></a> 
## Name

scpt_register_objtype_augmentation — Manually augment a set of methods for an objtype

## Synopsis

`#include "modules/scriptlets/ec_scriptlet.h"`

| `int **scpt_register_objtype_augmentation** (` | <var class="pdparam">type_name</var>, |   |
|   | <var class="pdparam">methods</var>`)`; |   |

`const char * <var class="pdparam">type_name</var>`;
`struct scpt_obj_method * <var class="pdparam">methods</var>`;<a name="idp59496864"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Manually augment a set of methods for an objtype.

Ideally, the API scanning tool will do a fine job of generating wrappers for the C APIs, but in some cases it is necessary to provide additional functions to improve the usability of the generated code.

An example of this is providing metamethods to string-like objects.

Call [scpt_register_objtype_augmentation](/momentum/3/3-api/apis-scpt-register-objtype-augmentation) prior to the auto-generated [scpt_register_objtype](/momentum/3/3-api/apis-scpt-register-objtype) call for this to kick in.