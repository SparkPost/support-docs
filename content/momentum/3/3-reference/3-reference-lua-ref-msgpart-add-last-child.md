---
lastUpdated: "03/26/2020"
title: "msgpart:addLastChild"
description: "msgpart add Last Child Adds a child as the last child on this part msgpart add Last Child child Adds a child as the last child on this part This part must already be a container for the addition to succeed Returns true on success false on error Example 15..."
---

<a name="lua.ref.msgpart_addLastChild"></a> 
## Name

msgpart:addLastChild — Adds a child as the last child on this part

<a name="idp25680352"></a> 
## Synopsis

`msgpart:addLastChild(child);`

`child: table`<a name="idp25682992"></a> 
## Description

Adds a child as the last child on this part. This part must already be a container for the addition to succeed. Returns `true` on success, `false` on error.

<a name="lua.ref.msgpart_addLastChild.example"></a> 


```
require("msys.core");
require("msys.extended.message");
require("msys.dumper");

local function add_disclaimer(msg, plain, html)
  local p = msg:mime(false)

  if p == nil then
    return
  elseif p.parts != nil then
    if plain != nil then
      local plain_part = msg:makePart("text/plain", plain)
      plain_part.body_start = 0
      plain_part.body_end = #plain
      p:addLastChild(plain_part)
    end
    if html != nil then
      local html_part = msg:makePart("text/html", html)
      html_part.body_start = 0
      html_part.body_end = #html
      p:addLastChild(html_part)
    end
  else
    if plain != nil then
      msg:text_replace("\r\n.\r\n", plain.."\r\n.\r\n")
    elseif html != nil then
      msg:text_replace("\r\n.\r\n", html.."\r\n.\r\n")
    else
      error("add_disclaimer: both plain and html are nil")
    end
  end
end

local mod = {};

function mod:validate_data(msg, accept, vctx)
  print(msys.dumper.Dumper(msg));
  add_disclaimer(msg, "Disclaimer", "<b>Disclaimer</b>")
  return msys.core.VALIDATE_CONT
end

msys.registerModule("myValid", mod);
```

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp25690832"></a> 
## See Also

[msgpart:addFirstChild](/momentum/3/3-reference/3-reference-lua-ref-msgpart-add-first-child)