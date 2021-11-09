---
lastUpdated: "03/26/2020"
title: "sched – The Schedule Module"
description: "The sched module is used to schedule tasks that can be run from the console The following configuration stanza loads the sched module Example 71 83 sched module backing store defines the path to a SQ Lite database If the specified file does not already exist it will be created..."
---

<a name="idp22702688"></a> 

The sched module is used to schedule tasks that can be run from the console.

### <a name="modules.sched.configuration"></a> Configuration

The following configuration stanza loads the sched module:

<a name="example.sched.3"></a> 


```
sched {
  backing_store = "/path/to/sqlite.db"
}
```

`backing_store` defines the path to a SQLite database. If the specified file does not already exist it will be created. The directory containing this database file must be writable by the user/group that the Momentum instance is running as, typically ecuser. Specifying a `backing_store` is not a requirement but if it is not specified any scheduled tasks will be forgotten when the instance is restarted.

**<a name="modules.sched.console"></a> 71.59.1.1. sched Management Using Console Commands**

The sched module can be controlled through `ec_console`. The following commands are available:

<dl class="variablelist">

<dt>sched at *`seconds`* *`command`*</dt>

<dd>

Run a command at the specified time expressed as a Unix timestamp.

</dd>

<dt>sched delete *`id`*</dt>

<dd>

This command deletes a scheduled job. To determine the job id use the **sched list**      command. The **delete** command removes a job from memory and from the database.

</dd>

<dt>sched every *`seconds`* *`command`*</dt>

<dd>

Create a recurrent command that repeats at the specified interval.

</dd>

<dt>sched in *`seconds`* *`command`*</dt>

<dd>

Run a command at the specified number of seconds from the current time.

</dd>

<dt>sched list</dt>

<dd>

List any scheduled tasks. The output of this command is shown in the following:

```
JOB ID        	    NEXT RUN TIME	REC	COMMAND
example.com-000000005	1215702990	 y	config set message_expiration 300
```

The output shows the job id followed by the scheduled run time expressed in Unix timestamp format. If the job is recurrent a ‘`y`’ appears under the `REC` column. A command will only be recurrent if it is invoked using **every**. The scheduled command appears under the `COMMAND` column.

</dd>

</dl>