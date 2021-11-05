---
lastUpdated: "02/08/2020"
title: "A/B Testing in SparkPost"
description: "A B Testing in Spark Post An A B test in summary is a common method of comparing templates to see which one performs better Spark Post provides the means to create new A B tests and view completed results through our A B Testing API What benefits do I..."
---

## A/B Testing in SparkPost 

A/B testing is a common method of comparing templates to see which one performs better. SparkPost provides the means to create A/B tests and view completed results through our A/B Testing API.

**What benefits do I get from using A/B testing?** 

A/B testing is a means of determining what content drives more engagement (greater open/click rates). The SparkPost A/B Testing API allows users to compare multiple templates in the context of transactional or app-generated messages to see which one performs better for a set number of recipients (sample size) or over a set period of time. 

Many studies have shown that doing A/B testing on email content (vs. not doing any testing) can lift open rates by 13% or more. The following is a step by step guide to A/B Testing on SparkPost to get you started. Note that enhancements are coming over the months ahead (see below) - so please give us feedback on what you would like to see improved in our [Beta Program](https://www.sparkpost.com/sparkpost-beta-tester/).


**Modes of A/B tesing**

There are two supported modes of behavior selection once the A/B test completes. In "learning" mode, once the test has completed, subsequent transmissions will revert to using the default template. In "bayesian" mode, the best performing template (the "winner"), as determined by a Bayesian algorithm, will be used in all subsequent transmissions.

You can think of learning mode as a more manual means of doing A/B testing, leaving the decision of which template is the winner entirely up to you, whereas bayesian mode is intended to be an automated means of testing, where an algorithm determines the winner automatically once a given confidence interval has been reached (unless this confidence interval has not been reached by the time the test ends, at which point the default template will be considered the "winner").

**Creation and review of A/B testing through the API** 

Please refer to the [A/B testing API documentation](https://developers.sparkpost.com/api/ab-testing.html) for specifics on how to create and retrieve A/B test results. As a basic flow:
  1.  Call the A/B testing API to create/edit your A/B Test. 
  2.  Once you have a A/B Test ID, use it in the Transmissions API instead of your regular `content` JSON object. The A/B Testing functionality will then take over and send either the default template you've defined as part of your A/B Test set up process, or one of the defined variants if you're running an active test. You can reference the API documentation [here](https://developers.sparkpost.com/api/transmissions.html#header-using-an-a-b-test) on how to call the active A/B test in your Transmissions API call.

The benefit of this approach is that you only have to change the Transmissions API once for any given message type, (e.g. payment confirmation) and you can run as many A/B tests as needed to decide on the best template. Once an active test completes, the A/B Testing functionality will revert to sending your default template if you continue to call the A/B test ID via the Transmissions API. When you're ready to run another active test, use the A/B Testing API to provide new template variants, set a new date, recipient counts, etc., and the test will run again with a different version number. This mode of A/B testing was built specifically to support the needs of users testing their transactional or app-generated messages rather than bulk sends, because once an active test ends, the previously defined default template will continue to be sent so that production sends are never interrupted.

You can review your results using webhooks or via the Events API. For transmissions that used an A/B Test, open and click events will have the A/B test ID and A/B Test version number so you can differentiate at the results.

**Notes about A/B testing specifics:**

* A minimum of 2 templates is required to run an A/B test. You may have up to a maximum of 10 templates in a single A/B test.
* You can specify a population size with proportions for each template variant and default, which must add up to 100%. Or you can specify the number of recipients to receive a given template variant or default, which must add up to the population size. 
* You can optionally provide an `end_time` to your test. The test will end when the specified `end_time` OR population size is reached, whichever comes first.
* An active test can run for a **maximum of 30 days**. That includes the engagement timeout (see below for more about the engagement timeout).
* The assignment of individual recipients to specific template variants is randomized. You can see which recipient received which template variant in webhook events.
* Templates **must be published** to be used in A/B testing. You cannot use draft templates.
* The published templates you are testing with **must have engagement tracking turned on.**
* Reporting by individual tests is available through both the [Events API](https://developers.sparkpost.com/api/events/) (individual message events) and the [Metrics API](https://developers.sparkpost.com/api/metrics.html#metrics-deliverability-metrics-by-template-get) (aggregate statistics).
  * For the Message Events API, you must filter by template ID to pull individual recipient data.
  * To pull aggregate statistics by template performance, use the deliverability metrics by template as described in the metrics API link immediately above, or filter by template in the UI reporting.
  
***A note about Engagement Timeout and End Time*** 

A/B testing of email is not immediate - it takes some amount of time for opens and clicks to occur as recipients open their messages over time. Because of this, we've built in something called the "Engagement Timeout" - the amount of time, in hours, that a test waits to collect results after the `end_time` to make a decision on a winner and/or mark a test as completed. By default, this is set to 24 hours, but you can lengthen or shorten it to your needs. However, keep in mind that a test can run for 30 days total including the engagement timeout, so if you don't set an end time explicitly, the system will set an end time that is 30 days minus the engagement timeout. 

## A/B testing states

An A/B Test can be in one of the following states:

*1. Draft State* — only the name, Test ID, and default template are required (no variant templates set). If called in the Transmissions API, the default template will be delivered to recipients.

To change the default template when the A/B Test is in a "draft" state:

```
PUT /api/v1/ab-test/draft/{id}

{
  "default_template": {
    "template_id": "new_template_id" 
   }
}
```

*2. Scheduled State* — An A/B test with start time, variant templates, and all the other parameters set in order to run an A/B test. If called in the Transmissions API, the default template will be delivered to recipients until the start time arrives.

To change the default template when the A/B Test is in a "scheduled" state:

```
PUT /api/v1/ab-test/{id}
    
{
   "default_template": {
     "template_id": "new_template_id" 
   }
}
```

*3. Running State* — An A/B Test is running with the template variants or default template being sent to recipients according to the test instructions.

To change the default template when the A/B Test is in a "running" state, the test must be cancelled first, which will put it into the "cancelled" state.

*4. Cancelled State* — An A/B Test that was cancelled by the user. If called in the Transmissions API, the default template that was defined at the beginning of the test will be sent to recipients.

To change the default template when the A/B Test is in a "cancelled" state:

```
PUT /api/v1/ab-test/draft/{id}

{
   "default_template": {
     "template_id": "new_template_id" 
   }
}
```                  
    
Note that the A/B Test will go into "draft" state, and the version will be incremented accordingly. The following will also work, but requires a valid start time and other A/B Test parameters:

```
PUT /api/v1/ab-test/{id}

{
  "name": "Password Reset!",
  "metric": "count_unique_confirmed_opened",
  "start_time": "2018-07-20T19:50:00.000Z",
  "end_time": "2018-07-22T18:00:00.000Z",
  "test_mode": "bayesian",
  "audience_selection": "percent",
  "engagement_timeout": 24,
  "confidence_level": 0.95,
  "default_template": {
    "template_id": "default_payment_confirmation_template",
    "percent": 50
  },
  "variants": [
    {
      "template_id": "payment_confirmation_variant1",
      "percent": 25
    },
    {
      "template_id": "payment_confirmation_variant2",
      "percent": 25
    }
  ]
}
```

*5. Completed State* — An A/B Test reached its end time + engagement timeout or required sample size. If called in the Transmissions API, either the winning template ID (if there was a winner) or the default template ID (if there was no winner) will be sent to recipients.

To change the default template or the winning template when the A/B Test is in a "completed" state:

```
PUT /api/v1/ab-test/draft/{id}

{
   "default_template": {
     "template_id": "new_template_id" 
   }
}
```

Note that the A/B Test will go into "draft" state, and the version will be incremented accordingly. The following will also work, but requires a valid start time and other A/B Test parameters:

```
PUT /api/v1/ab-test/{id}

{
  "name": "Password Reset!",
  "metric": "count_unique_confirmed_opened",
  "start_time": "2018-07-20T19:50:00.000Z",
  "end_time": "2018-07-22T18:00:00.000Z",
  "test_mode": "bayesian",
  "audience_selection": "sample_size",
  "total_sample_size": 10000,
  "engagement_timeout": 24,
  "confidence_level": 0.95,
  "default_template": {
    "template_id": "default_payment_confirmation_template",
    "sample_size": 5000
  },
  "variants": [
    {
      "template_id": "payment_confirmation_variant1",
      "sample_size": 2500
    },
    {
      "template_id": "payment_confirmation_variant2",
      "sample_size": 2500
    }
  ]
}
```

**Best practices for A/B testing**

* Test as large a sample as you can for more accurate results.
* Test often for the best results - a single test may not be enough to provide a conclusive winner, as results may change over time.
* Only test *one variable at a time* for best results when using A/B testing. This typically means that you should only change *one* variable in your template such as:
  * Subject line (*this is often the testing variable in the majority of tests*)
  * CTA (call to action)
  * Offer language/different offers
  * Header image 

**Planned enhancements and known limitations**
 
 * An user interface (UI) is coming to allow non-technical users, such as Email Marketers and Email Product Managers to set up and manage A/B tests and get results. 
 
 * Current functionality only supports single-recipient Transmissions API calls using stored templates. Multiple recipient Transmissions calls that attempt to call an A/B Test will get an error. A/B testing is not supported for SMTP API or inline templates.
