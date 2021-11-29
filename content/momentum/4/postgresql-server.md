---
lastUpdated: "03/26/2020"
title: "Running the PostgreSQL Server"
description: "The Postgre SQL server is installed as a daemon and starts up whenever the system is rebooted To start the Postgre SQL server immediately after installation issue the command To determine the options that can be used with the msyspg command issue the command The following output is displayed where..."
---

<a name="idp3830528"></a> 

The PostgreSQL server is installed as a daemon and starts up whenever the system is rebooted. To start the PostgreSQL server immediately after installation, issue the command

`shell> /etc/init.d/msyspg start`

To determine the options that can be used with the `msyspg` command, issue the command

`shell> /etc/init.d/msyspg`

The following output is displayed:

`Usage: {start|stop|restart}`

where

*   `start` – Start the PostgreSQL server daemon named `msyspg` running at levels 3, 4 and 5

*   `stop` – Stop the PostgreSQL server

*   `restart` – Restart the PostgreSQL server