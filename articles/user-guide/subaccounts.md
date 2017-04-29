---
title: "Subaccounts in Sparkpost and SparkPost Enterprise"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/2360320-subaccounts-in-sparkpost-and-sparkpost-enterprise"
description: "Table of Contents Use these links to jump to certain sections of this article Overview Terminology Summary of Subaccount Features Use Cases Master Account Managing Subaccounts Master Account Reporting by Subaccount Master Account Operating on Behalf of a Subaccount Subaccount Self Service a id Overview name Overview Overview a This..."
---

## Table of Contents 

Use these links to jump to certain sections of this article

* [Overview](#lnk-overview)
* [Terminology](#lnk-terminology)
* [Summary of Subaccount Features](#lnk-subaccount-features)
* [Use Cases](#lnk-use-cases)
* [Master Account: Managing Subaccounts](#lnk-managing-subaccounts)
* [Master Account: Reporting by Subaccount](#lnk-reporting-subaccount)
* [Master Account: Operating on Behalf of a Subaccount](#lnk-operating-subaccount)
* [Subaccount Self Service​](#lnk-subaccount-self-service)

### <a id="lnk-overview" name="Overview">Overview</a>

This article is intended for master account administrators (not subaccount users).  It introduces our subaccount functionality in SparkPost and SparkPost Enterprise. The subaccount functionality will allow you to support separate business units, mailstreams, or customers (if you are an email service provider) all from within your SparkPost account. Subaccounts enable you to give each of these units direct access to the SparkPost messaging service APIs. (Subaccount users will not have separate access in the UI.)

### <a id="lnk-terminology" name="Terminology">Terminology</a>

**Master Account** - This refers to the top-level organization from which all subaccounts originate.

**Subaccounts** - The individual entities you create in order to support separate business units, mail streams or individual customers.

**Subaccount Assets** - Data elements that belong solely to a subaccount, such as suppression lists, API keys, sending domains, etc.

### <a id="lnk-subaccount-features" name="Summary of Subaccount Features">Summary of Subaccount Features</a>

You will have the ability to:

* Provision and manage access for individual subaccounts (includes providing an API key, allowed sending domains, etc.)
* Run reports in the UI by subaccount
* Get raw message event data by subaccount
* Get aggregated statistics by subaccount using the Metrics API
* Identify the subaccount on each raw event in the webhook data stream
* Separate suppression lists by subaccount automatically​

In addition, your subaccount users will be able to:

* Inject messages via SMTP
* Inject messages via REST API transmissions (inline templates and inline single/multiple recipients only)
* Set up their own sending domains via the API
* Get raw message event data via the API
* View and manage the suppression list via the API​

### <a id="lnk-use-cases" name="Use Cases">Use Cases</a>

Subaccounts can be used in a variety of ways depending on your needs. The most common reason to set up subaccounts is to give each unit the ability to access/use SparkPost separately (using different sending domains and API keys) and to separate their reporting data accordingly.

The following is a list of potential, common use cases for using subaccounts:

*   You are a service provider for multiple unique customers.
*   You have unique internal business units who operate independently from one another.
*   You have a particular mailstream/campaign that is mission critical and you wish to track and sequester its data separately from other mailstreams/campaigns.

### <a id="lnk-managing-subaccounts" name="Master Account: Managing Subaccounts">Master Account: Managing Subaccounts</a>

**Creating Subaccounts**

Administrators within your business can create as many subaccounts as needed. Creating a subaccount can be done either via the UI or the subaccounts API. When a subaccount is initially created, an API key (unique to that subaccount) will be created with your chosen permissions. Additional subaccount API keys must be created using the UI.

**Note**: Subaccounts cannot be nested beneath other subaccounts.

This is how subaccount creation appears in the UI:

![subaccount create screenshot](media/subaccounts/Screen_Shot_2016-04-19_at_10.55.20_AM_original.png)

The following is a list of permissions supported for subaccount API keys:

* Send outbound messages via SMTP
* Send outbound messages via REST API transmission (inline templates and inline single/multiple recipients only)
* Sending domains (read/write)
* Tracking domains (read/write)
* Message Events API (read only)
* Suppression list (read/write) 

**Default IP Pool/Binding Group Configuration**

**Note**: If you do not have dedicated IPs, you should not set default IP Pools.

After creating a subaccount, the master account has the option of assigning a default IP pool/binding group to the subaccount. This operation can be performed either through the UI or the API; all you need to do is provide the IP pool ID/binding group name.

**Note**: Minimal validation is done against the value set in the IP pool ID key/field. If a mismatch error occurs, all attempted messages from that subaccount will be rejected.

**Note**: If you do not set a default IP pool/binding group for a subaccount, it will use the system level default setting for your default IP pool/binding group. This is likely the safest configuration option unless there is a compelling business requirement to do otherwise.
​
**Permissions**

Only master account users can create subaccounts
If you create a UI user, they will have access to both the master account and subaccounts, so it is critical that be taken into account when provisioning UI accounts on your system.

**Subaccount Statuses**

Administrators can also choose to edit the subaccount name, or change the subaccount status. There are three types of statues possible for a subaccount:

* **Active** - the subaccount can use all permissions granted with their API key
* **Suspended** - the subaccount permissions are changed to read-only. The subaccount cannot send messages any longer, and they cannot use create, edit, or delete operations. The subaccount can still view and retrieve assets in this state.
* **Terminated** - this status functions the same as suspended, but implies a permanent status change. Master accounts can use this status to indicate that the subaccount is no longer a valid customer/business unit/message stream. Currently there is no support for deletion of subaccounts.

**What to Provide Subaccount Users**

All that you need to give your customer/subaccount user(s) is the subaccount API key - they will use it for all operations afforded via the default API key created upon subaccount creation.

### <a id="lnk-reporting-subaccount" name="Master Account: Reporting by Subaccount">Master Account: Reporting by Subaccount</a>

Master accounts can filter reporting by a single subaccount in the UI. These reports include:

* Summary
* Bounces
* Rejections
* Accepted
* Delayed
* Engagement​

The master account can also filter reporting by a single subaccount in the API if a subaccount query string is added. This includes data found in the:​

* Message Events API
* Metrics API 

Subaccount event data is provided via webhooks and the message events API. The subaccount_id key/value pair indicates which subaccount the event is attributed. You can use this attribute to filter/manage raw events by subaccount outside of SparkPost. Please note, you cannot create a webhook to stream only raw event data for a specific subaccount.

### <a id="lnk-operating-subaccount" name="Master Account: Operating on Behalf of a Subaccount">Master Account: Operating on Behalf of a Subaccount</a>

For each of the APIs listed below, the master account may perform several operations on behalf of the subaccount. If you wish to perform an action on behalf of a subaccount, you must include the X-MSYS-SUBACCOUNT HTTP header (SMTP injection is an exception; see below) with the value set to the subaccount ID associated with the selected subaccount.

**Sending Domain**

The master account may provision sending domains on behalf of the subaccount using the UI or sending domains API by including the X-MSYS-SUBACCOUNT HTTP header.

When a sending domain is created it will be associated with the designated subaccount provided in the X-MSYS-SUBACCOUNT HTTP header (API) or the subaccount field in the UI. If the header is not included in the API call, the sending domain will instead be associated to the master account.

If you wish to associate a sending domain to a different subaccount, the sending domain must be deleted and re-created with the desired subaccount ID assigned to it.

**Note**: The master account can create a sending domain and leave it assigned to the master account. The master account can then set a flag in either the API or the UI to indicate that the sending domain can be used by all of their subaccounts and the master account. In the API, the field is called "shared with subaccounts" and in the UI, there is a checkbox labeled "**share with subaccounts**                 ". One of these must be enabled in order for both the master account and all subaccounts to be able to use the same sending domain.

**Tracking Domains**

The master account can perform CRUD (create/read/update/delete) operations on tracking domains for subaccounts in both the UI and API.

* The master account may assign a tracking domain to a subaccount upon creation.
* The master account has the option to filter the list of tracking domains by subaccount.
* The master account may verify a subaccount tracking domain if they have access to the DNS record.

The master account has the ability to link a tracking domain to a sending domain. This option is located on the sending domains page. **Note**: Both the sending domain and tracking domain must both be assigned to the same subaccount. Also, tracking domains that are linked to the "shared" sending domains can also be used by all the subaccounts.

If the "Hide Subaccounts" checkbox is checked on the tracking domains page in the UI, only master account tracking domains will be displayed.

The master account has the ability to set a default tracking domain for a subaccount. Only verified tracking domains can set as default. Note: Subaccounts can have more than one tracking domain assigned to them. If the subaccount does not have an associated tracking domain, it will use the master account default tracking domain.

**Suppression Lists**

The master account may update a subaccount's suppression list using the suppression list API with the X-MSYS-SUBACCOUNT HTTP header included. Suppression list API calls without the X-MSYS-SUBACCOUNT HTTP header will be executed against the master account's suppression list.

Subaccount traffic is checked against the subaccount's suppresion list only, and does not check against the master account's suppression list. If a master account wants an address suppressed across all subaccounts, each subaccount suppression list must be updated accordingly.

**Transmissions API**

The master account may send as the subaccount with the transmission API by including the X-MSYS-SUBACCOUNT HTTP header. If the header is not present, the transmission will be executed as the master account.

**SMTP Injection**

The master account may submit traffic on behalf of the subaccount SMTP by providing the subaccount's API key with an SMTP grant in the TLS auth-password field. **Note**: The master account can send using a master account API key by appending the standard "SMTP_Injection" user with the subaccount ID. Please refer to [the documentation](https://developers.sparkpost.com/api/?_ga=1.144252341.1033930248.1481562971#/introduction/smtp-relay-endpoints) for specifics on how to perform this operation.

### <a id="lnk-subaccount-self-service" name="Subaccount Self Service">Subaccount Self Service</a>

Subaccounts have limited access to system operations, data, and assets. The access will be limited to the API key permissions you provide to the subaccount. Subaccounts can only retrieve their own message events data, which is sourced from the message events API.

* The following APIs have self-service subaccount support; they will only be available for use by the subaccount if they have been assigned the appropriate permission by the master account:
* SMTP API - SMTP injections
* Transmission API - REST injections (inline templates and single/multiple inline recipients only)
* Message Events API
* Sending Domains API
* Tracking Domains API
* Suppression List API​

Sending domain and tracking domain functionality afforded to subaccount users are create, edit, and delete, as well as being able to verify their own sending domain/tracking domain. Subaccounts can also edit and retrieve their unique suppression lists.

**Note**: When making API requests for the above reports, the subaccount does not need to specify the subaccount ID in their payloads. Even if this is included, no matter the value, it will always be overwritten since the subaccount ID is tied to the API key associated with it. Due to this restriction, a subaccount will not be able to spoof a different subaccount ID and get access to any other subaccount's or master account's data or assets.

Full documentation for creating, listing, and editing subaccounts can be found in our API documentation [here](https://developers.sparkpost.com/api/?_ga=1.50518185.1033930248.1481562971#/reference/subaccounts-coming-in-april!). The documentation for the supported API calls listed above also includes additional options for subaccounts.