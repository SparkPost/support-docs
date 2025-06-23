---
lastUpdated: "07/01/2025"
title: "Running and Accessing the Container"
description: "Instructions for running the Docker container built with Momentum."
---


## <a name="containers.running"></a> Running the Momentum container

For a manual run for test of the Momentum container from the image built as per [here](/momentum/4/4-container-building), you can use the following command:

```bash
docker run -d --name mta --hostname mta.test \
    -v /path/to/your/config:/opt/msys/ecelerity/etc/conf/default:ro \
    -v /path/to/your/logs:/var/log/ecelerity \
    -v /path/to/your/spool:/var/spool/ecelerity \
    -p 25:25 -p 2025:2025 \
    --cap-add=NET_BIND_SERVICE --cap-add=SYS_PTRACE \
    momentum-mta:$VERSION
```

where `$VERSION` is the version of Momentum used to build and tag the image (e.g., `5.0.0.12345`).

> **NOTE:** To run Momentum in your production environment, you will likely want to customize mounting of volumes and mapping of ports to suit your deployment needs.

In the command above, notice the following:
- The `:ro` suffix on the volume mount for `/opt/msys/ecelerity/etc/conf/default` indicates that the configuration is mounted in read-only mode.
- Since the "bridge" network mode (the default) is being used, the `-p` options map the container's ports to the host's ports.
- The `--cap-add=NET_BIND_SERVICE` capability allows the container to bind to low-numbered ports (like 25).
- The `--cap-add=SYS_PTRACE` capability allows the container to use the `ptrace` system call, which is required by **gimli** for monitoring.

You can check the container is running with the following command:
```
docker ps
```
and see the `mta` container listed with its status as "Up":
```
CONTAINER ID  IMAGE                     COMMAND                 CREATED        STATUS        PORTS                                                                             NAMES
319be9d4affd  momentum-mta:5.0.0.12345  "/opt/msys/gimli/bin…"  4 seconds ago  Up 3 seconds  0.0.0.0:25->25/tcp, [::]:25->25/tcp, 0.0.0.0:2025->2025/tcp, [::]:2025->2025/tcp  mta
```
You can also see in the logs of the container:
```bash
docker logs mta
```
that Momentum license was validated:
```
[Wed 11 Jun 2025 18:27:48] <0x7f5926da1200> Validating software license.
(...)
[Wed 11 Jun 2025 18:27:48] <0x7f5926da1200> Valid license.
```

## <a name="containers.accessing"></a> Accessing the container

Use the `docker exec` command to access the `mta` container via a terminal session. For example, to inspect the running processes inside the container, you can run:
```
docker exec mta ps -efH
```
obtaining output similar to:
```
UID          PID    PPID  C STIME TTY          TIME CMD
root         239       0  0 18:39 ?        00:00:00 ps -efH
root           1       0  0 18:27 ?        00:00:00 /opt/msys/ecelerity/sbin/run.ecelerity: monitoring child 7
ecuser         7       1  0 18:27 ?        00:00:02   /opt/msys/ecelerity/sbin/ecelerity
```

You can also run a shell inside the container:
```
docker exec -it mta /bin/bash
```
This will give you a shell prompt inside the container, allowing you to run commands from there, including the `ec_console`:
```
me@host:~$ docker exec -it mta /bin/bash
[root@mta /]# hostname
mta.test
[root@mta /]# echo "sysinfo" | sudo -u ecuser /opt/msys/ecelerity/bin/ec_console
Ecelerity Version: 5.0.0.74264 r(msys-ecelerity:tags/5.0.0-ga^0) (64-bit)
build date: Feb 20 2025 (RELEASE)
product name: Ecelerity Momentum
Rocky Linux release 9.5 (Blue Onyx)
Linux mta.test 5.14.0-503.22.1.el9_5.x86_64 #1 SMP PREEMPT_DYNAMIC Wed Jan 15 08:02:15 EST 2025 x86_64

[root@mta /]# exit
exit
me@host:~$
```
