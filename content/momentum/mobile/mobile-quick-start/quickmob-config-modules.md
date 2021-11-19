---
lastUpdated: "03/26/2020"
title: "Configuring the Mobile Momentum Modules"
description: "Once installation is complete you can configure Mobile Momentum Configuring it requires configuration of the modules specific to Mobile Momentum configuration of other mobile related options or scopes This chapter describes configuring the Mobile Momentum modules The subsequent chapter deals with other configuration requirements In both cases configuration MM 7..."
---


Once installation is complete you can configure Mobile Momentum. Configuring it requires

*   configuration of the modules specific to Mobile Momentum

*   configuration of other mobile-related options or scopes

This chapter describes configuring the Mobile Momentum modules. The subsequent chapter deals with other configuration requirements. In both cases configuration MM7 configuration follows SMPP configuration.

The Mobile Momentum modules are either Short Message Peer-to-Peer Protocol(SMPP) or Multi-Messaging Service (MM7) modules. The SMMP modules relate to logging SMPP protocol messages and the MM7 modules to the MM7 protocol. Separate sections are devoted to the different protocols.

## <a name="quickmob.smpp.modules"></a> The SMPP Modules

There are three SMPP modules: smpp, smpp_logger and smpp_bounce_logger. The smpp module is loaded automatically as required. You only need to explicitly include it if you wish to change the debug level.

### <a name="quickmob.modules.smpplogger"></a> The smpp_logger Module

The smpp_logger module determines the location of the SMPP log file, which types of records are created and the format of those records.

A sample configuration follows. (This example demonstrates the use of optional log formatting parameters.)

<a name="quickmob.example.smpp_logger"></a> 


```
smpp_logger "smpp_logger1" {
  logfile = "/var/log/ecelerity/smpplog.ec"
  logmode = 0644
  log_reception_format = "%t@R@%i@%sa@%da@%d@%g@%b@%H@%B@%sg"
  log_permfail_format = "%t@P@%i@%sa@%da@%d@%g@%b@%H@%e"
  log_delivery_format = "%t@D@%i@%sa@%da@%d@%g@%b@%H@%B@%sg@%rm"
  log_tempfail = false
  log_status = false
}
```

You must add this module to your configuration file if you wish to log SMPP events. You can do this using the web UI or as described in "[Best Practices for Manually Changing Configuration Files](/momentum/3/3-reference/conf-manual-changes)".

You may not need to change any of the configuration options from their default values. For detailed instructions regarding this module's configuration options see "[The smpp_logger Module](/momentum/mobile/mobile-reference/mobility-configuration-smpp)".

### <a name="quickmob.modules.smppbouncelogger"></a> smpp_bounce_logger Module

It is often convenient to look at bounced SMPP messages only. The smpp_bounce_logger makes this much easier by writing bounces—both in-band and out-of-band bounce messages—to a single file in ‘@’ delimited format.

A sample configuration follows:

<a name="quickmob.example.smpp.bounce"></a> 


```
smpp_bounce_logger "smpp_bounce_logger1" {
  bounce_concurrency = 1
  bounce_logfile = "/var/log/ecelerity/smppbouncelog.ec"
}
```

You must add this module to your configuration file if you wish to log SMPP bounces separately. You can do this using the web UI or as described in "[Best Practices for Manually Changing Configuration Files](/momentum/3/3-reference/conf-manual-changes)".

You may not need to change any of the configuration options from their default values. For detailed instructions regarding this module's configuration options see https://support.messagesystems.com/docs/web-mobility/ "[The smpp_bounce_logger Module](/momentum/mobile/mobile-reference/modules-mobility-smpp-bounce-logger)".