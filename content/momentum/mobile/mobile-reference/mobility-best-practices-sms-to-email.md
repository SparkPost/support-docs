---
lastUpdated: "03/26/2020"
title: "SMS to Email Address Mappings"
description: "After receiving an SMS delivery Mobile Momentum attempts to assign a recipient email address using the following methods Interworking parse Attempt to parse the email address from the beginning of the SMS text Reverse Address Mappings This is a database look up of the email address from data saved during..."
---

After receiving an SMS delivery, Mobile Momentum attempts to assign a recipient email address using the following methods:

1.  Interworking parse – Attempt to parse the email address from the beginning of the SMS text.

2.  Reverse Address Mappings – This is a database look up of the email address from data saved during the email to SMS conversion process. The database is the relation of the original sender email address, source SMS address, and destination SMS address, relative to the MT direction, and the reverse address look up uses the SMS addresses as keys. The limitation of this mechanism is that it will only resolve the latest email sender to a given destination SMS address (and for a given source SMS address). Nonetheless, this mechanism supports certain use cases. Reverse address mappings may be "turned off" with the `SMPP_Use_Reverse_Address_Mappings` parameter. The `SMPP_RAM_Expiration` parameter specifies the number of minutes a reverse address mapping is valid. The remaining parameters will normally not change, but enable the configuration of customer data sources for address mappings:

    *   `SMPP_Use_Reverse_Address_Mappings`

    *   `SMPP_RAM_Expiration`

    *   `SMPP_RAM_Cache`

    *   `SMPP_RAM_Query_Lookup`

    *   `SMPP_RAM_Query_New`

    *   `SMPP_RAM_Query_Update`

3.  `SMPP_Default_Email_Address` – this configuration parameter is the "last resort" default email address.

If the above methods fail to identify a destination email address, the SMS message is not converted to email and is dropped.