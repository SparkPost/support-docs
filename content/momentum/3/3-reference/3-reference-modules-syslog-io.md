---
lastUpdated: "03/26/2020"
title: "syslog_io – The syslog_io Module"
description: "syslog io is a wrapper module that uses the syslog library routines to log to the system logger facility Example 14 103 syslog io version 3 0 default facility The default facility having a default value mail ident The identification string having a default value ecelerity When this module is..."
---

<a name="idp21551520"></a> 

syslog_io is a wrapper module that uses the syslog library routines to log to the system logger facility.

### <a name="idp21553248"></a> Configuration

<a name="example.syslog.3"></a> 


```
syslog_io {
  ident = "ecelerity" # the default
  default_facility = "mail" # the default
}
```

<dl class="variablelist">

<dt>default_facility</dt>

<dd>

The default_facility, having a default value, "mail"

</dd>

<dt>ident</dt>

<dd>

The identification string, having a default value, "ecelerity"

</dd>

</dl>

When this module is enabled, you can use the `syslog://` wrapper to write paniclog entries to the system log. You can override the default facility via an URL parameter, and optionally set the priority (the default value is `error`). For example:

<a name="example.syslog.paniclog.3"></a> 


```
ec_logger "ec_logger1" {
  paniclog = "syslog://?facility=mail&priority=error"
}
```

The facilities and priorities are the standard syslog values. Not all facilities are available on all systems.

Be careful using this wrapper for the mainlog or rejectlog; the volume is likely to swamp the system logger.