---
lastUpdated: "03/26/2020"
title: "maintainer_pool"
description: "maintainer pool configure mail queues DNS lookup and module events to use multiple threads maintainer pool pool name Configuration Change This option is available as of version 3 6 In order to use this option you must have a Supercharger license For more information see Section 2 4 Configuring for..."
---

<a name="conf.ref.maintainer_pool"></a> 
## Name

maintainer_pool — configure mail queues, DNS lookup and module events to use multiple threads

## Synopsis

`maintainer_pool = "pool_name"`

<a name="idp10050944"></a> 
## Description

**Configuration Change. ** This option is available as of version 3.6.

### Note

In order to use this option you must have a "Supercharger" license. For more information see [“Configuring for Multiple Event Loops in Momentum 3.6”](/momentum/3/3-reference/conf-multi-core).

Changing the value of this option at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

This option is used to create multiple event loops. Set it to the name of an eventloop so that mail queues, DNS lookup and module events use multiple threads. A configuration example follows:

<a name="conf.ref.maintainer_pool.example"></a> 


```
eventloop "maint" {
  concurrency = 5
}

maintainer_pool = "maint"
```

Set `concurrency` to a number equal to or less than the number of computer cores.

There is no default value for this option.

<a name="idp10059648"></a> 
## Scope

`maintainer_pool` is valid in the global scope.

<a name="idp10061248"></a> 
## See Also

[“Configuring for Multiple Event Loops in Momentum 3.6”](/momentum/3/3-reference/conf-multi-core) and [eventloop](/momentum/3/3-reference/conf-ref-eventloop)