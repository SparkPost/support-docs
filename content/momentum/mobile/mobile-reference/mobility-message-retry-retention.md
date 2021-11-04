---
lastUpdated: "03/26/2020"
title: "Message Retention"
description: "By default messages are stored in the Riak database for fourteen days 1209600 seconds This length of time is determined by expiry secs in the opt msys 3rd Party riak etc app config file The relevant section of this configuration file is reproduced below To adjust the length of time..."
---

By default, messages are stored in the Riak database for fourteen days (1209600 seconds). This length of time is determined by `expiry_secs` in the `/opt/msys/3rdParty/riak/etc/app.config` file.

The relevant section of this configuration file is reproduced below.:

```
{<<"mstore">>, riak_kv_bitcask_backend, [
  {data_root, "/var/db/riak/mstore"},
  {expiry_secs, 1209600}
]},
```

To adjust the length of time that messages are retained, change the value of `expiry_secs`.

For more information about Riak see [Riak](/momentum/3/3-reference/operations-riak).