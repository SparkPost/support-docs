---
lastUpdated: "10/09/2026"
title: "SMTP Extensions"
description: "Implements the receiving side of an XCLIENT capable interaction XCLIENT allows trusted senders to alter the connecting IP address and other connection level identifiers to appear to be someone they are not This is used for internally trusted re mailing More information on XCLIENT can be found at http www..."
---

### <a name="esmtp.listener.extensions.chunking"></a> CHUNKING Extension for SMTP

Advertises the CHUNKING extension defined in [RFC 3030](https://www.rfc-editor.org/rfc/rfc3030) and accepts the `BDAT` command, which a sending server uses instead of `DATA` to transmit a message as one or more chunks of announced size. Microsoft 365, Exchange and Gmail send with `BDAT` whenever the receiving server advertises CHUNKING.

CHUNKING is not advertised by default. To enable it, add it to the `SMTP_Extensions` list of a listener, `Listen` or `Peer` scope:

```
ESMTP_Listener {
  Listen ":25" {
    SMTP_Extensions = ( "ENHANCEDSTATUSCODES" "CHUNKING" )
  }
}
```

A message received with `BDAT` is handled exactly like one received with `DATA`: policy runs once per message, the same limits apply (including `Max_Message_Size` and the idle timeout), and the message is stored, logged and delivered the same way. Momentum always delivers with `DATA`, whether or not the next hop supports CHUNKING.

* `DATA` remains available on a listener that advertises CHUNKING, but one transaction cannot mix the two. `DATA` or `RCPT TO` after a `BDAT` chunk is answered with `503`; send `RSET` to start over.

* When a chunk cannot be accepted, for example `BDAT` before `MAIL FROM` or `RCPT TO`, or after `RSET`, Momentum reads and discards the chunk before replying, as RFC 3030 requires. A chunk that takes the message over `Max_Message_Size` is read and discarded, and the message is rejected with `552 5.3.4`.

* A `BDAT` command announcing more than `Max_Message_Size` or 64 MiB, whichever is larger (2 GiB when there is no size limit), is rejected with `552` and the connection is closed without reading the chunk.

* If the last chunk does not end with a line break, Momentum adds one.

* The BINARYMIME extension, also defined in RFC 3030, is not supported. Sending servers only use `BODY=BINARYMIME` when the receiving server advertises it.

### <a name="idp2679232"></a> XCLIENT Extension for SMTP

Implements the receiving side of an XCLIENT capable interaction. XCLIENT allows trusted senders to alter the connecting IP address and other connection-level identifiers to appear to be someone they are not. This is used for internally trusted re-mailing. More information on XCLIENT can be found at [http://www.postfix.org/XCLIENT_README.html](http://www.postfix.org/XCLIENT_README.html).

Advertise support for the Enhanced-Status-Codes extension as defined in RFC 2034\. `ENHANCEDSTATUSCODE` is the EHLO keyword value associated with this extension. This capability makes reporting of success and errors more precise.

### <a name="idp2678000"></a> XDUMPCONTEXT Extension for SMTP

Enables the dumping of connection and message contexts during an SMTP conversation via an XDUMPCONTEXT command. This is mainly useful for debugging.

```
% telnet 10.80.116.84 25
Trying 10.80.116.84...
Connected to ecbuild-14.int.omniti.net (10.80.116.84).
Escape character is '^]'.
220 ecbuild-14 ESMTP ecelerity HEAD r(9610M) Wed, 08 Mar 2006 16:21:51 -0500
ehlo there
250-ecbuild-14 says EHLO to 10.80.116.73
250-PIPELINING
250-XDUMPCONTEXT
250-8BITMIME
250-AUTH=LOGIN
250-AUTH LOGIN
250 STARTTLS
XDUMPCONTEXT
250-[connection] ehlo_domain there
250-[connection] ehlo_string ehlo there
250 XDUMPCONTEXT complete
```

### <a name="idp2681280"></a> XREMOTEIP Extension for SMTP

This extension enables a connecting client to change the perceived IP address from which it connected. This is useful when the Momentum instance is deployed behind a trusted SMTP gateway. If enabled, then the remote client may, at anytime, present **XREMOTEIP *`IP_address`***                and Momentum will alter all identifying information to appear as if the client originally connected from the provided IP address.

### <a name="idp2654816"></a> XSETCONTEXT Extension for SMTP

XSETCONTEXT lets a client set name/value pairs in the connection level validation context. The extension takes a series of RFC1891 encoded parameters; each name=value pair sets the connection level validation context key "name" to value "value", overriding whatever other value was previously set (if any).

Since the extension can set arbitrary items in the validation context, it should be considered a trusted extension and should not be enabled for public Internet facing listeners, because there is a risk that an attacker can manipulate their way through a policy script. This also holds true for XCLIENT.

Set a name/value pair in the following way:

`XSETCONTEXT option1=value1 option2=value2`
### <a name="idp2420192"></a> ALWAYS-ALLOW Property

If present, the connection will succeed and will automatically be authenticated as the `anonymous` user.