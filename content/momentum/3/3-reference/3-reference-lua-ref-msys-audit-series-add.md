---
lastUpdated: "03/26/2020"
title: "msys.audit_series.add"
description: "msys audit series add Adjust the counter for the current time window of a named series msys audit series add name options Adjusts the counter for the current time window of a named series options can be a table that provides the following additional parameters that affect the adjustment count..."
---

<a name="lua.ref.msys.audit_series.add"></a> 
## Name

msys.audit_series.add — Adjust the counter for the current time window of a named series

<a name="idp25974848"></a> 
## Synopsis

`msys.audit_series.add(name, options);`

```
name: string
options: table, optional
```
<a name="idp25977504"></a> 
## Description

Adjusts the counter for the current time window of a named series. `options` can be a table that provides the following additional parameters that affect the adjustment:

*   `count` the amount to adjust by. Defaults to `1`, but can be any number, positive or negative.

*   `key` the interpretation depends on the series type

**As of version 3.4, this feature supports IPv6.**

IPv6 addresses are much more flexible than IPv4 addresses in terms of their formatting options. They also use a different delimiter character than IPv4 addresses (a colon instead of a period). This means that in certain contexts, an IPv6 address can create parsing ambiguities.

The accepted convention is to require that, in circumstances where a configuration parameter can also contain something other than an IP address, that an IPv6 address must be enclosed in square brackets. In practical terms, this means that things like the `gateway`, `routes` and `Listen` options must have IPv6 addresses enclosed in brackets. Others, such as `peer`, `relay_hosts` and `prohibited_hosts` do not require the IPv6 address in brackets.

If `options` is not a table, then it is assumed to be the value for the key parameter.

For a CIDR series, the key is interpreted as an IP specifying the address of interest. If `accept_construct` is used as the key, the remote IP of the accept construct is used. If not specified, the current connected IP is assumed. For string series, the key is the string key to associate the count with. If it is not specified, an error is thrown.

For a code example see [msys.audit_series.define](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-series-define).

Enable this function with the statement `require('msys.audit_series');`.

<a name="idp25992208"></a> 
## See Also

[msys.audit_series.count](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-series-count), [msys.audit_series.define](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-series-define), [msys.audit_series.remove_item](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-series-remove-item), [Use_IPv6](/momentum/3/3-reference/3-reference-conf-ref-use-ipv-6), [“inbound_audit – Inbound traffic analytics”](/momentum/3/3-reference/3-reference-modules-inbound-audit)