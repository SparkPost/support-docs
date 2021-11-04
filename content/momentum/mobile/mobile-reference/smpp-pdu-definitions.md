---
lastUpdated: "03/26/2020"
title: "SMPP PDU Operation Definitions"
description: "The following SMPP PDU Operation Definitions are taken from the SMPP 3 4 specification bind resp Where is replaced by receiver transmitter or transciever depending upon circumstances The SMPP bind resp PDU is used to reply to a bind request of the specified type deliver sm The deliver sm is..."
---

## <a name="smpp_pdu.definitions"></a> SMPP PDU Operation Definitions

The following SMPP PDU Operation Definitions are taken from the SMPP 3.4 specification.

*   `bind_*_resp` – Where ‘`*`’ is replaced by `receiver, transmitter` or `transciever` depending upon circumstances. The SMPP bind_*_resp PDU is used to reply to a bind request of the specified type.

*   `deliver_sm` – The deliver_sm is issued by the SMSC to send a message to an ESME. Using this command, the SMSC may route a short message to the ESME for delivery.

*   `enquire_link` – This message can be sent by either the ESME or SMSC and is used to provide a confidence check of the communication path between an ESME and an SMSC.

*   `submit_sm` – This operation is used by an ESME to submit a short message to the SMSC for onward transmission to a specified short message entity (SME).

*   `unbind_resp` – The SMPP unbind_resp PDU is used to reply to an unbind request. It comprises the SMPP message header only.