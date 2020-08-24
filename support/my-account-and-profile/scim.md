---
title: "SCIM User Provisioning Through Okta"
description: "Learn how to enable SCIM user provisioning through Okta for your SparkPost account."
---

**This integration with Okta is currently under development and is not available to all customers yet. Contact to learn more.**

## Features
- Create users
- Update user roles
- Deactivate users
- Import users

## Requirements
- You must be a premier or enterprise customer. See our [pricing page](https://www.sparkpost.com/pricing/) for more details. Test accounts can also evaluate SCIM Provisioning.
- SAML SSO must be configured and enabled for your account. See instructions [here](https://www.sparkpost.com/docs/my-account-and-profile/sso/).
- Only admin users can generate SCIM access tokens.

## Configuration in SparkPost
1. From your SparkPost dashboard, navigate to your Account Settings page by clicking on your username at the upper right corner of the screen.
1. Under "Single Sign-On" click "Generate SCIM token".
1. Your token will be displayed. Copy it - you won't be able to see it again (don't worry, if you lose it you can generate a new one).

## Configuration in Okta
1. From the Okta admin console, naviate to "Applications" and select the SparkPost app.
1. Select the "General" tab. Under "App Settings" check the "Enable SCIM Provisioning" box.
1. Select the "Provisioning" tab, and from the "Integration" menu select "Edit".
1. Enter `https://api.sparkpost.com/api/v1/users/scim/v2` in the "SCIM connector base URL" field.
1. Enter `email` in the "Unique identifier field for users"
1. Under "Supported provisioning actions, check the following boxes:
    - "Import New Users and Profile Updates"
    - "Push New Users"
    - "Push Profile Updates"
1. From the "Authentication Mode" drop-down menu, select "HTTP Header".
1. In the "HTTP Header" section, paste the token you generated [here](#generate-an-authorization-token) into the "Authorization" field.
1. Click "Save".
1. In the "To App" section of the "Provisioning" tab, enable "Create Users", "Update User Attributes", and "Deactivate Users".
1. In the "To App" section, delete all attribute mappings except "Given name", "Family name", and "Primary email".
1. To allow updating user roles:
    - In the "To App" section, select "Go to Profile Editor".
    - Select "Add Attribute".
    - Enter the following values:
        - Data type: string
        - Display name: role
        - Variable name: role
        - External name: role
        - External namespace: urn:ietf:params:scim:schemas:core:2.0:User
        - Description: admin, reporting, templates, or developer
    - Click "Save Attribute".
1. In the "To Okta" section, delete all attribute mappings except "First name", "Last name", and "Primary email".
