---
lastUpdated: "03/26/2020"
title: "Sieve++"
description: "Momentum contains a fully loaded Sieve compiler and execution engine The sieve module provides a mechanism for you to specify Sieve scripts that should run at different phases of an SMTP transaction In Momentum version 3 x Sieve continues to be supported but scripting via Lua is preferred for the..."
---


Momentum contains a fully loaded Sieve compiler and execution engine. The `sieve` module provides a mechanism for you to specify Sieve scripts that should run at different phases of an SMTP transaction.

### Note

In Momentum version 3.x, Sieve continues to be supported but scripting via Lua is preferred for the following reasons:

*   Sieve has no concept of looping or iterators

*   Simple comparative logic in Sieve is awkward to author

*   Unlike Sieve, new modules do not need explicit C development to enable Lua capabilities

### Warning

You cannot use Sieve with multiple event loops. If you include the Sieve module in your configuration file, Momentum will not start up and a warning will be written to the panic log. If you are upgrading to a multiple event loop configuration of Momentum, be sure to remove the Sieve module from your configuration file.

Sieve++ was developed by Message Systems specifically for Momentum. It provides you with a powerful policy management engine for both inbound and outbound mail.