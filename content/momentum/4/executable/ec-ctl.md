---
lastUpdated: "03/26/2020"
title: "ec_ctl"
description: "ec ctl start stop or restart the Momentum Application Server opt msys ecelerity bin ec ctl start stop restart ec ctl is a shell script that you can use to start stop or restart the Momentum Application Server ecelerity Aside from launching this process ec ctl performs various pre launch..."
---

<a name="executable.ec_ctl"></a> 
## Name

ec_ctl — start, stop, or restart the Momentum Application Server

## Synopsis

`/opt/msys/ecelerity/bin/ec_ctl` [ start | stop | restart ]

<a name="idp11757520"></a> 
## Description

**ec_ctl** is a shell script that you can use to start, stop, or restart the Momentum Application Server **ecelerity**. Aside from launching this process, **ec_ctl** performs various pre-launch actions, such as fetching a new license if the current machine has none or checking out the latest version of the configuration file from the cluster configuration store. As such, it is recommended that you use **ec_ctl** to start and stop ecelerity instead of manually launching **ecelerity**from the command line.

### Note

In a cluster configuration, do not invoke this command from within the **eccmgr** service.

On startup, **ec_ctrl** sets any environment variables found in the `environment` file and executes any startup scripts found in the `/opt/msys/ecelerity/bin/rc.includes` directory.

The `TRY` environment variable is one of the variables that may be set in the `environment` file. This variable controls the number of times to loop waiting for Momentum to start up. In some configurations, it can take a long time for Momentum to start and, if the default `TRY` value is too small, the **ec_ctl** script may decide that startup has failed. The default value for this variable is `10` but, for example, for hosts that use large RBLs, this value may need to be adjusted upwards. Increasing `TRY` to a higher value will increase the amount of time that **ec_ctl** will wait for Momentum to start before deciding that it is broken. With `TRY` set to a default value of `‘10’`, the amount of time that **ec_ctl** waits is 55 seconds (10+9+8+7+6+5+4+3+2+1).

The `CONFFILE` and the `CONTROL` variables also have a bearing on **ec_ctl**.

<a name="idp11326912"></a> 
## See Also

[ecelerity](/momentum/4/executable/ecelerity), [*Configuring the Environment File*](/momentum/4/environment-file) , [“Startup Scripts”](/momentum/4/4-conf-starting#startup.scripts)