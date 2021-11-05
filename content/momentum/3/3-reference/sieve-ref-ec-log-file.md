---
lastUpdated: "03/26/2020"
title: "ec_log_file"
description: "ec log file log to a file io wrapper ec log file file uri arbitrary text ec log file allows you to log arbitrary information to a specified file or io wrapper Unlike the ec log action the raw message plus an appended newline will be written to the file..."
---

<a name="sieve.ref.ec_log_file"></a> 
## Name

ec_log_file — log to a file/io wrapper

## Synopsis

`ec_log_file` { *`file uri`*      } { *`arbitrary_text`* }

<a name="idp30216176"></a> 
## Description

`ec_log_file` allows you to log arbitrary information to a specified file or io wrapper. Unlike the `ec_log` action the raw message, plus an appended newline, will be written to the file, with no additional context or timestamp information unless present in the user-defined message. The message will be written regardless of the Debug_Flags setting.

<a name="example.ec_log_file"></a> 


```
if envelope :domain :is "from" "good-guy.com" {
  ec_log_file "/var/log/logfile" "got mail from the good guys";
}
```

<a name="example.ec_log_file.second"></a> 


```
if envelope :domain :is "from" "good-guy.com" {
  ec_log_file "jlog:///var/log/ecelerity/queue.rt=>master" "got mail from the good guys";
}
```

Be sure that you have permission to write to the directory containing the output file.

Since the Sieve validation phases through the data phase are executed in the scheduler thread, no I/O should be done during these phases. Use this function *after* the data phase.

<a name="idp30225456"></a> 
## See Also

[ec_log](/momentum/3/3-reference/sieve-ref-ec-log)