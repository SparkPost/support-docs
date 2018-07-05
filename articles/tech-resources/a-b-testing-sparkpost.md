---
title: "A/B Testing in SparkPost"
description: "A B Testing in Spark Post An A B test in summary is a common method of comparing templates to see which one performs better Spark Post provides the means to create new A B tests and view completed results through our A B Testing API What benefits do I..."
---

### A/B Testing in SparkPost 

An A/B test, in summary, is a common method of comparing templates to see which one performs better. SparkPost provides the means to create new A/B tests and view completed results through our A/B Testing API.

**What benefits do I get from using A/B testing?** 

An A/B test is a method of comparing 2 or more templates to see which one performs better. That is, which one provides a higher unique open or click rate. The SparkPost A/B Testing API allows users to compare multiple templates in the context of transactional or app generated messages, rather than lists, to see which one performs better for a set number of recipients (Sample Size) or over a set period of time. 

Some studies have shown that doing A/B testing on email content (vs. not doing any testing) can lift open rates by 13% or more. So here's a step by step guide to A/B Testing at SparkPost to get your started. Note that enhancements are coming over the months ahead (we're agile too!) - so please give us feedback on what you would like to see improved in our [Beta Program](https://www.sparkpost.com/sparkpost-beta-tester/).

**Creation and review of A/B testing through the API** 

Please refer to the [A/B testing API documentation](https://developers.sparkpost.com/api/ab-testing.html) for specifics on how to create and retrieve A/B test results. As a basic flow:
  1.  Call the A/B testing API to create/edit your A/B Test. 
  2.  Once you have a A/B Test ID, use it use it in the Transmissions API instead of your regular content jSON. The A/B Testing functionality will then take over and send either the default template you've defined as part of your A/B Test set up process or one of the variants if you're running an active test.

The benefit of this approach is that you only have to change the Transmission API once for any given message type (e.g. payment confirmation) and you can run as many A/B tests are you need to get to the best template. Once an active test completes, the A/B Testing functionality will revert to sending your default until you change it. When you're ready to run another active test, use the A/B Testing API to provide new template variants, set the new date, recipient counts, etc., and the test will run again with a different version number. This mode of A/B testing was built specifically to support the needs of users testing their transactional or app-generated messages rather than bulk sends because once an active test ends, the previously defined default template will continue to be sent so that Production sends are never interrupted.

You can get your results using webhook events. For transmissions that used an A/B Test, Open and Click events will have the A/B Test ID, and the A/B Test Version number so you can look at the results.

**Notes about A/B testing specifics:**

* A minimum of 2 templates is required to run an A/B test. You may have up to a maximum of 10 templates in a single A/B test.
* You can specify a population size with proportions for each template variant and default, which must add up to 100%. Or you can specify the number of recipients to receive a given template variant or default, which must add up to the population size. 
* You can optionally provide an end_time to your test. The test will end when the specified end_time OR population size is reached, whichever comes first.
* The assignment of individual recipients to specific template variants is randomized. You can see which recipient received which template variant in webhook events.
* Templates **must be published** to be used in A/B testing. You cannot use draft templates.
* The published templates you are testing with **must have engagement tracking turned on.**
* Reporting by individual tests is available through both the [message events API](http://developers.sparkpost.com/api/message-events.html#message-events-message-events-get) (individual message events) and the [metrics API](https://developers.sparkpost.com/api/metrics.html#metrics-deliverability-metrics-by-template-get) (aggregate statistics).
  * For the message events API, you must filter by template ID to pull individual recipient data.
  * To pull aggregate statistics by template performance, use the deliverability metrics by template as described in the metrics API link immediately above.

**Best practices for A/B testing**

* Test as large a sample as you can for more accurate results.
* Test often for the best results - a single test may not be enough to provide a conclusive winner, as results may change over time.
* Only test *one variable at a time* for best results when using A/B testing. This typically means that you should only change *one* variable in your template such as:
  * Subject line (*this is often the testing variable in the majority of tests*)
  * CTA (call to action)
  * Offer language/different offers
  * Header image 

**Planned Enhancements and Known Limitations**

 *  The current "Learning Mode" does not automatically pick a winner. It provides real-time results via webhooks to allow users to analyze the results and make a determination which template is the best based on open or click rates. It is then a separate call to the A/B Testing API to change the default template to be the winning template. The next enhancement is the introduction of a statistical model in Bayesian Mode that will pick the winner automatically for you. This is coming soon!!
 
 * An user interface (UI) is coming to allow non-technical users, such as Email Marketers and Email Product Managers to set up and manage A/B tests and get results. 
 
 * Current functionality only supports single-recipient Transmissions REST API calls using stored templates. Multiple recipient Transmissions calls that attempt to call an A/B Test will get an error. A/B testing is not supported for SMTP API, nor for inline-templates.


