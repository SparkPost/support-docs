---
lastUpdated: "03/26/2020"
title: "Download the Software Bundle and Prepare"
description: "Whether you intend to perform a new install or an upgrade you need to download the software bundle on all nodes Download the appropriate Momentum software bundle from the Message Systems Support website for every node that you will install or upgrade Copy the bundle to the var tmp directory..."
---

Whether you intend to perform a **new install**         or an **upgrade** you need to download the software bundle **on all nodes** .

1.  Download the appropriate Momentum software bundle from the [Message Systems Support website](https://support.messagesystems.com/start.php) for every node that you will install or upgrade.

2.  Copy the bundle to the `/var/tmp` directory on each of the nodes.

    **NOTE:** Here, and throughout the installation documentation, specific releases and revisions shown are just examples, and your appropriate Momentum software bundle will be different.

    `cp momentum-bundle-4.2.1.50062.rhel6.x86_64.tar.gz /var/tmp/`
3.  Unpack the tarball on each node, set the repository directory, and create a "convenience file".

    ```
    cd /var/tmp
    tar -zxf momentum-bundle-4.2.1.50062.rhel6.x86_64.tar.gz
    cd momentum-4.2.1.50062/
    ./setrepodir
    pwd >/var/tmp/inst.dir
    ```

4.  Confirm your valid Momentum `license` file is in the `/opt/msys/ecelerity/etc` folder on each MTA node. Your licenses should be pulled automatically once they have been issued.

    If your node does not have public internet access during installation, you will need to add your valid Momentum `license` files manually.