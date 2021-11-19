---
lastUpdated: "03/26/2020"
title: "Start Services"
description: "Start the following services Adaptive Delivery Services will be started later Confirm that the following services have been started..."
---

1.  Start the following services.

    ```
    /etc/init.d/msys-app-users-api start
    /etc/init.d/msys-app-metrics-api start
    /etc/init.d/msys-app-webhooks-api start
    ```

    ### Note

    Adaptive Delivery Services will be started later.

2.  Confirm that the following services have been started.

    ```
    /etc/init.d/msys-app-webhooks-batch start
    /etc/init.d/msys-app-webhooks-transmitter start
    /etc/init.d/msys-app-metrics-etl start
    ```