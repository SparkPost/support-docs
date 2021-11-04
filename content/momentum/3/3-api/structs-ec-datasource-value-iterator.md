---
lastUpdated: "03/26/2020"
title: "ec_datasource_value_iterator"
description: "This struct has the following members To use this struct include the file modules datasource ecdatasource h Use this construct to iterate over the column names and values of a data set ec datasource next column and Section 68 30 ec hash iter..."
---

This struct has the following members:

```
struct _ec_datasource_value_iterator {
  const char *name; /* name of the column */
  ecdata_columnar_data *col;

  /* internal iteration state */
  int i;
  ec_hash_iter iter;
};
```

To use this struct, include the file `modules/datasource/ecdatasource.h`.

Use this construct to iterate over the column names and values of a data set.

### <a name="idp34515264"></a> See Also

[ec_datasource_next_column](/momentum/3/3-api/apis-ec-datasource-next-column) and [“ec_hash_iter”](/momentum/3/3-api/structs-ec-hash-iter)