---
lastUpdated: "03/26/2020"
title: "Typographical Conventions Used in This Document"
description: "The typographical conventions used in this document are as follows Text in this style indicates executable programs such as ecelerity Text in this style is used when referring to file names For example The ecelerity conf file is used to configure Momentum Text in this style is used when referring..."
---

The typographical conventions used in this document are as follows:

*   **Text in this style**               indicates executable programs such as **ecelerity**.

*   `Text in this style` is used when referring to file names. For example, "The `ecelerity.conf` file is used to configure Momentum."

*   `Text in this style` is used when referring to command options. For example, "`list` is an option for the **module** command."

*   *Text in this style*               is used for emphasis.

*   **Text in this style**               is used for added emphasis.

*   *`Text in this style`*                indicates variable input—text that changes depending upon circumstances. For example, "For *`passwd`* enter the password you created during installation."

*   **`Text in this style`**                indicates user input. For example, "Install the application by issuing the command **`./installer`**."

*   `Text in this style` is used for literal values and variable names. For example, "A license file named `license`."

*   Text such as the following, ‘`C`’, is used to indicate a literal reference to a specific character. For example, "The letter ‘`C`’ in CIDR stands for 'Classless'".

In some cases, what appears on one line on the screen or in a program listing cannot be represented on one line in some forms of the documentation. In such circumstances such, the ‘`»`’ character is used. For example:

```
1187990817@DD/0C-13258-881AAC64@T@gmal.com@0@foogroup@foo1@21@8@ »
306072.00@10.0.0.1@421 4.4.0 [internal] no adequate servers
```

The preceding line would appear unbroken in a log file but, if left as is, it would be truncated in a PDF version of the documentation.

Unix command-line commands are broken using the ‘`\`’ character, making it possible to copy and paste commands. For example:

/opt/msys/ecelerity/bin/ec_md5passwd -r "Ecelerity Command Center" \
  -f /opt/msys/ecelerity/etc/console_passwd *`ecadmin`* *`testing`*