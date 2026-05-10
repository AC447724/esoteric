# Esoterica: The Ultimate Manual

This is the complete guide to every single command in the bot. No corporate talk, just how it works and how to use it.

**Categories covered:** Moderation, Security, Economy, Games, AI, Music, Fun, Social, Utility, and more.

---

## 1. Security & Protection
How to keep your server safe from spammers, raiders, and trolls.

### AutoMod Heat (.heat)
Tracks how "hot" a user is based on their messages. If they spam, they get points. If they hit a limit, they get punished.
- `.heat config`: See what's active and how many points everything is worth.
- `.heat enable / disable`: Turn the whole system on or off.
- `.heat weight <type> <points>`: Set how annoying an action is (caps, emoji, lines, zalgo, duplicate).
- `.heat threshold add <score> <action> [time]`: Set punishments (warn, mute, kick, ban, quarantine).
- `.heat decay <rate>`: How fast users "cool down" every minute.
- `.heat user @member`: Check someone's points and their cool-down timer.
- `.heat reset @member`: Instantly cool someone down to zero.

### Wanted Levels (.wl)
A GTA-style "Stars" system for high-alert security.
- `.wl on / off`: Turn the star system on or off.
- `.wl check [@member]`: See someone's search status (the stars image).
- `.wl top`: See who the biggest targets in the server are.
- `.wl lockdown`: Emergency mode. Slashes all thresholds to stop raids.
- `.wl milestone <score> <action>`: Set hard responses at specific star levels.
- `.wl config <key> <value>`: Tweak the math (mention, link, emoji, decay, logchannel).

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
- `.slowmode <seconds>`: Force a delay between messages.
- `.role add / remove @member @role`: Manage roles manually.
- `.role all / humans / bots @role`: Give a role to everyone in that group.
- `.lock / .unlock`: Toggle the ability to send messages.

### Logging (.log)
Watch everything that happens in the server with detailed logs.
- `.log add #channel <event>`: Start logging specific actions (messages, members, channels, roles, voice, server, all).
- `.log remove #channel <event>`: Stop logging specific actions.
- `.log color #channel <event> <hex>`: Set the color for specific log types.
- `.log ignore <@member | #channel>`: Exclude someone or a channel from logs.

### Server Setup & Settings
- `.setup`: Opens the master configuration menu for welcomes, roles, captcha, and more.
- `.prefix <new>`: Change the bot's trigger character.
- `.modlog #channel`: Set the main channel for automated mod logs.
- `.counter add <type>`: Create a voice channel that shows live stats (members, bots, boosts, etc.).
- `.invoke <command> <dm|message> <text>`: Customize punishment messages with variables like {user.mention} and {reason}.
- `.disable <command>`: Block specific commands from being used.
- `.restrictcommand <command> @role`: Only let specific roles use a command.

---

## 3. Economy & Making Money
The full game system where you build an empire.

### Farming & Business
- `.farm status`: Check your 3 plots and the seed market.
- `.farm plant <crop>`: Buy and plant seeds (Wheat, Corn, Tomato, Strawberry, Golden Apple).
- `.farm harvest`: Pick your crops for profit. 15% chance for a bonus payout.
- `.business buy <name>`: Purchase a shop (Coffee Shop, Tech Startup, Nightclub, etc.).
- `.business collect`: Claim your hourly earnings (Caps at 24h).
- `.business upgrade <name>`: Level up a business to increase its hourly income.

### Gambling & Games
- `.blackjack / .slots / .crash / .roulette`: Gamble your credits to win big.
- `.coinflip / .dice / .baccarat / .poker`: More ways to bet and win.
- `.work / .daily / .weeklylb`: Easy ways to get starting cash and track progress.
- `.rob @member`: Try to steal from someone's wallet.
- `.pay @member <amount>`: Send money to friends.

### Anime & Waifus
- `.roll`: Spend credits to pull a random waifu/character.
- `.waifus`: View your collection.
- `.battle @member`: Fight other users using your characters.
- `.evolve <name>`: Power up your characters.
- `.trade @member <my_waifu> <their_waifu>`: Swap characters with others.

---

## 4. AI & "Smart" Tools
The bot uses advanced AI to help you and your members.

- `.ask <question>`: Chat with the AI. It remembers your past talks.
- `.imagine <prompt>`: Create high-quality images from text.
- `.tldr`: Summarize the last 50 messages in the channel.
- `.persona <name>`: Change how the bot talks (Pirate, Scientist, Angry Mod, etc.).
- `.beef`: Have the AI generate a fake argument between two users.
- `.forget`: Wipe the bot's memory of your conversations.

---

## 5. Music & Entertainment
- `.play <song>`: High-quality music from YouTube, Spotify, or SoundCloud.
- `.skip / .stop / .pause / .resume`: Control the playback.
- `.queue / .nowplaying`: See what's playing and what's next.
- `.loop / .shuffle`: Change how the queue plays.
- `.volume <0-100>`: Adjust the bot's loudness.

---

## 6. Social & Family
Build relationships and family trees.

- `.marry @member`: Get married to another user.
- `.adopt @member`: Add someone to your family as a child.
- `.family / .tree`: View your family connections.
- `.divorce / .disown`: Break family ties.
- `.hug / .kiss / .slap / .cuddle`: Social roleplay actions.
- `.rep @member`: Give someone a reputation point.

---

## 7. Utility & Fun
- `.ticket setup`: Create a support ticket system with categories and logs.
- `.afk [reason]`: Let people know you're away when they ping you.
- `.poll "Question" "Option 1" "Option 2"`: Start a vote.
- `.remind "Text" <time>`: Get a DM reminder later.
- `.tag add <name> <text>`: Create shortcuts for common info.
- `.ip <address>`: Get location and ISP info for an IP.
- `.meme`: Get a fresh meme from Reddit.
- `.tictactoe / .battleship / .uno`: Play games with friends.
- `.weather <city>`: Check the current weather anywhere.
- `.translate <text> <language>`: Translate text instantly.
