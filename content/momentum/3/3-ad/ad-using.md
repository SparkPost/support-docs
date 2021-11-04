---
lastUpdated: "03/26/2020"
title: "Implementing Adaptive Delivery"
description: "AD is implemented using the adaptive module along with other Momentum modules These modules are as follows scriptlet adaptive response rules are implemented using Lua so this module must be enabled alerting this module provides notification when adaptive actions are taken and it is also required when the scriptlet module..."
---


AD is implemented using the adaptive module along with other Momentum modules. These modules are as follows:

*   scriptlet – adaptive response rules are implemented using Lua so this module must be enabled

*   alerting – this module provides notification when adaptive actions are taken and it is also required when the scriptlet module is loaded

*   inbound_audit – as well as collecting delivery statistics for AD sweep rules, this module facilitates communication between nodes in a cluster and is used by Adaptive Rules

*   cluster (the `replicate "metrics"` stanza) – this ensures that metrics are visible across a cluster

*   fbl – this is not a requirement but if you want sweep rules to respond to feedback loops, this module must be activated

*   bounce_classifier_override – this is not a requirement but if you want AD to respond to bounces, this module must be activated

You can fine tune AD to meet your specific needs by setting configuration options in different scopes. The non-module options listed in [*Adaptive Options*](/momentum/3/3-ad/ad-options) are valid in global, binding_group, binding and domain scopes. These different scopes make it possible to apply specific configurations to all domains, to groups of domains or only to a specific domain. For discussion of the binding scope see [binding](/momentum/3/3-reference/3-reference-conf-ref-binding) and follow the links at the bottom of that page.

### Note

When using bindings with AD, use DuraVIP™ bindings to help reduce possible overhead due to transfers between nodes. For more information see [DuraVIP™: IP Fail over](/momentum/3/3-reference/3-reference-cluster-config-duravip).

## <a name="ad.adaptive.setup"></a> Setting up Adaptive Delivery

To use AD perform the following steps:

1.  Ensure that your license file is enabled for Adaptive Delivery.

2.  During installation, enable "AD Rules Update". For more information see [Adaptive Delivery Rule Updates](/momentum/3/3-reference/install-additional-packages#install.additional.packages.adaptive.updates).

3.  Add the following to your ecelerity configuration file:

    <a name="ad.adaptive.setup.example"></a> 

    
    ```
    adaptive_enabled = true
    adaptive {
      # set the debug level for log information
      debug_level = info
    }
    # Add the Lua adaptive rules script
    scriptlet "scriptlet" {
      script "adaptive" {
        source = "msys.adaptive"
      }
      # The following script stanza loads default scripts to
      # support enhanced control channel features
      # and is part of the default configuration
      script "boot" {
        source = "msys.boot"
      }
    }
    alerting {}
    inbound_audit {
      monitors = ("300,6")
    }
    # Datasource for use with bounce classifier
    datasource "my_sqlite" {
      uri = ( "sqlite:/path/to/db" )
    }
    # Use bounce classifier for bounce sweep rules
    # and for custom bounce codes
    bounce_classifier_override {
      user_smtp_classification_override =
        ":datasource:my_sqlite:SELECT domain, bounce_code, rule FROM overrides;"
      refresh = 900
      custom_classes = [
        99 = "profanity"
      ]
    }
    # Use fbl for fbl sweep rules
    fbl {
      auto_log = true # default is "false"
      addresses = ( "^.*@fbl.foo.com" ) # default is unset
      user_string = "%{vctx_mess:my_context_variable}" # default is unset
    }
    ```

    The alerting module should already be declared in your configuration file and the `adaptive_enabled` must be set to `true` in order for the adaptive module to function. In the example above it is set to `true` in a global scope. Disable it in other scopes if required. Sometimes it is simpler to set `adaptive_enabled` to `true` in specific scopes and disable it in the global scope. Follow whichever method suits your circumstances. For instructions on making configuration changes manually see [Best Practices for Manually Changing Configuration Files](/momentum/3/3-reference/conf-manual-changes).

4.  To enable adaptive rules you must add a `script` stanza to the scriptlet module and point to the `adaptive.lua` file. The scriptlet module should already exist so you need only add the new script scope that sets the `source` to `msys.adaptive`. This is discussed in detail in [*Adaptive Rules*](/momentum/3/3-ad/ad-adaptive-rules) .

    Adaptive delivery provides many options that are intended to be placed in `domain` and/or `binding` stanzas. You can manually configure these options instead of using adaptive rules. These options are shown in [Table A.2, “adaptive options”](/momentum/3/3-ad/ad-options#adaptive-options-table).

5.  If you wish to use bounce sweep rules you must add the bounce_classifier_override module to your configuration. You can also assign custom codes to specific bounces and send alerts based on these custom codes, but this is not a requirement. Likewise, add the feedback loop module to enable feedback loop sweep rules.

6.  If you have made the changes manually, be sure to apply them by issuing the **config reload**        command on the system console (or by restarting the ecelerity process).

7.  Set adaptive options in the appropriate scope. For a complete list of the options that affect the adaptive module see [*Adaptive Options*](/momentum/3/3-ad/ad-options) .

    Alerting statistics (used by sweep rules) are implemented using replicated named audit series. For this reason the inbound_audit module must be configured. This module is described in the [inbound_audit Module](/momentum/3/3-reference/3-reference-modules-inbound-audit).

8.  Add the following `replicate "metrics"` stanza to your cluster module configuration. Typically this module is configured in the `ecelerity-cluster.conf` file.

    ```
    cluster {
      ...
      replicate "metrics" {
        parameters="audit_series"
      }
    }
    ```

    The `metrics` replication stanza maintains cluster-wide, time-series views of the status of adaptive parameters across the cluster.

    For more information about replication and the cluster module See [Data Replication](/momentum/3/3-reference/3-reference-cluster-config-replication).

9.  If your bindings have established a good reputation, you should use the **adaptive warmup *`binding`* [*`age`*]**                              command to inform AD how old each binding is, so that it doesn't scale back your shaping parameters for IP Warmup. For more information about the adaptive system console commands see [adaptive Management using System Console Commands](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.console).

10.  Configure sweep rules. This topic is discussed in [*Sweep Rules – Configuring Bounce and FBL Behavior*](/momentum/3/3-ad/ad-rules-sweep-rules) .

### Note

The adaptive module only takes action if there is a default value for a specific setting. The default value can be specified in either the `ecelerity.conf` file or the `adaptive_rules.lua` file (or your own custom Lua file). If no default value is defined, no action is taken. The `adaptive_rules.lua` file is discussed in [*Custom Rules*](/momentum/3/3-ad/ad-custom-rules) .