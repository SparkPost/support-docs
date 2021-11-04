---
lastUpdated: "03/26/2020"
title: "Validation Context Variables"
description: "As mentioned in Chapter 5 Implementing Policy with Momentum context variables have a significant role to play when policy is enforced using scripts There is a description of a user defined connection context variables set within a listener stanza in Context In addition to user defined variables there are predefined..."
---


<a name="idp3416064"></a> 

As mentioned in [*Implementing Policy with Momentum*](/momentum/3/3-reference/3-reference-policy) , context variables have a significant role to play when policy is enforced using scripts. There is a description of a user-defined connection context variables set within a listener stanza in [Context](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.context) . In addition to user-defined variables, there are predefined validation context variables accessible in both the connection context and the message context. Not all context variables will be set in all cases; some, for example, depend on TLS settings and others on which modules are loaded into Momentum. Some context variables are defined in a global scope and some in a module scope.