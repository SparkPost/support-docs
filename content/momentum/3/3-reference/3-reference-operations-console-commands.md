---
lastUpdated: "03/26/2020"
title: "Console Commands"
description: "Besides the commands listed here there are also module specific console commands Links to these commands are listed in Section 13 3 Module Specific Console Commands You can also create custom commands as described at Section 4 2 12 Custom Console Commands Preceding a command with xml will output the..."
---

Besides the commands listed here, there are also module-specific console commands. Links to these commands are listed in [“Module-Specific Console Commands”](/momentum/3/3-reference/module-specific-console-commands). You can also create custom commands as described at [“Custom Console Commands”](/momentum/3/3-reference/3-reference-operations-console-commands#operations.console.lua).

### Note

Preceding a command with `xml` will output the results in XML format.

### <a name="idp2472208"></a> Online Configuration Administration

*   [config](/momentum/3/3-reference/3-reference-console-commands-config)

*   [module](/momentum/3/3-reference/3-reference-console-commands-module)

*   [write config](/momentum/3/3-reference/3-reference-console-commands-write-config)

### <a name="idp2477696"></a> Information Summary

*   [sp_async](/momentum/3/3-reference/3-reference-console-commands-sp-async)

*   [binding summary](/momentum/3/3-reference/3-reference-console-commands-binding-summary)

*   [domain](/momentum/3/3-reference/3-reference-console-commands-domain)

*   [summary](/momentum/3/3-reference/3-reference-console-commands-summary)

*   [summary reset](/momentum/3/3-reference/3-reference-console-commands-summary-reset)

*   [signing_stats](/momentum/3/3-reference/3-reference-console-commands-signing-stats)

*   [signing_stats reset](/momentum/3/3-reference/3-reference-console-commands-signing-stats-reset)

*   [threads](/momentum/3/3-reference/3-reference-console-commands-threads)

*   [unlink stats](/momentum/3/3-reference/3-reference-console-commands-unlink-stats)

### <a name="idp2491056"></a> Queue Size Reporting

*   [active](/momentum/3/3-reference/3-reference-console-commands-active)

*   [binding active](/momentum/3/3-reference/3-reference-console-commands-binding-active)

*   [binding delayed](/momentum/3/3-reference/3-reference-console-commands-binding-delayed)

*   [delayed](/momentum/3/3-reference/3-reference-console-commands-delayed)

### <a name="idp2497856"></a> Queue Administration per Domain

*   [fail domain](/momentum/3/3-reference/3-reference-console-commands-fail-domain)

*   [fail domain quiet](/momentum/3/3-reference/3-reference-console-commands-fail-domain-quiet)

*   [flush domain](/momentum/3/3-reference/3-reference-console-commands-flush-domain)

*   [rebind](/momentum/3/3-reference/3-reference-console-commands-rebind)

*   [reroute queue](/momentum/3/3-reference/3-reference-console-commands-reroute-queue)

*   [showqueue](/momentum/3/3-reference/3-reference-console-commands-showqueue)

### <a name="idp2507296"></a> Queue Administration per Binding per Domain

*   [binding flush domain](/momentum/3/3-reference/3-reference-console-commands-binding-flush-domain)

*   [binding fail domain](/momentum/3/3-reference/3-reference-console-commands-binding-fail-domain)

*   [binding fail domain quiet](/momentum/3/3-reference/3-reference-console-commands-binding-fail-domain-quiet)

*   [rebind](/momentum/3/3-reference/3-reference-console-commands-rebind)

*   [showqueue](/momentum/3/3-reference/3-reference-console-commands-showqueue)

### <a name="idp2515456"></a> Message Administration

*   [message details](/momentum/3/3-reference/3-reference-console-commands-message-details)

*   [message fail](/momentum/3/3-reference/3-reference-console-commands-message-fail)

*   [message fail quiet](/momentum/3/3-reference/3-reference-console-commands-message-fail-quiet)

*   [message retry](/momentum/3/3-reference/3-reference-console-commands-message-retry)

*   [spool_in](/momentum/3/3-reference/3-reference-console-commands-spool-in)

### <a name="idp2523584"></a> Connections Reporting

*   [count](/momentum/3/3-reference/3-reference-console-commands-count)

*   [show inbound](/momentum/3/3-reference/3-reference-console-commands-show-inbound)

*   [show outbound](/momentum/3/3-reference/3-reference-console-commands-show-outbound)

### <a name="idp2529072"></a> Memory Usage Reporting

*   [memory](/momentum/3/3-reference/3-reference-console-commands-memory)

### <a name="idp2531936"></a> Log Information and Manipulation

*   [paniclog](/momentum/3/3-reference/3-reference-console-commands-paniclog)

*   [reopen logs](/momentum/3/3-reference/3-reference-console-commands-reopen-logs)

### <a name="idp2536144"></a> Utilities

*   [dig](/momentum/3/3-reference/3-reference-console-commands-dig)

*   [dns_cache](/momentum/3/3-reference/3-reference-console-commands-dns-cache)

*   [help](/momentum/3/3-reference/3-reference-console-commands-help)

*   [\pager](/momentum/3/3-reference/3-reference-console-commands-pager)

*   [pid](/momentum/3/3-reference/3-reference-console-commands-pid)

*   [refresh domain](/momentum/3/3-reference/3-reference-console-commands-refresh-domain)

*   [spool import](/momentum/3/3-reference/3-reference-console-commands-spool-import)

*   [spool import_poll](/momentum/3/3-reference/3-reference-console-commands-spool-import-poll)

*   [sysinfo](/momentum/3/3-reference/3-reference-console-commands-sysinfo)

*   [tls](/momentum/3/3-reference/3-reference-console-commands-tls)

*   [trace smtp](/momentum/3/3-reference/3-reference-console-commands-trace-smtp)

*   [version](/momentum/3/3-reference/3-reference-console-commands-version)

### <a name="idp2553376"></a> Shutting Down

*   [shutdown](/momentum/3/3-reference/3-reference-console-commands-shutdown)

### <a name="operations.console.lua"></a> Custom Console Commands

In addition to the built-in console commands it is possible to create your own commands using the Lua function [msys.registerControl](/momentum/3/3-reference/3-reference-lua-ref-msys-register-control). If, for example, you have domains that are heavily throttled and discard messages that are over the limit, you can create a console command to push emails for these domains into the delayed queue:

<a name="operations.console.lua.registerControl"></a> 


```
require("msys.core");

local function delay_domain(cc)
  local domain = cc.argv[1];
  local dr = msys.core.dns_get_domain(domain);

  if dr ~= nil then
    print ("Domain delayed as requested");
    msys.core.mail_queue_delay_domain(dr, "451 4.4.1 [internal] manually delayed domain");
  end
end

msys.registerControl("delay_domain", delay_domain);
```

This code creates the ec_console command: **delay_domain *`domain`***           . For instructions on inplementing Lua scripts see [“scriptlet – Module”](/momentum/3/3-reference/3-reference-modules-scriptlet).