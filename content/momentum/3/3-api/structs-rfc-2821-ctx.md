---
lastUpdated: "03/26/2020"
title: "rfc2821_ctx"
description: "The members of this struct are as follows To use this struct include the file misc rfc 2821 addr h rfc 2821 address destroy Section 68 31 ec hash table..."
---

The members of this struct are as follows:

```
struct _rfc2821_ctx {
  struct _rfc2821_ctx_inputs {
    unsigned full_validation:1;
    unsigned capture_params:1;
    unsigned normalize_domain:1;
    /* if non-zero, localpart is to hold the user and detail the detail
     * for an address like user+detail@domain */
    unsigned populate_detail:1;
    unsigned allow_missing_domain:1;
    unsigned _spare:27;
  } inputs;
  char localpart[MAXDOMAINNAME];
  char domain[MAXDOMAINNAME];
  char detail[MAXDOMAINNAME];
  int error;
  ECDict params;
};

typedef struct _rfc2821_ctx rfc2821_ctx;
```

To use this struct, include the file `misc/rfc2821addr.h`.

### <a name="idp46569024"></a> See Also

[rfc2821_address_destroy](/momentum/3/3-api/apis-rfc-2821-address-destroy), [“ec_hash_table”](/momentum/3/3-api/structs-ec-hash-table)