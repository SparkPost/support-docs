---
title: "Enabling Multiple Custom Tracking Domains"
description: "A tracking domain also referred to as an engagement tracking domain is the domain that a tracked link will redirect through before reaching the final URL path of the original link. It is also used as the path for the tracking pixel to track message opens."
---

A tracking domain (also referred to as an "engagement tracking domain") is the domain that a tracked link will redirect through before reaching the final URL path of the original link. It is also used as the path for the tracking pixel to track message opens. A recipient will see this domain if they mouse over a tracked link in an HTML message or if they receive a plain text message. SparkPost offers the option to configure one or multiple tracking domains per account.

There is a system default tracking domain that is used for tracking if you choose not to configure a custom tracking domain. For SparkPost this is "spgo.io". For SparkPost EU this is "eu.spgo.io". For SparkPost Enterprise, it is the domain configured by your Technical Account Manager during onboarding. Once a single custom tracking domain is configured, it becomes the default and will be the tracking domain used for all of your messages. When you configure multiple tracking domains, you will associate each one with a sending domain and designate one as the default for any sending domains that don't have a tracking domain associated with it.

To summarize, when a message is sent:

* If the sending domain has an associated tracking domain, that tracking domain will be used.
* If the sending domain does not have an associated tracking domain, the designated default tracking domain will be used.
* If there is not a designated default or if no customer tracking domains are configured, SparkPost will use the system default as described above **(Note: This is for SparkPost customers only).**

## Process and Configuration

If you would like to configure your account to use a custom tracking domain, the process is as follows:

1. Determine what subdomain you wish to use for your custom tracking domain (e.g. click.myawesomedomain.com). Please note, the tracking domain **must** be a subdomain and not a root domain!
1. Make sure that the custom tracking domain you choose to use is one for which you have access and permission to modify the DNS.
1. Edit your DNS zone file for your tracking domain to include the new CNAME (this is different depending upon who you use as your domain registrar, such as GoDaddy.com, Ghandi, or Moniker).
1. Create a new CNAME record in your DNS zone file and set the host to your tracking sub-domain (e.g. click.myawesomedomain.com) with the value: "spgo.io" for SparkPost, or "eu.spgo.io" for SparkPost EU **(Note: For SparkPost Enterprise users, your CNAME record value should point to the tracking domain configured during your onboarding).**
1. Once you have completed creating your CNAME record(s) and have successfully saved the DNS changes, complete the set up through either the API or the UI (instructions for both below).
1. Associate the custom tracking domain to a sending domain via UI or API.

## Setting Up Custom Tracking domains through the app

To configure one or more custom tracking domains through the SparkPost app, follow the steps below.

1. Select **Configuration** and then [Tracking Domains](https://app.sparkpost.com/account/tracking-domains) from the main menu.
2. Click **Create Tracking Domain** to add a new tracking domain.

    ![](media/enabling-multiple-custom-tracking-domains/tracking-domains-page.png)

3. Complete the Domain Name and then click **Add Tracking Domain** to complete the process of adding a tracking domain.

    ![](media/enabling-multiple-custom-tracking-domains/create-tracking-domain.png)

## Associate your Tracking domain(s) with one or more Sending domains      

To associate custom tracking domains to sending domains through the SparkPost user interface, the custom tracking domains must be verified first and then follow the steps below.

1. Select **Configuration** and then [Sending Domains](https://app.sparkpost.com/account/sending-domains) from the main menu.
1. Click the **Add a Domain** button to create the new sending domain or select an existing sending domain.
1. Complete the Sending Domain Name for each sending domain and select the Linked Tracking Domain you want to associate with it. **Note**: If you do not select a linked tracking domain, the sending domain will use the default tracking domain.
1. Click the **Add Domain** or **Update Tracking Domain** button to complete the association.
  ![](media/enabling-multiple-custom-tracking-domains/connect-tracking-domain.png)

**Note:** For information on how to configure your Sending Domains, please see [this article](https://www.sparkpost.com/docs/getting-started/getting-started-sparkpost/#preparing-your-from-address).

**Note:** Any newly configured tracking domains have to route back, either through delegation or use of CNAME records, in order for us to be able to report on opens and clicks. Misconfiguration of your tracking domain(s) could mean link redirection could fail, so please ensure you test prior to placing any new domains into production!

**Note:** Deleting a tracking domain will automatically disassociate it from all sending domains.

## API Configuration: Custom Tracking Domains

You can also configure custom tracking domains by using the SparkPost REST API.

* [Creating a Tracking Domain](https://developers.sparkpost.com/api/tracking-domains.html#header-tracking-domains-attributes) 
* [List all Tracking Domains](https://developers.sparkpost.com/api/tracking-domains.html#tracking-domains-create-and-list-get)
* [Retrieve a Tracking Domain](https://developers.sparkpost.com/api/tracking-domains.html#tracking-domains-retrieve,-update,-and-delete-get)
* [Verify a Tracking Domain](https://developers.sparkpost.com/api/tracking-domains.html#tracking-domains-verify-post)
    Initiate a check against the CNAME DNS record for the specified tracking domain. The domain's status object is returned on success. 
* [Deleting a Tracking Domain](https://developers.sparkpost.com/api/tracking-domains.html#tracking-domains-retrieve,-update,-and-delete-delete)

## Using a Tracking Domain

Once a tracking domain has been associated with a verified sending domain, the appropriate tracking domain will be inserted into all links if click tracking is turned on. Note that click tracking is turned on by default and you must specifically include the option to turn it off in either the transmissions options (REST), or the SMTP API (SMTP).

More information about our click tracking options can be found here:

* [REST API (Transmission)](https://developers.sparkpost.com/api/transmissions/)
* [SMTP API (SMTP injection)](https://developers.sparkpost.com/api/smtp/)
