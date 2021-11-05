---
lastUpdated: "03/26/2020"
title: "ecdata_value"
description: "The members of the ecdata value struct are as follows To use this struct include the file modules datasource ecdatasource h ec datasource set param by name..."
---

The members of the ecdata_value struct are as follows:

```
struct _ecdata_value {
  unsigned char type;
  union _ecdata_value_v {
    int intval;
    const char *strval;
  } v;
  unsigned long len;
  const char *charset;
};
```

To use this struct, include the file `modules/datasource/ecdatasource.h`.

### <a name="idp34540784"></a> Typedef

### <a name="idp34541968"></a> See Also

[ec_datasource_set_param_by_name](/momentum/3/3-api/apis-ec-datasource-set-param-by-name)