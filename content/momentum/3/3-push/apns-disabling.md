---
lastUpdated: "03/26/2020"
title: "Disabling APNs"
description: "To disable AP Ns at the domain level remove the routes and the delivery method options from the scope where you wish to disable AP Ns In Example 3 1 Configuring for AP Ns all you need do is remove them from the apn example com domain If you have..."
---

To disable APNs at the domain level remove the `routes` and the `delivery_method` options from the scope where you wish to disable APNs. In [“Configuring for APNs”](/momentum/3/3-push/apns-using#apns.configuring.apns) all you need do is remove them from the `apn_example.com` domain.

### Note

If you have some domains that are APNs enabled and some that are not, do not configure the `routes` and the `delivery_method` options in a global context. Only set them within the domain scope as shown in [“Configuring for APNs”](/momentum/3/3-push/apns-using#apns.configuring.apns).

To disable APNs entirely, remove the `apn` module and all options related to Apple push notifications.