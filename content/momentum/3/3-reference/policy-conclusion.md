---
lastUpdated: "03/26/2020"
title: "Conclusion"
description: "That's essentially all there is to implementing policy Sieve or Lua scripts provide you with enough flexibility to express the logic behind your policy Aside from being very convenient policy scripts can be reloaded on the fly allowing real time adjustment of policy without interrupting service the Momentum implementation has..."
---

That's essentially all there is to implementing policy. Sieve or Lua scripts provide you with enough flexibility to express the logic behind your policy. Aside from being very convenient (policy scripts can be reloaded on the fly, allowing real-time adjustment of policy without interrupting service), the Momentum implementation has extremely low overhead and tightly integrates with the event based architecture, being able to suspend processing until asynchronous operations (such as DNS resolution, or database queries) complete.

You can find more examples of Sieve policy in the `/opt/msys/ecelerity/etc/sieve-scripts` directory and sample Lua scripts in [“Implementing Policy Using Scriptlets”](/momentum/3/3-reference/3-reference-implementing-policy-scriptlets).