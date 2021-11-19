---
lastUpdated: "03/26/2020"
title: "PostgreSQL"
description: "Momentum includes a Postgre SQL database used by the MTA application There can be only one instance of this database In a cluster configuration it is installed on the Manager node The following describes the default directories and configuration related to the Postgre SQL database var db Root database directory..."
---


<a name="idp2472624"></a> 

Momentum includes a PostgreSQL database used by the MTA application. There can be only one instance of this database. In a cluster configuration, it is installed on the Manager node.

## <a name="postgresql.overview"></a> PostgreSQL Overview

The following describes the default directories and configuration related to the PostgreSQL database:

*   `/var/db` – Root database directory for PostgreSQL

*   `/var/db/msyspg` – Contains the `postgresql.conf` configuration file and the PID file

    The logging options set in the configuration file are discussed in [the section called “PostgreSQL Log Files”](/momentum/4/postgresql#postgresql.log-files).

    The msyspg database contains the real-time data collected by Momentum and, since this data is retained for two years, **be sure that there is adequate space on the drive that hosts the PostgreSQL server** .

*   `/var/db/msyspg/pg_log` – Contains the PostgreSQL log files, as configured in `postgresql.conf`

*   `/opt/msys/3rdParty/bin` – Contains the PostgreSQL client program `psql`

    Other PostgreSQL programs such as **pg_dump** and **pg_dumpall** are also found in this directory.

*   `/opt/msys/3rdParty/etc/php.d` – Contains the `ecdb.ini` file, which includes the database credentials

### Warning

We expressly recommend **against** using an NFS file system because of concerns about its performance in general and its reliability, especially on Linux.

### <a name="postgresql.log-files"></a> PostgreSQL Log Files

<a name="idp3787152"></a> 

The following settings in the `postgresql.conf` file determine the configuration for the PostgreSQL log files:

<dl class="variablelist">

<dt>log_directory</dt>

<dd>

Location of the PostgreSQL log files

Default setting is the `/var/db/msyspg/pg_log` directory.

</dd>

<dt>log_filename</dt>

<dd>

Format of the logging file name

At runtime, this is resolved as a four digit representation of the year and a two digit representation of the month, day, and minute. Default value is `postgresql-%Y-%m-%d-%M.log`.

</dd>

<dt>logging_collector</dt>

<dd>

Controls log rotation

Default setting is `on`.

</dd>

<dt>log_rotation_size</dt>

<dd>

Controls log rotation

Default setting is `100MB`. With the default settings, a new log file will be created after 100MB have been written into a log file.

</dd>

</dl>