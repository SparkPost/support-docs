---
lastUpdated: "03/26/2020"
title: "authz roles list"
description: "authz roles list display the currently defined roles authz roles list This command displays all the defined roles in XML format In the web console roles are know as groups Execute this command and you should see output similar to the following authz id..."
---

<a name="console_commands.authz_roles_list"></a> 
## Name

authz roles list — display the currently defined roles

## Synopsis

`authz roles list`

<a name="idp15347808"></a> 
## Description

This command displays all the defined roles in XML format. In the web console, roles are know as `groups`.

Execute this command and you should see output similar to the following:

```
<Roles>
 <Role name="users"/>
 <Role name="admin"/>
 <Role name="ecuser"/>
 <Role name="fred"/>
</Roles>
```
<a name="idp15351664"></a> 
## See Also

[authz id](/momentum/3/3-reference/3-reference-console-commands-authz-id)