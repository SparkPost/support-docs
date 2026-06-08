---
lastUpdated: "06/03/2026"
title: "crypto_lock_method"
description: "crypto lock method set the locking method used by the TLS layer Crypto Lock Method EC SSL SPINLOCK Crypto Lock Method EC SSL MUTEX Crypto Lock Method EC SSL DEFAULTLOCK This option affects how thread safe locking is performed You should not need to change the default value of this..."
---

<a name="config.crypto_lock_method"></a> 
## Name

crypto_lock_method — set the locking method used by the TLS layer

> **NOTE: This option was REMOVED in Momentum 5.3.0 and is no longer supported.** OpenSSL 1.1.1 and later (the supported range, from 1.1.1 on RHEL 8 through the 3.5.x series) is internally thread-safe; the `CRYPTO_set_locking_callback()`-based locking that this option configured was retired from OpenSSL itself. The option is silently ignored; remove it from `ecelerity.conf`. This page is retained for reference on releases prior to 5.3.0. See also [ssl_lock_method](/momentum/4/config/ssl-lock-method).

## Synopsis

`Crypto_Lock_Method = "EC_SSL_SPINLOCK"`

`Crypto_Lock_Method = "EC_SSL_MUTEX"`

`Crypto_Lock_Method = "EC_SSL_DEFAULTLOCK"`

<a name="idp24011056"></a> 
## Description

This option affects how thread-safe locking is performed. You should not need to change the default value of this setting.

The default value for option is `EC_SSL_DEFAULTLOCK`.

<a name="idp24013872"></a> 
## Scope

`crypto_lock_method` is valid in the global scope.