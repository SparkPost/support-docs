---
lastUpdated: "03/26/2020"
title: "Overview"
description: "As of version 3 1 4 the HTTP REST injection API is available for injecting messages into Momentum It has the following characteristics It supports simple key value pair substitution A content producer can connect to an HTTP listener and submit a REST request to send one or more messages..."
---

As of version 3.1.4 the HTTP REST injection API is available for injecting messages into Momentum. It has the following characteristics:

*   It supports simple key-value pair substitution

*   A content producer can connect to an HTTP listener and submit a REST request to send one or more messages based on a template. The REST request contains the required MAIL FROM/RCPT TO for each individual message to be sent, optional validation context data for each message to be sent, as well as optional key-value pairs for expansion in the template.

*   Operations are transactional, in the sense that if a command fails, none of the component operations take place. For instance, if a message is sent to three people as a single command, either all three messages are successfully generated or none are

*   Multi-Channel Message Type messages are supported