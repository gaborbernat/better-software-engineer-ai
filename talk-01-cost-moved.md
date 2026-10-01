---
layout: image-right
image: /powerloom-weaving-1835.jpg
class: flex flex-col justify-center
---

# The cost moved

<div class="text-xl opacity-75 pt-4">

Boundaries that cost too much to cross got&nbsp;cheap.

</div>

<Credit class="absolute bottom-4 left-14 w-[38%]" license="public domain">T. Allom and J. Tingle, "Power loom weaving", in E. Baines, History of the Cotton Manufacture, 1835,
<a href="https://commons.wikimedia.org/wiki/File:Powerloom_weaving_in_1835.jpg" target="_blank" rel="noopener">via Wikimedia Commons</a></Credit>

<!--
The cost of producing software changed, and I want to show you the change before I argue anything from it. I will use
CPython, PyPI, one of my own projects, Shopify, and Bun, and then an economist from 1865 to explain why the pattern
repeats.
-->

---

# <mdi-source-commit class="text-purple-500" /> AI is Already Inside CPython

<div class="text-sm opacity-70 pt-4">discuss.python.org, Jun-Jul 2026</div>

<div class="grid grid-cols-2 gap-8 pt-4">

<div class="text-xl italic pl-4 border-l-4 border-purple-500">

"Likely >90% of my own contributions in the past year have flowed through Claude Code."<sup class="ref-mark">1</sup>

<div class="text-sm not-italic opacity-70 pt-2">Gregory P. Smith, core developer</div>

</div>

<div class="text-xl italic pl-4 border-l-4 border-purple-500">

"would take months or even years to do all this work manually"

<div class="text-sm not-italic opacity-70 pt-2">Serhiy Storchaka, on tkinter and curses</div>

</div>

</div>

<div class="refs-bar">

<div><sup class="ref-mark">1</sup> <a href="https://discuss.python.org/t/should-claude-codes-usage-be-described-in-the-code-docs-somewhere/107969" target="_blank" rel="noopener">discuss.python.org: should Claude Code's usage be described?</a>, Jun-Jul 2026</div>

</div>

<!--
I will start inside our own ecosystem.

At the end of June, Skip Montanaro pulled CPython's main branch after some time away and saw a long list of recent
commits with Claude as co-author. He asked on discuss.python.org whether the project should document that somewhere.
In early July Gregory Smith answered that more than 90% of his own contributions in the past year went through Claude
Code.

Serhiy Storchaka wrote that AI helped him close gaps in tkinter and curses that would have taken him months or
years by hand, and that he reviews each change before he commits it.

Skip asked how to record agent use. A few posters were sceptical, and the core developers who answered were relaxed
about it. Two of the people who maintain the reference implementation of the language already work this way.
-->

---

# <logos-python class="inline" /> The PSF Names Agents in PyPI's Growth

<div class="text-xl italic pt-4 pl-4 border-l-4 border-blue-500">

"A lot more Python being written, a lot more agents installing packages on someone's behalf, and a lot more CI runs…"

<div class="text-sm not-italic opacity-70 pt-1">Jacob Coffee, PSF Director of Engineering, Aug 2026<sup class="ref-mark">1</sup></div>

</div>

<div class="grid grid-cols-4 gap-6 pt-8 text-center">

<div>
 <div class="text-4xl font-bold text-blue-500">6B+</div>
 <div class="text-sm opacity-75 pt-1">requests/day</div>
</div>

<div>
 <div class="text-4xl font-bold text-green-700 dark:text-green-500">~10 PB</div>
 <div class="text-sm opacity-75 pt-1">egress/day</div>
</div>

<div>
 <div class="text-4xl font-bold text-orange-700 dark:text-orange-500">+69%</div>
 <div class="text-sm opacity-75 pt-1">AWS spend, Jul 2026 vs. Jul 2025</div>
</div>

<div>
 <div class="text-4xl font-bold text-purple-500">3.1x</div>
 <div class="text-sm opacity-75 pt-1">new projects/month, Dec 2024 to Apr 2026<sup class="ref-mark">2</sup></div>
</div>

</div>

<div v-click class="pt-8 text-center">

<span v-mark.underline.orange="1">~1.5 full-time staff</span> on PyPI development and security, +1 on support

</div>

<div v-click="1" class="pt-3 text-xs opacity-60">

AWS spend +40% over 12 months · files and malware reports 2.5x, Dec 2024 to Apr 2026

</div>

<div class="refs-bar">

<div><sup class="ref-mark">1</sup> <a href="https://blog.pypi.org/posts/2026-08-14-how-aws-powers-pypi-and-the-psf/" target="_blank" rel="noopener">Jacob Coffee: How AWS powers PyPI and the PSF</a>, Aug 2026</div>
<div><sup class="ref-mark">2</sup> Mike Fiedler, "Limiting vectors and incentives for abuse", <a href="https://bernat.tech/posts/pycon-us-2026-packaging-summit-recap/" target="_blank" rel="noopener">Packaging Summit</a>, May 2026</div>

</div>

<!--
One thread is an anecdote, so I will show the scale underneath it.

Jacob Coffee, the PSF's Director of Engineering, wrote in August about PyPI's infrastructure. He names agents among
the causes of the growth: people write more Python, agents install more packages on someone's behalf, and CI runs more
often.

PyPI serves over six billion requests a day, and Fastly delivers almost all of the downloads. The AWS part of the bill
keeps growing. Mike Fiedler showed the Packaging Summit that new projects a month grew 3.1 times since December 2024,
and malware reports grew with them.

[click] AWS credits pay almost all of that bill, so the PSF pays in staff time. Jacob is the only person working full
time on infrastructure. Feature work, a rising volume of security reports and day-to-day maintenance fall to about
one and a half full-time staff, with one more person on support requests. I will come back to that constraint when we
get to review.
-->

---

# <logos-python class="inline" /> pipdeptree in Rust: Same Tree, 4.6x Faster

<div class="grid grid-cols-[0.82fr_1.18fr] gap-6 pt-2 items-start">

<div>

<div class="pt-2">
 <strong><mdi-target class="text-blue-500" /> Contract:</strong> same dependency tree as the Python engine
</div>

<div class="pt-4">
 <strong><mdi-test-tube class="text-purple-500" /> Evidence:</strong> 90 Python + 372 Rust tests · 100% of 4,827 Rust lines<sup class="ref-mark">1</sup> · <code class="whitespace-nowrap">unsafe_code = "forbid"</code><sup class="ref-mark">2</sup>
</div>

<div class="pt-4">
 <strong><mdi-speedometer class="text-green-500" /> Result:</strong> 4.6x <span class="whitespace-nowrap">end-to-end</span>, 260 packages, mean of 20 runs<sup class="ref-mark">3</sup> · 5 to 15x at 5,000 packages<sup class="ref-mark">1</sup>
</div>

<div v-click class="pt-6 font-semibold">
I defined correctness before the agent wrote any code.
</div>

</div>

<div>

<SlidevVideo autoplay autoreset="slide" printTimestamp="last" class="w-full rounded-lg shadow-lg">
  <source src="/pipdeptree-3.1.1-vs-4.2.5.mp4" type="video/mp4" />
</SlidevVideo>

<Credit class="text-center" license="CC BY 4.0">Bernát Gábor, recorded run of pipdeptree 3.1.1 (last pure-Python release) versus 4.2.5
(latest Rust-backed) on the same 260-package <code>uv</code> environment, CPython 3.14.7</Credit>

</div>

</div>

<div v-click="1" class="pt-3 text-xs opacity-60">

2 to 3.3x at 100 packages · peak memory 17 to 25% lower (PR #618)

</div>

<div class="refs-bar">

<div><sup class="ref-mark">1</sup> <a href="https://github.com/tox-dev/pipdeptree/pull/618" target="_blank" rel="noopener">pipdeptree 4.0.0</a>, Jul 2026, PR #618; timings include Python startup</div>
<div><sup class="ref-mark">2</sup> <a href="https://github.com/tox-dev/pipdeptree/blob/main/Cargo.toml" target="_blank" rel="noopener">pipdeptree Cargo.toml</a>: <code>unsafe_code = "forbid"</code></div>
<div><sup class="ref-mark">3</sup> My recording on this slide: pipdeptree 3.1.1 versus 4.2.5, hyperfine, mean of 20 runs, Sep 2026</div>

</div>

<!--
Now I will take one project from that ecosystem, mine, so you can hold me to it, and I will come back to it in
each part of this talk.

pipdeptree prints the dependency tree of a Python environment, and its engine used to be pure Python. I replaced that
engine with a Rust extension behind PyO3 and kept a small Python layer for the CLI. I read Rust, though I would not call
myself an expert. The agent wrote most of the code. I asked the agent to explain any part I did not follow, and
then I checked that explanation against what the tests showed.

I supplied the boundary. The Rust engine has to produce the same dependency tree as the old Python engine, which makes
the old behaviour the specification. I re-ran both on a larger environment for this talk. The trees matched, but the
new engine prints some version specifiers in normalised form, such as <2.0a0 where the old one printed <2.0a.0. The
tests had no package with an unnormalised specifier, so that detail changed in a part of the contract the tests did
not spell out. Coverage stays at 100% on both sides. The crate sets unsafe_code to forbid, so the compiler rejects any
unsafe block we try to add; the unsafe code at the boundary with CPython belongs to PyO3. CI does not run Miri or a
fuzzer, and I show why that gap matters with the Bun story in the next part. With those constraints in place, I could
review the work.

End to end, the Rust version runs 4.6 times faster in the recording, averaged over repeated runs on my laptop, so treat
the exact ratio as approximate. On large synthetic environments the benchmarks show five to fifteen times, and peak
memory drops by 17 to 25%. Those timings include Python startup.

[click] The rewrite worked because I defined correctness before the agent wrote any code. Emma Smith covered
Rust in CPython itself at four o'clock.
-->

---

# <mdi-swap-horizontal class="text-green-500" /> Cost Shifts Reverse Settled Decisions

<div class="text-lg pt-3">

Shopify, 2020: React Native · Jan 2025: reaffirmed · Sep 2026: Swift and Kotlin

</div>

<div v-click class="text-xl pt-6">

<strong>"Coding agents changed what it costs to build mobile apps twice."</strong><sup class="ref-mark">1</sup>

</div>

<div class="pt-6">

Shop app: proof of concept to app stores in <strong>12 weeks</strong>

</div>

<div class="pt-3 text-sm opacity-80">

Gated by tests · visual review · 2 adversarial reviewers · human sign-off

</div>

<div class="refs-bar">

<div v-click="1"><sup class="ref-mark">1</sup> <a href="https://shopify.engineering/back-to-native" target="_blank" rel="noopener">Shopify: native is now the future of mobile at Shopify</a>, Sep 2026</div>

</div>

<!--
Shopify is the same story at company scale.

Shopify bet on React Native in 2020, and it worked for them, with one codebase and no chase for parity between
platforms. In January 2025 they reaffirmed it in public. In September they announced a move back to Swift and Kotlin.

[click] They give the reason in the first line of the post: coding agents changed what it costs to build mobile apps
twice. An agent can implement a feature on Android using the iOS version as the reference, and the other way round, so
they no longer had to choose the architecture by the cost of parity. Native still means two codebases, and agents made
the second one cheaper to keep in step.

The Shop app went from proof of concept to a rebuilt native app in the stores in twelve weeks. Read the section they
titled "preventing slop". Pointing an agent at the React Native code and asking for a one-shot port did not work, and
neither did freezing the design into specs and task files up front. The team got results from a loop of small
checkpoints, each one gated by tests, a visual comparison with the running app, two adversarial code reviewers, and a
human who signed off.

Your own choice of mobile stack is a separate question. My point is that a core assumption changed and the team
re-opened a settled decision. Noticing that took human judgment, and the port followed from it.
-->

---

# <mdi-chart-line class="text-blue-500" /> People Steer and Verify; Agents Own Volume

<div class="text-lg pt-3">

<strong>Bun, Zig to Rust, 11 days:</strong><sup class="ref-mark">1</sup> 1 engineer · 64 agents · +1M lines

</div>

<div class="text-sm pt-1">

Anthropic owns Bun; pre-release Claude model

</div>

<div v-click class="text-lg pt-4">

~1.39M assertions · <strong v-mark.underline.orange="1">0 tests skipped or deleted</strong>

</div>

<div class="grid grid-cols-2 gap-6 pt-6">

<div>
 <strong>Crawshaw:</strong> 25% → 90% of his code in a year; reads 95, writes 5<sup class="ref-mark">2</sup>
</div>

<div>
 <strong>Terry Tao:</strong> two dozen maths applets revived<sup class="ref-mark">3</sup>
</div>

</div>

<div v-click="1" class="pt-3 text-xs opacity-60">

~50 workflows · 4 worktrees · 6,778 commits · peak ~1,300 lines a minute · 2+ adversarial reviewers per change

</div>

<div class="refs-bar">

<div><sup class="ref-mark">1</sup> <a href="https://bun.com/blog/bun-in-rust" target="_blank" rel="noopener">Jarred Sumner: Rewriting Bun in Rust</a>, Jul 2026</div>
<div><sup class="ref-mark">2</sup> <a href="https://crawshaw.io/blog/eight-more-months-of-agents" target="_blank" rel="noopener">Crawshaw: eight more months of agents</a>, Feb 2026</div>
<div><sup class="ref-mark">3</sup> <a href="https://terrytao.wordpress.com/2026/07/11/old-and-new-apps-via-modern-coding-agents/" target="_blank" rel="noopener">Terry Tao: old and new apps via coding agents</a>, Jul 2026</div>

</div>

<!--
Bun is a larger case. Jarred Sumner and a fleet of agents rewrote it from Zig to Rust in eleven days. The post
discloses that Anthropic bought Bun last December, that Jarred works there, and that he used a pre-release Claude
model. A diff of that size is too large for one person to read, and Jarred's post explains what made it safe to merge.

[click] The Bun team wrote its test suite in TypeScript, so it does not depend on the language Jarred was replacing.
Jarred ran the same suite against the Zig original and the Rust port, and he skipped or deleted zero tests.
Adversarial reviewers checked each change before commit. The approach has a cost, which I show in the next part.

I have two smaller examples in the same direction. Within a year, David Crawshaw went from the model writing 25% of his
code to 90%, and he now reads far more code than he writes. Terry Tao revived old Java
applets for mathematics and built new ones. He chose what to build and judged whether the mathematics came out right.

At each scale the human owns direction and verification, and the agent owns volume.
-->

---
layout: image-left
image: /jevons.jpg
---

# <mdi-fire class="text-orange-500" /> Cheaper Coal Power Raised Coal Use: The Jevons Paradox

<div class="text-sm italic pt-1">

"It is wholly a confusion of ideas to suppose that the economical use of fuel is equivalent to a diminished consumption.
The very contrary is the truth."<sup class="ref-mark">1</sup>

</div>

<div class="text-xs opacity-60 pb-1">William Stanley Jevons, The Coal Question, 1865</div>

<div v-click class="flex gap-4 items-center pt-2">

<img src="/watt-double-engine-1782.jpg" class="h-28 rounded shadow" />

<div class="text-lg">Less coal per engine; more coal burned</div>

</div>

<div v-click class="pt-3 text-sm">

Nadella, Jan 2025: Jevons for AI usage<sup class="ref-mark">2</sup> · Ages 22 to 25 in <span class="whitespace-nowrap">AI-exposed</span> jobs: 19% below <span class="whitespace-nowrap">less-exposed</span> peers<sup class="ref-mark">3</sup>

</div>

<div class="refs-bar !left-[52%]">

<div><sup class="ref-mark">1</sup> <a href="https://www.econlib.org/library/YPDBooks/Jevons/jvnCQ.html?chapter_num=9" target="_blank" rel="noopener">Jevons, The Coal Question, ch. VII</a></div>
<div v-click="2"><sup class="ref-mark">2</sup> <a href="https://www.geekwire.com/2025/microsoft-ceo-says-ai-use-will-skyrocket-with-more-efficiency-amid-craze-over-deepseek/" target="_blank" rel="noopener">GeekWire on Nadella</a>, Jan 2025</div>
<div v-click="2"><sup class="ref-mark">3</sup> <a href="https://digitaleconomy.stanford.edu/app/uploads/2026/08/Canaries_August2026.pdf" target="_blank" rel="noopener">Stanford Digital Economy Lab: Canaries in the Coal Mine</a>, Aug 2026 update</div>
<div>Images: <a href="https://commons.wikimedia.org/wiki/File:PSM_V11_D660_William_Stanley_Jevons.jpg" target="_blank" rel="noopener">Jevons portrait, 1877</a>; <a href="https://commons.wikimedia.org/wiki/File:Steam_engine_-_Mr._Watt%27s_double_steam_engine_from_his_specification_of_1782_LCCN2006691752.jpg" target="_blank" rel="noopener">Watt engine plate, J. Robison, 1822</a>; Wikimedia Commons. License: public domain.</div>

</div>

<!--
I do not know what this means for developer jobs in the long run, and I found no study that settles it. I find some
optimism in one historical pattern, with a caveat.

In 1865 William Stanley Jevons described a pattern in coal use. [click] Watt's engine did the same work on a fraction of
the coal that older engines burned, so you would expect coal use to fall. Coal use climbed, because cheaper power made
iron works, factories, and machine shops worth running, and more of them burned coal.

Software may work the same way. Plenty of software, such as internal automation, goes unbuilt because it costs too
much. If such tools take a week to build and not a month, teams build more of them.

[click] Satya Nadella reached for Jevons in January 2025, after DeepSeek, about how much AI people would use. That is a
claim about AI usage, and more code does not guarantee more engineers. In its August update the Stanford Digital Economy
Lab reports employment for 22 to 25 year olds in AI-exposed jobs 19% below where it would be had it kept pace with
less-exposed peers, because firms hire fewer of them, and the authors say their data is descriptive and does not show
the cause. I take Jevons as a reason for optimism about demand and the hiring data as a reason to watch how juniors get
in.
-->
