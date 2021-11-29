---
lastUpdated: "03/26/2020"
title: "ec_log"
description: "ec log log to the paniclog ec log message ec log allows you to log arbitrary information to the paniclog The log record will be prefixed with the script source filename and the line number at which the ec log was executed The message is logged at the CRITICAL level..."
---

<a name="sieve.ref.ec_log"></a> 
## Name

ec_log — log to the paniclog

## Synopsis

`ec_log` { *`message`* }

<a name="idp30197456"></a> 
## Description

`ec_log` allows you to log arbitrary information to the paniclog. The log record will be prefixed with the script source filename and the line number at which the `ec_log` was executed. The message is logged at the CRITICAL level for the LOG1 subsystem. These messages will appear in the paniclog under the default Debug_Flags settings.

<a name="example.ec_log"></a> 


```
if envelope :domain :is "from" "good-guy.com" {
  ec_log "got mail from the good guys";
}
```

### Note

This function cannot log messages longer than `1972` characters. Longer messages are truncated. If your requirements exceed this maximum use [ec_log_file](/momentum/3/3-reference/sieve-ref-ec-log-file) instead.