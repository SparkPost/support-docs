---
lastUpdated: "03/26/2020"
title: "Starting the Web Console"
description: "The web console is configured to start automatically as a service on the machine where it is installed If you did not start the web console immediately after installation you can start it up as a service by issuing the command etc init d ecwebconsole start Doing this starts up..."
---

The web console is configured to start automatically as a service on the machine where it is installed.

If you did not start the web console immediately after installation you can start it up as a service by issuing the command, **`/etc/init.d/ecwebconsole start`**       . Doing this starts up the `httpd` daemon. `restart` and `stop` are also valid options with **ecwebconsole**.