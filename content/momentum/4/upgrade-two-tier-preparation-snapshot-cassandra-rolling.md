---
lastUpdated: "03/26/2020"
title: "Perform a Cassandra Snapshot"
description: "Prepare the database on each node for a snapshot Perform the following steps on the first Platform node then repeat on the remaining Platform nodes The size of your snapshot will depend on the size of your instance If you do not have enough space available to create a snapshot..."
---

1.  Prepare the database on each node for a snapshot. Perform the following steps on the **first Platform node** , then repeat on the remaining Platform nodes.

    ### Note

    The size of your snapshot will depend on the size of your instance. If you do not have enough space available to create a snapshot, this command will fail.

2.  From a separate host, perform a Cassandra global snapshot of **all** keyspaces. This requires doing the snapshots on **all Platform nodes**                as simultaneously as possible. This can be done on the cluster nodes by executing `tmux ... pssh` on a separate host. It can also be done manually on multiple terminal windows. For a combined cluster upgrade, perform this action on **all nodes in the cluster** .

    Snapshot subdirectories will be created under `/var/db/cassandra/data/*`. These subdirectories, which contain Cassandra sstable data, can be copied to a backup system.

    Using pssh:

    ```
    pssh -h /var/tmp/cassandra-hosts-file -o /var/tmp/gsnapshot-results \
    /opt/msys/3rdParty/cassandra/bin/nodetool snapshot --tag snapshot_name
    ```

    Using multiple terminal windows:

    `/opt/msys/3rdParty/cassandra/bin/nodetool snapshot --tag snapshot_name`
    ### Note

    A snapshot will place references on the current set of Cassandra sstables. After a snapshot compaction, operations will cause growth in disk space usage as new sstables will be created. To clear a snaphot and recover disk space, run the following command:

    `/opt/msys/3rdParty/cassandra/bin/nodetool clearsnapshot -t snapshot_name`