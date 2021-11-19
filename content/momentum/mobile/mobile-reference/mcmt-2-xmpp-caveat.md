---
lastUpdated: "03/26/2020"
title: "Filtering Out Chat State Notifications"
description: "In XMPP you can send message stanzas whose sole purpose is to inform another user of one's present chat state For example if one user starts writing to a contact most clients will send that contact a chat state message telling them that their buddy is typing These stanzas are..."
---

In XMPP you can send message stanzas whose sole purpose is to inform another user of one's present 'chat state'. For example, if one user starts writing to a contact, most clients will send that contact a chat state message telling them that their buddy is typing. These stanzas are shaped like regular message stanzas, but serve a purely informational purpose and have no message body. If your policy is designed to translate all message stanzas to emails, every single time a user starts typing a message, at least one empty email could get sent to their contact unless this filter is in place.

It is probably best to ignore any messages unless there is a 'body' element with a length greater than `0`. Note that you cannot conditionally send a message based on whether chat state elements appear in the message stanza since the 'active' state can sometimes be attached to a valid message. The following exmple from [XEP-0085: Chat State Notifications](http://xmpp.org/extensions/xep-0085.html) shows the 'active' state attached to a message.

```
<message
    from='bernardo@shakespeare.lit/pda'
    to='francisco@shakespeare.lit'
    type='chat'>
  <body>Who's there?</body>
  <active xmlns='http://jabber.org/protocol/chatstates'/>
</message>
```

Find below a code snippet that filters messages based on body length:

```
local body = ""
for n in stanza:children() do
  if n:name() == "body" then
    body = n:contents()
  end
end

if (body:len() > 0) then
  -- Body is greater than '0' - send this message
  local headers = {}
  local parts = {}

  headers["To"] = to
  headers["From"] = from
  headers["Subject"] = subject

  parts["text/plain"] = body

  local ecmsg = msys.core.ec_message_new(nil)
  ecmsg:build(headers,parts,nil)
  ecmsg:inject(from, to)
  return msys.xmpp.DONE
end

return msys.xmpp.CONT
```