const pageMarkup = `
  <video id="bg-video" autoplay muted loop playsinline>
    <source src="https://files.catbox.moe/bkptsq.mp4" type="video/mp4">
  </video>
  <div class="video-overlay"></div>
  <div id="soon-toast" class="toast" role="status" aria-live="polite"></div>

  <header class="fixed top-0 w-full z-40 transition-all duration-500 bg-slate-950/92 backdrop-blur-sm" id="site-header">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <a href="#" class="flex items-center gap-3 group" onclick="window.scrollTo({top: 0, behavior: 'smooth'}); return false;">
          <div class="w-12 h-12 rounded-3xl bg-slate-900/40 border border-slate-700/40 flex items-center justify-center overflow-hidden transition-all duration-300 logo-pop">
            <img src="https://files.catbox.moe/o1hd0x.webp" alt="esoteric.win logo" class="w-full h-full object-cover" />
          </div>
          <span class="font-display font-bold text-xl tracking-tight logo-label">esoteric<span class="text-textSecondary">.win</span></span>
        </a>

        <div class="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          <a href="#features" class="px-4 py-2 rounded-full text-sm text-textSecondary hover:text-white hover:bg-slate-800/40 transition-all">Features</a>
          <a href="#pricing" class="px-4 py-2 rounded-full text-sm text-textSecondary hover:text-white hover:bg-slate-800/40 transition-all">Pricing</a>
          <a href="#docs" class="px-4 py-2 rounded-full text-sm text-textSecondary hover:text-white hover:bg-slate-800/40 transition-all">Docs</a>
          <a href="#" onclick="showComingSoon('Discord'); return false;" class="px-4 py-2 rounded-full text-sm text-textSecondary hover:text-white hover:bg-slate-800/40 transition-all flex items-center gap-2">
            <i data-lucide="discord" class="w-3.5 h-3.5"></i>
            Community
          </a>
        </div>

        <div class="flex items-center gap-3">
          <button onclick="showComingSoon('Dashboard')" class="flex items-center gap-2 px-5 py-2.5 bg-slate-800 text-white rounded-full text-sm font-semibold hover:bg-slate-700 transition-all duration-300">
            <img src="https://files.catbox.moe/o1hd0x.webp" alt="logo" class="w-4 h-4 rounded-sm object-cover" />
            Dashboard
            <span class="text-[11px] uppercase tracking-[0.3em] bg-slate-900/80 px-2 py-1 rounded-full text-textSecondary">Soon</span>
          </button>
          <button onclick="document.getElementById('terminal').scrollIntoView({behavior: 'smooth'})" class="px-5 py-2.5 bg-void text-white rounded-full text-sm font-semibold hover:bg-slate-800 transition-all duration-300">
            Launch Console
          </button>
        </div>
      </div>
    </div>
  </header>

  <main class="pt-24">
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40 relative hero-vfx">
      <div class="grid grid-cols-12 gap-8 items-start relative z-10 reveal active">
        <div class="col-span-12 xl:col-span-7">
          <h1 class="font-display text-6xl md:text-8xl font-black leading-[0.9] mb-8">
            <span class="block text-textPrimary">Protect every</span>
            <span class="block text-textSecondary mt-2 whitespace-nowrap morph-text" id="morphingText">line of Lua.</span>
          </h1>

          <p class="text-xl text-textSecondary max-w-2xl mb-4 leading-relaxed font-light">
            A simple Lua protection workflow that hides source, ships encrypted releases, and checks scripts during execution.
          </p>
          <p class="text-sm text-slate-400 max-w-2xl mb-10">Early access: dashboard and community are coming soon.</p>

          <div class="flex flex-wrap gap-4">
            <button onclick="document.getElementById('pricing').scrollIntoView({behavior: 'smooth'})" class="group px-8 py-4 bg-slate-900 text-white rounded-2xl font-semibold hover:bg-slate-800 transition-all flex items-center gap-2 hover-vfx">
              Secure my script
              <i data-lucide="shield" class="w-4 h-4"></i>
            </button>
            <button onclick="document.getElementById('terminal').scrollIntoView({behavior: 'smooth'})" class="px-8 py-4 glass rounded-2xl font-medium text-textSecondary hover:text-white hover:border-slate-700/50 transition-all flex items-center gap-2 group hover-vfx">
              <i data-lucide="play" class="w-4 h-4 group-hover:scale-110 transition-transform"></i>
              View demo
            </button>
          </div>
        </div>
        <div class="hidden xl:block col-span-12 xl:col-span-5 reveal delay-200 self-start mt-10 xl:mt-0">
          <div class="live-shield-panel rounded-3xl p-6 max-w-sm mx-auto">
            <div class="flex items-center gap-4 mb-4">
              <div class="shield-badge">
                <i data-lucide="shield-check" class="w-6 h-6 text-textPrimary"></i>
              </div>
              <div>
                <div class="text-sm uppercase tracking-[0.28em] text-slate-400 mb-1">esoteric</div>
                <div class="text-2xl font-bold font-display">Guarding</div>
              </div>
            </div>
            <p class="text-sm text-textSecondary mb-4">Obfuscation, hook protection, and anti-debugging checks live inside every protected release.</p>
            <div class="h-1 w-full bg-slate-900/40 rounded-full overflow-hidden">
              <div class="h-full w-[84%] bg-slate-700/60 rounded-full"></div>
            </div>
            <div class="mt-4"><span class="brand-chip">esoteric.win</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-32 overflow-hidden" id="features">
      <div class="max-w-7xl mx-auto grid gap-6 lg:grid-cols-3">
        <div class="glass rounded-3xl p-8 border border-slate-700/40 transition-all hover:border-slate-600/40 hover-vfx">
          <div class="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-900/40 mb-6">
            <i data-lucide="shield" class="w-7 h-7 text-textPrimary"></i>
          </div>
          <h3 class="text-xl font-display font-bold mb-3">Obfuscate Lua code</h3>
          <p class="text-textSecondary text-sm leading-relaxed">Hide your Lua source with control flow transforms, name mangling, and string encryption.</p>
        </div>
        <div class="glass rounded-3xl p-8 border border-slate-700/40 transition-all hover:border-slate-600/40 hover-vfx">
          <div class="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-900/40 mb-6">
            <i data-lucide="key" class="w-7 h-7 text-textPrimary"></i>
          </div>
          <h3 class="text-xl font-display font-bold mb-3">License keys and release control</h3>
          <p class="text-textSecondary text-sm leading-relaxed">Manage keys, releases, and delivery from the dashboard without extra setup.</p>
        </div>
        <div class="glass rounded-3xl p-8 border border-slate-700/40 transition-all hover:border-slate-600/40 hover-vfx">
          <div class="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-900/40 mb-6">
            <i data-lucide="lock" class="w-7 h-7 text-textPrimary"></i>
          </div>
          <h3 class="text-xl font-display font-bold mb-3">Runtime checks and tamper detection</h3>
          <p class="text-textSecondary text-sm leading-relaxed">Detect debugging, memory edits, and invalid execution paths while your script runs.</p>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40 section-vfx" id="security">
      <div class="text-center mb-12 reveal">
        <h2 class="font-display text-4xl md:text-5xl font-bold mb-4">Security stack <span class="text-textSecondary">and delivery</span></h2>
        <p class="text-textSecondary max-w-2xl mx-auto">A straightforward Lua protection system with obfuscation, runtime checks, license delivery, and dashboard control.</p>
      </div>
      <div class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-start">
        <div class="glass rounded-3xl p-10 border border-slate-700/40 hover-vfx reveal">
          <h3 class="text-2xl font-display font-black mb-5">What we use</h3>
          <div class="grid gap-4 sm:grid-cols-2 text-textSecondary text-sm">
            <div class="space-y-4">
              <div class="flex gap-3 items-start"><span class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-500"></span><span>Control flow transforms, name mangling, and string encryption for Lua.</span></div>
              <div class="flex gap-3 items-start"><span class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-500"></span><span>Runtime checks for tampering, debugging, and invalid execution paths.</span></div>
              <div class="flex gap-3 items-start"><span class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-500"></span><span>Encrypted packages that only decode in memory.</span></div>
            </div>
            <div class="space-y-4">
              <div class="flex gap-3 items-start"><span class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-500"></span><span>Custom in-memory loader that keeps raw source off disk.</span></div>
              <div class="flex gap-3 items-start"><span class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-500"></span><span>Dashboard controls keys, revocations, and usage logging.</span></div>
              <div class="flex gap-3 items-start"><span class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-500"></span><span>Launcher-friendly delivery with auth gating and package metadata.</span></div>
            </div>
          </div>
        </div>
        <div class="space-y-6">
          <div class="glass rounded-3xl p-8 border border-slate-700/40 hover-vfx reveal delay-100">
            <h3 class="text-2xl font-display font-bold mb-4">Dashboard-first workflow</h3>
            <p class="text-textSecondary text-sm">Upload your Lua file, pick your protection profile, and publish a release with a bound key in one place.</p>
          </div>
          <div class="glass rounded-3xl p-8 border border-slate-700/40 hover-vfx reveal delay-150">
            <h3 class="text-2xl font-display font-bold mb-4">Secure launch path</h3>
            <p class="text-textSecondary text-sm">Each build is licensed, checked, and decrypted in memory before execution, so the client never gets raw source.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-40" id="terminal">
      <div class="text-center mb-12 reveal">
        <h2 class="font-display text-4xl md:text-5xl font-bold mb-4">See it in <span class="text-textSecondary">action</span></h2>
        <p class="text-textSecondary">Live demonstration of our protection flow.</p>
      </div>

      <div class="glass rounded-3xl overflow-hidden border border-white/10 reveal">
        <div class="bg-surfaceElevated px-6 py-4 border-b border-white/5 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div class="text-xs text-textMuted font-mono">esoteric � bash � 80x24</div>
          <button onclick="copyCode()" class="text-textMuted hover:text-white transition-colors p-2 hover:bg-slate-800/40 rounded-lg" title="Copy to clipboard">
            <i data-lucide="copy" class="w-4 h-4"></i>
          </button>
        </div>

        <div class="bg-void p-6 md:p-8 font-mono text-sm md:text-base">
          <div class="text-textMuted mb-2">$ <span class="text-textSecondary">esoteric</span> init</div>

          <div class="bg-slate-900/60 rounded-xl p-4 mb-6 border border-slate-700/30">
            <span class="text-white/70">_G</span>.<span class="text-textSecondary">ScriptKey</span> = <span class="text-white/50">"esoteric-demo-key-2026"</span><br>
            <span class="text-white/70">loadstring</span>(<span class="text-textSecondary">game</span>:<span class="text-white/60">HttpGet</span>(<span class="text-white/50">"https://auth.esoteric.win/verify/coolscript"</span>))()
          </div>

          <div id="terminal-output" class="space-y-2 h-32 overflow-hidden relative">
            <div class="text-textMuted terminal-cursor">Initializing secure connection...</div>
          </div>
        </div>

        <div class="bg-surfaceElevated px-6 py-3 border-t border-slate-200 flex justify-between items-center">
          <div class="flex items-center gap-2 text-xs text-textSecondary">
            <i data-lucide="cpu" class="w-3 h-3"></i>
            <span>Demo mode � no network required.</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-slate-400"></span>
            <span class="text-xs text-textSecondary">Local preview</span>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="relative reveal">
          <div class="relative glass rounded-3xl p-8 border border-white/10 overflow-hidden">
            <div class="grid-pattern absolute inset-0 opacity-30"></div>
            <div class="relative z-10">
              <div class="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <i data-lucide="shield" class="w-10 h-10 text-white"></i>
              </div>
              <h3 class="font-display text-2xl font-bold mb-2">Designed for creators</h3>
              <p class="text-textSecondary mb-6">A modular engine that slots into any codebase. Zero configuration. Drop-in ready.</p>
              <div class="space-y-3">
                <div class="flex items-center gap-3 text-sm text-textSecondary">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-white/50"></i>
                  <span>Automatic dependency resolution</span>
                </div>
                <div class="flex items-center gap-3 text-sm text-textSecondary">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-white/50"></i>
                  <span>Real-time threat detection</span>
                </div>
                <div class="flex items-center gap-3 text-sm text-textSecondary">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-white/50"></i>
                  <span>Cross-platform compatibility</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="reveal delay-100">
          <h2 class="font-display text-4xl font-bold mb-8">Simple as <span class="text-textSecondary">1, 2, 3</span></h2>
          <div class="space-y-8">
            <div class="flex gap-6 group cursor-pointer" onclick="document.getElementById('pricing').scrollIntoView({behavior: 'smooth'})">
              <div class="relative">
                <div class="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-700/40 flex items-center justify-center text-textPrimary font-bold text-lg group-hover:bg-slate-900 group-hover:text-textPrimary transition-all duration-300">1</div>
                <div class="absolute top-12 left-1/2 w-px h-8 bg-gradient-to-b from-slate-700/20 to-transparent"></div>
              </div>
              <div class="flex-1 pt-1">
                <h4 class="text-xl font-semibold mb-1 group-hover:text-textSecondary transition-colors">Generate a key</h4>
                <p class="text-textSecondary text-sm">Create a license key that binds protection to your release.</p>
              </div>
            </div>
            <div class="flex gap-6 group cursor-pointer">
              <div class="relative">
                <div class="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-700/40 flex items-center justify-center text-textSecondary font-bold text-lg group-hover:border-slate-600/40 group-hover:text-textPrimary transition-all duration-300">2</div>
                <div class="absolute top-12 left-1/2 w-px h-8 bg-gradient-to-b from-slate-700/20 to-transparent"></div>
              </div>
              <div class="flex-1 pt-1">
                <h4 class="text-xl font-semibold mb-1 group-hover:text-textSecondary transition-colors">Upload your Lua</h4>
                <p class="text-textSecondary text-sm">Drop your script into the dashboard and choose a protection profile.</p>
              </div>
            </div>
            <div class="flex gap-6 group cursor-pointer">
              <div class="relative">
                <div class="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-700/40 flex items-center justify-center text-textSecondary font-bold text-lg group-hover:border-slate-600/40 group-hover:text-textPrimary transition-all duration-300">3</div>
              </div>
              <div class="flex-1 pt-1">
                <h4 class="text-xl font-semibold mb-1 group-hover:text-textSecondary transition-colors">Publish protection</h4>
                <p class="text-textSecondary text-sm">Send the protected package to users with one secure release.</p>
              </div>
            </div>
          </div>
          <button onclick="document.getElementById('pricing').scrollIntoView({behavior: 'smooth'})" class="mt-10 px-6 py-3 bg-slate-950 hover:bg-slate-900 border border-slate-700/40 rounded-xl text-sm font-medium transition-all flex items-center gap-2 group">
            View plans
            <i data-lucide="arrow-up-right" class="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
          </button>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40" id="pricing">
      <div class="text-center mb-16 reveal">
        <h2 class="font-display text-4xl md:text-5xl font-bold mb-4">Pricing for creators who ship Lua</h2>
        <p class="text-textSecondary">Plans designed around build volume, delivery control, and real protection.</p>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="pricing-card rounded-3xl p-8 reveal hover-vfx">
          <div class="mb-6">
            <div class="pricing-tag">Light</div>
            <h3 class="text-lg font-semibold text-textSecondary mb-2 mt-4">Shadow</h3>
            <div class="flex items-baseline gap-1">
              <span class="text-4xl font-bold font-display">$9</span>
              <span class="text-textMuted">/month</span>
            </div>
          </div>
          <ul class="space-y-4 mb-8 text-sm text-textSecondary">
            <li class="flex gap-3 items-start"><span class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-500"></span>5 protected builds</li>
            <li class="flex gap-3 items-start"><span class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-500"></span>Core Lua obfuscation</li>
            <li class="flex gap-3 items-start"><span class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-500"></span>Launch-ready package delivery</li>
          </ul>
          <button onclick="showComingSoon('Discord')" class="w-full py-3 rounded-xl border border-slate-700/40 hover:bg-slate-900/40 text-sm font-medium transition-all">Start Shadow</button>
        </div>
        <div class="pricing-card pricing-card--featured rounded-3xl p-8 relative overflow-hidden reveal delay-100 hover-vfx">
          <div class="pricing-tag">Most used</div>
          <div class="mb-6 relative">
            <h3 class="text-lg font-semibold text-white mb-2">Cipher</h3>
            <div class="flex items-baseline gap-1">
              <span class="text-4xl font-bold font-display">$29</span>
              <span class="text-textMuted">/month</span>
            </div>
          </div>
          <ul class="space-y-4 mb-8 text-sm text-textSecondary">
            <li class="flex gap-3 items-start"><span class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-500"></span>Unlimited script slots</li>
            <li class="flex gap-3 items-start"><span class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-500"></span>Advanced VM layer and string encryption</li>
            <li class="flex gap-3 items-start"><span class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-500"></span>Key revocation and session logging</li>
            <li class="flex gap-3 items-start"><span class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-500"></span>Priority deployment queue</li>
          </ul>
          <button onclick="showComingSoon('Discord')" class="w-full py-3 rounded-xl bg-slate-700 text-white hover:bg-slate-600 text-sm font-bold transition-all">Choose Cipher</button>
        </div>
        <div class="pricing-card rounded-3xl p-8 border border-slate-700/30 hover:border-slate-600/40 transition-all reveal delay-200 hover-vfx">
          <div class="mb-6">
            <div class="pricing-tag">Custom</div>
            <h3 class="text-lg font-semibold text-textSecondary mb-2">Fortress</h3>
            <div class="flex items-baseline gap-1">
              <span class="text-4xl font-bold font-display">Custom</span>
            </div>
          </div>
          <ul class="space-y-4 mb-8 text-sm text-textSecondary">
            <li class="flex gap-3 items-start"><span class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-500"></span>Everything in Cipher</li>
            <li class="flex gap-3 items-start"><span class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-500"></span>Dedicated infrastructure and SLA</li>
            <li class="flex gap-3 items-start"><span class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-500"></span>Private release channels</li>
            <li class="flex gap-3 items-start"><span class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-500"></span>Custom integration work</li>
          </ul>
          <button onclick="showComingSoon('Discord')" class="w-full py-3 rounded-xl border border-slate-700/40 hover:bg-slate-900/40 text-sm font-medium transition-all">Talk to us</button>
        </div>
      </div>
    </section>

    <section class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-40" id="docs">
      <div class="text-center mb-12 reveal">
        <h2 class="font-display text-4xl font-bold mb-4">Questions?</h2>
        <p class="text-textSecondary">Everything you need to know.</p>
      </div>
      <div class="reveal">
        <div class="glass rounded-2xl border border-slate-200 overflow-hidden">
          <div class="px-6 py-6">
            <label for="faq-select" class="mb-3 block text-sm font-semibold text-textPrimary">Choose a question</label>
            <div class="relative">
              <select id="faq-select" class="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4 pr-10 text-textPrimary text-sm shadow-sm focus:border-slate-500 focus:outline-none">
                <option value="platforms">Which platforms are supported?</option>
                <option value="obfuscation">How does the obfuscation work?</option>
                <option value="delivery">How does delivery work?</option>
                <option value="refund">Can I get a refund?</option>
                <option value="support">Where can I get support?</option>
              </select>
              <i data-lucide="chevron-down" class="w-5 h-5 text-textMuted absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"></i>
            </div>
          </div>
          <div class="faq-content open px-6 pb-6 pt-4 opacity-100" id="faq-answer">
            <p class="text-textSecondary text-sm leading-relaxed" id="faq-answer-text">
              Primarily built for Roblox Lua today, with other Lua runtimes on the roadmap as demand grows.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
      <div class="glass rounded-3xl p-12 text-center relative overflow-hidden reveal border border-slate-700/30">
        <div class="relative z-10">
          <h2 class="font-display text-3xl md:text-4xl font-bold mb-4">Secure your next Lua release</h2>
          <p class="text-textSecondary mb-8 max-w-lg mx-auto">Ship release-ready packages with runtime protection, key control, and a runtime shield built for Lua.</p>
          <div class="flex flex-wrap justify-center gap-4">
            <button onclick="document.getElementById('pricing').scrollIntoView({behavior: 'smooth'})" class="px-8 py-3 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-700 transition-all">Launch protection</button>
            <button onclick="showComingSoon('Discord')" class="px-8 py-3 glass rounded-xl font-medium hover:bg-slate-900 transition-all flex items-center gap-2">
              <i data-lucide="send" class="w-4 h-4"></i>
              Request access
            </button>
          </div>
        </div>
      </div>
    </section>

    <footer class="border-t border-slate-700/30 pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <div class="flex items-center gap-2 mb-4">
              <div class="w-8 h-8 rounded-lg bg-slate-950/70 border border-slate-700/40 flex items-center justify-center">
                <i data-lucide="hexagon" class="w-4 h-4 text-textPrimary"></i>
              </div>
              <span class="font-display font-bold text-lg">esoteric<span class="text-textSecondary">.win</span></span>
            </div>
            <p class="text-textMuted text-sm">Minimal, real Lua protection with release packaging and runtime guard controls.</p>
          </div>
          <div class="flex flex-col justify-between gap-6">
            <p class="text-textSecondary text-sm max-w-md">Want Access?</p>
            <button onclick="showComingSoon('Discord')" class="w-full md:w-auto px-6 py-3 rounded-xl border border-slate-700/40 text-sm font-medium text-textPrimary hover:bg-slate-900 transition-all">Request access</button>
          </div>
        </div>

        <div class="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="text-xs text-textMuted">� 2026 esoteric.win. All rights reserved.</div>
          <div class="flex items-center gap-4">
            <a href="#" onclick="showComingSoon('Discord'); return false;" class="text-textMuted hover:text-white transition-colors">
              <i data-lucide="discord" class="w-5 h-5"></i>
            </a>
            <a href="#" class="text-textMuted hover:text-white transition-colors">
              <i data-lucide="twitter" class="w-5 h-5"></i>
            </a>
            <a href="#" class="text-textMuted hover:text-white transition-colors">
              <i data-lucide="github" class="w-5 h-5"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </main>
`;

const words = ["line of Lua.", "script.", "build."];
let wordIndex = 0;

function updateMorphText() {
  const morphElement = document.getElementById('morphingText');
  if (!morphElement) return;
  morphElement.style.opacity = '0';
  setTimeout(() => {
    morphElement.textContent = words[wordIndex];
    morphElement.style.opacity = '1';
    wordIndex = (wordIndex + 1) % words.length;
  }, 240);
}

function initRevealObserver() {
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  }, observerOptions);
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function updateFaqAnswer() {
  const answerText = document.getElementById('faq-answer-text');
  const faqSelect = document.getElementById('faq-select');
  if (!answerText || !faqSelect) return;

  const answers = {
    platforms: 'Primarily built for Roblox Lua today, with other Lua runtimes on the roadmap as demand grows.',
    obfuscation: 'We utilize a custom virtual machine approach with control flow flattening and string encryption. Your original code never touches the client in a recognizable form.',
    delivery: 'Scripts are packaged and delivered through a secure dashboard workflow. Each release is tied to a license key, validated at runtime, and can be revoked instantly.',
    refund: 'Yes, we offer a 7-day money-back guarantee if you\'re not satisfied with the service. No questions asked.',
    support: 'Join our Discord community for help from our team and other developers. Premium users get priority support access.',
  };

  answerText.textContent = answers[faqSelect.value] || answers.platforms;
}

const terminalOutputLines = [
  { text: 'Booting protected runtime...', color: 'text-textSecondary', delay: 1000 },
  { text: 'Loading config /etc/esoteric/config.toml', color: 'text-textPrimary', delay: 1800 },
  { text: 'Establishing key session.', color: 'text-textSecondary', delay: 2800 },
  { text: 'Runtime integrity check passed.', color: 'text-textPrimary', delay: 3600 },
  { text: 'Encrypted payload mapped in memory.', color: 'text-textSecondary', delay: 4600 },
  { text: 'Demo ready. Execute with `esoteric run`.', color: 'text-void', delay: 5600 },
];

const noiseLines = [
  '[init] loading runtime hooks',
  '[sys] verifying auth signature',
  '0x7ff8a1c: parsing package',
  '[cache] warming module store',
  '[sync] handshake complete',
];

function randomNoise() {
  return noiseLines[Math.floor(Math.random() * noiseLines.length)];
}

function runTerminal() {
  const terminalOutput = document.getElementById('terminal-output');
  if (!terminalOutput) return;
  terminalOutput.innerHTML = '<div class="text-textSecondary terminal-cursor">Initializing demo...</div>';

  terminalOutputLines.forEach((log, index) => {
    setTimeout(() => {
      if (index === 0) terminalOutput.innerHTML = '';
      const div = document.createElement('div');
      div.className = log.color + ' mb-1 terminal-line';
      div.textContent = '> ' + log.text;
      terminalOutput.appendChild(div);
      if (index % 2 === 1) {
        const noise = document.createElement('div');
        noise.className = 'terminal-quiet text-xs mb-1';
        noise.textContent = '> ' + randomNoise();
        terminalOutput.appendChild(noise);
      }
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }, log.delay + Math.random() * 240);
  });

  setTimeout(runTerminal, 7600 + Math.random() * 800);
}

function copyCode() {
  const code = `_G.ScriptKey = "esoteric-demo-key-2026"\nloadstring(game:HttpGet("https://auth.esoteric.win/verify"))()`;
  navigator.clipboard.writeText(code).then(() => {
    const btn = document.querySelector('[title="Copy to clipboard"]');
    if (!btn) return;
    const original = btn.innerHTML;
    btn.innerHTML = '<i data-lucide="check" class="w-4 h-4 text-green-400"></i>';
    lucide.createIcons();
    setTimeout(() => {
      btn.innerHTML = original;
      lucide.createIcons();
    }, 2000);
  });
}

function showComingSoon(feature) {
  const toast = document.getElementById('soon-toast');
  if (!toast) return;
  toast.textContent = feature === 'Discord' ? "We're coming soon!" : "Dashboard is coming soon!";
  toast.classList.add('show');
  clearTimeout(window._soonToastTimer);
  window._soonToastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

function mountPage() {
  const root = document.getElementById('root');
  if (!root) return;
  root.innerHTML = pageMarkup;

  lucide.createIcons();
  initRevealObserver();
  setInterval(updateMorphText, 2800);
  updateMorphText();

  const faqSelect = document.getElementById('faq-select');
  if (faqSelect) {
    faqSelect.addEventListener('change', updateFaqAnswer);
  }
  updateFaqAnswer();
  runTerminal();

  window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    if (!header) return;
    if (window.pageYOffset > 50) {
      header.classList.add('glass');
    } else {
      header.classList.remove('glass');
    }
  });
}

document.addEventListener('DOMContentLoaded', mountPage);
