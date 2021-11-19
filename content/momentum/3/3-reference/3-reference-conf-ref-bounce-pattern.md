---
lastUpdated: "03/26/2020"
title: "bounce_pattern"
description: "bounce pattern configure the pattern that inbound email addresses must match in order to be considered bounces Bounce Pattern Perl compatible regular expression When a message passed through the server bounces due to an in band SMTP failure or is received out of band as a notification of failed delivery..."
---

<a name="conf.ref.bounce_pattern"></a> 
## Name

bounce_pattern — configure the pattern that inbound email addresses must match in order to be considered bounces.

## Synopsis

`Bounce_Pattern = "Perl-compatible regular expression"`

<a name="idp8393632"></a> 
## Description

When a message passed through the server bounces due to an in-band SMTP failure or is received out-of-band as a notification of failed delivery, this option will qualify the "original sending" email address as suitable for bounce classification and processing. For in-band bounces, the "original sending" email address is the envelope sender. For out-of-band delivery failures the "original sending" address is the envelope recipient. The ultimate behavior of bounce handling is dictated by the the `Bounce_Behavior` configuration setting.

If you leave the `Bounce_Pattern` setting unconfigured, then any mail to any of the `Bounce_Domains` will be considered a bounce, and processed as such.

To treat all mails originally sent from an email address like bounces-####-###@bounces.example.com as eligible for bounce processing, you would specify:

```
Bounce_Domains = ( bounces.example.com )
Bounce_Pattern = "^bounces-\d+-\d+@"
```
<a name="idp8399328"></a> 
## Scope

bounce_pattern is valid in the domain and global scopes.

<a name="idp8400976"></a> 
## See Also

[bounce_domains](/momentum/3/3-reference/3-reference-conf-ref-bounce-domains), [bounce_behavior](/momentum/3/3-reference/3-reference-conf-ref-bounce-behavior), [bounce_suppress_list](/momentum/3/3-reference/3-reference-conf-ref-bounce-suppress-list), [“bounce_logger – Momentum-Style Bounce Logging”](/momentum/3/3-reference/3-reference-modules-bounce-logger)