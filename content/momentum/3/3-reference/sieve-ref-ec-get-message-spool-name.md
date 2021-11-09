---
lastUpdated: "03/26/2020"
title: "ec_get_message_spool_name"
description: "ec get message spool name Returns the message's spool filename ec get message spool name ec get message spool name returns the base filename to which this message has been or will be spooled unless it is handled by an alternate IO module The spool format is opaque and a..."
---

<a name="sieve.ref.ec_get_message_spool_name"></a> 
## Name

ec_get_message_spool_name — Returns the message's spool filename.

## Synopsis

`ec_get_message_spool_name`

<a name="idp29794528"></a> 
## Description

`ec_get_message_spool_name` returns the base filename to which this message has been or will be spooled, unless it is handled by an alternate IO module. The spool format is opaque, and a message lives in more than one file, so this function is only useful for debugging.