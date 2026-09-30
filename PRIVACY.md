# Sidecar — Privacy Policy

_Last updated: 2026-09-30_

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
- The assistant can **do a few things for you** — search the web, look at your
  screen, read and save notes in folders you pick, fill in a form. Each one is
  shown in the chat when it happens, and the ones that send something new or
  change something **ask you first** by default. Filling in a form happens only
  when you ask for it, and nothing is typed until you agree (see "Things the
  assistant can do for you" below).
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
- **The current date, time and time zone on your computer** — sent with each
  question, so the assistant can answer "what time is it?", "what's today's
  date?" or "how long ago was this posted?" correctly. With Claude Code or Codex,
  this means your time zone (for example "America/Los_Angeles") reaches Anthropic
  or OpenAI, a rough hint of where you are; your internet address, which every
  request carries anyway, usually says as much. With local chat it never leaves
  your Mac. Sidecar doesn't keep it in your saved conversations.
- **The audio of a tab, only when you start listening** — so Sidecar can
  transcribe a video you are watching. Nothing is captured until you begin, and
  it stops when you stop.
- **Files you choose to attach** — sent to your assistant to answer your
  question about them. This can be an **image**, a **PDF** (Sidecar reads the
  PDF's text and sends that text, not a picture of the pages), or a **text or
  code file** (its text is sent). Only files you pick are read — apart from the
  notes folders described under "Files" below, Sidecar never reaches into your
  computer on its own.
- **A PDF or picture open in your tab** — when you ask about a tab showing a PDF
  or an image, Sidecar loads that same file again the way your browser did
  (including a sign-in you already have for that site), and sends the PDF's text,
  or the picture, to your assistant, just as if you had attached it.
- **A screenshot Sidecar takes to answer a visual question** — of the **part of
  the page you can see**, or, if you choose "whole page," Sidecar **scrolls the
  page and captures it a screenful at a time**, so parts not currently on screen
  are included. A screenshot is taken when you ask for one, or when the assistant
  asks to **see your screen** and you agree, or you've set "See your screen" to
  Always (see below). Whether a captured
  picture is saved is a separate off-by-default setting you control.
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

## Things the assistant can do for you

Besides answering, the assistant can use a few **abilities** when your question
needs them. You'll find them in **Settings → Abilities**, where one switch, **"Let
the assistant use abilities"** (on by default), turns them all off at once, and
each has its own choice. Every time the assistant uses one, a line in the chat
says what it did (for example "Searched the web for …" or "Read notes.md"), and
it can use at most ten per question. The abilities are provided by Sidecar's
companion app over a connection that stays on your own computer (to `127.0.0.1`),
opened only to the assistant program it started, using a one-time secret that is
thrown away when that program stops.

Where a choice says **Ask**, a card appears in the chat showing exactly what would
be sent or changed, and nothing happens unless you agree. If you don't answer
within a minute, the answer is no.

- **Read the video's transcript** (on by default) — the assistant can read what
  was said in the video you're watching: its captions up to where you are, what
  Sidecar has already heard, or a transcript you kept. It goes to your chosen
  assistant, like the rest of the conversation.
- **Search the web** (Ask by default; Ask / Always / Off) — the card shows the
  exact search words and which service will receive them (Claude's or Codex's web
  search). Only the search words leave your computer for this. Pi never searches.
  If the assistant has read one of your files in this conversation, a search
  always asks first (unless search is Off), and the card names the files read.
  - **Open live web pages** (off by default) — lets that search also open the
    pages it finds.
  - **Show pictures from the web** (off by default) — see "Where the information
    goes" below. **Picture searches always use Claude's web search**, even in a
    Codex conversation, so the picture's subject goes to Anthropic; the card says
    so before anything is sent, unless you've set web search to Always.
- **See your screen** (Ask by default; Ask / Always / Off) — the assistant can
  ask for a screenshot of the visible part of the tab your question came from.
  The card warns that the picture shows anything you've typed in that tab. At
  most three screenshots per question. It needs "Using this page" to be on. With
  Pi, the picture stays on your computer (and only if your local model can read
  pictures).
- **Files** (on) — the assistant can read, add to, change, and save new notes
  (only notes files ending in .md or .txt) in folders you choose. **Sidecar starts you with
  one folder, `Downloads/Sidecar-notes`**, which it creates; you can remove it,
  add up to eight folders, or turn Files off. It can never use your home folder
  itself, system folders, or folders that hold passwords and app settings, and
  nothing outside the folders you chose. By default:
  - **Reading** a file asks you first (Ask / Always / Off). What it reads goes to
    your chosen assistant, or stays on your computer with Pi.
  - **Adding to** or **changing** a file shows you the exact text on a card
    every time, and nothing is written until you agree. Added text ends with a
    note of the page it came from.
  - **Saving a new file** asks you first. If you set it to **Always**, the first
    new file in each answer is saved without asking; any more still ask. It never
    overwrites an existing file.
- **Act in web pages** (on by default; Claude and Codex only) — when you ask the
  assistant to fill in a form on the page, a separate, short request goes to your
  assistant's service (Claude's smaller Haiku model for Claude, or Codex) with
  the form's field names and choices, and your own messages from this
  conversation. It never sees what is already typed into the form, and fields for
  passwords, card numbers, ID numbers, codes and birthdates are left out. Sidecar
  only fills in words you wrote yourself, or one of the form's own choices, and
  shows you the plan first; nothing is typed until you click **"Fill these in"**. Each filled field then waits for your
  Confirm, the form can't be sent until you have confirmed them all, and **Sidecar
  never presses submit**. Once a value is typed into the page, that website can
  see it, as it could if you typed it. Sidecar keeps no profile of your details.

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
   - **Continuing a conversation on a different assistant** — if you move a
     conversation to another assistant partway through, Sidecar retells it to the
     new one: your messages, the replies so far, and any text you attached or
     selected, or read from a PDF open in your tab (the oldest messages may be left out of a very long one). Pictures,
     page text and video transcripts are not carried over. Before it goes to
     Claude or Codex, Sidecar asks you and names where it's going — and if the
     conversation was on Pi until then, it says the conversation has been only on
     your computer so far. You can tick "Don't ask again for cloud models", and
     undo that in Settings.
3. **A few other places, only for features you switch on and can see:**
   - **Google Fonts** (`fonts.googleapis.com` / `fonts.gstatic.com`) — to load
     the fonts the panel is drawn with. No conversation content; the same
     web-font fetch your browser makes for any site that uses Google Fonts.
   - **The web, when the assistant searches** — if a question needs it, your
     chosen assistant (step 2) runs a web search, and — only if you turn on
     "Open live web pages" — opens pages. That goes through
     Anthropic or OpenAI on your own subscription, not through any server of ours.
     (Claude or Codex only — **Pi never searches the web or fetches pictures from
     it**.)
   - **"Show pictures from the web"** — a setting that is **off by default**.
     When you turn it on and ask to see something, a web search through Claude
     (Anthropic) finds pages about it, even in a Codex conversation, and the
     companion app fetches
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
  read from a PDF or text file you attached or had open in your tab. It also
  keeps the lines saying what the assistant did (such as "Read notes.md" or
  "Searched the web for …"), the names of the files it read in that conversation,
  and your answers to its "Ask" cards for that conversation — but not the contents
  of your files. When one conversation spans several
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
  which can include the words the assistant searched for (web and picture
  searches, and searches within a video's transcript), the names of sites it
  looked at, and the names of your files it read or changed — but not your
  conversation or the contents of your files. It lives in the same permission-protected folder as everything
  above (readable only by you) and is not written when you launch the app yourself.

- **Your assistant program's own working copy** — Claude Code, Codex, or Pi keeps
  its own record of each conversation on your computer while it works (which can
  include what an ability read, such as file text, a transcript, or a
  screenshot). These are kept separate from your own conversations with those
  tools, and Sidecar deletes the copy when you delete the
  conversation or move it to a different assistant.
- **Your notes folders** — the list of folders you chose for Files, kept in your
  settings. Notes the assistant saves or changes there are ordinary files you
  own.

These files are stored in plain form on your computer and are not encrypted at
rest; the protection is your operating system's own file permissions (the files
are readable only by you). Deleting a conversation, or turning a setting off,
does what it says on your machine.

## What Sidecar does NOT do

- It does **not** sell or share your data with anyone.
- It does **not** use your data for advertising, profiling, or credit decisions.
- It does **not** send your data to the developer or to any third-party service
  other than the assistant you chose — Anthropic for Claude, or OpenAI for Codex
  — via your own subscription, as described above. (One exception you switch on
  yourself: picture searches go through Claude, even in a Codex conversation.)
  **With Pi it reaches no outside service at all** — the model runs on your own
  computer — unless you choose to continue that conversation on Claude or Codex,
  which asks you first.
- It loads **no remote code**; all of the extension's code ships inside the
  extension package.

## Contact

Questions about this policy: **panchaoai@gmail.com**.
