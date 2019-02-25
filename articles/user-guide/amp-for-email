---
title: "Getting Started with AMP for Email"
description: "This guide describes the steps you’ll need to follow to create AMPHTMP content using SparkPost."
---
This guide describes the steps you’ll need to follow to start sending AMPHTML content. We'll run through content setup and best practices to have in place before you begin sending. We'll also point out some useful resources along the way to help you get the best from SparkPost, such as our [SparkPost API documentation](https://developers.sparkpost.com/api/).

AMP, commonly known for developing fast web pages on mobile clients, is a set of HTML tags backed by JavaScript with a focus on performance and security.
The AMPHTML Email format provides a subset of AMP components, like carousels, responsive form elements, and the ability to retrieve fresh content, that can be included into email messages. Recipients of AMP emails can view and interact with the AMP components directly in the email message, all within the inbox.

Note: SparkPost is available in multiple regions. "SparkPost" refers to the SparkPost service hosted in North America. "SparkPost EU" refers to the SparkPost service hosted in Western Europe. An account created with SparkPost cannot be used with SparkPost EU, and vice-versa. Customers may use accounts in both regions.

* [The AMPHTML Email Format](#the-amphtml-email-format)
* [AMP Components](#amp-components)
* [CSS Requirements](#css-requirements)
* [Document Dimensions](#document-dimensions)
* [Content Validation Tools](#validation-tools)
* [Examples](#examples)
* [Adding AMP to existing emails](#adding-amp-to-existing-emails)
* [Where To Next?](#where-to-next)
* [How To Get Help](#how-to-get-help)

## The AMPHTML Email Format

### Required Markup

The following code represents the minimum amount of markup that makes up a valid AMP email message:
'''json
<!doctype html>
<html ⚡4email>
<head>
  <meta charset="utf-8">
  <style amp4email-boilerplate>body{visibility:hidden}</style>
  <script async src="https://cdn.ampproject.org/v0.js"></script>
</head>
<body>
Hello, world.
</body>
</html>
'''

An AMP email must have:

| Rules |   Description   |
| --- | --- |
| Start with the '<!doctype html>' doctype|Standard for HTML | Standard for HTML |
| Contain a top-level '<html ⚡4email>' tag ('<html amp4email>' is accepted as well) | Identifies the document as AMPHTML Email |
| Contain '<head>' and '<body>' tags | Optional in HTML but not in AMPHTML Email |
| Contain a '<meta charset="utf-8">' tag as the first child of their '<head>' tag | Identifies the encoding for the page |
| Contain the amp4email boilerplate in the '<head>' :
'<style amp4email-boilerplate>body{visibility:hidden}</style><script async src="https://cdn.ampproject.org/v0.js"></script>' | CSS boilerplate to initially hide the content until AMP JS is loaded |

## AMP Components

The following is a list of AMP components that are supported today and are grouped in the following categories:
* [Dynamic Content](https://www.ampproject.org/docs/interaction_dynamic/amp-email-format#dynamic-content)
* [Layout](https://www.ampproject.org/docs/interaction_dynamic/amp-email-format#layout)
* [Media](https://www.ampproject.org/docs/interaction_dynamic/amp-email-format#media)

### Dynamic Content
| Element |   Description   |
| --- | --- |
| '<amp-form>' | Form element. The action-xhr attribute must be used in place of the regular action attribute. Can be used in conjunction with '<template type="amp-mustache">' to render a response. |
| '<amp-list>' |Remotely fetches JSON data that will be rendered by an '<amp-mustache>' |
| '<template type="amp-mustache">' | A Mustache template markup to render the results of an amp-list call |
| '<amp-selector>'| A multi-select widget for use within a form |
| '<amp-bind>' and '<amp-state>' | Simple scripting language in AMP that allows the manipulation of a state machine for interactions between elements. Can also be used to add behavior on certain events. '<amp-state>' is used to remotely fetch the initial state machine values |

### Layout
| Element |   Description   |
| --- | --- |
| '<amp-accordion>' |	A UI element that facilitates showing/hiding different sections |
| '<amp-carousel>' |	A carousel UI component |
| '<amp-sidebar>' |	A sidebar for navigational purposes |
| '<amp-image-lightbox>' |	A lightbox for containing images |
| '<amp-lightbox>' |	A lightbox for containing content |
| '<amp-fit-text>' |	A helper component for fitting text within a certain area |
| '<amp-timeago>' |	Provides a convenient way of rendering timestamps |

### Media
| Element |   Description   |
| --- | --- |
| '<amp-img>' |	An AMP component that replaces <img>. Note: Binding to [src] is not allowed |
| '<amp-anim>' | Embeds GIF files. Note: Binding to [src] is not allowed |

## CSS Requirements

Any and all CSS in any AMP document must be included in a '<style amp-custom>' tag within the header or as inline style attributes. The entire '<style>' tag cannot exceed 50,000 bytes. 
Example:
'''json
<style amp-custom>
  /* any custom styles go here. */
  body {
    background-color: white;
  }
  amp-img {
    border: 5px solid black;
  }
  amp-img.grey-placeholder {
    background-color: grey;
  }
</style>
'''

## Document Dimensions
Optimal width: 800px or less (any wider and content may be unexpectedly truncated on some clients).
Height: variable, the client allows the user to scroll through the content.

## Content Validation Tools
### Web-based validator
A web-based validator is available at https://validator.ampproject.org/
Simply paste in the AMP HTML to ensure the document meets all the AMPHTML Email restrictions. This tool shows you the validation errors directly inline.

## Examples


## Adding AMP to Existing Emails

###MIME Part
Email is structured as a MIME tree. This MIME tree contains the message body and any attachments to the email.
Embedding AMP within an email is simple, add a new MIME part with a content type of text/x-amp-html as a descendant of multipart/alternative. It should live alongside the existing text/html or text/plain parts. This ensures that the email message works on all clients.
Important things to note:
* The text/x-amp-html part must be nested under a multipart/alternative node, it will not be recognized by the email client otherwise.
* Some email clients will only render the last MIME part, so we recommend placing the text/x-amp-html MIME part before the text/html MIME part.

###Replies and Forwarding
To start, the email client strips out the text/x-amp-html part of the MIME tree when a user replies to or forwards an AMP email message. This is why it is important that an email provide alternative content in the HTML part.
## Where to Next


## How to Get Help









