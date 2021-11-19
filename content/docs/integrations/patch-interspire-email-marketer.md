---
lastUpdated: "02/08/2020"
title: "How to patch Interspire Email Marketer to work with SparkPost"
description: "We had several customers using Interspire Email Marketer reporting an issue blocking them from using Spark Post to send email via SMTP This article will address What issue was experienced Test harness Environment Configuration Root cause of the issue What code overcame the issue Applying the patch to your Interspire..."
---

We had several customers using [Interspire Email Marketer](http://www.interspire.com/ "Interspire Email Marketer") reporting an issue blocking them from using [SparkPost](https://sparkpost.com "Sparkpost Email Service") to send email via SMTP. This article will address:

* [What issue was experienced?](#what-issue-was-experienced)
* [Test-harness Environment Configuration](#test-harness-environment-configuration)
* [Root cause of the issue](#root-cause-of-the-issue)
* [What code overcame the issue?](#what-code-overcame-the-issue)
* [Applying the patch to your Interspire instance](#applying-the-patch-to-your-interspire-instance)

NOTE: If you are interested in using something similar to Interspire but has a fully supported integration with SparkPost, we recommend you take a look at [MailWizz](http://www.mailwizz.com). Additionally, the information below is for Interspire version 6.15, it has not been tested on any other version. Please be sure to keep backup copies of any modified files in case you run into issues.

## What issue was experienced?

More than a handful of customers were reporting that during setup of SMTP server in Interspire to use Sparkpost SMTP servers they were receiving a ["Relaying Denied"](https://www.sparkpost.com/docs/faq/relaying-denied-error/) or other similar SMTP setup error messages while trying to do something as simple as send a test email using Interspire.

Our support team ran the gamut with our customers (thank you for being so very patient) trying to resolve this error. In each case, the customers had followed all the proper steps and configured everything as expected, but were still unable to get things to work:

1. Each customer had a [new Sparkpost.com account](https://app.sparkpost.com/join?_ga=1.238584512.1501089354.1437574465)
1. In each case, the customer had [created a Sending Domain in Sparkpost](https://www.sparkpost.com/docs/getting-started/getting-started-sparkpost/#preparing-your-from-address) properly
1. All of their DNS records were configured properly by [setting up DKIM to verify their sending domain for use with Sparkpost](https://www.sparkpost.com/docs/getting-started/getting-started-sparkpost/#step-2-verifying-domain-ownership)
1. We tested they had [created a valid Sparkpost API Key](https://www.sparkpost.com/docs/getting-started/create-api-keys/) with the **Send via SMTP**          permission enabled
1. We worked with each customer ensuring they had set up SMTP for use Sparkpost Email Service

Interspire is PHP software running on customer-deployed LAMP (Linux, Apache, MySQL, PHP) stacks, and after several failed attempts to get in contact with Interspire to debug the issue, we decided the best course of action was to purchase a license and find out for ourselves.

## Test-Harness Environment Configuration

First I needed somewhere to install my instance, so I whipped up a new EC2 LAMP Stack, here's a handy little article I found to get me started: [http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/install-LAMP.html](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/install-LAMP.html "Install LAMP on EC2"). But that wasn't quite enough since [Sparkpost](https://sparkpost.com "Sparkpost") uses the improved and recommended security of [TLS (Transport Layer Security)](https://en.wikipedia.org/wiki/Transport_Layer_Security "Learn more about TLS") for sending email via SMTP we needed to make sure that PHP was compiled with openssl support by making sure that mod_ssl was enabled in the php.ini.

So my technology stack looked like:

```
Linux - AWS t2.micro
Apache - 2.4 (latest)
MySQL - 5.5
PHP - 5.6 (with openssl mod_ssl enabled)
Interspire - 6.15
```

Next I configured the firewall (IPTABLES) to support SCP, SSH, port 587 for TLS via Sparkpost and all the other normal ports needed. Then, I followed the instructions for installation of Interspire as provided by their proprietary system. And logged into my instance of Interspire.

The error reported by our customers consistently from the PHP logs was:

```
PHP Warning:  fsockopen(): SSL operation failed with code 1\. OpenSSL Error messages:
error:1408F10B:SSL routines:SSL3_GET_RECORD:wrong version number in test_smtp.php on line 38
PHP Warning:  fsockopen(): Failed to enable crypto in test_smtp.php on line 38
PHP Warning:  fsockopen(): unable to connect to tls://smtp.sparkpostmail.com:587 (Unknown error) in test_smtp.php on line 38
Result: ; msg: Unable to connect to email server
```

So I thought "Alright, let's begin by seeing if we can connect via the command line and send an email...that's probably a good place to start. So I used openssl s_client having it enable the secure socket via STARTTLS for me...

```
>_ openssl s_client -starttls smtp -crlf -connect smtp.sparkpostmail.com:587

// A whole bunch of SSL chain stuffs would be seen here...
250 PIPELINING

// Once I saw the connection was established issue the EHLO command to the server to see what other commands are available
EHLO smtp.sparkpostmail.com
250-8BITMIME
250-ENHANCEDSTATUSCODES
250-AUTH=LOGIN PLAIN
250-AUTH LOGIN PLAIN
250 PIPELINING

// OK, let's use AUTH LOGIN
AUTH LOGIN

// The SMTP server will issue (since we've already established a TLS secure tunnel) a Base64 encoded username prompt
334 VXNlcm5hbWU6

// It expects me to issue a challenge in a similar Base64 encoded format, so beforehand I encoded the username for Sparkpost SMTP connections:
perl -MMIME::Base64 -e 'print encode_base64("SMTP_Injection");

// The SMTP server will issue a Base64 encoded password prompt
334 UGFzc3dvcmQ6

// It expects me to issue a challenge in a similar Base64 encoded format, so beforehand I encoded the password (a valid Sparkpost API key with "Send via SMTP" permission enabled) for Sparkpost SMTP connections:
perl -MMIME::Base64 -e 'print encode_base64("<put_your_sparkpost_api_key_here>");

// Sparkpost SMTP server tells me I have authed and am ready to send an email
235 2.0.0 Authed. Go on.

// Define the from
mail from:<email_address_of_sender>

// Server says ok
250 2.0.0 MAIL FROM accepted

// Define the to
rcpt to:<email_address_of_recipient>

// Server says ok
250 2.0.0 RCPT TO accepted

// Define I am done with email headers and ready to compose the email
data

// Server says ok
354 3.0.0 continue. finished with "\r\n.\r\n"

// Define the email
from:<email_address_of_sender>
to:<email_address_of_recipient>
subject:testing from interspire via openssl

test success
// Finish the email by sending a single period
.

// Server says it could send email WOOT WOOT!
250 2.0.0 OK EB/D8-12371-C6B1C955</put_your_sparkpost_api_key_here>
```

So now that I've finished a cursory test that I'm able to send email from this machine using TLS, it is time to try it with Interspire.

## Root cause of the issue

After following Interspire's documentation on configuring an external SMTP service, I tried to test...but I received the same error message as our customers. Good, now we can get down to the issue.

Before going further, I turned on some custom Apache, PHP, and MySQL log filing (just so I could easily locate debugging data).

Then after much hunting and some back and forth between Interspire's support team and myself, I was able to isolate that the right place to fix this issue was in the core Interspire email.php file. Great...just what I don't want, to have to touch the core engine code of a production system, but oh well...that's the gig. :)

So I would share what the contents of that file are here...but we don't own it, and it is proprietary to Interspire; I'll just talk about what I found out. (I've submitted this as a patch/feature suggestion already)

I did a bit of Googling and saw that one of our competitors had recommended using **tls://smtp.competitor.net** as a way to get Interspire to work over TLS...but I found out they were wrong in suggesting this course of action, and here's why: just using the **tls://** scheme isn't enough with PHP as it will gracefully degrade to ssl:// (less secure) if a valid TLS protocol encryption has not been configured...so I threw that out the window and looked at the code to determine that Interspire was never really establishing a secure tunnel.

AHA! So the issue was that **STARTTLS** was never actually being sent (because the SMTP connection code for Interspire wasn't issuing it appropriately). I also determined that during the authentication phase of the STARTTLS SMTP communications, it is best to set the tunnel to execute in blocking (synchronous) mode.

## What code overcame the issue?

Interspire is using PHP's `fsockopen()` method to establish the SMTP connection, but it wasn't looking for the STARTTLS command to be returned by the SMTP server after initiating the first *EHLO* command. Here's the diff (patch) on the email.php file

```
2030a

      // Must use STARTTLS and modify the stream, added by Sparkpost.com Developer Relations
      if ($starttls) {

        $this->DebugMemUsage('Trying to put ' . $data);

        $data  = "STARTTLS" . $crlf;
        $this->DebugMemUsage('Trying to put ' . $data);

        if (!$this->_Put_Smtp_Connection($data, $socket)) {
          $this->ErrorCode = 1001;
          $this->Error = 'Email server does not support STARTTLS command';
          fclose($socket);

          $this->DebugMemUsage('Got error ' . $this->Error);
          return false;
        }

        $response = $this->_get_response($socket);;

        $this->DebugMemUsage('Got response ' . $response);

        $responsecode = substr($response, 0, 3);
        if ($responsecode != '220') {
          $this->ErrorCode = 1002;
          $this->Error = 'Unable to use STARTTLS';
          fclose($socket);

          $this->DebugMemUsage('Get error ' . $this->Error);
          return false;
        } else {
          if( false == stream_socket_enable_crypto( $socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT ) ) {
            die( 'Unable to initiate TLS encryption' );
          }
        }

      }

      // Must check the EHLO command as blocking request before moving on to make sure the server has switched to TLS
      $data = 'EHLO ' . $this->message_id_server;
      $this->DebugMemUsage('Trying to put ' . $data);

      if (!$this->_Put_Smtp_Connection($data, $socket)) {
        $this->ErrorCode = 2;
        $this->Error = GetLang('UnableToConnectToMailServer_EHLO');
        fclose($socket);

        $this->DebugMemUsage('Got error ' . $this->Error);

        return false;
      }

      $response = $this->_get_response($socket);

      $this->DebugMemUsage('Got response ' . $response);

      // End of Sparkpost.com change//

.
2007a

      // Check to see if the server requires STARTTLS to be issued, added by Sparkpost.com Developer Advocates
      if (preg_match('%starttls%i', $line)) {
        $requireauth = true;
        // STARTTLS is required
        $starttls = true;
      }
      // End of Sparkpost.com changes //

.
1999a
    // Variable to store if STARTTLS is required, added by Sparkpost.com Developer Relations
    $starttls = false;
.
1949a
    // Enable stream blocking, added by Sparkpost.com Developer Relations
    stream_set_blocking( $socket, true);
    // End of Sparkpost.com changes//

.
339c
  var $Debug = true;
.
w
```

## Applying the patch to your Interspire instance

WARNING FROM INTERSPIRE: Please take note if you modify IEM SMTP connection code then we will not able to support any future issue that will be raised on email sending. Additionally, this patch has only been tested on Interspire version 6.15

I'm sure if you're this far into the article, you are ready to just apply the patch, so here's how you can use this to successfully get Interspire to send email via Sparkpost:

1. Make sure your environment is setup properly, you can test php by creating a temp web page with:

    ```
    <?php
    php_info();
    ?>
    ```
1. Make a copy of `cp /admin/com/ext/interspire_email/email.php ~/interspire_email.php.old`
1. Create copy of the above linix diff file to your Interspire instance user's home directory
1. Apply the above patch to the original file `ed - /admin/com/ext/interspire_email/email.php < REPLACE/WITH/PATH/AND/NAME/OF/PATCH/FILE.txt`
1. Make sure that the changes were applied (look around line 1999 for // Variable to store if STARTTLS is required `cat /admin/com/ext/interspire_email/email.php`
1. If the change is in place, then log in to Interspire and modify the "Settings" => "Email Settings" => "SMTP" => "Let me specify my own SMTP server details" to match the following image:
1. Include your email address, and then click the "Test SMTP Settings"

You should be all set now, but in case you run into any issues remember the following troubleshooting list:

* Your Sparkpost account is configured with a valid sending domain, and you use that sending domain in your User Settings of Interspire
* If you're test sending to a list, make sure that the Contact List is configured to use your associated Sparkpost verified sending domain
