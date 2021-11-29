---
lastUpdated: "03/26/2020"
title: "Configuration Options in the Global, Domain and Binding Scopes"
description: "The previous chapter described configuration of the Momentum Mobile modules This chapter describes the configuration options visible outside specific modules Again SMPP configuration and MM 7 configuration are described in separate sections Mobile Momentum provides an SMPP client within Momentum for transforming and forwarding email messages as SMS messages It..."
---


The previous chapter described configuration of the Momentum Mobile modules. This chapter describes the configuration options visible outside specific modules. Again, SMPP configuration and MM7 configuration are described in separate sections.

## <a name="quickmob.smpp.specific"></a> SMPP-specific Configuration

### <a name="quickmob.config.domain"></a> Domain Configuration

Mobile Momentum provides an SMPP client within Momentum for transforming and forwarding email messages as SMS messages. It is also capable of transforming SMS to email.

There are numerous SMPP options applicable in the global, domain, binding and binding_group scopes. The most important are the server and port used to identify the target Message Center. (For a complete list see "[Mobile Momentum SMPP Options](/momentum/mobile/mobile-reference/mobility-smpp-options)".)

The minimum requirements in order to configure The Mobile Momentum for interoperation with a Short Message Service Center (SMSC) are:

*   IP address of target SMSC(s)

*   SMPP TCP port number(s) on target SMSC(s)

*   Bind Credentials

*   SMSC System ID

*   SMSC Password

*   SMSC System Type – may be required by SMSC

Typical global and domain configuration options are shown in the following example:

<a name="mobility.domain.configuration"></a> 


SMPP_SMSC_Port = 2775
SMPP_SMSC_Server = "*`ip_address`*"

domain "testsmpp" {
  SMPP_SMSC_Server  = "*`ip_address`*"
  SMPP_SMSC_Port = "8888"
  SMPP_SMSC_System_ID = "myid"
  SMPP_SMSC_Password = "mypass"
  SMPP_SMS_Data_Coding = "LATIN1"
  SMPP_ESME_Address = "57425"
  SMPP_Inactivity_Timer = 600
  SMPP_Enquire_Link_Timer = 90
  SMPP_Response_Timer = 60
  SMPP_Default_Email_Address = "user@example.com"
}

The `SMPP_SMSC_Server`, `SMPP_SMSC_Port` and `SMPP_Persistent_Connections` options are valid in the global and domain scopes only. The `SMPP_SMSC_Server` option can be either an IP address or a hostname. Following the usual semantics, the most specific definition applies. For example, in the above configuration the `SMPP_SMSC_Port` for the domain `testsmpp` is `8888` while all other domains default to `2775`. Besides these three options, all other mobility configuration options are valid in the binding, binding_group, domain and global scopes. All configuration options in all scopes can be set through the web UI in exactly the same way as other options.

If you expect SMS-to-email traffic (and not just email-to-SMS), you should also set a `SMPP_Default_Email_Address`; this is used as a catch-all in case the reverse address mappings can't determine what email address to send SMS-to-email replies to.

### <a name="quickmob.ram.ds"></a> Transforming Email to SMS

When transforming email to SMS, Mobile Momentum first attempts to determine the destination email from the message text or subject. Failing this, Mobile Momentum attempts to look up the destination email address in a reverse address mapping database, using the source and destination telephone numbers as selection criteria.

During installation a datasource named `ram` is created to cache the results of database look-ups. This datasource is defined as follows:

<a name="quickmob.example.ram.ds"></a> 


Datasource "ram" {
  uri =
  ("pgsql:host=*`hostname`*;dbname=ecelerity;user=ecuser;password=*`passwd`*")
  no_cache = "true"
}

### Note

Configuration of this datasource is optional.

For more information about datasources see " [ds_core – Datasource Query Core](/momentum/3/3-reference/3-reference-modules-ds-core)".

### <a name="quickmob.persistent.connections"></a> Persistent Connections

Normally, SMPP connections are established by Mobile Momentum whenever traffic is destined for an SMPP domain. The connection is kept open until the SMPP inactivity timer expires. While this may be fine for most MT-based applications, it does not guarantee an SMPP connection when an SMSC has SMS messages to send. As a solution, persistent SMPP connections can be specified in the configuration when a permanent SMPP connection is needed.

Use an `SMPP_Persistent_Connections` configuration statement within an SMPP domain to associate a special binding specifying the configuration of the persistent connection(s):

<a name="quickmob.example.smpp_persistent"></a> 


```
Domain "somewhere.com" {
  SMPP_SMSC_Server = "10.0.0.1"
  ...
  Max_Outbound_Connections = 1
  SMPP_Bind_Type = "Transmitter"
  SMPP_Persistent_Connections = [ Persist_This = 1 ]
  ...
}

Binding "Persist_This"  {
  Max_Outbound_Connections = 1
  SMPP_Bind_Type = "Receiver"
}
```

In this example, the SMPP domain `somewhere.com` will establish a bind transmitter SMPP connection as needed for outgoing MT traffic and will maintain a single bind receiver SMPP connection for MO traffic.