---
lastUpdated: "03/26/2020"
title: "ec_config_option_def"
description: "The members of this struct are as follows To use this struct include the file Valid ec config item type t constants are To use this struct include the file configuration h Section 1 3 5 1 Define the Configuration Object Section 68 21 ec config header Section 68 21..."
---

The members of this struct are as follows:

```
/** this structure is used for defining symbolic values for config options */
struct ec_config_value_mapping {
  const char *name;
  const char *value;
};
struct _ec_config_option_def {
  const char *name;
  ec_config_item_type_t type;
  const char *personality;
  const char *fallback;
  unsigned int flags;
  void *closure;

  const char *defval;
  const struct ec_config_value_mapping *map;

  int (*validate_value)(ec_config_option_def *option, string *output,
                        ec_config_header *cfghdr, ec_config_value *val);
  void (*postset)(ec_config_option_def *option, string *output,
                  ec_config_header *cfghdr, ec_config_value *val);
  void (*datafree)(ec_config_option_def *option, void *data);
};
```

To use this struct, include the file .

Valid ec_config_item_type_t constants are:

```
ECCFGTYPE_STRING:
ECCFGTYPE_INT:
ECCFGTYPE_UINT64:
ECCFGTYPE_PERMS:
ECCFGTYPE_BOOL:
ECCFGTYPE_FLOAT:
ECCFGTYPE_SOCKADDR:
ECCFGTYPE_THROTTLE:
ECCFGTYPE_ECDICT:
ECCFGTYPE_SIZE_T:
ECCFGTYPE_EC_CONFIG_REGEX:
ECCFGTYPE_SOCKADDR_PORTLESS:
```

To use this struct, include the file `configuration.h`.

### <a name="idp46439488"></a> See Also

[“Define the Configuration Object”](/momentum/3/3-api/arch-primary-apis#arch.def.config), [“ec_config_header”](/momentum/3/3-api/structs-ec-config-header), [“ec_config_header”](/momentum/3/3-api/structs-ec-config-header) and [ec_config_register_option](/momentum/3/3-api/apis-ec-config-register-option)