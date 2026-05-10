# Esoterica Security: Heat and Wanted Level Documentation

This document provides a comprehensive guide to the two distinct security systems within the Esoterica bot: the AutoMod Heat System (for chat behavior) and the Wanted Level System (for server security and reputation).

---

## 1. AutoMod Heat System (.heat)
The Heat system is a behavioral firewall designed to prevent chat disruption through automated escalation.

### Core Concepts
- Heat Points: Every time a user violates a rule (like emoji spam), they gain "heat."
- Decay: Heat is not permanent. It naturally disappears over time at a configurable rate (default: 5 points/minute).
- Thresholds: When a user crosses a heat score you have defined, the bot automatically executes a punishment.
- Cascading: If enabled, crossing multiple thresholds in one message (e.g., jumping from 0 to 110) will trigger every punishment along the way (Warn + Timeout + Kick).

### Configuration Commands
| Command | Usage | Description |
| :--- | :--- | :--- |
| Status | .heat config | View current enabled state, decay rate, and active weights. |
| Enable/Disable | .heat <enable/disable> | Toggle the entire system on or off. |
| Weights | .heat weight <module> <pts> | Set how many points an infraction adds. |
| Decay | .heat decay <rate> | Set points lost per minute (Higher = faster cool down). |
| Cascade | .heat cascade <on/off> | Toggle whether to trigger all punishments or just the highest. |

### Infraction Modules
- caps: Excessive uppercase letters (over 70% of message).
- emoji: Excessive emojis (over 5 per message).
- lines: Text walls or newline spam (over 10 lines).
- zalgo: Glitched/corrupted text.
- duplicate: Repeatedly sending the same message.

### Punishment Ladder
Manage thresholds with:
- .heat threshold add <heat> <action> [duration]
- .heat threshold remove <heat>

Available Actions: warn, mute (timeout), kick, ban, quarantine.

---

## 2. Wanted Level System (.wl)
The Wanted Level system focuses on high-level security monitoring, raid prevention, and reputation tracking.

### Core Concepts
- Visual Status: Uses a "Search Status" image with 1 to 5 stars to show a user's notoriety.
- Bounties: Users with high heat are worth money. Other users can "claim" their heat for rewards (police roleplay).
- Lockdown Mode: An emergency state that slashes all security thresholds, making the bot extremely aggressive against any suspicious activity.
- Panic Mode: Automatically triggered if too many users join at once, increasing heat gain multipliers.

### Management Commands
| Command | Usage | Description |
| :--- | :--- | :--- |
| Status | .wl status | Check if the system is active and see current hard-coded limits. |
| Stars | .wl check [@user] | View the visual "Wanted" status of yourself or a member. |
| Leaderboard | .wl top | Show the 10 most "Wanted" users in the server. |
| Milestone | .wl milestone <pts> <act> | Set custom security responses for specific scores. |
| Lockdown | .wl lockdown | Manually toggle emergency security mode. |

### System Logic
- Account Age Multiplier: Users with accounts younger than 7 days gain heat 20% faster.
- Synergy Check: The system looks for repeated phrases across different users to detect coordinated raids.
- Bounty Calculation: Reward = 1000 + (Heat * 20). Only users with >50 heat have bounties.

---

## Internal Architecture
For developers managing the bot's codebase:

1. AutoMod Heat (heatManager.js):
    - State is persisted in SQLite via heat_db.js.
    - Every message is processed through processMessage() before filters or other logic.
    - Uses oldHeatRaw vs currentHeat to detect if a specific threshold line was crossed.

2. Wanted Level (wantedLevelService.js):
    - State is kept in-memory (wlStore) for high performance during raids, with periodic cleanup.
    - Uses an Exponential Decay formula: currentWl = data.wl * Math.exp(-lambda * dt).
    - This creates a realistic cool down where heat drops quickly at first, then slows down.

---

## Best Practices
1. The Soft Start: Start with high decay rates (10+) and low weights (5-10) to avoid false positives while the server adjusts.
2. Cascading Warning: Always enable cascade if you want to ensure users receive a DM warning before they are banned.
3. Lockdown Integration: Use .wl lockdown only during active raids; it is designed to be very strict and may affect legitimate new users.
