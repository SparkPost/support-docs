---
lastUpdated: "09/07/2022"
title: "Using Suppression Lists"
description: "Protecting your sender reputation is essential to maximizing your email deliverability Many inbox providers e g Yahoo Gmail Hotmail Outlook com or AOL opt to limit or refuse message traffic based on it Continuing to send messages to invalid email addresses or to recipients who no longer want to receive..."
---

A suppression list, also known as an exclusion list, is a list of email addresses you don't want to send email to. Sending unwanted messages, or sending to invalid email addresses, can hurt your reputation. Inbox providers (like Yahoo, Gmail, or Outlook) will limit or reject emails based on sender reputation. That's why it's important to keep your suppression list up-to-date.

SparkPost has two types of suppression lists: one is specifically for your account and is available using the [Suppression List API](https://developers.sparkpost.com/api/suppression-list/) and [app](https://app.sparkpost.com/lists/suppressions) ([EU](https://app.eu.sparkpost.com/lists/suppressions))). The other is a global suppression list. SparkPost maintains this global suppression list for all customers. **The Global Suppression List data is not accessible using the Suppression List API**.

When a message is injected using SMTP or HTTP, SparkPost will check the email address against the account-specific suppression list and the global suppression list. If a recipient's email address matches an address on one of those lists, that message will not be sent.

**Each subaccount has its own suppression list which is separate from the primary account's suppression list.**

## How are [recipients](https://www.sparkpost.com/api#/reference/recipient-lists "Recipient List API") added to [suppression lists](https://www.sparkpost.com/api#/reference/suppression-list "Suppression List API")?

* **Spam Complaints / FeedBack Loops (FBLs):** When a recipient clicks the “this is spam” button in their inbox, the inbox provider sends a Spam Complaint or FBL message to SparkPost. SparkPost will automatically add the recipient's email address to your suppression list.
* **Hard Bounces:** When messages bounce, the inbox provider includes a message that lets the sender know if it was a “Soft Bounce” or a “Hard Bounce”. A “Soft Bounce” is a temporary error or delay indicating that the message was sent to a valid recipient address. A “Hard Bounce” means that the message was sent to an invalid email address and should not be retried. SparkPost will automatically add any email address associated with a “Hard Bounce” to your suppression list.
* **Unsubscribe Requests:** Recipients can request to be unsubscribed by clicking the SparkPost-provided unsubscribe link in the message or by using the List-Unsubscribe header. SparkPost will automatically add the recipient's email address to the suppression list. The unsubscribe header is not added automatically for transactional messages (using the option transactional=true).
* **Compliance Team:** Recipients can contact SparkPost and ask that they stop getting messages from a particular sender. Protecting our customers’ brands and maintaining high deliverability across all SparkPost's accounts is of the utmost importance. SparkPost's Compliance Team ensures that we’re acting as a good sender within the email community across all our customers and takes recipients' requests very seriously. If a request is received, the Compliance Team adds that recipient's email address to the sender’s suppression list.
* **Suppression List API:** Using the REST API, you can insert or update a single entry or multiple entries in your suppression list, check the suppression status for a specific recipient, or remove a recipient from your suppression list. For more information, see the [SparkPost Suppression List API](https://www.sparkpost.com/api#/reference/suppression-list "SparkPost Suppression List API").
* **Suppression list UI:** Using the User Interface (UI), select Recipients and then Suppressions.

**If you want to learn how your application can be notified of list pruning events, read our [using unsubscribe events](https://www.sparkpost.com/docs/user-guide/using-unsubscribe-reports/) guide.**

## Managing Suppression Lists with the SparkPost API

Now that you have unsubscribe events being broadcasted to your webhook consumer, you can watch for those events and prevent sending reputation damage by populating your SparkPost Suppression Lists.

To Insert or Update a recipient on a Suppression List:

```
PUT /api/v1/suppression-list/{recipient_email} HTTP/1.1
Content-Type: application/json
Authorization: YOUR KEY HERE
```

```javascript
{
  "transactional" : false, // See the NOTE below for more information
  "non_transactional" : true,
  "description" : "User requested to not receive any non-transactional emails."
}
```

**Note:** If a message is marked as “transactional”, the recipient will be suppressed from transactional messages. If the message is marked as “non-transactional”, the recipient will be suppressed from non-transactional messages.

To inspect the status of a recipient on a Suppression List:

```
GET /api/v1/suppression-list/{recipient_email} HTTP/1.1
Authorization: YOUR KEY HERE
Accept: application/json
```

To remove a recipient from a Suppression List:

```
DELETE /api/v1/suppression-list/{recipient_email} HTTP/1.1
Authorization: YOUR KEY HERE
Accept: application/json
```

## Managing Suppression Lists with the SparkPost User Interface (UI)

To add a recipient to your Suppression List, you can [Add Suppressions](https://app.sparkpost.com/lists/suppressions/create) ([EU](https://app.eu.sparkpost.com/lists/suppressions/create))

**Note:** A CSV upload with subaccounts will need individual files for upload.

![suppression list manual entry screenshot](media/using-suppression-lists/add-suppression.png)

To inspect the status of a recipient on your Suppression List, you can [Find by Email](https://app.sparkpost.com/lists/suppressions) ([EU](https://app.eu.sparkpost.com/lists/suppressions)) and then select View Details 

![suppression list view details screenshot](media/using-suppression-lists/find-by-email-view-details.png)

To remove a recipient from a Suppression List, select Delete

![suppression list delete entry screenshot](media/using-suppression-lists/find-by-email-delete.png)

## Suppression List Events and Error Messages

If you're sending an email to a recipient whose email address is on a suppression list, the message will not send to that address. You will see a response that begins with **554 5.7.1 recipient address was suppressed due to customer policy** - followed by a specific reason. Reasons include "Bounce Rule" a hard bounce, "Spam Complaint", "List Unsubscribe", or "Link Unsubscribe".

**Note**: For single recipient transmissions: if an email address is suppressed the API response for the rejection will appear inline. However, if you are using multiple recipient transmissions, the API response will initially accept addresses which will be suppressed later in the message generation process. For multiple recipient transmissions which contain a suppressed address, you will notice that an injection event is recorded before the ultimate suppression, but an injection event is not recorded for a single recipient, inline suppression.
