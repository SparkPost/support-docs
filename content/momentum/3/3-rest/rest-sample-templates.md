---
lastUpdated: "03/26/2020"
title: "Template Files"
description: "The following conditions apply to template files used with the injection API The template must be a valid 7 bit RFC 821 compatible message blob The template engine does not automatically handle MIME encoding when performing substitution Neither header encoding nor body transfer encoding will be performed The value data..."
---

The following conditions apply to template files used with the injection API:

*   The template must be a valid 7-bit RFC 821 compatible message blob.

*   The template engine does not automatically handle MIME encoding when performing substitution. Neither header encoding nor body transfer encoding will be performed. The value data is substituted via straight text substitution; the value provided to the engine must already be encoded appropriately if encoding is required.

*   The template engine normalizes the line-endings to canonical CRLF.

*   Substitutions are denoted by one of the two following sequences:

    ```
    <%= :key %>
    [%= :key %]
    ```

    Keys in substitutions are case in-sensitive.

### Note

The REST API does not do 'dot-stuffing'. The JSON object should already be dot-stuffed and there should be no leading dot in any line.

Sample template files that can be used with the REST injector are as follows.

The following is an example of a simple template where all values are hard coded.

<a name="rest.templates.simple"></a> 


```
{
  "template": "From: tester@mgr.example.org\nTo: someone@example.com\nSubject:
  Simple content\n\nThis is your injected message",
  "recipients": [
    {
      "to": "someone@example.com",
      "from": "tester@mgr.example.com"
    }
  ]
}
```

The following example uses macro substitution and shows an example template that could be used for a subscription follow-up.

<a name="rest.templates.followup"></a> 


```
{
  "template": "From: <%=:from%>\nTo: <%=:to%>\nSubject: <%=:subject%>\n\nYou
  signed up on <%=:signup%>",
  "recipients": [
    {
      "to": "john@example.com",
      "from": "tester@mgr.example.org",
      "keys": {
        "subject": "personalized subject",
        "signup": "1st October"
      }
    }
  ]
}
```

The following example lists multiple recipients and also makes use of validation context variables.

<a name="rest.templates.multiple"></a> 


```
{
  "template": "From: <%=:from%>\nTo: <%=:to%>\nSubject:
  <%=:subject%>\n\nDelivery Date: <%=:signup%>",
  "recipients": [
    {
      "to": "john@example.com",
      "from": "another.user@example.com",
      "vctx": {
        "key": "value",
        "otherkey": "othervalue"
      },
      "keys": {
        "subject": "personalized subject",
        "signup": "1st October"
      }
    },
    {
      "to": "perm@fail.com",
      "from": "a.different.user@example.com",
      "vctx": {
        "key": "value",
        "otherkey": "thisvalue"
      },
      "keys": {
        "subject": "personalized different subject",
        "signup": "2nd October"
      }
    }
  ]
}
```

Validation context variables defined in this way are accessible to policy scripts.