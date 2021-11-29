---
lastUpdated: "03/26/2020"
title: "server_max_file_descriptors"
description: "server max file descriptors sets the maximum number of file descriptors usable by the system Server Max File Descriptors 80000 This parameter sets the OS file descriptor limit for the Momentum Process It may require OS kernel parameters to be modified to support the value you configure There is no..."
---

<a name="conf.ref.server_max_file_descriptors"></a> 
## Name

server_max_file_descriptors — sets the maximum number of file descriptors usable by the system

## Synopsis

`Server_Max_File_Descriptors = 80000`

<a name="idp26419920"></a> 
## Description

This parameter sets the OS file descriptor limit for the Momentum Process. It may require OS kernel parameters to be modified to support the value you configure. There is no system performance degradation by setting this number [much] higher than the typical process default value (which is often only 1024). The default value is `3000000`; however, the assigned value in the default configuration file is `80000`.

Note that this parameter is intimately related to [server_max_outbound_connections](/momentum/4/config/ref-server-max-outbound-connections) since the number of available OS file descriptors will limit the number of messages that can be processed simultaneously. This option needs to be at least four times the value of `server_max_outbound_connections`.

<a name="idp26424768"></a> 
## Scope

server_max_file_descriptors is valid in the global scope only.

<a name="idp26426624"></a> 
## See Also

[server_reserve_outbound_connections](/momentum/4/config/ref-server-reserve-outbound-connections), [server_max_outbound_connections](/momentum/4/config/ref-server-max-outbound-connections)