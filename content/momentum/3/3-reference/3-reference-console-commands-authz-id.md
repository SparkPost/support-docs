---
lastUpdated: "03/26/2020"
title: "authz id"
description: "authz id display the id of the current user authz id This command displays the id of the current system console user in XML format any roles associated with that user are also displayed You can add roles also known as groups and assign users to these groups from the..."
---

<a name="console_commands.authz_id"></a> 
## Name

authz id — display the id of the current user

## Synopsis

`authz id`

<a name="idp15333568"></a> 
## Description

This command displays the id of the current system console user in XML format; any roles associated with that user are also displayed. You can add roles (also known as groups) and assign users to these groups from the web console. You can also do this using [ec_uipasswd](/momentum/3/3-reference/executable-ec-uipasswd).

If you are logged in as a user named `tom` who belongs to the group `users`, you should see the following output:

```
<AuthzInformation username="tom">
  <Roles>
    <Role name="users"/>
  </Roles>
</AuthzInformation>
```
<a name="idp15338624"></a> 
## See Also

[authz roles list](/momentum/3/3-reference/3-reference-console-commands-authz-roles-list)