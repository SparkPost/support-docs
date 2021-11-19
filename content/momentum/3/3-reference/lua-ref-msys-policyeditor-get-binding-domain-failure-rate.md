---
lastUpdated: "03/26/2020"
title: "msys.policyeditor.get_binding_domain_failure_rate"
description: "msys policyeditor get binding domain failure rate Get the failure rate for a particular domain and binding combination msys policyeditor get binding domain failure rate ctx vars params Gets the failure rate for a particular domain and binding combination The function only returns a value if it is statistically valid..."
---

<a name="lua.ref.msys.policyeditor.get_binding_domain_failure_rate"></a> 
## Name

msys.policyeditor.get_binding_domain_failure_rate — Get the failure rate for a particular domain and binding combination

<a name="idp24842640"></a> 
## Synopsis

`msys.policyeditor.get_binding_domain_failure_rate(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```
<a name="idp24845392"></a> 
## Description

Gets the failure rate for a particular domain and binding combination. The function only returns a value if it is "statistically valid"that is, since the function returns a percentage, it will only return a non-zero value if the divisor is 100 or more.

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

Defined parameters for `params` are:

*   `binding` the name of the binding

*   `domain` the domain name

*   `period` the period for which statistics are valid

Returns true if the assignment was successful, or false otherwise. A false return value usually indicates that there are no suitable bindings on this node.