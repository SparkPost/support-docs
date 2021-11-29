---
lastUpdated: "03/26/2020"
title: "fbllog"
description: "When a user selects Mark as Spam the ISP generates a notification email and sends it to one of the recipients defined by the Addresses option in the fbl module When Momentum receives the message it extracts the X MSFBL header decodes it and then logs it A line is..."
---

When a user selects "Mark as Spam", the ISP generates a notification email and sends it to one of the recipients defined by the `Addresses` option in the [fbl](/momentum/4/modules/fbl) module. When Momentum receives the message, it extracts the X-MSFBL header, decodes it, and then logs it.

### <a name="idp4766096"></a> fbl Records

A line is written to the `fbllog` for every ARF message received. The log entry is an `@` delimited string, such as the following:

`1224699438@18/00-02937-E2E6FF84@F@someone@test.com@default@default@abuse@yahoo.com@true`

The following is a description of the fields:

<a name="log_formats.fbl_logger.fields"></a> 


| Offset | Example Field | Description |
| --- | --- | --- |
| 0 | 1224699438 | Date of reception in Unix timestamp format (seconds since 00:00:00 Jan 1, 1970) |
| 1 | 18/00-02937-E2E6FF84 | Message ID |
| 2 | F | `F` indicating an FBL entry |
| 3 | someone | Original recipient local part |
| 4 | test.com | Original recipient domain |
| 5 | default | Binding on which the message was sent |
| 6 | default | Binding group on which the message was sent |
| 7 | abuse | Feedback type |
| 8 | yahoo.com | Domain to which the FBL message was sent |
| 9 | true | User-defined string |