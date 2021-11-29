---
lastUpdated: "07/14/2021"
title: "Primary Momentum APIs"
description: "Momentum's module API is at the core of how it is extended Without the module API no extension to Momentum is possible Modules within Momentum are defined in terms of a module infrastructure which the configuration system learns of through a series of files called ecm files The module infrastructure..."
---

### <a name="arch.module"></a> Module API

Momentum's *module* API is at the core of how it is extended. Without the module API, no extension to Momentum is possible. Modules within Momentum are defined in terms of a module infrastructure, which the configuration system learns of through a series of files called ‘`.ecm`’ files. The module infrastructure consists of a series of callbacks which are the entry points into the module from Momentum itself.

**<a name="arch.ecm"></a> 1.3.1.1. The `.ecm` File**

The `.ecm` file is where Momentum first learns about a module. Momentum scans all `.ecm` files in the libexec path (by default `/opt/msys/ecelerity/libexec`). Every `.so` file created must have an `.ecm` file which contains entries for each of its module infrastructures. (See [“The Module Infrastructure”](/momentum/3/3-api/arch-primary-apis#arch.module.infrastructure) for more on this topic.)

In the *`module_name`*.ecm file the definition of *`module_name`* for *`module_name`*.so is:

[*`module_name`*]

Note that there is no requirement that a module's `.so` name and its module infrastructure name be the same. However, for the sake of clarity they should not differ unless there is a very good reason.

Module dependencies may also be defined in the `.ecm` file. If, for example, *`module_name`* requires that *`dep_module`* be loaded first (because of library or other dependencies), then the following entry should appear in *`module_name`*.ecm:

[*`module_name`*]

msys.requires = dep_module

Configuration options may also be listed here, but for configuration options within the module scope, that is, configuration options that are only significant within the module's definition itself, there is really no point in defining them in the `.ecm` file, since in order for those options to be listed in the configuration file, the module will need to be loaded first. For example:

*`module_name`* {
  my_module_key = my_value
}

There is no point in listing the `my_module_key` option in the *`module_name`*.ecm file, because the *`module_name`* stanza must be listed for it to be significant anyway.

It is different for options that are available or significant globally or in any combination of binding, domain or binding_group scopes. They may be defined as follows:

[*`module_name`*]

msys.provides = config.Global:MyKey
msys.provides = config.Global:Binding.MyKey
msys.provides = config.Global:Domain.MyKey
msys.provides = config.Global:Binding:Domain.MyKey

This means that you could define `MyKey = foo` in a configuration file, without *`module_name`* already loaded, and the configuration system would implicitly load *`module_name`* with an empty configuration. If you are going to depend on such implicit module loading, it is imperative that the module in question be constructed such that it has a meaningful default configuration when loaded with an empty module stanza. You must do this because, by definition, if you are using implicit module loading, there is no existing module stanza for the module in question. However, if you end up loading *`module_name`* explicitly, then its registration of the configuration options makes the `msys.provides` lines unnecessary.

Note that when building modules with the ecxs utility that ships with Momentum, there is a set of macros defined in `module.h` that will cause `.ecm` capabilities to be automatically added to the file (with the `:auto` tag after `msys.provides`). The macros are:

```
#define ECCFG_MODULE_OPT_DEF(modulename, optionname,
          optiontype, personality, fallback, isarray, closure,
          defaultvalue, optionmap, validate, postset, datafree)
#define ECCFG_MODULE_OPT_REGISTER(modulename, optionname)
```

### Note

The `ecxs` utility is found in the `/opt/msys/ecelerity/bin` directory. This utility is only available if you chose to install 'Ecelerity developer tools' during installation.

The `ECCFG_MODULE_OPT_DEF` macro is used instead of defining the array of `ec_config_option_def` structures manually, and the `ECCFG_MODULE_OPT_REGISTER` macro is used instead of the `ec_config_register_option` call that happens in the `conf_setup` callback.

**<a name="arch.module.infrastructure"></a> 1.3.1.2. The Module Infrastructure**

The module infrastructure is Momentum's entry point into an external module. The module infrastructure is only intended to be defined globally in this manner. As such, it is read-only thread-safe. The structure is called the generic module infrastructure, and it is usually defined at the bottom of a module source file as follows:

EC_MODULE_EXPORT
generic_module_infrastructure *`module_name`* = {{
  EC_MODULE_INIT(EC_MODULE_TYPE_GENERIC, 0),
  "*`module_name`*.c",
  "Test module",
  *`module_name`*_control, /*
  module_control, function for control commands */
  NULL, /* module_conf, Deprecated, must be NULL */
  NULL, /* module_ext_conf, Deprecated, must be NULL */
  NULL, /* module_init, Deprecated, must be NULL */
  NULL, /* module_post_init, Deprecated, must be NULL */
  *`module_name`*_conf_setup, /*
  module_config_setup, Must be defined */
  NULL, /* module_enable, Deprecated, must be NULL */
  NULL, /* module_can_unload, Deprecated, must be NULL */
  *`module_name`*_ext_init, /*
  module_ext_init, Must be defined */
}};

The source filename and brief description are self-explanatory. The functions are defined as follows:

*   `module_name_control`

    Called whenever there is a control command issued through ec_console for this module. Any command that starts with '`module_name`' as the first argument will have all remaining arguments sent to this function. This allows a module to expose arbitrary control functionality, and write its results back to the response string provided. It is generally defined as follows:

    ```
    static void module_name_control(generic_module_infrastructure
                                    *self, string *response,
                                    const char *command, int xml)

    {
      struct module_name_config *conf = self->module_private_data;

      if (!strcasecmp(command, "status")) {  
        stringprintf(response, "My status is %d", conf->status);
      }
    }
    ```

*   `module_name_conf_setup`

    Called the first time the module is loaded but only once for singleton modules, which, as discussed earlier, is the only type of module that should generally be built. In this function, you must register configuration options that this module will expose. (For more about the configuration system see [“Configuration API”](/momentum/3/3-api/arch-primary-apis#arch.configuration).) Return `0` on success, `-1` on any sort of failure.

*   Note that `generic_module_infrastructure.module_private_data` is used to cache module-wide configuration data for use throughout the life of the module. This is a useful location to cache data such as configuration parameters or other information that the module needs to operate. Also note that this data is accessed from multiple threads simultaneously. Depending upon how the module is coded, configuration changes can cause data to change so proper safety must be employed.

```
struct module_name_config {
  int my_int;
  char *my_string;
  int status;
};

enum { OPT_MY_STRING, OPT_MY_INT, OPT_MAX /* must always be last */
};

static ec_config_option_def options[] = {
/*{"option name", OPTION_TYPE, personality, fallback, is_array,
 * closure, default_value, option_map, validate, postset, datafree}, */
  { "my_string", ECCFGTYPE_STRING, NULL, "[module_name]", 0,
    NULL, "default", NULL, NULL, NULL, NULL },
  { "my_int", ECCFGTYPE_INT, NULL, "[module_name]", 0,
    NULL, "1", NULL, NULL, NULL, NULL },
};

static int option_handle[ OPT_MAX ];

static int module_name_conf_setup(generic_module_infrastructure *self,
                                     int ignoreme)
{
  int i;
  /* Note: This should only be defined here for singleton modules,
   * for non-singleton modules this should be created in ext_init */
  struct module_name_config *conf = self->module_private_data = calloc(1, sizeof(*conf));

  for ( i = 0; i < OPT_MAX; i++ ) {
    if ((option_handle[i] = ec_config_register_option( &options[i] )) == -1) {
      ec_mod_debug(self, DCRITICAL, "module_name: failed to register %s option\n",
        options[i].name);
      return -1;
    }
  }

  /* Do anything else you need to do here only once, perhaps
   * register some hooks (for singleton modules) */

  return 0;
}
```

*   `module_name_ext_init`

    Called multiple times with different flags. Generally this is where you query configuration parameters for the module and cache them—which is far more efficient than doing it from the configuration system. The specifics of these functions are discussed in [“Configuration API”](/momentum/3/3-api/arch-primary-apis#arch.configuration) but the general logic used is as follows:

    ```
    static int module_name_ext_init(generic_module_infrastructure *gself,
                                    ec_config_header *transaction,
                                    string *output, int flags)
    {
      struct module_name_config *conf = gself->module_private_data;

      /* Note: for non-singleton modules, the configuration module
       * private data should be defined here, instead of in conf_setup 
       */
      switch (EC_MODULE_INIT_MODE(flags)) {
      case EC_MODULE_INIT_INIT:
        if (flags & EC_MODULE_INIT_PRIVILEGED) {
          /* post_init will be called later */
          break;
        }
        /* Fall through here, do not break */
      case EC_MODULE_INIT_POSTINIT:
        {
          ec_config_value *val;
          ec_config_header *container;
          ec_ptr_array results;
          int i;

          val = ec_config_option_fetch_module_at_init(transaction, option_handle[OPT_MY_INT], gself);
          conf->my_int = val->v->vint;
          ec_config_release_value(val);

          val = ec_config_option_fetch_module_at_init(transaction, option_handle[OPT_MY_STRING], gself);
          /* Note that this is not thread-safe if the config structure
           * will be accessed in another thread.  Locking (preferably
           * user-space read/write locking) needs to be done to protect
           * this access in that case.  Or perhaps just access the
           * configuration system directly as it has built-in locking.
           * Note that for non-singleton modules this problem does not
           * exist as the module infrastructure will be created from
           * scratch every time the system is loaded. */
          if (conf->my_string) {
            free(conf->my_string);
          }
          conf->my_string = strdup(val->v->vstr);
          ec_config_release_value(val);

          /* for non-singleton modules registering hooks would be
           * appropriate here */
        }
        break;
      case EC_MODULE_INIT_DESTROY:
        {
          /* Called only for non-singleton modules, called when the
           * module instance is un-loaded and destroyed.*/
          if (conf) {
            if (conf->my_string) {
              free(conf->my_string);
            }
            free(conf);
          }
          self->module_private_data = NULL;
        }
        break;
      }
      return 0;
    }
    ```

Aside from the `module_private_data` member, a module may not directly modify its infrastructure data structure at all. This structure is maintained by the module system itself.

### <a name="arch.hooking"></a> Hooking API

A module must do something other than configure and load itself. This is where the Momentum hooking API comes into play. Momentum exposes thousands of hooks, which are passive registration functions. A module is intended to register its callback for a hook in either the `conf_setup` (for singleton modules) or `ext_init` (for non-singleton modules) routines.

**<a name="arch.using.hooks"></a> 1.3.2.1. Defining and Using Hooks**

Momentum exposes two basic types of hooks, void return and non-void return hooks. As you might expect, void return hooks return nothing and non-void return hooks return something. The hook header and documentation define what exactly is returned, and what the function prototype looks like.

Hooks have a number of functions. These are shown below using the log_permanent_failure_v1 hook point as an example.

*   `register`

    *   `register_core_log_permanent_failure_v1_hook_first` and `register_core_log_permanent_failure_v1_hook_last`

        These functions take two arguments; (following the prototype defined below at [EC_DECLARE_VOID_HOOK](/momentum/3/3-api/arch-primary-apis#arch.using.hooks.example)) the actual callback provider function to register and a closure, which is just a pointer value.

        When the hook is invoked, the provider function is called, and the closure is passed as the first argument to the function.

        The first or last definition is fairly self-explanatory, but it's entirely dependent on the order in which the register calls are invoked which, if there are multiple providers being registered for a hook, is generally the order in which the module is listed in the `ecelerity.conf` file.

*   `has`

    *   `has_core_log_permanent_failure_v1_hook`

        Takes no arguments.

        Returns `0` if no providers are registered, non-zero if one or more providers are registered.

*   `call`

    *   `call_core_log_permanent_failure_v1_hook`

        Note that unless specifically stated in the hook documentation, module code should **never** issue the 'call' routine on a core hook. This can have very unexpected results.

        Issuing the 'call' routine on a module-defined hook is fine, as long as it is being called by the module defining it or by a related module.

        Hooks can be used to allow multiple custom modules to communicate with one another without providing direct code-level linkage between them.

For 'included' Momentum hooks, every hook is defined in its own include file. For example, the `core_log_permanent_failure_v1` hook is in `/opt/msys/ecelerity/include/hooks/core/log_permanent_failure_v1.h`. Any provider for a hook needs to include its header file. The macro looks like this:

<a name="arch.using.hooks.example"></a> 
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

    Furthermore, modules may define their own hooks. When a module defines its own hook, it must use a unique and descriptive scope to ensure there is no conflict.

*   Return value (applicable only to non-void hooks)

    Irrelevant for the void return hooks (and not shown in [void hook example](/momentum/3/3-api/arch-primary-apis#arch.using.hooks.example)) but for non-void return hooks it defines the value returned. Note that the semantics of this are entirely hook dependent and especially related to things like memory ownership. If pointers are returned but not defined it's best to ask for guidance from Message Systems regarding such matters.

*   Name

    The name of the hook, which should be descriptive for consumers. For example, `log_permanent_failure_v1` is one of the Momentum hooks, which is called whenever a permanent failure event is logged.

*   Function parameters

    Due to how the hooking macros are constructed in Momentum, this actually requires three definitions.

    *   First – The prototype of the registered function with a closure argument, that is passed in to the registration routine. This is also referred to as a *provider* to a hook because it provides an implementation of the hook.

    *   Second – The prototype of the function that is called to initiate a hook invocation. The caller of this function is also referred to as a *consumer* of the hook, because it consumes the result of a hook invocation. It is important to note that this is defined with both variable types and variable names.

    *   Third – The invocation of the hook's providers. This always includes a special first argument called `EC_HOOK_CLOSURE` and then the variable names (in order) defined in the caller function shown in the [log_permanent_failure_v1 example](/momentum/3/3-api/arch-primary-apis#arch.using.hooks.example). `EC_HOOK_CLOSURE` just refers to the closure argument that was passed when the provider was registered. It's a symbolic name used by the programmer within the macro in order to obscure the 'real' name.

    When writing hook implementations, the first argument in many hooks is `void *closure`. The closure is passed into hooks written in C, but for hooks written in lua, the closure argument is not passed, and instead arguments start with the second argument.

*   Return value handling

    This parameter does not exist for void return hooks. For non-void return hooks, this is a snippet of code to evaluate when each provider returns. For example:

    ```
    EC_DECLARE_HOOK(core,int,__mail_queue_maintain,
        (void *, domain_record *, int, Skiplist *, struct timeval *, int, int),
        (domain_record *dr, int binding_slot, Skiplist *sl, struct timeval *now, int goalsz, int reserve),
        (EC_HOOK_CLOSURE, dr, binding_slot, sl, now, goalsz, reserve),
        if (EC_HOOK_RETVAL != 0) EC_HOOK_RETURN(EC_HOOK_RETVAL))
    ```

After each hook provider is called, the return value handling code is evaluated. The `EC_HOOK_RETVAL` refers to the return value that the hook provider returned. So, in this case, if a hook provider to the `core___mail_queue_maintain` hook returns non-zero, then no further hook providers are called, and the value that the hook provider returned (represented by the `EC_HOOK_RETVAL` symbol) is returned to the caller of the hook which in this case is the Momentum queue maintainer. Otherwise, the next provider, if any, is evaluated and the sequence continues until all hook providers have been evaluated or one of them returns non-zero. If they all return `0`, then ultimately `0` is returned to the caller.

Note that for non-void return hooks, the return value is undefined if there are no hook providers registered. Therefore, whenever calling a non-void hook, it is a good idea to call the 'has' hook routine first to see if any providers are registered, before actually calling the hook itself.

If a module wishes to register its own hook, using the `EC_DECLARE_VOID_HOOK` macro or the `EC_DECLARE_HOOK` macro is recommended. Be sure to choose a descriptive scope and name. To ensure a custom hook is 'plumbed' in the system, a module needs to ensure it is always registered on startup, or in the case of the module 'consuming' the hook, it should just call the 'has' routine for the hook which will ensure it is included in the system.

Hooks may only be registered in the master scheduler thread and only during the `conf_setup` or `ext_init` phase. For singleton modules, hooks need to be registered in the conf_setup phase. For non-singleton modules, hooks should be registered in the ext_init phase with the `EC_MODULE_INIT_PRIVILEGED` flag not set. Furthermore, the closure defined for hooks registered by a module should always be the module infrastructure provided to the conf_setup or ext_init routine. The reason is that for non-singleton modules, the module infrastructure pointer changes with each configuration generation, as do the registered hooks. Hooks registered by a non-singleton module in the ext_init phase are scoped to the configuration generation along with the module infrastructure itself. Therefore, using a closure that is not also directly scoped to the configuration generation can cause memory corruption. Hooks registered in singleton modules are simpler. The module infrastructure for a singleton module is always the same for the life of the ecelerity process, and therefore registering the hooks in the conf_setup phase with that module infrastructure as the closure for the hook is completely safe.

**<a name="arch.scriptlets"></a> 1.3.2.2. Hooks and Scriptlets**
### Note

At present it is not possible to call hooks from Lua, nor is it possible to define new hooks from Lua.

The Momentum scriptlet system—which is the Momentum integration with Lua—has a native integration with the Momentum hooking system. This means that a Lua module may register any hook in the system, whether it is a 'core' hook or one defined by an external module. Lua hook providers must register functions in a Lua table named with the scope and hook name. So for the core `ec_message_enqueue` hook, the function name is `core_ec_message_enqueue`. An example is as follows:

```
require("msys.core");

local mod = {};

function mod:core_ec_message_enqueue(msg, now)
  return 0;
end

msys.registerModule("enqueue_test", mod);
```

Clearly this module doesn't do anything but it does show how a hook point is used from Lua.

### <a name="arch.event"></a> The Event API

Fortunately, Momentum provides an API on top of the event layer. This layer is the scheduler API and it abstracts the actual underlying multiplexor being used from the application. In other words, a programmer never needs to work with `epoll_create`, `epoll_ctl` or `epoll_wait` directly. The event loop is already operating, and the programmer can just use the following API calls to handle events:

*   [build_fd_event](/momentum/3/3-api/apis-build-fd-event) and `build_event_from_now`– Create an event, either an FD event relating to an open FD or a timed event to happen in the future.

*   [schedule_event](/momentum/3/3-api/apis-schedule-event) – Schedule the event to be called. Note this must be called in the master scheduler thread.

*   [clear_timed_event](/momentum/3/3-api/apis-clear-timed-event) – Remove a timed event from the system. This must be called in the master scheduler thread.

*   [clear_event_by_fd](/momentum/3/3-api/apis-clear-event-by-fd) – Remove an FD event from the system. This must be called in the master scheduler thread.

*   [event_free](/momentum/3/3-api/apis-event-free) – Free an event. Note that generally Momentum frees an event if it is in the event loop at the appropriate time, so only do this if you really know you need to.

Events referencing file descriptors can also use the following operations:

*   `event_read` – Read from an event. This has similar semantics to the POSIX read(2) routine, except it also takes an integer pointer to see what mask is desired if `EAGAIN` is returned. This is significant if a special operator set, such as SSL, is assigned to the event.

*   `event_write` – Write to an event, similar to event_read.

*   `event_close` – Close an event.

When creating an event, there are three key pieces of information that must be provided:

*   Trigger – This is either a file descriptor and a set of events (such as read, write exception) or a time of execution. In the time of execution case there are two APIs, one for 'seconds from now', and another for absolute time.

*   Callback – This is the function the event will call when it fires. It takes four arguments:

    *   `Event *` – pointer to the event that fired

    *   `int type` – bitmap of events triggered

    *   `void *` – your closure, which is the contextual data related to the event. (SMTP state information associated with a connection, as an example.)

    *   `struct timeval *` – a pointer to a struct timeval relating to 'now', a handy way to get the current timestamp without calling `gettimeofday` yourself

*   Return value – The event callback returns an int. The significance is as follows:

    *   If non-zero is returned, the event is rescheduled with a mask equating to the return value. For example, if you want to wait on read and exception events, you would return `E_READ|E_EXCEPTION`.

    *   If zero is returned, the event is considered done, and it is freed. For timed events, zero is effectively the only valid return value. This means that for a repeating timed event, the timed event should reschedule a new event (by recreating an event instead of reusing the event that was just called). When an event handler returns zero, the scheduler frees the event. As described above, this is almost always the way an event is freed in the system—not by calling `event_free` directly.

*   Closure – As previously described, this is the contextual data needed for the event callback to perform its task.

    Because you can only pass in a single pointer, if more than one data element is required, it must be in a struct. Also note that this closure data almost always needs to be allocated from the heap and appropriately managed by the event callback or by its related or supporting functions.

Events are always handled and their callbacks invoked in the master scheduler thread. It is imperative that blocking work never be performed in an event callback or in any subsequent functions called from a callback function. Any and all blocking work needs to be pushed to a thread pool or just done in a non-blocking manner through the event system.

Events created with the event API may only be manipulated in the master scheduler thread and for this reason are considered single-thread safe. They are sometimes passed between threads but that is only for asynchronous jobs that are to be rescheduled.

**<a name="idp28405872"></a> 1.3.3.1. Event Examples****<a name="idp28406608"></a> Creating a File-descriptor Based Event**

If you have an open socket and you want to use the event system to alert you when it becomes readable, use code such as the following:

```
#include "ec_config.h"
#include "event.h"
#include "scheduler.h"

static int its_readable(Event *event, int eventtype, void *closure,
  struct timeval *now)
{
  char buf[8192];
  int len;
  int needmask;

  len = event_read(event->fd, buf, sizeof(buf), &needmask);
  if (len > 0) {
    log1_printf(DDEBUG, "I read %d bytes: %.*s\n", len, len, buf);
    return needmask;
  }
  log1_printf(DERROR,
    "My socket had a problem %d: %s\n",
    errno, strerror(errno));
  event_close(event); /* close the event descriptor */
  return 0; /* the scheduler will de-schedule and free the event structure */
}

...
  Event *e;
  int fd = socket(...);
  int non_blocking = 1;

  ioctl(fd, FIONBIO, &non_blocking);
  e = build_fd_event(fd, E_READ, 0, its_readable, NULL);
  schedule_event(e);
...
```

The event callback function receives the event pointer and the *`eventtype`* mask, identifying the event (and thus the descriptor) and the type of event that is signalled. We define `E_READ` to indicate that reading the descriptor will not block, `E_WRITE` to indicate that writing will not block and `E_EXCEPTION` to indicate certain error conditions. There are other possible mask values, but they are for internal use. *`eventtype`* will be set to one or more of these values bitwise OR'd together.

The *`closure`* that is passed to the event callback corresponds to the closure that we associated with the event by the `build_fd_event` call.

The *`now`* references a timeval that holds the time that was sampled at the start of the current scheduler iteration, which should be accurate enough for most purposes, but if you need sub-second accuracy, you should use gettimeofday() to fetch your own idea of the current time.

**<a name="idp28414976"></a> Event Callback Return Values**

The return value of the callback is used as the new event mask for the event. In the code sample above, the callback returns `E_READ` each time, indicating that we're only interested in reading from the descriptor as data becomes available. Most network protocols involve an element of dialogue rather than monologue, so you might return `E_READ` until you've read a complete packet, then `E_WRITE` while you are waiting for your response to be dispatched over the network.

Returning `0` from an event callback causes the scheduler to free the event structure via `event_free`. Note that freeing the event structure does not close the descriptor; you must explicitly do so yourself before returning from the callback. Also note that you must not directly call `event_free` on the event currently being dispatched, because the scheduler is working with the event and you'll cause a crash if you free it out from under the scheduler.

The code samples here use `event_read` and `event_write` to encapsulate the handling of special events (such as SSL). The functions populate a *`needmask`* that will be set to the appropriate return value required to satisfy a pending read or write operation. SSL enabled events may need to write data in order to satisfy a read, so it's not simply a matter of returning `E_READ` and `E_READ` only when you are reading data.

The code sample below flip-flops between writing to and then reading from a socket, until it encounters an error, and then it closes the socket and frees the event. Notice how we jump to the read code and attempt to read immediately after we have finished a write; this is necessary because some platforms will only signal the scheduler when the descriptor is first signalled, and won't trigger it again until the next packet comes in from the network. If a prior read used up only a portion of a kernel level buffer, there's no guarantee that returning `E_READ` would wake up the event immediately. This behavior manifests as sluggish event handling, so if you observe apparent slowness in your code, it's quite possible that this is the cause.

```
#include "ec_config.h"
#include "event.h"
#include "scheduler.h"

static int my_callback(Event *event, int eventtype, void *closure,
  struct timeval *now)
{
  char buf[8192];
  int len;
  int needmask = 0;

  if (eventtype & E_WRITE) {
trywrite:
    len = event_write(event, "hello\r\n", sizeof("hello\r\n")-1, &needmask);
    if (len == -1 && errno == EAGAIN) {
      return needmask;
    }
    if (len) {
      goto tryread;
    }
    log1_printf(DERROR,
      "My socket had a problem during write %d: %s\n",
      errno, strerror(errno));
    event_close(event); /* close the event descriptor */
    return 0; /* the scheduler will de-schedule and free the event structure */
  }
  if (eventtype & E_READ) {
tryread:
    len = event_read(event, buf, sizeof(buf), &needmask);
    if (len == -1 && errno == EAGAIN) {
      return needmask;
    }
    if (len > 0) {
      log1_printf(DDEBUG, "I read %d bytes: %.*s\n", len, len, buf);
      goto trywrite;
    }
    log1_printf(DERROR,
      "My socket had a problem during read %d: %s\n",
      errno, strerror(errno));
    event_close(event); /* close the event descriptor */
    return 0; /* the scheduler will de-schedule and free the event structure */
  }
  log1_printf(DERROR, "This state shouldn't trigger\n");
  event_close(event); /* close the event descriptor */
  return 0; /* the scheduler will de-schedule and free the event structure */
}

...
  Event *e;
  int fd = socket(...);
  int non_blocking = 1;

  ioctl(fd, FIONBIO, &non_blocking);
  e = build_fd_event(fd, E_WRITE, 0, my_callback, NULL);
  schedule_event(e);
...
```
**<a name="idp28427088"></a> Handling Partial Writes**

A number of factors can cause a write to succeed after only partially satisfying your request. This can lead to some complicated logic to ensure that your entire write completes, so we provide some helper functions to make it simpler. The sample above could be implemented using those helpers, as shown below.

```
#include "ec_config.h"
#include "event.h"
#include "scheduler.h"

struct my_state {
  event_io_state st;
};

static int my_callback(Event *event, int eventtype, void *closure,
  struct timeval *now)
{
  char buf[8192];
  int len;
  int needmask = 0;
  struct my_state *self = (struct my_state*)closure;

  if (eventtype & E_WRITE) {
trywrite:
    if (self->st.needmask) {
      ret = event_io_retry(event, &self->st);
    } else {
      ret = event_io_write(event, "hello\r\n",
              sizeof("hello\r\n")-1, &self->st);
    }
    switch (ret) {
      case EVENT_IO_PENDING:
        return self->st.needmask;
      case EVENT_IO_DONE:
        goto tryread;
    }
    log1_printf(DERROR,
      "My socket had a problem during write %d: %s\n",
      errno, strerror(errno));
    goto close_out;
  }
  if (eventtype & E_READ) {
tryread:
    len = event_read(event, buf, sizeof(buf), &needmask);
    if (len == -1 && errno == EAGAIN) {
      return needmask;
    }
    if (len > 0) {
      log1_printf(DDEBUG, "I read %d bytes: %.*s\n", len, len, buf);
      goto trywrite;
    }
    log1_printf(DERROR,
      "My socket had a problem during read %d: %s\n",
      errno, strerror(errno));
    goto close_out;
  }
  log1_printf(DERROR, "This state shouldn't trigger\n");
close_out:
  event_io_state_clean(&self->st);
  free(self);
  event_close(event); /* close the event descriptor */
  return 0; /* the scheduler will de-schedule and free the event structure */
}

...
  Event *e;
  int fd = socket(...);
  int non_blocking = 1;
  struct my_state *state;

  ioctl(fd, FIONBIO, &non_blocking);
  state = calloc(1, sizeof(*state));
  e = build_fd_event(fd, E_WRITE, 0, my_callback, state);
  schedule_event(e);
...
```
**<a name="idp28430768"></a> Reading a "Record" From a Stream**

The example above doesn't care what form the data is receives arrives in. A real-world protocol will tend to use either a fixed (or pre-arranged) packet length, or be line based. The sample below demonstrates reading a line delimited by canonical line endings. The tryread construct encapsulates a read buffer; you should keep it alive until you close your socket. You should not free it between read calls on a given socket, as you will be discarding buffered data.

```
#include "ec_config.h"
#include "event.h"
#include "scheduler.h"
#include "ec_growbuf.h"

struct my_state {
  minimal_tryread_construct mtc; 
};

static int my_callback(Event *event, int eventtype, void *closure,
  struct timeval *now)
{
  int len;
  int needmask = 0;
  struct my_state *self = (struct my_state*)closure;

  len = tryread_until(event, &needmask, &self->mtc, "\r\n");
  if (len == -1 && errno == EAGAIN) {
    return needmask;
  }
  if (len > 0) {
    char *line =  self->mtc.gb_donebuffer;
    len = self->mtc.gb_donesize;
    log1_printf(DDEBUG, "I got my line, its length is %d. %s",
      len, line);
    ec_free(MEMTYPE_MESSAGE_BODY, line);
    goto close_out;
  }
  log1_printf(DERROR,
    "My socket had a problem during read %d: %s\n",
    errno, strerror(errno));
close_out:
  minimal_tryread_construct_free(&self->mtc);
  free(self);
  event_close(event); /* close the event descriptor */
  return 0; /* the scheduler will de-schedule and free the event structure */
}

...
  Event *e;
  int fd = socket(...);
  int non_blocking = 1;
  struct my_state *state;

  ioctl(fd, FIONBIO, &non_blocking);
  state = calloc(1, sizeof(*state));
  e = build_fd_event(fd, E_READ, 0, my_callback, state);
  schedule_event(e);
...
```

This example reads 8192 from a socket and into a buffer. It will either read 8192 bytes precisely, or indicate an error.

```
#include "ec_config.h"
#include "event.h"
#include "scheduler.h"

struct my_state {
  event_io_state st;
};

static int my_callback(Event *event, int eventtype, void *closure,
  struct timeval *now)
{
  char buf[8192];
  struct my_state *self = (struct my_state*)closure;

  switch (event_io_read(event, buf, sizeof(buf), &self->st)) {
    case EVENT_IO_PENDING:
      return self->st.needmask;
    case EVENT_IO_DONE:
      log1_printf(DDEBUG, "I read exactly %d bytes into buf\n", sizeof(buf));
      goto close_out;
  }
  log1_printf(DERROR,
    "My socket had a problem during read %d: %s\n",
    errno, strerror(errno));
close_out:
  event_io_state_clean(&self->st);
  free(self);
  event_close(event); /* close the event descriptor */
  return 0; /* the scheduler will de-schedule and free the event structure */
}

...
  Event *e;
  int fd = socket(...);
  int non_blocking = 1;
  struct my_state *state;

  ioctl(fd, FIONBIO, &non_blocking);
  state = calloc(1, sizeof(*state));
  e = build_fd_event(fd, E_READ, 0, my_callback, state);
  schedule_event(e);
...
```
**<a name="idp28436528"></a> Suspending and Resuming a Connection**

Often, we need to put a connection on hold while we perform some other asynchronous action, such as resolving DNS or performing work in a thread pool. The essence of suspending a connection is described below, but you should be aware that some frameworks in Momentum have alternative APIs and requirements, so be sure to use the method appropriate for the environment in which your code will operate.

Suspending a connection involves duplicating the current event, saving the duplicate for later, and then informing the scheduler that it should free the current event.

Resuming a connection is then simply a matter of scheduling your duplicated event using `schedule_event_and_dispatch`, which is safe to call from any thread. If you are using the thread pool APIs, you can use `ec_async_wake_event` to handle this for you.

The code sample below reads an URL from a socket, suspends the session while it retrieves the content from that URL, resumes the session and then sends the contents back over the channel to the peer:

```
#include "ec_config.h"
#include "event.h"
#include "scheduler.h"
#include "io_wrapper.h"
#include "ec_growbuf.h"

struct my_state {
  minimal_tryread_construct mtc; 
  io_job *job;
  Event *session;
  enum {
    WAITING_FOR_LINE,
    WAITING_FOR_URL,
    WRITING_DATA
  } state;
  event_io_state st;
  string buf;
};

static int my_callback(Event *event, int eventtype, void *closure,
  struct timeval *now)
{
  int len;
  int needmask = 0;
  struct my_state *self = (struct my_state*)closure;

state_change:
  switch (self->state) {
    case WAITING_FOR_LINE:
      len = tryread_until(event, &needmask, &self->mtc, "\r\n");
      if (len == -1 && errno == EAGAIN) {
        return needmask;
      }
      if (len <= 0) {
        log1_printf(DERROR, "My socket had a problem during read %d: %s\n",
          errno, strerror(errno));
        goto close_out;
      }
      /* duplicate the current session */
      self->session = ec_malloc(MEMTYPE_EVENT);
      memcpy(self->session, event, sizeof(*event));
      event_post_dup(self->session, event);
      /* remove the event from the kernel level scheduler */
      clear_event_by_fd(event->fd);
      /* create a job to read in the url */
      self->job = io_wrapper_create_read_job(self->mtc.gb_donebuffer);
      self->job->buffer = &self->buf;
      self->buf.len = 0;
      ec_free(MEMTYPE_MESSAGE_BODY, self->mtc.gb_donebuffer);
      /* arrange for that job to schedule our new event */
      ec_async_wake_event(&self->job->job, self->session, E_READ|E_WRITE);
      /* queue the job to the thread pool */
      ec_queue_async_job(&self->job->job);
      self->state = WAITING_FOR_URL;
      /* tell ecelerity scheduler to free event */
      return 0;

    case WAITING_FOR_URL:
      /* when we get here, our IO job completed */
      if (self->job->status == IOJ_COMPLETED) {
        /* success, all our data is in self->job->buffer */
        self->state = WRITING_DATA;
        goto state_change;
      }
      /* there was an error */
      log1_printf(DERROR, "Error fetching URL\n");
      goto close_out;

    case WRITING_DATA:
      switch (event_io_write_string(event, self->buf, &self->st)) {
        case EVENT_IO_PENDING:
          return self->st.needmask;
        case EVENT_IO_DONE:
          self->state = WAITING_FOR_LINE;
          io_wrapper_free_read_job(self->job);
          self->job = NULL;
          goto state_change;
      }
      log1_printf(DERROR,
        "My socket had a problem during write %d: %s\n",
        errno, strerror(errno));
      goto close_out;
  }
close_out:
  if (self->job) {
    io_wrapper_free_read_job(self->job);
    self->job = NULL;
  }
  minimal_tryread_construct_free(&self->mtc);
  free(self);
  event_close(event); /* close the event descriptor */
  return 0; /* the scheduler will de-schedule and free the event structure */
}

...
  Event *e;
  int fd = socket(...);
  int non_blocking = 1;
  struct my_state *state;

  ioctl(fd, FIONBIO, &non_blocking);
  state = calloc(1, sizeof(*state));
  string_init_type(&state->buf, 8192, STRING_TYPE_ECSTRING);
  e = build_fd_event(fd, E_READ, 0, my_callback, state);
  schedule_event(e);
...
```
<a name="idp28444688"></a> 


```
#include "ec_config.h"
#include "event.h"
#include "scheduler.h"

static int my_func(Event *event, int eventtype, void *closure,
  struct timeval *now)
{
  log1_printf(DDEBUG, "my_func was triggered, closure is %s\n",
    (char*)closure);
  return 0;
}

...

  Event *t = build_event_from_now_f(30, -1, my_func, "hello");
  schedule_event(t);
...
```

**<a name="idp28447120"></a> Recurrent Timed Events**

If you need to trigger your event multiple times, for instance, every 30 seconds until some later decision to cancel the event, then you will need to create and schedule a new timed event from within your timed event callback routine.

<a name="idp28448288"></a> 


```
#include "ec_config.h"
#include "event.h"
#include "scheduler.h"

static int my_func(Event *event, int eventtype, void *closure,
  struct timeval *now)
{
  Event *t;

  log1_printf(DDEBUG, "my_func was triggered, closure is %s\n",
    (char*)closure);

  t = build_event_from_now_f(30, -1, my_func, closure);
  schedule_event(t);

  return 0;
}

...

  Event *t = build_event_from_now_f(30, -1, my_func, "hello");
  schedule_event(t);
...
```

**<a name="idp28450816"></a> Cancelling a Timed Event**

If you are using a timed event to implement, for example, a timeout for network IO, you will need to cancel the timer when the socket is closed, and re-set it when your IO operation completes. You cancel timed events using the `clear_timed_event` function, which will implicitly free the event if it was found in the system. Otherwise it will return 0 and the caller is responsible for freeing the event.

<a name="idp28452608"></a> 


```
#include "ec_config.h"
#include "event.h"
#include "scheduler.h"

static int my_func(Event *event, int eventtype, void *closure,
  struct timeval *now);
...

  Event *t = build_event_from_now_f(30, -1, my_func, "hello");
  schedule_event(t);
...
  if (!clear_timed_event(t)) {
    event_free(t);
  }
  /* t is no longer valid */
...
```

### <a name="arch.threadpool"></a> The Thread Pool API

As described earlier, the thread pool API is where blocking work is performed. Momentum's configuration and thread pool system takes care of managing the thread pools in terms of creating them and ensuring the number of threads in the pool matches the configured settings. Note that abnormal termination of any thread will cause the entire server to stop and restart because it's all in the same address space.

Consumers of the thread pool API just need to call one function, `ec_queue_async_job`, to queue up a job to run. It does, however, take a structure, `ec_async_job`, with several options which are as follows:

*   `completion`

    *   `ECTP_COMPLETE_NONE` – Do nothing when the job completes

    *   <a name="arch.ECTP_COMPLETE_EVENT"></a> `ECTP_COMPLETE_EVENT` – Reschedule an event when the job completes. The 'e' member of the completion context 'r' (the union for callback context) contains the event and mask. This is generally only used by internal Momentum modules.

    *   `ECTP_COMPLETE_MODULE` – Reinstate a validation module. Like the event callback, this mode takes an event, mask, and also a validation context. This is generally only used by internal Momentum modules.

    *   `ECTP_COMPLETE_CALLBACK` – Call a callback function on completion, in the thread which called the job itself. The callback takes two arguments, the ec_async_job structure and a closure. The closure and callback are defined in the 'cb' member of the 'r' union in the ec_async_job.

    *   `ECTP_COMPLETE_CALLBACK_SCHED` – Just like the callback mode above, but the callback is called in the scheduler thread. Useful if you want to schedule an event or do something else that needs the scheduler thread.

    *   `ECTP_COMPLETE_SEMAPHORE` – Post to a semaphore; it is best to just do this in a **callback** instead of using this directly.

    *   `ECTP_COMPLETE_SYNC` – Complete the whole operation synchronously. This may seem counter-intuitive: Why go to all of this trouble just to do the function in a blocking manner? However, there are some times when you cannot use async, so this allows you to use the same call path for both synchronous and asynchronous cases.

*   `job_class`

    The integer relating to a job class. This is actually the thread pool; there isn't another grouping for job class, just another name. Thread pools are defined in `ecelerity.conf` as strings. Your module should always allow for a configurable job class, while possibly using a default value such as the generic IO thread pool. Use the `ec_thread_pool_name_to_class` function to convert a string to a job class ID.

*   `concurrency`

    A pointer to a semaphore to control how many jobs to run at any given time. The module must maintain this pointer and initialize it with a starting value of the number of concurrent jobs to allow to run. Note that the internal implementation of this is somewhat inefficient for a very large numbers of jobs and the preferred way to limit concurrency is to create a dedicated thread pool for a given job, define the concurrency of the thread pool to be the desired concurrency limit, and to put only these jobs into that thread pool.

*   `worker`

    The function that does the work. It takes two arguments, `ec_async_job` and `closure`.

*   `closure`

    Closure passed to the worker, defined in the previous item.

*   `r`

    Union for callback context, individual cases are described above at [ECTP_COMPLETE_EVENT](/momentum/3/3-api/arch-primary-apis#arch.ECTP_COMPLETE_EVENT) and following.

*   `free_on_completion_memtype`

    If non-zero, when the completion routine is done the ec_async_job will be freed using this memtype. Note that while there is a `MEMTYPE_EC_ASYNC_JOB` which can be used to allocate ec_async_job structures directly, another common technique is to embed the ec_async_job in your job closure structure and pass the address of the ec_async_job in the structure to ec_queue_async_job. Note that to use this method, the ec_async_job must be the first member of the closure, otherwise the pointer being freed will be invalid because it will not be the original address allocated.

*   `skip_completion`

    Don't run the completion routine. This allows some external function to call `ec_async_complete_tail` directly later, if desired. Be careful with this.

*   `skip_on_shutdown`

    When Momentum shuts down, it waits for all thread pools to drain. For jobs that take a long time but don't need to complete before shutdown, set this bit.

The thread pool API is at once very simple and very powerful, allowing consumers to complete a wide variety of tasks asynchronously. As mentioned above, if you find the APIs are not sufficient when you are implementing a module, consult with Message Systems to ensure that the optimum architecture is selected.

Thread pool jobs are single-thread safe. The thread pool API takes care of ensuring that whether in a worker or completion routine, only a single thread of execution will be operating on the job at a given time. The system does not support any external manipulation of thread pool jobs outside of accesses within a worker or completion callback routine.

### <a name="arch.configuration"></a> Configuration API

Momentum has many configurable attributes. The core of Momentum alone exposes 176 options, before any modules have been loaded. Also, many options support hierarchical definition (global, binding, binding/domain, etc). The user side of this experience—namely how to construct the configuration file, what the various options mean—is explored in other documents. For example, see [Fallback](/momentum/3/3-reference/3-reference-ecelerity-conf-fallback). Here we will focus on how the underlying APIs are handled and consumed by external modules.

Momentum's configuration system is a generational system, with every configuration change amounting to a new configuration transaction, and thus a new configuration generation. The most common way to change the configuration is to modify the configuration file and then execute the system console command, 'config reload'. (This command is documented at [config](/momentum/3/3-reference/3-reference-console-commands-config).) Changes may also be made directly through the system console though these changes will not be preserved if the system is restarted. Note that while system console changes are incremental, 'config reload' completely replaces the active configuration with the contents of the `ecelerity.conf` file, overriding any incremental changes that may have been made through the configuration system.

When a configuration change occurs, an entirely new configuration generation is created. As a major difference from version 2.2, this allows for loading modules after the system has started (as well as unloading modules, although that only effectively does anything for non-singleton modules). Module authors must take care to think through the ramifications of a given module being loaded after the system has already started, and plan accordingly. Note that it is possible to detect whether the system has already 'started up' by testing during ext_init if the routine has ever been called with the `EC_MODULE_INIT_PRIVILEGED` bit set in the flags parameter. If this bit is set, then the configuration is being loaded at system startup. If not, then the system has already started up.

Exposing new configuration options involves a number of steps which are discussed in the following sections.

**<a name="arch.def.config"></a> 1.3.5.1. Define the Configuration Object**

Configuration objects are of type [ec_config_option_def](/momentum/3/3-api/structs-ec-config-option-def). They must be accessible for the life of the program and are usually defined as static variables within a module. Note that all 'key' strings within the configuration system are case insensitive. The case sensitivity of values is defined by the consumer.

The members of this struct are as follows:

*   `name` – The name of the option

    Note that this does not need to be globally unique—multiple modules can define the same option name. The scope where an option is valid will be defined later and within a given scope a name must be unique. Only alphanumeric characters plus underscore are valid here, and they are case-insensitive.

*   `type` – The `ec_config_item_type_t` types are as follows:

    *   `ECCFGTYPE_STRING` – String

    *   `ECCFGTYPE_INT` – Integer

    *   `ECCFGTYPE_UINT64` – 64 bit integer

    *   `ECCFGTYPE_PERMS` – Permissions, defined in octal (for example, the file mode to use when creating a log file)

    *   `ECCFGTYPE_BOOL` – Boolean (true, false, yes, no, on, off all work)

    *   `ECCFGTYPE_FLOAT` – Floating point

    *   `ECCFGTYPE_SOCKADDR` – IP address with port (a.b.c.d:port (ipv4), aa:bb:cc::dd.port (ipv6)

    *   `ECCFGTYPE_THROTTLE` – Throttle

        This is principally used internally by Momentum for its throttles. Its use is highly specific to this use case, so if you need to use this member, it is best to first speak to support.

    *   `ECCFGTYPE_ECLIST` – Deprecated, do not use

    *   `ECCFGTYPE_PTR` – Deprecated, do not use

    *   `ECCFGTYPE_EC_SUFFIX_TREE` – Deprecated, do not use

    *   `ECCFGTYPE_ECDICT` – Dictionary (key = value)

    *   `ECCFGTYPE_IP_ACL` – Deprecated, do not use

    *   `ECCFGTYPE_SIZE_T` – Size (basically a positive integer)

    *   `ECCFGTYPE_EC_CONFIG_REGEX` – Regular expression

        Like throttles, this is generally used by Momentum internally, and in most cases, if you want a regular expression, it's best to just define it as a string and parse it in the module.

    *   `ECCFGTYPE_SOCKADDR_PORTLESS` – Like sockaddr, but no port.

*   `personality` – Leave this NULL.

*   `fallback` – where the option is valid

    *   This is also referred to as the scope of the option. For simple module options, this should be "[*`module_name`*]" (for singleton modules, the module name is in brackets, for non-singleton modules no brackets are used). Multiple modules may define the same configuration variable key to be used within their module scopes. Note that this differs from options valid in standard scopes; such options must be unique.

    *   For an option available within a standard scope, such as binding or domain, the fallback path is defined here. The syntax is scope1:scope2>scope1>scope2. So, if you wanted to define an option that was valid in a binding/domain scope, and then fallback to domain, and then fallback to global, the fallback path would be "Binding:Domain>Domain>Global".

*   `flags`

    Bitmap of flags

    *   `EC_CFG_OPT_NOT_TUNABLE_ONLINE`

        Set if this option cannot be defined after startup. Note that changes to this option after startup will result in the transaction throwing a warning, but the transaction will still proceed.

    *   `EC_CFG_OPT_IS_ARRAY`

        This is valid for any option type. If this flag is set, then the option type defined is expected to be an array (for example, key = (val1 val2 val3 val4))

*   `closure` – Used internally, do not use

*   `defval` – Default value

    Note that this is always defined as a string. So a default value of 1 for an integer would be "1". Furthermore, it must be quoted. If a string value contains non-alphanumeric characters, it **must** contain quotation marks in the definition. For example, `/var/log/ecelerity` would have to be `"\"/var/log/ecelerity\""`.

*   `validate_value` – Function to validate the value defined, optional, may be null

    *   Should return `0` on failure, `1` on success. This function accesses the value as described in the ec_config_value *val function parameter in [“Netlistener Options”](/momentum/3/3-api/arch-secondary-apis#arch.netlistener.options).

    *   Note that the config system already does basic validation—if a configuration option is supposed to be an integer it won't accept non-integer values and similarly for things like IP addresses. The idea here is to do more semantic validation. For example, if numbers greater than 10 are illegal, do the validation here.

*   `postset` – Called after the values have been validated, optional, may be NULL

    *   At this point the system has determined that the configuration is valid. Generally used to perform specific tasks related to the value or to store context data associated with the configured value.

    *   Note that this is primarily used by the core configuration handlers because they do not have specific module init phases that can be used to perform initialization tasks. If this option is for a module, it is best to perform post-set type tasks in the ext_init module callback. This callback is discussed in [“Configuration Reloads”](/momentum/3/3-api/arch-primary-apis#arch.config.reload).

*   `datafree` – Free any data that was set during postset, optional, may be null

    As with postset, it is best to do this as part of the ext_init module callback.

**<a name="arch.register.config"></a> 1.3.5.2. Registering and Accessing Configuration Options**

[“Module API”](/momentum/3/3-api/arch-primary-apis#arch.module) covers code examples showing where and how to register and access configuration options on initialization. Here those functions are examined in more detail.

*   `ec_config_register_option`

    Takes an `ec_config_option_def` pointer as its only argument, and registers the option. On success it returns an integer which is the numeric handle used to reference the option for the life of the system and so needs to be saved for subsequent access. On failure, `-1` is returned and generally this means the structure has a problem and that the conf_setup routine should also return `-1`, thereby failing the transaction or shutting down the system.

*   `ec_config_option_fetch_module_at_init`

    This function is used during initialization to cache configuration values in a module. It receives the value associated with a given configuration option definition in the current configuration generation.

    The returned 'val' structure must be released using `ec_config_release_value`.

*   `ec_config_option_fetch_module`

    Same as `ec_config_option_fetch_module_at_init`, but this is not called during the init phase. It may be called, for example, in a hook provider routine during message processing. This is an alternative to caching the configuration value at module initialization time and a way to deal with the locking concerns pertaining to singleton modules.

*   `ec_config_option_fetch`

*   `ec_config_option_fetch_binding`

*   `ec_config_option_fetch_binding_domain`

*   `ec_config_option_fetch_domain`

*   `ec_config_option_fetch_host`

*   `ec_config_option_fetch_binding_host`

*   `ec_config_option_fetch_pathway`

*   `ec_config_option_fetch_pathway_domain`

    These functions all perform configuration queries against the scope defined, with an option slot parameter as the option to query. Based on the parameters provided, appropriate fallback logic will be followed. So, for example, if a binding/domain query is made for an option, but it is only defined at the binding scope, then the binding value will be returned.

    The general idiom is to make the most specific query you can, and the system will then take care of the fallback logic on its own.

    The configuration value returned (if any) must be released with `ec_config_release_value`.

    The 'from' parameter for all of these options is generally used internally for more narrowly scoped queries and, in general, should be left NULL.

*   `ec_config_option_fetch_generic`

    This is a generic 'getter' function that allows you to define arbitrary fallback scopes. Its arguments are as follows:

    *   `transaction` – the configuration transaction to query

    *   `option_slot` – the option slot returned when registering the option to be queried

    *   `from` – the config header to start with, this should always be NULL unless advised otherwise by Message Systems

    *   `nargs` – the number of arguments provided in the va_list, `0` if the va_list is not being used

    *   `args` – ec_ptr_array of arguments, use this or the va_list (syntax is the same as the va_list defined below)

    *   `va_list` – pairs of arguments, basically in type/value notation. For example, a type of "Domain" would have a subsequent value of "foo.com".

*   `ec_config_fetch_globalconf`

    Generally, the configuration system calls this function implicitly when one of the above routines is called. However, in some cases, a caller may wish to provide a specific configuration transaction to use when fetching a configuration. The return value of this function may be passed to any function which has an "ec_config_header *transaction" argument to provide the transaction to query against.

    When returned, the caller has a reference to the global configuration, meaning it will remain valid until said reference is released. In other words, when the caller is done, `ec_config_release_scope_instance` must be called on the return value of this function.

    A practical use of this function is described at [“Configuration Reloads”](/momentum/3/3-api/arch-primary-apis#arch.config.reload).

**<a name="arch.accessing.config"></a> 1.3.5.3. Accessing Different Config Value Types**

Examples earlier of how to access integer and string value types are self-explanatory. Other types are a bit more complicated.

*   Array

    As mentioned earlier, any option may be an array. Below is the general idiom for dealing with an array The example is an array of strings, but based on how other types are described the same pattern may be used.

    ```
    val = ec_config_option_fetch_module_at_init(transaction,
        option_handle_for_string_array, gself);
    if (val->v->varr) {
      int slot;
      for (slot=0; slot < val->v->varr->size; slot++) {
        ec_config_value_storage *v = val->v->varr->items[slot];
        const char *str = v->vstr;

        /* Now do whatever is necessary with str */
        /* No delref/release is necessary on v */
      }
    }
    ec_config_release_value(val);
    ```

*   BOOL

    Just access the `val->v->vint` as an integer, the only values will be `0` and one.

*   PERM – `val->v->vint`

*   UINT64 – `val->v->vu64`

*   FLOAT – `val->v->vdouble`

*   `SOCKADDR/SOCKADDR_PORTLESS` – `val->v->vsa`

    The typical idiom when using sockaddrs applies. Query `val->v->vsa->sa_family` to determine the underlying family, then recast accordingly. So if `val->v->vsa->family == AF_INET`, define struct `sockaddr_in *sin = (struct sockaddr_in *)val->v->vsa`.

*   THROTTLE – `val->v->vthrot`

    As discussed, don't use this for external modules without consultation with Message Systems.

*   DICT – `val->v->vdict`

    Use the `ecdict_*` routines on this.

*   SIZE – `val->v->vsize`

**<a name="arch.config.reload"></a> 1.3.5.4. Configuration Reloads**

One of the major advancements of version 3 of Momentum was the ability to reload the configuration completely without a restart. This is a huge advantage, but it also places new responsibilities on the module author. Specifically, a configuration reload can (and will, thanks to Murphy's law) happen at any time. This means that the configuration can change at any time as well. This has different ramifications for different modules, the specifics of which are described here. Note that when speaking of 'module configuration' we are speaking of any data attached to the `generic_module_infrastructure.module_private_data` member, which is where module-wide configuration data is cached. Any accesses to the configuration system itself directly are already taken care of in terms of thread safety. However, any data which the module creates and maintains that is attached to the module infrastructure must also be made safe.

For singleton modules, as discussed in [“Module API”](/momentum/3/3-api/arch-primary-apis#arch.module), the module infrastructure remains the same for the life of the module in the system. This means that `ext_init` is called each time the configuration is reloaded with the same module infrastructure pointer, and the module author must update its configuration safely. Note that this is done without synchronizing any other threads that may also be running, so the module author must take steps himself to ensure that a module's private configuration is modified and accessed in a manner that keeps this in mind.

For non-singleton modules, the task is both simpler and more complex. Each time the configuration is reloaded, a new module infrastructure is created, and thus a new configuration is attached to the module (as discussed in the module and hooking section). Furthermore, when a non-singleton module registers a hook in the `ext_init` phase, accessing anything attached to the module infrastructure is safe while in the hook call stack, because the hooking infrastructure ensures the module infrastructure will not be destroyed while calling the hook. However, any access outside of a hook is not guaranteed in such a manner. Cases where a module is accessed outside of a hook include any C functions that provide Lua functions. Since Lua functions are generally called by other parts of the infrastructure, such as an SMTP validation phase, a safe method of accessing the configuration must be provided. An example follows.

```
/* NOTE: change 'mymodule' to be a unique name, this MUST be 
 * unique to your module and must not be shared between modules */

EC_DECLARE_HOOK_NOARGS(mymodule, void *, get_module_closure, EC_HOOK_RETURN(EC_HOOK_RETVAL))
static void *get_closure(void *closure) {
  return closure;
}

static my_lua_provider(lua_State *thr) {
  ec_config_header *global_conf = ec_config_fetch_globalconf();
  generic_module_infrastructure *self = call_mymodule_get_module_closure_txn(global_conf);
  /* ... */
  ec_config_release_scope_instance(global_conf);
}

static mymodule_ext_init(generic_module_infrastructure *gself,
                         ec_config_header *transaction,
                         string *output, int flags) {
  /* ... */
  register_mymodule_get_module_closure_hook_first(get_closure, self);
  /* ... */
}
```

This example leverages the safety of the configuration and hooking system to access the module infrastructure outside of a hook. Each time a new module infrastructure is created, a new hook is registered with the configuration transaction. All hook 'call' and 'has' routines provide a `_txn` version to use this version as hook registry, instead of the current active global configuration (the transaction is always the first argument). By using the `_txn` hook consumer, we are guaranteeing that the values returned will remain valid until we release the configuration at the bottom of the Lua provider, since both the hook registry and any attached closures are sourced from the provided configuration header (which we have a reference to until it is released). This is exactly the same idiom that the hooking infrastructure itself uses when calling hooks and that's how it guarantees that the configuration and module infrastructure will remain valid for the life of the hook invocation.

**<a name="arch.thread.safety"></a> 1.3.5.5. Thread Safety of the Configuration System**

Modification of any structures returned by the configuration is strictly not supported. Therefore, from the module author's perspective, the configuration system is read-only. The model for ensuring data stays valid is described above, and ensures that for as long as a caller maintains a reference to a configuration data structure it will be valid. Therefore, the configuration system is considered to be fully thread-safe, with all modifications occurring through the normal paths—in other words, changing the configuration on disk and executing a '`config reload`' control command.

### <a name="arch.memory"></a> Memory API

Momentum exposes its own memory management API, using either built-in or third party memory allocators. Without going into detail, the stock allocators provided on our supported platforms have a variety of problems—some with performance, some with fragmentation. Momentum includes a pluggable engine for using any allocator that follows the general malloc/free/realloc semantics that UNIX defines.

**<a name="arch.memory.types"></a> 1.3.6.1. Memory Types**

All allocations performed using the Momentum memory API require a memory type. Memory types serve purely for bookkeeping and sanity checking purposes, but all memory types are reportable through the ec_console 'memory' command which makes tracking memory usage and hunting down memory leaks a much simpler task. This console command is documented at [memory](/momentum/3/3-reference/3-reference-console-commands-memory).

Memory types may be defined as either fixed size, for something like a known data structure whose size is always the same, or variable size for something like a string, whose size can change. There are no limits to what a given allocation may be used for in a technical sense, but in a semantic sense you should try to limit the scope of items used by a given memory type. For fixed size allocations, a given memory type should only be used by a single data structure. For variable sized allocations, the semantics are a bit more vague, but the best thing to do is consider, if a leak is discovered in a memory type, how much code will you need to work through to find it. The more granular the memory types, the less code will need to be evaluated.

The structure and idiom for declaring a memory type is as follows:

```
int memtype_module_name_vsize = -1;
static mem_type_def module_name_vsize_memtype_def = {
  "module_name:vsize",
  0,
  SIZEOF_VOID_P,
  0,
  EC_ALLOCATOR_VSIZE,
  0
};

static int memtype_module_name_fixed = - 1;
static mem_type_def module_name_fixed_memtype_def = {
  "module_name:fixed",
  sizeof(struct fixed),
  SIZEOF_VOID_P,
  0,
  EC_ALLOCATOR_FIXED,
  0
};
```

The structure of `mem_type_def` is as follows:

*   `memtype_description`

    Just a string, not significant except for statistical reporting. The idiom used by other Momentum modules is `module_name:memory_type_description` which is usually the structure name or purpose.

*   `size`

    Size, in bytes, of the memory type. For vsize memtypes, this is `0`. For fixed allocations, this is the size of the structure.

*   `aligned`

    Alignment of the memory. For most cases this should be `SIZEOF_VOID_P`; the size of a pointer on the system in question.

*   `lock_class`

    Deprecated, and ignored by the system. Just make this `0`.

*   `allocator_type`

    `EC_ALLOCATOR_VSIZE` for vsize, `EC_ALLOCATOR_FIXED` for fixed.

*   `force_zero`

    When set to non-zero, fills the memory with garbage. This is a 'stick' designed to force consumers to memset allocations. In production always set this to `zero`.

**<a name="arch.registering.memory"></a> 1.3.6.2. Registering Memory Types**

Memory types must be registered during the `conf_setup` module phase, because it's important that registration only happen once even for non-singleton modules. It's fine for non-singleton modules to share the same memtype definition and, in fact, probably desirable in most cases.

Registration is as follows:

```
if(memtype_module_name_vsize == -1) {
    memtype_module_name_vsize = ec_memtype_register(&module_name_vsize_memtype_def);
  }
  if(memtype_module_name_fixed == -1) {
    memtype_module_name_fixed = ec_memtype_register(&module_name_fixed_memtype_def);
  }
  if (memtype_module_name_fixed == -1 || memtype_module_name_vsize == -1) {
    mod_printf(DCRITICAL, "module_name: Memory type registration failed\n");
    return -1;
  }
```

Once the memory type is registered, then it is ready for use by the module.

**<a name="arch.freeing.memory"></a> 1.3.6.3. Allocating, Freeing and Reallocating Memory**

Momentum exposes a library of functions with similar semantics to the standard UNIX allocator routines.

*   `ec_malloc(memtype)`

    Takes a fixed memtype and only a fixed size memtype, and returns a block of memory properly sized as defined by the memtype. The memory is not initialized.

*   `ec_malloc_size(memtype, size)`

    Takes a vsize memtype and only a vsize memtype and returns a block of memory of size bytes. The memory is not initialized.

*   `ec_realloc(memtype, old_ptr, new_size)`

    Takes a vsize memtype and only a vsize memtype, allocates a block of size `new_size`, copies the smaller of new_size versus the original size bytes into the new memory, and returns a pointer. This function must only be used to reallocate memory originally allocated on the provided memtype. Any use of a different memtype is explicitly unsupported.

*   `ec_free(memtype, ptr)`

    Frees the pointer originally allocated with type memtype. Any attempt to free a pointer allocated with a different memtype will result in an unexpected shutdown (abort). The same function is used for both fixed and vsize allocations

*   `ec_mt_strdup(memtype, string)`

    This function duplicates a string and must be NULL terminated. It uses memtype as the memory type and must be a vsize memtype.

*   `ec_mt_strndup(memtype, string, len)`

    Copies `len` bytes from `string` into a block of memory of type memtype, returning said memory. Any NULL bytes are ignored—memcpy of len bytes is used under the hood. The result is NULL terminated and an extra byte is allocated automatically to hold the terminating NULL character.

**<a name="arch.ec_async_job"></a> 1.3.6.4. Use in ec_async_job Structures**

Earlier we discussed the `free_on_completion_memtype` option that can be defined in the `ec_async_job` structure. Any memtype registered with Momentum may be used there, but remember that the pointer freed is the ec_async_job pointer, so the job must be the first member of the structure, otherwise the system will abort.

### <a name="arch.io.wrapper"></a> IO Wrapper API

Momentum provides an API that wraps a variety of underlying IO drivers. Modules can leverage this and not worry about the details of the underlying driver. Examples include file, memory, jlog and http IO wrappers, to name a few. Interfaces are also available to create synthetic IO wrappers for other arbitrary purposes, if desired.

IO wrappers are modeled on the POSIX IO routines: open, close, read, write, lseek, etc.
