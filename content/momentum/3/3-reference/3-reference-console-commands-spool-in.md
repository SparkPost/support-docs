---
lastUpdated: "03/26/2020"
title: "spool_in"
description: "spool in read a message from the spool to the mail queue spool in mid This command takes a message id and tries to read the message specified by the mid from the spool to the mail queue If the message is already in queue it will do nothing except..."
---

<a name="console_commands.spool_in"></a> 
## Name

spool_in — read a message from the spool to the mail queue

## Synopsis

`spool_in` { *`mid`* }

<a name="idp16410720"></a> 
## Description

This command takes a message id and tries to read the message specified by the mid from the spool to the mail queue. If the message is already in queue, it will do nothing except printing a notice.

### Warning

This is an advanced command. Please consult with our support team before making use of this command in a production enviroment.