---
lastUpdated: "03/26/2020"
title: "Setting Context Based on Connecting IP"
description: "It is often useful to bypass anti spam checks when you know that the sender is a machine on your network it could be either a local user or an internal mail exchange machine that is merely forwarding the mail on via Momentum In the former case it's not good..."
---

It is often useful to bypass anti-spam checks when you know that the sender is a machine on your network; it could be either a local user or an internal mail exchange machine that is merely forwarding the mail on via Momentum. In the former case, it's not good for your own users not to be able to mail out of your network, and in the latter case, it doesn't help you if you are tarpitting your own mail infrastructure if spam has managed to leak in.

The ESMTP_Listener configuration shown in [“Connection context variables in ESMTP_Listener”](/momentum/3/3-reference/policy-context-based-on-ip#policy.context-based-on-ip3.ex) will set `my_key` and `my_other_key` in the connection context for machines connecting from the netblock 0.0.0.0/0 (this matches all connections). It will set the `trusted_mx` connection context for machines connecting from the 10.0.0.0/32 network, which is assumed to be a trusted internal network. You can set arbitrary context information using this mechanism, and then inspect it in your Sieve scripts and act accordingly, as hinted at by [“Acting on Connection Context Using Sieve”](/momentum/3/3-reference/policy-context-based-on-ip#policy.context-based-on-ip.ex2).

<a name="policy.context-based-on-ip3.ex"></a> 


```
Esmtp_Listener = {
   Listen "*:25" {
      Peer "0.0.0.0/0" {
         context = [
           my_key = "my_value"
           my_other_key = "my_other_value"
         ]

      }
      Peer "10.0.0.0/32" {
         context = [
            trusted_mx = "yes"
         ]
      }
   }
}
```

<a name="policy.context-based-on-ip.ex2"></a> 


```
if not vctx_conn :is "trusted_mx" "yes" {
   # Apply policy checks, as shown above.
}
```