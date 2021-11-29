---
lastUpdated: "03/26/2020"
title: "allow_trailing_whitespace_in_commands"
description: "allow trailing whitespace in commands permit trailing whitespace at the end of an SMTP command allow trailing whitespace in commands false When set to true this directive instructs Momentum to ignore white spaces found between an address and angle brackets in the RCPT TO or MAIL FROM commands for example..."
---

<a name="conf.ref.allow_trailing_whitespace_in_commands"></a> 
## Name

allow_trailing_whitespace_in_commands — permit trailing whitespace at the end of an SMTP command

## Synopsis

`allow_trailing_whitespace_in_commands = false`

<a name="idp23429168"></a> 
## Description

When set to true, this directive instructs Momentum to ignore white spaces found between an address and angle brackets in the RCPT TO or MAIL FROM commands, for example `< user@company.com >`.

The default value is `false`.

<a name="idp23432512"></a> 
## Scope

`allow_trailing_whitespace_in_commands` is valid in the global, listener, listen, peer, pathway_group, and pathway scopes.