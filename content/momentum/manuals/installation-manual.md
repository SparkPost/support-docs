---
title: "Installation Manual"
subtitle: "Momentum"
version: "5.3"
date: "June 2026"
description: "How to install Momentum 5.3 on Red Hat Enterprise Linux (RHEL) 8, 9, or 10 — as a single standalone MTA or in a cluster with a Cluster Manager node — including pre-requisites, node configuration, optional PostgreSQL setup, and starting services."
lastUpdated: "06/05/2026"
---

# 1. Introduction

- The Momentum 5.3 configuration is primarily intended for new Momentum on-premise installations in a Red Hat Enterprise Linux (RHEL) operating environment at versions 8, 9, or 10.

- Following the initial installation of the Momentum 5.3 release configuration, the 5.3 Webhooks functions and/or the REST Transmissions API and Inline Message Generation functions can be added in separate procedures if desired.

  - In 5.3 (as introduced in 4.2.31), these features no longer require the installation of the Cassandra database. Instructions for adding these capabilities are available from Momentum Customer Support. Please contact them before doing the installation if the additional functionality is desired.

- Installation can be done as a single standalone MTA or in a cluster configuration. In a standalone MTA configuration, there is no log aggregation. In a cluster configuration, a cluster manager is used for cluster-wide log aggregation of files from the MTA nodes. The instructions in this manual will note where they apply to only one of these configurations.

# 2. Download the Software Bundle

1.  Download the Momentum software bundle from the [Message Systems Support](https://support.messagesystems.com/start.php) website for every node that you will install.

2.  Copy the bundle to the **/var/tmp/** directory on each node. Note that throughout this document, specific bundle filenames are shown, and their resulting install directory names are only examples.

    ```bash
    cp momentum-mta-bundle-5.3.x.yyyyy.rhel<ver>.<arch>.tar.gz /var/tmp/
    ```

    where **\<ver\>** is **8**, **9**, or **10**, and **\<arch\>** is **x86_64** or **aarch64** (except to RHEL 8).

    > **Note:** As introduced in 4.4.0, the MTA-only bundles contain all the necessary components for a subsequent enabling of the 5.3 Webhooks and/or the REST APIs and Message Generation after the initial installation.

3.  Unpack the tarball on each node and set the repository directory.

    ```bash
    cd /var/tmp
    tar -zxf momentum-mta-bundle-5.3.x.yyyyy.rhel<ver>.<arch>.tar.gz
    cd momentum-mta-5.3.x.yyyyy/
    ./setrepodir
    ```

    > **Note:** The **./setrepodir** script establishes some environmental parameters for the installation. If the installation is not completed within the same terminal session in which it was started, the **./setrepodir** command _must_ be re-executed in any new session(s) before executing any of the **dnf** commands for the installation.

4.  Your valid Momentum license file will be in each MTA node's **/opt/msys/ecelerity/etc** folder. Your licenses should be pulled automatically once they have been issued.

5.  If your node does not have public internet access during installation, you will need to manually add your valid Momentum license files.

# 3. Installing Momentum

## 3.1. Install Pre-Requisite Packages

Momentum has some dependencies on packages provided by the _Extra Packages for Enterprise Linux_ (EPEL). Make sure it is installed before installing Momentum.

For installation of EPEL on Red Hat Enterprise Linux (RHEL) 8, 9, and 10 (the **\<ver\>** number below):

```bash
sudo rpm -ivh \
  https://dl.fedoraproject.org/pub/epel/epel-release-latest-<ver>.noarch.rpm
```

Momentum has a dependency on the **leveldb** package as well, but while for RHEL 8 and 9 this package is available through EPEL, in RHEL 10, it needs to be downloaded and installed separately:

```bash
sudo rpm -ivh \
  https://rpms.remirepo.net/enterprise/10/remi/<arch>/leveldb-<ver>.el10.remi.<arch>.rpm
```

where **\<ver\>** is the available package version, and **\<arch\>** is **x86_64** or **aarch64**.

## 3.2. Installing the MTA Node(s)

For every node you designate as an MTA, perform the following:

```bash
cd /var/tmp/momentum-mta-5.3.x.yyyyy
sudo dnf install -y --config momentum.repo --enablerepo momentum msys-role-mta
```

> **Note:** If you receive an error saying **libssh2** is needed, proceed with a manual installation of **libssh2**.

> **Note:** A few utilities under **/opt/msys/ecelerity/bin** may need additional Perl modules, which can be retrieved from CPAN using the command: **sudo cpan install \<module\>**. Alternatively, you may be able to find the corresponding RPM package for installation on your platform.

## 3.3. [OPTIONAL] Installing Cluster Manager Node

> **Note:** Skip this whole section for single-node installation.

In a fully clustered environment, you can designate a dedicated host as the Cluster Manager. This node can then:

- Consolidate all of the MTA logs (acting as a "Log Aggregator")

- Act as one of the MSGC server members to ensure that clustered metrics are maintained

- (If some of these Momentum features - mostly legacy - are intended to be used: web console/UI; stats producer; mobility; seedlist/ReturnPath integration, then the Cluster Manager is the node where you run the shared PostgreSQL database)

### 3.3.1. Install PostgreSQL

For Red Hat Enterprise Linux (RHEL) 10, install the package provided by the standard repositories, then set up the database server:

```bash
sudo dnf install -y postgresql
sudo /usr/bin/postgresql-setup initdb
sudo systemctl enable --now postgresql
```

For RHEL 8 and 9, the packages supplied by the standard repositories are for versions no longer supported, so it is recommended to install a valid package from the official PostgreSQL repository:

```bash
sudo dnf install -y \
  https://download.postgresql.org/pub/repos/yum/reporpms/EL-<ver>-<arch>/pgdg-redhat-repo-latest.noarch.rpm
sudo dnf -qy module disable postgresql
sudo dnf install -y postgresql16-server
sudo /usr/pgsql-16/bin/postgresql-16-setup initdb
sudo systemctl enable --now postgresql-16
export PATH=/usr/pgsql-16/bin:$PATH  # e.g. for psql
```

where **\<ver\>** is **8** or **9**, and **\<arch\>** is **x86_64** or **aarch64** (only for RHEL 9).

### 3.3.2. Set Up the Cluster Manager

Install these packages on the Cluster Manager node:

```bash
cd /var/tmp/momentum-mta-5.3.x.yyyyy
sudo dnf install -y --config momentum.repo --enablerepo momentum \
  msys-role-manager msys-role-db msys-ecelerity-mobility-db
```

# 4. Configuring the Nodes

## 4.1. Common Configuration

Momentum offers numerous configuration options, allowing for the customization of behavior to suit a wide range of needs. The **sample-configs/default** directory contains a basic set of options that will allow the basic services to start. For every node, regardless of whether it is the Cluster Manager or an MTA, copy the required files from the **sample-configs/default** directory to the active configuration directory. These can be adjusted as required once the initial installation is completed.

```bash
sudo -u ecuser mkdir -p /opt/msys/ecelerity/etc/conf/default
cd /opt/msys/ecelerity/etc/sample-configs/default
sudo -u ecuser cp {ecelerity.conf,ecelerity-cluster.conf,common.conf} \
  /opt/msys/ecelerity/etc/conf/default/
```

## 4.2. License

Your valid Momentum license file will be in each node's **/opt/msys/ecelerity/etc** folder. Your licenses should be pulled automatically once they have been issued. You can also run the following command to pull your license:

```bash
/opt/msys/ecelerity/bin/ec_lic -f
```

If your node does not have public internet access during installation, you will need to manually add your valid Momentum license files.

> **Note:** Depending on whether FIPS mode is enabled and which versions of the FIPS modules are running in your environment, the Momentum 5.3 license may be constrained to be signed by specific methods. If the regular license file is not validated under such restrictions, please contact the Momentum Customer Support to obtain a proper license file for your case.

## 4.3. MTA Configuration

### 4.3.1. [OPTIONAL] Set Up the Adaptive Live Update

Adaptive's **lu_pull** utility has a configuration file that controls automatic updates to **adaptive_rules.lua** and bounces classification files. If Momentum is configured to use adaptive, and there's no **liveupdate.conf** file in **/opt/msys/ecelerity/etc**, create one from the **sample-config**:

```bash
cd /opt/msys/ecelerity/etc/sample-configs
sudo -u ecuser cp liveupdate.conf /opt/msys/ecelerity/etc/
```

## 4.4. [OPTIONAL] Cluster Configuration

> **Note:** Skip this whole section for single-node installation.

### 4.4.1. Basic Configuration

1.  Copy the **eccluster.conf** file from the **sample-configs/default** directory:

    ```bash
    cd /opt/msys/ecelerity/etc/sample-configs/default
    sudo -u ecuser cp eccluster.conf /opt/msys/ecelerity/etc/conf/default/
    ```

2.  Copy the **msgc_server.conf** file to the appropriate location on the Cluster Manager node:

    ```bash
    sudo -u ecuser mkdir -p /opt/msys/ecelerity/etc/conf/global
    sudo -u ecuser cp \
      /opt/msys/ecelerity/etc/sample-configs/default/msgc_server.conf \
      /opt/msys/ecelerity/etc/conf/global/
    ```

### 4.4.2. [OPTIONAL] Configure the Log Aggregation

1.  Edit **/opt/msys/ecelerity/etc/conf/global/msgc_server.conf.** For EVERY node in the cluster (i.e., the Cluster Manager and all MTAs) you are installing, substitute the hostnames and IP addresses as appropriate.

    ```
    msgc_server {
      peers = [
        mgr.yourdomain.com = "10.77.0.219"
        mta1.yourdomain.com = "10.77.1.6"
        mta2.yourdomain.com = "10.77.1.8"
        ...
        mtaN.yourdomain.com = "10.77.1.10"
      ]
    }
    ```

2.  Remove the aggregator comment prefix (**#aggr#**) wherever it occurs in the **/opt/msys/ecelerity/etc/conf/default/ecelerity-cluster.conf** configuration file.

    ```
    #aggr# ec_logger "ec_logger_cluster" {
    #aggr#   mainlog = "cluster:///var/log/ecelerity/mainlog.cluster=>master"
    #aggr#   paniclog = "cluster:///var/log/ecelerity/paniclog.cluster=>master"
    #aggr#   rejectlog = "cluster:///var/log/ecelerity/rejectlog.cluster=>master"
    #aggr#   acctlog = "cluster:///var/log/ecelerity/acctlog.cluster=>master"
    #aggr# }
    #aggr# bounce_logger "bounce_logger_cluster" {
    #aggr#   bouncelog = "cluster:///var/log/ecelerity/bouncelog.cluster=>master"
    #aggr# }
    (...)
    cluster {
      logs = [
    #aggr#   rejectlog = "/var/log/ecelerity/rejectlog.cluster"
    #aggr#   paniclog = "/var/log/ecelerity/paniclog.cluster"
    #aggr#   mainlog = "/var/log/ecelerity/mainlog.cluster"
    #aggr#   acctlog = "/var/log/ecelerity/acctlog.cluster"
    #aggr#   bouncelog = "/var/log/ecelerity/bouncelog.cluster"
      ]
    }
    ```

3.  For EACH MTA node in the cluster, copy both **msgc_server.conf** and **ecelerity-cluster.conf** files from the Cluster Manager node.

    ```bash
    sudo -u ecuser mkdir -p /opt/msys/ecelerity/etc/conf/global
    cd /opt/msys/ecelerity/etc/conf/
    scp mgr.yourdomain.com:/opt/msys/ecelerity/etc/conf/global/msgc_server.conf \
      global/
    scp \
      mgr.yourdomain.com:/opt/msys/ecelerity/etc/conf/default/ecelerity-cluster.conf \
      default/
    ```

4.  For EVERY node in the cluster (the Cluster Manager and all MTAs), include the cluster configuration file by removing the comment character (#) from this line in **ecelerity.conf**:

    ```
    # include "ecelerity-cluster.conf"
    ```

### 4.4.3. [OPTIONAL] Configure the PostgreSQL Database Server

1.  **(IMPORTANT!)** For this particular setup, change to the **root** user in the Cluster Manager node.

    ```bash
    sudo su
    ```

2.  Install PostgreSQL in the Cluster Manager node following the instructions of section 3.3.1 (may have already been installed due to former dependencies).

3.  Install the database schema provided by Momentum:

    ```bash
    cd /var/tmp/momentum-mta-5.3.x.yyyyy
    dnf install -y --config momentum.repo --enablerepo momentum \
      msys-ecelerity-schema
    ```

4.  Create a random service password file named **.svcpasswd** that can be used by the various services to access the database. Additionally, logging into the console remotely requires an additional username/password combination. By convention, this user is **admin**, but you can use any username you want.

    ```bash
    mkdir -p /opt/msys/etc
    < /dev/urandom tr -dc _A-Z-a-z-0-9 | head -c8 >/opt/msys/etc/.svcpasswd
    export SVCPASSWD=`cat /opt/msys/etc/.svcpasswd`
    export ADMINPASS=admin
    ```

5.  Create the PostgreSQL database host file. Momentum requires a PostgreSQL database for console authentication and other minor modules. This is a very low-usage database that is installed on the Cluster Manager for simplicity in cluster installations.

    ```bash
    MyHostName=`hostname -f`
    echo $MyHostName > /opt/msys/etc/.dbhost
    ```

6.  Configure PostgreSQL with the "ecelerity" schema.

    ```bash
    systemctl restart postgresql  # or postgresql-16 in RHEL 8/9
    sleep 40
    cd /opt/msys/ecelerity/etc
    ../bin/init_schema --password $SVCPASSWD --admin-password $ADMINPASS
    ```

    You should see something like this:

    ```
    Loading sql/common.sql into common...done!
    Loading sql/console.sql into console...done!
    Loading sql/returnpath.sql into returnpath...done!
    Loading sql/seedlist.sql into seedlist...done!
    Loading sql/adaptive.sql into adaptive...done!
    ```

7.  **Only if** there were any problems creating the "ecelerity" database in PostgreSQL, invoke the following command:

    > **Note:** DO NOT run this command if there were no errors when executing **init_schema** in the previous step.

    ```bash
    /opt/msys/3rdParty/bin/dropdb -U ecuser ecelerity
    ```

    Then try to rerun **init_schema**.

8.  Create a **/opt/msys/ecelerity/etc/conf/default/ecdb.conf** file with the database source information.

    ```bash
    export MyHostName=`cat /opt/msys/etc/.dbhost`
    export SVCPASSWD=`cat /opt/msys/etc/.svcpasswd`
    cat << EOT > /opt/msys/ecelerity/etc/conf/default/ecdb.conf
    Datasource "ecdb" { uri = ( "pgsql:host=$MyHostName;dbname=ecelerity;user=ecuser;password=$SVCPASSWD" )}
    EOT
    ```

9.  Add the following line to the **/opt/msys/ecelerity/etc/conf/default/eccluster.conf** file:

    ```
    readonly_include "ecdb.conf"
    ```

    > **Note:** Make sure to add the line AFTER the inclusion of **common.conf** file, otherwise the database configuration in **ecdb.conf** may be overloaded by **common.conf**.

10. Copy the **ecdb.conf** file to all MTA nodes in the cluster.

11. Add this line to the **/opt/msys/ecelerity/etc/conf/default/ecelerity.conf** configuration file on EACH MTA node.

    ```
    readonly_include "ecdb.conf"
    ```

12. Remove (or comment out) these lines from the **common.conf** file in EVERY node:

    ```
    # Datasource "ecdb" {
    #   uri = ( "pgsql:dbname=ecelerity;user=ecuser" )
    # }
    ```

    Otherwise, they can inadvertently overload the settings from **ecdb.conf**.

13. Test the Momentum configuration in EVERY node (the Cluster Manager and all MTAs). Enter the username admin and your $ADMINPASS password when prompted. After logging in, you will get a ">" prompt and will be able to type various commands, such as "version" and "summary".

    ```bash
    /opt/msys/ecelerity/bin/ec_console shim://
    # Login with admin/$ADMINPASS.
    # (...)
    quit
    ```

# 5. Start Momentum Services

Depending on the node's role, start the relevant service.

- If the node is the Cluster Manager:

  ```bash
  sudo systemctl start eccmgr
  ```

- If the node is an MTA:

  ```bash
  sudo systemctl start ecelerity
  ```
