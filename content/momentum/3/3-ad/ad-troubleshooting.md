---
lastUpdated: "03/26/2020"
title: "Troubleshooting"
description: "One troubleshooting strategy is to change the log level for the adaptive module Do this by making the following change to the configuration of the adaptive module adaptive debug level debug The different debug levels are described at Debug Levels Remove this setting when you have finished debugging You can..."
---


One troubleshooting strategy is to change the log level for the adaptive module. Do this by making the following change to the configuration of the adaptive module:

```
adaptive {
  ...
  debug_level = "debug"
}
```

The different debug levels are described at [Debug Levels](/momentum/3/3-reference/3-reference-conf-ref-debug-flags#conf.ref.debug.levels). Remove this setting when you have finished debugging. You can also set this option from the system console as described in the following section.

If you suspect that there are other issues—scripting problems, for example—you can reset the logging level for a specific module or set it globally using [debug_flags](/momentum/3/3-reference/3-reference-conf-ref-debug-flags).

## <a name="ad.troubleshooting.logs"></a> Logs, Alerts and Summaries

The adaptive module logs its actions and sends out alerting emails and activity summaries.

### Note

For more verbose log entries set the debug level in the configuration file or by using the system console. From the console issue the command **`config set adaptive debug_level debug`**                                . When you have finished debugging be sure to reset the debug level in the following way: **`config set adaptive debug_level warning`**                                  .

When an alerting email is sent, a log entry starting with `ALERT on " .. hostname .. : .. action.` is created. The frequency of alerting emails depends upon the volume of traffic and the `adaptive_notification_interval` setting. For a sample summary email see [Summary Email](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.sample.email).

Whenever the adaptive module makes an adjustment to delivery parameters, it logs that fact to the adaptive log. To confirm that AD is behaving as expected you can check these logs. The logs are located in the `/var/log/ecelerity/adaptive` directory. The messages in the adaptive logs are detailed in [*Adaptive Logs*](/momentum/3/3-ad/ad-appendix-logs) . *Note*: Log entries differ from alerting emails.

Adaptive logging is enabled by default but you can ensure that it is turned on by checking the value of the adaptive module option, `enable_logging`. The adaptive module option `operational_log_level` sets the log level for the adaptive log. This option defaults to `notice`. Change this value for more verbose logging. For easier readability you can also use the `split_logs_by_binding` option to create logs by binding.