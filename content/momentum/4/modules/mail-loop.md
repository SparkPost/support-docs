---
lastUpdated: "03/26/2020"
title: "mail_loop – Mail Loop Detection"
description: "The mail loop module provides automatic suppression of potential mail loops with two standard mechanisms Suppression of delivery attempts to any configured IP interfaces on the machine Suppression of messages with more than a specified number of Received headers The most basic configuration for the mail loop module is to..."
---

<a name="idp22022048"></a> 

The mail_loop module provides automatic suppression of potential mail loops with two standard mechanisms:

*   Suppression of delivery attempts to any configured IP interfaces on the machine.

*   Suppression of messages with more than a specified number of Received headers.

### <a name="idp22026800"></a> Configuration

The most basic configuration for the mail loop module is to suppress with a 554 code response a message with more than 20 received headers, as shown:

<a name="example.mail_loop.3"></a> 


```
mail_loop "mail_loop1"
{
  max_received_headers = 20
}
```

To also suppress delivery to any configured interface on the machine (interface addresses are resolved when Momentum starts), you can use:

`use_ip = true`

If you need to adjust the maximum number of allowed receive headers, do so as follows:

```
use_ip = false
max_received_headers = 32
```

Default value for `max_received_headers` is `20`.

### <a name="modules.mail_loop.context.variables"></a> Connection Context Variables

If you prefer to handle delivery suppression using policy scripts, you can disable the failing of messages by setting the return code to 250 as follows:

```
use_ip = true
max_received_headers = 32
code = 250
```

### Note

Disabling trace headers will reduce the accuracy of the mail loop detection.

In this case, a loop detection will set one of two connection context variables, depending on what sort of loop was detected:

<dl class="variablelist">

<dt>mail_loop_header_count</dt>

<dd>

Set to the number of received headers detected, if past the max_received_headers count.

</dd>

<dt>mail_loop_ip</dt>

<dd>

Set to `match`, if a self-connect was detected.

</dd>

</dl>