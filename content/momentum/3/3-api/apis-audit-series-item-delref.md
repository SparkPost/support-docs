---
lastUpdated: "03/26/2020"
title: "audit_series_item_delref"
description: "audit series item delref Function to release the key list returned from audit series get items in head the head of linked list of items void audit series item delref head audit series item head This reference page was automatically generated from functions found in the header files in the..."
---

<a name="apis.audit_series_item_delref"></a> 
## Name

audit_series_item_delref — Function to release the key list returned from audit_series_get_items() [in] head - the head of linked list of items

## Synopsis

`#include "modules/validate/audit_series.h"`

| `void **audit_series_item_delref** (` | <var class="pdparam">head</var>`)`; |   |

`audit_series_item * <var class="pdparam">head</var>`;<a name="idp47241888"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Function to release the key list returned from audit_series_get_items() [in] head - the head of linked list of items.

**Configuration Change. ** This feature is available as of version 3.2.