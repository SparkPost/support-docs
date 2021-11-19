---
lastUpdated: "03/26/2020"
title: "ec_fc_entry_addref"
description: "ec fc entry addref Add a reference to an entry void ec fc entry addref entry ec fc entry t entry This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of..."
---

<a name="apis.ec_fc_entry_addref"></a> 
## Name

ec_fc_entry_addref — Add a reference to an entry

## Synopsis

`#include "ec_fc.h"`

| `void **ec_fc_entry_addref** (` | <var class="pdparam">entry</var>`)`; |   |

`ec_fc_entry_t * <var class="pdparam">entry</var>`;<a name="idp52126864"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Add a reference to an entry.

Must be used before storing to a cache.

**<a name="idp52130208"></a> Parameters**

<dl class="variablelist">

<dt>entry</dt>

<dd>

entry to add to cache

</dd>

</dl>