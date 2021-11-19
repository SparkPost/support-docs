---
lastUpdated: "03/26/2020"
title: "vctx:remove_recipient"
description: "vctx remove recipient Remove an address from the recipient list vctx remove recipient address Removes an address which may be a table representing multiple addresses from the recipient list If used in an invalid phase after rcptlist final this function raises an error Enable this function with the statement require..."
---

<a name="lua.ref.vctx_remove_recipient"></a> 
## Name

vctx:remove_recipient — Remove an address from the recipient list

<a name="idp19253952"></a> 
## Synopsis

`vctx:remove_recipient(address);`

`address: string`<a name="idp19256880"></a> 
## Description

Removes an address (which may be a table representing multiple addresses) from the recipient list. If used in an invalid phase (after rcptlist final), this function raises an error.

Enable this function with the statement `require('msys.extended.vctx');`.