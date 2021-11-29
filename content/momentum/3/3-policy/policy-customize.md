---
lastUpdated: "03/26/2020"
title: "Customizing Policy"
description: "To create custom policy adapt the opt msys ecelerity etc sample configs custom policy lua file and move it to a directory under the opt msys ecelerity etc conf directory Add the file to the repository as described in Best Practices for Adding Configuration Files If you do not implement..."
---

To create custom policy, adapt the `/opt/msys/ecelerity/etc/sample-configs/custom_policy.lua` file and move it to a directory under the `/opt/msys/ecelerity/etc/conf` directory. Add the file to the repository as described in [Best Practices for Adding Configuration Files](/momentum/3/3-reference/conf-adding-configuration-files).

### Note

If you do not implement any custom policy, you need not be concerned with this file. However, you will need to comment out the line, `require("custom_policy");` at the top of the `dp_config.lua` file.

For your convenience, `custom_policy.lua` is reproduced in [“The `custom_policy.lua` File”](/momentum/3/3-policy/policy-appendix-custom-policy-lua).

The default policy looks for custom policy in the msys.db_config.custom_policy namespace. That namespace can contain 'pre' or 'post' callouts for the following hookpoints:

*   init

*   validate_connect

*   validate_ehlo

*   validate_mailfrom

*   validate_rcptto

*   validate_data

*   validate_data_spool

*   validate_data_spool_each_rcpt

Simply uncomment the phase you are interested in and add appropriate Lua code. For example to execute commands before the default policy actions in validate_data, you would define the pre_validate_data function, with the same parameters as the validate_data function. You may return msys.core.VALIDATE_DONE to terminate processing for that phase, or msys.core.VALIDATE_CONT to continue. The only exception to the return value semantics is the 'init' function, which must return true if successful, or false if there was a failure.

The `require("custom_policy");` statement appears at the top of the `dp_config.lua` file so if you do not include the `custom_policy.lua` file in the same directory as `dp_config.lua` then you must remove this statement.