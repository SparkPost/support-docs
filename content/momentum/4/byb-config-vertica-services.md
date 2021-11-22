---
lastUpdated: "03/26/2020"
title: "Configuring Locale"
description: "Ensure that your locale is a UTF 8 setting by invoking the locale command There are two environment variables that identify non default locale settings LANG and LC ALL We recommend that you set LANG to en US UTF 8 If either variable is set for an ISO value e..."
---

Ensure that your locale is a UTF-8 setting by invoking the locale command. There are two environment variables that identify non-default locale settings: `LANG` and `LC_ALL`. We recommend that you set `LANG` to `en_US.UTF-8`.

If either variable is set for an ISO value; e.g., `LANG=en_US.ISO88591`, you must overwrite the setting with a UTF-8 equivalent for the vertica_dba user.

### Note

If the system configuration can be changed; then change the setting in the `/etc/sysconfig/i18n` file. Otherwise, add the override specific to the vertica_dba user in the `/var/db/vertica/.i18n` file. For example, your locale setting should look similar to this: `LANG=fr_FR`.

If set, `LC_ALL` supersedes `LANG`. If neither is set, Vertica will use `en_US`.

For examples of how to set `LANG`, see [Implement Locales for International Data Sets](https://my.vertica.com/docs/7.1.x/HTML/Content/Authoring/AdministratorsGuide/ConfiguringTheDB/ImplementLocalesForInternationalDataSets.htm).