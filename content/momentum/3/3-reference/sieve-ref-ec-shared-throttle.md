---
lastUpdated: "03/26/2020"
title: "ec_shared_throttle"
description: "ec shared throttle create ec shared throttle inc ec shared throttle check ec shared throttle tarpit Shared Named Throttling ec shared throttle create name messages seconds epsilon ec shared throttle inc name ec shared throttle check name ec shared throttle tarpit name Allow any number of shared named throttles to..."
---

<a name="sieve.ref.ec_shared_throttle"></a> 
## Name

ec_shared_throttle_create, ec_shared_throttle_inc, ec_shared_throttle_check, ec_shared_throttle_tarpit — Shared Named Throttling

## Synopsis

`ec_shared_throttle_create` { *`name`* } { *`messages/seconds`* } [ *`epsilon`* ]

`ec_shared_throttle_inc` { *`name`* }

`ec_shared_throttle_check` { *`name`* }

`ec_shared_throttle_tarpit` { *`name`* }

<a name="idp30554816"></a> 
## Description

Allow any number of shared named throttles to be created within Sieve to handle a variety of throttling situations and permutations that the single inbound throttle cannot.

**ec_shared_throttle_create** creates a throttle named name with a throttle of X/Y where X is a number of messages and Y is an interval of time in seconds. Note that the throttle will do nothing on its own, but with the other functions, its full functionality can be exploited. This must be called before other functions attempt to access the throttle.

Epsilon is a positive floating point number strictly less than one that specifies how much of a throttle can be consumed in one iteration of information passage around the cluster. It defaults to `0.95` and is unlikely to need changing. The higher it is, the faster the throttle can converge, but as you increase it you risk a single machine hogging the whole throttle.

**ec_shared_throttle_inc** indicates to the specified throttle that it has received a message to be counted by its mechanisms. This will not stop more messages than desired from passing into the system. This should be called before **ec_shared_throttle_check**.

**ec_shared_throttle_check** checks to see if the specified throttle currently exceeds its quota. If it does so, then **ec_shared_throttle_check** returns true, otherwise, it returns false. This does not work when nested with the :is command. It needs to be assigned to a Sieve variable and then checked in a statement such as: $var = ec_shared_throttle_check "foo" if **ec_test** :is $var "true" {

**ec_shared_throttle_tarpit** increments the named throttle, and tarpits for length of time such that the throttle will return to a state where it is once again permissable to send a message through.

### Note

The cluster module must be configured with the shared named throttle parameters as defined here: [“Shared named throttles”](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.replication.named_throttles)

<a name="example.ec_shared_throttle-tarpit"></a> 


```
...

ec_shared_throttle_create "foo" "30/1";
ec_shared_throttle_tarpit "foo";

...
```