---
lastUpdated: "03/26/2020"
title: "ec_ptr_array"
description: "The members of this struct are as follows To use this struct include the file misc ec ptr array h ec ptr array init and module get hook array from transaction..."
---

The members of this struct are as follows:

```
typedef struct _ec_ptr_array {
  u_int32_t sizeof_ec_ptr_array;
  int size;
  int allocd;
  void **items;
  ec_ptr_array_free_func free_func;
#define EC_PTR_ARRAY_DEFAULT_PREALLOC 16
  void *static_items[EC_PTR_ARRAY_DEFAULT_PREALLOC];
} ec_ptr_array;
```

To use this struct, include the file `misc/ec_ptr_array.h`.

### <a name="idp34997104"></a> See Also

[ec_ptr_array_init](/momentum/3/3-api/apis-ec-ptr-array-init) and [module_get_hook_array_from_transaction](/momentum/3/3-api/apis-module-get-hook-array-from-transaction)