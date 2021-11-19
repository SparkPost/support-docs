---
lastUpdated: "03/26/2020"
title: "alerting – alerting"
description: "The alerting module provides the ability to send alerting emails when a script examines data If you intend to create scripts either using the web policy editor or manually you must have the alerting module loaded Loading this module when you are using Section 14 2 adaptive Adaptive Delivery is..."
---

<a name="idp17566608"></a> 

The alerting module provides the ability to send alerting emails when a script examines data. If you intend to create scripts, either using the web policy editor or manually, you must have the alerting module loaded. Loading this module when you are using [“adaptive – Adaptive Delivery”](/momentum/3/3-reference/3-reference-modules-adaptive) is especially important. You will not receive adaptive alerts if this module is not loaded.

### Note

To use this module you must also load the [inbound_audit module](/momentum/3/3-reference/3-reference-modules-inbound-audit) and likewise with the [scriptlet module](/momentum/3/3-reference/3-reference-modules-scriptlet).

### <a name="modules.alertingconfiguration"></a> Configuration

`alerting { }`

The alerting module is a singleton so does not have an instance name.

The following options are available:

<dl class="variablelist">

<dt>alerting_cache_ttl</dt>

<dd>

**Configuration Change. ** Prior to version 3.4, the default value for this option was `60`.

The time to live for the alerting cache. The default value for this option is `3600` seconds.

</dd>

<dt>alerting_cache_size</dt>

<dd>

**Configuration Change. ** Prior to version 3.4, the default value for this option was `200000`.

The alerting cache size. The default value for this option is `1048576` bytes.

</dd>

</dl>