---
title: TLSv1.0 Deprecation Test REST Hostnames
---

As part of our efforts to deprecate TLSv1.0 fallback across our systems, we have made available hostnames which can be used to test the connections and processes which leverage our REST API.  The hostname is configured to reject TLSv1.0 connections, and therefore can be used to verify your processes are using TLSv1.1 or higher.

The hostname can be accessed by adding "no-tlsv1-test-" as a prefix to the current API hostname


**For example:**


**US Hosted Customers:**

Current Endpoint: https://api.sparkpost.com/api/v1/
Test Endpoint for TLS Deprecation: https://no-tlsv1-test-api.sparkpost.com/api/v1/



**EU Hosted Customers:**

Current Endpoint: https://api.eu.sparkpost.com/api/v1/
Test Endpoint for TLS Deprecation: https://no-tlsv1-test-api.eu.sparkpost.com/api/v1/


**Enterprise Customers with Branded Hostnames:**

Current Endpoint: https://<public_tenant_id>.api.e.sparkpost.com/api/v1/
Test Endpoint for TLS Deprecation: https://no-tlsv1-test-<public_tenant_id>.api.e.sparkpost.com/api/v1/



These hostnames will be removed after June 30, 2018, when TLSv1.0 has been fully deprecated.
