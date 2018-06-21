---
title: "TLSv1.0 Deprecation Test REST Hostnames"
description: "As part of our efforts to deprecate TLSv1.0 fallback across our systems, we have made available hostnames which can be used to test the connections and processes which leverage our REST API.  The hostname is configured to reject TLSv1.0 connections, and therefore can be used to verify your processes are using TLSv1.1 or higher."
---

As part of our efforts to deprecate TLSv1.0 fallback across our systems, we have made available hostnames which can be used to test the connections and processes which leverage our REST API and SMTP services.  The hostname is configured to reject TLSv1.0 connections, and therefore can be used to verify your processes are using TLSv1.1 or higher.

These hostnames will be removed after June 30, 2018, when TLSv1.0 has been fully deprecated.  Please note that these hostnames are not intended to support production traffic.

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

Current SMTP Endpoint:  smtp.eu.e.sparkpost.com

Test SMTP Endpoint for TLS Deprecation:  no-tlsv1-test-smtp.eu.e.sparkpost.com

<br>

**Enterprise Customers with Branded Hostnames:**

Current Endpoint: https://<company_name>.api.e.sparkpost.com/api/v1/

Test Endpoint for TLS Deprecation: https://no-tlsv1-test-<company_name>.api.e.sparkpost.com/api/v1/

<br>

Current SMTP Endpoint:  <company_name>.smtp.e.sparkpost.com

Test SMTP Endpoint for TLS Deprecation:  no-tlsv1-test-<company_name>.smtp.e.sparkpost.com

