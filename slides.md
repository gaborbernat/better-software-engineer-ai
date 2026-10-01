---
theme: default
favicon: /favicon.svg
title: "How to be a Better Software Engineer in the World of AI Agents"
author: "Bernat Gabor"
info: |
  AI coding agents help with some engineering work, and other work still needs
  human judgment. This talk separates the two and shows how to bring your team
  along, with practices that carry across tools, drawn from a year of shipping
  open source with GitHub Copilot, Claude Code, and Codex.
titleTemplate: "%s"
comark: true
canvasWidth: 1080
aspectRatio: 16/9
colorSchema: auto
download: true
exportFilename: better-software-engineer-ai
export:
  withToc: true
seoMeta:
  ogTitle: How to be a Better Software Engineer in the World of AI Agents
  ogDescription: Cheaper code makes engineering judgment more valuable. PyBay 2026.
  ogImage: auto
  twitterCard: summary_large_image
selectable: true
drawings:
  enabled: false
  persist: false
transition: slide-left
duration: 45min
timer: countdown
wakeLock: true
layout: cover
---

<h1 highlight> 🤖 How to be a Better Software Engineer in the World of AI Agents </h1>

<h2 highlight> Cheaper code makes engineering judgment more valuable <circle-flags-us-ca class="inline" /> </h2>

#### [<mdi-github /> GitHub](https://github.com/gaborbernat/) / [<mdi-heart class="text-red-500" /> Sponsor](https://github.com/sponsors/gaborbernat) / [<logos-mastodon-icon /> Mastodon](https://fosstodon.org/@gaborbernat) / [<carbon-logo-x /> X](https://x.com/gjbernat/) / [<logos-bluesky /> Bluesky](https://bsky.app/profile/gjbernat.bsky.social) / [<logos-python /> PyPI](https://pypi.org/user/gaborbernat/) / [<mdi-linkedin class="text-blue-500" /> LinkedIn](https://www.linkedin.com/in/gaborbernat/)

<div class="w-fit mx-auto mt-[10px] bg-white rounded-xl p-3">
  <QRCode class="!pt-0" data="https://gaborbernat.github.io/better-software-engineer-ai/" :size="220" />
</div>

<!--
This talk is about staying a strong engineer while coding agents do more of the typing. Agents made code cheaper to
produce, and checking that the code is correct costs what it did, so more of our work goes into that checking.

Over the next forty-five minutes I will show you what got cheaper, what the evidence says in both directions, the four
skills you keep, the practices that help, and how to bring a team along without turning it into a mandate.
Agents are good at some things and bad at others, and I will show you both.

The QR code goes to the slides and all the references in them, so scan it now if you want to follow along.
-->

---
layout: intro
---

# Bernát Gábor

<div class="grid grid-cols-[auto_1fr] gap-6 items-center pt-2">
<div>
 <img src="/me.webp" class="rounded-full w-40 h-40 shadow-lg" />
 <Credit class="text-center" license="CC BY 4.0">Bernát Gábor</Credit>
</div>
<div>

- <mdi-github /> [gaborbernat](https://github.com/gaborbernat) · [bernat.tech](https://bernat.tech)
- <logos-python /> PyPA and tox-dev: [virtualenv](https://github.com/pypa/virtualenv), [tox](https://github.com/tox-dev/tox), [pipx](https://github.com/pypa/pipx), [platformdirs](https://github.com/tox-dev/platformdirs), [pipdeptree](https://github.com/tox-dev/pipdeptree)
- <mdi-briefcase class="text-blue-500" /> Bloomberg, Developer Experience
- <mdi-robot class="text-orange-500" /> GitHub Copilot since early 2025; Claude Code since late 2025; Codex since Feb 2026

</div>
</div>

<!--
I maintain virtualenv and pipx under the Python Packaging Authority, and tox, platformdirs, and pipdeptree under
tox-dev. Users download them about 800 million times a month. My day job is developer experience at Bloomberg.

I started using GitHub Copilot on my open source work in early 2025, moved to Claude Code late that year, and added
Codex in February 2026. Since then about 90% of the open source code I have shipped came out of an agent. This talk is
about the work I did around the agent to make that code fit to merge.
-->

---
src: ./talk-01-cost-moved.md
---

---
src: ./talk-02-bar-held.md
---

---
src: ./talk-03-the-gap.md
---

---
src: ./talk-04-working-the-gap.md
---

---
src: ./talk-05-team-and-monday.md
---

---

# <mdi-book-multiple class="text-blue-500" /> Resources

<div class="grid grid-cols-3 gap-4 text-[9px] leading-tight">

<div>

<mdi-chart-box class="text-blue-500" /> **Data and surveys**
- [Sonar State of Code](https://www.sonarsource.com/resources/developer-survey-report/) 2026
- [Stack Overflow](https://survey.stackoverflow.co/2025/ai) 2025
- [Faros Q3: the speed trap](https://www.faros.ai/blog/ai-speed-trap-takeaways) Sep 2026
- [Faros: lab vs. reality](https://www.faros.ai/blog/lab-vs-reality-ai-productivity-study-findings) Jul 2025
- [New Relic: AI coding](https://newrelic.com/resources/report/2026-state-of-ai-coding) 2026
- [GitClear code quality](https://www.gitclear.com/ai_assistant_code_quality_2025_research) Feb 2025
- [GitClear maintainability gap](https://www.gitclear.com/the_ai_code_quality_maintainability_gap) Jan 2026
- [Real-SWE benchmark](https://withspecific.com/benchmarks/real-swe) Sep 2026
- [Agent permission fatigue](https://scalex.dev/blog/ai-agent-permissions-stats/) Aug 2026
- [Stanford: Canaries in the Coal Mine](https://digitaleconomy.stanford.edu/app/uploads/2026/08/Canaries_August2026.pdf) Aug 2026

<mdi-flask class="text-purple-500" /> **Studies**
- [Peng et al.: Copilot RCT](https://www.microsoft.com/en-us/research/publication/the-impact-of-ai-on-developer-productivity-evidence-from-github-copilot/) Feb 2023
- [Cui et al.: three field experiments](https://pubsonline.informs.org/doi/10.1287/mnsc.2025.00535) 2026
- [METR: early-2025 study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) Jul 2025
- [METR: uplift update](https://metr.org/blog/2026-02-24-uplift-update/) Feb 2026
- [METR: passing PRs maintainers reject](https://metr.org/notes/2026-03-10-many-swe-bench-passing-prs-would-not-be-merged-into-main/) Mar 2026
- [Microsoft: CLI coding agents](https://arxiv.org/abs/2607.01418) Jul 2026
- [Sarkar: agents and higher-order work](https://suproteem.is/assets/files/agents.pdf) 2025
- [He et al.: Cursor velocity and complexity](https://arxiv.org/abs/2511.04427) Nov 2025
- [ImpossibleBench](https://arxiv.org/abs/2510.20270) Oct 2025
- [ETH: evaluating AGENTS.md](https://arxiv.org/abs/2602.11988) Feb 2026
- [Vercel: AGENTS.md vs. skills](https://vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals) Jan 2026
- [Chroma: context rot](https://www.trychroma.com/research/context-rot) Jul 2025
- [Shen and Tamkin: skill formation](https://arxiv.org/abs/2601.20245) Jan 2026
- [MIT: your brain on ChatGPT](https://www.media.mit.edu/publications/your-brain-on-chatgpt/) Jun 2025

</div>

<div>

<mdi-newspaper class="text-green-500" /> **Workflow and craft**
- [Boris Tane: how I use Claude Code](https://boristane.com/blog/how-i-use-claude-code/) Feb 2026
- [Boris Tane: context engineering](https://boristane.com/blog/context-engineering) Jun 2025
- [Anthropic: context engineering](https://claude.dev/blog/the-new-rules-of-context-engineering-for-claude-5-generation-models/) Jul 2026
- [Anthropic: prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)
- [Claude Code best practices](https://code.claude.com/docs/en/best-practices)
- [Simon Willison: agentic patterns](https://simonwillison.net/guides/agentic-engineering-patterns/)
- [Willison: relentlessly proactive](https://simonwillison.net/2026/Jun/11/fable-is-relentlessly-proactive/) Jun 2026
- [Martin Fowler: TDD and AI](https://martinfowler.com/fragments/2026-02-18.html) Feb 2026
- [Böckeler: spec-driven tools](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html) Oct 2025
- [Stenström: JustHTML with agents](https://friendlybit.com/python/writing-justhtml-with-coding-agents/) Dec 2025
- [LLMs write plausible code](https://blog.katanaquant.com/p/your-llm-doesnt-write-correct-code) Mar 2026
- [The harness problem](https://stencil.so/blog/the-harness-problem) Feb 2026
- [HarnessTax](https://harnesstax.github.io/) Sep 2026
- [Token overhead measured](https://systima.ai/blog/claude-code-vs-opencode-token-overhead) Jul 2026
- [Auto mode by default](https://claude.com/blog/auto-mode-default-in-claude-code) Aug 2026
- [Docker Sandboxes](https://www.docker.com/products/docker-sandboxes/) Jan 2026
- [Thoughtworks: codebase cognitive debt](https://www.thoughtworks.com/radar/techniques/codebase-cognitive-debt) Apr 2026
- [Litt: understanding is the bottleneck](https://geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck) Jul 2026

</div>

<div>

<mdi-account-hard-hat class="text-orange-500" /> **At scale**
- [Bun: rewriting in Rust](https://bun.com/blog/bun-in-rust) Jul 2026
- [Shopify: back to native](https://shopify.engineering/back-to-native) Sep 2026
- [pipdeptree 4.0.0](https://github.com/tox-dev/pipdeptree/pull/618) Jul 2026
- [Vjeux: 100k lines TS to Rust](https://blog.vjeux.com/2026/analysis/porting-100k-lines-from-typescript-to-rust-using-claude-code-in-a-month.html) Jan 2026
- [Crawshaw: 25% to 90%](https://crawshaw.io/blog/eight-more-months-of-agents) Feb 2026
- [Terry Tao: coding agents](https://terrytao.wordpress.com/2026/07/11/old-and-new-apps-via-modern-coding-agents/) Jul 2026
- [StrongDM software factory](https://simonwillison.net/2026/Feb/7/software-factory/) Feb 2026
- [OpenAI: harness engineering](https://openai.com/index/harness-engineering/) Feb 2026
- [Which tools agents choose](https://armature.tech/blog/which-tools-coding-agents-install) Sep 2026
- [Stanford CS336 agent policy](https://github.com/stanford-cs336/assignment1-basics/blob/main/CLAUDE.md) Apr 2026

<logos-python /> **Python and open source**
- [CPython: documenting agent use](https://discuss.python.org/t/should-claude-codes-usage-be-described-in-the-code-docs-somewhere/107969) Jun 2026
- [CPython devguide: AI tools](https://devguide.python.org/getting-started/ai-tools/) May 2026
- [575 bugs in C extensions](https://discuss.python.org/t/systematically-finding-bugs-in-python-c-extensions-575-confirmed-so-far/106875) Apr 2026
- [How AWS powers PyPI](https://blog.pypi.org/posts/2026-08-14-how-aws-powers-pypi-and-the-psf/) Aug 2026
- [The end of the curl bug bounty](https://daniel.haxx.se/blog/2026/01/26/the-end-of-the-curl-bug-bounty/) Jan 2026
- [virtualenv AI policy](https://github.com/pypa/virtualenv/pull/3239) Sep 2026

<mdi-alert class="text-red-500" /> **Cautionary**
- [Boris Tane: slop creep](https://boristane.com/blog/slop-creep-enshittification-of-software) Mar 2026
- [The bottleneck was never the code](https://www.thetypicalset.com/blog/thoughts-on-coding-agents) Apr 2026
- [AI slop kills communities](https://rmoff.net/2026/05/06/ai-slop-is-killing-online-communities/) May 2026
- [Amazon requires sign-off](https://arstechnica.com/ai/2026/03/after-outages-amazon-to-make-senior-engineers-sign-off-on-ai-assisted-changes/) Mar 2026
- [Quality regression postmortem](https://www.anthropic.com/engineering/april-23-postmortem) Apr 2026
- [Why AI has not replaced engineers](https://www.normaltech.ai/p/why-ai-hasnt-replaced-software-engineers) Jun 2026
- [Forgetting how to code](https://techtrenches.dev/p/the-west-forgot-how-to-make-things) Apr 2026
- [Check Point: CVE-2025-59536](https://research.checkpoint.com/2026/rce-and-api-token-exfiltration-through-claude-code-project-files-cve-2025-59536/) Feb 2026
- [Anthropic: incidents in cybersecurity evals](https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals) Jul 2026
- [Anthropic: alignment assessment of incidents](https://www.anthropic.com/research/alignment-assessment-cybersecurity-incidents) Sep 2026

</div>

</div>

<div class="pt-2 text-center text-sm">

<mdi-github /> [github.com/gaborbernat/better-software-engineer-ai](https://github.com/gaborbernat/better-software-engineer-ai)

</div>

<!--
This slide lists everything I cited. The left column holds the surveys and the studies, the middle holds workflow and
craft, and the right holds the large projects, the Python and open source sources, and the cautionary reading. For a
practical starting point, Boris Tane's post on how he uses Claude Code describes a full workflow.

You do not need to photograph this; it is all on the site behind the QR code.
-->

---
layout: center
class: text-center
---

# Thank you

<div class="pt-8 flex items-center justify-center gap-12">

<div class="w-fit bg-white rounded-xl p-3">
  <QRCode class="!pt-0" data="https://gaborbernat.github.io/better-software-engineer-ai/" :size="200" />
</div>

<div>
  <div class="text-xl opacity-75">
    Slides and links:
    <a href="https://gaborbernat.github.io/better-software-engineer-ai/">gaborbernat.github.io/better-software-engineer-ai</a>
  </div>
  <div class="text-sm opacity-60 pt-2">
    <a href="https://bernat.tech">bernat.tech</a>
  </div>
</div>

</div>

<div class="pt-6 text-sm opacity-70">

Find me in the hallway.

</div>

<!--
Thank you for staying for the last talk of the day. I will be in the hallway if you want to argue with any of it.
-->
