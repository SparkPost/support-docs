---
lastUpdated: "03/26/2020"
title: "trace smtp"
description: "trace smtp trace smtp transactions trace smtp add binding name domain name file name trace smtp list trace smtp remove tracer id The trace smtp command allows fine grained SMTP transaction level logging to a specified file It can be enabled by binding and domain combination If is specified for..."
---

<a name="console_commands.trace_smtp"></a> 
## Name

trace smtp — trace smtp transactions

## Synopsis

`trace smtp add` [ *`binding_name`* ] [ *`domain_name`* ] [ *`file_name`* ]

`trace smtp list`

`trace smtp remove` [ *`tracer_id`* ]

<a name="idp16534640"></a> 
## Description

```
10:47:35 /tmp/2025> trace smtp add <binding|*> <domain|*> <filename>
10:47:35 /tmp/2025> trace smtp remove <tracer_id>
10:47:35 /tmp/2025> trace smtp list
```

The **trace smtp**      command allows fine-grained SMTP transaction-level logging to a specified file. It can be enabled by binding and domain combination. If `*` is specified for binding or domain it will match all bindings or domains, respectively.

### Note

The **trace smtp**      command traces **outbound** SMTP connections only.

In order to debug SMTP transaction to problematic-domain.com, one would:

```
10:47:35 /tmp/2025> trace smtp add * problematic-domain.com /var/tmp/smtp.log
Registered smtp tracer #1

10:47:35 /tmp/2025> trace smtp list
[     1]  binding: *
           domain: problematic-domain.com
             file: /var/tmp/smtp.log @ 29
```

Once sufficient debugging information has been collected, the debugging can be disabled as follows:

```
10:47:35 /tmp/2025> trace smtp remove 1
Removed smtp tracer #1
```

To set the permissions of smtp trace files see [trace_smtp_mode](/momentum/3/3-reference/3-reference-conf-ref-trace-smtp-mode).