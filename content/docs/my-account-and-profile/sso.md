---
lastUpdated: "01/25/2021"
title: "Single Sign-On (SSO)"
description: "Learn how to enable SSO for your SparkPost account and get answers to common SSO questions."
---

SparkPost supports single sign-on (SSO) through any SAML provider. SSO is enabled via the UI by an Admin level user. You can also set up [SCIM user provisioning through OKTA](https://www.sparkpost.com/docs/my-account-and-profile/scim/).

Check this [article](https://www.sparkpost.com/docs/faq/difference-between-starter-and-premier/) to verify that your account's plan level supports SSO.

## Enable SSO

Enabling SSO is a 3-step process:

### 1. Enable for Account:
Go to your [Account Settings](https://app.sparkpost.com/account/settings)([EU](https://app.eu.sparkpost.com/account/settings)) and click on "Provision SSO" to upload your SAML configuration file. Once provisioned, you can enable SSO for the account.

### 2. Enable for users:
Update your users in from the [Users](https://app.sparkpost.com/account/users)([EU](https://app.eu.sparkpost.com/account/users)) page to enable SSO.

### 3. Configure your identity provider with the callback URL:
1. Your identity provider will need the callback URL for SparkPost. Please refer to your identity provider for specific instructions on where to submit this information.
1. The callback URL is:
US: `https://api.sparkpost.com/api/v1/users/saml/consume`

EU: `https://api.eu.sparkpost.com/api/v1/users/saml/consume`

Enterprise: `https://<api-host>/api/v1/users/saml/consume`
*(Note: Enterprise accounts must replace < api-host > with your SparkPost tenant API URL. For example https://< tenant >.api.e.sparkpost.com Please see your TAM if you need assistance determining your callback URL.)*

## Disable SSO

Disabling SSO is a 2-step process.

### 1. Disable for account:
Go to your [Account Settings](https://app.sparkpost.com/account/settings)([EU](https://app.eu.sparkpost.com/account/settings)) and click on "Provision SSO" to upload your SAML configuration file. Once provisioned, you can enable SSO for the account.

### 2. Disable users:
Update your users in from the [Users](https://app.sparkpost.com/account/users)([EU](https://app.eu.sparkpost.com/account/users)) page to disable SSO.

## FAQ

### What do I need to provide to my idendity provider?
The specifics for configuring SSO in your idendity provider varies by provider, so we recommend you reference their documentation for full details. In general, you will need to provide the callback URL as described above. You may also be asked for metadata in some cases. If so, here is the metadata you can provide to your idendity provider:

*Note: the entity ID for legacy SAML configurations is `passport-saml`.*

Metadata for US-hosted Customers:

```xml
<?xml version="1.0"?>
<EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0:metadata" xmlns:ds="http://www.w3.org/2000/09/xmldsig# " entityID="https://api.sparkpost.com" ID="passport_saml">
  <SPSSODescriptor protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">
    <NameIDFormat>urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress</NameIDFormat>
    <AssertionConsumerService index="1" isDefault="true" Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://api.sparkpost.com/api/v1/users/saml/consume"/>
  </SPSSODescriptor>
</EntityDescriptor>
```

Metadata for EU-hosted Customers:

```xml
<?xml version="1.0"?>
<EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0:metadata" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" entityID="https://api.eu.sparkpost.com" ID="passport_saml">
  <SPSSODescriptor protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">
    <NameIDFormat>urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress</NameIDFormat>
    <AssertionConsumerService index="1" isDefault="true" Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://api.eu.sparkpost.com/api/v1/users/saml/consume"/>
  </SPSSODescriptor>
</EntityDescriptor>
```

Metadata for Customers with dedicated tenants:

```xml
<?xml version="1.0"?>
<EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0:metadata" xmlns:ds="http://www.w3.org/2000/09/xmldsig# " entityID="https://<api-host>" ID="passport_saml">
  <SPSSODescriptor protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">
    <NameIDFormat>urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress</NameIDFormat>
    <AssertionConsumerService index="1" isDefault="true" Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://<api-host>/api/v1/users/saml/consume"/>
  </SPSSODescriptor>
</EntityDescriptor>
```
*(Enterprise customers: note that you must replace < api-host > with your SparkPost tenant name API URL. For example https://< tenant >.api.e.sparkpost.com Please see your TAM if you need assistance.)*

### Is a relay state required?
No, no relay state is required.

### What attributes need to be passed?
We need the `NameIDFormat` to be `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`. This must correspond to the user's email address that is set up in SparkPost.

The `Binding` needs to be `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

### Can I enable SSO for multiple users at the same time?
No, you must enable SSO for one user at a time. If you have a large number of users and require assistance in enabling SSO for all your users, please contact support.

### After I enable SSO for my company, will SSO be enabled automatically for any new users added after that point?
Yes, after you enable SSO for your company, newly added users will automatically have SSO enabled. If you do not want a new user to have SSO enabled, you must create the new user and then disable SSO.

### Is there a default user role for new SSO users?
No, there is no default user role - role is decided by the admin user when adding each new user.

### Can the user role be changed after a SSO user has been created?
Yes, an admin user can change the user role for any user (including SSO users) at any time.

### Is there a way to bypass SSO once its enabled?
An admin can enable or disable SSO for each user at any time. However, there is no way to bypass SSO if it is enabled for a specific user - the admin must disable for that user in order to login via password.

### Can I use both two-factor authentication (2FA) and SSO?
Each individual user can only use either 2FA or SSO. However, you may have some users at your company use 2FA and others use SSO.

### Is automatic provisioning of users supported?
SCIM provisioning is supported for [OKTA](https://www.sparkpost.com/docs/my-account-and-profile/scim/).
