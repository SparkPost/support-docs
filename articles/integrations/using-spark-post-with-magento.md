---
title: "Using SparkPost with Magento"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/2356667-using-sparkpost-with-magento"
description: "This article will show how to send email from Magento through Spark Post These instructions assume that you are using the excellent SMTP Pro extension and have a Spark Post account with a verified sending domain Follow these steps to configure Magento and SMTP Pro to send through your Spark..."
---

This article will show how to send email from Magento through SparkPost.

**These instructions assume that you are using the excellent [SMTP Pro extension](https://www.magentocommerce.com/magento-connect/smtp-pro-email-free-custom-smtp-email.html) and have a SparkPost account with a verified sending domain.**                                                                                                                                                                                                                                   

Follow these steps to configure Magento and SMTP Pro to send through your SparkPost account.  These instructions were created using Magento 1.9 but should be applicable to most recent 1.x versions.

 ### Configure Magento 

**Note**: to send with SparkPost, Magento needs to use *From* addresses with a *verified sending domain*                from your SparkPost account. Learn about configuring [SparkPost sending domains](https://support.sparkpost.com/customer/portal/articles/2216798).

To configure Magento to use your sending domain in its *From* addresses, log into your **Magento Admin Panel**             and navigate to **System -> Configuration**                  in the top menu.

![](media/using-spark-post-with-magento/magento1_original.png)

From the **General** menu on the left, click **Store Email Addresses**                 and edit each *Sender Email*       field to use a verified sending domain from your SparkPost account.

![](media/using-spark-post-with-magento/magento2fixed_original.png)

Click the *Save Config*        button to have your changes take effect.

 ### Configure SMTP Pro 

Log into your Magento Admin Panel and navigate to **ASCHRODER EXTENSIONS -> SMTP Pro.**                        

**![](media/using-spark-post-with-magento/magento3_original.png)**

Apply the following settings in the **General Settings**          tab:

*   Email Connection: *Custom SMTP* 
*   Authentication: *Login*
*   Username: *SMTP_Injection*
*   Password: <*your SparkPost API key>* 
    *   [How to create a SparkPost API key](https://support.sparkpost.com/customer/portal/articles/1933377)
    *   Remember to enable the 'Send via SMTP' privilege on your key.
*   Host: *smtp.sparkpostmail.com*
*   Port: *587*
*   SSL Security: *SSL TLS* 

![](media/using-spark-post-with-magento/magento4_original.png)

Click the *Save Config*        button to have your changes take effect.

To check your configuration changes, click the *Run Self Test*           button under the **Logging and Debugging**               tab.  Once the self test is complete, a report panel will appear at the top of the page.

![](media/using-spark-post-with-magento/magento5_original.png)