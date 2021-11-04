---
lastUpdated: "03/26/2020"
title: "Retrying Messages"
description: "If a message is delivered via SMPP or MM 7 and it is not possible to deliver it immediately it can be stored and resent later This is done using the mstore module For an SMPP message delivery is indicated by a delivery receipt and for MM 7 by a..."
---


If a message is delivered via SMPP or MM7 and it is not possible to deliver it immediately, it can be stored and resent later. This is done using the mstore module.

For an SMPP message, delivery is indicated by a delivery receipt and for MM7 by a delivery report. After a message is successfully submitted on SMPP or MM7, it may take a while to deliver it to the handset, or to decide it cannot be delivered. If it cannot be delivered, policy hooks can requeue the message to the same or another domain.

## <a name="mobility.message.retry.modules.mstore"></a> The mstore Module

In order to retry messages delivered via SMPP or MM7 the mstore module needs to be initialized. This module uses Riak to retain messages so a Riak server must be configured. If you accepted the default settings during installation, this should already be set up. For more information about Riak see [Riak](/momentum/3/3-reference/operations-riak) and [Riak Server](/momentum/3/3-reference/install-riak). The length of time that messages are retained is discussed in [“Message Retention”](/momentum/mobile/mobile-reference/mobility-message-retry-retention).

### Note

This module is available as of Momentum version 3.3.

To use this module the following mobility options must be set in the appropriate scope:

*   For SMPP messages set `smpp_registered_delivery` to `"SMSC_Delivery"` in the scope or scopes where you wish to track messages. For more information about this option see [smpp_registered_delivery](/momentum/mobile/mobile-reference/mobility-conf-smpp-registered-delivery).

*   For MM7 messages set `mm7_delivery_report` to `true` in the scope or scopes where you wish to track messages. For more information about this option see [mm7_delivery_report](/momentum/mobile/mobile-reference/mobility-conf-mm-7-delivery-report).

### <a name="modules.mstore.configuration"></a> Configuration

This module is a "singleton" and has only one option (apart from those common to all modules).

```
mstore {
  servers = ("127.0.0.1:8098")
}
```

<dl class="variablelist">

<dt>servers</dt>

<dd>

This option identifies the server or servers where Riak is running. The default value for this option is `("127.0.0.1:8098")`.

</dd>

</dl>

If more than one server url is specified by the `servers` option, a server is randomly selected from the list.

### <a name="modules.mstore.non-module.options"></a> Non-Module Options Related to mstore

In version 3.3 additional non-module options are introduced to support the mstore module. These options are as follows:

<dl class="variablelist">

<dt>mm7_mstore_save_message</dt>

<dd>

Whether or not to save messages for resubmission. This option must be enabled in order for the mstore module to function. The default value for this option is `true`.

This option is valid in the binding, binding_group, domain and global scopes.

</dd>

<dt>mm7_mstore_bucket_use_shortcode</dt>

<dd>

Whether or not to make use of the shortcode as part of the bucket ID. The Riak bucket ID is required when using mstore Lua functions or the mstore console commands. The default value for this option is `true`.

This option is valid in the global scope.

</dd>

</dl>

### <a name="modules.mstore.runtime.lua"></a> Runtime Usage: Lua

The following functions are provided through the Lua API:

*   `msys.mstore.save(msg, bucket_id, msgid)`: store an ec_message into Riak data storage.

*   `msg = msys.mstore.load(bucket_id, msgid)`: retrieve an ec_message from Riak data storage. Returns an ec_message.

*   `msys.mstore.inject(msg)`: inject the message back into spool. If you want to reroute the message to a different destination, it is recommended that you use the existing API method `msg:inject(from, to)` to do this. For more information about this function see [msg:inject](/momentum/3/3-reference/3-reference-lua-ref-msg-inject).

*   `msys.mstore.delete(bucket_id, msgid)`: delete a stored message entry from the Riak data storage

    ### Note

    The bucket ID is `MADR-`*`short_code`*, for example `MADR-12345`. `MADR-MM7` is used if there is no shortcode or the configuration option `mm7_mstore_bucket_use_shortcode` is set to `false`.

A code example using these functions is given in [“MM7 hook implementation”](/momentum/mobile/mobile-reference/mobility-message-retry#modules.mstore.console.hook.points.example).

### <a name="modules.mstore.console.smpp.hook.points"></a> SMPP Hook Points

The SMPP hook points provided by the SMPP module are as follows:

*   `smpp_store_submit(ec_message * msg, const char * bucket, const char * msgid)`

    The purpose of this hook is to suppress storing messages in the mstore or to provide alternate storage. A return of non-zero from these hooks suppresses the default storage.

    This hook is called on a successful SMPP submission. The return values are as follows:

    *   `MSTORE_CONTINUE (0)` – continue with the default action, which is to store the message, along with the bucket ID and message ID, in the Riak data store

    *   `MSTORE_DONE (1)` – skip the default action

*   `smpp_handle_DR_negative(const char * bucket, const char * msgid)`

    The purpose of this hook is to implement policy (using the Lua API) when a delivery receipt arrives. This hook typically loads a message from the mstore, injects a message into ecelerity, and/or deletes a message from the mstore.

    *   `SMPP_CONTINUE (0)` – continue default process, which is to generate a bounce email to the original sender

    *   `SMPP_DELIVERED (3)` – skip the default process (i.e. do not generate a bounce email to the original sender)

*   `smpp_handle_DR_positive(const char * bucket, const char * msgid)`

    The purpose of this hook is to implement policy (using the Lua API) when a delivery receipt arrives. This hook typically loads a message from the mstore, injects a message into ecelerity, and/or deletes a message from the mstore.

    *   `SMPP_CONTINUE (0)` – continue default process, which is to generate a bounce email to the original sender

    *   `SMPP_DELIVERED (3)` – skip the default process (i.e. do not generate a bounce email to the original sender)

These hook points are implemented as described in [Implementing Policy Using Scriptlets](/momentum/3/3-reference/3-reference-implementing-policy-scriptlets).

Find below an example that implements these hooks.

<a name="modules.mstore.console.smpp.hook.points.example"></a> 


```
local mod = {};
require("msys.core");
require("msys.smpp");
require("msys.mstore");
require('msys.extended.message')

function mod:smpp_store_submit(msg, bucket, msgid)
  print("QA: SMS message ", msgid, " stored in ", bucket)
  return 0;
end

function mod:smpp_handle_DR_negative(bucket, msgid)
  print("QA: negative SMPP receipt; forward ", msgid, " stored in ", bucket)
  -- MO-1267
  local msg = msys.mstore.load(bucket, msgid);
  if msg ~= nil then
    -- MO-1270
    -- msg:inject(msg:mailfrom(), "5678901234@smpp.messagesystems.com");
    -- MO-1269
    -- msg:inject(msg:mailfrom(), "john@example.messagesystems.com");
    -- MO-1268
    -- msg:inject(msg:mailfrom(), "9876543210@mm7.messagesystems.com");
    -- MO-1272
    msg:inject(msg:mailfrom(), "john@example.messagesystems.com");
    -- MO-1266
    msys.mstore.delete(bucket, msgid);
  else print("QA: Failed to load message from mstore!")
  end;
  return msys.smpp.SMPP_DELIVERED;
end

function mod:smpp_handle_DR_positive(bucket, msgid)
  print("QA: positive SMPP receipt; delete ", msgid, " stored in ", bucket)
  -- MO-1265
  msys.mstore.delete(bucket, msgid);
  return msys.smpp.SMPP_CONTINUE;
end

msys.registerModule("smpp_hooks", mod);
```

### <a name="modules.mstore.console.mm7.hook.points"></a> MM7 Hook Points

The hook points provided by the MM7 module are as follows:

*   `mm7_store_submit_hook(msg, bucket_id, msgid)`

    This hook is called on a successful mm7 request submission. The return values are as follows:

    *   `MSTORE_CONTINUE (0)` – continue with the default action, which is to store ec_message into Riak data storage along with the bucket ID and message ID

    *   `MSTORE_DONE (1)` – skip the default action

*   `mm7_handle_DR_negative(mm7_trx, bucket_id, msgid)`

    This hook is called upon receiving a delivery report which indicates a failure of the previous request submission (the Status indicated in the delivery report has the value “Expired”, “Rejected”, “Unrecognised” or “DeliveryConditionNotMet”). This hook happens before DeliveryReceiptRsp is sent and also before a bounce email is generated. The most intuitive use of this hook point is to call the “mstore.load_message” API to retrieve the previous submission and reroute the message, as shown in the examples below. The user can return the following values from this hook:

    *   `MM7_CONTINUE (0)` – continue default process, which is to generate a bounce email to the original sender

    *   `MM7_DELIVERED (3)` – skip the default process (i.e. do not generate a bounce email to the original sender)

*   `mm7_handle_DR_positive(mm7_trx, bucket_id, msgid)`

    A counterpart of the previous hook. It handles a DeliveryReceiptReq which indicates a successful request submission. A straightforward implementation of this hook is to use “mstore.delete_message” to remove the submitted message from the Riak storage. The integer return value of this hook is not currently used.

These hook points are implemented as described in [Implementing Policy Using Scriptlets](/momentum/3/3-reference/3-reference-implementing-policy-scriptlets).

Find below an example that performs the following tasks:

*   Reinstates a previously submitted request and reroutes it to an SMPP domain

*   Removes a message from Riak storage and implements the mm7_handle_DR_positive hook

<a name="modules.mstore.console.hook.points.example"></a> 


```
local mod = {};
require("msys.core");
require("msys.mms");
require("msys.mstore");
require('msys.extended.message')

function mod:mm7_handle_DR_negative(trx, bucket, msgid)
  -- retrieve message from mstore
  local msg = msys.mstore.load(bucket, msgid);
  if msg ~= nil then
    -- reroute the message to a SMPP domain
    msg:inject("delivery_failure@test.com", "12405678910@smpp.messagesystems.com");
    msys.mstore.delete(bucket, msgid);  -- remove message from mstore
  else
    print("Failed to load message from mstore!")
  end;
  return msys.mms.MM7_DELIVERED;  -- skip bounce email generation to original sender
end

function mod:mm7_handle_DR_positive(trx, bucket, msgid)
  msys.mstore.delete(bucket, msgid);  -- remove message from mstore
  return msys.mms.MM7_CONTINUE;
end

msys.registerModule("mm7_hooks_tests", mod);
```

### <a name="modules.mstore.console"></a> mstore Management Using Console Commands

The mstore module can be controlled through the `ec_console`; the following commands are available:

<dl class="variablelist">

<dt>mstore display *`bucket_id`* *`message_id`*</dt>

<dd>

Display the metadata for the specified message.

</dd>

<dt>mstore display *`bucket_id`* *`message_id`* body</dt>

<dd>

Display the body of the specified message.

</dd>

<dt>mstore display *`bucket_id`* *`message_id`* full</dt>

<dd>

Display the body and the metadata of the specified message.

</dd>

<dt>mstore display *`bucket_id`* *`message_id`* resource</dt>

<dd>

Display the resource of the specified message.

</dd>

<dt>mstore reinstate *`bucket_id`* *`message_id`* [*`rccpto`*]</dt>

<dd>

Reinstate the specified message and inject it into the spool. You may optionally supply the recipient's address.

</dd>

<dt>mstore delete *`bucket_id`* *`message_id`*</dt>

<dd>

Delete the specified message from mstore.

</dd>

</dl>

For the bucket ID default value see [“Runtime Usage: Lua”](/momentum/mobile/mobile-reference/mobility-message-retry#modules.mstore.runtime.lua).