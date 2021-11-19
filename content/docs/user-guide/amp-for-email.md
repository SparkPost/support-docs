---
lastUpdated: "01/14/2021"
title: "Getting Started with AMP for Email on SparkPost"
description: "This support article covers the basic structure of AMPHTML emails and explains how to get started sending AMP for email on SparkPost."
---
Learn how to create your very first AMP email! We'll run through content setup and best practices to have in place before you begin sending. We'll also point out some useful resources along the way to help you get the best from SparkPost, such as our [SparkPost API documentation](https://developers.sparkpost.com/api/).

AMP (Accelerated Mobile Pages) initially launched as an open-sourced code to help publishers develop fast web pages on mobile clients. It’s had a huge impact on SEO and now it’s ready for email. AMP for Email is the ability to combine personalization and interactivity through a set of HTML tags backed by JavaScript with a focus on performance and security. The AMPHTML Email format provides a subset of AMP components, like carousels, responsive form elements, and the ability to retrieve fresh content from a backend, that can be included into email messages. Email recipients can view and interact with the AMP components directly in the email, all within the inbox. AMP for Email not only provides interactive content, but uniquely provides dynamic up-to-date content to the inbox.

Sections
* [The AMPHTML Email Format](#the-amphtml-email-format)
* [AMP Components](#amp-components)
* [CSS Requirements](#css-requirements)
* [AMPHTML Email Body](#amphtml-email-body)
* [Examples](#examples)
* [Adding AMP to new and existing emails](#adding-amp-to-new-and-existing-emails)
* [Sending Through SparkPost](#sending-through-sparkpost)
* [Help](#help)

## The AMPHTML Email Format

### Registration

An important note - in order to send AMP emails, you must register with Google. In addition to being subject to Google's [Bulk Senders Guidelines](https://support.google.com/mail/answer/81126), there are AMP specific requirements for sending dynamic emails. When you are ready to start sending, follow their [registration guide](https://developers.google.com/gmail/ampemail/register) to get started.

### Required Markup
A properly formed AMP email must adhere to a basic structure in order to be considered an AMPHTML email. Here's each component:

| Component | Description |
| --- | --- |
| `<!doctype html>` tag|Doctype declaration is the first line and is required |
| `<html ⚡4email>` tag | Tells the world that this is an AMPHTML email. `<html amp4email>` is accepted as well  |
| `<head>` `<body>` tags | Optional in HTML but not in AMPHTML Email |
| `<meta charset="utf-8">` tag | The charset definition must be the first child of the `<head>` tag. This identifies the encoding for the page |
| `<script async src="https://cdn.ampproject.org/v0.js"></script>`| The AMP runtime |
| `<style amp4email-boilerplate>body{visibility:hidden}</style>` | The AMPHTML Email boilerplate. This is the CSS boilerplate to initially hide the content until AMP JS is loaded |

The following example code includes all components listed above and represents the minimum amount of markup required to create a valid AMPHTML email:
```
<!doctype html>
<html ⚡4email>
<head>
  <meta charset="utf-8">
  <style amp4email-boilerplate>body{visibility:hidden}</style>
  <script async src="https://cdn.ampproject.org/v0.js"></script>
</head>
<body>
Hello World! Let's get started using AMPHTML together!
</body>
</html>
```
Note the lack of a `<link rel=canonical>` element compared to the traditional AMP spec. This is because an AMP email doesn’t have a canonical email!

## AMP Components

The following is a list of AMP components that are supported today and are grouped in the following categories:
* [Dynamic Content](https://www.ampproject.org/docs/interaction_dynamic/amp-email-format#dynamic-content)
* [Layout](https://www.ampproject.org/docs/interaction_dynamic/amp-email-format#layout)
* [Media](https://www.ampproject.org/docs/interaction_dynamic/amp-email-format#media)

### Dynamic Content

| Element |   Description   |
| --- | --- |
| `<amp-form>` | Form element. The action-xhr attribute must be used in place of the regular action attribute. Can be used in conjunction with `<template type="amp-mustache">` to render a response. |
| `<amp-list>` |Remotely fetches JSON data that will be rendered by an `<amp-mustache>` |
| `<template type="amp-mustache">` | A Mustache template markup to render the results of an amp-list call |
| `<amp-selector>`| A multi-select widget for use within a form |
| `<amp-bind>` and `<amp-state>` | Simple scripting language in AMP that allows the manipulation of a state machine for interactions between elements. Can also be used to add behavior on certain events. `<amp-state>` is used to remotely fetch the initial state machine values |

### Layout

| Element |     Description     |
| --- | ------ |
| `<amp-accordion>` |	UI element that facilitates showing/hiding different sections |
| `<amp-carousel>` |	Carousel UI component |
| `<amp-sidebar>` |	Sidebar for navigational purposes |
| `<amp-image-lightbox>` |	Lightbox for containing images |
| `<amp-lightbox>` |	Lightbox for containing content |
| `<amp-fit-text>` |	Helper component for fitting text within a certain area |
| `<amp-timeago>` |	Provides a convenient way of rendering timestamps |

### Media

| Element |     Description     |
| --- | ------ |
| `<amp-img>` |	An AMP component that replaces <img>. Note: Binding to [src] is not allowed |
| `<amp-anim>` | Embeds GIF files. Note: Binding to [src] is not allowed |

## CSS Requirements

Any and all CSS in any AMP document must be included in a `<style amp-custom>` tag within the header or as inline style attributes. The entire `<style>` tag cannot exceed 50,000 bytes.  The CSS allowed withim email messages will vary depending on the email provider. The list of CSS properties allowed within Gmail can be found [here](https://developers.google.com/gmail/design/reference/supported_css).

Example:
```
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
```

## AMPHTML Email Body
In AMPHTML, most HTML tags can be used directly as you'd normally expect. However, certain tags, like `<img>`, are replaced with the equivalent or enhanced AMPHTML tags(`<amp-img>`). Check the [AMP Components](#amp-components) section for details on the specific AMPHTML tags supported. Please note that URLs must use absolute paths in AMPTHML email.

Example:

```json
<div class="emailbody">
  <div class="helloworld">Hello!</div>
  ```


## Examples
<!-- note these long URLs include the entire code, does not depend on specific user account in the amp.dev playground -->

### `<amp-selector>` [playground link](https://playground.amp.dev/?runtime=amp4email#share=PCFkb2N0eXBlIGh0bWw+CjxodG1sIOKaoTRlbWFpbD4KICA8aGVhZD4KICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04Ij4KICAgIDxzdHlsZSBhbXA0ZW1haWwtYm9pbGVycGxhdGU+Ym9keXt2aXNpYmlsaXR5OmhpZGRlbn08L3N0eWxlPgogICAgPHNjcmlwdCBhc3luYyBzcmM9Imh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzIj48L3NjcmlwdD4KICAgIDxzY3JpcHQgYXN5bmMgY3VzdG9tLWVsZW1lbnQ9ImFtcC1zZWxlY3RvciIgc3JjPSJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC9hbXAtc2VsZWN0b3ItMC4xLmpzIj48L3NjcmlwdD4KICAgIDxzY3JpcHQgYXN5bmMgY3VzdG9tLWVsZW1lbnQ9ImFtcC1mb3JtIiBzcmM9Imh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwL2FtcC1mb3JtLTAuMS5qcyI+PC9zY3JpcHQ+CiAgICA8c3R5bGUgYW1wLWN1c3RvbT4KICAgICAgYm9keSB7CiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7CiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0zNmRlZywgI2YzYzA4NwogICAgICAgICAgLCAjZTg4YjIxKSBmaXhlZDsKICAgICAgfQogICAgICBoMSB7CiAgICAgICAgY29sb3I6ICNlODhiMjE7CiAgICAgIH0KICAgICAgLmNvbnRhaW5lciB7CiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OwogICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICBwYWRkaW5nOiA1cHggMjBweCAyMHB4IDIwcHg7CiAgICAgICAgbWFyZ2luOiA0MHB4IGF1dG87CiAgICAgICAgd2lkdGg6IDUwMHB4OwogICAgICAgIG1heC13aWR0aDogOTAlOwogICAgICAgIGJhY2tncm91bmQ6IHdoaXRlOwogICAgICB9CiAgICAgIC5hbXAtZm9ybS1zdWJtaXQtc3VjY2VzcyAjZm9ybS1jb250ZW50IHsKICAgICAgICBkaXNwbGF5OiBub25lOwogICAgICB9CiAgICAgIGFtcC1zZWxlY3RvciBbb3B0aW9uXSB7CiAgICAgICAgbWFyZ2luOiAxMHB4OwogICAgICAgIHdpZHRoOiA0MCU7CiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOwogICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNmU2ZTY7CiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OwogICAgICAgIHBhZGRpbmc6IDEwcHg7CiAgICAgICAgb3V0bGluZTogMDsKICAgICAgfQogICAgICBhbXAtc2VsZWN0b3IgW29wdGlvbl1bc2VsZWN0ZWRdIHsKICAgICAgICBib3JkZXItY29sb3I6ICNlODhiMjE7CiAgICAgICAgb3V0bGluZTogMDsKICAgICAgfQogICAgICAudXBkYXRlQnV0dG9uIHsKICAgICAgICBiYWNrZ3JvdW5kOiAjZTg4YjIxOwogICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgICBib3JkZXI6IDA7CiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OwogICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDsKICAgICAgICBmb250OiBpbmhlcml0OwogICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7CiAgICAgICAgbWFyZ2luLXRvcDogMTBweDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2hlYWQ+CiAgPGJvZHk+CiAgICA8ZGl2IGNsYXNzPSJjb250YWluZXIiPgogICAgPCEtLSBVcGRhdGVkIHRvIHVzZSBhbiBhYnNvbHV0ZSBVUkwgb24gdGhpcyBzaXRlLCB0aGF0IGFsbG93cyBmb3IgQU1QIHN1Ym1pdHMgKHJlbGF0aXZlIFVSTHMgZ2l2ZSBhIHZhbGlkYXRpb24gZXJyb3IpIC0tPgogICAgICA8Zm9ybSBhY3Rpb24teGhyPSJodHRwczovL2FtcC5kZXYvZG9jdW1lbnRhdGlvbi9leGFtcGxlcy9hcGkvc3VibWl0LWZvcm0taW5wdXQtdGV4dC14aHIiIG1ldGhvZD0icG9zdCI+CiAgICAgICAgPGRpdiBpZD0iZm9ybS1jb250ZW50Ij4KICAgICAgICAgIDxoMT5UaGFua3MgZm9yIHN1YnNjcmliaW5nIHRvIFNwYXJrUG9zdCBFbWFpbHMhPC9oMT4KICAgICAgICAgIDxwPldoYXQga2luZCBvZiBlbWFpbHMgc2hvdWxkIHdlIHNlbmQgeW91PzwvcD4KICAgICAgICAgIDxhbXAtc2VsZWN0b3IgbmFtZT0ic3Vic2NyaXB0aW9ucyIgbXVsdGlwbGU+CiAgICAgICAgICAgIDxkaXYgb3B0aW9uPSJhY2NvdW50LW1ldHJpY3MiIHNlbGVjdGVkPldlZWtseSBBY2NvdW50IE1ldHJpY3M8L2Rpdj4KICAgICAgICAgICAgPGRpdiBvcHRpb249ImRhaWx5LXJldmlld3MiIHNlbGVjdGVkPkRhaWx5IERlbGl2ZXJhYmlsaXR5IFJlcG9ydDwvZGl2PgogICAgICAgICAgICA8ZGl2IG9wdGlvbj0ibmV3c2xldHRlciIgc2VsZWN0ZWQ+QmV0YSBUZXN0ZXIgTmV3c2xldHRlcjwvZGl2PgogICAgICAgICAgICA8ZGl2IG9wdGlvbj0icHJvZHVjdC11cGRhdGVzIiBzZWxlY3RlZD5Qcm9kdWN0IFRlYW0gVXBkYXRlczwvZGl2PgogICAgICAgICAgPC9hbXAtc2VsZWN0b3I+CiAgICAgICAgICA8aW5wdXQgdHlwZT0ic3VibWl0IiB2YWx1ZT0iVXBkYXRlIiBjbGFzcz0idXBkYXRlQnV0dG9uIj4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IHN1Ym1pdC1zdWNjZXNzPgogICAgICAgICAgPGgxPkdvdCBpdCEgV2Ugd2lsbCB1cGRhdGUgeW91ciBwcmVmZXJlbmNlcyB3aXRoaW4gMjQgaG91cnM8L2gxPgogICAgICAgIDwvZGl2PgogICAgICA8L2Zvcm0+CiAgICA8L2Rpdj4KICA8L2JvZHk+CjwvaHRtbD4=)

![amp_selector](media/amp-for-email/amp_form.png)

### `<amp-carousel>` [playground link](https://playground.amp.dev/?runtime=amp4email#share=PCFkb2N0eXBlIGh0bWw+CjxodG1sIOKaoTRlbWFpbD4KICA8aGVhZD4KICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04Ij4KICAgIDxzdHlsZSBhbXA0ZW1haWwtYm9pbGVycGxhdGU+Ym9keXt2aXNpYmlsaXR5OmhpZGRlbn08L3N0eWxlPgogICAgPHNjcmlwdCBhc3luYyBzcmM9Imh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzIj48L3NjcmlwdD4KICAgIDxzY3JpcHQgYXN5bmMgY3VzdG9tLWVsZW1lbnQ9ImFtcC1jYXJvdXNlbCIgc3JjPSJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC9hbXAtY2Fyb3VzZWwtMC4xLmpzIj48L3NjcmlwdD4KICAgIDxzdHlsZSBhbXAtY3VzdG9tPgogICAgICBib2R5IHsKICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjsKICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTM2ZGVnLCAjZjNjMDg3LCAjZTg4YjIxKSBmaXhlZDsKICAgICAgfQogICAgICBoMSB7CiAgICAgICAgY29sb3I6ICNlODhiMjE7CiAgICAgIH0KICAgICAgLmNvbnRhaW5lciB7CiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OwogICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICBwYWRkaW5nOiA1cHggMjBweCAyMHB4IDIwcHg7CiAgICAgICAgbWFyZ2luOiA0MHB4IGF1dG87CiAgICAgICAgd2lkdGg6IDUwMHB4OwogICAgICAgIG1heC13aWR0aDogOTAlOwogICAgICAgIGJhY2tncm91bmQ6IHdoaXRlOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvaGVhZD4KICA8Ym9keT4KICAgIDxkaXYgY2xhc3M9ImNvbnRhaW5lciI+CiAgICAgIDxoMT5OZXcgTmF0dXJlIFRyaXAgQXZhaWxhYmxlITwvaDE+CiAgICAgIDxwPgogICAgICAgIFNpZ24gdXAgdG9kYXkgZm9yIG91ciBuZXdlc3QgYWR2ZW50dXJlIGhpa2UgYW5kIHNhdmUgMTAlIG9uIHJlZ2lzdHJhdGlvbiBmZWVzIGJ5IHVzaW5nIGNvZGUgIk5BVFVSRSIgYXQgY2hlY2tvdXQhCiAgICAgIDwvcD4KICAgICAgPGFtcC1jYXJvdXNlbCBjbGFzcz0iY2Fyb3VzZWwiIHR5cGU9InNsaWRlcyIgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzODAiIGxheW91dD0icmVzcG9uc2l2ZSI+CiAgICAgICAgPGFtcC1pbWcgc3JjPSJodHRwczovL3Vuc3BsYXNoLml0LzQyOC8zMTg/aW1hZ2U9MjkiIHdpZHRoPSI1MDAiIGhlaWdodD0iMzgwIj48L2FtcC1pbWc+CiAgICAgICAgPGFtcC1pbWcgc3JjPSJodHRwczovL3Vuc3BsYXNoLml0LzQyOC8zMTg/aW1hZ2U9MTAiIHdpZHRoPSI1MDAiIGhlaWdodD0iMzgwIj48L2FtcC1pbWc+CiAgICAgICAgPGFtcC1pbWcgc3JjPSJodHRwczovL3Vuc3BsYXNoLml0LzQyOC8zMTg/aW1hZ2U9MTIiIHdpZHRoPSI1MDAiIGhlaWdodD0iMzgwIj48L2FtcC1pbWc+CiAgICAgICAgPGFtcC1pbWcgc3JjPSJodHRwczovL3Vuc3BsYXNoLml0LzQyOC8zMTg/aW1hZ2U9MTMiIHdpZHRoPSI1MDAiIGhlaWdodD0iMzgwIj48L2FtcC1pbWc+CiAgICAgICAgPGFtcC1pbWcgc3JjPSJodHRwczovL3Vuc3BsYXNoLml0LzQyOC8zMTg/aW1hZ2U9MTQiIHdpZHRoPSI1MDAiIGhlaWdodD0iMzgwIj48L2FtcC1pbWc+CiAgICAgICAgPGFtcC1pbWcgc3JjPSJodHRwczovL3Vuc3BsYXNoLml0LzQyOC8zMTg/aW1hZ2U9MTUiIHdpZHRoPSI1MDAiIGhlaWdodD0iMzgwIj48L2FtcC1pbWc+CiAgICAgIDwvYW1wLWNhcm91c2VsPgogICAgPC9kaXY+CiAgPC9ib2R5Pgo8L2h0bWw+)

![amp_carousel](media/amp-for-email/amp_carousel.png)

### `<amp-bind>` `<amp-state>` [playground link](https://playground.amp.dev/?runtime=amp4email#share=PCEtLSAjIyBEeW5hbWljIGNvbnRlbnQgYWZ0ZXIgVXNlci1JbnRlcmFjdGlvbiAtLT4KPCEtLQpUaGlzIGlzIGEgc2FtcGxlIHNob3dpbmcgaG93IHRvIHNob3cgZHluYW1pYyBjb250ZW50IGFmdGVyIGFuIHVzZXIgaW50ZXJhY3Rpb246IHRoZSBwcm9kdWN0IGF2YWlsYWJpbGl0eSB3aWxsIGJlIHNob3duIGJhc2VkIG9uIHByb2R1Y3Qgc2VsZWN0aW9uLgotLT4KPCEtLSAtLT4KPCFkb2N0eXBlIGh0bWw+CjxodG1sIOKaoTRlbWFpbD4KPGhlYWQ+CiAgPG1ldGEgY2hhcnNldD0idXRmLTgiPgogIDxzdHlsZSBhbXA0ZW1haWwtYm9pbGVycGxhdGU+Ym9keXt2aXNpYmlsaXR5OmhpZGRlbn08L3N0eWxlPgogIDxzY3JpcHQgYXN5bmMgc3JjPSJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qcyI+PC9zY3JpcHQ+CiAgPHN0eWxlIGFtcC1jdXN0b20+CgogICAgICBib2R5IHsKICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjsKICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTM2ZGVnLCAjZjNjMDg3LCAjZTg4YjIxKSBmaXhlZDsKICAgICAgfQogICAgICBoMSB7CiAgICAgICAgY29sb3I6ICNlODhiMjE7CiAgICAgIH0KICAgICAgLmNvbnRhaW5lciB7CiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OwogICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICBwYWRkaW5nOiA1cHggNDBweCA0MHB4IDQwcHg7CiAgICAgICAgbWFyZ2luOiA0MHB4IGF1dG87CiAgICAgICAgd2lkdGg6IDgwMHB4OwogICAgICAgIG1heC13aWR0aDogOTAlOwogICAgICAgIGJhY2tncm91bmQ6IHdoaXRlOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwhLS0gIyMgU2V0dXAgLS0+CiAgPCEtLQogICAgQWRkaXRpb25hbGx5IHVzZWQgQU1QIGNvbXBvbmVudHMgbXVzdCBiZSBpbXBvcnRlZCBpbiB0aGUgaGVhZGVyLiBXZSB1c2UgYGFtcC1iaW5kYCB0byBkeW5hbWljYWxseQogICAgdXBkYXRlIHRoZSBwYWdlIGNvbnRlbnQuCiAgLS0+CiAgPHNjcmlwdCBhc3luYyBjdXN0b20tZWxlbWVudD0iYW1wLWJpbmQiIHNyYz0iaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAvYW1wLWJpbmQtMC4xLmpzIj48L3NjcmlwdD4KPC9oZWFkPgo8Ym9keT4KICA8IS0tICMjIEhvdyB0byBnZXQgZHluYW1pYyBjb250ZW50IC0tPgogIDwhLS0gQnkgdXNpbmcgYGFtcC1iaW5kYCBhbmQgYGFtcC1zdGF0ZWAgd2l0aCBhIEpTT04gZW5kLXBvaW50LCBhIHVzZXIgY2FuIGdldCB1cC10by1kYXRlIGRhdGEgYWZ0ZXIgYW4gaW50ZXJhY3Rpb24uIEFzIGBhbXAtYmluZGAgc3RhdGVtZW50cyBhcmUgbm90IGV2YWx1YXRlZCBvbiBwYWdlIGxvYWQsIHRoZSB1cGRhdGVkIHN0YXRlIGlzIG9ubHkgYXZhaWxhYmxlIGFmdGVyIGFuIHVzZXIgaW50ZXJhY3Rpb24sIHdoaWNoIHdvcmtzIHdlbGwgZm9yIHVzZSBjYXNlcyBzdWNoIGFzIHNwZWNpZmljIHByb2R1Y3QgYXZhaWxhYmlsaXR5LiAtLT4KICA8ZGl2IGNsYXNzPSJjb250YWluZXIiPgogICAgPGgxPkludmVudG9yeSBBdmFpbGFiaWxpdHk8L2gxPgogICAgPGFtcC1zdGF0ZSBpZD0icHJvZHVjdHMiPgogICAgICA8c2NyaXB0IHR5cGU9ImFwcGxpY2F0aW9uL2pzb24iPgogICAgICAgIFsKICAgICAgICAgICJTb21lIGRlc2NyaXB0aW9uIGZvciBwcm9kdWN0IG9uZSIsCiAgICAgICAgICAiU29tZSBkZXNjcmlwdGlvbiBmb3IgcHJvZHVjdCB0d28iLAogICAgICAgICAgIlNvbWUgZGVzY3JpcHRpb24gZm9yIHByb2R1Y3QgdGhyZWUiCiAgICAgICAgXQogICAgICA8L3NjcmlwdD4KICAgIDwvYW1wLXN0YXRlPgogICAgPGFtcC1pbWcgb249InRhcDpBTVAuc2V0U3RhdGUoeyBwcm9kdWN0SWQ6IDB9KSIgc3JjPSJodHRwczovL3Vuc3BsYXNoLml0LzQyOC8zMTg/aW1hZ2U9MjEiIHdpZHRoPSIyNDAiIGhlaWdodD0iMTYwIiByb2xlPSJidXR0b24iIHRhYmluZGV4PSIwIj4KICAgIDwvYW1wLWltZz4KICAgIDxhbXAtaW1nIG9uPSJ0YXA6QU1QLnNldFN0YXRlKHsgcHJvZHVjdElkOiAxfSkiIHNyYz0iaHR0cHM6Ly91bnNwbGFzaC5pdC80MjgvMzE4P2ltYWdlPTYiIHdpZHRoPSIyNDAiIGhlaWdodD0iMTYwIiByb2xlPSJidXR0b24iIHRhYmluZGV4PSIwIj4KICAgIDwvYW1wLWltZz4KICAgIDxhbXAtaW1nIG9uPSJ0YXA6QU1QLnNldFN0YXRlKHsgcHJvZHVjdElkOiAyfSkiIHNyYz0iaHR0cHM6Ly91bnNwbGFzaC5pdC80MjgvMzE4P2ltYWdlPTYzIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjE2MCIgcm9sZT0iYnV0dG9uIiB0YWJpbmRleD0iMCI+CiAgICA8L2FtcC1pbWc+CiAgICA8ZGl2IFt0ZXh0XT0icHJvZHVjdHNbcHJvZHVjdElkXSArICcgc3RpbGwgYXZhaWxhYmxlJyI+VGhpcyBpcyBhIHNhbXBsZSBzaG93aW5nIGhvdyB0byBzaG93IGR5bmFtaWMgY29udGVudCBhZnRlciBhbiB1c2VyIGludGVyYWN0aW9uOiB0aGUgcHJvZHVjdCBhdmFpbGFiaWxpdHkgKGhvdyBtYW55IGxlZnQpIHdpbGwgYmUgc2hvd24gYmFzZWQgb24gc2VsZWN0aW9uLjwvZGl2PgogIDwvZGl2PgoKPC9ib2R5Pgo8L2h0bWw+)

![amp_bind](media/amp-for-email/amp_bind.png)

## Adding AMP to New and Existing Emails

### MIME Part
Email is structured as a MIME tree. This MIME tree contains the message body and any attachments to the email.
Embedding AMP within an email is simple, add a new MIME part with a content type of `text/x-amp-html` as a descendant of multipart/alternative. It should live alongside the existing `text/html` or `text/plain parts`. This ensures that the email message works on all clients.

### MIME Part Ordering
MIME Part Ordering:
* `text/plain`
* `text/x-amp-html`
* `text/html`

We recommend you structure your MIME part with plain text first, x-amp-html second, and then html last.  The reason being, some email clients will only render the last MIME part, so we recommend placing the `text/x-amp-html` MIME part before the `text/html` MIME part. Also, the email client strips out the `text/x-amp-html` part of the MIME tree when a user replies to or forwards an AMP email message. This is why it is important that an email provide alternative content in the HTML part.

### Replies and Forwarding
To start, the email client strips out the `text/x-amp-html` part of the MIME tree when a user replies to or forwards an AMP email message. This is why it is important that an email provide alternative content in the HTML part.

### Document Dimensions
Width: 800px or less (any wider and content may be unexpectedly truncated on some clients)
Height: variable, the client allows the user to scroll through the content

## Sending Through SparkPost

Even if you’re not an approved AMP sender, you can still send test emails to yourself and ensure your AMP content really does work!
To accomplish this, go to your email account and access Settings. Then on the “General” tab, click on Dynamic Email Development under Dynamic Email. Type in your sender email address in order to opt in, to be able to display dynamic emails during development.

![gmail_settings](media/amp-for-email/gmail_settings.png)

It is recommended that this setting is only used on test accounts and in private browsing mode. You will be able to send your AMP messages from SparkPost to this email!

### Injecting AMP Emails
SparkPost makes it simple to send AMP-enabled messages. The SparkPost [Transmissions API](https://developers.sparkpost.com/api/transmissions/) supports a new optional field, `content.amp_html` in the `content` JSON object, a UTF-8 encoded string representing the AMP for Email HTML content. SparkPost inserts this as a `text/x-amp-html`  MIME part in the appropriate location of the MIME tree and performs engagement tracking (if enabled) as well as substitutions.

Here's an example:
```
{
  "options": {
    "open_tracking": true,
    "click_tracking": true
  },
  "campaign_id": "AMP_Test",
  "return_path": "test@bounces.sparkpost.com",
  "recipients": [
    {
      "return_path": "test@bounces.sparkpost.com",
      "address": {
        "email": "[insert_email_here]",
        "name": "John Doe"
      }
    }
  ],
	"content": {
		"from": "bounces-amptest@mail.sparkpost.com",
		"subject": "This is an AMP message test",
		"text": "Hello from the TEXT part",
		"amp_html":
			"<!doctype html>
			<html ⚡4email>
			<head>
  				<meta charset="utf-8">
 				 <style amp4email-boilerplate>body{visibility:hidden}</style>
  				<script async src="https://cdn.ampproject.org/v0.js"></script>
			</head>
			<body>
			Hello World! Let's get started using AMPHTML together!
			</body>
		</html>",
		"html": "Hello from the HTML part" }}
```

Those injecting via SMTP will also have AMP support. Be sure to use the proper MIME structure; `text/x-amp-html` must be a descendant of multipart/alternative, and live alongside at least one of `text/html` and/or `text/plain` MIME parts.

For delivered AMP content to render, **HTTPS engagement tracking is required**. Please refer to [SparkPost documentation](../tech-resources/enabling-https-engagement-tracking-on-sparkpost) on how to enable HTTPS engagement tracking.
For initial tests without HTTPS engagement tracking, you can set `open_tracking` and `click_tracking` attributes in the above example to `false`.

### Engagement Metrics
Basic engagement tracking for opens and clicks will be supported through an AMP-specific tracking pixel. SparkPost Events and Webhooks will support AMP-specific opens and clicks, allowing you to compare AMP opens and clicks versus traditional HTML opens and clicks. Down the road, we may provide additional, advanced engagement tracking for AMP messages, depending upon our customers’ needs.

### Stored Templates with AMP Preview
AMP for Email is supported in SparkPost templates, including metadata and substitution data in a template’s AMP MIME part. With SparkPost templates, you’ll be able to add can edit the subject line, the FROM domain, FROM Name, Template Name, and make changes to the email content itself (text, HTML, AMP HTML). You can save your template as a draft or publish it to be production ready.

![amp_template](media/amp-for-email/AMP_Template.png)

If you do not have HTTPS enabled for your engagement tracking, and you plan to send a test AMP email from AMP Preview, please add in the following under test data to disable engagement:

![amp_test_data](media/amp-for-email/AMP_Test_Data.png)

As you create your email template, click on the “Preview & Send” button. This will quickly show  you how your content will be rendered in the inbox. On the “AMP HTML” tab, you will be able to verify that your AMP content is in working condition, whether that’s clicking through a carousel of pictures, rendering a list, rating a product and providing feedback, or answering a poll. Verify that everything is in working order all within the UI.

![amp_preview](media/amp-for-email/AMP_Preview.png)

From the Preview Screen, you can type in the email address that has approved the sender email address, and then send the test email. Navigate to to your inbox to find the AMP email rendered properly.

## Help
### Content Validation
A web-based validator is available [here](https://validator.ampproject.org/#htmlFormat=AMP4EMAIL).
Simply paste in the AMP HTML to ensure the document meets all the AMPHTML Email restrictions. This tool shows you the validation errors directly inline.

### SparkPost API Documentation
To learn more about how to send AMPHTML, refer to the [SparkPost API Documentation](https://developers.sparkpost.com/api/).
Learn more about AMP-specific engagement tracking (clicks and opens) [here](https://developers.sparkpost.com/api/events/).










