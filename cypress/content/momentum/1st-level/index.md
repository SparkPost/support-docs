---
title: "Test Index File"
type: "custom"
name: "Text Index File - Reference Manual"
description: "This is specifically for the use of cypress and is to be used for test purposes only"
---

# <a name="h1"></a> h1
## <a name="h2"></a> h2
### <a name="h3"></a> h3
#### <a name="h4"></a> h4
##### <a name="h5"></a> h5
###### <a name="h6"></a> h6

This content comes from the `4-preface.md` file, which I think is a good example for content styles we need to test for

*   **Text in this style**               indicates executable programs such as **ecelerity**.

*   `Text in this style` is used when referring to file names. For example, "The `ecelerity.conf` file is used to configure Momentum."

*   `Text in this style` is used when referring to command options. For example, "`list` is an option for the **module** command."

*   *Text in this style*               is used for emphasis.

*   **Text in this style**               is used for added emphasis.

*   *`Text in this style`*                indicates variable input—text that changes depending upon circumstances. For example, "For *`passwd`* enter the password you created during installation."

*   **`Text in this style`**                indicates user input. For example, "Install the application by issuing the command **`./installer`**."

*   `Text in this style` is used for literal values and variable names. For example, "A license file named `license`."

*   Text such as the following, ‘`C`’, is used to indicate a literal reference to a specific character. For example, "The letter ‘`C`’ in CIDR stands for 'Classless'".

In some circumstances, what appears on one line on the screen or in a program listing cannot be represented on one line in some forms of the documentation. In circumstances such as this, the ‘`»`’ character is used. For example:

```
1398088802 10.77.0.158:18906 *:2081 "POST /transmissions?org_id=1&num_rcpt_errors=0 »
  HTTP/1.0" 500 332 1045.000
```

The preceding line would appear unbroken in a log file but, if left as is, it would be truncated in a PDF version of the documentation.

Where possible, Unix command-line commands are broken using the ‘`\`’ character, making it possible to copy and paste commands. For example:

sudo -u ecuser \
    /opt/msys/ecelerity/bin/ec_show -m *`msg-id`*
