---
title: "Importing your Suppression List to SparkPost"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/2404386-importing-your-suppression-list-to-sparkpost"
description: "As you migrate to Spark Post from your existing provider it is very important that you transfer over your suppression list in order to optimize your inbox placement and to continue building good reputation This article will walk you through the steps to do so Import Suppression List Spark Post..."
---

As you migrate to SparkPost from your existing provider it is very important that you transfer over your suppression list in order to optimize your inbox placement and to continue building good reputation.  This article will walk you through the steps to do so.

## Import Suppression List

SparkPost offers a command-line tool to help you accomplish this task. Here are the steps to import your exiting suppression list into SparkPost's suppression list:

1. Export your suppression list from your current provider as a CSV file
1. Download SparkPosts command-line tool sparkpost_cli.zip from [here](https://github.com/SparkPost/sparkpost-cli/releases).
1. Unzip the CLI
1. The zip file contains binary for Windows, Linux and OSX. Open your terminal to the directory that matches your operating system
1. Now run the CLI like this:
    `sp-suppression-list-cli --apikey YOUR_API_KEY --existing provider --file PATH_TO_OLD_SUPPRESSION_LIST.csv`

    NOTE: Make sure that your API key has the "Suppression Lists: Read/Write" permission enabled

| Argument |    | Description |
| --- | --- | --- |
| YOUR API KEY |    | Your API key for SparkPost. Learn more [here](https://support.sparkpost.com/customer/portal/articles/1933377-create-api-keys) |
| PATH_TO_OLD_SUPPRESSION_LIST |    | This is the path to the suppression file you got from current provider.  |

## View Suppression List

Now that you have imported your suppression list you can view it with the following CLI command.

`sp-suppression-list-cli --apikey YOUR_API_KEY`

## More Information

For more information check out these articles:

* [Optimizing Deliverability and Inbox Placement](https://support.sparkpost.com/customer/en/portal/articles/2396826-optimizing-deliverability-and-inbox-placement) 
* [Using Suppression Lists](https://support.sparkpost.com/customer/portal/articles/1929891)
