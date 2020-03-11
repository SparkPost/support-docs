---
title: "2.7. Message Context Variables"
description: "Policy decisions associated with Mobile Momentum can be implemented using Sieve or Lua scripts For more information see Implementing Policy Using Scriptlets and Implementing Policy Using Sieve ec message context variables for SMPP that are accessible from policy scripts are as follows MO Email From Address email from address to..."
---

Policy decisions associated with Mobile Momentum can be implemented using Sieve or Lua scripts. For more information see [Implementing Policy Using Scriptlets](https://support.messagesystems.com/docs/web-ref/implementing.policy.scriptlets) and [Implementing Policy Using Sieve](https://support.messagesystems.com/docs/web-ref/policy.implementing).

ec_message context variables for SMPP that are accessible from policy scripts are as follows:

*   `MO_Email_From_Address` – email from address to use when converting MO-SMS to email

*   `MO_Email_To_Address` – email to address to use when converting MO-SMS to email

*   `MO_Email_Subject` – email subject to use when converting MO-SMS to email

*   `MO_Email_Text` – blob email text to use when converting MO-SMS to email

*   `SMS_Data_Coding` – data coding of the SMS message text to set in SMPP message submission. For more information see [smpp_sms_data_coding](mobility.conf.smpp_sms_data_coding "smpp_sms_data_coding").

*   `SMS_Destination_Address` – SMS destination address to set in SMPP message submission

*   SMS_Destination_Domain – Select destination SMPP domain name(corresponding to configured domain stanza)

*   `SMS_Destination_NPI` – SMS destination numbering plan indicator to set in SMPP message submission. For more information see [smpp_destination_numbering_plan](mobility.conf.smpp_destination_numbering_plan "smpp_destination_numbering_plan").

*   `SMS_Destination_TON` – SMS destination type of number to set in SMPP message submission. For more information see [smpp_destination_type_of_number](mobility.conf.smpp_destination_type_of_number "smpp_destination_type_of_number").

*   `SMS_Source_Address` – SMS source address to set in SMPP message submission

*   `SMS_Source_NPI` – SMS source numbering plan indicator to set in SMPP message submission. For more information see [smpp_esme_numbering_plan](mobility.conf.smpp_esme_numbering_plan "smpp_esme_numbering_plan").

*   `SMS_Source_TON` – SMS source type of number to set in smpp message submission. For more information see [smpp_esme_type_of_number](mobility.conf.smpp_esme_type_of_number "smpp_esme_type_of_number").

*   `SMS_Text` – blob of the SMS message text to set in SMPP submission

The hook points at which these context variables are accessible are described in the following section, "SMS Conversion Hook Points". For a detailed discussion of all SMPP hooks see "[SMPP Hooks](https://support.messagesystems.com/docs/web-mob-dev/p.smpp)".