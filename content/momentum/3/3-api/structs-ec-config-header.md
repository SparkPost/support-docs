---
lastUpdated: "03/26/2020"
title: "ec_config_header"
description: "The members of this struct are as follows To use this struct include the file configuration h ec atomic t is a typedef of a long integer ec config fetch globalconf Section 68 31 ec hash table and Section 68 40 ec ptr array..."
---

The members of this struct are as follows:

```
/**
 * This structure represents scope instances in the configuration, such as
 * bindings, modules and listeners. You must not modify anything in this
 * structure yourself; always call the appropriate API.
 */
struct _ec_config_header {
  /** refcount */
  ec_atomic_t refcnt;

  /* Generation */
  ec_atomic_t generation;

  /** the name of this instance */
  char *name;

  /** @deprecated always NULL */
  char *comment;
  /** @deprecated always NULL */
  ECDict attributes;
  /** @deprecated always 0 */
  int suppress_write_config;

  /** the scope this is an instance of */
  struct ec_config_scope *myscope;

  /** @deprecated always NULL */
  struct _ec_config_header *parent;
  /** @deprecated always NULL */
  void **cfgslots;
  /** @deprecated always NULL */
  void **dataslots;
  /** @deprecated always NULL */
  ECDict comments;

  /** child scope instances */
  ec_hash_table *children;
  /** information for finding matching child scopes; may be NULL */
  ec_hash_table *match_scopes;

  /** true if this instance was used via legacy APIs and so can't be freed */
  int leaked;
  /** the ancestry of this instance */
  char *ancestry;
  /** pointer to the root of the transaction */
  struct _ec_config_header *transaction;
  /** option values by option slot */
  ec_ptr_array *options;
  /* references to the syntax tree nodes we came from */
  ec_ptr_array *nodes;
  /* hash for looking up which of our nodes a child node comes from */
  ec_hash_table *childnodes;
};
```

To use this struct, include the file `configuration.h`.

### Note

`ec_atomic_t` is a typedef of a long integer.

### <a name="idp45981536"></a> See Also

[ec_config_fetch_globalconf](/momentum/3/3-api/apis-ec-config-fetch-globalconf), [“ec_hash_table”](/momentum/3/3-api/structs-ec-hash-table) and [“ec_ptr_array”](/momentum/3/3-api/structs-ec-ptr-array)