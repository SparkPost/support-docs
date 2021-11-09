---
lastUpdated: "03/26/2020"
title: "crypto_lock_method"
description: "crypto lock method set the locking method used by the TLS layer Crypto Lock Method EC SSL SPINLOCK Crypto Lock Method EC SSL MUTEX Crypto Lock Method EC SSL DEFAULTLOCK This option affects how thread safe locking is performed You should not need to change the default value of this..."
---

<a name="config.crypto_lock_method"></a> 
## Name

crypto_lock_method — set the locking method used by the TLS layer

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