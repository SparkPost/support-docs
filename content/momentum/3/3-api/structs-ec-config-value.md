---
lastUpdated: "03/26/2020"
title: "ec_config_value"
description: "The members of this struct are as follows To use this struct include the file configuration h config get binding domain tls verify Section 68 22 ec config option def and ec config release value..."
---

The members of this struct are as follows:

```
struct _ec_config_value {
  /** refcount */
  ec_atomic_t refcnt;
  /** true if the value was used via legacy APIs and so can't be freed */
  int leaked;
  /** pointer to option this is an instance of */
  ec_config_option_def *opt;
  /** true if the value shadows an earlier definition */
  int shadow;
  /** reference to the syntax tree node we came from */
  ecGeneric_config_node_t *node;
  ec_config_value_storage *v;
  void *data;
};
union _ec_config_value_storage {
  char *vstr;
  int vint; /* also used by PERM and BOOL */
  u_int64_t vu64;
  double vdouble; /* FLOAT type */
  struct sockaddr *vsa;
  throttle *vthrot;
  ECDict vdict;
  size_t vsize;
  ec_config_regex *vre;
  ec_ptr_array *varr; /* used for is_array options */
};
```

To use this struct, include the file `configuration.h`.

### <a name="idp32345904"></a> See Also

[config_get_binding_domain_tls_verify](/momentum/3/3-api/apis-config-get-binding-domain-tls-verify), [“ec_config_option_def”](/momentum/3/3-api/structs-ec-config-option-def)and [ec_config_release_value](/momentum/3/3-api/apis-ec-config-release-value)