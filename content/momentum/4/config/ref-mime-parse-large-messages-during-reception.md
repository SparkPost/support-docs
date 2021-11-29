---
lastUpdated: "03/26/2020"
title: "mime_parse_large_messages_during_reception"
description: "mime parse large messages during reception configure whether large messages are parsed upon reception or just in time mime parse large messages during reception true This option sets or unsets the message mime parse state on a message generated with the builder API Setting this value to false may result..."
---

<a name="conf.ref.mime_parse_large_messages_during_reception"></a> 
## Name

mime_parse_large_messages_during_reception — configure whether large messages are parsed upon reception or just in time.

## Synopsis

`mime_parse_large_messages_during_reception = true`

<a name="idp25468944"></a> 
## Description

This option sets or unsets the message mime parse state on a message generated with the builder API.

### Warning

Setting this value to "false" may result in blocking the scheduler thread. The default value for this option is `true`.

<a name="idp25472304"></a> 
## Scope

`mime_parse_large_messages_during_reception` is valid in the global scope.