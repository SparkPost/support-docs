---
lastUpdated: "03/26/2020"
title: "authorization"
description: "authorization configure the console commands applicable to users Example 72 2 authorization The authorization stanza will prevent console commands from being run unless an allow entry is explicitly configured The authorization process first enumerates the roles group membership of the user by querying the authorization module configured in the listener..."
---

<a name="conf.ref.authorization"></a> 
## Name

authorization — configure the console commands applicable to users

<a name="idp23453696"></a> 
## Description

<a name="example.authorization.3"></a> 


```
Authorization {
  Role "name" {
    allow = ( "list" "of" "patterns" )
  }
  Role "othername" {
    allow = ( "list" "of" "patterns" )
  }
}
```

The authorization stanza will prevent console commands from being run unless an "allow" entry is explicitly configured. The authorization process first enumerates the roles/group membership of the user by querying the authorization module configured in the listener configuration. Then the username and each role for the user are compared against the authorization rules; if the username or role name matches, then the "allow" rules are processed in the order that they are defined.

To use the Authorization stanza, authorization must be enabled within the listener or listen scope by setting `enable_authorization` to `true`. An auth_ds module must also be configured.

Each allow rule is a Perl compatible regular expression that will be matched against the command being executed. If the regular expression matches, then processing of authorization rules stops and the console command is allowed to execute. If no rules match, then the command is not allowed to execute and if account logging is enabled a log entry is written.

The configuration of the autorization stanza has no effect unless `enable_authorization` is set to `true` in the control listener scope.

<a name="idp6267760"></a> 
## Scope

authorization is valid in the global scope.

<a name="idp6779536"></a> 
## See Also

[msys.registerAuth](/momentum/4/lua/ref-msys-register-auth), [“auth_ds – Datasource based SMTP Authentication”](/momentum/4/modules/auth-ds) and [“Control_Listener Authorization”](/momentum/4/control-authz)