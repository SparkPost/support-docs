---
lastUpdated: "03/26/2020"
title: "ec_fc_invalidate"
description: "ec fc invalidate Remove an entry from the cache and delete the cache reference int ec fc invalidate entry ec fc entry t entry This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally..."
---

<a name="apis.ec_fc_invalidate"></a> 
## Name

ec_fc_invalidate — Remove an entry from the cache and delete the cache reference

## Synopsis

`#include "ec_fc.h"`

| `int **ec_fc_invalidate** (` | <var class="pdparam">entry</var>`)`; |   |

`ec_fc_entry_t * <var class="pdparam">entry</var>`;<a name="idp52182288"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Remove an entry from the cache and delete the cache reference.

**<a name="idp52185184"></a> Parameters**

<dl class="variablelist">

<dt>entry</dt>

<dd>

entry to invalidate from cache.

</dd>

</dl>

**<a name="idp52187920"></a> Return Values**

Returns 0 on success, non-zero on failure.