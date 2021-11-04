---
lastUpdated: "03/26/2020"
title: "shared_module_infrastructure_8"
description: "This struct is defined as follows To use this struct include the file shared module h log attempt v 1 log delivery v 1 log rejection log permanent failure v 1 log reopen and log transient failure v 1..."
---

This struct is defined as follows:

```
struct _shared_module_infrastructure_8
{
  u_int32_t module_api_version;
  module_instance_data *_inst;
  void *_proxy;
  /** this name only shows up in 'module list' */
  const char *module_name;
  /** this description only shows up in 'module list' */
  const char *module_description;
  /** allows control channel interaction with your module */
  ControlHookFunc module_control;
  /** @deprecated do not use in 3.0 modules */
  ModuleConfFunc module_conf;
  /** @deprecated do not use in 3.0 modules */
  ModuleExtendedConfFunc module_ext_conf;
  /** @deprecated do not use in 3.0 modules */
  ModuleInitFunc module_init;
  /** @deprecated do not use in 3.0 modules */
  ModuleInitFunc module_post_init;
  /**
   * Gets called when your module is first loaded; use it to register any
   * capabilities your module provides, and do any other initialization
   * that you only do once regerdless of the number of instances.
   */
  ModuleConfSetupFunc module_config_setup;
  /** @deprecated do not use in 3.0 modules */
  ModuleEnablerFunc module_enable;
  /** @deprecated do not use in 3.0 modules */
  ModuleCanUnloadFunc module_can_unload;
  /**
   * @since 3.0
   * Gets called for every new instance at commit time (if the module stanza
   * is modified in the transaction, a new instance is created) with the
   * EC_MODULE_INIT_INIT flag.
   *
   * Gets called once with the EC_MODULE_INIT_POSTINIT flag for all the
   * instances in the initial config after we've forked and dropped privileges.
   *
   * Gets called when an instance is destroyed (on the old instance when a
   * commit changes or removes a module stanza) with the
   * EC_MODULE_INIT_DESTROY flag.
   *
   * @return 0 on success, -1 on error; return value ignored for DESTROY
   */
  ModuleExtendedInitFunc module_ext_init;
};

typedef int  (*ModuleConfSetupFunc) (generic_module_infrastructure *self,
  int ignoreme);
typedef int  (*ModuleExtendedInitFunc) (generic_module_infrastructure *self,
  ec_config_header *transaction, string *output, int flags);
typedef void (*ControlHookFunc) (generic_module_infrastructure *self,
  string *response, const char *command, int xml);

/* The below types are deprecated, do not use them in 3.0 */
typedef int  (*ModuleConfFunc) (generic_module_infrastructure *,
                                ec_config_header *, const char *, const char *);
typedef int  (*ModuleExtendedConfFunc) (generic_module_infrastructure *,
                                ec_config_header *, const char *, int type,
                                void *data);
typedef int  (*ModuleInitFunc) (generic_module_infrastructure *);
typedef void (*ModuleEnablerFunc)(generic_module_infrastructure *, int enable);
typedef int  (*ModuleCanUnloadFunc)(generic_module_infrastructure *);
```

To use this struct, include the file `shared_module.h`.

### <a name="idp28189088"></a> See Also

[log_attempt_v1](/momentum/3/3-api/hooks-core-log-attempt-v-1), [log_delivery_v1](/momentum/3/3-api/hooks-core-log-delivery-v-1), [log_rejection](/momentum/3/3-api/hooks-core-log-rejection), [log_permanent_failure_v1](/momentum/3/3-api/hooks-core-log-permanent-failure-v-1), [log_reopen](/momentum/3/3-api/hooks-core-log-reopen), and [log_transient_failure_v1](/momentum/3/3-api/hooks-core-log-transient-failure-v-1).