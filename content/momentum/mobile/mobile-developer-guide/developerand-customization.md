---
lastUpdated: "03/26/2020"
title: "Overview"
description: "Mobile Momentum 2 1 provides hooks for the customization of SMPP and MMS message processing Hooks are message processing points where customer written scripts or scriptlets and programs may be used to enforce policy and or extend functionality Hook instances may be implemented in C or Lua In addition instances..."
---


## <a name="DC.developapplications"></a> Developing Applications for Mobile Momentum 2.1

Mobile Momentum 2.1 provides "hooks" for the customization of SMPP and MMS message processing. Hooks are message processing points where customer-written scripts (or scriptlets) and programs may be used to enforce policy and/or extend functionality. Hook instances may be implemented in C or Lua. In addition, instances of the SMPP Received Message Validation Hook and the MM7 Server Received Message Validation Hook may be implemented in Sieve using the Momentum core validation infrastructure.

For documentation of the SMS conversion hook points see "[Hook Points](/momentum/mobile/mobile-reference/mobility-runtime-hooks)".

### <a name="DC.HookInterface"></a> The Hook Interface

The hook interface is a function call using variable hook-specific parameters. Where possible, hook interfaces include the ec_message structure as one of the parameters. The ec_message structure contains a collection of key-value pairs called message context variables. By inspecting and setting context variables, hook implementations are able to communicate with other hook implementations. In addition, some context variable keys are set by Mobile Momentum and hook implementations may affect subsequent processing of the message by changing those context variable values. The following sections include descriptions of the context variable acted upon by Mobile Momentum.

Here is an example of getting and setting message context variables in a Lua script:

```
-- Retrieve the message context variable containing the SMS
-- destination address, a.k.a phone number:
 local destaddr = msys.core.ec_message_context_get
   (msg, msys.core.ECMESS_CTX_MESS, "SMS_Destination_Address")

-- phone number processing goes here, e.g., make sure the address/phone number,
-- begins with a "1":
 destaddr = "1" .. destaddr

-- Set the context variable with the modified value to be used as the
-- SMS destination phone number:
 msys.core.ec_message_context_set (msg, msys.core.ECMESS_CTX_MESS, 
  "SMS_Destination_Address", destaddr)
```

The ec_message structure includes another collection of a data type called blobject. Blobjects are similar to message context variables in that a key is used to retrieve and set their values, but where context variable values are normally strings, blobjects may be containers for arbitrary data types. Blobjects are also reference counted, so it is possible for the data contained by the blobject to survive beyond the life of the ec_message. Mobile Momentum uses blobjects to make message text available for inspection or modification by hook implementations.

### Note

In Momentum version 2.1, `require("msys.smpp");` replaces `require("msys.mobility");`.

Here is an example of retrieving the email text blob in Lua:

```
local emailtxt = msys.smpp.smpp_read_msg_text_blob(msg,
  msys.smpp.BLOB_KEY_MO_EMAIL_TEXT).buffer
```

Finally, many hook interfaces include a return value. Hook implementations may set return values to indicate the message disposition, such as:

*   To continue processing the message using any context variable or blob values set by the hook implementation

*   To cancel subsequent message processing and treat the message as a failure

*   To cancel subsequent message processing and treat the message as "delivered"

Each hook interface description includes a description of the acceptable return values.

### <a name="DC.StructureofHookImplementations"></a> Structure of Hook Implementations

Hooks are implemented as modules using Momentum's module infrastructure. With Lua, most of these details are transparent. The basic components for both C and Lua are the hook and module function definitions and the functions that are invoked during Momentum initialization which register the module's hook functions. Each of these components is implemented according to respective C or Lua programming conventions.

**<a name="DC.HookStructureforLua"></a> 1.1.2.1. Hook Structure for Lua**

The basic components of hooks written in Lua are:

*   One or more Lua require statements identifying the Momentum and Mobile Momentum APIs used by the hook

*   A Lua statement defining the Lua module

*   One or more hook function definitions

*   Optional helper and business logic functions

*   Lua statements registering each hook within the module

**<a name="DC.HookStructureforC"></a> 1.1.2.2. Hook Structure for C**

A hook implementation written in C requires:

*   C `#include` statements for the required API declarations.

*   The Momentum generic module infrastructure definition. This identifies the hook name for configuration purposes, and also the module's initialization and termination functions. The hook implementation registration is invoked from a module initialization function.

*   One or more hook implementations. These are functions within the module. The functions are registered (using the hook definition's registration function) during module initialization.

*   Optional helper and business logic functions.

### <a name="DC.ConfigurationofLuaScriptlets"></a> Hook Implementations: Lua Scriptlets

A hook implementation is activated by specifying its location within the scriptlet stanza of the Momentum configuration file:

```
scriptlet "scriptlet" {
  script "stock_alert" {
    source = "/opt/msys/ecelerity/conf/global/scripts/stock_alert.lua"
  }
}
```

In this example, the file `/opt/msys/ecelerity/conf/global/scripts/stock_alert.Lua` contains one or more hook implementations.

For more information about the scriptlet module see "[scriptlet Module](/momentum/3/3-reference/3-reference-modules-scriptlet)".

### <a name="DC.ConfigurationofhookswritteninC"></a> Hook Implementations Written in C

C modules containing hook implementations are activated by adding a module instance to the Momentum configuration file. If your C module name is `my_mod`, it is activated by the configuration statement:

```
my_mod "my_mod_instance_name" {
 "my_mods parameters"
 ...
}
```