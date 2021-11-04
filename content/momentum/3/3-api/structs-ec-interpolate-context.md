---
lastUpdated: "03/26/2020"
title: "ec_interpolate_context"
description: "This struct is defined as follows To use this struct include the file misc expand string re ec interpolate add reqs..."
---

This struct is defined as follows:

```
struct _ec_interpolate_context {
  ec_ptr_array jobs;
  ec_ptr_array pieces;
  ec_atomic_t pending;
  ec_async_job *master_job;
  string cache_key;
  string *output;
  int mode;
  ec_bag *bag;
  u_int32_t bag_version;
  int current_piece;
  ECDict sample_typednames;
  int reqs;
};
```

To use this struct, include the file `misc/expand_string.re`.

### <a name="idp45367952"></a> See Also

[ec_interpolate_add_reqs](/momentum/3/3-api/apis-ec-interpolate-add-reqs)