---
lastUpdated: "03/26/2024"
title: "tlsa_expire_interval"
description: "tlsa expire interval how often to check for domains with expired DANE TLSA record information dns tlsa expire interval"
---

<a name="conf.ref.tlsa_expire_interval"></a> 
## Name

tlsa_expire_interval — how often to check for domains with expired DANE TLSA information

## Synopsis

`tlsa_expire_interval = 120`

## Description

How often the garbage collector should check for domains with expired DANE TLSA record entries and remove them.  This information is normally refreshed during regular DNS record refresh, but if domains have not been used in a long time, this will remove those unneeded entries.

The default is `3600` seconds.

## Scope

`tlsa_expire_interval` is valid in the global scope.