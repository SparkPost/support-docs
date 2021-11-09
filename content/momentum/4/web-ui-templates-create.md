---
lastUpdated: "03/26/2020"
title: "Creating a Template"
description: "In the New Template form you can specify your template details enter your template content preview and test your template using test data and update your template Templates can be saved as drafts or set to published To open the New Template form click the New Template icon in the..."
---

In the New Template form, you can specify your template details, enter your template content, preview and test your template using test data, and update your template. Templates can be saved as drafts or set to published.

### <a name="web-ui.templates.details"></a> Specifying Your Template Details

To open the New Template form, click the New Template icon in the upper-right corner of the Templates tab. The New Template form is shown in [“New Template”](/momentum/4/web-ui-templates-create#figure_new_template).

<a name="figure_new_template"></a> 


![New Template](images/new_template.png)

Enter the following information under Template Details:

*   Label - User-friendly label for the template

*   ID - Short, unique, alphanumeric ID used to reference the template when it is used in a transmission

*   Description - (optional) Detailed description of the template

*   Subject - Email "Subject" line

*   From - Email address used to compose the email’s “From” header

*   Reply-To - (optional) Email address used to compose the email’s “Reply-To” header

By default, open tracking and click tracking are enabled in Momentum's configuration, if Message Generation is selected during installation. You can override this setting at the template or transmission level. To override open and click tracking at the template level, click the Track Opens option and/or Track Clicks option under Engagement Tracking.

### Note

The precedence for engagement tracking options, from highest to lowest is as follows:

*   transmission level

*   template level

*   msg_gen level

For example, if click tracking is not specified at the transmission level, the Track Clicks option at the template level is used. If the template level is also not specified, the setting of the configuration option in the msg_gen module is used.

If you want to disable engagement tracking globally, change the configuration option in the msg_gen module. See [“msg_gen – Message Generation”](/momentum/4/modules/msg-gen).

You can use substitution in the top-level header of your template (i.e. "Subject", "From", and "Reply-To"). The UI supports the same substitution features available in the API. For details about using substitution in your templates, see the Substitution Reference available at [Momentum 4 REST API](https://support.messagesystems.com/docs/web-rest/v1_index.htmlv1_index.html).

[“Template Details”](/momentum/4/web-ui-templates-create#figure_template_details) shows an example of a simple template. This example uses a simple form of direct substitution in "Subject" and "From". When the email is built, *`{{company}}`* and *`{{name}}`* will be replaced by the values you specify for a given recipient. Note that all details can be edited after the template has been created with the exception of the ID.

<a name="figure_template_details"></a> 


![Template Details](images/template_details.png)

### <a name="web-ui.templates.content"></a> Entering Your Template Content

In the New Template form, you can enter HTML content for the email’s text/html MIME part and text content for the email’s text/plain MIME part. Click Edit, select the appropriate tab, and type your content using the online editor. You can also use substitution in the message body of your template, enabling you to create personalized messages for every recipient.

An example of HTML content is shown in [“HTML Content”](/momentum/4/web-ui-templates-create#figure_html_content). This example uses a simple form of direct substitution. When the email is built, *`{{subject}}`* and *`{{name}}`* will be replaced by the values you specify for a given recipient.

<a name="figure_html_content"></a> 


![HTML Content](images/html_content.png)

An example of plain text content is shown in [“Text Content”](/momentum/4/web-ui-templates-create#figure_text_content).

<a name="figure_text_content"></a> 


![Text Content](images/text_content.png)

Click Save Draft in the New Template form to save your template as a draft. If successfully, a message indicating that your template was saved will be displayed briefly.