---
title: "TLSv1.0 Deprecation Test REST Hostnames"
description: "As part of our efforts to deprecate TLSv1.0 fallback across our systems, we have made available hostnames which can be used to test the connections and processes which leverage our REST API. The hostname is configured to reject TLSv1.0 connections, and therefore can be used to verify your processes are using TLSv1.1 or higher."
---

As part of our efforts to deprecate TLSv1.0 fallback across our systems,
we have made available hostnames which can be used to test the connections
and processes which leverage our REST API and SMTP services.
The hostname is configured to reject TLSv1.0 connections,
and therefore can be used to verify your processes are using TLSv1.1 or higher.

These hostnames will be removed after July 23, 2018, when TLSv1.0 has been fully deprecated.
Please note that these hostnames are not intended to support production traffic.

The hostname can be accessed by adding "no-tlsv1-test-" as a prefix to the current hostname.

<br/>

**For example:**


**US Hosted Customers:**

Current API Endpoint: https://api.sparkpost.com/api/v1/

Test API Endpoint for TLS Deprecation: https://no-tlsv1-test-api.sparkpost.com/api/v1/

<br>

Current SMTP Endpoint:  smtp.sparkpostmail.com

Test SMTP Endpoint for TLS Deprecation:  no-tlsv1-test-smtp.sparkpostmail.com

<br>

**EU Hosted Customers:**

Current Endpoint: https://api.eu.sparkpost.com/api/v1/

Test Endpoint for TLS Deprecation: https://no-tlsv1-test-api.eu.sparkpost.com/api/v1/

<br>

Current SMTP Endpoint:  smtp.eu.sparkpostmail.com

Test SMTP Endpoint for TLS Deprecation:  no-tlsv1-test-smtp.eu.sparkpostmail.com

<br>

**Enterprise Customers with Branded Hostnames:**

Current Endpoint: https://<company_name>.api.e.sparkpost.com/api/v1/

Test Endpoint for TLS Deprecation: https://no-tlsv1-test-<company_name>.api.e.sparkpost.com/api/v1/

<br>

Current SMTP Endpoint:  <company_name>.smtp.sparkpostmail.com

Test SMTP Endpoint for TLS Deprecation:  no-tlsv1-test-<company_name>.smtp.sparkpostmail.com

### Upgrade Advice

If you're unable to connect to the no-tlsv1 enpoints, you probably need to upgrade some of the software on your servers.
Depending on your system, you might have to upgrade the version of the programming language used to call SparkPost or other components of your server.
Here are some common cases that could solve the issue:

#### OpenSSL
Upgrade your OppenSSL (or equivalent TLS implementation) to a version that supports TLS 1.2.

#### Python
    * [Install Python 2.7 with homebrew](http://docs.python-guide.org/en/latest/starting/install/osx/)
    * [Install Python 3.7](https://www.python.org/downloads/)

#### Java
    * Upgrade to at least Java version 1.7,

#### C#
    * .NET: Upgrade to .NET  4.5 or a more recent version.

#### Client Libraries
It is unlikely that the issue is rooted in your SparkPost client library.
If you have upgraded the rest of your relevant software and still have issues, please:
* Update to the latest version of the client library
* Open an issue in the library's github repo
