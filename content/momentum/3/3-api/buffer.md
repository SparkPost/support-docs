---
lastUpdated: "03/26/2020"
title: "Buffer Functions"
description: "Table of Contents ec growbuf io cur chunk Return a pointer to the current growbuf chunk and its length ec growbuf io next chunk Return a pointer to the next growbuf chunk and its length ec growbuf io open Allocate and initialize an io object for a new growbuf backed..."
---

              
| Name                                                                                                                        | Description                                                          |
|-----------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| [ec_growbuf_io_cur_chunk](/momentum/3/3-api/apis-ec-growbuf-io-cur-chunk)               | Return a pointer to the current growbuf chunk and its length         |
| [ec_growbuf_io_next_chunk](/momentum/3/3-api/apis-ec-growbuf-io-next-chunk)             | Return a pointer to the next growbuf chunk and its length            |
| [ec_growbuf_io_open](/momentum/3/3-api/apis-ec-growbuf-io-open)                         | Allocate and initialize an io_object for a new growbuf-backed string |
| [minimal_tryread_construct_free](/momentum/3/3-api/apis-minimal-tryread-construct-free) | Release the resources of a minimal_tryread_construct                 |
| [tryread_until](/momentum/3/3-api/apis-tryread-until)                                   | Read data in growbuf sized chunks                                    |
| [trywrite](/momentum/3/3-api/apis-trywrite)                                             | Write a string of buflen bytes for an event                          |
| [trywritef](/momentum/3/3-api/apis-trywritef)                                           | Write formatted data for an event                                    |
