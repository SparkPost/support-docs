---
lastUpdated: "03/26/2020"
title: "ec_message_context_discard"
description: "ec message context discard Discards the context dictionaries They will be re fetched on demand void ec message context discard mess ec message mess Discards the message context dictionaries for this message They will be re fetched on demand mess A pointer to an ec message struct For documentation of..."
---

<a name="apis.ec_message_context_discard"></a> 
## Name

ec_message_context_discard — Discards the context dictionaries. They will be re-fetched on demand

## Synopsis

`#include "ec_message.h"`

| `void **ec_message_context_discard** (` | <var class="pdparam">mess</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;<a name="idp55374672"></a> 
## Description

Discards the message context dictionaries for this message. They will be re-fetched on demand.

**<a name="idp55375952"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

</dl>

**<a name="idp55379312"></a> Return Values**

This function returns void.

**<a name="idp55380224"></a> Threading**

It is **legal** to call this function in any thread. *However, it is strongly recommended that it only be called from the scheduler thread.* 

<a name="idp55382560"></a> 
## See Also

[ec_message_context_set](/momentum/3/3-api/apis-ec-message-context-set),[ec_message_context_exists](/momentum/3/3-api/apis-ec-message-context-exists), [ec_message_context_exists_and_get](/momentum/3/3-api/apis-ec-message-context-exists-and-get), and [ec_message_context_delete](/momentum/3/3-api/apis-ec-message-context-delete)