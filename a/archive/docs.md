# Esoterica: The Ultimate Manual

This is the complete guide to every single command in the bot. No corporate talk, just how it works and how to use it.

**Categories covered:** Moderation, Security, Economy, Games, AI, Music, Fun, Social, Utility, and all Slash Commands.

---

## 1. Security & Protection
How to keep your server safe from spammers, raiders, and trolls.

### AutoMod Heat (.heat)
Tracks how "hot" a user is based on their messages. If they spam, they get points. If they hit a limit, they get punished.
- `.heat config`: See what's active and how many points everything is worth.
- `.heat enable / disable`: Turn the whole system on or off.
- `.heat weight <type> <points>`: Set how annoying an action is.
    - `caps`: All-caps messages.
    - `emoji`: Too many emojis.
    - `lines`: Giant walls of text.
    - `zalgo`: Glitched/corrupted text.
    - `duplicate`: Sending the same thing over and over.
- `.heat threshold add <score> <action> [time]`: Set punishments (warn, mute, kick, ban, quarantine).
- `.heat decay <rate>`: How fast users "cool down" every minute.
- `.heat user @member`: Check someone's points and their cool-down timer.
- `.heat reset @member`: Instantly cool someone down to zero.
- **Unique Way:** Use `.heat cascade on` to trigger every punishment a user crosses in a single message (e.g., if they hit 100 and 200 at once, they get both).

### Wanted Levels (.wl)
A GTA-style "Stars" system for high-alert security.
- `.wl on / off`: Turn the star system on or off.
- `.wl check [@member]`: See someone's search status (the stars image).
- `.wl top`: See who the biggest targets in the server are.
- `.wl lockdown`: Emergency mode. Slashes all thresholds to stop raids.
- `.wl milestone <score> <action>`: Set hard responses at specific star levels.
- `.wl config <key> <value>`: Tweak the math.
    - `mention`: Heat multiplier for pinging.
    - `link`: Heat multiplier for links.
    - `decay`: How fast stars disappear.
- **Unique Way:** Use `.wl invoke dm <template>` to set a custom message the bot sends to people when they get heat. Use `{score}` and `{reason}` in your text.

---

## 2. Moderation & Administration
The tools you need to run the server effectively.

### Core Moderation
- `.ban @member [reason]`: Permanent ban.
- `.kick @member [reason]`: Kick out (they can rejoin).
- `.timeout @member <time>`: Standard Discord timeout (e.g., 1h, 1d).
- `.warn @member [reason]`: Log a formal warning.
- `.jail @member`: Lock someone in a restricted jail channel.
- `.quarantine @member`: Strip all roles and isolate a user.
- `.hardban @member`: Ban and wipe every message they've ever sent.
- `.softban @member`: Kick and wipe recent message history.
- `.nuke`: Deletes every message in the channel by cloning it.
- `.purge <amount>`: Delete up to 100 messages at once.
- `.history @member`: View every ban, warn, and mute on someone's record.
- `.lookup <@member | ID>`: Full account report (Creation, Join, Permissions).
- `.snipe`: View the last deleted message.
- `.editsnipe`: View the original text of the last edited message.
- `.role add / remove @member @role`: Manage roles manually.
- **Unique Way:** `.role gradient #color1 #color2 @role1, @role2`: Automatically fades colors across a list of roles.
- **Unique Way:** `.role icon @role 👑`: Set a custom emoji or image as the role icon.

### Logging (.log)
Watch everything that happens in the server with detailed logs.
- `.log add #channel <event>`: Start logging actions (messages, members, channels, roles, voice, server, all).
- `.log color #channel <event> <hex>`: Set a custom embed color for that log type.
- `.log ignore <@member | #channel>`: Stop the bot from logging specific people or channels.

---

## 3. Economy & Making Money
The full game system where you build an empire.

### Farming & Business
- `.farm status`: Check your plots and the seed market.
- `.farm plant <crop>`: Buy and plant seeds (Wheat, Corn, Tomato, Strawberry, Golden Apple).
- `.business buy <name>`: Purchase a shop (Coffee Shop, Tech Startup, Nightclub, etc.).
- `.business upgrade <name>`: Level up a business to increase its hourly income.
- **Unique Way:** Businesses collect money even while you're offline for up to 24 hours. Don't forget to `.business collect` every day.

### Gambling & Games
- `.blackjack / .slots / .crash / .roulette`: Gamble your credits to win big.
- `.rob @member`: Try to steal from someone's wallet.
- **Unique Way:** Put your money in the bank using `.deposit` to protect it from being stolen by other players.

---

## 4. AI & Smart Tools
- `.ask <question>`: Chat with the AI.
- `.imagine <prompt>`: Create high-quality images from text.
- `.tldr`: Summarize the last 50 messages in the channel.
- `.persona <name>`: Change how the bot talks (e.g. `Pirate`, `Scientist`, `Angry Mod`).

---

## 5. Slash Commands (/)
Most prefix commands also work as Slash commands for a better UI.

- `/lookup`: A visual version of the account lookup tool.
- `/wantedlevel`: Configure your star system with a menu.
- `/ask`: Talk to the AI using the slash interface.
- `/imagine`: Generate images with easy-to-use options.
- `/rank`: See your level and XP progress on a custom image card.
- `/leaderboard`: View the top users in the server.

---

## 6. Social, Music & Fun
- `.play <song>`: High-quality music from YouTube/Spotify.
- `.marry / .adopt @member`: Build a family tree.
- `.uno / .battleship / .tictactoe`: Play games with friends.
- `.meme`: Get fresh memes from Reddit.
- `.weather <city>`: Check any city's weather.
- `.translate <text> <language>`: Translate text instantly.

---

## 7. Utility & Setup
- `.setup`: Opens the master config menu for welcomes, roles, and logs.
- `.ticket setup`: Create a support ticket system with buttons and logs.
- `.counter add <type>`: Create a voice channel that shows live stats.
- `.sendverify`: Generate a verification button for new members.
- `.afk [reason]`: Set an AFK status.
- `.tag add <name> <text>`: Create shortcuts for common info.
- `.ip <address>`: Get location and ISP info for an IP.
