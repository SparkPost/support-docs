---
lastUpdated: "03/26/2020"
title: "Converting MCMT to XMPP"
description: "If you don't convert a plain text message to a SMS message stanza in Lua you can convert a MCMT message part to XMPP for delivery as an instant message In order to perform message conversion you must provide a valid XMPP stanza in the MCMT part of a message..."
---

If you don't convert a plain text message to a SMS message stanza in Lua, you can convert a MCMT message part to XMPP for delivery as an instant message. In order to perform message conversion you must provide a valid XMPP stanza in the MCMT part of a message as described at [The Multi-Channel Message Type (MCMT)](https://support.messagesystems.com/docs/web-mob-dev/mob.dev.guide.mcmt).

Find below examples of converting between email and XMPP and vice versa.

<a name="ec_message2xmpp"></a> 


```
require("msys.extended.message")
require("msys.extended.message_routing”)
xmpp = require("msys.xmpp")

local mod = {}

----- HOOK to do ec_message => XMPP conversion -----
function mod:core_ec_message_enqueue(msg)
  local text = msg:text()
  if xmpp.valid_domain(msg:routing_domain()) and xmpp.online(msg:rcptto()) then
    local stanza = xml.newnode("message")
    stanza:attr("from", 'nobody@donot-reply')
    stanza:attr("to", msg:rcptto())
    local body = stanza:addchild("body")
    body:contents(msg:text())
    xmpp.routeStanza(stanza)
    msg.delivered = msys.core.EM_SUCCEEDED
    return EC_MESSAGE_ENQUEUE_HOOK_OK
  end
  return EC_MESSAGE_ENQUEUE_HOOK_CONT
end
msys.registerModule("xmpp_hooks", mod);
```

<a name="xmpp2ec_message"></a> 


```
require("msys.extended.message")
require("msys.extended.message_routing”)
xmpp = require("msys.xmpp")

local xmpp_mod = {}

function xmpp_mod:client_message_recv(sess, stanza)
  local from = stanza:attr(“from”)
  local to = stanza:attr(“to”)
  -- ** It might be preferred to use doc:xpath() here to get the message body,
  -- ** BUT the xmldoc associated with the xmlnode (stanza) is most likely unlinked and released
  -- ** at this point of time. So it is actually not proper and very dangerous to reference to
  -- ** a xmldoc from the xmlnode (stanza) by using doc:xpath()
  for node in stanza:children() do
    if node:name() == 'body' then
      -- build an ec_message
      local headers = {}
      headers["To"] = to
      headers["From"] = from
      local parts = {}
      -- <message><body>
      parts["text/plain"] = node:contents()
      local ecmsg = msys.core.ec_message_new(nil)
      ecmsg:build(headers, parts, nil)
      -- inject ec_message
      ecmsg:inject(from, to)
      return msys.xmpp.DONE;
    end
  end
  return msys.xmpp.CONT;
end
xmpp.registerModule("xmpp_convergence", xmpp_mod)
```

For more information about the return values of the core_ec_message_enqueue hook point see [ec_message_enqueue](/momentum/3/3-api/hooks-core-ec-message-enqueue).

### Note

For instructions on building MCMT messages with XML instead of using the approach shown here, see the XMPP specifications [Message Syntax](http://xmpp.org/rfcs/rfc6121.html#message-syntax).