---
lastUpdated: "03/26/2020"
title: "assess_batch"
description: "assess batch Allow a module to assume responsibility for batch assessment int core assess batch closure dc dr bs conn limit pb limit pc void closure delivery construct dc domain record dr ec binding slot bs connection conn int limit pb int limit pc This hook allows a module to..."
---

<a name="hooks.core.assess_batch"></a> 
## Name

assess_batch — Allow a module to assume responsibility for batch assessment

## Synopsis

`#include "hooks/core/assess_batch.h"`

| `int **core_assess_batch** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">dc</var>, |   |
|   | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">bs</var>, |   |
|   | <var class="pdparam">conn</var>, |   |
|   | <var class="pdparam">limit_pb</var>, |   |
|   | <var class="pdparam">limit_pc</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`delivery_construct * <var class="pdparam">dc</var>`;
`domain_record * <var class="pdparam">dr</var>`;
`ec_binding_slot <var class="pdparam">bs</var>`;
`connection * <var class="pdparam">conn</var>`;
`int <var class="pdparam">limit_pb</var>`;
`int <var class="pdparam">limit_pc</var>`;<a name="idp40316032"></a> 
## Description

This hook allows a module to assume responsibility for batch assessment. It must read the custom annotation set in the [annotate_batch](/momentum/3/3-api/hooks-core-annotate-batch) hook from the message context for each message in the batch, set up the batch in the delivery context (see below for "successfully assessed"), and set the `batch_assessed` flag in the delivery context to true. This hook must be used in conjunction with the `core_annotate_batch` hook.

If the batch is successfully assessed, the messages must be dequeued from the live queue, validated that the messages belong to the same binding and domain container, and the message pointer must be appended to the delivery_construct.batch ec_ptr_array. When the batch is successfully assessed '1' must be returned. Returning '1' also means no other implementations of this hook will be called.

**<a name="idp40319936"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

The closure function.

</dd>

<dt>dc</dt>

<dd>

The delivery construct for the message about to be delivered. The message can be found in dc->message. The other parameters are optional, however the caller will take responsibility for determining which messages in a batch are actually eligible for delivery in this batch. For more information about this structure see [“delivery_construct”](/momentum/3/3-api/structs-delivery-construct).

</dd>

<dt>dr</dt>

<dd>

The domain record. For information about this structure see [“domain_record”](/momentum/3/3-api/structs-domain-record). This parameter is optional.

</dd>

<dt>conn</dt>

<dd>

The connection. For information about this structure see [“connection”](/momentum/3/3-api/structs-connection). This parameter is optional.

</dd>

<dt>bs</dt>

<dd>

The binding associated with a message. This parameter is optional.

</dd>

<dt>limit_pb</dt>

<dd>

Limit the number of messages per batch. See the configuration option, [max_messages_per_connection](/momentum/3/3-reference/conf-ref-max-recipients-per-connection). This parameter is optional.

</dd>

<dt>limit_pc</dt>

<dd>

Limit the number of messages per connection. See the configuration option, [max_deliveries_per_connection](/momentum/3/3-reference/3-reference-conf-ref-max-deliveries-per-connection). This parameter is optional.

</dd>

</dl>

**<a name="idp36882896"></a> Return Values**

When the batch is successfully assessed, `1` must be returned. Returning `1` also means no other implementations of this hook will be called.

**<a name="idp36884704"></a> Threading**

This hook will be called in the `Scheduler` thread.

<a name="idp36886224"></a> 
## See Also

[annotate_batch](/momentum/3/3-api/hooks-core-annotate-batch)