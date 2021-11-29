---
lastUpdated: "03/26/2020"
title: "Module-related Functions"
description: "For an overview of the Momentum module API see Section 1 3 1 Module API and for an overview of hooks see Section 1 3 2 Hooking API..."
---

              
| Name                                                                                                                                        | Description                                                  |
|---------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [EC_DECLARE_HOOK](/momentum/3/3-api/apis-ec-declare-hook)                                               | Runtime hooking                                              |
| [ec_module_manifest_iter_clone](/momentum/3/3-api/apis-ec-module-manifest-iter-clone)                   | clone a module manifest iterator                             |
| [ec_module_manifest_iter_destroy](/momentum/3/3-api/apis-ec-module-manifest-iter-destroy)               | destroy a module manifest iterator                           |
| [ec_module_manifest_iter_init](/momentum/3/3-api/apis-ec-module-manifest-iter-init)                     | initialize a module manifest iterator                        |
| [ec_module_manifest_iter_next](/momentum/3/3-api/apis-ec-module-manifest-iter-next)                     | advances a module manifest iterator                          |
| [ec_module_manifest_refresh](/momentum/3/3-api/apis-ec-module-manifest-refresh)                         | refreshes the manifest list                                  |
| [ec_module_manifest_value_as_dict](/momentum/3/3-api/apis-ec-module-manifest-value-as-dict)             | retrieves a dictionary of manifest values for a named module |
| [ec_module_manifest_value_as_list](/momentum/3/3-api/apis-ec-module-manifest-value-as-list)             | retrieves a list of manifest values for a named module       |
| [ec_module_manifest_value_as_string](/momentum/3/3-api/apis-ec-module-manifest-value-as-string)         | retrieves a manifest value for a named module                |
| [ec_module_resolve_capability](/momentum/3/3-api/apis-ec-module-resolve-capability)                     | resolve a capability by loading modules                      |
| [module_add_hook_first](/momentum/3/3-api/apis-module-add-hook-first)                                   | Add a hook as the first hook                                 |
| [module_add_hook_last](/momentum/3/3-api/apis-module-add-hook-last)                                     | Add a hook as the last hook                                  |
| [module_get_hook_array_from_transaction](/momentum/3/3-api/apis-module-get-hook-array-from-transaction) | Get the hooks associated with the current transaction        |
| [module_get_hook_head](/momentum/3/3-api/apis-module-get-hook-head)                                     | Fetch the arguments for a hook                               |

For an overview of the Momentum module API see [“Module API”](/momentum/3/3-api/arch-primary-apis#arch.module) and for an overview of hooks see [“Hooking API”](/momentum/3/3-api/arch-primary-apis#arch.hooking).