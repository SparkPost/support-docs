---
lastUpdated: "03/26/2020"
title: "Custom Delivery Module Setup"
description: "The following sections provide details about setting up a custom delivery module that extends the Generic HTTP Client module The information given is a subset of the topics discussed in Section 1 3 Primary Momentum AP Is Your delivery module must have a ecm file which defines the name of..."
---

The following sections provide details about setting up a custom delivery module that extends the Generic HTTP Client module. The information given is a subset of the topics discussed in [“Primary Momentum APIs”](/momentum/3/3-api/arch-primary-apis).

### <a name="custom_channels.ecm.file"></a> The .ecm File

Your delivery module must have a **.ecm** file, which defines the name of your module and identifies your module for Momentum. The name *`protocol_name`* is used throughout this document to refer to your custom delivery protocol.

[*`protocol_name`*]**<a name="custom_channels.module.dependencies"></a> Module Dependencies**

Module dependencies are defined in the **.ecm** file. In your ***`protocol_name`*.ecm**, include the following entry to require the httpclnt module.

[*`protocol_name`*]
msys.requires = httpclnt
### <a name="custom_channels.module.infrastructure"></a> Module Infrastructure

Your module setup routine is established in the `generic_module_infrastructure` that you define for your delivery module. Your module will be a singleton module, and you will need to provide a custom conf_setup callback and a custom ext_init callback. The conf_setup callback is used to configure your delivery module and register custom callbacks. The callbacks you implement and register provide your customized implementation. Be sure that the names you specify in the `generic_module_infrastructure` match the names of your callbacks. The following is a sample module infrastructure for your delivery module.

/* Your delivery module infrastructure */ 
EC_MODULE_EXPORT
generic_module_infrastructure *`protocol_name`* = {{
    EC_MODULE_INIT(EC_MODULE_TYPE_SINGLETON, 0),
    "*`protocol_name`*.c",
    "My Delivery Channel",
    NULL,     /* control  */
    NULL,     /* conf     */
    NULL,     /* ext_conf */
    NULL,     /* init */
    NULL,     /* post_init */
    *`protocol_name`*_conf_setup, /* Your custom conf_setup callback  */
    NULL,     /* enable */
    NULL,     /* can_unload */
    *`protocol_name`*_ext_init, /* Your custom ext_init callback */
}};**<a name="custom_channels.config.routine"></a> Module Configuration Setup**

The function declaration for the conf_setup callback is

static int *`protocol_name`*_conf_setup(generic_module_infrastructure *gself, int notused)

In this function, you must do the following:

*   Get a protocol driver structure for your delivery module for initialization

*   Register the module reference with the httpclnt module

*   Define and register custom memory types (optional)

*   Register your custom callbacks with the httpclnt module

*   Register your callbacks and settings with Momentum

*   Setup any other custom configuration that you require for your implementation (optional)

Use the following utility to get a protocol driver structure. The returned structure is used to setup your custom configuration. The structure is initialized with default settings by the httpclnt module before returning.

ec_pd *pd = http_pd_init(“*`protocol_name`*”);

The module setup routine is passed the delivery module reference in the `generic_module_infrastructure *` parameter. This reference should be stored as a static variable in your delivery module. You must setup a callback function to return the module reference and register that function with the httpclnt module during setup. Define the following in your module.

```
static generic_module_infrastructure *self = NULL;
static generic_module_infrastructure *get_self() {return self;}
```

In your conf_setup callback, register the callback that returns the module reference, as follows.

```
/* The generic_module_infrastructure * arg name is gself */          
self = gself;  
/* Assign the function to retrieve the module instance with the Generic Delivery module */
pd->get_module_closure = get_self;
```

Optionally, your delivery module can define its own memory type. If you need a custom memory type, you must register the memory type with Momentum, as well as the httpclnt module. You also must register a custom free routine and custom malloc routine for that memory type with the httpclnt module during setup. If a custom memory type is not needed, the httpclnt module will allocate memory structures using an internally defined `“http:memory”` memory type.

The following is sample code to define a custom memory type.

static mem_type_def mt_def_*`protocol_name`* = {
 “*`protocol_name`*:memory”,
 0,
  SIZEOF_VOID_P,
  EC_MEMCLASS_DEFAULT,
  EC_ALLOCATOR_VSIZE,
  0
}

static int mt_*`protocol_name`*;
static void *`protocol_name`*_free(void *ptr) 
          { if (ptr) ec_free(mt_*`protocol_name`*, ptr); }
static void* *`protocol_name`*_malloc(int size) 
          { return ec_malloc_size(mt_*`protocol_name`*, size); }

In your conf_setup callback, register your memory type with Momentum using [ec_memtype_register](/momentum/3/3-api/apis-ec-memtype-register) and register your memory type, malloc function, and free function with the httpclnt module using the parent `ec_pd` structure, as follows.

If((mt_*`protocol_name`* = ec_memtype_register(&mt_def_*`protocol_name`*)) == -1)
{
	/* failed to register memory type */
	return -1;
}  
pd->memory_type = mt_*`protocol_name`*;
pd->malloc = *`protocol_name`*_malloc;
pd->free = *`protocol_name`*_free;

Any custom delivery module that extends the httpclnt module must provide, at a minimum, a build_request callback, handle_response callback, and status_classifier callback that are registered with the httpclnt module. In your delivery module, declare your callback functions.

static int *`protocol_name`*_build_request(http_session *sess);
static int *`protocol_name`*_handle_response(http_session *sess);
static int *`protocol_name`*_status_classifier(int error_code);

These custom callback functions are discussed in detail in [“Build Request”](/momentum/3/3-api/custom-channels-custom-routines#custom_channels.build.request), [“Handle Response”](/momentum/3/3-api/custom-channels-custom-routines#custom_channels.handle.response), and [“Status Classifier”](/momentum/3/3-api/custom-channels-custom-routines#custom_channels.status.classifier), respectively.

If logging is required, you will need to implement custom disposer callback functions. In your delivery module, declare the following functions. Implementation of these functions is discussed in [“Disposer Callback”](/momentum/3/3-api/custom-channels-custom-routines#custom_channels.disposer).

static int *`protocol_name`*_log_delivery(ec_message *msg);
static int_*`protocol_name`*_log_tempfail(ec_message *msg);
static int *`protocol_name`*_log_permfail(ec_message *msg);

There are a number of other custom callbacks (handlers) that you may need to implement, depending on your requirements. These optional functions are discussed in [“Additional Custom Handlers”](/momentum/3/3-api/custom-channels-custom-routines#custom_channels.optional.handlers). Be sure to declare any additional callback (handlers) being implemented. If a callback (handler) is not provided, the httpclnt module has default implementations. Typically, these defaults provide no functionality that would suit your requirements.

In your conf_setup callback, register all your custom callback functions, as follows.

/* Register your custom status_classifier */
pd->status_classifier = *`protocol_name`*_status_classifier;

/* Register your custom build_request and handle_response */
http_pd *hpd = pd->user_data;
hpd->build_request = *`protocol_name`*_build_request;
hpd->handle_response = *`protocol_name`*_handle_response;

/* Register your custom logging callbacks, if required */
pd->disposer.dispose_delivery = *`protocol_name`*_log_delivery;
pd->disposer.dispose_tempfail = *`protocol_name`*_log_tempfail;
pd->disposer.dispose_permfail = *`protocol_name`* log_permfail;

/* Register other optional callbacks, as needed */
hpd->reset_request = *`protocol_name`*_reset_request;
hpd->reset_response = *`protocol_name`*_reset_response;
hpd->reset_session = *`protocol_name`*_reset_session;
hpd->init_session = *`protocol_name`*_init_session;
hpd->destroy_session = *`protocol_name`*_destroy_session;

Finally in your conf_setup callback, register your custom callbacks and settings with Momentum, as follows.

`ec_pd_register(pd);`**<a name="custom_channels.init.hook"></a> Module initialization hook**

Although singleton modules must provide an ext_init callback, most likely you will only need to return, depending on your requirements. The following is a sample module initialization hook for your delivery module.

static int *`protocol_name`*_ext_init(generic_module_infrastructure *self,
  ec_config_header *transaction, string *output, int flags)
{
  return 0;
}
### <a name="custom_channels.configuration.options"></a> Configuration Options

This section lists the Momentum configuration options that are related to developing a custom delivery module. For additional details about configuration options, see [Ecelerity.conf Configuration Reference](/momentum/3/3-reference/conf-ref).

**<a name="custom_channels.generic.options"></a> Generic Configuration Options**

Use the `domain` stanza to define the following per-domain configuration options for your delivery module.

*   [delivery_method](/momentum/3/3-reference/3-reference-conf-ref-delivery-method)

*   [routes](/momentum/3/3-reference/3-reference-conf-ref-routes)

*   [idle_timeout](/momentum/3/3-reference/3-reference-conf-ref-idle-timeout)

*   [delivery_response_timeout](/momentum/3/3-reference/3-reference-conf-ref-delivery-response-timeout)

When configuring delivery domains in Momentum, be sure to use the same name that you used to get your protocol driver in your custom conf_setup callback (e.g. “DELIVERY_METHOD = “*`protocol_name`*”).

**<a name="custom_channels.http.options"></a> HTTP–Configuration Options**

Use the `domain` stanza to define the following HTTP–related configuration options for your delivery module.

*   [http_host](/momentum/3/3-reference/3-reference-conf-ref-http-host)

*   [http_method](/momentum/3/3-reference/3-reference-conf-ref-http-method)

*   [http_uri](/momentum/3/3-reference/3-reference-conf-ref-http-uri)

*   [http_version](/momentum/3/3-reference/3-reference-conf-ref-http-version)

*   [http_basic_auth](/momentum/3/3-reference/3-reference-conf-ref-http-basic-auth)

**<a name="custom_channels.tls"></a> TLS**

If your custom channel requires a secure connection, use the Momentum TLS options. For information about configuring these options, see [tls](/momentum/3/3-reference/conf-ref-tls).