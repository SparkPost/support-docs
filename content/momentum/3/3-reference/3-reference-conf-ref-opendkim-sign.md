---
lastUpdated: "03/26/2020"
title: "opendkim_sign"
description: "opendkim sign whether or not to enable Open DKIM signing opendkim sign true Use this option to enable or disable Open DKIM signing For more information about Open DKIM see Open DKIM To use Open DKIM you must also configure opendkim Configuration Change This is option is available as of..."
---

<a name="conf.ref.opendkim_sign"></a> 
## Name

opendkim_sign — whether or not to enable OpenDKIM signing

## Synopsis

`opendkim_sign = "true"`

<a name="idp10493664"></a> 
## Description

Use this option to enable or disable OpenDKIM signing. For more information about OpenDKIM see [OpenDKIM](http://www.opendkim.org/). To use OpenDKIM you must also configure [opendkim](/momentum/3/3-reference/3-reference-modules-opendkim).

**Configuration Change. ** This is option is available as of version 3.6.

The default value for this option is `true`.

### Note

You cannot sign using both OpenDKIM and DKIM; you must use one or the other.

<a name="idp10499696"></a> 
## Scope

`opendkim_sign` is valid in the binding, binding_group, domain and global scopes.

<a name="idp10501296"></a> 
## See Also

[“dkim – DomainKeys Identified Mail Signatures”](/momentum/3/3-reference/modules-dkim) and [“opendkim – OpenDKIM module”](/momentum/3/3-reference/3-reference-modules-opendkim)