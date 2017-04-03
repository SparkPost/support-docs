---
title: "Non-programmer Use Of The SparkPost API"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/2455174-non-programmer-use-of-the-sparkpost-api"
description: "Spark Post is an API first service meaning that all its capabilities are available through the Spark Post API However that does not mean you must be adeveloper to use it The Postman REST API client is a useful tool that offers visual access to modern web AP Is including..."
---

SparkPost is an "API first*"* service meaning that all its capabilities are available through the SparkPost API.  However that does not mean you must be adeveloper to use it.  The Postman REST API client is a useful tool that offers visual access to modern web APIs including SparkPost.  Any API request a programmer can make, you can also make through Postman using the SparkPost Postman collection.

Note: you'll need an API key to make SparkPost API calls from Postman.  [Here's how to create an API key.](https://support.sparkpost.com/customer/en/portal/articles/1933377-create-api-keys?b_id=7411)

Here's a quick set of steps for using Postman with SparkPost.  For a more detailed introduction, [check out the article here](https://www.sparkpost.com/blog/how-to-run-sparkpost-postman/).

1.  [Download and install Postman from here](https://www.getpostman.com/)
2.  [Import the SparkPost Postman collection into your Postman installation](https://app.getpostman.com/run-collection/81ee1dd2790d7952b76a)
3.  In Postman, create an "environment" to hold your settings:
    1.  In Postman, click the "no environment" button at the top right
    2.  Choose "Manage environments" from the drop down menu
    3.  Click "Add" and type in a name for your environment (e.g. "SparkPost")
    4.  Under the name field, add your API key:
        1.  Type *API_KEY* into the first *key* field
        2.  Paste your API key into the first *value* field
    5.  Click "Add" to save your environment
4.  Choose the API endpoint you want to call from the SparkPost API collection folder on the left (e.g Account Info -> Retrieve Account Usage)
5.  Click the "Send" button to make your API request
6.  Your API response will appear at the bottom right, under the URL and Send button