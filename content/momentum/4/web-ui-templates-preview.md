---
lastUpdated: "03/26/2020"
title: "Previewing and Testing Your Template"
description: "You can preview and test your template by specifying test data in the New Template form Test data must be in the form of a JSON object of key value pairs of recipient specific data Click Edit select the Test Data tab and type your test data using the online..."
---

You can preview and test your template by specifying test data in the New Template form. Test data must be in the form of a JSON object of key/value pairs of recipient-specific data. Click Edit, select the Test Data tab, and type your test data using the online editor. Note that the test data is not saved.

[“Test Data”](/momentum/4/web-ui-templates-preview#figure_test_data) shows test data for the Simple Template. In this example, *John*, *simple stored template* , and *My Company*         will replace *`{{name}}`*, *`{{subject}}`*, and *`{{company}}`*, respectively, in the preview of your template.

<a name="figure_test_data"></a> 


![Test Data](images/test_data.png)

### <a name="idp5577840"></a> Previewing Your Email

You can preview the HTML content, plain text content, and top-level header substitution of your email using the UI. To preview your template, click Preview and select the appropriate tab.

[“Preview Template”](/momentum/4/web-ui-templates-preview#figure_preview_template) shows a preview of the HMTL content for the Simple Template. Notice the substitution for *`{{name}}`* and *`{{subject}}`*.

<a name="figure_preview_template"></a> 


![Preview Template](images/preview_template.png)

[“Preview Template Details”](/momentum/4/web-ui-templates-preview#figure_preview_details) shows a preview of the Template Details for the Simple Template. Notice the substitution for *`{{name}}`* and *`{{company}}`*.

<a name="figure_preview_details"></a> 


![Preview Template Details](images/preview_details.png)

### <a name="web-ui.templates.test"></a> Sending a Test Email

In addition to the preview function, you can send a test email from the UI, using your test data to expand your template. Click the arrow on the right-hand side of the Save Draft button. In the list, click Send Test.

<a name="figure_select_test"></a> 


![Send Test](images/select_test.png)

In the Sent Test form, enter your recipient's address and click Send.

<a name="figure_send_test"></a> 


![Send Test Form](images/send_test.png)

If successful, a message will briefly appear indicating that your message was successfully queued. Your recipient should receive an email with your test data included in the message body.