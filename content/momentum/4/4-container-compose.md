---
lastUpdated: "07/01/2025"
title: "Using Docker Compose"
description: "Instructions for using Docker Compose to run the Momentum container."
---


While the `docker run` command is useful for launching single containers manually, **Docker Compose** offers a more structured, maintainable, and scalable way to define and manage containers. This is especially valuable for services like Momentum which may involve multiple volumes, environment variables, port mappings, and resource configurations.

## <a name="containers.compose.benefits"></a> Benefits of using Docker Compose

- **Centralized configuration (YAML file)**: all settings — environment variables, volumes, port bindings, restart policies, resource limits — are defined in a single `docker-compose.yml` file. This makes configurations clear, reproducible, and version-controlled.
- **Easier management**: if the container requires several mounts, ports, or links to other services (e.g., metrics, monitoring agents), Docker Compose handles that in one command, without long and error-prone `docker run` lines.
- **Improved readability and maintainability**: instead of complicated CLI commands, configuration is written in a clean, readable YAML format, simplifying troubleshooting.
- **Environment-specific overrides**: Docker Compose supports separate override files (e.g., `docker-compose.override.yml` or `.env`) for environment-specific settings (development, staging, production).
- **Container lifecycle management**: with Docker Compose, you can start, stop, restart, or destroy entire service stacks with simple commands (up, down, restart, etc.).
- **Restart policies and fault tolerance**: easily define behavior on crash or reboot (`restart: unless-stopped`, `always`, etc.) directly in the `docker-compose.yml` file.

## <a name="containers.compose.running"></a> Running the Momentum container

To create a Momentum container using Docker Compose, put a `docker-compose.yml` file in your project directory.

**Example:**
```yaml
services:
  mta:
    cap_add:
      - NET_BIND_SERVICE
      - SYS_PTRACE
    command: "/opt/msys/gimli/bin/monitor /opt/msys/ecelerity/sbin/run.ecelerity"
    container_name: mta
    cpus: 4
    environment:
      - GIMLI_QUIET=1
      - GIMLI_DETACH=0
      - GIMLI_PID_FILE=/var/run/ecelerity.monitor.pid
      - GIMLI_TRACE_DIR=/var/log/ecelerity/traces
    hostname: mta.test
    image: momentum-mta:${VERSION}
    mem_limit: 8g
    network_mode: host
    #ports:  # Uncomment if mode changes to "bridge"
    #  - "25:25"
    #  - "2025:2025"
    restart: unless-stopped
    volumes:
      - type: bind
        read_only: true
        source: /path/to/your/config
        target: /opt/msys/ecelerity/etc/conf/default
      - type: bind
        source: /path/to/your/logs
        target: /var/log/ecelerity
      - type: bind
        source: /path/to/your/spool
        target: /var/spool/ecelerity
```

To run the container using Docker Compose with the `docker-compose.yml` contents of the example above, execute the following command in the same directory as the YAML file:

```
VERSION=5.0.0.xxxxx docker compose up -d
```

### <a name="containers.compose.limits"></a> Setting resource limits

Notice it is possible to set resource limits (CPU and memory) directly in the `docker-compose.yml` file, which is not possible with the `docker run` command. The limits set in the example above are:
- `cpus: 4`: limits the container to use 4 CPU cores.
- `mem_limit: 8g`: limits the container to use a maximum of 8 GB of memory.

and they can be checked with the following command:
```
docker inspect mta | grep -Eiw 'NanoCpus|Memory'
```
which should return something like:
```
    "NanoCpus": 4000000000,
    "Memory": 8589934592,
```
