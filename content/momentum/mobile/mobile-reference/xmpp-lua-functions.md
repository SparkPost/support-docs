---
lastUpdated: "03/26/2020"
title: "Lua XMPP Functions"
description: "The Lua functions used when converting a message to XMPP or the reverse are xmpp send xml stanza string this function accepts a string XMPP stanza as a parameter and returns a boolean to indicate whether the stanza was successfully parsed and routed jid user this function returns the user..."
---

The Lua functions used when converting a message to XMPP or the reverse are:

*   `xmpp:send(xml_stanza_string)` – this function accepts a string XMPP stanza as a parameter and returns a boolean to indicate whether the stanza was successfully parsed and routed.

*   `jid:user()` – this function returns the user localpart as a string.

*   `jid:domain()` – this function returns the user's domain as a string.

*   `jid:resource()` – this function returns the user resource part of the JID object.

*   `jid:bare()` – this function returns the bare JID.

*   `jid:get()` – this function returns the full JID. The "full JID" is an XMPP address of the form `<localpart@domainpart/resourcepart>`.

*   `xmpp.connected(jid_string)` – this function returns a boolean indicating whether the user with the specified ID is connected to the server. You can use this function in any hook or phase. You might use it in the following way:

    ```
    if (xmpp.connected("user1@xmpp.test.com") then
      # forward message to XMPP domain
    end
    ```

*   `xmpp.online(jid_string)` – use this function to determine whether a user with the specified ID is available. You can call this function in any phase or hook. The return value is a Lua table with the elements `availability, show and status`. "availability" is a boolean value and "show" and "status" are the values in the presence stanza sent by the client. The possible values for show and status are defined at [Presence Syntax](http://xmpp.org/rfcs/rfc6121.html#presence-syntax).