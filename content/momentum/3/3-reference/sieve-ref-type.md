---
lastUpdated: "03/26/2020"
title: "type"
description: "type test the type of the value in a Sieve variable type variable string Some actions such as ec config can return more than one type of value Use this test to check the type of the value in a Sieve variable Possible types are string number stringlist hash tag..."
---

<a name="sieve.ref.type"></a> 
## Name

type — test the type of the value in a Sieve variable

## Synopsis

`type` { *`variable`* } { *`string`* }

<a name="idp31324896"></a> 
## Description

Some actions (such as `ec_config`) can return more than one type of value. Use this test to check the type of the value in a Sieve variable. Possible types are:

*   "string"

*   "number"

*   "stringlist"

*   "hash"

*   "tag"

<a name="example.test"></a> 


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