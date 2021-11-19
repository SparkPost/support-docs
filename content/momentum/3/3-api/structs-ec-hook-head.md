---
lastUpdated: "03/26/2020"
title: "__ec_hook_head"
description: "The members of this structure are as folllows To use this struct include the file module hooks h module get hook array from transaction and module get hook head..."
---

The members of this structure are as folllows:

```
struct __ec_hookarg {
  struct __ec_hookarg *next;
  char *type_name;
  char *arg_name;
  int arg_size;
};

struct __ec_hook_head {
  char *hook_name;
  char *hook_proto;
  char *decl_proto;
  struct __ec_hookarg *args;
  /** @deprecated */
  ec_atomic_t arrlock;
  /** @deprecated */
  struct __ec_hookarray *arr;
  ec_atomic_t hook_id;
};
```

To use this struct, include the file `module-hooks.h`.

### <a name="idp34487760"></a> See Also

[module_get_hook_array_from_transaction](/momentum/3/3-api/apis-module-get-hook-array-from-transaction) and [module_get_hook_head](/momentum/3/3-api/apis-module-get-hook-head)