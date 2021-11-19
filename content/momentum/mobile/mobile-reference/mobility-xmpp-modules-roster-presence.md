---
lastUpdated: "03/26/2020"
title: "Roster and Presence"
description: "Momentum 3 5 supports XMPP Roster and Presence as defined in RFC 6121 http xmpp org rfcs rfc 6121 html This requires the standard XMPP server configuration described in Section 10 1 The XMPP Module and Listener and an additional scriptlet source XMPP rosters are stored using Riak as the..."
---

Momentum 3.5 supports XMPP Roster and Presence as defined in RFC6121 ([http://xmpp.org/rfcs/rfc6121.html](http://xmpp.org/rfcs/rfc6121.html)). This requires the standard XMPP server configuration described in [“The XMPP Module and Listener”](/momentum/mobile/mobile-reference/mobility-xmpp-modules#modules.xmpp) and an additional scriptlet source.

### <a name="idp2856624"></a> Configuring for Roster and Presence

XMPP rosters are stored using Riak as the backend with a Lua module providing the interface. XMPP uses the Riak bucket `XMPP`, and the user's bare JID is used as the key for the roster record for each user. Each roster record is stored as a JSON object. The term "bare JID" is an XMPP address of the form `<localpart@domainpart>` for an account at a server or of the form `<domainpart>` for a server.

### Note

If you send a message to a user on GoogleTalk but you are not in the GoogleTalk user's roster, then you will receive a 503 error. This appears to be an anti-spam measure implemented by GoogleTalk. To send a message to a contact on GoogleTalk, you must be in that contact's roster.

Management of roster and presence is handled in the background by Lua scripts. To enable XMPP roster/presence add the following `script` stanza to the scriptlet module.

```
scriptlet "scriptlet" {
  ...
  script "xmpp-presence" {
    source = "msys.xmpp.presence"
  }
}
```

Inclusion of this script ensures that XMPP roster and presence requests are handled.

### Note

The presence file is found in the `/opt/msys/ecelerity/libexec/scriptlets/msys/xmpp` directory. This file and other files in this directory are for internal use only and should not be modified.

If you wish to "bulk add" contacts to a roster you can do so by sending an HTTP request to Riak. Find an example below:

```
shell> curl -X POST http://127.0.0.1:8098/riak/xmpp/test@test -d \
 '{"test1@test": { "name": "test1", "groups": [ "mytest" ], "pending_requests": { }, \
 "subscription": "both" } }' -H "Content-Type: application/json"
```