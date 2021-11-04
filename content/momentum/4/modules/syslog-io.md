---
lastUpdated: "03/26/2020"
title: "syslog_io – The syslog_io Module"
description: "syslog io is a wrapper module that uses the syslog library routines to log to the system logger facility The following is an example configuration Example 71 96 syslog io version 3 0 The following configuration options are available default facility The default facility The default value is mail ident..."
---

<a name="idp23118224"></a> 

syslog_io is a wrapper module that uses the syslog library routines to log to the system logger facility.

### <a name="idp23120112"></a> Configuration

The following is an example configuration:

<a name="example.syslog.3"></a> 


```
syslog_io {
  ident = "ecelerity" # the default
  default_facility = "mail" # the default
}
```

The following configuration options are available:

<dl class="variablelist">

<dt>default_facility</dt>

<dd>

The default_facility. The default value is `mail`.

</dd>

<dt>ident</dt>

<dd>

The identification string. The default value is `ecelerity`.

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

### Warning

Be careful using this wrapper for the mainlog or rejectlog as the volume is likely to swamp the system logger.