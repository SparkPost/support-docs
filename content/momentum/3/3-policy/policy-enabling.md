---
lastUpdated: "03/26/2020"
title: "Enabling the Policy Scripts"
description: "As of version 3 2 default Lua policy scripts are included with Momentum After installing Momentum you can configure policy by editing the opt msys ecelerity etc sample configs dp config lua file This document describes the available options notes their default status and explains the policies that they enforce..."
---

As of version 3.2, default Lua policy scripts are included with Momentum. After installing Momentum you can configure policy by editing the `/opt/msys/ecelerity/etc/sample-configs/dp_config.lua` file. This document describes the available options, notes their default status and explains the policies that they enforce.

The built-in Lua policy scripts are not enabled by default. To use them you must add a `default_policy.conf` file to your configuration. To do this make use of the `/opt/msys/ecelerity/etc/sample-configs/default_policy.conf` file. Instructions for adding a configuration file are found in [Best Practices for Adding Configuration Files](/momentum/3/3-reference/conf-adding-configuration-files).

### Note

Since the policy scripts are written in Lua you must enable the scriptlet module. For information about this module see [scriptlet Module](/momentum/3/3-reference/3-reference-modules-scriptlet). The audit series modules are dependent on the inbound_audit module. For information about this module see [inbound_audit Module](/momentum/3/3-reference/3-reference-modules-inbound-audit). The relay authorization configuration is dependent on the auth_ds module. For information about this module see [auth_ds Module](/momentum/3/3-reference/3-reference-modules-auth-ds). The early talker configuration is dependent on the conntrol module. For information about this module see [conntrol Module](/momentum/3/3-reference/3-reference-modules-conntrol).

In addition to enabling the `default_policy.conf` file, you must configure a `dp_config.lua` file. Use the existing `/opt/msys/ecelerity/etc/sample-configs/dp_config.lua` file and save it to a directory under the `/opt/msys/ecelerity/etc/conf/default` directory. Also copy the `/opt/msys/ecelerity/etc/sample-configs/custom_policy.lua` to the same directory as the `dp_config.lua` file. Add these files to the repository as well. For more information about the repository directory structure see [The Momentum Configuration Server: ecconfigd](/momentum/3/3-reference/conf-ecconfigd). This document describes all the configuration options in the `dp_config.lua` file. For your convenience these files are reproduced in [*The `dp_config.lua` and `custom_policy.lua` Files*](/momentum/3/3-policy/policy-appendix) .

In addition to defining connection limits, whitelists and other policy-related items, the default policy scripts can also be used to configure various partner modules. These modules include:

*   [BEIK](/momentum/3/3-reference/3-reference-modules-beik)

*   [Commtouch](/momentum/3/3-reference/3-reference-modules-commtouch)

*   [Cloudmark](/momentum/3/3-reference/3-reference-modules-cloudmark)

*   [Content Scanning Application Programming Interface (CSAPI)](https://support.messagesystems.com/docs/web-ref/modules.csapi)

Enable the modules you intend to use. Note: *The beik and csapi modules are included in the `default_policy.conf` file. The cloudmark and commtouch modules are not.*                                                                                                                     In order to use the default policy scripts, AV modules must be loaded in "passive" mode. For more information see [Module Overview](/momentum/3/3-reference/modules-overview-implicit).