---
lastUpdated: "03/26/2020"
title: "reopen logs"
description: "reopen logs close and open log files reopen logs This command requests that all logging modules close and reopen their log files It is up to the specific module implementation to do what is necessary to fulfill the request This is instrumental in log rotation as the logs are moved..."
---

<a name="console_commands.reopen_logs"></a> 
## Name

reopen logs — close and open log files

## Synopsis

`reopen logs`

<a name="idp13203248"></a> 
## Description

This command requests that all logging modules close and reopen their log files. It is up to the specific module implementation to do what is necessary to fulfill the request. This is instrumental in log rotation as the logs are moved to the side and Momentum must close and reopen its file handles to start using new resources.