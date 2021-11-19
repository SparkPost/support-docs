---
lastUpdated: "03/26/2020"
title: "Using the System Console"
description: "There are system console commands specific to the adaptive module that are useful for troubleshooting adaptive suspensions Show suspended deliveries Pass in parameters to view suspended deliveries from a specific binding to a specific domain adaptive list Show the values of the shaping parameters Again you may specify particular binding..."
---

There are system console commands specific to the adaptive module that are useful for troubleshooting:

*   **adaptive suspensions**             – Show suspended deliveries. Pass in parameters to view suspended deliveries from a specific binding to a specific domain.

*   **adaptive list**      – Show the values of the shaping parameters. Again, you may specify particular binding and domain pairings

*   **adaptive reset**       – Clear the values of the shaping parameters. You must specify a particular binding and domain pairing.

*   **adaptive rules**       – Show the adaptive rules that are in effect. You must specify a particular binding and domain pairing.

For more information about these commands (and a complete list of the commands available) see [adaptive Management using Console Commands](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.console).

The various system console **cache** commands can be helpful for adjusting adaptive cache options. These commands are:

*   [cache list](/momentum/3/3-reference/3-reference-console-commands-cache-list)

*   [cache statistics](/momentum/3/3-reference/3-reference-console-commands-cache-stats)

*   [cache stat](/momentum/3/3-reference/3-reference-console-commands-cache-stat)

Use the **cache stats**       command to determine the effectiveness of the `binding_domain_cache_size` and the `adaptive_cache_ttl` option settings. Both of these options are adaptive module options and are documented in [Options Valid in the adaptive Module Scope (3.3)](https://support.messagesystems.com/docs/web-ref/modules.adaptive#modules.adaptive.options.changes.3.3).

Depending on the number of bindings in your configuration and the number of domains being delivered to, the default value for the `binding_domain_cache_size` option may be too small. You can determine if this is the case by checking the cache statistics from the system console. Access the console with the command **`/opt/msys/ecelerity/bin/ec_console`**. Issue the **cache stats**       command and you should see output similar to the following:

```
05:40:31 /tmp/2025> cache stats
cache name                      lookups %                  deletions %
elts  hit miss pend    total  inserts man  ttl lru  total
---------------------- ----- -------------------- -------- -------------
adaptive_lookup
10000  42   58  0      7649361 651234   0   100 0   523487
```

`elts` identifies the number of elements in the cache, `ttl` the time to live and `lru` (least-recently-used) indicates the items evicted due to the cache being full. In this case the cache hit rate is only 42% and deletions by TTL is 100%; this means an old entry must be deleted in order to insert a new one.

Change the `adaptive_cache_size` to `100000` in the following way:

`05:45:31 /tmp/2025> config set adaptive adaptive_cache_size 100000`

Checking the cache statistics again shows:

```
06:45:42 /tmp/2025> cache stats
cache name                      lookups %                  deletions %
elts  hit miss pend   total  inserts man ttl lru  total
---------------------- ----- -------------------- -------- -------------
adaptive_lookup
100000  92   8   0   9033111 731760   0  20  80   645041
```

It is better to see more cache entries timing out due to TTL than being evicted due to the cache being full (lru). The better the cache hit rate, the faster the lookup of the adaptive-tuned configuration parameters will be.

There is no "magic" number that you can set this option to, but once you have satisfactory results make the change permanent by setting `adaptive_cache_size` in your configuration file.

### Note

If you reduce the cache size you will have to restart ecelerity for the change to take effect.