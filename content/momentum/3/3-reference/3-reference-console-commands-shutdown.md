---
lastUpdated: "03/26/2020"
title: "shutdown"
description: "shutdown shutdown Momentum shutdown This command immediately causes Momentum to shutdown Momentum must close its sockets and file descriptors cleanly so this may not happen instantaneously After this command is issued no further SMTP EC Stream or console connections will be allowed This command does not work on Solaris To..."
---

<a name="console_commands.shutdown"></a> 
## Name

shutdown — shutdown Momentum

## Synopsis

`shutdown`

<a name="idp16311872"></a> 
## Description

This command immediately causes Momentum to shutdown. Momentum must close its sockets and file descriptors cleanly, so this may not happen instantaneously. After this command is issued, no further SMTP, ECStream or console connections will be allowed.

### Note

This command does not work on Solaris. To stop the ecelerity process on Solaris sytems go to the command line and issue the command: **`svcadm disable ecelerity`**                   .