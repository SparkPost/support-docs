---
lastUpdated: "03/26/2020"
title: "Delivery Receipts"
description: "Delivery receipts are messages generated from carrier and or aggregator network equipment notifying a short message submitter of an intermediate or final status of an SMS submission Two parameters in Mobile Momentum control deliver receipt handling First delivery receipts are requested for message submissions by setting the SMPP Registered Delivery..."
---

Delivery receipts are messages generated from carrier and/or aggregator network equipment notifying a short message submitter of an intermediate or final status of an SMS submission.

Two parameters in Mobile Momentum control deliver receipt handling. First, delivery receipts are requested for message submissions by setting the `SMPP_Registered_Delivery` configuration parameter to one of the following the classes of delivery status:

*   SMSC_Delivery

*   SMSC_Delivery_Failure

*   SME_Delivery

*   SME_User

*   Intermediate

If you wish to receive delivery receipts, consult with your carrier or provider about which classes of delivery receipts are supported on their network.

If you are *receiving* delivery receipts, use the `SMPP_Notify_Deliver_Receipt` option to forward receipts as email to the original sender. The following list specifies the delivery status values that can be returned:

*   ALL

*   DELIVRD

*   EXPIRED

*   DELETED

*   UNDELIV

*   ACCEPTD

*   UNKNOWN

*   REJECTD

Both of these configuration parameters use array notation to accept multiple values.

In the following example, the `SMPP_Registered_Delivery` option requests delivery notifications of the type `SMSC_Delivery_Failure` for its SMS submissions. `SMPP_Notify_Deliver_Receipt` is set to `ALL`, indicating that email messages are to be constructed for all delivery receipt message status types.

```
domain "somewhere.com" {
  ...
  SMPP_Registered_Delivery = ("SMSC_Delivery_Failure")
  SMPP_Notify_Deliver_Receipt = ("ALL")
  ...
```