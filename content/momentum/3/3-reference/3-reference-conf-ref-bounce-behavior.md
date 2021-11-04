---
lastUpdated: "03/26/2020"
title: "bounce_behavior"
description: "bounce behavior configure the action taken when a message is classified as a bounce bounce behavior pass bounce behavior blackhole When an out of band bounce message is received by the server and satisfies both the bounce domains and bounce pattern configuration settings it will either be allowed to pass..."
---

<a name="conf.ref.bounce_behavior"></a> 
## Name

bounce_behavior — configure the action taken when a message is classified as a bounce

## Synopsis

`bounce_behavior = "pass"`

`bounce_behavior = "blackhole"`

<a name="idp8319248"></a> 
## Description

When an *out-of-band* bounce message is received by the server and satisfies both the `bounce_domains` and `bounce_pattern` configuration settings, it will either be allowed to pass through for traditional message routing or internally disposed of. Note that this configuration option does not apply to in-band bounces.

The default behavior is to pass the message through into the normal message routing process. However, Momentum can be told that such messages should be internally disposed of in a manner similar to the `blackhole = internal` configuration setting.

As an example, suppose you have out-of-band bounces destined for `bounces.abc.com` and `bounces.xyz.com`. You wish to log bounces for `bounces.abc.com` but not those for `bounces.xyz.com`. To do this you can use the following configuration:

```
generate_bounces = "true"
bounce_behavior = "pass"

domain "bounces.abc.com" {
  routes = ( "smtp://10.2.3.4" )
}
domain "bounces.xyz.com" {
  bounce_behavior = "blackhole"
}
```

Bounces for Domain "bounces.xyz.com" will be blackholed because `bounce_behavior` is set to `blackhole` in the Domain "bounces.xyz.com" scope whereas Domain "bounces.abc.com" inherits the value of `bounce_behavior` defined in the global scope.

<a name="idp8328416"></a> 
## Scope

`bounce_behavior` is valid in the domain and global scopes.

<a name="idp8330464"></a> 
## See Also

[blackhole](/momentum/3/3-reference/3-reference-conf-ref-blackhole), [bounce_domains](/momentum/3/3-reference/3-reference-conf-ref-bounce-domains), [bounce_pattern](/momentum/3/3-reference/3-reference-conf-ref-bounce-pattern), [generate_bounces](/momentum/3/3-reference/3-reference-conf-ref-generate-bounces) and [“bounce_logger – Momentum-Style Bounce Logging”](/momentum/3/3-reference/3-reference-modules-bounce-logger)