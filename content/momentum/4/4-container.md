---
lastUpdated: "07/01/2025"
title: "Running Momentum in a Container"
description: "Rationale for running Momentum in a containerized environment, and instructions for doing so."
---


Running Momentum in a container is a strategic move toward simplifying deployment, increasing portability, and standardizing runtime environments through development, staging and production. It allows the MTA to operate as a self-contained, version-controlled unit that can be easily replicated and scaled.

Guidance is provided here to run Momentum inside a Linux-based container.

**NOTES:**

- This feature is *experimental*. We are actively seeking feedback to make Momentum more container-friendly.
- Docker engine and Docker Compose must be installed on the host system where Momentum container will be built and/or run.
- This document assumes familiarity with Docker and containerization concepts. For more information on it, see Docker's [documentation](https://docs.docker.com/).

## <a name="containers.benefits"></a> Rationale

Running Momentum in a container provides several benefits:
- **Portability across environments**: Containers abstract away OS-level differences.
- **Simplified deployment**: Packaging Momentum and its dependencies makes deployments predictable and repeatable.
- **Isolation and stability**: Momentum runs in a sandboxed environment, isolated from the host and other services, minimizing the risk of conflicts with host-level libraries or services.
- **Scalability**: Containers can be easily scaled up or down based on load, allowing for efficient resource utilization.
- **Easier upgrades**: Versioning container images makes it straightforward to deploy a new version of Momentum in parallel with minimum downtime.
- **Better resource management**: Containers can be configured with explicit CPU and memory limits, preventing from consuming unexpected system resources.
- **Fault tolerance and persistence**: By combining containers with persistent volumes, configuration, policies, spooled messages, and logs can be retained across container restarts, ensuring that critical data is not lost.
- **DevOps and automation friendly**: Containers integrate well with CI/CD pipelines, Docker Compose, and orchestration tools (like Kubernetes and Swarm), enabling fast testing, staging, and deployment cycles.

## <a name="containers.planning"></a> Planning for Containerization

Before deploying Momentum in a container, consider the following:
- **Container image**: When building your own image, select a RHEL-compatible base OS and set the proper environment variables.
- **Configuration management**: Plan how to manage configuration and other module files, such as `ecelerity.conf`, Lua scripts, etc. You can use bind mounts or Docker volumes to provide such files to the container.
- **Data persistence**: Likewise, determine how to persist data across container restarts. Use Docker volumes or bind mounts to store spooled messages and logs outside the container. It might be required to handle volume ownership and permissions to ensure Momentum can read/write to these volumes.
- **Networking**: Decide how to expose ports and configure networking. You can use Docker's port mapping to expose the necessary ports for the different Momentum listeners.
