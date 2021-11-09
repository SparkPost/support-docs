---
lastUpdated: "03/26/2020"
title: "Automated Updates for the Adaptive Rules"
description: "During installation you can choose to install AD rule updates See Installing Additional Packages If you choose this option you will automatically receive updates to the adaptive rules You also have the option of manually installing these rules Doing this is described in the following section This section applies to..."
---


During installation you can choose to install AD rule updates. (See [Installing Additional Packages](/momentum/3/3-reference/install-additional-packages#install.additional.packages.adaptive.updates)). If you choose this option, you will automatically receive updates to the adaptive rules.

You also have the option of manually installing these rules. Doing this is described in the following section.

## <a name="ad.adaptive.update.manual"></a> Manually Installing New Rules

### Note

This section applies to adaptive rule updates and live bounce updates.

If you wish to install new live update rules manually, execute the following steps:

1.  If you enabled adaptive updates during installation, disable them. For instructions on doing this see [Adaptive Rule Updates](/momentum/3/3-reference/3-reference-modules-live-bounce-updates#modules.live.updates.adaptive).

2.  If you are using a proxy server ensure that your configuration is correct. See [“Using a Proxy Server”](/momentum/3/3-ad/ad-adaptive-automated-proxy).

3.  Run the **/opt/msys/ecelerity/bin/lu_pull** command. If you are using the default settings you need not worry about this command's options. For more information about this command see [lu_pull](/momentum/3/3-reference/executable-lu-pull).

If you do not have access to the Message Systems support site on the machine hosting Momentum, use the following procedure to perform an update:

1.  Navigate to the "Product Downloads" page of the Message Systems support site and download the live updates archived file.

2.  Copy this archived file to a temporary directory on each Momentum node and unpack it. This creates a top-level directory named `momentum`.

3.  Change to the directory appropriate to your product version, for example, `3.2`, and then change to the `adaptive` directory and manually execute **`liveupdate.deploy`**.