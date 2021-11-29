---
lastUpdated: "03/26/2020"
title: "Upgrade Cassandra on the Platform Nodes"
description: "To allow for continuous functioning of the Cassandra cluster only one Cassandra server instance should be stopped for upgrade at any one time Run the following command to check the Cassandra cluster status This should be done after each node is updated to verify the cluster is fully functional before..."
---

To allow for continuous functioning of the Cassandra cluster, only one Cassandra server instance should be stopped for upgrade at any one time. Run the following command to check the Cassandra cluster status:

`/opt/msys/3rdParty/cassandra/bin/nodetool status`

This should be done after each node is updated to verify the cluster is fully functional before proceeding to the next node.

1.  Upgrade Cassandra from version 2.0.8 to 2.0.15\. Perform the following Cassandra steps on the **first node** .

    1.  Drain and remove the node from the Cassandra cluster.

        `/opt/msys/3rdParty/cassandra/bin/nodetool drain`
    2.  Stop the Cassandra service.

        `service msys-cassandra stop`
    3.  Backup the Cassandra configuration files. This is an optional step; no changes should need to be merged into the new configuration files, but it is good practice to perform a backup.

        ```
        pushd /opt/msys/3rdParty/cassandra
        tar -cf ~/cassandra_conf_2_0_8.tar conf
        popd
        ```

    4.  Upgrade the Cassandra Redhat Package Manager (RPM). Be sure to run this command from the directory containing the bundle.

        `yum --disablerepo=* --config momentum.repo --enablerepo=momentum upgrade msys-cassandra`
    5.  Compare the new configuration with the backup. Differences such as comments, jvmver, and JVM variables are fine, and you should not have to merge or replace anything at this point.

        ### Note

        Significant differences indicate a problem. If this occurs, you need to correct the issue before continuing. If you cannot correct the issue, revert to your backup.

        ```
        pushd ~
        tar -xvf cassandra_conf_2_0_8.tar
        diff -r conf /opt/msys/3rdParty/cassandra/conf
        popd
        ```

    6.  Start Cassandra.

        `service msys-cassandra start`

2.  Repeat Step 1 for the **remaining Platform nodes** .