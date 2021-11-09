---
lastUpdated: "03/26/2020"
title: "alias – Alias Expansion Module"
description: "The alias module lets you rewrite the recipient addresses of messages passing through Momentum It is similar in spirit to sendmail's etc aliases but alias expansions can be stored in any backend supported by Momentum's datasource layer Section 14 30 ds core Datasource Query Core When the alias module is..."
---

<a name="idp17587232"></a> 

The alias module lets you rewrite the recipient addresses of messages passing through Momentum. It is similar in spirit to sendmail's `/etc/aliases`, but alias expansions can be stored in any backend supported by Momentum's datasource layer. [“ds_core – Datasource Query Core”](/momentum/3/3-reference/3-reference-modules-ds-core)

When the alias module is loaded, alias expansion is disabled by default. The `Alias_Schemes` option, a list that can be specified in the Domain or Global scopes, enables the list of schemes that will be used to expand recipient addresses in that domain in decreasing order of preference. Expansion of a recipient address stops after the first alias scheme that yields a non-empty expansion for that address; the original address is replaced in the recipient list by the address(es) in the expansion. To prevent loops, a recipient address that has been expanded cannot be added back to the list of recipients as the result of expanding another recipient address.

### <a name="idp17591904"></a> Configuration

A Scheme is specified in an alias module. The mandatory `cache` parameter specifies the datasource cache that will be used as the backend, in this example `aliasdb`. The mandatory `query` parameter specifies the query string that will be used. The `map` dictionary specifies the alias map used to construct the bind variables used together with the query string; though technically optional, it is almost certainly necessary. The optional `column` parameter specifies the name of the column containing the results of the expansion; it may be omitted if the query only returns a single column. All the values (if any) in the results column must be valid email addresses.

```
alias "alias1" {
  Scheme "myscheme" {
    query = "SELECT expansion FROM foo WHERE address = :address"
    cache = "aliasdb"
    map = [
        address = "%{rcptto}"
      ]
  }
}
Datasource "aliasdb" {
  uri = ( "sqlite:/path/to/sqlite.db" )
}
Domain "example.com" {
  Alias_Schemes = ( "myscheme" )
}
```

A map dictionary is specified by the `map` option. It may contain any number of arbitrarily named variables; macro expansion is performed on these, with the substrings `%{localpart}`, `%{domain}` and `%{rcptto}` being replaced by the local part, domain and complete address of the recipient being expanded, respectively. No other substrings of the form `%{...}` are allowed.

Within the desired domain, the `Alias_Schemes` option is set to the Scheme name defined within the alias module.

### <a name="idp17601200"></a> See Also

[alias_schemes](/momentum/3/3-reference/3-reference-conf-ref-alias-schemes) and [“ds_core – Datasource Query Core”](/momentum/3/3-reference/3-reference-modules-ds-core).