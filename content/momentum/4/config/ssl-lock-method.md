---
lastUpdated: "06/03/2026"
title: "ssl_lock_method"
description: "ssl lock method the SSL lock method SSL Lock Method mutex spinlock This option specifies the SSL lock method This option should be changed in consultation with Message Systems support only if SSL performance issues are encountered with the default method This option can be set to the following mutex..."
---

<a name="config.ssl_lock_method"></a> 
## Name

ssl_lock_method — the SSL lock method

> **NOTE: This option was REMOVED in Momentum 5.3.0 and is no longer supported.** OpenSSL 1.1.1 and later (the supported range, from 1.1.1 on RHEL 8 through the 3.5.x series) is internally thread-safe and no longer uses the application-supplied crypto locking callbacks that this option controlled. The option is silently ignored; remove it from `ecelerity.conf`. This page is retained for reference on releases prior to 5.3.0. See also [crypto_lock_method](/momentum/4/config/crypto-lock-method).

## Synopsis

`SSL_Lock_Method = "mutex|spinlock"`

<a name="idp26651168"></a> 
## Description

This option specifies the SSL lock method. This option should be changed in consultation with Message Systems support only if SSL performance issues are encountered with the default method.

This option can be set to the following:

*   `mutex`

*   `spinlock`

*   `default`

Changing the value of this option at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

The default value for this option is `mutex`.

<a name="idp26659552"></a> 
## Scope

`ssl_lock_method` is valid in the global scope.