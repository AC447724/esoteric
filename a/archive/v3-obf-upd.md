## What's New in v3.0? (Feature Breakdown)

### 1. Proprietary Virtual Machine (VM)
Your script is no longer passed as a string to Roblox's native `loadstring`. Instead, your source is compiled into proprietary, randomized bytecode and executed inside an internal, register-based Lua emulator. This entirely defeats automated de-obfuscators and memory dumpers.

### 2. Payload Fragmentation
Your compiled payload is shattered into 3 to 6 random-length encrypted chunks. These chunks are scattered randomly throughout the script's internal state machine, separated by junk code. Memory dumpers looking for a single contiguous encrypted string will find nothing.

### 3. FNV-1a Runtime Key Derivation
Hardcoded XOR keys are dead. Every time you obfuscate a script, Esoteric bakes in 6 random seed variables disguised as math operations. At runtime, these seeds are mixed using an FNV-1a hashing algorithm to derive the actual decryption keys. A reverse engineer looking at the script's text will literally never find the key.

### 4. Metamethod Control Flow Hiding
We no longer use standard `while` loops or direct function calls for the loader's state machine. The entire execution path is hidden behind opaque `setmetatable` proxies using `__index` and `__call`. To a static analysis tool, the script just looks like it's reading empty tables.

### 5. Polymorphic Kill Functions
If the script detects an executor or spy, it no longer uses a recognizable `string.rep` crash loop. Instead, it randomly selects one of three devastating kill archetypes per run:
- Unpredictable Memory Exhaustion
- Mutual-Recursion Stack Overflows
- Coroutine Scheduler Exhaustion

### 6. Behavioral Anti-Tamper & IC
We upgraded the Integrity Check (IC) from a single line to a 7-layer behavioral detection suite:
- Validates the source of `debug.info` to ensure native C functions aren't hooked.
- Detects `__index` and `__namecall` metamethod hooks on the `game` object.
- Validates `rawget`/`rawset` correctness to catch poorly written executor overrides.
- Ensures `Instance.new("Folder")` returns correct `typeof` and `ClassName` metadata.
- Validates the exact error string formatting of `pcall(error, ...)` (often broken by executors).
- Detects hidden global variables injected by Synapse, ScriptWare, Krnl, Fluxus, Delta, Ro-Exec, and Macsploit.

### 7. Structural Pseudo-Hashing
The loader actively counts and verifies its own internal state machine blocks. If a reverser attempts to delete the Anti-Cheat check state, the structural hash fails and the script silently self-destructs.

### 8. Dynamic Timing Thresholds
Instead of hardcoding a timeout value (like `0.08` seconds) to catch debuggers, the script dynamically calculates a random sub-millisecond threshold at runtime using `math.pi`.

---

## 🛠️ Tips for Developers (Writing VM-Friendly Code)

Because v3.0 uses a highly secure Virtual Machine, your code is no longer running natively on C++. It is running inside an emulator. This means you must write optimized code, or your script will lag.

> [!WARNING]
> Do not put heavy calculations, loops, or complex math inside `RunService.RenderStepped` or `RunService.Heartbeat`. The VM tax will cause severe FPS drops!

### Tip 1: Be Event-Driven
**Do not do this:**
```lua
RunService.RenderStepped:Connect(function()
    for _, player in pairs(game.Players:GetPlayers()) do
        -- Update ESP for everyone
    end
end)
```
**Do this instead:** Use `PlayerAdded` and `PlayerRemoving` to create and destroy ESP objects once, and only use `RenderStepped` to update their coordinates.

### Tip 2: Cache Your Variables
Never call `game:GetService()` or deeply nested paths (`player.Character.HumanoidRootPart.Position`) inside a fast loop. 
Cache them outside the loop:
```lua
local Players = game:GetService("Players")
local LocalPlayer = Players.LocalPlayer
```

### Tip 3: Throttle Your Checks
If you are writing a Kill Aura or an Aimbot targeting system, you do not need to check the distance of 20 players 144 times a second. Throttle the math so it only runs every `0.1` seconds.
```lua
local lastCheck = 0
RunService.RenderStepped:Connect(function()
    if tick() - lastCheck > 0.1 then 
        lastCheck = tick()
        -- Calculate closest player here
    end
end)
```

### Tip 4: Avoid Heavy String Manipulation in Loops
Functions like `string.sub`, `string.match`, and `string.lower` are expensive to emulate. Do your string comparisons once when an object loads, not every frame.


