---
lastUpdated: "03/26/2020"
title: "ec_fc_entry_reset"
description: "ec fc entry reset Reset an entry to a known state void ec fc entry reset entry ec fc entry t entry This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions..."
---

<a name="apis.ec_fc_entry_reset"></a> 
## Name

ec_fc_entry_reset — Reset an entry to a known state

## Synopsis

`#include "ec_fc.h"`

| `void **ec_fc_entry_reset** (` | <var class="pdparam">entry</var>`)`; |   |

`ec_fc_entry_t * <var class="pdparam">entry</var>`;<a name="idp52155376"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Reset an entry to a known state.

Must be called at least before the first use of an entry with ec_fc.

**<a name="idp52158752"></a> Parameters**

<dl class="variablelist">

<dt>entry</dt>

<dd>

The entry to initialize.

</dd>

</dl>