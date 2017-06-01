---
title: "Creating A Template"
description: "Create a Template Once you understand how to send an email transmission you'll want to know how to create templates in Spark Post Currently there are two ways you can create templates in Spark Post Create templates in Spark Post using the App Create templates in Spark Post using the..."
---

## Create a Template

Once you understand how to [send an email (transmission)](https://www.sparkpost.com/docs/getting-started/getting-started-sparkpost/#sending-email), you'll want to know how to create templates in SparkPost.

Currently there are two ways you can create templates in SparkPost:

* [Create templates in SparkPost using the App](https://www.sparkpost.com/docs/getting-started/creating-template/#creating-templates-with-the-app)
* [Create templates in SparkPost using the API](https://www.sparkpost.com/docs/getting-started/creating-template/#creating-templates-with-the-api)

## Why create templates in SparkPost?

* **Reference:** Easily communicate with your team by having a set of named templates to reference.
* **Error Reduction:** Reduce duplicated efforts and potential embarrassing emails with typos or errors.
* **Simplification:** Building a library of "go-to" templates for recurrent use-cases simpler for your development team.
* **Systemize:** Using SparkPost templates in concert with substitution_data can make it easy to create re-usable templates for your systems

## Creating Templates with the App

Creating a template using the SparkPost Application (UI) is super simple. To get started, let's go step-by-step through how you can define a new template...

### Defining Your Email Template in SparkPost

1. **Open the templates view:** Click on "Templates" in the main SparkPost navigation.

    ![Templates navigation element](media/creating-template/templates-navigation-element.png)

1. **Make a new template:** Click on the "New Template" button to open the SparkPost template editor.

    ![Create New Template button](media/creating-template/create-new-template-button.png)

1. **Name your template:** Input a human-friendly name for your template in the "Template Name" field. This field will NOT appear to your recipients and is used to help remind you of the purpose of the template.

    ![](media/creating-template/template-name-field-highlighted.jpg)

1. **Provide an ID for your template [optional]:** Input an ID for your template, this is used when referencing the template via the API. *If you do not provide an ID, SparkPost will create an ID for you*. This field will NOT appear to your recipients and is used to help remind you of the purpose of the template.

    ![](media/creating-template/template-id-field-highlighted.jpg)

1. **Define the From Name of the template:** Input the name of the person or group this email will appear "from" to your recipients. This is the name displayed in your recipient's email client.

    ![](media/creating-template/template-fromname-field-highlighted.jpg)

1. **Define the From Email of the template:** Input the user and choose the domain that this email will appear to come from. This is the email address that users will target if they reply to your email transmission.

    ![](media/creating-template/template-fromemail-field-highlighted.jpg)

1. **Define the Subject of the template:** Input the subject line of the email. This will appear in your recipient's email client.

    ![](media/creating-template/template-subject-field-highlighted.jpg)

1. **Provide a description of the template:** Input a description of this email. This field will NOT appear to your recipients and is used to help remind you of the purpose of the template.

    ![](media/creating-template/template-description-field-highlighted.jpg)

1. **Choose Engagement Tracking Options:** If you would like this template to have open and click tracking enabled, click on either of these buttons. Orange === Enabled, Grey === Disabled

    ![](media/creating-template/template-engagementtracking-field-highlighted.jpg)*

1. **Define the content of the template:**
    * **[Creating HTML Content](https://www.sparkpost.com/docs/getting-started/creating-template/#authoring-html-content-for-your-templates)**
    * **[Creating TEXT Content](https://www.sparkpost.com/docs/getting-started/creating-template/#authoring-text-content-for-your-templates)**
    * **[How to Use Substitution Data](https://developers.sparkpost.com/api/substitutions-reference.html)**

At this point, we are *technically* done with our template and we could "Save" or "Save and Publish"...but let's take a few minutes to test this template and make sure it is behaving as we expect.

## How to Test and Preview templates with the SparkPost Application (UI)

To test an email is pretty easy, you simply make sure all the above steps are completed and then click the "Preview" button. This allows you to view your email template.

![](media/creating-template/template-editor-preview-link-highlighted_0.jpg)

To send yourself (or approvers) a test transmission of your email template, enter the email addresses (comma separated) into the "To" field and click on the "Send Email" button.

![](media/creating-template/test-send-interface-tofields-and-sendtestbutton-highlighted_0.jpg)

**Please be aware that sending a test email is an actual transmission (so make sure you don't have any LIVE customer email addresses in the "To" field).**

Of course, if you are using Substitution Data in your emails there is a little more to it. [Read more about using substitution data in SparkPost to create dynamic email templates](https://developers.sparkpost.com/api/substitutions-reference.html).

## Creating Templates with the API

### Prerequisites

* **SparkPost API Key:** You will need to have a SparkPost API Key with all the appropriate data-access permissions for Templates API management. [How to create a SparkPost API Key](https://www.sparkpost.com/docs/getting-started/create-api-keys/)
* **HTTP Request Knowledge:** You will need to understand how to make HTTP(S) requests.
* **Tools:** You will need to have a REST Client, or access to a terminal which supports cURL.

Once you have all the prerequisites on-hand, you're ready to read the [Templates API Documentation](https://developers.sparkpost.com/api/templates.html). All of the SparkPost API Reference documents contain all the data specifications for the objects upon which you're interacting and a set of request examples.

## Authoring HTML Content for your Templates

If your email template requires any type of customized data to be displayed, please take a moment and read [How to use substitution data to create dynamic email transmissions](https://developers.sparkpost.com/api/substitutions-reference.html).

* **Choose HTML in the Template Editor:** Choose "HTML" in the drop-down (note this may be labeled "Text" if you were [authoring the text version of your email template](https://www.sparkpost.com/docs/getting-started/creating-template/#authoring-text-content-for-your-templates).
* **Insert your HTML:** You can either use the SparkPost HTML editor or you can copy and paste your HTML into the Template Editor.
* **Include Test Substitution Data [optional]:** If your template's HTML is using [substitution data](https://developers.sparkpost.com/api/substitutions-reference.html), then you will need to add some "Test Substitution Data". This is a JSON object that you can author (or copy/paste) by clicking the "Test Substitution Data" button.
* **Preview your HTML Template:** Once you have added the HTML you wish to use, click the "Preview" link to view the rendered output example.

## Authoring TEXT Content for your Templates

If your email template requires any type of customized data to be displayed, please take a moment and read [How to use substitution data to create dynamic email transmissions](https://developers.sparkpost.com/api/substitutions-reference.html).

* **Choose TEXT in the Template Editor:** Choose "TEXT" in the drop-down (note this may be labeled "HTML" if you were [authoring the HTML version of your email template](https://www.sparkpost.com/docs/getting-started/creating-template/#authoring-html-content-for-your-templates).
* **Insert your TEXT:** You can either use the SparkPost TEXT editor or you can copy and paste your TEXT into the Template Editor.
* **Include Test Substitution Data [optional]:** If your template's TEXT is using [substitution data](https://developers.sparkpost.com/api/substitutions-reference.html), then you will need to add some "Test Substitution Data". This is a JSON object that you can author (or copy/paste) by clicking the "Test Substitution Data" button.
* **Preview your TEXT Template:** Once you have added the TEXT you wish to use, click the "Preview" link to view the rendered output example.

Outstanding! You've sent your first email / transmission in SparkPost and you've created your first template.
