---
lastUpdated: "03/26/2020"
title: "conntrol – Fine-Grained Connection Control"
description: "The conntrol module is designed to allow control over how connections are established into Momentum The module currently implements one check early data sending which is designed to spot so called ratware Early sender detection causes Momentum to pause before its initial banner is sent to a connecting client If..."
---

<a name="idp20643488"></a> 

The conntrol module is designed to allow control over how connections are established into Momentum. The module currently implements one check - early data sending, which is designed to spot so-called ratware.

### <a name="modules.conntrolearly.sender"></a> Configuration

Early sender detection causes Momentum to pause before its initial banner is sent to a connecting client. If the client sends data before the banner and `disconnect_ratware` is set, Momentum will disconnect them. To enable this, use the following stanza:

<a name="example.conntrol.3"></a> 


```
conntrol "conntrol1" {
  banner = "220-Welcome to Momentum!\r\n"
  pause_time = 2
  disconnect_ratware = "421 my.host.name service denied to those who send before the banner\r\n"
}
```

This will set a custom banner and a two second delay for that banner. If the `disconnect_ratware` option is also set, it must be a valid SMTP protocol response string. With these three options set, this module will immediately send the defined response and disconnect the peer, possibly bypassing other policy. For this reason, we generally recommend that customers not use the `disconnect_ratware` option and instead look at the `early_talker` validation context variable using a policy script; this gives greater flexibility. The conntrol module context variables are listed in the following section.

### <a name="modules.conntrol.context.variables"></a> Connection Context Variables

The conntrol module sets the following connection context variables:

<dl class="variablelist">

<dt>conntrol_bad_commands</dt>

<dd>

Number of valid SMTP commands that were sent, but had syntax errors

</dd>

<dt>conntrol_unrecognized_commands</dt>

<dd>

Number of unrecognized commands seen in this SMTP session

</dd>

<dt>early_talker</dt>

<dd>

Whether the peer started issuing commands before Momentum sent the initial SMTP banner (literal string `yes`)

</dd>

</dl>