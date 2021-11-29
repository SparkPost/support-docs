---
lastUpdated: "03/26/2020"
title: "The custom_policy.lua File"
description: "Custom policy is configured using the custom policy lua file A sample configuration file is found in the opt msys ecelerity etc sample configs directory and is reproduced below If you do not implement any custom policy you need not be concerned with this file However you will need to..."
---

Custom policy is configured using the `custom_policy.lua` file. A sample configuration file is found in the `/opt/msys/ecelerity/etc/sample-configs` directory and is reproduced below. If you do not implement any custom policy, you need not be concerned with this file. However, you will need to comment out the line, `require("custom_policy");` at the top of the `dp_config.lua` file.

```
module("msys.dp_config.custom_policy", package.seeall);

--[[
The default policy looks for custom policy in the
msys.db_config.custom_policy namespace.  That namespace can
contain 'pre' or 'post' callouts for the following hook points:

init
validate_connect
validate_ehlo
validate_mailfrom
validate_rcptto
validate_data
validate_data_spool
validate_data_spool_each_rcpt
validate_set_binding

So, to run before the default policy actions in validate_data,
you would define the pre_validate_data function, with the same
parameters at the validate_data function.  You may return
msys.core.VALIDATE_DONE to terminate processing for that
phase, or msys.core.VALIDATE_CONT to continue.  The only exception
to the return value semantics is the 'init' function, which must
return true if successful, or false if there was a failure.
]]

--
-- function msys.dp_config.custom_policy.pre_init()
--   return true
-- end
--
-- function msys.dp_config.custom_policy.post_init()
--   return true
-- end
--
-- function msys.dp_config.custom_policy.pre_validate_connect(ac, vctx)
--   return msys.core.VALIDATE_CONT;
-- end
--
-- function msys.dp_config.custom_policy.post_validate_connect(ac, vctx)
--   return msys.core.VALIDATE_CONT;
-- end
--
-- function msys.dp_config.custom_policy.pre_validate_ehlo(ehlo_string, ac, vctx)
--   return msys.core.VALIDATE_CONT;
-- end
--
-- function msys.dp_config.custom_policy.post_validate_ehlo(ehlo_string, ac, vctx)
--   return msys.core.VALIDATE_CONT;
-- end
--
-- function msys.dp_config.custom_policy.pre_validate_mailfrom(mailfrom_string, ac, vctx)
--   return msys.core.VALIDATE_CONT;
-- end
--
-- function msys.dp_config.custom_policy.post_validate_mailfrom(mailfrom_string, ac, vctx)
--   return msys.core.VALIDATE_CONT;
-- end
--
-- function msys.dp_config.custom_policy.pre_validate_rcptto(msg, rcptto_string, ac, vctx)
--   return msys.core.VALIDATE_CONT;
-- end
--
-- function msys.dp_config.custom_policy.post_validate_rcptto(msg, rcptto_string, ac, vctx)
--   return msys.core.VALIDATE_CONT;
-- end
--
-- function msys.dp_config.custom_policy.pre_validate_data(msg, ac, vctx)
--   return msys.core.VALIDATE_CONT;
-- end
--
-- function msys.dp_config.custom_policy.post_validate_data(msg, ac, vctx)
--   return msys.core.VALIDATE_CONT;
-- end
--
-- function msys.dp_config.custom_policy.pre_validate_data_spool(msg, ac, vctx)
--   return msys.core.VALIDATE_CONT;
-- end
--
-- function msys.dp_config.custom_policy.post_validate_data_spool(msg, ac, vctx)
--   return msys.core.VALIDATE_CONT;
-- end
--
-- function msys.dp_config.custom_policy.pre_validate_data_spool_each_rcpt(msg, ac, vctx)
--   return msys.core.VALIDATE_CONT;
-- end
--
-- function msys.dp_config.custom_policy.post_validate_data_spool_each_rcpt(msg, ac, vctx)
--   return msys.core.VALIDATE_CONT;
-- end
--
-- function msys.dp_config.custom_policy.pre_validate_set_binding(msg)
--   return msys.core.VALIDATE_CONT;
-- end
--
-- function msys.dp_config.custom_policy.post_validate_set_binding(msg)
--   return msys.core.VALIDATE_CONT;
-- end

-- $Revision: 2874 $
```