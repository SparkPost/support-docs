---
lastUpdated: "03/26/2020"
title: "ilf_logger – Incremental License Fee Logging"
description: "The Incremental License Fee ilf logger module is designed for users who have usage based licenses It provides an easy way to comply with the usage reporting requirements contained in the agreement with Message Systems Usage files are written to var log ecelerity ilf Bundle these files and sent them..."
---

The Incremental License Fee (ilf) logger module is designed for users who have usage-based licenses. It provides an easy way to comply with the usage reporting requirements contained in the agreement with Message Systems. Usage files are written to `/var/log/ecelerity/ilf`. Bundle these files and sent them to Message Systems as appropriate.

In its default configuration, this module collects data on a daily basis. The following information is captured:

*   SMTP Receptions

*   SMTP Deliveries

*   SMPP Receptions

*   SMPP Deliveries

*   MM7 Receptions

*   MM7 Deliveries

*   Push Deliveries

### <a name="modules.ilf_logger.configuration"></a> Configuration

The ilf_logger module is configured through a configuration file using a stanza such as:

```
ilf_logger {
  write_interval = 60
  filename_format = "/var/log/ecelerity/ilf/%m-%d-%Y.ilfdata"
}
```

The following are configuration options valid in the ilf_logger scope:

<dl class="variablelist">

<dt>filename_format</dt>

<dd>

Set the name and location of the log files. Default value is `/var/log/ecelerity/ilf/%m-%d-%Y.ilfdata`.

</dd>

<dt>write_interval</dt>

<dd>

How often to write to file. Default value is `60` seconds.

</dd>

</dl>