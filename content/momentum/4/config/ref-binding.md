---
lastUpdated: "03/26/2020"
title: "binding"
description: "binding configure binding specific options Use the binding stanza to define per binding configuration options You can nest domain and host stanzas inside binding stanzas to create per binding per domain or per binding per host configurations For additional details see Section 15 3 Configuration Scopes and Fallback Apart from..."
---

<a name="conf.ref.binding"></a> 
## Name

binding — configure binding specific options

<a name="idp23471200"></a> 
## Description

```
binding "example" {
  # binding-specific settings
}
```

Use the `binding` stanza to define per-binding configuration options. You can nest `domain` and `host` stanzas inside `binding` stanzas to create per-binding per-domain or per-binding per-host configurations. For additional details, see [“Configuration Scopes and Fallback”](/momentum/4/4-ecelerity-conf-fallback).

Apart from the `domain` and `host` options, the following options are commonly specified in a `binding` stanza:

*   [bind_address](/momentum/4/config/ref-bind-address)

*   [connect_timeout](/momentum/4/config/ref-connect-timeout)

*   [ehlo_hostname](/momentum/4/config/ref-ehlo-hostname)

*   [generate_bounces](/momentum/4/config/ref-generate-bounces)

*   [message_expiration](/momentum/4/config/ref-message-expiration)

For a complete list of options valid in the binding scope, refer to [*Configuration Options Summary*](/momentum/4/config-options-summary) .

The following is an example of a `binding` stanza:

```
# my_binding-1 rules
binding "my_binding-1" {
  bind_address = "10.10.10.1"
  generate_bounces = true
  ehlo_hostname = "my_name-1.com"
}

# my_binding-2 rules
binding "my_binding-2" {
  bind_address = "10.10.10.2"
  generate_bounces = false
  ehlo_hostname = "my_name-2.com"
}
```

In this example, the source IP for my_binding-1 mail is `10.10.10.1`, while the source IP for my_binding-2 mail is `10.10.10.2`.

### Note

Binding names are case-sensitive. Spaces and colons are not allowed in binding names.

<a name="conf.ref.binding.default"></a> 
## `default` Binding

The `default` binding is a special case of a binding scope. Messages that are not assigned to a specific binding will fallback to the `default` binding. Ensure that *all* messages are assigned to a binding or that this fallback binding meets your needs.

You should ensure that all messages are dealt with in some way. For example, you can create a variable at the top of your script with the most general binding, then use `if` blocks to assign a message to a more specific binding. At the end of the script, if no `if` condition applies, the `else` clause would assign the message to the general binding.

Even if you do not assign messages to bindings, youy can use the `default` binding to alter default behavior by setting the values of options in the `default` binding scope.

The `default` binding is not explicitly defined. You can confirm its existence by issuing the ec_console command [binding summary](/momentum/4/console-commands/binding-summary). You should see `Summary Statistics For Binding default` along with any other bindings you defined.

Defining and using the `default` binding is required any time you want to change the behavior of any message not assigned to some other binding. You can explicitly define the `default` binding scope and set options in that scope in your configuration file or at runtime using Lua.

The following is an example configuration:

```
binding "default" {
  ehlo_hostname = "example.com"
}
```

Setting the `default` binding from a script is done in exactly the same way as setting any other binding. For an example of setting a binding, see [msg:binding](/momentum/4/lua/ref-msg-binding).

In a cluster configuration, if you wish to set an option to different values within the `default` binding scope, you can explicitly define the `default` binding in the node-specific configuration file and then define options within that scope. You can create a node-specific configuration file by manually creating it, as described in [“Adding Configuration Files”](/momentum/4/conf-overview#conf.adding.configuration.files).

<a name="idp23504480"></a> 
## Scope and Valid Options

`binding` is valid in the global scope and in the binding_group scope.

For a complete list of options valid in the binding scope, refer to [*Configuration Options Summary*](/momentum/4/config-options-summary) .

<a name="idp23507856"></a> 
## See Also

[binding_group](/momentum/4/config/ref-binding-group), [domain](/momentum/4/config/ref-domain), [host](/momentum/4/config/ref-host)