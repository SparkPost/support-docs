---
lastUpdated: "03/26/2020"
title: "authz id"
description: "authz id display the id of the current user authz id This command displays the id of the current system console user in XML format any roles associated with that user are also displayed If you are logged in as a user named tom who belongs to the group users..."
---

<a name="console_commands.authz_id"></a> 
## Name

authz id — display the id of the current user

## Synopsis

`authz id`

<a name="idp12395136"></a> 
## Description

This command displays the id of the current system console user in XML format; any roles associated with that user are also displayed.

If you are logged in as a user named `tom` who belongs to the group `users`, you should see the following output:

```
<AuthzInformation username="tom">
  <Roles>
    <Role name="users"/>
  </Roles>
</AuthzInformation>
```
<a name="idp11701632"></a> 
## See Also

[authz roles list](/momentum/4/console-commands/authz-roles-list)