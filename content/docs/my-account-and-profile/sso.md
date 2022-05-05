---
lastUpdated: "01/25/2022"
title: "Single Sign-On (SSO)"
description: "Single Sign-On (SSO)"
---

Single sign-on (SSO) allows you login to your account using your company's preffered identify provider. You can enable SSO through any provider that supports SAML. You can also set up [SCIM user provisioning through OKTA](https://www.sparkpost.com/docs/my-account-and-profile/scim/).

Check this [article](https://www.sparkpost.com/docs/faq/difference-between-starter-and-premier/) to verify that your account's plan level supports SSO.

## Enable Single Sign-On

Enabling SSO is a 3-step process:

### 1. Enable for Account:
Go to your [Account Settings page](https://app.sparkpost.com/account/settings)([EU](https://app.eu.sparkpost.com/account/settings)) and click on "Provision SSO" to upload your SAML configuration file. Copy the callback URL to configure your identity provider.

### 2. Configure your identity provider with the callback URL:
Configure your identity provider with the callbackURL from the previous step. Refer to your identity provider documentation for instructions on where to submit this information.

### 3. Re-invite your users:
Users have to be re-invited in order to start signing in with SSO. You can delete current users and re-invite them from the  [Users](https://app.sparkpost.com/account/users)([EU](https://app.eu.sparkpost.com/account/users)) page.

## Disable Single Sign-On
Disabling SSO is a 2-step process:

### 1. Disable for account:
Go to your [Account Settings](https://app.sparkpost.com/account/settings)([EU](https://app.eu.sparkpost.com/account/settings)) and click on "Provision SSO" to upload your SAML configuration file. Once provisioned, you can enable SSO for the account.

### 2. Re-invite your users:
Users have to be re-invited in order to set their passwords. You can delete current users and re-invite them from the  [Users](https://app.sparkpost.com/account/users)([EU](https://app.eu.sparkpost.com/account/users)) page.

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

### Can I use both SSO and multi-factor authentication (MFA)?
No. Users can only use either MFA or SSO.

### Is automatic provisioning of users supported?
SCIM provisioning is supported for [OKTA](https://www.sparkpost.com/docs/my-account-and-profile/scim/).
