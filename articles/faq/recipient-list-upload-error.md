---
title: "Recipient List Upload Error"
description: "Error when uploading a recipient list"
---

When uploading a recipient list CSV file, if you see this error:  "Error parsing line #2: email field is required", Check the following in your CSV file:

  * There are no leading or trailing spaces in any of the email addresses
  * The first line in the [CSV file](https://app.sparkpost.com/assets/csv-templates/recipient-list-template.csv) has the titles in tact:
    email,	name,	return_path,	metadata,	substitution_data,	tags
  * The case of the title row is all in lower case as the parser is case sensitive.
