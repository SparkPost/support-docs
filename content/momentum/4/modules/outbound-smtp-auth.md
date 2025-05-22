---
lastUpdated: "05/30/2025"
title: "outbound_smtp_auth"
description: "This module enables users to specify authentication parameters for a given set of messages so that Momentum will authenticate against the peer server when it sends outbound mail It currently supports the AUTH LOGIN, AUTH PLAIN and AUTH XOAUTH2 methods of authentication You can specify the parameters in configuration or in lua..."
---

<a name="modules.outbound_smtp_auth"></a>

This module enables users to specify authentication parameters for a given set of messages so that
Momentum will authenticate against the peer server when it sends outbound mail. It currently
supports the `AUTH LOGIN`, `AUTH PLAIN` and `AUTH XOAUTH2` methods of authentication.
 You can specify the parameters in configuration or in lua, or use a combination of both.

### Note

This module makes heavy use of message contexts to facilitate authentication. If it is enabled, you risk having extra I/O unless `keep_message_dicts_in_memory` is on.

**Configuration Change** This module is refactored in Momentum 5.1, but this feature is available in
 Momentum 4.2 and later. `AUTH XOAUTH2` support is added in 5.1.

### <a name="modules.outbound_smtp_auth.configuration"></a> Configuration

Configuration variables are listed below. These values can all be changed and overridden by setting
 message context variables with the same name as the options in lua.
 All variables are valid in the binding group, binding, domain, and global scopes.

<dl class="variablelist">

<dt>outbound_smtp_auth_pass</dt>

<dd>

The password or auth token (e.g. for `AUTH XOAUTH2`) that will be passed to the remote server.
 It has no default value.

### Note

Setting the password in configuration will leave it as plaintext.
 To set the password more securely, it's recommended to dynamically retrieve it from a data store
 in lua and set it in the context variable that corresponds to this option.

</dd>

<dt>outbound_smtp_auth_type</dt>

<dd>

Determines what authentication protocol should be used. The only supported values are `PLAIN`,
 `LOGIN` and `XOAUTH2`. It has no default value.

</dd>

<dt>outbound_smtp_auth_user</dt>

<dd>

The username that will be passed to the remote server. It has no default value.

</dd>

</dl>

### <a name="modules.outbound_smtp_auth.usage"></a> Usage

A hook `outbound_smtp_auth_config(msg)` is added by this module to allow per message auth settings.
 The settings in `ec_message` context will override the configuration values.
 This hook is called in delivery/scheduler thread before sending SMTP `AUTH` command.
 Please avoid blocking or lengthy operations when implementing this hook.

Basic examples of usage are provided below.

The following example shows how you can extend the new hook and set the username and password in lua
 for each message.

<a name="modules.outbound_smtp_auth.example.set_username_pw"></a>


```
function mod:outbound_smtp_auth_config(msg)
  --print('NOTICE: outbound_smtp_auth_config Lua hook called');
  msg:context_set(VCTX_MESS, 'outbound_smtp_auth_type', 'XOAUTH2')
  -- credential taken from example here:
  -- https://learn.microsoft.com/en-us/exchange/client-developer/legacy-protocols/how-to-authenticate-an-imap-pop-smtp-application-by-using-oauth
  msg:context_set(VCTX_MESS, 'outbound_smtp_auth_user', 'test@contoso.onmicrosoft.com')
  msg:context_set(VCTX_MESS, 'outbound_smtp_auth_pass', 'EwBAAl3BAAUFFpUAo7J3Ve0bjLBWZWCclRC3EoAA')
end
```

The following example shows how to use the new configuration variables to set distinct authorization parameters for two different domains.

<a name="modules.outbound_smtp_auth.example.set_auth_parms"></a>


```
outbound_smtp_auth { }

Keep_Message_Dicts_In_Memory = true

Domain "messagesystems.com" {
  Outbound_SMTP_AUTH_Type = "LOGIN"
  Outbound_SMTP_AUTH_User = "msys"
  Outbound_SMTP_AUTH_Pass = "msys"
}

Domain "sparkpost.com" {
  Outbound_SMTP_AUTH_Type = "PLAIN"
  Outbound_SMTP_AUTH_user = "sparkpost"
  Outbound_SMTP_AUTH_pass = "sparkpost"
}

Domain "bird.com" {
  Outbound_SMTP_AUTH_Type = "XOAUTH2"
  Outbound_SMTP_AUTH_user = "test@contoso.onmicrosoft.com"
  Outbound_SMTP_AUTH_pass = "EwBAAl3BAAUFFpUAo7J3Ve0bjLBWZWCclRC3EoAA"
}
```
