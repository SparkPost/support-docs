---
lastUpdated: "03/26/2020"
title: "_smtp_error_class"
description: "This struct is defined as follows This struct has not been typedef ed to remove the leading underscore To use this struct include the file misc smtp error classify h Chapter 47 SMTP related Functions and smtp error for id..."
---

This struct is defined as follows:

```
struct _smtp_error_class {
  const char *short_name;
  const char *desc;
};
```

### Note

This struct has not been typedef'ed to remove the leading underscore.

To use this struct, include the file `misc/smtp_error_classify.h`.

### <a name="idp33219280"></a> See Also

[*SMTP-related Functions*](/momentum/3/3-api/smtp) and [smtp_error_for_id](/momentum/3/3-api/apis-smtp-error-for-id)