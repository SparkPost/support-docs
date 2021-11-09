---
lastUpdated: "03/26/2020"
title: "Licensed Features"
description: "Message Generation enables you to inject your recipient list template and message content separately using the HTTP protocol It takes these components of a transmission and generates personalized messages for each recipient The generation and transmission of messages is triggered by the REST API interface You must choose to enable..."
---


## <a name="licensed_features.message.generation"></a> Message Generation

Message Generation enables you to inject your recipient list, template, and message content separately, using the HTTP protocol. It takes these components of a transmission and generates personalized messages for each recipient. The generation and transmission of messages is triggered by the REST API interface.

You must choose to enable Message Generation during installation. It can be configured to run on a stand-alone or cluster installation. In a cluster configuration, it is not necessary for all nodes to load the message generation module, nor is it necessary for those that do load that module to participate in message generation. For example, you may want to have a node (such as the Manager) solely for establishing a [quorum](/momentum/4/4-glossary#gloss.quorum), but not for generating messages.