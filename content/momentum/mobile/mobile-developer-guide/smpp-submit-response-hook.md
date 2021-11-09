---
lastUpdated: "03/26/2020"
title: "SMPP Submit Response Hook"
description: "Use this hook to inspect a SUBMIT SM RESP from a remote SMSC In this hook you can use any business logic to handle a response to a MT submission but an intuitive utilization of this hook is to initiate a requeue retry of a failed MT submission based on..."
---


## <a name="SMPPSubmitResponseHook.purpose"></a> Purpose

Use this hook to inspect a SUBMIT_SM_RESP from a remote SMSC. In this hook you can use any business logic to handle a response to a MT submission but an intuitive utilization of this hook is to initiate a requeue/retry of a failed MT submission based on the response status code.

If users would like to correlate a future MO reception—a delivery receipt, to an MT submission in order to implement their own business logic, use this hook to store the message_id carried in the response message so that you can find the matching delivery receipt.