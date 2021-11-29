---
lastUpdated: "03/26/2020"
title: "Start Services"
description: "Start the following services on all nodes Adaptive Delivery Services will be started later Confirm that the following services have been started on all Platform nodes For a combined cluster upgrade perform this action on all nodes in the cluster..."
---

1.  Start the following services on **all nodes** .

    ```
    /etc/init.d/msys-app-users-api start
    /etc/init.d/msys-app-metrics-api start
    /etc/init.d/msys-app-webhooks-api start
    ```

    ### Note

    Adaptive Delivery Services will be started later.

2.  Confirm that the following services have been started on **all Platform nodes** . For a combined cluster upgrade, perform this action on **all nodes in the cluster** .

    ```
    /etc/init.d/msys-app-webhooks-batch start
    /etc/init.d/msys-app-webhooks-transmitter start
    /etc/init.d/msys-app-metrics-etl start
    ```