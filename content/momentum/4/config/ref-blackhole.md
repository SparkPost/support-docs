---
lastUpdated: "03/26/2020"
title: "blackhole"
description: "blackhole blackhole mail Blackhole false Blackhole true Blackhole inline Blackhole internal This option may be specified globally or inside a domain binding group or binding stanza If specified in the domain scope Momentum immediately fails all messages queued for that domain Likewise if it is specified in the binding or..."
---

<a name="conf.ref.blackhole"></a> 
## Name

blackhole — blackhole mail

## Synopsis

`Blackhole = "false"`

`Blackhole = "true"`

`Blackhole = "inline"`

`Blackhole = "internal"`

<a name="idp23579664"></a> 
## Description

This option may be specified globally or inside a `domain`, `binding_group` or `binding` stanza. If specified in the domain scope, Momentum immediately fails all messages queued for that domain. Likewise, if it is specified in the binding or binding_group scope. If `Generate_Bounces` is true, then a bounce message will be generated for each message failed.

If this option is set to `inline`, messages are failed permanently during the SMTP transaction (upon reception), immediately after receiving the RCPT TO command.

If `internal` is specified, the message is accepted and internally dropped. The normal message failure operations such as logging, still take place.

The default value for this option is `false`. Specifying `true` is equivalent to specifying `inline`.

<a name="idp23587472"></a> 
## Scope

Blackhole is valid in the binding, binding_group, domain and global scopes.

<a name="idp23589344"></a> 
## See Also

[bounce_behavior](/momentum/4/config/ref-bounce-behavior), [generate_bounces](/momentum/4/config/ref-generate-bounces)