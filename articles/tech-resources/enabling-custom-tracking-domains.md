---
title: "Enabling Custom Tracking Domains"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/2039594-enabling-custom-tracking-domains"
description: "Setting up your own Custom Tracking Domain is a way for you to change the domain name of the link that click and open tracking uses for your Spark Post com account By default all Spark Post com account engagement tracking uses the spgo io tracking domain However you may..."
---

Setting up your own Custom Tracking Domain is a way for you to change the domain name of the link that click and open tracking uses for your SparkPost.com account. By default, all SparkPost.com account engagement tracking uses the spgo.io tracking domain. However, you may want to have all the links in your outbound email wrapped using your own Custom Tracking Domain (for example, to match your Sending Domain).

This process requires some simple changes to your DNS, and then contacting our support team to complete the process. This can take up to 48 hours to complete once you've completed the steps below and provided the information necessary to support. 

If you would like to configure your [SparkPost.com](http://SparkPost.com) account to use a custom tracking domain, here is the process:

1.  Determine what subdomain you wish to use for your custom tracking domain (e.g. click.myawesomedomain.com):
    *Make sure the custom tracking domain you choose to use is one for which you have access and permission to modify DNS.*                                                                                                                 
2.  Edit your DNS Zonefile for your sending domain to include the new CNAME (this is different depending upon who you use as your domain registrar, such as GoDaddy.com, Ghandi, or Moniker)

    Create a new CNAME record in DNS Zonefile and set the host to your tracking sub-domain (e.g. click.myawesomedomain.com) with the value: [spgo.io](http://spgo.io).

3.  Contact SparkPost support once you have completed creating this CNAME and have successfully saved the DNS changes. In your request, please include the full tracking domain you have configured.

4.  We will verify that DNS changes have propagated completely, and then modify your account accordingly.

5.  We will notify you as soon as we make the change to your account and complete the request.

6.  Once we have notified you of this change, you will begin seeing all of the links (HTML <a></a> tags) wrapped in your new custom tracking domain!