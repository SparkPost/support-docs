---
lastUpdated: "03/26/2020"
title: "alerting – Send Alerting Emails"
description: "The alerting module provides the ability to send alerting emails when a script examines data If you intend to create scripts using the scriptlet module you must have the alerting module loaded It is especially important to load this module when you are using Section 71 3 adaptive Adaptive Delivery..."
---

<a name="idp19555312"></a> 

The alerting module provides the ability to send alerting emails when a script examines data. If you intend to create scripts using the [`scriptlet`](/momentum/4/modules/scriptlet) module, you must have the alerting module loaded.

It is especially important to load this module when you are using [“adaptive – Adaptive Delivery”](/momentum/4/modules/4-adaptive). You will not receive adaptive alerts if this module is not loaded.

### <a name="modules.alerting.configuration"></a> Configuration

The alerting module is a singleton, so it does not have an instance name. To use this module, you must also load the [inbound_audit](/momentum/4/modules/inbound-audit) module. The following is an example configuration:

<a name="example.alerting"></a> 


```
alerting {}

inbound_audit {
  monitors = ("300,6")
}
```

The following configuration options are available:

<dl class="variablelist">

<dt>alerting_cache_ttl</dt>

<dd>

Time to live for the alerting cache. Default value is `3600` seconds.

</dd>

<dt>alerting_cache_size</dt>

<dd>

Alerting cache size. Default value is `1048576` bytes.

</dd>

</dl>