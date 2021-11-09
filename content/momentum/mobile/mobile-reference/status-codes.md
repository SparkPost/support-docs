---
lastUpdated: "03/26/2020"
title: "Command Status Codes"
description: "The following Command Status Codes are taken from the SMPP 3 4 specification and may appear in smpp logs or the paniclog Table B 1 Command status codes Error Code Hex Value Description Failure Type ESME ROK 0 x 00000000 No Error NA ESME RINVMSGLEN 0 x 00000001 Message Length..."
---

## <a name="status_codes"></a> Command Status Codes

The following Command Status Codes are taken from the SMPP 3.4 specification and may appear in smpp logs or the paniclog.

<a name="table_status_codes"></a> 


| Error Code | Hex Value | Description | Failure Type |
| --- | --- | --- | --- |
| ESME_ROK | 0x00000000 | No Error | NA |
| ESME_RINVMSGLEN | 0x00000001 | Message Length is invalid | Permanent |
| ESME_RINVCMDLEN | 0x00000002 | Command Length is invalid | Permanent |
| ESME_RINVCMDID | 0x00000003 | Invalid Command ID | Permanent |
| ESME_RINVBNDSTS | 0x00000004 | Incorrect BIND Status for given command | Permanent |
| ESME_RALYBND | 0x00000005 | ESME Already in Bound State | Permanent |
| ESME_RINVPRTFLG | 0x00000006 | Invalid Priority Flag | Permanent |
| ESME_RINVREGDLVFLG | 0x00000007 | Invalid Registered Delivery Flag | Permanent |
| ESME_RSYSERR | 0x00000008 | System Error | Temporary |
| Reserved | 0x00000009 | Reserved | Permanent |
| ESME_RINVSRCADR | 0x0000000A | Invalid Source Address | Permanent |
| ESME_RINVDSTADR | 0x0000000B | Invalid Dest Addr | Permanent |
| ESME_RINVMSGID | 0x0000000C | Message ID is invalid | Permanent |
| ESME_RBINDFAIL | 0x0000000D | Bind Failed | Permanent |
| ESME_RINVPASWD | 0x0000000E | Invalid Password | Permanent |
| ESME_RINVSYSID | 0x0000000F | Invalid System ID | Permanent |
| Reserved | 0x00000010 | Reserved | Permanent |
| ESME_RCANCELFAIL | 0x00000011 | Cancel SM Failed | Permanent |
| Reserved | 0x00000012 | Reserved | Permanent |
| ESME_RREPLACEFAIL | 0x00000013 | Replace SM Failed | Permanent |
| ESME_RMSGQFUL | 0x00000014 | Message Queue Full | Temporary |
| ESME_RINVSERTYP | 0x00000015 | Invalid Service Type | Permanent |
| Reserved | 0x00000016-0x00000032 | Reserved | Permanent |
| ESME_RINVNUMDESTS | 0x00000033 | Invalid number of destinations | Permanent |
| ESME_RINVDLNAME | 0x00000034 | Invalid Distribution List name | Permanent |
| Reserved | 0x00000035-0x0000003F | Reserved | Permanent |
| ESME_RINVDESTFLAG | 0x00000040 | Destination flag is invalid (submit_multi) | Permanent |
| Reserved | 0x00000041 | Reserved | Permanent |
| ESME_RINVSUBREP | 0x00000042 | Invalid "submit with replace" request (i.e. submit_sm with replace_if_present_flag set) | Permanent |
| ESME_RINVESMCLASS | 0x00000043 | Invalid esm_class field data | Permanent |
| ESME_RCNTSUBDL | 0x00000044 | Cannot Submit to Distribution List | Permanent |
| ESME_RSUBMITFAIL | 0x00000045 | submit_sm or submit_multi failed | Temporary |
| Reserved | 0x00000046-0x00000047 | Reserved | Permanent |
| ESME_RINVSRCTON | 0x00000048 | Invalid Source address TON | Permanent |
| ESME_RINVSRCNPI | 0x00000049 | Invalid Source address NPI | Permanent |
| ESME_RINVDSTTON | 0x00000050 | Invalid Destination address TON | Permanent |
| ESME_RINVDSTNPI | 0x00000051 | Invalid Destination address NPI | Permanent |
| Reserved | 0x00000052 | Reserved | Permanent |
| ESME_RINVSYSTYP | 0x00000053 | Invalid system_type field | Permanent |
| ESME_RINVREPFLAG | 0x00000054 | Invalid replace_if_present flag | Permanent |
| ESME_RINVNUMMSGS | 0x00000055 | Invalid number of messages | Permanent |
| Reserved | 0x00000056-0x00000057 | Reserved | Permanent |
| ESME_RTHROTTLED | 0x00000058 | Throttling error (ESME has exceeded allowed message limits) | Temporary |
| Reserved | 0x00000059-0x00000060 | Reserved | Permanent |
| ESME_RINVSCHED | 0x00000061 | Invalid Scheduled Delivery Time | Permanent |
| ESME_RINVEXPIRY | 0x00000062 | Invalid message validity period (Expiry time) | Permanent |
| ESME_RINVDFTMSGID | 0x00000063 | Predefined Message Invalid or Not Found | Permanent |
| ESME_RX_T_APPN | 0x00000064 | ESME Receiver Temporary App Error Code | Temporary |
| ESME_RX_P_APPN | 0x00000065 | ESME Receiver Permanent App Error Code | Permanent |
| ESME_RX_R_APPN | 0x00000066 | ESME Receiver Reject Message Error Code | Permanent |
| ESME_RQUERYFAIL | 0x00000067 | query_sm request failed | Permanent |
| Reserved | 0x00000068-0x000000BF | Reserved | Permanent |
| ESME_RINVOPTPARSTREAM | 0x000000C0 | Error in the optional part of the PDU Body. | Permanent |
| ESME_ROPTPARNOTALLWD | 0x000000C1 | Optional Parameter not allowed | Permanent |
| ESME_RINVPARLEN | 0x000000C2 | Invalid Parameter Length. | Permanent |
| ESME_RMISSINGOPTPARAM | 0x000000C3 | Expected Optional Parameter missing | Permanent |
| ESME_RINVOPTPARAMVAL | 0x000000C4 | Invalid Optional Parameter Value | Permanent |
| Reserved | 0x000000C5-0x000000FD | Reserved | Permanent |
| ESME_RDELIVERYFAILURE | 0x000000FE | Delivery Failure (used for data_sm_resp) | Permanent |
| ESME_RUNKNOWNERR | 0x000000FF | Unknown Error | Permanent |
| Reserved for SMPP extension | 0x00000100-0x000003FF | Reserved for SMPP extension | Permanent |
| Reserved for SMSC vendor specific errors | 0x00000400-0x000004FF | Reserved for SMSC vendor specific errors | Permanent |
| Reserved | 0x00000500-0xFFFFFFFF | Reserved | Permanent |