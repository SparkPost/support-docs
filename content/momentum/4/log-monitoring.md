---
lastUpdated: "05/21/2024"
title: "Log Monitoring"
description: "This chapter lists and describes the logs associated with Momentum 4"
---

This chapter lists and describes the logs associated with Momentum 4.

<a name="idp2676240"></a> 


| Log File Name and Location | Node Type | Description |
| --- | --- | --- |
| /var/log/ecelerity/paniclog.ec | Platform | Error level information for ecelerity is written here. |
| /var/log/eccluster/paniclog.ec | Manager | Error level information for eccmgr is written here. |
| /var/log/msys-nginx/error.log | All | Nginx log |
| /var/log/msys-cassandra | Platform and Manager | Cassandra log |
| /var/log/msys-rabbitmq/rabbit@*node*.log | Platform | Internal logging **** Note**      that the content of this log must not be altered or truncated - listed here for informational purposes only. |
| /var/db/vertica/msys/dblog | Analytics | Vertica log |
| /var/log/msys-nodejs/*.log | Analytics | NodeJS log |
| /var/log/ecelerity/gencp_* | Platform | Internal logging ** **** Note**      that the content of this log must not be altered or truncated - listed here for informational purposes only. These files show if you are getting a backup of transmission requests. |
| /var/log/ecelerity/traces/* | All | These files show if Ecelerity is having a problem. |
