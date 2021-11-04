---
lastUpdated: "03/26/2020"
title: "Ports Used by Momentum"
description: "Depending upon the options you choose during installation and how you configure the application various ports are used by Momentum Find below a listing of the services along with the typical or default port setting Table 1 1 Momentum ports Service Port Description Required Link Adaptive Delivery Rules Update 443..."
---

Depending upon the options you choose during installation and how you configure the application, various ports are used by Momentum. Find below a listing of the services along with the typical or default port setting.

<a name="idp208208"></a> 


| Service | Port | Description | Required | Link |
| --- | --- | --- | --- | --- |
| Adaptive Delivery Rules Update | 443 | The port used for adaptive rule updates |   | See [“adaptive – Adaptive Delivery”](/momentum/3/3-reference/3-reference-modules-adaptive) |
| Antivirus engines | various | Antivirus engines connect to external daemons on specific ports |   | See [“antivirus – Antivirus Modules”](/momentum/3/3-reference/3-reference-modules-antivirus) |
| Apache | 80 | Used by the web UI |   | See [*Using the Web Console*](/momentum/3/3-reference/web-3)  |
| cidr_server | 9000 | Used by the cidr_server |   | See [“The `cidr_server`”](/momentum/3/3-reference/3-reference-cluster-cidr-server) |
| cluster_listener | 4802 | Used in a cluster installation. Replaced by the ECCluster_Listener stanza as of version 3.0.15. |   | See [*Clustering*](/momentum/3/3-reference/3-reference-cluster) |
| control_listener | 2025 | Used to connect to the Momentum console |  ✓ | See [“The Momentum System Console”](/momentum/3/3-reference/operations-console) |
| Databases | various | Optional databases use their default ports |   | See [“ds_core – Datasource Query Core”](/momentum/3/3-reference/3-reference-modules-ds-core) |
| ec_cmd | 2028 | The process that allows the web UI to manage cluster nodes |   | See [ec_cmd](/momentum/3/3-reference/executable-ec-cmd) |
| ECCluster_Listener | 4802 | Replaces `cluster_listener` as of version 3.0.15. |   | See [the section called “ECCluster_Listener”](/momentum/3/3-reference/ecelerity-cluster-conf#ecelerity-cluster.conf.eccluster_listener) |
| ECStream | 1825 | Incoming ECStream connections |   | See [the section called “ECStream_Listener”](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf.ecstream_listener) |
| Erlang (Riak) | 4369 | Riak port mapper |   | See [“Riak Ports”](/momentum/3/3-reference/operations-riak#operations.riak.ports) |
| HTTP_Listener | 8081 | The listener used by the REST injector |   | See "[The Momentum REST Injector](/momentum/3/3-rest)" |
| Live Bounce Updates | 443 | The port used to submit unclassified bounces |   | See [“Live Bounce Updates – Module”](/momentum/3/3-reference/3-reference-modules-live-bounce-updates) |
| LMTP | 2003 | The port for Local Mail Transport Protocol |   | See [lmtp_port](/momentum/3/3-reference/3-reference-conf-ref-lmtp-port) |
| MSGC | 4809 | Used for cluster communication as of version 3.4 |   | See [“msgc – Modules”](/momentum/3/3-reference/3-reference-modules-msgc) |
| PostgreSQL | 5432 | Used to authenticate users and for web UI data storage |  ✓ | See [“PostgreSQL”](/momentum/3/3-reference/operations-postgresql) |
| Riak | 8098, 8099 | Used by the Riak data store (as of version 3.3) |  ✓ | See [“Riak Ports”](/momentum/3/3-reference/operations-riak#operations.riak.ports) |
| SMTP | 25 | Incoming SMTP connections |  ✓ | See [the section called “Listeners”](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listeners) |
| SNMP | 8162 | Port used by Simple Network Management Protocol |   | See [SNMP](/momentum/3/3-reference/3-reference-conf-ref-snmp) |
| Spread (mbus_daemon) | 4803, 4804 | Used for cluster communication prior to version 3.4 |   | See [mbus.conf](/momentum/3/3-reference/mbus-conf) |
| Subversion | 2027 | Used for version control of configuration files |  ✓ | See [“The Momentum Configuration Server: ecconfigd”](/momentum/3/3-reference/conf-ecconfigd) |