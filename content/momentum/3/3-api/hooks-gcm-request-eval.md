---
lastUpdated: "03/26/2020"
title: "request_eval"
description: "request eval Called prior to sending to a GCM notification int request eval closure request msg void closure gcm request request ec message msg Configuration Change This feature is available as of version 3 5 5 This hook is called prior to sending to the Google Cloud Messaging GCM notification..."
---

<a name="hooks.gcm.request_eval"></a> 
## Name

request_eval — Called prior to sending to a GCM notification

## Synopsis

`#include "modules/mobility/gcm/gcm.h"`

| `int **request_eval** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">request</var>, |   |
|   | <var class="pdparam">msg</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`gcm_request * <var class="pdparam">request</var>`;
`ec_message * <var class="pdparam">msg</var>`;<a name="idp36850784"></a> 
## Description

**Configuration Change. ** This feature is available as of version 3.5.5.

This hook is called prior to sending to the Google Cloud Messaging (GCM) notification server. Use this hook to inspect or modify the request before delivery to Google. The request has been built from the MCMT by extracting the headers and JSON message payload from the MIME part and encoding them into a JSON string suitable for injection.

**<a name="idp36854000"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

The closure function.

</dd>

<dt>request</dt>

<dd>

The GCM request. For a description of this data type see [“gcm_request”](/momentum/3/3-api/structs-gcm-request).

</dd>

<dt>msg</dt>

<dd>

The message. For a description of this data type see [“ec_message”](/momentum/3/3-api/structs-ec-message).

</dd>

</dl>

**<a name="idp36861520"></a> Return Values**

This hook returns zero or 1\. If non-zero, no further hook providers are called.

**<a name="idp36862496"></a> Threading**

This hook will be called in any thread.

<a name="idp36863520"></a> 
## See Also

[Momentum for Mobile Push Notifications](/momentum/3/3-push) and [*Hooks in the gcm Scope*](/momentum/3/3-api/hooks-gcm) .