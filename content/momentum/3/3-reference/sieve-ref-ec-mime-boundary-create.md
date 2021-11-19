---
lastUpdated: "03/26/2020"
title: "ec_mime_boundary_create"
description: "ec mime boundary create return a string to be used as a boundary when creating a MIME message ec mime boundary create ec mime boundary create returns a string that can be used as a boundary when creating a MIME message It doesn't include the required before or after the..."
---

<a name="sieve.ref.ec_mime_boundary_create"></a> 
## Name

ec_mime_boundary_create — return a string to be used as a boundary when creating a MIME message

## Synopsis

`ec_mime_boundary_create`

<a name="idp30271696"></a> 
## Description

`ec_mime_boundary_create` returns a string that can be used as a boundary when creating a MIME message. It doesn't include the `--` required before or after the boundary string.

Please see [ec_rfc3464_delivery_status](/momentum/3/3-reference/sieve-ref-ec-rfc-3464-delivery-status) for an usage example.