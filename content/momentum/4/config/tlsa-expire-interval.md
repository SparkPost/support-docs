---
lastUpdated: "06/01/2024"
title: "tlsa_expire_interval"
description: "tlsa expire interval how often to check for expired TLSA DNS records"
---

## Name

tlsa_expire_interval — how often to check for expired TLSA records.

## Synopsis

`tlsa_expire_interval = 3600`

## Description

How often the garbage collector should check for expired TLSA records. During email delivery,
 a related TLSA record will be checked for expiration and removed from memory if expired.
 The purpose of garbage collection controlled by this configuration option is to retire
 the stale TLSA records which are not actively in use.

The default is `3600` seconds.

## Scope

`tlsa_expire_interval` is valid in the global scope.
