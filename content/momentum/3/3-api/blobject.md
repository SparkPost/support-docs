---
lastUpdated: "03/26/2020"
title: "Blobject Functions"
description: "Table of Contents ec blobject addref Increments the reference count of obj by 1 ec blobject delref Decrements the reference count of obj by 1 and releases the memory allocated to it if the reference count is decremented to 0 ec blobject delref typeunsafe Decrements the reference count of blobject..."
---


| Name                                                                                                                      | Description                                                                                                                        |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| [ec_blobject_addref](/momentum/3/3-api/apis-ec-blobject-addref)                       | Increments the reference count of obj by 1                                                                                         |
| [ec_blobject_delref](/momentum/3/3-api/apis-ec-blobject-delref)                       | Decrements the reference count of obj by 1 and releases the memory allocated to it if the reference count is decremented to 0      |
| [ec_blobject_delref_typeunsafe](/momentum/3/3-api/apis-ec-blobject-delref-typeunsafe) | Decrements the reference count of blobject by 1 and releases the memory allocated to it if the reference count is decremented to 0 |
| [ec_blobject_wrap](/momentum/3/3-api/apis-ec-blobject-wrap)                           | Allocates memory for an ec_blobject and initializes it                                                                             |
| [ec_message_blobject_get](/momentum/3/3-api/apis-ec-message-blobject-get)             | Retrieve a blobject tag                                                                                                            |
| [ec_message_blobject_remove](/momentum/3/3-api/apis-ec-message-blobject-remove)       | Remove a blobject tag                                                                                                              |
| [ec_message_blobject_store](/momentum/3/3-api/apis-ec-message-blobject-store)         | Tag a message with a blobject                                                                                                      |
