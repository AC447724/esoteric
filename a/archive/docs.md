# Esoterica: The Absolute Master Manual

This is the exhaustive list of every single command in the bot's prefix system.

**Categories Requested:** Moderation, Logger, Settings, Setup, Utility.

---

## 1. Security & AutoMod (.heat / .wl)
### AutoMod (.heat)
- `.heat config`: View system status and weights.
- `.heat enable / disable`: Toggle the heat system.
- `.heat weight <module> <points>`: Set heat for caps, emoji, lines, zalgo, or duplicates.
- `.heat threshold add <score> <action> [time]`: Set punishments at specific scores.
- `.heat decay <rate>`: Points lost per minute.
- `.heat cascade <on/off>`: Trigger all thresholds at once.
- `.heat user <member>`: Check current points.
- `.heat reset <member>`: Clear all points.

### Wanted Level (.wl)
- `.wl on / off`: Toggle notoriety tracking.
- `.wl check <member>`: View search status (Stars).
- `.wl status`: Check system health and limits.
- `.wl top`: View most wanted users.
- `.wl config <key> <value>`: Tweak multipliers (mention, link, decay, etc.).
- `.wl milestone <score> <action>`: Custom responses at star levels.
- `.wl lockdown`: Enable emergency high-security mode.
- `.wl ignore <channel>`: Stop tracking heat in a channel.
- `.wl whitelist <role>`: Make a role immune.
- `.wl invoke <dm|log> <template>`: Set custom alert messages.

---

## 2. Moderation (Full List)
- `.alias add/remove`: Create custom command shortcuts.
- `.ban <member> [reason]`: Permanent ban.
- `.channel <create|delete|rename|hide|sync|clone>`: Manage channels.
- `.clearsnipe`: Wipe the snipe history for the channel.
- `.clearwarns <member>`: Delete all warnings for a user.
- `.counter <add|remove|list|template>`: Manage live stat voice channels.
- `.disable <command>`: Prevent a command from being used.
- `.drag <member> <#voice>`: Force move a user to a voice channel.
- `.editsnipe`: See the original version of the last edited message.
- `.emoji <add|delete|rename>`: Manage server emojis.
- `.fame <member> <amount>`: Adjust a user's fame points.
- `.forcenickname <member> <name>`: Lock a user to a specific name.
- `.gulag <member>`: Send a user to a highly restricted zone.
- `.hardban <member>`: Ban and purge all message history.
- `.hide [#channel]`: Hide a channel from standard users.
- `.history <member>`: View all past punishments.
- `.imute <member>`: Image-mute a user (prevents attachments).
- `.invoke <command> <dm|message> <template>`: Customize punishment responses.
- `.iunmute <member>`: Remove image-mute.
- `.jail <member> [reason]`: Lock a user in the jail channel.
- `.kick <member> [reason]`: Remove user from the server.
- `.lock [#channel]`: Stop messages in a channel.
- `.lockdown`: Toggle server-wide lockdown.
- `.modlog #channel`: Set the automated log channel.
- `.modsearch <query>`: Search logs for specific keywords.
- `.modstats <member>`: View moderator action counts.
- `.moveall <#voice>`: Move everyone to a new voice channel.
- `.mute <member> [time]`: Legacy system mute.
- `.nick <member> <name>`: Change a user's nickname.
- `.notes <member> <add|view>`: Manage staff-only user notes.
- `.nuke`: Clone and delete channel to clear all messages.
- `.perms <member|role>`: Check exact permissions.
- `.prefix <char>`: Change the bot's prefix.
- `.purge <amount>`: Delete multiple messages.
- `.quarantine <member>`: Strip roles and isolate user.
- `.reactionsnipe`: See recently removed reactions.
- `.reason <id> <text>`: Update the reason for a past action.
- `.reputation <member>`: View server-wide reputation points.
- `.restore <member>`: Manually restore roles for a user.
- `.restrictcommand <command> <role>`: Limit a command to a role.
- `.retire <member>`: Strip all staff roles from a user.
- `.rmute <member>`: Reaction-mute a user.
- `.role <add|remove|create|delete|rename|color|hoist|icon|gradient>`: Deep role management.
- `.roles`: List all server roles and IDs.
- `.runmute <member>`: Remove reaction-mute.
- `.securityscore <member>`: Rate a user's safety level.
- `.sendverify`: Post a verification button message.
- `.setup`: Open the main config menu.
- `.setupmute`: Configure the mute role and permissions.
- `.shame <member>`: Publicly mark a user for an infraction.
- `.slowmode <seconds>`: Set message delay.
- `.slowmode-sync`: Sync slowmode across a category.
- `.snipe`: View the last deleted message.
- `.softban <member>`: Kick and clear 7 days of history.
- `.sticker <add|delete|rename>`: Manage server stickers.
- `.stickyrole <role>`: Set a role that persists through leaves/rejoins.
- `.stripstaff <member>`: Instantly remove all staff permissions.
- `.tempban <member> <time>`: Temporary ban.
- `.temprole <member> <role> <time>`: Temporary role assignment.
- `.thread <action>`: Manage threads and forum posts.
- `.timeout <member> <time>`: Native Discord timeout.
- `.unban <member>`: Remove a ban.
- `.unbanall`: Remove every ban in the server.
- `.unhide [#channel]`: Make a channel visible again.
- `.unjail <member>`: Release from jail.
- `.unlock [#channel]`: Allow messages again.
- `.unlockall`: Unlock every locked channel.
- `.unmute <member>`: Remove system mute.
- `.unquarantine <member>`: Restore roles and access.
- `.unrestrictcommand <command>`: Remove role restriction.
- `.untimeout <member>`: Remove native timeout.
- `.voicepurge`: Disconnect everyone from a voice channel.
- `.warn <member> [reason]`: Record a warning.
- `.warns <member>`: View a list of warnings.

---

## 3. Logger (.log)
- `.log add #channel <event>`: Enable logging for specific events (messages, members, channels, roles, voice, server, all).
- `.log remove #channel <event>`: Disable logging for specific events.
- `.log color #channel <event> <hex>`: Set custom embed colors.
- `.log ignore <member|channel>`: Exclude targets from being logged.

---

## 4. Setup & Settings
- `.boostconfig`: Configure rewards for server boosters.
- `.boosterrole`: Set a custom role for boosters.
- `.confessions`: Setup an anonymous confession channel.
- `.hall`: Configure a "Hall of Fame" or specific highlight channel.
- `.settings`: View and tweak general bot settings for the server.

---

## 5. Utility (Full List)
- `.afk [reason]`: Set an away status.
- `.autoreact`: Setup automatic reactions to specific words.
- `.autoresponder`: Setup automatic text replies.
- `.base64 <encode|decode> <text>`: Convert text to/from Base64.
- `.binary <encode|decode> <text>`: Convert text to/from Binary.
- `.birthday`: Manage user birthdays and announcements.
- `.blacklist`: Block specific users from using the bot.
- `.boostR`: Manage booster-specific rewards and roles.
- `.br`: Advanced booster role management.
- `.bumpreminder`: Set reminders for server bumpers.
- `.crypto <price|list>`: Check cryptocurrency prices.
- `.decode <type> <text>`: Multi-format decoder.
- `.dig <domain>`: Perform DNS lookups.
- `.embed`: Create custom embedded messages with a builder.
- `.encode <type> <text>`: Multi-format encoder.
- `.exchange <amount> <from> <to>`: Currency conversion.
- `.hex <color>`: View color info and conversions.
- `.hex-encode <text>`: Convert text to Hex.
- `.ip <address>`: Get location and ISP data for an IP.
- `.jew`: Internal utility/tracking (Context specific).
- `.maclookup <mac>`: Identify the manufacturer of a MAC address.
- `.mcserver <ip>`: Check the status of a Minecraft server.
- `.nato <text>`: Convert text to the NATO phonetic alphabet.
- `.news`: Get the latest headlines.
- `.poll`: Start a button-based poll.
- `.remind <text> <time>`: Set a personal reminder.
- `.schedule`: Manage server events and tasks.
- `.ss <url>`: Take a screenshot of a website.
- `.starboard`: Setup a channel for "starred" highlights.
- `.tag <add|remove|list>`: Create custom text shortcuts.
- `.tempvoice`: Setup auto-deleting temporary voice channels.
- `.ticker`: Create a scrolling text banner (Context specific).
- `.ticket <setup|close|add|remove>`: Full support ticket system.
- `.timezone`: Set your personal timezone for bot features.
- `.vanity`: Track and manage server vanity URLs.
- `.vitals`: Check bot latency, uptime, and health.
- `.voicemaster`: User-owned temporary voice channel system.
- `.vouch / .vouches`: Manage a reputation/vouching system.

---

## 6. Economy (Highlights)
- `.achievements`: View your earned milestones.
- `.balance`: Check your cash and bank.
- `.blackjack / .slots / .crash / .poker`: Gamble your credits.
- `.business <buy|collect|upgrade>`: Build a passive income empire.
- `.farm <plant|harvest|status>`: The weed/crop farming game.
- `.heist`: Group up to rob the bank.
- `.invest`: Put money into the market for long-term gains.
- `.rob <member>`: Try to steal from a user's wallet.
- `.shop`: Buy items, multipliers, and roles.
- `.work / .daily / .weekly`: Get free cash.

---

## 7. AI & Smart Tools
- `.ai / .ask`: Chat with the AI.
- `.imagine`: Generate images from text.
- `.tldr`: Summarize recent chat messages.
- `.persona`: Change how the AI talks.
- `.beef`: Generate an AI argument between users.
- `.brain`: Check AI processing and memory.

---

## 8. Games & Entertainment
- `.battleship / .uno / .tictactoe / .connect4`: Play against others.
- `.hangman / .scramble / .wordgame`: Word-based puzzles.
- `.minesweeper`: Generate a playable grid.
- `.type`: Test your typing speed.

---

## 9. Family & Roleplay
- `.marry / .divorce`: Manage relationships.
- `.adopt / .disown`: Manage children.
- `.family / .tree`: View the full family connections.
- `.hug / .kiss / .slap / .touch`: Interaction commands.

---

## 10. Music
- `.play <song>`: Start playing audio.
- `.queue / .nowplaying`: Track the playlist.
- `.skip / .stop / .pause / .resume`: Controls.
- `.volume / .loop / .shuffle`: Tweaks.
- `.247`: Keep the bot in the channel permanently.

---

## 11. Owner Commands (Internal)
- `.eval`: Execute raw code (Highly restricted).
- `.restart`: Reboot the bot.
- `.setbal <member> <amount>`: Adjust a user's balance.
- `.whitelist / .blacklist`: Global access control.
- `.prompt`: Change the global AI behavior.
- `.dbhealth / .econhealth`: Check database integrity.
