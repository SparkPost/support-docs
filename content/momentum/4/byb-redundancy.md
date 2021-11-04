---
lastUpdated: "03/26/2020"
title: "Redundancy"
description: "Should any nodes fail you need a Quorum within both your Platform and Analytics servers in order for Momentum to continue functioning properly For Momentum you have a quorum when more than 50 of nodes are active What constitutes a quorum has implications for redundancy For example you cannot support..."
---

Should any nodes fail, you need a [Quorum](/momentum/4/4-glossary#gloss.quorum) within both your Platform and Analytics servers in order for Momentum to continue functioning properly. For Momentum, you have a quorum when more than 50% of nodes are active. What constitutes a quorum has implications for redundancy. For example, you cannot support redundancy with only two Platform and two Analytics nodes. Should any one node go down, you will not have the 51% required for a quorum. So, for high availability, the most efficient cluster sizes will be odd numbers of three or more Platform nodes *and* three or more Analytics nodes.