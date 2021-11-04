---
lastUpdated: "03/26/2020"
title: "connection_handle"
description: "This struct is defined as follows To use this struct include the file dns h Section 68 9 connection..."
---

This struct is defined as follows:

```
struct _connection_handle
{
  host_record *host;            /* host record to which this conn belongs */
  int binding_slot;             /* binding from which it was connected */
  int offset;                   /* host->connections[offset] is what we want */
  void *user_data;              /* This is populated by initiate_connection */
  connection *conn;
};
```

To use this struct, include the file `dns.h`.

### <a name="idp46430512"></a> See Also

[“connection”](/momentum/3/3-api/structs-connection)