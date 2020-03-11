---
title: "3.3. Configuring for Web UI Stats"
description: "In the Mobile Momentum web UI you can view statistics by protocol In order to do this you must create additional SMPP and MM 7 modules that log in jlog format Add the following modules to your configuration in order to view web statistics by protocol Example 3 7 Configuration..."
---

In the Mobile Momentum web UI you can view statistics by protocol. In order to do this you must create additional SMPP and MM7 modules that log in jlog format. Add the following modules to your configuration in order to view web statistics by protocol:

<a name="quickmob.example.web.stats"></a> 

**Example 3.7. Configuration for web UI statistics**

```
smpp_logger "smpp_logger_rt" {
  logfile = "jlog:///var/log/ecelerity/smpp.rt=>ec_rt_stats"
}
mms_logger "mms_logger_rt" {
  logfile = "jlog:///var/log/ecelerity/mm7.rt=>ec_rt_stats"
}
```

You must create log files exactly as indicated in [Example 3.7, “Configuration for web UI statistics”](quickmob.config.web.stats#quickmob.example.web.stats "Example 3.7. Configuration for web UI statistics") if you want web reporting by protocol to work. You *cannot* change the format for these jlogs.