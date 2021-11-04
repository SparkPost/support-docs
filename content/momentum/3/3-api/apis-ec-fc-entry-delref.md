---
lastUpdated: "03/26/2020"
title: "ec_fc_entry_delref"
description: "ec fc entry delref Delete a reference from an entry if no references exist then also call the destructor routine void ec fc entry delref entry ec fc entry t entry This reference page was automatically generated from functions found in the header files in the development branch The function..."
---

<a name="apis.ec_fc_entry_delref"></a> 
## Name

ec_fc_entry_delref — Delete a reference from an entry, if no references exist then also call the destructor routine

## Synopsis

`#include "ec_fc.h"`

| `void **ec_fc_entry_delref** (` | <var class="pdparam">entry</var>`)`; |   |

`ec_fc_entry_t * <var class="pdparam">entry</var>`;<a name="idp52141328"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Delete a reference from an entry, if no references exist then also call the destructor routine.

**<a name="idp52144256"></a> Parameters**

<dl class="variablelist">

<dt>entry</dt>

<dd>

entry to delete reference from

</dd>

</dl>