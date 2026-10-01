---
layout: section
---

# The bar did not

<div class="text-xl opacity-75 pt-4">

Producing code got cheaper, and proving it correct costs as much as before.

</div>

<!--
Up to now I covered the falling cost of producing code. The bar for what counts as correct stayed
where it was, so in this part I look at what the measurements say, on both sides, and at how open
source projects responded.
-->

---

# <mdi-chart-bar class="text-blue-500" /> Adoption is Routine, Trust is Partial

<div class="grid grid-cols-2 gap-8 pt-6">

<div class="flex items-center gap-3">
 <mdi-account-multiple class="text-5xl text-blue-500" />
 <div>
 <div class="text-3xl font-bold">79%<sup class="ref-mark">1</sup></div>
 <div class="text-sm opacity-75">use AI weekly</div>
 </div>
</div>

<div class="flex items-center gap-3">
 <mdi-code-braces class="text-5xl text-green-500" />
 <div>
 <div class="text-3xl font-bold">65%<sup class="ref-mark">1</sup></div>
 <div class="text-sm opacity-75">of AI code accepted</div>
 </div>
</div>

</div>

<div class="text-xs opacity-60 text-center pt-2">Stack Overflow 2025: 84% use or plan to use AI tools.<sup class="ref-mark">3</sup></div>

<div v-click class="grid grid-cols-2 gap-8 pt-6">

<div class="flex items-center gap-3">
 <mdi-alert-octagon class="text-5xl text-red-500" />
 <div>
 <div class="text-3xl font-bold">96%<sup class="ref-mark">2</sup></div>
 <div class="text-sm opacity-75">do not <em>fully</em> trust it is correct</div>
 </div>
</div>

<div class="flex items-center gap-3">
 <mdi-eye-off class="text-5xl text-orange-500" />
 <div>
 <div class="text-3xl font-bold">48%<sup class="ref-mark">2</sup></div>
 <div class="text-sm opacity-75"><em>always</em> check before commit</div>
 </div>
</div>

</div>

<div class="refs-bar">

<div><sup class="ref-mark">1</sup> <a href="https://www.faros.ai/blog/ai-speed-trap-takeaways" target="_blank" rel="noopener">Faros Q3 2026</a>, telemetry from 22,000 developers (vendor)</div>
<div v-click="1"><sup class="ref-mark">2</sup> <a href="https://www.sonarsource.com/resources/developer-survey-report/" target="_blank" rel="noopener">Sonar State of Code</a>, fielded Oct 2025, published Jan 2026, n=1,149 (vendor)</div>
<div><sup class="ref-mark">3</sup> <a href="https://survey.stackoverflow.co/2025/ai" target="_blank" rel="noopener">Stack Overflow survey</a>, 2025</div>

</div>

<!--
The top row comes from Faros, which sells engineering analytics and measures developers through
telemetry. 79% of them use at least one AI tool weekly, and they accept most of what it
suggests. The Stack Overflow survey puts the share higher. By either number, most developers use AI
tools as part of ordinary work.

[click] The bottom row is a survey from Sonar, which sells code verification. 96% say they do
not fully trust that AI code is functionally correct, and 48% say they always check it before
they commit. "Not fully" includes people who trust the code most of the time, and people
outside the "always" group may still check most commits. The survey does not say how the two
groups overlap, so I will not claim that it does.
-->

---

# <mdi-trending-up class="text-green-500" /> Output Rose in Field Studies; Speed Stays Unsettled

<div class="grid grid-cols-2 gap-6 pt-2 text-sm">

<div>

<div class="pb-3"><strong>+24% merged PRs</strong> · Microsoft, 4 months<sup class="ref-mark">1</sup></div>

<div class="pb-3"><strong>+39% merges</strong>, no rise in reverts · 32 firms<sup class="ref-mark">2</sup></div>

<div><strong>METR 2026:</strong> 18% (returning) / 4% (new) faster, both intervals cross zero<sup class="ref-mark">3</sup></div>

</div>

<div v-click class="border-l-4 border-blue-500 pl-4">

<div class="font-bold pb-2">Two Copilot studies</div>

<div class="pb-2"><strong>55.8% faster</strong> · 1 lab task, 95 freelancers, 2023<sup class="ref-mark">4</sup></div>

<div><strong>+26% tasks</strong> · 4,867 developers, 3 field experiments<sup class="ref-mark">5</sup></div>

</div>

</div>

<div class="refs-bar">

<div><sup class="ref-mark">1</sup> <a href="https://arxiv.org/abs/2607.01418" target="_blank" rel="noopener">Murphy-Hill et al., Microsoft</a>, Jul 2026, observational</div>
<div><sup class="ref-mark">2</sup> <a href="https://suproteem.is/assets/files/agents.pdf" target="_blank" rel="noopener">Sarkar, Chicago Booth</a>, May 2026, author visited Cursor</div>
<div><sup class="ref-mark">3</sup> <a href="https://metr.org/blog/2026-02-24-uplift-update/" target="_blank" rel="noopener">METR</a>, Feb 2026, 57 developers</div>
<div v-click="1"><sup class="ref-mark">4</sup> <a href="https://arxiv.org/abs/2302.06590" target="_blank" rel="noopener">Peng et al.</a>, Feb 2023</div>
<div v-click="1"><sup class="ref-mark">5</sup> <a href="https://pubsonline.informs.org/doi/10.1287/mnsc.2025.00535" target="_blank" rel="noopener">Cui et al.</a>, Feb 2026, three field experiments</div>

</div>

<!--
I start with the evidence that agents help.

Microsoft gave Claude Code and Copilot CLI to tens of thousands of engineers early this year.
Adopters merged about 24% more pull requests than a synthetic control predicted, and the lift held
for as long as the authors watched. The authors note that a merged pull request does not equal
delivered value, and Microsoft sells Copilot, so keep both in mind.

A Chicago Booth study of firms around the release of Cursor's agent found 39% more merges and no
rise in reverts. The author was a visiting researcher at Cursor, and he notes that the study does
not measure long-term quality.

METR reran the experiment I describe later in this section. The new estimates point toward a
speedup, but both confidence intervals cross zero, and METR calls the data "only very weak
evidence", because many developers refused to take tasks without AI.

[click] The "55.8% faster" figure shows up in many talks and posts. It comes from a lab study of
freelancers writing one HTTP server. The field experiments at Microsoft, Accenture and a Fortune
100 company are a separate, much larger study, and they found 26% more completed tasks. Both
results hold; they measure different things, and articles merge them into one.
-->

---

# <mdi-chart-line class="text-green-500" /> Merged Pull Requests at Microsoft

<div class="text-sm text-center opacity-80">

Adopters (solid) against a synthetic control built from non-adopters (dashed), Nov 2025 to Apr 2026.

</div>

<img src="/fig-microsoft-merged-prs.png" class="w-full rounded-lg mt-2 bg-white p-2 shadow" />

<Credit class="text-center" license="CC BY 4.0, chart title removed">Murphy-Hill, Butler, Savelieva (Microsoft), "Adoption and Impact of Command-Line AI Coding Agents", Fig. 6, <a href="https://arxiv.org/abs/2607.01418" target="_blank" rel="noopener">arXiv 2607.01418</a></Credit>

<!--
The chart shows the Microsoft result. The solid line is engineers who adopted the agents,
the dashed line is what the model predicts they would have merged without them, and the gap
after January is the 24%. The deep dips are weekends. As the authors note, they counted
output and did not measure value.
-->

---

# <mdi-trending-down class="text-orange-500" /> The Costs, Measured

<div class="grid grid-cols-2 gap-6 pt-2 text-sm">

<div>

<div class="pb-3"><strong>Velocity faded, complexity stayed:</strong> warnings +30%, complexity +41%<sup class="ref-mark">1</sup></div>

<div><strong>Graded vs. merged:</strong> ~24 points below the grader; maintainers merged 68% of human patches<sup class="ref-mark">2</sup></div>

</div>

<div>

<div class="pb-3"><strong>Review falls behind:</strong> PRs merged without review +76.3%, up from +31.3%<sup class="ref-mark">3</sup> · <span class="whitespace-nowrap">copy-paste</span> 8.3% → 12.3%<sup class="ref-mark">4</sup></div>

<div v-click><strong>Felt vs. measured:</strong> 19% slower, felt 20% faster<sup class="ref-mark">5</sup></div>

</div>

</div>

<div v-click="1" class="pt-3 text-xs opacity-60">

4 maintainers reviewed the METR PRs · GitClear to 2024: moved lines 25% → under 10%

</div>

<div class="refs-bar">

<div><sup class="ref-mark">1</sup> <a href="https://arxiv.org/abs/2511.04427" target="_blank" rel="noopener">He et al., CMU</a>, MSR 2026</div>
<div><sup class="ref-mark">2</sup> <a href="https://metr.org/notes/2026-03-10-many-swe-bench-passing-prs-would-not-be-merged-into-main/" target="_blank" rel="noopener">METR</a>, Mar 2026, 296 agent PRs</div>
<div><sup class="ref-mark">3</sup> <a href="https://www.faros.ai/blog/ai-speed-trap-takeaways" target="_blank" rel="noopener">Faros Q3 2026</a>, vendor telemetry</div>
<div><sup class="ref-mark">4</sup> <a href="https://www.gitclear.com/ai_assistant_code_quality_2025_research" target="_blank" rel="noopener">GitClear</a>, Feb 2025, 211M changed lines (vendor)</div>
<div v-click="1"><sup class="ref-mark">5</sup> <a href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/" target="_blank" rel="noopener">METR</a>, Jul 2025</div>

</div>

<!--
For the costs, I apply the same check on what each study counted.

Carnegie Mellon compared open source projects that adopted Cursor with similar projects that did
not. Lines added jumped at first and then fell back, while static-analysis warnings and code
complexity went up and stayed up; warnings rose about 30% and complexity about 41%. The added complexity then predicted
slower work later on. This one is peer reviewed and independent.

METR asked maintainers of scikit-learn, Sphinx and pytest to review agent pull requests that passed
the SWE-bench grader, and the maintainers' merge rate came out about 24 points below the grader's pass rate.
In a control run, the same maintainers merged 68% of the original human patches. Human
review is noisy too, and a patch that passes the tests can still fail review.

Faros, the vendor from the adoption slide, reports a 76.3% rise in pull requests merged with no
review, up from the 31.3% rise in its report six months earlier. That figure is a growth rate;
Faros gives no share of all pull requests. Faros also found that pull requests got bigger.

GitClear, also a vendor, found copy-pasted lines rising from 8.3% to 12.3%, and moved
lines, their proxy for refactoring, falling from 25% to under 10% by 2024.

[click] In early 2025 METR timed experienced open source developers using the tools of that time.
They took 19% longer with AI and believed they had been 20% faster. The sample is small and the
tools are old, and the result still shows a gap between feeling and measurement.
-->

---

# <mdi-chart-timeline-variant class="text-orange-500" /> Cursor Adoption: Speed Fades, Complexity Stays

<div class="text-sm text-center opacity-80">

Effect by month relative to adoption. Filled dots are significant.

</div>

<img src="/fig-cmu-cursor-effects.png" class="w-full rounded-lg mt-2 bg-white p-2 shadow" />

<Credit class="text-center" license="CC BY 4.0, cropped to three of five panels">He, Miller, Agarwal, Kästner, Vasilescu, "Speed at the Cost of Quality", MSR 2026, Fig. 3, <a href="https://arxiv.org/abs/2511.04427" target="_blank" rel="noopener">arXiv 2511.04427</a></Credit>

<!--
This chart shows the Carnegie Mellon result. Commits jump in the month a project adopts Cursor and
fall back to the baseline by the second month. Static analysis warnings and code complexity
rise at the same point; warnings stay up through month five, and complexity through month six.
These are open source projects on 2025 tools, so treat it as one data point. The chart shows
speed and quality moving in different directions.
-->

---

# <mdi-timer-sand class="text-red-500" /> Forecasts Against the Stopwatch

<div class="text-sm text-center opacity-80">

METR, early 2025: 16 experienced developers, Cursor with Claude 3.5 and 3.7 Sonnet. Negative means faster.

</div>

<img src="/fig-metr-misjudge-speedup.png" class="h-80 mx-auto rounded-lg mt-2 bg-white p-2 shadow" />

<Credit class="text-center" license="CC BY 4.0">Becker, Rush, Barnes et al. (METR), "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", Fig. 1, <a href="https://arxiv.org/abs/2507.09089" target="_blank" rel="noopener">arXiv 2507.09089</a></Credit>

<!--
Economists, machine learning experts, and the developers themselves all expected a speedup of
20 to 40%. On the stopwatch, the tasks took 19% longer. I distrust self-reported numbers because of
that gap between belief and measurement. The same group's 2026 rerun pointed toward a speedup, which I
showed a few slides ago.
-->

---

# <mdi-scale-unbalanced class="text-purple-500" /> Four Studies, Four Units

<div class="text-sm pt-4">

| Study              | Unit counted            | Result          | Tools          |
| ------------------ | ----------------------- | --------------- | -------------- |
| Microsoft, 2026    | Merged pull requests    | +24%            | 2026 agents    |
| METR, 2025 to 2026 | Time on a fixed task    | 19% slower to ~18% faster (n.s.) | 2025 and 2026 |
| CMU, 2026          | Warnings and complexity | +30% and +41%   | Cursor, 2025   |
| METR survey<sup class="ref-mark">1</sup> | Self-reported speed | 3x | 2026 |

</div>

<div v-click class="pt-6 text-lg text-center">

Each study counts a different unit. Check the unit before you quote the number.

</div>

<div class="refs-bar">

<div><sup class="ref-mark">1</sup> <a href="https://metr.org/blog/2026-05-11-ai-usage-survey/" target="_blank" rel="noopener">METR self-report survey</a>, May 2026, n=349, median self-reported speed 3x</div>

</div>

<!--
You will find studies that say agents make developers faster and studies that say they make them
slower, and most of them measured something real. Put the gains and the costs side by side and
read the second column of this table, the thing each study counts. Microsoft counted merged pull
requests. METR timed a fixed task, first on 2025 tools and then on 2026 tools. Carnegie Mellon
counted warnings and complexity over months. A survey asks people how they feel, and METR's own
survey this May found a median self-reported speedup of 3 times, while its 2025 timing study
found a 40-point gap between feeling and measurement.

[click] Pick a different unit and you get a different answer. Counting pull requests rewards
small pull requests and optional work, timing a task holds the scope fixed, and counting warnings
shows costs months later. Check the unit before you quote the number to your manager.

My current reading is that output volume goes up, time on a fixed task remains an open
question, and quality costs appear later in the few studies that look for them.
-->

---

# <mdi-eye-off-outline class="text-red-500" /> The Quality Mirage

<div class="grid grid-cols-3 gap-6 pt-10 text-center">

<div>
 <div class="text-5xl font-bold text-green-700 dark:text-green-500">94%</div>
 <div class="text-sm pt-2 opacity-80">rate AI code <em>higher</em> quality than human code at&nbsp;review<sup class="ref-mark">1</sup></div>
</div>

<div v-click>
 <div class="text-5xl font-bold text-red-500">78%</div>
 <div class="text-sm pt-2 opacity-80">report more production incidents<sup class="ref-mark">1</sup></div>
</div>

<div v-after>
 <div class="text-5xl font-bold text-orange-700 dark:text-orange-500">86%</div>
 <div class="text-sm pt-2 opacity-80">report more <span class="whitespace-nowrap">senior-engineer</span> rework<sup class="ref-mark">1</sup></div>
</div>

</div>

<div v-click class="pt-8 text-center text-lg">

Reads well at review; costs more in production.

</div>

<div v-click="2" class="pt-3 text-xs opacity-60 text-center">

62% say their teams often ship AI code without line-by-line checks

</div>

<div class="refs-bar">

<div><sup class="ref-mark">1</sup> <a href="https://newrelic.com/resources/report/2026-state-of-ai-coding" target="_blank" rel="noopener">New Relic State of AI Coding</a>, Jun 2026, vendor-commissioned survey of 200 US tech leaders, manager level and up, self-reported</div>

</div>

<!--
These numbers come from a survey, so I name its source first. New Relic commissioned it, New
Relic sells observability, and the respondents are 200 US technology leaders, manager level and
above, reporting on their own organisations.

94% of them rate AI-generated code higher quality than human code when they review it.

[click] 78% of the same managers report more incidents once that code ships, and most also report
more rework for their senior engineers.

[click] Reviewers who check for plausibility pass code that reads well and still costs more in
production. 62% also say their teams often ship AI code without line-by-line checks.
-->

---

# <mdi-receipt-text class="text-orange-500" /> Passing Tests Does Not Prove Soundness

<div class="text-lg pt-3">

14 May: the rewrite merges. Hours later:

</div>

<div class="text-xl italic pt-3 pl-4 border-l-4 border-orange-500">

"PathString::slice dangling reference UB - add Miri to CI"

</div>

<div v-click class="pt-5">

UB reachable from safe Rust<sup class="ref-mark">1</sup>; full suite passed, nothing skipped<sup class="ref-mark">2</sup>

</div>

<div v-after class="pt-4">

17 May: Miri test script added, related aliasing bug fixed<sup class="ref-mark">3</sup>

</div>

<div class="refs-bar">

<div v-click="1"><sup class="ref-mark">1</sup> <a href="https://github.com/oven-sh/bun/issues/30719" target="_blank" rel="noopener">bun#30719</a>, opened 14 May 2026, closed 17 May 2026</div>
<div v-click="1"><sup class="ref-mark">2</sup> <a href="https://bun.com/blog/bun-in-rust" target="_blank" rel="noopener">Jarred Sumner: Rewriting Bun in Rust</a>, Jul 2026</div>
<div v-click="1"><sup class="ref-mark">3</sup> <a href="https://github.com/oven-sh/bun/pull/30876" target="_blank" rel="noopener">bun#30876</a>, <code>bun run rust:miri</code> and HiveArray aliasing fix</div>

</div>

<!--
The Bun story from the start of the talk has a second half, and it belongs in this section.

The rewrite merged on the fourteenth of May. Hours later an outside user filed an issue: a
dangling reference in PathString, undefined behaviour reachable from safe Rust. Safe Rust
should rule out that class of bug.

[click] That code passed the full test suite I showed you earlier, with nothing skipped, and it
was still unsound. Tests prove behaviour on the cases someone wrote down, and undefined
behaviour can hide outside those cases.

Three days later Jarred closed the issue with a change that added a script to run Miri, the Rust
interpreter that detects undefined behaviour, and fixed a related aliasing bug it found. That change
did not run Miri in CI and left that step to a follow-up. Two weeks after that, the Bun team deleted PathString. A bot
opened a different fix that marked the API unsafe; the maintainers closed it without merging.
Jarred wrote: "please do continue to file new issues about any bugs or unsound behavior you find."

There is a larger argument about that rewrite, and some of it is partisan. I will not
settle it from up here; my point is narrower. A person caught this after the tests
passed, and the lasting fix was a tool built for that class of bug. pipdeptree forbids unsafe
code in its own crate, which narrows the risk, but its CI does not run Miri either.
-->

---

# <mdi-gavel class="text-orange-500" /> CPython Tightened its Guidance in Two Months

<div class="grid grid-cols-2 gap-8 pt-6">

<div>
 <div class="text-sm opacity-60">May 2026</div>
 <div class="pt-1">Submitter responsible. Disclosure "appreciated, while not required."<sup class="ref-mark">1</sup></div>
</div>

<div v-click>
 <div class="text-sm opacity-60">Jul 2026</div>
 <div class="pt-1">Close unproductive issues and PRs <strong>without explanation</strong>, AI or not<sup class="ref-mark">2</sup></div>
</div>

</div>

<div v-after class="pt-10 text-xl italic pl-4 border-l-4 border-orange-500">

"We want to teach humans, not LLMs. Maintainer time is too limited to owe that effort by default…"

<div class="text-sm not-italic opacity-60 pt-1">Stan Ulbrych, in the pull request description</div>

</div>

<div v-click class="pt-6 text-sm">

Same core: LLVM · Linux kernel · Fedora · virtualenv<sup class="ref-mark">3</sup>

</div>

<div class="refs-bar">

<div><sup class="ref-mark">1</sup> <a href="https://github.com/python/devguide/pull/1778" target="_blank" rel="noopener">devguide PR #1778</a>, merged May 2026</div>
<div v-click="1"><sup class="ref-mark">2</sup> <a href="https://github.com/python/devguide/pull/1860" target="_blank" rel="noopener">devguide PR #1860</a>, merged Jul 2026</div>
<div v-click="2"><sup class="ref-mark">3</sup> <a href="https://llvm.org/docs/AIToolPolicy.html" target="_blank" rel="noopener">LLVM</a> Jan 2026; <a href="https://docs.kernel.org/process/coding-assistants.html" target="_blank" rel="noopener">kernel</a> Dec 2025; <a href="https://lwn.net/Articles/1042947/" target="_blank" rel="noopener">Fedora</a> Oct 2025; <a href="https://github.com/pypa/virtualenv/pull/3239" target="_blank" rel="noopener">virtualenv #3239</a> Sep 2026</div>

</div>

<!--
CPython met generated volume with finite review time, and it has less slack than most of our
projects.

In May, CPython rewrote its guidance on AI tools. The person who submits is responsible for the
content, whatever produced it, and contributors may disclose AI use but do not have to, which is a
liberal position.

[click] Two months later, after hallway conversations at the Language Summit, the devguide added
two words to an existing rule: maintainers may close issues and pull requests that are not useful
or productive, and now they may do so "without explanation." The rule already said "regardless of
whether AI tools were used or not," so it does not single out AI.

Stan Ulbrych gave the reasoning in the pull request description. If an agent generated a
submission, an explanation may reach only that agent. He wrote, "We want to teach humans, not LLMs.
Maintainer time is too limited to owe that effort by default."

[click] Most projects that wrote a policy this year settled on the same core: they allow AI use,
hold the submitter responsible, and expect the submitter to explain the change. LLVM, the Linux
kernel and Fedora wrote such policies in the past year, and the kernel asks for an
Assisted-by trailer. In September I merged the same core into virtualenv: AI help is fine, the
contributor is the author, and a human reads everything submitted. Projects wrote these policies
to protect maintainers' review time.
-->

---

# <mdi-bug-check class="text-green-500" /> AI Bug Reports Help When a Person Checks Them First

<div class="grid grid-cols-2 gap-8 pt-4">

<div>

<div class="text-lg font-bold pb-2"><mdi-close-circle class="text-red-500" /> curl ended its bug bounty, Jan 2026</div>

<div class="text-sm opacity-80">Valid reports: 1 in 7 → under 1 in 20<sup class="ref-mark">1</sup></div>

</div>

<div v-click>

<div class="text-lg font-bold pb-2"><mdi-check-circle class="text-green-500" /> The same tools, checked by a person</div>

<div class="text-sm opacity-80"><strong>~50 curl fixes</strong> from Joshua Rogers' AI-assisted reports<sup class="ref-mark">2</sup></div>

<div class="text-sm opacity-80 pt-2"><strong>575 <span class="whitespace-nowrap">C-API</span> bugs</strong>, 44 extensions, 14 projects, 10 to 15% false positives<sup class="ref-mark">3</sup></div>

</div>

</div>

<div v-click="1" class="pt-3 text-xs opacity-60">

curl bounty lifetime: $100,000+ for 87 vulnerabilities · Rogers from Sep 2025 · Diniz Apr 2026, ~1M lines

</div>

<div class="refs-bar">

<div><sup class="ref-mark">1</sup> <a href="https://daniel.haxx.se/blog/2026/01/26/the-end-of-the-curl-bug-bounty/" target="_blank" rel="noopener">The end of the curl bug bounty</a>, Jan 2026</div>
<div v-click="1"><sup class="ref-mark">2</sup> <a href="https://www.theregister.com/2025/10/02/curl_project_swamped_with_ai/" target="_blank" rel="noopener">The Register</a>, Oct 2025</div>
<div v-click="1"><sup class="ref-mark">3</sup> <a href="https://discuss.python.org/t/systematically-finding-bugs-in-python-c-extensions-575-confirmed-so-far/106875" target="_blank" rel="noopener">Systematically finding bugs in Python C extensions</a>, Apr 2026</div>

</div>

<!--
Both sides show up in one community, and I close this section with them.

Daniel Stenberg closed the curl bug bounty in January. By 2025 fewer than one report in twenty
described a real problem, down from about one in seven.

[click] Over the same months two people used similar tools to the opposite effect. Joshua Rogers
sent curl reports from AI-assisted scanners, and the curl team merged about 50 fixes from them; Stenberg called them
"actually, truly awesome findings". On discuss.python.org, Daniel Diniz ran a set of Claude Code
agents over Python C extensions and reported about 575 confirmed bugs: reference counts, error
paths, crashes. Maintainers of projects such as Pillow, lxml and Cython merged fixes, and they wrote
many of those fixes themselves from his reports. He also published his own false-positive rate, 10 to 15%.

The Pillow maintainer called them "one of the better sets of reports that we've gotten."

Rogers and Diniz checked each finding and attached a reproducer before a maintainer saw it. In the
next section I cover that work around the tool.
-->
