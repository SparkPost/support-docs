---
title: "A/B Testing in SparkPost"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/2756679-a-b-testing-in-sparkpost"
description: "A B Testing in Spark Post An A B test in summary is a common method of comparing templates to see which one performs better Spark Post provides the means to create new A B tests and view completed results through our A B Testing API What benefits do I..."
---

### A/B Testing in SparkPost is super cool!

An A/B test, in summary, is a common method of comparing templates to see which one performs better. SparkPost provides the means to create new A/B tests and view completed results through our A/B Testing API.

**What benefits do I get from using A/B testing?** 

An A/B test is a method of comparing templates to see which one performs better by splitting a given recipient list across the number of templates you are comparing. Performing these tests on a limited percentage of a recipient list will allow you to send to the winning template your remaining audience, which can help drive better engagement results for your campaigns.

**Creation and review of A/B testing through the API** 

Please refer to the [A/B testing API documentation](https://developers.sparkpost.com/api/ab-testing.html) for specifics on how to create and retrieve A/B tests.

**Notes about A/B testing specifics**                            :

*   A "group" in the context of A/B testing is the combination of a template and the recipients assigned to receive that template.
*   The winning template is automatically selected when the expiration time of the A/B test is reached. There are no manual controls to select a winning template. 
*   The winning template is chosen by best open rate across all groups. If there is a tie in open rate among templates being tested, a random winner will be selected from the templates that tied. A GET of the A/B test's ID through the API will list the template winner.
*   A minimum of 2 templates is required to run an A/B test. You may have up to a maximum of 10 templates in a single A/B test.
*   A recipient list used in an A/B test can have a **maximum** of 2,000 recipients.
*   The assignment of individual recipients into groups is randomized. You can pull which recipients were included in each group by performing a GET call with the A/B test's ID to the API endpoint.
*   The total number of recipients in the recipient list *must* be greater than the sum of all recipients assigned to test groups. There must be *at least 1*         remaining recipient not belonging to any test group.
*   Templates **must be published**              to be used in A/B testing. You cannot use draft templates.
*   The published templates you are testing with **must have engagement tracking turned**                                 **on.**
*   Reporting by individual groups is available through both the [message events API](http://developers.sparkpost.com/api/message-events.html#message-events-message-events-get) (individual message events) and the [metrics API](https://developers.sparkpost.com/api/metrics.html#metrics-deliverability-metrics-by-template-get) (aggregate statistics), and the UI.
    *   For the message events API, you must filter by both campaign ID and template ID to pull individual recipient data.
    *   To pull aggregate statistics by template performance, use the deliverability metrics by template as described in the metrics API link immediately above.
    *   In the UI, you can filter all reports using the search bar or clickable filters by campaign and template.

**Best practices for A/B testing**                          

*   Test as large a sample as you can for more accurate results. If possible, use the max that SparkPost allows - 2,000 recipients.
*   Test often for the best results - a single test may not be enough to provide a conclusive winner, as results may change over time.
*   Only test *one variable at a time*                    for best results when using A/B testing. This typically means that you should only change *one* variable in your template such as:
    *   ​Subject line (*this is often the testing variable in the majority of tests*                                                       )
    *   CTA (call to action)
    *   Offer language/different offers
    *   Header image
