---
title: "Subaccounts in Sparkpost and SparkPost Enterprise"
description: "Table of Contents Use these links to jump to certain sections of this article Overview Terminology Summary of Subaccount Features Use Cases Master Account Managing Subaccounts Master Account Reporting by Subaccount Master Account Operating on Behalf of a Subaccount Subaccount Self Service a id Overview name Overview Overview a This..."
---

## Table of Contents

Use these links to jump to certain sections of this article

* [Overview](#overview)
* [Terminology](#terminology)
* [Summary of Subaccount Features](#summary-of-subaccount-features)
* [Use Cases](#use-cases)
* [Master Account: Managing Subaccounts](#master-account-managing-subaccounts)
* [Master Account: Reporting by Subaccount](#master-account-reporting-by-subaccount)
* [Master Account: Operating on Behalf of a Subaccount](#master-account-operating-on-behalf-of-a-subaccount)
* [Subaccount Self Service​](#subaccount-self-service)

### Overview

This article is intended for master account administrators (not subaccount users).  It introduces our subaccount functionality in SparkPost and SparkPost Enterprise. The subaccount functionality will allow you to support separate business units, mailstreams, or customers (if you are an email service provider) all from within your SparkPost account. Subaccounts enable you to give each of these units direct access to the SparkPost messaging service APIs. (Subaccount users will not have separate access in the UI.)

### Terminology

**Master Account** - This refers to the top-level organization from which all subaccounts originate.

**Subaccounts** - The individual entities you create in order to support separate business units, mail streams or individual customers.

**Subaccount Assets** - Data elements that belong solely to a subaccount, such as suppression lists, API keys, sending domains, templates, etc.

### Summary of Subaccount Features

You will have the ability to:

* Provision and manage access for individual subaccounts (includes providing an API key, allowed sending domains, etc.)
* Run reports in the UI by subaccount
* Get raw message event data by subaccount
* Get aggregated statistics by subaccount using the Metrics API
* Separate suppression lists by subaccount automatically
* Create a webhook that will only receive raw event data for a subaccount
* Identify the subaccount on each raw event in the webhook data stream
* Create, edit, view, and use templates by subaccount

In addition, your subaccount users will be able to:

* Inject messages via SMTP
* Inject messages via REST API transmissions (inline templates and inline single/multiple recipients only)
* Set up their own sending domains via the API
* Get raw message event data via the API
* View and manage the suppression list via the API​
* Create their own webhook via the API
* Create, edit, view, and use templates

### Use Cases

Subaccounts can be used in a variety of ways depending on your needs. The most common reason to set up subaccounts is to give each unit the ability to access/use SparkPost separately (using different sending domains and API keys) and to separate their reporting data accordingly.

The following is a list of potential, common use cases for using subaccounts:

*   You are a service provider for multiple unique customers.
*   You have unique internal business units who operate independently from one another.
*   You have a particular mailstream/campaign that is mission critical and you wish to track and sequester its data separately from other mailstreams/campaigns.

### Master Account: Managing Subaccounts

**Creating Subaccounts**

Administrators within your business can create as many subaccounts as needed. Creating a subaccount can be done either via the UI or the subaccounts API. When a subaccount is initially created, an API key unique to that subaccount will be created with your chosen permissions, unless you have elected to not create an initial API key via the UI or API (see note immediately below). Additional subaccount API keys must be created using the UI.

**Note**: You have the option to skip the initial creation of an API key when first creating a subaccount. This operation can be done via the UI or the API. The following is a screenshot of the UI skipping initial subaccount API key creation. Note the checkbox stating "create API key" is unchecked, which has removed all API key options from the UI.

![subaccount api key option](media/subaccounts/skip-api-key.png)

For documentation on how to skip API key generation upon initial subaccount creation by using the "setup_api_key" boolean string, please click [here.](https://developers.sparkpost.com/api/subaccounts.html#subaccounts-subaccounts-collection-post)

**Note**: Subaccounts cannot be nested beneath other subaccounts.

This is how subaccount creation appears in the UI:

![subaccount create screenshot](media/subaccounts/create-subaccount-api-key.png)

The following is a list of permissions supported for subaccount API keys:

* Send outbound messages via SMTP
* Send outbound messages via REST API transmission (inline templates and inline single/multiple recipients only)
* Sending domains (read/write)
* Tracking domains (read/write)
* Message Events API (read only)
* Suppression list (read/write) 
* Event Webhooks (read/write)
* Templates (read/write/preview)

**Default IP Pool/Binding Group Configuration**

**Note**: If you do not have dedicated IPs, you should not set default IP Pools.

After creating a subaccount, the master account has the option of assigning a default IP pool/binding group to the subaccount.  All messages injected by the subaccount will then automatically use that IP Pool. This means that subaccount transmissions do not need to specify the ip_pool value.  Subaccounts will receive an error if they attempt to specify an ip_pool value which differs from the assigned default IP pool.  The assignment of the subaccount's default IP pool can be performed through either the subaccounts UI or subaccounts API endpoint.

**Note**: Minimal validation is done against the value set in the IP pool ID key/field. If a mismatch error occurs, all attempted messages from that subaccount will be rejected.

**Note**: If you do not set a default IP pool/binding group for a subaccount, the subaccount may use any of the account's IP pools.  If no such IP Pool is specified in the subaccount's injected email, the system will use either the account level default IP pool (if such a pool exists), or fallback to the sparkpost shared IP Pool.

**Permissions**

Only master account users can create subaccounts. If you create a UI user, they will have access to both the master account and subaccounts, so it is critical that be taken into account when provisioning UI accounts on your system.

**Subaccount Statuses**

Administrators can also choose to edit the subaccount name, or change the subaccount status. There are three types of statues possible for a subaccount:

* **Active** - the subaccount can use all permissions granted with their API key
* **Suspended** - the subaccount permissions are changed to read-only. The subaccount cannot send messages any longer, and they cannot use create, edit, or delete operations. The subaccount can still view and retrieve assets in this state.
* **Terminated** - this status functions the same as suspended, but implies a permanent status change. Master accounts can use this status to indicate that the subaccount is no longer a valid customer/business unit/message stream. Currently there is no support for deletion of subaccounts.

**What to Provide Subaccount Users**

All that you need to give your customer/subaccount user(s) is the subaccount API key - they will use it for all operations afforded via the default API key created upon subaccount creation.

### Master Account: Reporting by Subaccount

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

Subaccount event data is provided via webhooks and the message events API. The subaccount_id key/value pair indicates which subaccount the event is attributed. You can use this attribute to filter/manage raw events by subaccount outside of SparkPost. Please note, you can create a webhook to stream only raw event data for a specific subaccount.

### Master Account: Operating on Behalf of a Subaccount

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

**Event Webhooks**

The master account may create a webhook as the subaccount with the webhooks API by including the X-MSYS-SUBACCOUNT HTTP header. If the header is 0 only events for non-subaccounts will be posted.  If the header is not present, the webhook contain all events for the account.

When creating new webhooks within the UI, leaving the subaccount field blank will cause the created webhook to contain all events for the account. When selecting Master Account, the webhook will only contain events for non-subaccounts. Selecting a subaccount will result in the webhook containing events from that subaccount only.

![subaccount management for webhooks screenshot](media/subaccounts/webhook-for-subaccount.png)

**Templates**


The master account can create templates via the API and assign it to a single subaccount by using the X-MSYS-SUBACCOUNT HTTP header, or share it with all subaccounts using a master account API key. Templates can also be created on behalf of subaccounts using the SparkPost UI in the "Templates" page, as per the screenshot below:

![subaccount management for templates screenshot](media/subaccounts/template-for-subaccount.png)

**Notes on subaccount template usage:** If a master account creates a template and does not elect to share it with subaccounts, only the master account may use that template. If the template is shared with all subaccounts, every subaccount has access to use the template, but only the master account has edit permissions. If the master account creates a template on behalf of a subaccount and assigns it to a single subaccount, both the master account and subaccount can use and edit that template.

### Subaccount Self Service

Subaccounts have limited access to system operations, data, and assets. The access will be limited to the API key permissions you provide to the subaccount. Subaccounts can only retrieve their own message events data, which is sourced from the message events API.

* The following APIs have self-service subaccount support; they will only be available for use by the subaccount if they have been assigned the appropriate permission by the master account:
* SMTP API - SMTP injections
* Transmission API - REST injections (inline templates and single/multiple inline recipients only)
* Message Events API
* Sending Domains API
* Tracking Domains API
* Suppression List API
* Event Webhooks API
* Templates API

Sending domain and tracking domain functionality afforded to subaccount users are create, edit, and delete, as well as being able to verify their own sending domain/tracking domain. Subaccounts can also edit and retrieve their unique suppression lists, as well as create, edit, and delete their own templates.

**Note**: When making API requests for the above reports, the subaccount does not need to specify the subaccount ID in their payloads. Even if this is included, no matter the value, it will always be overwritten since the subaccount ID is tied to the API key associated with it. Due to this restriction, a subaccount will not be able to spoof a different subaccount ID and get access to any other subaccount's or master account's data or assets.

Full documentation for creating, listing, and editing subaccounts can be found in our API documentation [here](https://developers.sparkpost.com/api/?_ga=1.50518185.1033930248.1481562971#/reference/subaccounts-coming-in-april!). The documentation for the supported API calls listed above also includes additional options for subaccounts.
