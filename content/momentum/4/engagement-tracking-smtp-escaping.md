---
lastUpdated: "03/26/2020"
title: "Escaping {{ and }} in SMTP Message Body"
description: "Since Momentum inserts open tracked and click tracked UR Ls using its substitution engine any existing or that exist in the SMTP message must be escaped Before injection must be replaced with opening double curly and must be replaced with closing double curly..."
---

Since Momentum inserts open-tracked and click-tracked URLs using its substitution engine, any existing `{{` or `}}` that exist in the SMTP message must be escaped. Before injection, `{{` must be replaced with `{{opening_double_curly()}}` and `}}` must be replaced with `{{closing_double_curly()}}`.