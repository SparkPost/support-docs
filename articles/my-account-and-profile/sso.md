---
title: "Single Sign-On (SSO)"
description: "Learn how to enable SSO for your SparkPost account and get answers to common SSO questions."
---

SparkPost supports single sign-on (SSO) through any SAML provider. SSO is enabled via the UI by an Admin level user.

## Enable SSO

Enabling SSO is a 3-step process:

### 1. Enable for your company:
1. Click on your user name in the upper right corner and select “Account Settings”.
1. In the “Single Sign-On” section, to the right of “SAML”, click “Provision SAML”. Upload the IdP metadata XML file for your SAML provider and then click the “Provision SAML” button.
1. To the right of “Single Sign-On”, click “Enable SSO”.

### 2. Enable for each user:
1. If you have just enabled SSO for your company and are still on “Account Settings” page, click on “Manage single sign-on users” to go to the “Manage Users” page. If you are coming from any other page, click on your user name in the upper right corner and select “Manage Users” to access that page.
1. Find the user for whom you would like to enable SSO. Click on the three dots in the rightmost column for more options. Click “Edit”.
1. Check the box next to “Enable single sign-on authentication for this user” and then click “Update User”.
1. Repeat steps “b” and “c” for each additional user.

### 3. Configure your Identity Provider (IdP) with the callback URL:
1. Your IdP will need the callback URL for SparkPost. Please refer to your IdP for specific instructions on where to submit this information.
1. The callback URL is:
  
For US-hosted customers: `https://api.sparkpost.com/api/v1/users/saml/consume`

For EU-hosted customers: `https://api.eu.sparkpost.com/api/v1/users/saml/consume`

For Enterprise customers: `https://<host>/api/v1/users/saml/consume`  
*(Enterprise customers: note that you must replace < host > with your SparkPost tenant name. Please see your TAM if you need assistance determining your callback URL.)*

## Disable SSO

### 1. Disable for your company:

1. Click on your user name in the upper right corner and select “Account Settings”.
1. To the right of “Single Sign-On”, click “Disable SSO”.
1. Each user will need to reset their password following the "Forgot Password" link on the SparkPost sign in page.

## FAQ

### What do I need to provide to my IdP?
The specifics for configuring SSO in your IdP varies by provider, so we recommend you reference their documentation for full details. In general, you will need to provide the callback URL as described above. You may also be asked for metadata in some cases. If so, here is the metadata you can provide to your IdP:

Metadata for US-hosted Customers:

```xml
<?xml version="1.0"?>
<EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0:metadata" xmlns:ds="http://www.w3.org/2000/09/xmldsig# " entityID="passport-saml" ID="passport_saml">
  <SPSSODescriptor protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">
    <NameIDFormat>urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress</NameIDFormat>
    <AssertionConsumerService index="1" isDefault="true" Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://api.sparkpost.com/api/v1/users/saml/consume"/>
  </SPSSODescriptor>
</EntityDescriptor>
```

Metadata for EU-hosted Customers:

```xml
<?xml version="1.0"?>
<EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0:metadata" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" entityID="passport-saml" ID="passport_saml">
  <SPSSODescriptor protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">
    <NameIDFormat>urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress</NameIDFormat>
    <AssertionConsumerService index="1" isDefault="true" Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://api.eu.sparkpost.com/api/v1/users/saml/consume"/>
  </SPSSODescriptor>
</EntityDescriptor>
```

Metadata for Enterprise Customers: 

```xml
<?xml version="1.0"?>
<EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0:metadata" xmlns:ds="http://www.w3.org/2000/09/xmldsig# " entityID="passport-saml" ID="passport_saml">
  <SPSSODescriptor protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">
    <NameIDFormat>urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress</NameIDFormat>
    <AssertionConsumerService index="1" isDefault="true" Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://<host>/api/v1/users/saml/consume"/>
  </SPSSODescriptor>
</EntityDescriptor>
```
*(Enterprise customers: note that you must replace < host > with your SparkPost tenant name. Please see your TAM if you need assistance.)*

### Is a relay state required?
No, no relay state is required.

### What attributes need to be passed?
We need the NameID to be the user's email address. This must correspond to the email address that is set up in SparkPost.

### Can I enable SSO for multiple users at the same time?
No, you must enable SSO for one user at a time. If you have a large number of users and require assistance in enabling SSO for all your users, please contact support.

### After I enable SSO for my company, will SSO be enabled automatically for any new users added after that point?
Yes, after you enable SSO for your company, newly added users will automatically have SSO enabled. If you do not want a new user to have SSO enabled, you must create the new user and then disable SSO.

### Is there a default user role for new SSO users?
No, there is no default user role - role is decided by the admin user when adding each new user.

### Can the user role be changed after a SSO user has been created?
Yes, an admin user can the user role for any user (including SSO users) at any time.

### Is there a way to bypass SSO once its enabled?
An admin can enable or disable SSO for each user at any time. However, there is no way to bypass SSO if it is enabled for a specific user - the admin must disable for that user in order to login via password.

### Can I use both two-factor authentication (2FA) and SSO?
Each individual user can only use either 2FA or SSO. However, you may have some users at your company use 2FA and others use SSO. 

### Is automatic provisioning of users, such as just-in-time (JIT) provisioning, supported? What about de-provisioning?
No, automatic provisioning and de-provisioning of users is not supported at this time. Users will need to be provisioned by an admin users in SparkPost in order to be able to login. Users can be manually deleted from SparkPost by an admin users at any time.
