---
lastUpdated: "03/26/2020"
title: "Starting Momentum"
description: "If your Max Outbound Connections setting is larger than 1000 you will need to adjust your system wide and shell specific open file limits to avoid errors Assume root privileges Run etc init d ecelerity start All errors from the program are placed in var log ecelerity paniclog ec Once..."
---

<a name="idp1431376"></a> 

If your `Max_Outbound_Connections` setting is larger than 1000, you will need to adjust your system-wide and shell-specific open file limits to avoid errors.

1.  Assume root privileges

2.  Run **/etc/init.d/ecelerity start** 

All errors from the program are placed in `/var/log/ecelerity/paniclog.ec`.

Once Momentum has started, you can connect to it by running **/opt/msys/ecelerity/bin/ec_console** with root privileges. For a list of available commands, type **`help`**. See [“The Momentum System Console”](/momentum/3/3-reference/operations-console) for additional information.

Depending on your local configuration, you may want to perform additional tasks whenever Momentum starts or stops. For example, if you have configured the spool directory as a separate filesystem, you might want to make sure that filesystem is mounted before starting Momentum. The directory `/opt/msys/ecelerity/bin/rc.includes` is scanned at startup and shutdown for scripts named "start.*`purpose`*" or "stop.*`purpose`*". Any scripts found are sourced with 'sh .' and included in the startup or shutdown.

The following example illustrates how to check for the spool filesystem. Save it as `/opt/msys/ecelerity/bin/rc.includes/start.checkmount`.

```
SPOOL_FS=/var/spool/ecelerity

/sbin/mount | /usr/bin/grep -q $SPOOL_FS

if [ $? != 0 ]; then
  echo "Spool filesystem not mounted, aborting."
  exit 1
fi
```

### <a name="conf.starting.unbound.resolver"></a> Unbound Resolver

The unbound resolver is a modern DNS resolver that is replacing Momentum’s older internal ARES resolver. The unbound resolver will provide more features, more efficient code, and smoother integration with Momentum.

The unbound server is turned off by default, but can be enabled by entering the following lines into `/opt/msys/ecelerity/etc/environment`:

```
ECELERITY_DNS_BACKEND='unbound' 
export ECELERITY_DNS_BACKEND
```

To confirm the resolver's status, look for the following line in the summary command:

`DNS Resolver: unbound`
### Note

The only other valid value is "ares".