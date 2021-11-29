---
lastUpdated: "03/26/2020"
title: "ec_get_default_conf_path"
description: "ec get default conf path Return the default search path with parsed NODENAME and SUBCLUSTER references char ec get default conf path void This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available..."
---

<a name="apis.ec_get_default_conf_path"></a> 
## Name

ec_get_default_conf_path — Return the default search path, with parsed {NODENAME} and {SUBCLUSTER} references

## Synopsis

`#include "util.h"`

| `char * **ec_get_default_conf_path** (` | `)`; |   |

`void`;<a name="idp48927024"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Return the default search path, with parsed {NODENAME} and {SUBCLUSTER} references.

The caller is required to free the memory allocated by this function.

**<a name="idp48930448"></a> Return Values**

returns a pointer to a colon-separated path list that must be freed by the caller when it is no longer required.