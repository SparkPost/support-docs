---
lastUpdated: "03/26/2020"
title: "importlog"
description: "The importlog records the outcome of a spool import operation It is configured in the ec logger The following is a description of the fields Table 35 8 Import Record Fields Offset Example Field Description 0 1064869327 Date of the event in Unix timestamp format seconds since 00 00 00..."
---

The `importlog` records the outcome of a [spool import](/momentum/4/console-commands/spool-import) operation. It is configured in the [ec_logger](/momentum/4/modules/ec-logger).

### <a name="idp4831552"></a> Import Records

The following is a description of the fields:

<a name="log_formats.import_logger.fields"></a> 


| Offset | Example Field | Description |
| --- | --- | --- |
| 0 | 1064869327 | Date of the event in Unix timestamp format (seconds since 00:00:00 Jan 1, 1970) |
| 1 | 00/00-25004-31B987F3 | 

Message's original in-spool message-id

(This is a unique value per message and corresponds with its location in the spool being imported.)

 |
| 2 | I | `I` indicates that this log line is an import event. |
| 3 | 00/00-25004-31B987F3 | 

Message's new in-spool message-id

(This is usually the same as the message-id recorded in field 1, but may be altered during import to avoid collisions with existing messages with the same identifier.)

 |
| 4 | 1 | 

Result indicator

(This is a number between 1 and 4 with the following meanings: 1 is complete success, 2 indicates failure during the read of metadata, 3 is failure reading the message from the spool. and 4 is failure writing the message into the main Momentum spool.)

 |
| 5 | /var/spool/my-alternative-spool | Base directory containing the spool being imported |