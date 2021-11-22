---
lastUpdated: "03/26/2020"
title: "ssl_lock_method"
description: "ssl lock method the SSL lock method ssl lock method mutex This option specifies the SSL lock method Legal values for this option are mutex spinlock and default This option should be changed in consultation with messagesystems support only if SSL performance issues are encountered with the default method Changing..."
---

<a name="conf.ref.ssl_lock_method"></a> 
## Name

ssl_lock_method — the SSL lock method

## Synopsis

`ssl_lock_method = "mutex"`

<a name="idp11877792"></a> 
## Description

This option specifies the SSL lock method. Legal values for this option are `mutex`, `spinlock` and `default`. This option should be changed in consultation with messagesystems support only if SSL performance issues are encountered with the default method.

Changing the value of this option at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

As of version 3.0.17, the default value for this option is `mutex`.

<a name="idp11883520"></a> 
## Scope

`ssl_lock_method` is valid in the global scope.