---
lastUpdated: '10/10/2026'
title: 'Connect an AI Assistant to Inbox Tracker'
description: 'Add the Inbox Tracker & Competitive Tracker MCP server to Claude, ChatGPT, Cursor, VS Code, Gemini CLI, Codex or any MCP client, and sign in with your Inbox Tracker login.'
---

The Inbox Tracker & Competitive Tracker MCP server lets an AI assistant answer questions from your eDataSource data: where your mail landed, what Gmail and Yahoo report about your domains, your blocklist and spam-trap status, and what other senders are doing. You sign in with your usual Inbox Tracker login, and the assistant can only do what your account and your role allow.

**Server address**

```text
https://mcp.emailanalyst.com/mcp
```

It's a remote server, so there's nothing to install and no API key to create.

## Which server to use

SparkPost runs two MCP servers: this one for Inbox Tracker and Competitive Tracker, and one for sending with SparkPost. If you use both products, connect both. Your assistant then picks the right server for each question, and this one points it to SparkPost when a question is about your sending.

> **Note** Looking for the Bird platform (bird.com) MCP server? These servers are for SparkPost, Inbox Tracker and Competitive Tracker only. See [Bird's MCP server docs](https://bird.com/docs/ai/mcp-server).

| | Inbox Tracker & Competitive Tracker MCP | [SparkPost MCP](https://developers.sparkpost.com/mcp-server/) |
|---|---|---|
| Use it for | Inbox placement, seed and IntelliSeed™ testing, reputation (Google, Yahoo, blocklists, spam traps, DNS authentication), competitive intelligence | Sending email, templates, sending domains, suppressions, bounces and your SparkPost account |
| Data it reads | What eDataSource measures with panel, seed and IntelliSeed™ mailboxes | Your own SparkPost sending events and settings |
| Address | `https://mcp.emailanalyst.com/mcp` | See the [SparkPost MCP docs](https://developers.sparkpost.com/mcp-server/) |

This server doesn't send email and can't see your sending platform's logs.

## Before you start

- You need an Inbox Tracker login: the email address and password you use today, or your company's single sign-on.
- What the assistant can see depends on your subscription. Inbox placement, reputation data, Competitive Tracker and engagement analytics each appear only if your account includes them. Competitive Tracker data also needs an API key with Competitive Tracker access on your account.
- Changes, such as adding a tracked domain or an IntelliSeed™ filter set, need the Manager role, and you choose whether to allow them when you sign in.

## Quick start

These steps use Claude. Other assistants are covered under [Set up your assistant](#set-up-your-assistant).

1. In Claude, open **Customize** > **Connectors** and choose **Add custom connector**.
2. Name it **Inbox Tracker** and enter `https://mcp.emailanalyst.com/mcp` as the URL. Choose **Add**.
3. Choose **Connect**. Your browser opens the Inbox Tracker sign-in.
4. Enter your Inbox Tracker email address, sign in as usual, and choose **Allow**. See [Signing in](#signing-in) for what the consent page shows.
5. Back in Claude, start a chat and ask:

```text
What can I do with the Inbox Tracker connector?
```

The assistant replies with your account, your tracked domains and the areas your subscription includes. Then try a real question:

```text
How did my latest campaign from example.com place at Gmail and Yahoo?
```

## Set up your assistant

- [Claude (web and desktop)](#claude-web-and-desktop)
- [Claude Code](#claude-code)
- [ChatGPT](#chatgpt)
- [Cursor](#cursor)
- [VS Code with GitHub Copilot](#vs-code-with-github-copilot)
- [Gemini CLI](#gemini-cli)
- [Codex CLI](#codex-cli)
- [Other clients](#other-clients)

Every client signs in the same way. It discovers the sign-in from the server, so you never need a client ID or secret.

### Claude (web and desktop)

Connectors you add on claude.ai also appear in Claude Desktop and the mobile apps.

**Free, Pro and Max plans**

1. Open **Customize** > **Connectors** and choose **Add custom connector**.
2. Name it **Inbox Tracker** and enter `https://mcp.emailanalyst.com/mcp`. Leave any OAuth client settings at their defaults.
3. Choose **Add**, then **Connect**, and [sign in](#signing-in).

The Free plan allows one custom connector.

**Team and Enterprise plans**

An Owner adds the connector once for the organization:

1. Open **Organization settings** > **Connectors** and choose **Add** > **Custom** > **Web**.
2. Enter `https://mcp.emailanalyst.com/mcp` and choose **Add**.

Each member then opens **Customize** > **Connectors**, finds **Inbox Tracker**, chooses **Connect** and signs in with their own Inbox Tracker login.

**Check it worked:** the connector shows as connected and its page lists the tools. In a chat, open the **+** menu, then **Connectors**, to turn it on or off for that conversation.

> **Note** Claude Desktop's `claude_desktop_config.json` is for local servers only. Add this server under **Connectors** instead.

### Claude Code

Add the server for all your projects:

```bash
claude mcp add --transport http --scope user inbox-tracker https://mcp.emailanalyst.com/mcp
```

Then sign in. Either run `/mcp` inside Claude Code, select **inbox-tracker** and choose **Authenticate**, or run this from your terminal:

```bash
claude mcp login inbox-tracker
```

To share the server with your team through the repository instead, add it to `.mcp.json` at the project root:

```json
{
  "mcpServers": {
    "inbox-tracker": {
      "type": "http",
      "url": "https://mcp.emailanalyst.com/mcp"
    }
  }
}
```

Each person still signs in with their own login.

**Check it worked:** `claude mcp list` shows `inbox-tracker` as connected.

### ChatGPT

Custom MCP servers in ChatGPT need developer mode. It's available on some paid plans, a workspace admin may need to turn it on, and some plans may only allow read-only tools. See OpenAI's [Developer mode and MCP apps in ChatGPT](https://help.openai.com/en/articles/12584461) for what your plan includes.

1. Go to [chatgpt.com/plugins](https://chatgpt.com/plugins), choose **+** and then **Add custom MCP server**.
2. Name it **Inbox Tracker**, add a short description, and enter `https://mcp.emailanalyst.com/mcp` as the connection URL.
3. Choose OAuth for authentication and leave the client fields empty.
4. Choose **I understand and want to continue**, then **Create as a plugin**, and [sign in](#signing-in).

**Check it worked:** in a new chat, type `@` and select **Inbox Tracker**, then ask "What can I do with the Inbox Tracker connector?"

### Cursor

[Add to Cursor](cursor://anysphere.cursor-deeplink/mcp/install?name=inbox-tracker&config=eyJ1cmwiOiJodHRwczovL21jcC5lbWFpbGFuYWx5c3QuY29tL21jcCJ9)

Or add the server to `~/.cursor/mcp.json` (all projects) or `.cursor/mcp.json` (one project):

```json
{
  "mcpServers": {
    "inbox-tracker": {
      "url": "https://mcp.emailanalyst.com/mcp"
    }
  }
}
```

Cursor opens your browser to [sign in](#signing-in) the first time it connects. If it doesn't, select **inbox-tracker** in Cursor's MCP server list and sign in from there.

**Check it worked:** the server shows its tools in the MCP server list. If it reports an error, open the Output panel and choose **MCP Logs**.

### VS Code with GitHub Copilot

[Install in VS Code](vscode:mcp/install?%7B%22name%22%3A%22inbox-tracker%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmcp.emailanalyst.com%2Fmcp%22%7D)

Or add it yourself:

1. Open the Command Palette and run **MCP: Add Server**.
2. Choose **HTTP**, enter `https://mcp.emailanalyst.com/mcp`, and name it `inbox-tracker`.
3. Save it to **.mcp.json** (this workspace) or **Copilot Global** (all workspaces).
4. Confirm that you trust the server. VS Code opens your browser to [sign in](#signing-in).

The saved entry in `.mcp.json` looks like this:

```json
{
  "mcpServers": {
    "inbox-tracker": {
      "type": "http",
      "url": "https://mcp.emailanalyst.com/mcp"
    }
  }
}
```

On a Copilot Business or Enterprise plan, your GitHub admin must enable the **MCP servers in Copilot** policy.

**Check it worked:** in Copilot Chat, choose **Configure Tools** in the chat input. The Inbox Tracker tools are listed there.

### Gemini CLI

```bash
gemini mcp add --transport http --scope user inbox-tracker https://mcp.emailanalyst.com/mcp
```

This writes the server to `~/.gemini/settings.json`:

```json
{
  "mcpServers": {
    "inbox-tracker": {
      "url": "https://mcp.emailanalyst.com/mcp",
      "type": "http"
    }
  }
}
```

Start Gemini CLI and sign in:

```text
/mcp auth inbox-tracker
```

Sign-in needs a browser on the same machine, so it won't complete over SSH or inside a container.

**Check it worked:** `/mcp list` shows `inbox-tracker` with its tools.

### Codex CLI

```bash
codex mcp add inbox-tracker --url https://mcp.emailanalyst.com/mcp
```

Codex opens your browser to [sign in](#signing-in) straight away. To sign in again later, run `codex mcp login inbox-tracker`.

The command writes this to `~/.codex/config.toml`:

```toml
[mcp_servers.inbox-tracker]
url = "https://mcp.emailanalyst.com/mcp"
```

**Check it worked:** `codex mcp list` shows `inbox-tracker`, and `/mcp` inside Codex lists its tools.

### Other clients

Any client that supports remote MCP servers with OAuth can connect. Give it:

- **URL:** `https://mcp.emailanalyst.com/mcp`
- **Transport:** Streamable HTTP
- **Authentication:** OAuth 2.1 with PKCE. The client registers itself, so leave client ID and secret empty.

If your client only runs local (stdio) servers, bridge to it with [mcp-remote](https://github.com/geelen/mcp-remote). It needs Node.js 18 or later:

```json
{
  "mcpServers": {
    "inbox-tracker": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://mcp.emailanalyst.com/mcp", "--transport", "http-only"]
    }
  }
}
```

mcp-remote opens your browser to sign in and keeps its tokens in `~/.mcp-auth`.

## Signing in

1. Your browser opens an Inbox Tracker page that asks for your email address.
2. You're taken to the login page you normally use, which may be your company's own address or single sign-on. Sign in as usual.
3. A page asks whether to allow the assistant to access your eDataSource account. It shows who you're signed in as, the account (and any child accounts) the assistant will reach, and what it can view.
4. **Optional: allow changes** has one box, **Add, edit, and remove tracked domains and IntelliSeed filter sets**. Leave it unticked for read-only access.
5. Choose **Allow**. You return to your assistant, which is now connected.

Only allow an assistant you just started connecting yourself. If the page names an assistant you don't recognize, choose **Cancel**.

## What the assistant can access

- It reads the same data you see in Inbox Tracker, for your account and its child accounts.
- It only lists the tools your subscription includes. Ask "What can I do with the Inbox Tracker connector?" to see which areas are on and why any are hidden.
- It can make a small set of changes, and only if you ticked the box at sign-in and you have the Manager role: add, validate and remove tracked domains, create and remove IntelliSeed™ filter sets, and claim a Google Postmaster Tools share address.
- Removing a domain or a filter set, or claiming a share address, always takes a second step. Your assistant asks you to confirm before it goes ahead. Read what it's about to do before you agree.
- It doesn't send email and has no access to your sending platform.

The full list is in [Inbox Tracker MCP tools and example prompts](/analyst/ai-assistants/mcp-tools-and-prompts/).

## Disconnecting

Remove the server from your assistant:

| Client | How |
|---|---|
| Claude | **Customize** > **Connectors**, then **Remove** |
| Claude Code | `claude mcp remove inbox-tracker`, or `claude mcp logout inbox-tracker` to sign out and keep the server |
| ChatGPT | Remove the plugin at [chatgpt.com/plugins](https://chatgpt.com/plugins) |
| Cursor | Delete it from `mcp.json`, or remove it from the MCP server list |
| VS Code | **MCP: List Servers**, select the server and uninstall it. **Authentication: Remove Dynamic Authentication Providers** clears its sign-in. |
| Gemini CLI | `gemini mcp remove inbox-tracker` |
| Codex CLI | `codex mcp remove inbox-tracker`, or `codex mcp logout inbox-tracker` to sign out and keep the server |

To change whether the assistant can make changes, disconnect and connect again, then tick or untick the box.

To end every sign-in for your user at once, for example after a lost laptop, contact [support@bird.com](mailto:support@bird.com).

Having trouble? See [Troubleshoot the Inbox Tracker MCP connection](/analyst/ai-assistants/mcp-troubleshooting/).

## Privacy and support

- Terms: [Bird product-specific terms for Email Analytics, Inbox Tracker and Competitive Tracker](https://bird.com/legal/product-specific-terms#6-email-analytics-inbox-tracker-and-competitive-tracker)
- Support: [support@bird.com](mailto:support@bird.com)
