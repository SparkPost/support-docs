---
title: "Recipient List Upload Error 'Error parsing line #2: email field is required'"
description: "Error when uploading a recipient list 'Error parsing line #2: email field is required'"
---

When uploading a recipient list CSV file, if you see this error:  "Error parsing line #2: email field is required", Check the following in your CSV file:

  * There are no leading or trailing spaces in any of the email addresses
  
  * The first line in the [CSV file](https://app.sparkpost.com/assets/csv-templates/recipient-list-template.csv) has the titles in tact:
    email,	name,	return_path,	metadata,	substitution_data,	tags
    
    ## Examples
    
       ![Incorrect](media/IncorrectCSV-2.png)
    
       ![Incorrect](media/IncorrectCSV-1.png)
    
       ![Correct](media/CorrectCSV.png)
    
  * The case of the title row headers is all in lower case as the parser is case sensitive.
