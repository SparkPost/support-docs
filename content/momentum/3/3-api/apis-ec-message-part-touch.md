---
lastUpdated: "03/26/2020"
title: "ec_message_part_touch"
description: "ec message part touch Flags a message part as having been modified void ec message part touch part what ec message part part int what Flags a message part as having been modified The touched status propagates up to the top level and is used to determine how the message..."
---

<a name="apis.ec_message_part_touch"></a> 
## Name

ec_message_part_touch — Flags a message part as having been modified

## Synopsis

`#include "ec_message.h"`

| `void **ec_message_part_touch** (` | <var class="pdparam">part</var>, |   |
|   | <var class="pdparam">what</var>`)`; |   |

`ec_message_part * <var class="pdparam">part</var>`;
`int <var class="pdparam">what</var>`;<a name="idp56462880"></a> 
## Description

Flags a message part as having been modified. The touched status propagates up to the top level and is used to determine how the message should be re-assembled for spooling.

**<a name="idp56464240"></a> Parameters**

<dl class="variablelist">

<dt>part</dt>

<dd>

The message part that was modified. A pointer to an ec_message_part struct. For documentation of this data structure see [“ec_message_part”](/momentum/3/3-api/structs-ec-message-part)

</dd>

<dt>what</dt>

<dd>

Flags (EC_MSG_HDR_XXX) that indicate what was modified.

</dd>

</dl>

**<a name="idp56469520"></a> Return Values**

This function returns void.

**<a name="idp56470432"></a> Related Constants**

<dl class="variablelist">

<dt>EC_MSG_HDR_EOL_FIX</dt>

<dd>

This part has or requires that line endings be fixed in its headers.

</dd>

<dt>EC_MSG_HDR_ADD</dt>

<dd>

This part had header(s) added.

</dd>

<dt>EC_MSG_HDR_REM</dt>

<dd>

This part had header(s) removed.

</dd>

<dt>EC_MSG_BODY_MODIFIED</dt>

<dd>

This part had its body modified.

</dd>

<dt>EC_MSG_BODY_LEN_FIX</dt>

<dd>

This part has or requires that the length of its lines be fixed.

</dd>

<dt>EC_MSG_BODY_EOL_FIX</dt>

<dd>

This part has or requires that line endings be fixed in its body.

</dd>

</dl>

**<a name="idp56482576"></a> Threading**

It is legal to call this function in any thread.

<a name="idp56483680"></a> 
## See Also

[ec_message_set_first_part](/momentum/3/3-api/apis-ec-message-set-first-part) and [ec_message_get_first_part](/momentum/3/3-api/apis-ec-message-get-first-part).