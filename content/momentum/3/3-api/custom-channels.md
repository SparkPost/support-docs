---
lastUpdated: "03/26/2020"
title: "Custom Delivery Modules"
description: "With the ever increasing demand more and more channels are needed for message delivery Yet most outbound delivery channels can share many of the same functionalities such as connection establishment and management message queuing management and delivery result handling Given these similarities custom channels can be implemented with a reusable..."
---

## <a name="custom_channels"></a> Custom Delivery Modules


With the ever-increasing demand, more and more channels are needed for message delivery. Yet most outbound delivery channels can share many of the same functionalities such as connection establishment and management, message queuing management, and delivery result handling. Given these similarities, custom channels can be implemented with a reusable and extensible message delivery architecture. The Generic HTTP Client provides an HTTP transport layer that supports custom delivery channels using HTTP protocol for sending messages/notifications and receiving responses. The delivery channel can support any higher level protocol that uses HTTP for transport as long as the protocol is synchronous in nature (i.e. sends request –> waits for response –> sends next request) and is acting as a client.

This document describes how to extend the Generic HTTP Client module to build a custom delivery channel using the C programming language. It is intended for software developers proficient in extending Momentum using the module API. As a prerequisite, you should be familiar with the information provided in [“Primary Momentum APIs”](/momentum/3/3-api/arch-primary-apis).