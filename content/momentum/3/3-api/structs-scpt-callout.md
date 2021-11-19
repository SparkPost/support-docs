---
lastUpdated: "03/26/2020"
title: "scpt_callout"
description: "This struct is defined as follows To use this struct include the file modules scriptlets ec scriptlet h Chapter 42 Scriptlet and Alerting Functions and Section 68 72 scpt thread..."
---

This struct is defined as follows:

```
* defines a C parameter type */
struct scpt_arg_def {
  char *type_name;   /* C type name */
  scpt_objtype *objtype;
  unsigned int size; /* size of C type on stack */
  enum {
    SCPT_T_IGNORE, /* don't map this one */
    SCPT_T_META,   /* use meta table */
    SCPT_T_STRING, /* read-only string */
    SCPT_T_INT,    /* an integer type */
    SCPT_T_VALIST, /* va_list */
    SCPT_T_VCTX,   /* validate_context */
  } type;
  const char *bag_type_name; /* name used for ec_bag */
  const char *ctx_key_name; /* name used to index _CTX */
  int looked_for_metatable; /* if true and objtype == NULL, we have no clue */
};

/* defines a hook or callout point */
struct scpt_callout {
  char *name;
  struct scpt_arg_def *rettype;
  /* id number is based on the order of registration of the
   * callout and can be used for accelerated resolution of
   * the callout hook chain at runtime */
  int calloutid;
  /* array of scpt_arg_def */
  ec_ptr_array arg_defs; 
  /* key for hash table (may be different from canonical name) */
  char *hashkey;
};
```

To use this struct, include the file `modules/scriptlets/ec_scriptlet.h`.

### <a name="idp34523968"></a> See Also

[Chapter 42, *Scriptlet (and Alerting) Functions*                         ](script "Chapter 42. Scriptlet (and Alerting) Functions") and [“scpt_thread”](/momentum/3/3-api/structs-scpt-thread)