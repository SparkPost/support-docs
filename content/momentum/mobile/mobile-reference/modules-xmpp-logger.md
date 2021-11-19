---
lastUpdated: "03/26/2020"
title: "The XMPP Logger Module"
description: "The xmpp logger is similar to the SMPP and MMS loggers This module determines the location of the XMPP log file which types of records are created and the format of those records Use of this logger is optional For general information about Momentum logging capabilities see Logging Find below..."
---

The xmpp_logger is similar to the SMPP and MMS loggers. This module determines the location of the XMPP log file, which types of records are created and the format of those records. Use of this logger is optional. For general information about Momentum logging capabilities see [Logging](/momentum/3/3-reference/operations-logging).

Find below a sample xmpp_logger configuration:

```
xmpp_logger "xmpp_logger1" {
  logfile = "/var/log/ecelerity/xmpplog.ec"
  logmode = 0644
  log_reception_format = "%t+R+%st+%at+%af+%ai+%ay+%H"
  log_delivery_format = "%t+D+%st+%at+%af+%ai+%ay+%H"
}
```

The configuration options are as follows:

<dl class="variablelist">

<dt>heartbeat</dt>

<dd>

The heartbeat interval in seconds. A heartbeat is written periodically to the log to indicate that Momentum is still active and may log further data. The default value for this option is `60`.

</dd>

<dt>log_delivery</dt>

<dd>

Whether or not to log deliveries. The default value for this option is `true`.

</dd>

<dt>log_delivery_format</dt>

<dd>

The macro and separator format for delivered messages. The default value for this option is `%t+D+%st+%at+%af+%ai+%ay+%H`. The literal value ‘`D`’ indicates a delivery. For the macro substitutions see [“XMPP Log Entry Macros”](/momentum/mobile/mobile-reference/modules-xmpp-logger#modules.xmpp_logger.macros).

</dd>

<dt>log_heartbeat_format</dt>

<dd>

The format of a heartbeat log entry. The default value for this option is `%t+M`. The `%t` macro expands to a Unix timestamp and ‘`M`’ indicates that this log entry is a heartbeat.

</dd>

<dt>log_reception</dt>

<dd>

Whether or not to log receptions. The default value for this option is `true`.

</dd>

<dt>log_reception_format</dt>

<dd>

The macro and separator format for received messages. The default value for this option is `%t+R+%st+%at+%af+%ai+%ay+%H`. The literal value ‘`R`’ indicates a reception. For the macro substitutions see [“XMPP Log Entry Macros”](/momentum/mobile/mobile-reference/modules-xmpp-logger#modules.xmpp_logger.macros).

</dd>

<dt>logfile</dt>

<dd>

The log file path. The default value for this option is `/var/log/ecelerity/xmpplog.ec`.

</dd>

<dt>logmode</dt>

<dd>

The logfile mode in octal format. The default value for this option is `0644`.

</dd>

<dt>namespace</dt>

<dd>

The default value for this option is `xmpp_logger,sieve,custom_logger`.

</dd>

</dl>

### <a name="modules.xmpp_logger.macros"></a> XMPP Log Entry Macros

XMPP log entries can use nine macros. By default the first field is a timestamp and the second field identifies the log entry type. The remaining fields are macros. The macros used in defining the log formats are as follows:

*   %t – When the event was logged, in seconds since the Unix epoch.

*   %st – The type of XMPP stanza. Legal types are iq, message, presence, stream and error.

*   %so – The full XMPP stanza with the message obfuscated.

*   %sr – The entire raw XMPP stanza. This provides the most information. It is redundant since `%st, %at, %af, %ai,` and `%ay` are logged.

*   %af – The from attribute. This is the Jabber ID of the sender.

*   %at – The to attribute. This is the Jabber ID of the recipient.

*   %ai – The stanza's ID attribute. This attribute is used to associate responses with requests.

*   %ay – The stanza's XML type *attribute*. In the core protocol, <iq> stanzas may have a type value of: `get, set, result, or error`; <message> stanzas may have a type value of: `chat, normal, headline, group chat, or error`; <presence> stanzas may have a type value of: `error, probe, subscribe, subscribed, unavailable, unsubscribe, or unsubscribed`.

*   %H – The remote IP host and port.