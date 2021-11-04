---
lastUpdated: "02/08/2020"
title: "List-unsubscribe Functionality"
description: "Every non transactional message sent through your account will carry a list unsubscribe header The presence of this header is intended to capture unsubscribe requests for recipients who no longer wish to receive your messages The presence of the list unsubscribe header is not a replacement for traditional unsubscribe links..."
---

Every non-transactional message sent through your account will carry a list-unsubscribe header. The presence of this header is intended to capture unsubscribe requests for recipients who no longer wish to receive your messages. The presence of the list-unsubscribe header is not a replacement for traditional unsubscribe links in the body of your messages.

Select mail providers, namely Gmail and Hotmail, will recognize the presence of the header and present a 1-click option for recipients to act upon.  Inclusion of the header is an established email best practice meant to redirect intent of spam complainants (eg. hit the spam button).

Your account is configured to add these recipients to a suppression list.  Subsequent attempts to these recipients will fail. Find more on suppression lists [here](https://www.sparkpost.com/docs/user-guide/using-suppression-lists/). 

Often, the receiving party (Gmail, Hotmail) won't show the list-unsubscribe header treatment until you've established sending reputation.

If you operate a preference center, where your users can fine tune their email options, you will want to account for this user-action.  

Suggested logic:

* Register for the webhook event type: unsubscribe. Find more on registering for webhooks [here](https://www.sparkpost.com/docs/user-guide/defining-webhooks/).
* Update your internal user preference database entry according to what message stream the customer acted on.
* Update the specific suppression record accordingly. Find more on suppression list updates [here](https://developers.sparkpost.com/api/suppression-list.html#suppression-list-bulk-insert-update-put).
