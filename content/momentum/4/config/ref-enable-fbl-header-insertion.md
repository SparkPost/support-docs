---
lastUpdated: "03/26/2020"
title: "enable_fbl_header_insertion"
description: "enable fbl header insertion enable or disable fbl header insertion enable fbl header insertion enabled This option is used to enable or disable feedback loop header insertion Note that for header insertion to work the fbl module option Auto log must also be set to true This option is valid..."
---

<a name="conf.ref.enable_fbl_header_insertion"></a> 
## Name

enable_fbl_header_insertion — enable or disable fbl header insertion

## Synopsis

`enable_fbl_header_insertion = "enabled"`

<a name="idp24479984"></a> 
## Description

This option is used to enable or disable feedback loop header insertion. Note that for header insertion to work, the fbl module option, `Auto_log`, must also be set to `true`.

<a name="idp24482832"></a> 
## Scope

This option is valid in the global, binding, binding_group, and domain scopes.

<a name="idp24484704"></a> 
## See Also

[“fbl - Feedback Loop”](/momentum/4/modules/fbl)