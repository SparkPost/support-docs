---
lastUpdated: "02/08/2020"
title: "Using SparkPost with the Ongage Email Marketing Platform"
description: "To connect your Spark Post account into the Ongage platform log into your Spark Post account and do the following Set up your desired Sending Domain the domain you want to send email from on Ongage such as myawesomedomain com make sure the domain is verified after you've set up..."
---

**To connect your SparkPost account into the Ongage platform, log into your SparkPost account and do the following:**

1. Set up your [desired Sending Domain](https://www.sparkpost.com/docs/getting-started/getting-started-sparkpost/#preparing-your-from-address) (the domain you want to send email from on Ongage, such as 'myawesomedomain.com') - make sure the domain is verified after you've set up your DKIM information with your DNS provider.  Your domain should be listed as 'ready to send' on the SparkPost Sending Domains page on your account.  It is best to send a test message through your new domain using the SparkPost template page to verify your domain is set up correctly.

1. Create a  [new SparkPost API Key](https://www.sparkpost.com/docs/getting-started/create-api-keys/) (do a 'Select All' to enable ALL the permissions) - save that API key somewhere safe as SparkPost only displays it once for security reasons.

1. Log on to your Ongage account and add 'SparkPost' as a new ESP to your Ongage account using the OngageConnect Setup Wizard.

1. Use 'api.sparkpost.com' as the 'API Host'.

1. Paste the API key you just created in Step 2 above into the 'API Key' field in the Ongage ESP setup page

1. Click on 'Verify Credentials' in order to ensure the two systems are connected properly.  If the credentials do not verify, check to make sure the API Host is 'api.sparkpost.com' and that your API key is valid and has all permissions enabled.

1. **Important:** set up your From Name, From Address and Reply Address to match your new Sending Domain as appropriate.  If you try sending emails from Ongage to your SparkPost account using a different domain name, those emails will not be accepted by your SparkPost account.

1. Send a test campaign through Ongage to ensure emails are being delivered as you expect.

1. You can also see Ongage's instructions here: [connect your Ongage account with your SparkPost account](https://ongage.atlassian.net/wiki/display/HELP/SparkPost+Setup+Tutorial).

1. ​Note you can view metrics on your campaigns either through the Ongage analytics interface or through SparkPost's - the best of both worlds!

**Key things to remember:**

* Make sure your sending domain is set up properly in SparkPost and shows the status of 'Ready to Send'
* Your 'From' and 'Reply' addresses that you set in the Ongage platform for your campaigns must exactly match the sending domain you set up on your SparkPost account
* The API key you create on your SparkPost account must have ALL of the permissions checked
* If Ongage returns the error of 'Over Quota', send a [note to support](https://www.sparkpost.com/docs/) to request your SparkPost's account sending limits to be increased in order to allow higher message sending rates
