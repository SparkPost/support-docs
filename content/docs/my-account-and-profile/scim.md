---
lastUpdated: "04/16/2026"
title: "SCIM User Provisioning Through Okta"
description: "Learn how to enable SCIM user provisioning through Okta for your SparkPost account."
---

## Features
- **Create users** Okta users will be created in the SparkPost application.
- **Update user roles** SparkPost user roles can be changed via Okta.
- **Deactivate users** Deactivating an Okta user will remove it in the SparkPost application.
- **Import users** Users created in SparkPost can be imported into Okta and either matched against existing Okta users or created as new Okta users.

## Requirements
- You must be a premier or enterprise customer. See our [pricing page](https://www.sparkpost.com/pricing/) for more details. Test accounts can also evaluate SCIM Provisioning.
- SAML SSO must be configured and enabled for your account. See instructions [here](https://www.sparkpost.com/docs/my-account-and-profile/sso/).
- Only admin users can generate SCIM access tokens.

## Configuration in SparkPost
1. From your SparkPost dashboard, navigate to your Account Settings page by clicking on your username at the upper right corner of the screen.
![](media/scim/account_settings.png)

1. Under "Single Sign-On" click "Generate SCIM token".
![](media/scim/generate_scim.png)

1. Your token will be displayed. Copy it - you won't be able to see it again (don't worry, if you lose it you can generate a new one).

## Configuration in Okta
1. From the Okta admin console, navigate to "Applications" and select the SparkPost app.
1. Select the "Sign On" tab. Ensure that under "Credentials Details", "Application username format" is set to "Email".
1. Click "View Setup Instructions" to setup SSO and get the Callback URL and Audience URI
![](media/scim/credential_details.png)

1. Select the "Provisioning" tab, and from the "Integration" menu click "Configure API Integration".
![](media/scim/scim_connection.png)

1. Check "Enable API Integration"
1. In the "Base URL" field:
    - For US-hosted customers, enter `https://api.sparkpost.com/api/v1/users/scim/v2`
    - For EU-hosted customers, enter `https://api.eu.sparkpost.com/api/v1/users/scim/v2`
    - For Enterprise customers, enter `https://<host>.api.e.sparkpost.com/api/v1/users/scim/v2`
    
        *Enterprise customers: note that you must replace < host > with your SparkPost tenant name. Please see your TAM if you need assistance determining your callback URL.*
    
1. In the "API Token" field, paste the SCIM token you generated.
1. Click "Test API Credentials" to verify settings are correct.
1. Click "Save".
![](media/scim/scim_test.png)

1. In the "To App" section of the "Provisioning" tab, enable "Create Users", "Update User Attributes", and "Deactivate Users".  Click "Save".
![](media/scim/to_app_enable.png)

## Import Existing SparkPost users
1. Select the "Import" tab and click "Import Now"
![](media/scim/import_users.png)

1. Verify "Okta User Assignments" match existing users or create new users.
1. Click "Confirm Assignments"
1. Verify changes and click "Confirm".
![](media/scim/verify_import.png)

1. Verify users exist in SparkPost application.
![](media/scim/sparkpost_users.png)

## Managing User Roles with Okta Groups

You can use Okta groups to automatically assign SparkPost roles to users provisioned via SCIM. Instead of setting each user's role individually, you create Okta groups that map to SparkPost roles and assign users to those groups. Role changes are pushed to SparkPost automatically when group membership changes.

### Supported Roles

| Role | Description |
|------|-------------|
| `admin` | Full account access |
| `developer` | API key and webhook management |
| `templates` | Template and A/B test management |
| `reporting` | View-only access to reports and analytics |

If no role is specified, users default to `reporting`.

### Step 1: Create Okta Groups

Create one Okta group per SparkPost role you want to manage. For example:

- SparkPost - Admin
- SparkPost - Developer
- SparkPost - Templates
- SparkPost - Reporting

Go to **Directory > Groups > Add Group** to create each one.

### Step 2: Assign Groups to the SparkPost Application

1. In the Okta admin console, go to **Applications > SparkPost** and select the **Assignments** tab.
1. Click **Assign > Assign to Groups**.
![](media/scim/assign_to_groups.png)

1. In the dialog, click **Assign** next to each SparkPost group you created.
![](media/scim/assign_sparkpost_to_groups.png)

1. For each group, set the `role` field to the corresponding SparkPost role (e.g., `admin` for the "SparkPost - Admin" group). Click **Save and Go Back**.
![](media/scim/assign_group_role.png)

1. Repeat for each group, then click **Done**.

### Step 3: Add Users to Groups

Add users to the appropriate Okta group under **Directory > Groups**. When provisioned, they will receive the corresponding SparkPost role.

### Changing a User's Role

Move the user from one SparkPost group to another in Okta. The role change is pushed to SparkPost automatically via SCIM on the next sync.

### Managing Group Priority

If a user belongs to multiple groups assigned to the SparkPost application, Okta uses **group priority** to determine which role is sent. The group with the highest priority (lowest number) wins.

To manage group priority:

1. Go to **Applications > SparkPost > Assignments** and click on the **Groups** filter.
1. Drag and drop the groups to reorder them. The group at the top (priority 1) takes precedence.
![](media/scim/group_priority.png)

For example, if a user belongs to both "SparkPost - Admin" (priority 1) and "SparkPost - Reporting" (priority 3), they will be assigned the `admin` role.

## Known Issues / Troubleshooting
- If you have questions or difficulties with your SparkPost/Okta SCIM integration, please [submit a support ticket](https://www.sparkpost.com/submit-a-ticket).
