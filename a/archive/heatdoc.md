# Absolute Documentation: Esoterica Moderation Suite

This is the exhaustive manual for every moderation and security tool in Esoterica.

---

## 1. AutoMod Heat System (.heat)
Monitors real-time behavior and punishes users based on "heat" accumulation.

- .heat config: View status, weights, and punishment thresholds.
- .heat enable / disable: Toggle the system on or off.
- .heat weight [module] [points]: Set how much heat an action adds.
    - caps: >70% uppercase messages.
    - emoji: >5 emojis in one message.
    - lines: >10 line breaks (text walls).
    - zalgo: Corrupted text detection.
    - duplicate: Sending the same message twice within 30s.
- .heat threshold add [heat] [action] [duration]: Set punishments at specific scores.
    - Actions: warn, mute, kick, ban, quarantine.
- .heat decay [rate]: Set points lost per minute (default is 5).
- .heat cascade [on/off]: Toggle whether to trigger all thresholds crossed at once.
- .heat user [@member]: View a user's current heat and "cool down" timer.
- .heat reset [@member]: Instantly clear all heat from a user.

---

## 2. Wanted Level System (.wl)
A high-level security framework for raid prevention and notoriety tracking.

- .wl on / off: Toggle wanted level tracking.
- .wl check [@member]: View the visual "Stars" search status.
- .wl status: Check system health and hard-coded limits.
- .wl top: View the 10 most "wanted" users.
- .wl config [key] [value]: Tweak system multipliers and limits.
    - timeout / kick / ban: Score required for automated action.
    - duration: Length of automatic timeout in minutes.
    - mention / link / emoji: Multipliers for heat gained from those actions.
    - decay: Multiplier for how fast stars disappear.
    - logchannel: Set the security logging channel.
- .wl milestone [score] [action] [duration]: Add custom responses at specific scores.
- .wl ignore [#channel]: Stop tracking heat in a specific channel.
- .wl whitelist [@role]: Make a role immune to wanted levels.
- .wl lockdown: Toggle emergency security mode (slashes thresholds).
- .wl invoke <dm | log> [template]: Set custom messages for security events.

---

## 3. Role Management
Manage roles, hierarchy, and automation.

- .role add [@member] [@role]: Give a role to a user.
- .role remove [@member] [@role]: Take a role from a user.
- .role create [name]: Create a new server role.
- .role delete [@role]: Permanently remove a role.
- .role rename [@role] [new_name]: Change a role's name.
- .role color [hex] [@role]: Set role color (e.g., .role color #ff0000 @Member).
- .role hoist [@role]: Toggle if the role is displayed separately.
- .role mentionable [@role]: Toggle if the role can be pinged by anyone.
- .role icon [@role] [emoji/URL]: Set a custom role icon (requires Level 2 Boost).
- .role gradient [#color1] [#color2] [@role1, @role2...]: Apply a color fade across multiple roles.
- .role all / humans / bots [@role]: Give a role to every member in that category.
- .role has [@role]: List all members with a specific role and optionally remove it from them.
- .roles: View a list of all server roles and their IDs.
- .stickyrole [@role]: Set a role that is automatically reapplied if a user leaves and rejoins.
- .temprole [@member] [@role] [duration]: Give a role for a limited time (e.g., 1h).
- .stripstaff [@member]: Instantly remove all staff/administrative roles from a user.

---

## 4. Channel Management
Control channel visibility, permissions, and structure.

- .channel create <text|voice|category> [name]: Create a new channel.
- .channel delete [#channel]: Remove a channel.
- .channel rename [#channel] [new_name]: Change channel name.
- .channel hide / unhide [#channel]: Toggle if standard users can see the channel.
- .channel sync [#channel]: Force a channel to inherit permissions from its category.
- .channel clone [#channel] [new_name]: Duplicate a channel with all its settings.
- .lock [#channel]: Prevent users from sending messages.
- .unlock [#channel]: Allow messages again.
- .nuke: Delete the current channel and recreate it to clear all history.
- .slowmode [seconds]: Set message delay (0 to disable).
- .slowmode-sync: Sync slowmode settings across the category.
- .purge [amount]: Delete the last X messages (Max 100).
- .purge @user [amount]: Delete messages only from a specific user.
- .voicepurge: Disconnect everyone from a voice channel.
- .thread [action]: Manage threads and forum posts.

---

## 5. User Discipline & Punishments
Hard and soft punishments for server infractions.

- .ban [@member] [reason]: Permanent ban.
- .kick [@member] [reason]: Remove user from server.
- .timeout [@member] [duration] [reason]: Discord-native timeout (e.g., 1h, 1d).
- .untimeout [@member]: Remove a timeout.
- .warn [@member] [reason]: Record a formal warning.
- .jail [@member] [reason]: Send a user to a restricted jail channel.
- .unjail [@member]: Release from jail.
- .mute [@member] [duration] [reason]: System-level mute.
- .unmute [@member]: Remove system mute.
- .quarantine [@member] [reason]: Isolate a user and strip roles.
- .unquarantine [@member]: Restore user from quarantine.
- .hardban [@member]: Ban user and delete their entire message history.
- .softban [@member]: Kick and clear 7 days of message history.
- .tempban [@member] [duration] [reason]: Temporary ban.
- .shame [@member] [reason]: Publicly mark a user for an infraction.
- .gulag [@member]: Send a user to a highly restricted punishment zone.

---

## 6. Information & Investigation
Tools for tracking history and researching users.

- .history [@member]: View every recorded punishment for a user.
- .warns [@member]: View only the list of warnings.
- .clearwarns [@member]: Delete all warning records for a user.
- .notes [@member]: View staff-only notes on a user.
- .notes add [@member] [text]: Add a new staff note.
- .lookup [@member | ID]: Detailed account data (Creation, Join, Permissions).
- .snipe: See the most recently deleted message.
- .editsnipe: See the original content of a recently edited message.
- .reactionsnipe: See recently removed reactions.
- .modsearch [query]: Search through moderation logs for specific terms.
- .modstats [@member]: View how many actions a moderator has taken.
- .perms [@member]: Check the exact permission list of a user or role.
- .securityscore [@member]: Calculate a safety rating based on age and history.
- .reputation [@member]: View a user's server-wide reputation score.

---

## 7. Server Automation & Config
Configure the bot's behavior and automated responses.

- .prefix [new_prefix]: Change the character used to trigger commands.
- .modlog [#channel]: Set the channel where all moderation actions are logged.
- .setup: Open the main configuration menu for server settings.
- .alias add [command] [new_alias]: Create a shortcut (e.g., .alias add ban b).
- .alias remove [alias]: Delete an existing shortcut.
- .counter add [type]: Initialize a voice channel statistic (e.g., members, boosts).
- .counter template [type] [text]: Change how a counter looks (e.g., {count} Humans).
- .invoke [command] <dm|message> [template]: Customize punishment messages.
    - Variables: {user.mention}, {author.name}, {reason}, {duration}.
- .invoke preview [command]: Test how your custom message looks.
- .sendverify: Generate a "Click to Verify" button for new members.
- .disable [command]: Prevent a command from being used in the server.
- .restrictcommand [command] [@role]: Limit a command to a specific role.

---

## 8. Miscellaneous
Other utility and management tools.

- .drag [@member] [#channel]: Move a user into a voice channel.
- .moveall [#channel]: Move everyone from your current voice channel to another.
- .emoji [action]: Manage server emojis (add, delete, rename).
- .sticker [action]: Manage server stickers.
- .fame [@member]: Give or take "fame" points from a user.
- .restore [@member]: Manually trigger a role restoration for a user.
- .reason [id] [text]: Update the reason for a past moderation action.
- .unbanall: Remove every ban in the server (Use with caution).
