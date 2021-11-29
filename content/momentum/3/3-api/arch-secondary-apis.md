---
lastUpdated: "03/26/2020"
title: "Secondary Momentum APIs"
description: "Notably lacking from the primary AP Is is any sort of application layer network protocol information or in fact any sort of network session handling at all Such handling is layered on top of the primary AP Is and provides additional flexibility and robustness to the platform When programming a..."
---

Notably lacking from the primary APIs is any sort of application layer network protocol information or, in fact, any sort of network session handling at all. Such handling is layered on top of the primary APIs, and provides additional flexibility and robustness to the platform.

### <a name="arch.netlistener.api"></a> Netlistener API

When programming a server in C in a UNIX environment, there are a common set of tasks that always need to happen with not only the underlying APIs but configuration as well. Given that Momentum is designed to be a server to multiple protocols simultaneously, it includes its own server API that is designed to be the center of all network server connectivity. This is known as the netlistener API, which abstracts many of the tedious tasks surrounding server configuration as well as connection setup.

In this model a module that needs to provide a network server as a capability will register itself with the Momentum netlistener system. A netlistener takes a series of parameters and callbacks, as well as a unique name that defines it. An end user can then define the listener in the configuration file (for example, `My_Listener`, if the listener type were defined as "`My`"), and can configure common parameters such as address, port, accept concurrency and so on. You can also define custom attributes that are netlistener-specific. For example, with an SMTP listener you can define which SMTP extensions should be advertised, something that obviously applies only to SMTP netlisteners.

**<a name="arch.netlistener"></a> 1.4.1.1. Defining a Netlistener**

Registering a netlistener is actually very simple.

```
static int mymodule_listener(Event *e, int eventtype, void *vclosure, struct timeval *now);
static int mymodule_acceptor(Event *e, int eventtype, void *vclosure, struct timeval *now);

static int my_module_conf_setup(generic_module_infrastructure *self, int ignoreme) {
  netlistener_def *def;

  def = netlistener_register3("MyModule", mymodule_listener, mymodule_acceptor, self);

  return 0;
}
```

Note that the two worker functions (`mymodule_listener` and `mymodule_acceptor`) have prototypes as per the event API. This is because the netlistener API is built, in part, on top of the event API. The acceptor function is separate from the 'listener' function because it allows a module to define setup work that can happen only at the 'accept' phase, which is allowed to happen asynchronously. This is used in the core Momentum product so that connections can be disconnected before being pushed into the master event loop.

The 'listener' function is the one that is actually called in the master event loop. Any connection setup that must happen in the master event loop is performed in the listener function. This idiom is used throughout Momentum. You must also change the `e.callback` member to be your actual server 'worker' routine, and call the worker routine returning its return value to your caller. Do this in the following way:

```
static int mymodule_worker(Event *e, int eventtype, void *vclosure, struct timeval *now);
static vin mymodule_listener(Event *e, int eventtype, void *vclosure, struct timeval *now) {
  accept_construct *closure = (accept_construct *)vclosure;
  struct my_module_session_closure *mc = calloc(1, sizeof(*mc));

  /* Do not change the event's closure, store any per-session closure 
   * needed in closure->accept_construct_closure.vptr */
  closure->accept_construct_closure.vptr = mc;

  e->callback = mymodule_worker;
  /* Do any setup work necessary here */  
  return mymodule_worker(e, eventtype, vclosure, now);
}
```

Once within the worker routine, all IO must be performed in a non-blocking manner—the netlistener API takes care of setting up the file descriptor in a non-blocking state. The file descriptor event routines are used to interact with the file descriptor as appropriate for the application layer protocol. Active server connections also need to have a timeout associated with them to prevent them from stacking up in the system. This is done with a timed event that refers to the file descriptor of the connection.

**<a name="arch.netlistener.options"></a> 1.4.1.2. Netlistener Options**

Some netlisteners don't need any options, but most will need to define various personality configuration options. In the background, the netlistener configuration system leverages the configuration system described above. Scopes such as Listen, Peer and Pathway provide wrappers for dealing easily with netlistener fallback rules. These scopes are documented in the [Momentum Reference Manual (3.x)](https://support.messagesystems.com/docs/web-ref/). A netlistener creation example with configuration options might look like this:

```
static int mymodule_listener(Event *e, int eventtype, void *vclosure, struct timeval *now);
static int mymodule_acceptor(Event *e, int eventtype, void *vclosure, struct timeval *now);

static ec_config_option_def my_option = {
  "option", ECCFGTYPE_STRING, NULL, NULL, 0, NULL, "default", 0};
static int my_option_slot = -1;

static int my_module_conf_setup(generic_module_infrastructure *self, int ignoreme) {
  netlistener_def *def;

  def = netlistener_register3("MyModule", mymodule_listener, mymodule_acceptor, self);
  my_option_slot = netlistener_register_option(def, &my_option);
  return 0;
}
```

Netlistener options are usually very context sensitive; they are related to both the local address as well as the connecting IP address. Therefore, the idiom used to fetch them differs from one where the same value applies globally. Generally, in modules implemented directly into Momentum, options are fetched through a convenience function like so:

```
static ec_config_value *get_option(int slot, accept_construct *ac)
{
  char peer[INET6_ADDRSTRLEN];
  ec_config_value *v;
  ec_config_header *transaction;

  transaction = ec_config_fetch_globalconf();

  sockaddr_to_string_opt(&ac->remote_addr.sa, peer, sizeof(peer),
    EC_SA2S_NO_PORT);

  v = ec_config_option_fetch_generic(transaction, slot, NULL, 4, NULL,
    "Listen", ac->inst->address, "Peer", peer);

  ec_config_release_scope_instance(tofree);
  return v;
}
```

Clearly the caller of this function would need to release the return value to maintain proper reference counting.

**<a name="arch.netlistener.thread.safety"></a> 1.4.1.3. Netlistener Thread Safety**

Netlisteners may only be registered in the master scheduler thread. Sessions created by a netlistener, which will pass in an accept_construct, are single thread-safe. They may be passed to other threads for action as long as the session is suspended and floated in the master scheduler.