---
lastUpdated: "04/16/2026"
title: "User Management"
description: "How to add users to your SparkPost account and manage their permissions."
---

You can invite members of your team to join your SparkPost account. Each user will have a role that defines what they have access to. There are five roles you can choose from when inviting a new user:

| Role | Description |
|------|-------------|
| `admin` | Full access user. Admins have all permissions available and are the only users that can manage users, security, and billing settings. |
| `developer` | Powerful setup and development user. Developer users are able to create and edit API Keys and have access to all email related account settings. |
| `templates` | Content and campaign management user. These users can manage Templates, AB Tests, Recipient Lists, and Suppressions. They also have view-only access to Domains, Subaccounts, IP Pools, and all reporting and analytics features. |
| `reporting` | Data analytics user. They have access to all reporting features and view-only access to Domains, Subaccounts, and IP Pools. Reporting users can't edit any account or feature settings. Reporting users can optionally be assigned to a specific subaccount. |
| `custom` | Configurable user with fine-grained permissions. These users have access only to the features explicitly granted to them. |

### Custom Role Permissions

When you assign the `custom` role to a user, you can select which permissions they have access to. The following permissions are available:

| Permission | Description |
|------------|-------------|
| Alerts | View and manage alerts. |
| API Keys | Manage API keys. |
| A/B Testing | View and manage A/B tests of email templates. |
| Domains | View and manage sending, bounce, and tracking domains. |
| Events | View and search message events. |
| IP Pools | View and manage IP pools. |
| Recipient Lists | View and manage recipient lists. |
| Seeds | View seeding activity and manage seed list settings. |
| Signals Analytics | View and manage analytics metrics, dashboards, and reports, including health score, spam traps, engagement recency, and blocklist incidents. |
| Subaccounts | Manage subaccounts. |
| Suppressions | View and manage suppressions. |
| Templates | View, manage, and preview email templates and snippets. |
| Webhooks | View, manage, and test webhooks. |

### Adding Users To Your Account

Admin users can add new users to their account from the [Manage Users](https://app.sparkpost.com/account/users) ([EU](https://app.sparkpost.com/account/users)) page.

1. Click on the **Invite User** button.
2. Enter the new user's email in the Email address input.
3. Select the role you'd like the new user to have.
4. Click **Invite User** to send them the invitation.

	![](media/user-management/invite-user.png)

5. The new user will receive an email to join your account similar to the one below. The invite link expires in 72 hours.

	![](media/user-management/invitation-email.png)

### Subaccount Users
*Limited access. Reach out to our support team or your Technical Account Manager to have this option enabled for your account.

Reporting Users can optionally be assigned to a specific subaccount. Check the "assign to subaccount" box when creating the user and then select the subaccount. Learn more about subaccounts and subaccount users [here](https://www.sparkpost.com/docs/user-guide/subaccounts/).

Only Reporting and Developer Users support subaccount assignment at this time.

Subaccount UI access is available to use for free internally within your company and can be made available to your customers via a reseller agreement.
