---
lastUpdated: "03/26/2020"
title: "smtp_client_args"
description: "This struct is defined as follows An EC Dict is a Section 68 31 ec hash table To use this struct include the file smtp h Chapter 47 SMTP related Functions..."
---

This struct is defined as follows:

```
struct _smtp_client_args
{
  ECDict dict;
  int len;
};
```

An ECDict is a [“ec_hash_table”](/momentum/3/3-api/structs-ec-hash-table). To use this struct, include the file `smtp.h`.

### <a name="idp40698496"></a> See Also

[*SMTP-related Functions*](/momentum/3/3-api/smtp)