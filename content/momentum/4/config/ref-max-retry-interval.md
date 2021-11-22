---
lastUpdated: "03/26/2020"
title: "max_retry_interval"
description: "max retry interval maximum retry interval Max Retry Interval 43200 The maximum interval between successive retries for a message This provides a cap on the effective retry calculated from Retry Interval The default value for this option is 43200 seconds 12 hours Note that the Max Retries setting has a..."
---

<a name="conf.ref.max_retry_interval"></a> 
## Name

max_retry_interval — maximum retry interval

## Synopsis

`Max_Retry_Interval = "43200"`

<a name="idp25359904"></a> 
## Description

The maximum interval between successive retries for a message. This provides a cap on the effective retry calculated from `Retry_Interval`. The default value for this option is `43200` seconds (12 hours).

### Warning

Note that the `Max_Retries` setting has a bearing on this option. The default value for `Max_Retries` is "auto" so be sure to change it to a positive integer or "none" if you plan to use `Max_Retry_Interval`. When `Max_Retries` is set to a positive integer, messages expire within `Messsage_Expiration` seconds or after the specified number of retries, whichever occurs first. When `Max_Retries` is "none" there is no limit on the number of retries of a message; the message will expire by `Message_Expiration` only.

Consider the following configuration snippet:

```
Retry_Interval = 1200
Max_Retry_Interval = 1200
Max_Retries = 5
```

Given this configuration, a bounced message will be retried every 1200 seconds and will expire in 6000 seconds unless `Message_Expiration` is set to a value lower than 6000\. In which case, the message will expire in `Messsage_Expiration` seconds. "Max_Retry_Interval" caps "Retry_Interval" at 1200\. Without it a bounced message would expire in 37200 seconds (unless Messsage_Expiration is less than this number) because the retry interval is doubled each time as follows:

```
1200
       2400
       4800
       9600
      19200
      -----
      37200
```
<a name="idp25370464"></a> 
## Scope

max_retry_interval is valid in the binding, binding_group, domain and global scopes.

<a name="idp25372336"></a> 
## See Also

[retry_interval](/momentum/4/config/ref-retry-interval), [max_retries](/momentum/4/config/ref-max-retries)