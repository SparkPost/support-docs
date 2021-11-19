---
lastUpdated: "03/26/2020"
title: "eclist_node"
description: "This struct is defined as follows This struct is typedef ed as follows typedef struct ec list node eclist node To use this struct include the file eclist h stringwrite config list..."
---

This struct is defined as follows:

```
union eclist_object_definition_u
{
  LIST_UNION_MEMBERS 
  struct eclist_object_definition_u_vkeyval {
    union vkeyval_key {
      LIST_UNION_MEMBERS
    } key;
    union vkeyval_val {
      LIST_UNION_MEMBERS
    } val;
  } vkeyval;
};
typedef union eclist_object_definition_u eclist_object_definition;

struct ec_list_node
{
  int type;
  eclist_object_definition object;
  struct ec_list_node *next;
};
```

This struct is typedef'ed as follows: `typedef struct ec_list_node eclist_node;`. To use this struct, include the file `eclist.h`.

### <a name="idp46467840"></a> See Also

[stringwrite_config_list](/momentum/3/3-api/apis-stringwrite-config-list)