---
lastUpdated: "03/26/2020"
title: "msys.rfc3464.extract_delivery_status"
description: "msys rfc 3464 extract delivery status Return a table of parsed email headers msys rfc 3464 extract delivery status msg This function parses the headers of the mail and returns a table of successfully parsed header values msg is an RFC 3464 MDN If msg is not an MDN or..."
---

<a name="lua.ref.msys.rfc3464.extract_delivery_status"></a> 
## Name

msys.rfc3464.extract_delivery_status — Return a table of parsed email headers

<a name="idp26932448"></a> 
## Synopsis

`msys.rfc3464.extract_delivery_status(msg);`

`msg: userdata, ec_message type`<a name="idp26935104"></a> 
## Description

This function parses the headers of the mail and returns a table of successfully parsed header/values. `msg` is an RFC3464 MDN. If `msg` is not an MDN or the headers cannot be parsed, this function will return a nil.

Enable this function with the statement `require('msys.rfc3464');`.