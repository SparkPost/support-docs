---
lastUpdated: "03/26/2020"
title: "vctx:recipient_list"
description: "vctx recipient list Return or set the current recipient list vctx recipient list addresses If called with no arguments this function returns the current recipient list If passed an addresses parameter this replaces the current recipient list The parameter may be a single address or a table of addresses This..."
---

<a name="lua.ref.vctx_recipient_list"></a> 
## Name

vctx:recipient_list — Return or set the current recipient list

<a name="idp19240304"></a> 
## Synopsis

`vctx:recipient_list(addresses);`

`addresses: string, optional`<a name="idp19243248"></a> 
## Description

If called with no arguments, this function returns the current recipient list. If passed an `addresses` parameter, this replaces the current recipient list. The parameter may be a single address or a table of addresses.

### Warning

This function should **not** be called in the validate_rcptto phase.

Enable this function with the statement `require('msys.extended.vctx');`.

<a name="idp19248352"></a> 
## See Also

[“vctx_add_recipient example”](/momentum/4/lua/ref-vctx-add-recipient#lua.ref.vctx_add_recipient.example)