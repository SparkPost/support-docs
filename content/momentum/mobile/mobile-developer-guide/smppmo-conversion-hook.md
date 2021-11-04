---
lastUpdated: "03/26/2020"
title: "SMPP MO Conversion Hook"
description: "The SMPP MO Conversion Hook enables custom tailoring of the process of converting an SMPP message to an ec message The SMPP MO Conversion Hook exposes many of the information elements used to create ec messages such as message text and recipient addresses Applications may inspect and or modify information..."
---


## <a name="SMPPMOConversionHook.purpose"></a> Purpose

The SMPP MO Conversion Hook enables custom tailoring of the process of converting an SMPP message to an ec_message. The SMPP MO Conversion Hook exposes many of the information elements used to create ec_messages, such as message text and recipient addresses. Applications may inspect and/or modify information elements using ec_message context variables.