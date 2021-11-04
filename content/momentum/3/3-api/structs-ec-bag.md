---
lastUpdated: "03/26/2020"
title: "ec_bag"
description: "This struct is defined as follows To use this struct include the file ec boh int h Chapter 5 Bag Functions..."
---

This struct is defined as follows:

```
struct _ec_bag {
  ec_hash_table ht;
  ec_bag_hook_func func;
  void *closure;
  ec_atomic_t ref;
};
```

To use this struct, include the file `ec_boh_int.h`.

### <a name="idp45086592"></a> See Also

[*Bag Functions*](/momentum/3/3-api/bag)