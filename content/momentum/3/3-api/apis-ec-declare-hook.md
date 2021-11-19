---
lastUpdated: "03/26/2020"
title: "EC_DECLARE_HOOK"
description: "EC DECLARE VOID HOOK EC DECLARE HOOK Runtime hooking If you're considering building extensions in a modular fashion where one module can optionally take advantage of features provided by another possibly third party module then you may wish to use the hooking infrastructure in Momentum Hooks are prototyped in a..."
---

<a name="apis.ec_declare_hook"></a> 
## Name

EC_DECLARE_VOID_HOOK, EC_DECLARE_HOOK — Runtime hooking

## Synopsis

```
#include "module-hooks.h"

EC_DECLARE_VOID_HOOK(module,
  name,
  typedefargs,
  declargs,
  callargs
)
```

```
#include "module-hooks.h"

EC_DECLARE_HOOK(module,
   type,
   name,
   typedefargs,
   declargs,
   callargs,
   handleret
)
```
<a name="idp57801984"></a> 
## Description

## <a name="idp57802720"></a> Defining your own hook points

If you're considering building extensions in a modular fashion, where one module can optionally take advantage of features provided by another, possibly third-party module, then you may wish to use the hooking infrastructure in Momentum.

Hooks are prototyped in a header file which defines a set of inline type-safe functions that allow hook implementers or hook consumers to tell if a given hook point has an implementation registered, make a call to that hook, or register an implementation of that hook for others to consume.

Hook binding and resolution is performed at runtime so that there are no hard compile-time or circular dependencies between modules; all that is needed for a module to consume or implement a hook is access to the C header file that defines the hook.

## <a name="idp57805344"></a> Defining a Hook with no Return Type

The following code uses the core hook log_permanent_failure_v1 as an example:

<a name="apis.ec_declare_hook.example"></a> 
```
EC_DECLARE_VOID_HOOK(
      core, log_permanent_failure_v1,
      (void *, ec_message *, domain_record *, struct timeval *, const char *, int),
      (ec_message *m, domain_record *r, struct timeval *now, const char *note, int note_len),
      (EC_HOOK_CLOSURE, m, r, now, note, note_len)
)
```

A hook is made up of a number of elements:

*   Scope

    This is the scope that defines the hook. Most hooks are 'core' hooks but there are a significant number of 'config' hooks and a smaller number of module-specific hooks such as 'cluster'.

    Furthermore, modules may define their own hooks. When a module defines its own hook, it must use a unique and descriptive scope to ensure there is no conflict. The [*Hooks in the msgc Scope*](/momentum/3/3-api/hooks-msgc) are examples of this type of hook.

*   Name

    The name of the hook, which should be descriptive for consumers. For example, `log_permanent_failure_v1` is one of the Momentum hooks, which is called whenever a permanent failure event is logged.

*   Return value

    Irrelevant for the void return hooks but for non-void return hooks it defines the value returned. Note that the semantics of this are entirely hook dependent and especially related to things like memory ownership. If pointers are returned but not defined it's best to ask for guidance from Message Systems regarding such matters.

*   Function parameters

    Due to how the hooking macros are constructed in Momentum, this actually requires three definitions.

    *   First – The prototype of the registered function with a closure argument, that is passed in to the registration routine. This is also referred to as a *provider* to a hook because it provides an implementation of the hook.

    *   Second – The prototype of the function that is called to initiate a hook invocation. The caller of this function is also referred to as a *consumer* of the hook, because it consumes the result of a hook invocation. It is important to note that this is defined with both variable types and variable names.

    *   Third – The invocation of the hook's providers. This always includes a special first argument called `EC_HOOK_CLOSURE` and then the variable names (in order) defined in the caller function shown in the [log_permanent_failure_v1 example](/momentum/3/3-api/apis-ec-declare-hook#apis.ec_declare_hook.example). `EC_HOOK_CLOSURE` just refers to the closure argument that was passed when the provider was registered. It's a symbolic name used by the programmer within the macro in order to obscure the 'real' name.

*   Return value handling

    This parameter does not exist for void return hooks. For non-void return hooks, this is a snippet of code to evaluate when each provider returns. For example:

    ```
    EC_DECLARE_HOOK(core,int,__mail_queue_maintain,
        (void *, domain_record *, int, Skiplist *, struct timeval *, int, int),
        (domain_record *dr, int binding_slot, Skiplist *sl, struct timeval *now, int goalsz, int reserve),
        (EC_HOOK_CLOSURE, dr, binding_slot, sl, now, goalsz, reserve),
        if (EC_HOOK_RETVAL != 0) EC_HOOK_RETURN(EC_HOOK_RETVAL))
    ```

    The statement `if (EC_HOOK_RETVAL) return EC_HOOK_RETVAL;` defines a code fragment that will be triggered after calling each hook implementation in a chain. `EC_HOOK_RETVAL` is a magic symbol that references a variable with the same type as the return type for the hook; it holds the return value from the last hook implementation to be called.

    The purpose of this code fragment is to decide if further hooks in the chain should be called, or whether to simply return the current status back to the caller. This allows you some flexibility in defining hook behavior.

    In this example, the first hook implementation to return a non-zero value will cause subsequent hooks to be skipped for this invocation.

Hook declarations using these macros cause the following functions to be defined in the header file:

```
typedef void ec_hook_modulename_hookname_func_t(void *, my_param *);
static INLINE int has_modulename_hookname_hook(void);
static INLINE void register_modulename_hookname_hook_first(
                    ec_hook_modulename_hookname_func_t hook,
                    void *closure);
static INLINE void register_modulename_hookname_hook_last(
                    ec_hook_modulename_hookname_func_t hook,
                    void *closure);
static INLINE void call_modulename_hookname_hook(my_param *param1);
```

## <a name="idp57830944"></a> Triggering the Hook Point

In your code, simply write something such as the following:

```
my_param foo;
call_modulename_hookname_hook(&foo);
```

This will cause each hook implementation to be called and passed `foo` as the second parameter.

## <a name="idp57833632"></a> Registering a Hook Implementation

If you are writing your custom singleton module and want to implement the hook point, you'd write something like this:

```
#include "ec_config.h"
#include "configuration.h"
#include "module-hooks.h"
#include "module.h"

/* This header should contain the EC_DECLARE_VOID_HOOK definition for the hook */
#include "path/to/modulename.h"

static void my_implementation(void *closure, my_param *param)
{
  /* This is called when anyone issues a:
   *   call_modulename_hookname_hook(param);
   */

  /* Perform our actions */
}

void my_post_conf(void *closure)
{
  /* This is called after all modules have been loaded, configured and
     initialized */
  /* Do post configuration stuff */
  register_modulename_hookname_hook_first(my_implementation, self);
}

static int my_module_init(generic_module_infrastructure *self)
{
  /* This will be invoked immediately after the module is loaded
     and configured */
  register_core_post_conf_hook_last(my_post_conf, self);
  return 0;
}
```

### Note

Hooks must be registered either in the `conf_setup` module callback for singleton modules or in `ext_init` for non-singleton modules.

The most common use case when registering hook points is the registration of core hook points rather than user-defined custom hook points. Like custom hook points, core hook registration must also take place in `conf_setup` or `ext_init`.

<a name="idp57839872"></a> 
## See Also

[Hooking API](/momentum/3/3-api/arch-primary-apis#arch.hooking), [module_add_hook_last](/momentum/3/3-api/apis-module-add-hook-last), [“Hooks”](/momentum/3/3-api/3-api-hooks) and [module_add_hook_first](/momentum/3/3-api/apis-module-add-hook-first)