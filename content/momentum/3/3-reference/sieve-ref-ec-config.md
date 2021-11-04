---
lastUpdated: "03/26/2020"
title: "ec_config"
description: "ec config get Momentum configuration from Sieve ec config get eval anonymous scope name scope name instance name optname This action implements a subset of the console config command Only the get and eval actions are currently supported but otherwise behavior is identical Simple option values are returned as strings..."
---

<a name="sieve.ref.ec_config"></a> 
## Name

ec_config — get Momentum configuration from Sieve

## Synopsis

`ec_config` { "get" | "eval" } [ *`<anonymous scope name>`*              | *`<scope name>`*        *`<instance name>`*        ...] { *`optname`* }

<a name="idp29290944"></a> 
## Description

This action implements a subset of the console config command. Only the get and eval actions are currently supported, but otherwise behavior is identical. Simple option values are returned as strings, options that would be specified in parentheses in the config file (such as lists or ACLs) are returned as stringlists, and dictionary options are returned as hashes.

<a name="example.ec_config"></a> 


```
$opt = ec_config "get" "Debug_Flags" "DEBUG";
# first, see if the option was set
if type :is $opt "stringlist" {
  # now check the option value
  $dummy = join "," $opt;
  if ec_test $dummy "SMTP" {
    ec_log "SMTP debugging is turned on";
  }
}
```