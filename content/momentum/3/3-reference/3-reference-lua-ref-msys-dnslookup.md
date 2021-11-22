---
lastUpdated: "03/26/2020"
title: "msys.dnsLookup"
description: "msys dns Lookup Perform a DNS lookup msys dns Lookup name recordtype options If recordtype is not specified it defaults to A Otherwise recordtype is a string from the following list A Lookup the I Pv 4 address AAAA Lookup the I Pv 6 address TXT Lookup a TXT record..."
---

<a name="lua.ref.msys.dnslookup"></a> 
## Name

msys.dnsLookup — Perform a DNS lookup

<a name="idp24435120"></a> 
## Synopsis

`msys.dnsLookup(name, recordtype, options);`

```
name: string
recordtype: string (optional)
options: table (optional)
```
<a name="idp24437872"></a> 
## Description

If `recordtype` is not specified, it defaults to `A`. Otherwise, `recordtype` is a string from the following list:

*   `A` Lookup the IPv4 address

*   `AAAA` Lookup the IPv6 address

*   `TXT` Lookup a TXT record

*   `MX` Lookup an MX record

*   `PTR` Lookup a PTR record

*   `NS` Lookup an NS record

### Warning

If `recordtype` is passed an invalid value, then an exception is thrown. In this case, the inbound session will return a 421 error.

`options` is a table with the following keys:

*   `priority` can be either true or false. If unspecified, false is assumed.

*   `server` optional alternate DNS server to query instead of the system default resolver.

On success, the return value is a table containing the results.

For records with a preference value, if `priority` is set to `true`, the values returned are themselves tables with the first element being the preference value and the second element the string value. Otherwise, the values returned are just the string values. Regardless of the value of the `priority` setting, the returned records are ordered based on their preference, with the "best" record first. For other records, the values are simply string values that are ordered as they appear in the DNS response. For a failed lookup, two values are returned:

*   `nil` to indicate error

*   `errmsg` the error message

The idiom for performing a DNS lookup is:

```
local results, errmsg, result;

results, errmsg = msys.dnsLookup('messagesystems.com', 'A');

if results == nil then
  print("ERROR: " .. errmsg);
  return;
end

if results ~= nil then
    for k,v in ipairs(results) do
      print("key: " .. k .. "and value: " .. v)
    end
end
```

### Note

Results of `msys.dnsLookup()` invocations in your policy scripts can also be queried from the system console by using `dns_cache stats`.

Because this function is in the `msys` namespace, an explicit `require('msys')` is not necessary.

<a name="idp24463776"></a> 
## See Also

[dns_cache](/momentum/3/3-reference/3-reference-console-commands-dns-cache).