---
lastUpdated: "03/26/2020"
title: "allow_trailing_whitespace_in_commands"
description: "allow trailing whitespace in commands permit trailing whitespace at the end of an SMTP command allow trailing whitespace in commands false Configuration Change This feature is available starting from Momentum 3 0 26 When set to true this directive instructs Momentum to ignore white spaces found between an address and..."
---

<a name="conf.ref.allow_trailing_whitespace_in_commands"></a> 
## Name

allow_trailing_whitespace_in_commands — permit trailing whitespace at the end of an SMTP command

## Synopsis

`allow_trailing_whitespace_in_commands = false`

<a name="idp7483888"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.26.

When set to true, this directive instructs Momentum to ignore white spaces found between an address and angle brackets in the RCPT TO or MAIL FROM commands, for example `< user@company.com >`.

The default value for this option is `false`.

<a name="idp7489824"></a> 
## Scope

`allow_trailing_whitespace_in_commands` is valid in the global, listener, listen, peer, pathway_group and pathway scopes.