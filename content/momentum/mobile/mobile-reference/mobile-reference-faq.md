---
lastUpdated: "03/26/2020"
title: "FAQ"
description: "6 1 1 I want to install the mobility module Am I right in assuming that configuration of domains specifically for SMPP as opposed to bindings will play a large part in setting up delivery of email to text SMS 6 1 2 When a message status is P permanent..."
---


## <a name="faq-mobility1"></a> Configuration

<a name="idp179488"></a> 

<dl>

<dt>6.1.1\. [I want to install the mobility module. Am I right in assuming that configuration of domains specifically for SMPP (as opposed to bindings) will play a large part in setting up delivery of email to text SMS?](faq#faq-mobility-installation)</dt>

<dt>6.1.2\. [When a message status is ‘P’ (permanent failure), the size of the SMS payload doesn't appear in the permanent failure log. Is there a way to add this information?](faq#faq-sms-payload)</dt>

<dt>6.1.3\. [How do I use the SMPP_Persistent_Connections option?](/momentum/mobile/mobile-reference/mobile-reference-faq#faq-mobility-persistent)</dt>

<dt>6.1.4\. [When setting the SMPP_Persistent_Connections option, you set the name of a binding to a number. What does the number assigned to this name do?](/momentum/mobile/mobile-reference/mobile-reference-faq#faq-mobility-persistent-number)</dt>

</dl>

| <a name="faq-mobility-installation"></a> <a name="idp1310080"></a> 

**6.1.1.**

 | 

I want to install the mobility module. Am I right in assuming that configuration of domains specifically for SMPP (as opposed to bindings) will play a large part in setting up delivery of email to text SMS?

 |
|  | 

Yes, domain configuration defines the interface to the SMSC. A minimal, quick start configuration would look something like this :

```
smpp {}

Domain "somewhere.com" {
  SMPP_SMSC_Server  = "10.0.0.1"
  SMPP_SMSC_Port = "2776"
  SMPP_SMSC_System_ID = "GSMSGW"
  SMPP_SMSC_Password = "secret"
  SMPP_SMSC_System_Type = "CMT"
  SMPP_ESME_Address = "57425"
}
```

Everything but `SMPP_SMSC_Server`, `SMPP_SMSC_Port` and `SMPP_Persistent_Connections` can also be specified or overridden on a per-binding basis.

The `smpp {}` stanza is technically not necessary; if you configure any of the SMPP options it should get autoloaded (but it doesn't hurt to put it in and if you wish to do module-level debugging you will need it). The `SMPP_SMSC_System_Type` may or may not be needed—that depends on the SMSC you are connecting to, and you'll need to ask the SMSC owner if they expect you to provide a system type or not. If you expect SMS-to-email traffic (and not just email-to-SMS), I would also set a `SMPP_Default_Email_Address`; this is used as a catch-all in case the reverse address mappings can't find what email address to send SMS-to-email replies to.

 |
| <a name="faq-sms-payload"></a> <a name="idp1175424"></a> 

**6.1.2.**

 | 

When a message status is ‘`P`’ (permanent failure), the size of the SMS payload doesn't appear in the permanent failure log. Is there a way to add this information?

 |
|  | 

You can add the size of the SMS payload by changing the format string for the `log_permfail_format` option. The default value for this option is `%t@S@%s@%d@%q@%bg@%b@%ip@%rm@%T@%S@%e`. To include the size, simply add the macro `%l`.

 |
| <a name="faq-mobility-persistent"></a> <a name="idp6592"></a> 

**6.1.3.**

 | 

How do I use the `SMPP_Persistent_Connections` option?

 |
|  | 

The following configuration shows how to use the `SMPP_Persistent_Connections` option.

```
Domain "somewhere.com" {
  SMPP_SMSC_Server  = "10.0.0.1"
  SMPP_SMSC_Port = "2776"
  SMPP_SMSC_System_ID = "GSMSGW"
  SMPP_SMSC_Password = "secret"
  SMPP_ESME_Address = "57425"
  SMPP_Default_Email_Address = "user@domain.com"
  SMPP_Bind_Type = "Transmitter"
  SMPP_Persistent_Connections = [ "persist_this" = 1 ]
}

Binding "persist_this" {
  Max_Outbound_Connections = 1
  SMPP_Bind_Type = "Receiver"
}
```

In this case, Momentum will create connections as needed for transmitting SMS on the Domain `somewhere.com` and will also maintain a single persistent connection for receiving SMS on the binding `persist_this`.

 |
| <a name="faq-mobility-persistent-number"></a> <a name="idp170544"></a> 

**6.1.4.**

 | 

When setting the `SMPP_Persistent_Connections` option, you set the name of a binding to a number. What does the number assigned to this name do?

 |
|  | 

In `SMPP_Persistent_Connections`, each binding is mapped to the number of connections you want to have to a particular domain from that binding. If a binding appears in `SMPP_Persistent_Connections`, then instead of figuring out the number of connections based on the number of messages queued for the domain/binding using the settings, `Max_Outbound_Connections` and `Connection_Allocation_Aggressiveness`, we always try to open (and keep open) the number of connections you have configured in `SMPP_Persistent_Connections`. Bindings configured with a `SMPP_Bind_Type` of `Receiver` should always appear in `SMPP_Persistent_Connections`, or no connections will ever be opened on that binding (because Receiver bindings will never have messages queued on them).

 |