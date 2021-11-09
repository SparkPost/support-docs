---
lastUpdated: "03/26/2020"
title: "SMPP Caveats"
description: "Since SMS messages do not contain all the information typically found in a standard email message and because of the difference in recipient addressing phone numbers versus user domain style addresses log entries for messages received over SMPP differ from those received over SMTP Specifically Envelope MAIL FROM and RCPT..."
---

Since SMS messages do not contain all the information typically found in a standard email message and because of the difference in recipient addressing—phone numbers versus "user@domain" style addresses—log entries for messages received over SMPP differ from those received over SMTP. Specifically:

*   Envelope MAIL FROM and RCPT TO domain part fields are left blank. Since the source and destination addresses are phone numbers, these numbers are stored in the Envelope MAIL FROM and RCPT TO local part fields. This data is duplicated in the slots for the message From and To headers, respectively.

*   There is no explicit subject of an SMS message. Because some SMS-to-email gateways use the subject field for relaying the message, to respect the privacy of the sender no subject is logged.