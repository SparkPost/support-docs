---
lastUpdated: "03/26/2020"
title: "is_true"
description: "is true test if a value is true is true variable is true variable 0 is true variable key The is true is intended to provide a simple logical test on the value of a variable Example 16 113 is true example..."
---

<a name="sieve.ref.is_true"></a> 
## Name

is_true — test if a value is "true"

## Synopsis

`is_true` { *`$variable`* }

`is_true` { *`$variable[0]`* }

`is_true` { *`$variable["key"]`* }

<a name="idp30994624"></a> 
## Description

The `is_true` is intended to provide a simple logical test on the value of a variable.

<a name="example.is_true"></a> 


```
$result = ds_fetch "mydatabase"
  "select allow from senders where sender = ?"
      ["%{mailfrom_localpart}@%{mailfrom_domain}"];
if is_true $result {
  ec_log "Allowed mail from %{mailfrom_localpart}@%{mailfrom_domain}";
} else {
  ec_action 550 "You're not allowed";
}
```