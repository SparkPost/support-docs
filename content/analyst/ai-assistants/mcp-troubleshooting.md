---
lastUpdated: '10/10/2026'
title: 'Troubleshoot the Inbox Tracker MCP Connection'
description: 'Fixes for sign-in problems, missing tools, stale tool lists and network issues when connecting an AI assistant to Inbox Tracker.'
---

Start with a quick check: ask your assistant "What can I do with the Inbox Tracker connector?" If it answers with your account name, you're connected and signed in, and the answer says which areas are on and why any are hidden.

### Signing in

| What you see | Cause | What to do |
|---|---|---|
| No browser window opens | The client couldn't open one, or a pop-up blocker stopped it | Copy the sign-in link from the client and open it yourself. In Claude Code, run `claude mcp login inbox-tracker`. |
| You land on a login page you don't normally use | The email address you entered belongs to a different login | Go back and enter the email address you sign in to Inbox Tracker with. |
| "You are signed in on a site your account does not use." | The browser is already signed in to a different Inbox Tracker site | Sign out of Inbox Tracker in that browser, or use a private window, and connect again. |
| "Your account cannot authorize applications. Contact your administrator." | Your user or account isn't allowed to connect applications | Contact your administrator or [support@bird.com](mailto:support@bird.com). |
| "This sign-in link has expired or was already used." | The sign-in took too long, or the page was reloaded | Start connecting again from your assistant. |
| Sign-in finishes but the client still says it needs authentication | The client didn't receive the result, often because a browser extension or firewall blocked the redirect back to `localhost` | Allow the redirect, then sign in again. For a client using mcp-remote, delete `~/.mcp-auth` and restart the client. |
| The assistant says it isn't signed in, after working before | Your sign-in ended | Reconnect from your assistant's connector or MCP settings. |

### Tools and access

| What you see | Cause | What to do |
|---|---|---|
| An area you expected is missing | Your subscription doesn't include it, or you didn't allow it at sign-in | Ask "What can I do with the Inbox Tracker connector?" It names each hidden area and the reason. |
| No Competitive Tracker tools | Competitive Tracker data needs an API key with Competitive Tracker access on your account | Ask your Customer Success Manager or [support@bird.com](mailto:support@bird.com). |
| A tool says the permission to make changes wasn't granted | You left **Optional: allow changes** unticked | Disconnect, connect again, and tick **Add, edit, and remove tracked domains and IntelliSeed filter sets**. |
| A tool says your role doesn't allow the change | Changes need the Manager role | Ask a manager on your account. |
| No seed list | Panel-only Inbox Tracker accounts don't have seed lists | Contact your Customer Success Manager. |
| A result says part of it was rate limited | Each part of a request counts against your account's API rate limit | Wait for the time the result gives and ask again, or ask for less at once. |
| ChatGPT won't run a tool that changes something | Some ChatGPT plans may only allow read-only tools | See OpenAI's [Developer mode and MCP apps in ChatGPT](https://help.openai.com/en/articles/12584461). |

### Old or missing tool list

Clients keep a copy of the tool list. If tools look out of date after your subscription changes, refresh it:

| Client | Refresh |
|---|---|
| Claude | Start a new chat. If tools are still missing, remove the connector and add it again. |
| Claude Code | Restart Claude Code, or reconnect from `/mcp`. |
| ChatGPT | Open the plugin at [chatgpt.com/plugins](https://chatgpt.com/plugins), choose **Refresh**, then start a new conversation. |
| Cursor | Turn the server off and on again in the MCP server list. |
| VS Code | Run **MCP: Reset Cached Tools**. |
| Gemini CLI | Run `/mcp reload`. |
| Codex CLI | Restart Codex. |

### Network and proxies

Claude and ChatGPT connect from their own servers, so your network doesn't affect them. Clients that run on your computer (Claude Code, Cursor, VS Code, Gemini CLI, Codex CLI and mcp-remote) need HTTPS access to both of these hosts:

```text
mcp.emailanalyst.com
app.emailanalyst.com
```

If your company inspects HTTPS traffic, Node.js clients such as mcp-remote may reject the proxy's certificate. Point Node.js at your company's root certificate:

```bash
export NODE_EXTRA_CA_CERTS=/path/to/company-root-ca.pem
```

Ask your IT team for the certificate file if you don't have it.

### Still stuck

Email [support@bird.com](mailto:support@bird.com) with your assistant's name and version, the time you tried, and the exact message you saw. Your client's MCP log helps too: in Cursor and VS Code it's in the Output panel, and mcp-remote writes one when you add `--debug`.
