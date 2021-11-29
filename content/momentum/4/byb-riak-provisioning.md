---
lastUpdated: "03/26/2020"
title: "Riak Provisioning"
description: "Riak can be deployed as a single node or in a cluster of nodes More nodes allow for improved redundancy and load distribution It is recommended that there be a minimum of three nodes in a clustered configuration For most deployments no special additional configuration is required but if you..."
---

Riak can be deployed as a single node or in a cluster of nodes. More nodes allow for improved redundancy and load distribution. It is recommended that there be a minimum of three nodes in a clustered configuration.

For most deployments, no special additional configuration is required, but if you have a larger number of Riak nodes (8-16) you may want to consider setting the `ring_creation_size` parameter to a larger value. For details on this parameter, consult the [Riak](http://docs.basho.com/riak/latest/) documentation. It is important to note that this parameter cannot be changed once nodes are live; it must be set to the desired size and remain at that value on each and every node that participates in the Riak cluster.