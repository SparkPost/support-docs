---
lastUpdated: "03/26/2020"
title: "DomainKeys Validation"
description: "To perform validation on all inbound messages received via SMTP load the dk validate module in your configuration For details see Section 71 28 domainkeys Yahoo Domain Keys When a message is received it is inspected to determine the responsible sending party which is either the Sender or the From..."
---

To perform validation on all inbound messages received via SMTP, load the dk_validate module in your configuration. For details, see [“domainkeys – Yahoo! DomainKeys”](/momentum/4/modules/domainkeys).

When a message is received, it is inspected to determine the responsible sending party, which is either the "Sender" or the "From" (in that order) from the message headers. If there exists a header called "DomainKey-Signature", the signature is parsed for validity. If valid, the appropriate DNS operations are performed to find the policy and public key for the signer, the message is canonicalized as described in the signature, and the signature is validated.

Subsequent to processing the email, any preexisting "DomainKey-Status" headers are removed from the email and the dk_validate module will prepend a "DomainKey-Status" header to the email with the results of the signature verification process. Valid results are "good," "bad," and "error".