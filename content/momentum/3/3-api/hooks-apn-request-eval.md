---
lastUpdated: "03/26/2020"
title: "request_eval"
description: "request eval Called prior to sending to AP Ns int request eval closure request msg void closure apn request request ec message msg Configuration Change This feature is available as of version 3 5 5 This hook is called prior to sending to the Apple push notification server closure The..."
---

<a name="hooks.apn.request_eval"></a> 
## Name

request_eval — Called prior to sending to APNs

## Synopsis

`#include "modules/mobility/apn/apn.h"`

| `int **request_eval** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">request</var>, |   |
|   | <var class="pdparam">msg</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`apn_request * <var class="pdparam">request</var>`;
`ec_message * <var class="pdparam">msg</var>`;<a name="idp41945184"></a> 
## Description

**Configuration Change. ** This feature is available as of version 3.5.5.

This hook is called prior to sending to the Apple push notification server.

**<a name="idp41942208"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

The closure function.

</dd>

<dt>request</dt>

<dd>

The APN request. For a description of this data type see [“apn_request”](/momentum/3/3-api/structs-apn-request).

</dd>

<dt>msg</dt>

<dd>

The message. For a description of this data type see [“ec_message”](/momentum/3/3-api/structs-ec-message).

</dd>

</dl>

**<a name="idp45880800"></a> Return Values**

This hook returns zero or 1\. If non-zero, no further hook providers are called.

**<a name="idp45878336"></a> Threading**

This hook will be called in any thread.

<a name="idp45878896"></a> 
## See Also

[Momentum for Mobile Push Notifications](/momentum/3/3-push) and [*Hooks in the apn Scope*](/momentum/3/3-api/hooks-apn) .