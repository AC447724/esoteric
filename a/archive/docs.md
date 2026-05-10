# Esoterica: The Absolute Manual

This guide covers everything the bot does. No corporate talk, just how it works and how to use it.

**Categories requested:** Moderation, Logger, Settings, Setup, Utility.

---

## 1. Security & Protection (Heat / Wanted Level)
How to keep your server from getting trashed by spammers or raiders.

### AutoMod Heat (.heat)
Tracks how "hot" a user is based on their messages. If they spam, they get points. If they hit a limit, they get punished.

- `.heat config`: See what's currently enabled and how many points everything is worth.
- `.heat enable / disable`: Flip the switch on the whole system.
- `.heat weight <type> <points>`: Decide how annoying an action is.
    - `caps`: All-caps messages. (e.g. `.heat weight caps 10`)
    - `emoji`: Too many emojis.
    - `lines`: Giant walls of text.
    - `zalgo`: Glitched/corrupted text.
    - `duplicate`: Sending the same thing over and over.
- `.heat threshold add <score> <action> [time]`: Set the "line in the sand."
    - Example: `.heat threshold add 100 mute 10m`
- `.heat decay <rate>`: How fast users "cool down" every minute.
- `.heat user @member`: Check someone's points and their cool-down timer.
- `.heat reset @member`: Instantly cool someone down to zero.

### Wanted Levels (.wl)
A GTA-style "Stars" system for high-alert security.

- `.wl on / off`: Turn the star system on or off.
- `.wl check [@member]`: See someone's search status (the stars image).
- `.wl status`: Check security health and current limits.
- `.wl top`: See who the biggest targets in the server are.
- `.wl lockdown`: Emergency mode. Slashes all thresholds to stop raids.
- `.wl milestone <score> <action>`: Set hard responses at specific star levels.
- `.wl config <key> <value>`: Tweak the math (e.g., `mention`, `link`, `decay`).

---

## 2. Moderation Tools
The heavy-duty stuff for running the server.

- `.ban @member [reason]`: Permanent ban.
- `.kick @member [reason]`: Kick out (they can rejoin).
- `.timeout @member <time>`: Standard Discord timeout (e.g., `1h`, `1d`).
- `.warn @member [reason]`: Log a formal warning.
- `.jail @member`: Lock someone in a restricted jail channel.
- `.quarantine @member`: Instantly strip all roles and isolate a user.
- `.hardban @member`: Ban and wipe every message they've ever sent.
- `.softban @member`: Kick and wipe recent message history.
- `.nuke`: Deletes every message in the channel by cloning it.
- `.purge <amount>`: Delete up to 100 messages at once.
- `.history @member`: View every single ban, warn, and mute on someone's record.
- `.lookup <@member | ID>`: Get a full account report (Creation date, join date, permissions).
- `.snipe`: View the last deleted message.
- `.editsnipe`: View the original text of the last edited message.
- `.slowmode <seconds>`: Force a delay between messages.
- `.role add / remove @member @role`: Manage roles manually.
- `.role all @role`: Give a role to every single person in the server.
- `.nick @member <name>`: Force a nickname change.
- `.lock / .unlock`: Toggle the ability to send messages for everyone.

---

## 3. Logger: The Audit Trail (.log)
Watch everything that happens in the server with detailed logs.

- `.log add #channel <event>`: Start logging specific actions in a channel.
    - Example: `.log add #audit-logs messages`
    - Events: `messages`, `members`, `channels`, `roles`, `voice`, `server`, `all`.
- `.log remove #channel <event>`: Stop logging specific actions.
- `.log color #channel <event> <hex>`: Set the color for specific log types.
- `.log ignore <@member | #channel>`: Stop the bot from logging actions by a certain person or in a certain channel.
- `.log list`: See all active loggers.

---

## 4. Settings & Setup
How to personalize the bot for your server.

- `.setup`: Opens the master configuration menu. From here, you can set up:
    - Welcome / Goodbye messages.
    - Auto-roles for new members.
    - Captcha verification to stop bots.
    - Ticket system categories.
- `.prefix <new>`: Change the trigger character (e.g., `.`, `!`, `?`).
- `.modlog #channel`: Set the main channel for automated mod logs.
- `.counter add <type>`: Create a voice channel that shows live stats.
    - Types: `members`, `bots`, `boosts`, `roles`, `channels`.
- `.invoke <command> <dm|message> <text>`: Customize what the bot says when it punishes someone.
    - Variables: `{user.mention}`, `{reason}`, `{author.name}`.
- `.sendverify`: Generate a verification button for new members to click.
- `.disable <command>`: Block specific commands from being used at all.

---

## 5. Utility & Tools
Useful stuff for everyday server life.

- `.ticket setup`: Create a professional support ticket system.
- `.afk [reason]`: Set an AFK status. The bot will notify anyone who pings you.
- `.poll "Question" "Option 1" "Option 2"`: Start a vote with buttons.
- `.remind "Text" <time>`: Get a DM reminder later (e.g., `.remind "check farm" 30m`).
- `.tag add <name> <text>`: Create custom "tags" (shortcuts) for common info.
- `.starboard`: Set up a channel where the best messages go if they get enough star reactions.
- `.voicemaster`: Automated temporary voice channels that users can own.
- `.ip <address>`: Get detailed info on an IP address (Location, ISP, etc.).
- `.vitals`: Check the bot's health, latency, and uptime.
- `.hex <#color>`: View a color and its RGB/HSL values.
- `.base64 / .binary / .nato`: Encode or decode text into different formats.

---

## 6. Economy: Making & Spending Money
The full game system.

- `.farm`: Buy seeds, plant them, and harvest crops for profit.
- `.business`: Buy shops, collect hourly earnings, and upgrade your empire.
- `.blackjack / .slots / .crash / .roulette`: Gamble your credits to win big.
- `.work / .daily`: Easy ways to get starting cash.
- `.rob @member`: Steal from others (but don't get caught).
- `.pay @member <amount>`: Send money to friends.

---

## 7. Music & Entertainment
- `.play <song>`: High-quality music in your voice channel.
- `.ask <question>`: Chat with the AI about anything.
- `.imagine <prompt>`: Create AI-generated images.
- `.tldr`: Summarize the recent chat conversation.
- `.meme`: Get fresh memes from Reddit.
- `.uno / .battleship / .tictactoe`: Play games with other members.
