---
lastUpdated: "03/26/2020"
title: "msgpart:unlink"
description: "msgpart unlink Remove the part and its children from the MIME tree msgpart unlink Removes the part and its children from the MIME tree Because this function is in the msys core namespace an explicit require msys core is not necessary..."
---

<a name="lua.ref.msgpart_unlink"></a> 
## Name

msgpart:unlink — Remove the part (and its children) from the MIME tree

<a name="idp15969552"></a> 
## Synopsis

`msgpart:unlink();`

<a name="idp15971792"></a> 
## Description

Removes the part (and its children) from the MIME tree.

Because this function is in the `msys.core` namespace, an explicit `require('msys.core')` is not necessary.