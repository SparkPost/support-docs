---
lastUpdated: "03/26/2020"
title: "Structs"
description: "This section documents all the structs used by the C API functions and hooks these structs are listed alphabetically All structs with names that begin with an underscore have been typedef ed in the following way define EC TYPES DEF x struct x typedef struct x x Table of Contents..."
---

This section documents all the structs used by the C API functions and hooks; these structs are listed alphabetically. All structs with names that begin with an underscore have been typedef'ed in the following way:

```
#define __EC_TYPES_DEF(x) \
  struct _##x; \
  typedef struct _##x x
```

