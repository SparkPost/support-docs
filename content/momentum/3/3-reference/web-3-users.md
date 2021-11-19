---
lastUpdated: "03/26/2020"
title: "Administering Users From the Web Console"
description: "In order to administer users you must be logged in as a superuser The user named admin created during installation is a superuser You cannot create superusers through the web UI use ec uipasswd instead If you choose to authenticate against Active Directory the User Management menu will be removed..."
---

<a name="idp2030400"></a> 

In order to administer users, you must be logged in as a superuser. The user named `admin` created during installation is a superuser. You cannot create superusers through the web UI, use [ec_uipasswd](/momentum/3/3-reference/executable-ec-uipasswd) instead.

### Warning

If you choose to authenticate against Active Directory, the User Management menu will be removed from the web UI.

To administer users click the Administration tab and choose the User Management link. This menu is used to create, remove or update users and groups.

If this is the first time that you have logged in to the web console you should see something similar to the following:

<a name="figure_users"></a> 


![Administering Users](images/web3/users.png)

To begin adding a new user click the New User button. Supply a username and password and click the Create button to create the new user.

When a user is newly created, you can assign groups to that user as shown in the following:

<a name="figure_groups"></a> 


![Assigning groups](images/web3/assign_groups.png)

By default, all new users are members of the `users` group. To make a user a superuser, select the `admin` group from the left column and click the ADD button. To apply your changes, click the UPDATE button.

The newly created user should appear below the `admin` user. An X appears to the left on the same line as the new user name. Use this button to delete the user. Notice that you cannot delete the `admin` user. You can, however, change the password for the admin user by clicking on `admin` and entering a new password in the text box that opens on the right side of the page. You can also change the password for regular users in the same way.

You may also use the **ec_uipasswd** command to administer users. You can use this command to give a regular user superuser privileges if you did not do this when the user was created. You can also add users or groups using the **ec_uipasswd** command. If you have forgotten the password for the administrator, you can use this command to create a new superuser in order to log in to the web UI. For more information see [ec_uipasswd](/momentum/3/3-reference/executable-ec-uipasswd).

Adding or changing users takes effect immediately and does not require that files be committed. However, the default configuration on nodes is to cache database lookups for a few minutes, so changes to passwords may take a few minutes to take effect.

### <a name="web3.reporting.role.creating"></a> Adding the Reporting Role to a User

**Configuration Change. ** The reporting role is available as of Momentum version 3.3.

By default all new users added through the web UI have access to the reporting menu. To add a user with the reporting role only, create a new user as described in [“Administering Users From the Web Console”](/momentum/3/3-reference/web-3-users) and then select this user from the list of users. You should see something similar to the following:

<a name="figure_reporting_role"></a> 


![Reporting Role](images/web3/reporting_role.png)

By default, all new users are members of the `users` group. If you wish to create a user with only the reporting role, first remove the `users` role and then add `reporting`.

A user with only the reporting role does not have access to the ADMINISTRATION menu and is not presented with any "Reset", "Purge", "Bounce", "Retry" or "Suspend" buttons. Nor can this user access the node controls from the stats Tab.

### Note

Like the `admin` role, the reporting role is fixed and cannot be removed from the web UI.

**<a name="web3.reporting.role.ldap"></a> 3.9.1.1. The Reporting Role and LDAP**

If you are authenticating using LDAP you cannot add or change users through the web UI. However, you can implement a reporting role by setting up a reporting user role (see [“Setting Up Active Directory Authentication With Momentum 3.2.2”](/momentum/3/3-reference/conf-ldaps)) and by making the changes described below.

Set up an LDAP environment that defines a reporting user role. Substitute the name of that role into the `REPORT_ROLE` configuration option in the `/opt/msys/ecwebui/config/webui-receiving.conf` (or `webui-sending.conf`) file.

### Note

There is an additional configuration option in `/opt/msys/ecwebui/config/webui-receiving.conf` called `REPORT_ROLE_OVERRIDE`. When this option is set to `true` if a user has the "reporting role" and one or more other roles (except the admin role), the reporting role overrides the other roles. This has the affect of stripping the user of privileges associated with other roles.