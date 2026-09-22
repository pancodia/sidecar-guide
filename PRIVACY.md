# Sidecar — Privacy Policy

_Last updated: 2026-09-21_

Sidecar is a **local-first** browser extension. It helps you chat with your own
AI assistant — **Claude Code** (your Claude subscription), **Codex** (your
ChatGPT subscription), or **Pi**, which runs a model of your choice on your own
computer (through Ollama), whichever you choose — about the web page you are viewing
or the video you are watching. This policy explains, in plain language, what
Sidecar accesses, where that information goes, and what is kept.

## The short version

- Sidecar sends what it reads **to a companion app running on your own
  computer** — not to the developer, and not to any server the developer runs.
- That companion app talks to **your chosen assistant** — Claude or Codex —
  **using your own subscription** with that provider (the sign-in you already set
  up for that tool on your computer). The developer never sees your conversations
  or your page content. If you choose **Pi**, there is no outside provider at
  all: your words go to a model running **on your own computer** (through Ollama —
  set up for you by Sidecar's companion app, or your own copy if you already run
  one), so **your words and page content never leave your computer** — not the
  developer, not Anthropic, not OpenAI.
- Conversations and settings are stored **only on your own computer**, and you
  control whether conversations are saved at all. **Searching** your past
  conversations also happens entirely on your own computer — your search words
  are matched against your saved conversations locally, never sent anywhere (not
  even written to a log).
- There is **no analytics, no tracking, and no advertising**.

## What Sidecar accesses, and why

- **The content of the web page you are actively viewing** — so the assistant
  can answer questions about it. Read only from the tab you are using Sidecar on.
- **The address (URL) and title of that page** — so a conversation can be tied
  to the page it was about, and so you can revisit it later. If you turn on the
  optional "automatically skip this page for general questions" setting, Sidecar
  decides **on your own computer** whether a question needs the page, using only
  your question text and that page's title and address — nothing new leaves your
  machine, and when in doubt it includes the page.
- **The audio of a tab, only when you start listening** — so Sidecar can
  transcribe a video you are watching. Nothing is captured until you begin, and
  it stops when you stop.
- **Files you choose to attach** — sent to your assistant to answer your
  question about them. This can be an **image**, a **PDF** (Sidecar reads the
  PDF's text and sends that text, not a picture of the pages), or a **text or
  code file** (its text is sent). Only files you pick are read — Sidecar never
  reaches into your computer on its own.
- **A screenshot Sidecar takes to answer a visual question** — of the **part of
  the page you can see**, or, if you choose "whole page," Sidecar **scrolls the
  page and captures it a screenful at a time**, so parts not currently on screen
  are included. A screenshot is normally taken when you ask for one; if you turn
  on the off-by-default "let the assistant look at the page" setting, the
  assistant can also **ask for a screenshot on its own** to answer your question.
  Whether a captured picture is saved is a separate off-by-default setting you
  control.
- **Your settings** (such as your theme and your on/off choices) — stored
  locally so they persist between sessions.

**Reading answers aloud stays on your computer.** Each answer has a "read aloud"
button. It uses a voice **installed on your computer** and **never sends the text
to any online service** — Sidecar deliberately skips the online voices some
browsers offer (which would send the words to a voice provider), and simply says
so if your computer has no offline voice available. If you switch on the optional
natural voice, the answer's text goes only to the natural-voice program Sidecar
sets up on your own computer — and no further. Setting it up downloads a voice
(about 65 MB each; your first one also brings the small shared voice program,
about 20 MB more) from a fixed source, checked against a known fingerprint before
it runs; after that, speaking never touches the internet.

## Where the information goes

1. From the extension, over a **local connection on your own computer** (to
   `127.0.0.1`, which never leaves your machine), to Sidecar's companion app.
2. From the companion app to **the assistant you chose**, so it can answer:
   - **Claude Code** → to **Anthropic's Claude** using your own subscription,
     the same path Claude Code itself uses, governed by
     [Anthropic's privacy policy](https://www.anthropic.com/legal/privacy).
   - **Codex** → to **OpenAI** using your own subscription, the same path the
     Codex CLI itself uses, governed by [OpenAI's privacy policy](https://openai.com/policies/privacy-policy/).
   - **Pi** → to a model running **on your own computer**, through **Ollama** (a
     local AI runner Sidecar's companion app sets up for you, or your own copy if
     you already run one), over another local connection that never leaves your
     machine. Your words and any page text go only to that local model; there is
     no outside provider involved.
3. **A few other places, only for features you switch on and can see:**
   - **Google Fonts** (`fonts.googleapis.com` / `fonts.gstatic.com`) — to load
     the fonts the panel is drawn with. No conversation content; the same
     web-font fetch your browser makes for any site that uses Google Fonts.
   - **The web, when the assistant searches** — if a question needs it, your
     chosen assistant (step 2) runs a web search, and — only if you turn on "let
     the assistant open live web pages" — opens pages. That goes through
     Anthropic or OpenAI on your own subscription, not through any server of ours.
     (Claude or Codex only — **Pi never searches the web or fetches pictures from
     it**.)
   - **"Show pictures from the web"** — a setting that is **off by default**.
     When you turn it on and ask to see something, the companion app fetches
     relevant web pages to find images (refusing anything but public web
     addresses), and the panel loads each thumbnail **straight from the website
     it lives on** — so that website can see your browser fetched it. On a fresh
     request the previews load right away; when you **reopen a saved
     conversation** the pictures stay hidden until you click **"Show previews"**,
     so an old chat never silently re-fetches them. Turn the setting off and none
     of this happens.
   - **One-time setup downloads** — turning on the natural read-aloud voice,
     video listening, or **local chat** downloads those components once from a
     fixed source (see the read-aloud, listening, and local-chat sections). For
     local chat that is the small assistant helper and the Ollama engine (both
     from GitHub release pages, each checked against a fingerprint built into
     Sidecar before it runs), and the AI model Sidecar picks for your Mac or the
     one you choose instead (from Ollama's model registry, `ollama.com`, verified
     by Ollama against the registry's published digest). No conversation content
     — just the software and model files, fetched only when you start the setup.

   Beyond these, the developer operates no servers and receives no data from you.

## What is stored, and your control over it

Sidecar's companion app can keep, on your own computer (in files readable only
by your user account):

- **Your conversations** — on by default, so you can reopen them after a
  restart and review them. A saved conversation includes your messages and the
  **text you brought into them** — a quote you selected on a page, or the text
  read from a PDF or text file you attached. When one conversation spans several
  videos, it also remembers **the name and address of each video it heard** (not
  the spoken words — those are only kept if you turn on "remember what I listen
  to," below), so the assistant can tell one video from another. It also remembers
  **the titles of the pages you used it on** — the page's own name, not its
  contents — so you can search your past conversations by the page they were
  about; using **"forget this page"** removes that page's title from your
  conversations along with its saved text. For an answer that used web search, it
  also keeps **the reference links** (the titles and web addresses) that search
  drew on, shown as "Sources" under the answer. You can **turn saving off** (new
  conversations then live only in memory and disappear when the app stops), and
  you can **delete any saved conversation**, which removes its stored copy.
- **The text of pages you visited** and **transcripts of audio you chose to
  keep** — to support features like "what changed since you last looked" and
  re-watching a video. Governed by the same on/off controls.
- **The pictures in a conversation** — the actual image data (screenshots and
  attached images) is kept only if you turn on the separate "save the pictures"
  setting, which is **off by default**. Without it, a saved conversation notes
  that a picture was attached — its size and the page (or file name) it came
  from — but does not keep the picture itself.
- **A log file** (`~/.sidecar/daemon.log`) — written only when you set the
  companion app to start automatically at login. It records the app's activity,
  which can include a search phrase the assistant derived from a page to look
  something up. It lives in the same permission-protected folder as everything
  above (readable only by you) and is not written when you launch the app yourself.

These files are stored in plain form on your computer and are not encrypted at
rest; the protection is your operating system's own file permissions (the files
are readable only by you). Deleting a conversation, or turning a setting off,
does what it says on your machine.

## What Sidecar does NOT do

- It does **not** sell or share your data with anyone.
- It does **not** use your data for advertising, profiling, or credit decisions.
- It does **not** send your data to the developer or to any third-party service
  other than the assistant you chose — Anthropic for Claude, or OpenAI for Codex
  — via your own subscription, as described above. **With Pi it reaches no
  outside service at all** — the model runs on your own computer.
- It loads **no remote code**; all of the extension's code ships inside the
  extension package.

## Contact

Questions about this policy: **panchaoai@gmail.com**.
