---
layout: section
---

# Your team, and Monday

<div class="text-xl opacity-75 pt-4">

Team adoption, and your first steps next week.

</div>

<!--
In this last section I cover the team, and then what you can start on Monday. Personal practice
is the easier half; a team takes longer.
-->

---

# <mdi-heart class="text-red-500" /> Support Each Other Through the Shift

<div class="grid grid-cols-2 gap-8 pt-8">

<div class="text-center">
 <mdi-rocket-launch class="text-4xl text-blue-500" />
 <div class="font-bold pt-3">Hand off the boilerplate</div>
 <div class="text-sm opacity-75 pt-2">People keep design and judgment</div>
</div>

<div class="text-center">
 <mdi-share-variant class="text-4xl text-green-500" />
 <div class="font-bold pt-3">Share what works</div>
 <div class="text-sm opacity-75 pt-2">Post prompts and failure spots</div>
</div>

</div>

<!--
I start with the people and leave the tooling for later.

The agent takes the boilerplate and the scaffolding. Architecture, including the choice of
abstraction, and review for correctness stay with you and take a larger share of your week; that
work was the job before agents arrived.

Share what works. If a teammate finds a prompt that lands or a place where the agent keeps
failing, post it in a shared channel or a short weekly slot so the whole team has it.
-->

---

# <mdi-shield-account class="text-green-500" /> Psychological Safety Beats Mandates

<div class="pt-8 text-lg">

<strong>Mandates:</strong> Shopify (Apr 2025)<sup class="ref-mark">1</sup> · Coinbase (Aug 2025)<sup class="ref-mark">2</sup> · no published outcome data

</div>

<div class="pt-6 text-lg">

<strong>Safe experiments:</strong> low stakes · permission to fail · no leaderboard

</div>

<div class="pt-6 text-lg">

<strong>Listen to the sceptic:</strong> a real failure, a quality bar

</div>

<div class="refs-bar">

<div><sup class="ref-mark">1</sup> <a href="https://x.com/tobi/status/1909251946235437514" target="_blank" rel="noopener">Tobi Lütke's memo to Shopify staff</a>, Apr 2025</div>
<div><sup class="ref-mark">2</sup> <a href="https://techcrunch.com/2025/08/22/coinbase-ceo-explains-why-he-fired-engineers-who-didnt-try-ai-immediately" target="_blank" rel="noopener">Coinbase CEO on AI adoption</a>, Aug 2025</div>

</div>

<!--
You cannot order people to adopt a tool and get good results. A person who feels judged for
asking a basic question, such as "how do I even start", stops asking and opts out, and that person
can be a strong engineer protecting a quality bar.

Some companies tried the mandate. In April 2025 Tobi Lütke wrote to Shopify staff that
reflexive AI usage is now a baseline expectation. In August 2025 Coinbase's CEO said he fired
engineers who did not try the tools right away. I found no outcome data from either company,
so we do not know what the mandates bought. The DORA finding from earlier applies here. AI amplifies
the practices a team has, and a mandate leaves those practices unchanged.

Make experimenting safe. Give people a low-stakes place to try, permission to
fail, and no leaderboard of who adopted fastest. People pick up curiosity from each other, and
under pressure they hide their experiments.

Some teammates read the headlines about replacement and worry, and others would ship
whatever the agent produces. The sceptic on your team is often right about something concrete,
a failure they hit or a standard they refuse to lower. Listen for that specific thing. Turn it
into a guardrail your team needs, and ask the person who raised it to review for it.
-->

---

# <mdi-account-multiple-check class="text-blue-500" /> Build Shared Practice

<div class="grid grid-cols-3 gap-6 pt-8">

<div class="text-center">
 <mdi-account-supervisor class="text-4xl text-blue-500" />
 <div class="font-bold pt-3">Pair on the first task</div>
 <div class="text-sm opacity-75 pt-2">Two people, one agent, familiar work</div>
</div>

<div class="text-center">
 <mdi-comment-account class="text-4xl text-green-500" />
 <div class="font-bold pt-3">Narrate the decisions</div>
 <div class="text-sm opacity-75 pt-2">Say why: plan, reject, restart, ask for evidence</div>
</div>

<div class="text-center">
 <mdi-file-search class="text-4xl text-purple-500" />
 <div class="font-bold pt-3">Review the first diff together</div>
 <div class="text-sm opacity-75 pt-2">Learner explains; partner checks contract, tests, scope</div>
</div>

</div>

<!--
In onboarding you transfer judgment; prompt snippets are the smaller part of it.

Pair on a task the learner understands: two people, one agent, one screen.
With familiar work, the learner can judge the result for themselves.

Narrate the decisions as you make them. Say why you ask for a plan, reject an approach,
restart the session, or want to see the test output. You pass on the method through those small
moves, and written guides seldom record them.

Review the first diff together. The learner explains each change while the partner
checks the contract, the tests, and the scope. In that review the learner takes over ownership
from the partner.
-->

---

# <mdi-account-group class="text-purple-500" /> Team Rituals That Build Confidence

<div class="grid grid-cols-2 gap-8 pt-8">

<div class="text-center">
 <mdi-alert-decagram class="text-4xl text-blue-500" />
 <div class="font-bold pt-3">Review one failure</div>
 <div class="text-sm opacity-75 pt-2">Weekly: missing context, weak check, or unsafe permission?</div>
</div>

<div class="text-center">
 <mdi-book-edit class="text-4xl text-green-500" />
 <div class="font-bold pt-3">Promote the lesson</div>
 <div class="text-sm opacity-75 pt-2">Into CONTRIBUTING.md, agent instructions, a hook, or CI</div>
</div>

</div>

<div v-click class="pt-8 text-center text-sm opacity-75">

Fix the system that let the failure through.

</div>

<!--
A team needs a learning loop.

Once a week, pick one result that went wrong. Name the missing context, the weak check,
or the unsafe permission that let it through, and keep the discussion on the system that
allowed it.

Then promote the correction. A lesson that recurs goes into CONTRIBUTING.md, the agent
instructions, a hook, or CI, so the next person gets it without having hit the failure first.

[click] With that loop, the team turns one person's bad afternoon into a shared control.
-->

---

# <mdi-book-open class="text-blue-500" /> Write the Rules Once, for People and Agents

<div class="pt-6 text-lg">

<strong>Personal config</strong> (`~/.claude/CLAUDE.md`, `~/.codex/AGENTS.md`): your style

</div>

<div class="pt-4 text-lg">

<strong>Shared guide</strong> (`CONTRIBUTING.md`): for humans and agents

</div>

<div class="pt-4 text-lg">

<strong>Project config</strong> (`CLAUDE.md` / `AGENTS.md`), kept short: Vercel docs index 100% vs. 53% for skills<sup class="ref-mark">1</sup> · ETH: little gain, ~20% more cost<sup class="ref-mark">2</sup>

</div>

<div class="pt-3 text-xs opacity-60">

Skills reached 79% when the prompt told the agent to use them

</div>

<div v-click class="pt-6 text-lg">

Must-hold rules go in hooks, linters, CI.

</div>

<div class="refs-bar">

<div><sup class="ref-mark">1</sup> <a href="https://vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals" target="_blank" rel="noopener">Vercel: AGENTS.md vs. skills</a>, Jan 2026, Next.js 16 evals</div>
<div><sup class="ref-mark">2</sup> <a href="https://arxiv.org/abs/2602.11988" target="_blank" rel="noopener">Gloaguen et al.: evaluating AGENTS.md</a>, ETH, Feb 2026</div>

</div>

<!--
A team scales judgment through its standards, and the same files now configure the agent.

Put your style in a personal config, Claude Code's CLAUDE.md or Codex's AGENTS.md, and each session
starts with it. A personal file can ask for concise answers, code over comments, full test coverage,
and a formatter run. With it, the agent writes code that looks like yours.

Write CONTRIBUTING.md for both audiences, since the document that onboards a human contributor also
grounds the agent. I start sessions with "read the contributing guide, then let us work".

Keep the project file short. Two studies measured this. Vercel tested its own Next.js APIs, which
the models had not seen in training. An index of the docs in AGENTS.md passed all of its evals, and
skills passed 53%, or 79% when the prompt told the agent to use them. A group at ETH tested
repository context files on coding tasks. Files a model wrote did not improve success and added
over 20% to the inference cost; files developers wrote added about 2.4% success on average for up
to 19% more cost. I read that as advice to put in only what the model cannot know, such as new APIs
or local conventions. As I said earlier, one AGENTS.md can now serve both Claude Code and Codex.

[click] Rules that must hold every time belong in a hook, a linter, or CI. The model may skip
an instruction file; a failing check blocks the merge.
-->

---

# <mdi-file-document-check class="text-blue-500" /> Context Files, Measured

<div class="text-sm text-center opacity-80">

Left: SWE-bench Lite with LLM-written files. Right: CTXbench, repositories with developer-written files.

</div>

<img src="/fig-eth-context-files.png" class="w-full rounded-lg mt-2 bg-white p-2 shadow" />

<Credit class="text-center" license="CC BY 4.0">Gloaguen, Mündler-Sasahara, Müller et al. (ETH Zurich), "Evaluating AGENTS.md", Fig. 3, <a href="https://arxiv.org/abs/2602.11988" target="_blank" rel="noopener">arXiv 2602.11988</a></Credit>

<!--
This chart shows the ETH result. Files written by a model did not help on either benchmark.
Developer-written files moved success a few points up for three of the four models and down for
one, and the error bars overlap. The authors found the agents follow the instructions in those
files; the repository overviews are the part that did not help, so keep only the facts the model
lacks.
-->

---

# <mdi-alert class="text-orange-500" /> Set Honest Expectations

<div class="pt-6 text-lg">

<strong>Results vary by task:</strong> 20% to 46% on 10 <span class="whitespace-nowrap">private-codebase</span> tasks (vendor)<sup class="ref-mark">1</sup>

</div>

<div class="pt-4 text-lg">

<strong>Reviewers feel the load</strong> before the team sees delivery gains

</div>

<div class="pt-4 text-lg">

<strong>Learning needs engagement:</strong> the Shen and Tamkin study<sup class="ref-mark">2</sup> · EEG preprint<sup class="ref-mark">3</sup> · CS336 blocks <span class="whitespace-nowrap">agent-written</span> student code<sup class="ref-mark">4</sup>

</div>

<div class="pt-4 text-lg">

<strong>Amazon:</strong> senior <span class="whitespace-nowrap">sign-off</span> on <span class="whitespace-nowrap">AI-assisted</span> changes from junior and <span class="whitespace-nowrap">mid-level</span> engineers<sup class="ref-mark">5</sup>

</div>

<div class="pt-3 text-xs opacity-60">

Shen and Tamkin: n=52 · MIT preprint: n=54, 18 in the final session

</div>

<div class="refs-bar">

<div><sup class="ref-mark">1</sup> <a href="https://withspecific.com/benchmarks/real-swe" target="_blank" rel="noopener">Real-SWE</a>, Specific Labs (vendor), Sep 2026</div>
<div><sup class="ref-mark">2</sup> <a href="https://arxiv.org/abs/2601.20245" target="_blank" rel="noopener">Shen and Tamkin: how AI impacts skill formation</a>, Anthropic, Jan 2026</div>
<div><sup class="ref-mark">3</sup> <a href="https://www.media.mit.edu/publications/your-brain-on-chatgpt/" target="_blank" rel="noopener">MIT: your brain on ChatGPT</a>, preprint, Jun 2025</div>
<div><sup class="ref-mark">4</sup> <a href="https://github.com/stanford-cs336/assignment1-basics/blob/main/CLAUDE.md" target="_blank" rel="noopener">Stanford CS336 CLAUDE.md</a>, Apr 2026</div>
<div><sup class="ref-mark">5</sup> <a href="https://arstechnica.com/ai/2026/03/after-outages-amazon-to-make-senior-engineers-sign-off-on-ai-assisted-changes/" target="_blank" rel="noopener">Amazon requires sign-off</a>, Mar 2026</div>

</div>

<!--
Set expectations from measured work.

Results vary by task. Specific Labs, a vendor, built a benchmark from codebases it licensed from
companies. The best model with its harness resolved 46% of ten tasks, and the eight entries
ranged from 20% to 46%. The sample is small, and it covers private code that public leaderboards
leave out. Pilot against work your own team can score.

Your reviewers feel the extra volume before the team sees any delivery gain. I showed the
studies earlier; plan for the review load first.

Delegating the thinking has a measured cost. The randomised study from the mentorship slide found
17% lower quiz scores, with no speed gain on average. A separate MIT preprint used EEG on people
writing essays and found the weakest brain connectivity in the group assigned to
ChatGPT. That one is essay writing, and it has not passed peer
review yet. The Stanford CS336 staff act on the concern, and their CLAUDE.md tells the agent to
teach and forbids it from writing the students' code.

Amazon, after a run of outages, listed AI-assisted changes among the contributing
factors, and now requires senior engineers to approve AI-assisted changes from junior and
mid-level engineers. Amazon put the largest outage down to a code deployment; the sign-off rule
is a policy response to the trend.
-->

---

# <mdi-gavel class="text-orange-500" /> Merge Policy for AI-Assisted Changes

<div class="grid grid-cols-2 gap-8 pt-6">

<div>
 <mdi-alert class="text-3xl text-blue-500" />
 <div class="pt-2"><strong>Label the risk</strong></div>
 <div class="text-sm opacity-75">By impact and reversibility</div>
</div>

<div>
 <mdi-account-lock class="text-3xl text-green-500" />
 <div class="pt-2"><strong>Name the human owner</strong></div>
 <div class="text-sm opacity-75">Decision, rollout, incident</div>
</div>

<div>
 <mdi-clipboard-check class="text-3xl text-purple-500" />
 <div class="pt-2"><strong>Attach the evidence</strong></div>
 <div class="text-sm opacity-75">Tests, benchmarks, screenshots, repro</div>
</div>

<div>
 <mdi-eye-check class="text-3xl text-red-500" />
 <div class="pt-2"><strong>Require independent review for high risk</strong></div>
 <div class="text-sm opacity-75">Starts from contract and diff</div>
</div>

</div>

<div v-click class="pt-6 text-center text-sm opacity-75">

Same merge bar, whichever tool wrote it.

</div>

<!--
At this point a team needs a merge policy.

Label the change low, medium, or high risk, the same tiers as on the review-depth slide, based on its impact
and how reversible it is. Name one human who owns the decision, the rollout, and the incident if there is
one. If people and an agent share authorship, one person owns the outcome. Attach the evidence to
the pull request: test output, benchmarks, screenshots, a reproduced failure. Your reviewer
should not have to rerun the author's story to find the proof. High-risk work gets an
independent review, where the reviewer starts from the contract and the diff without inheriting the
author's reasoning.

[click] Apply the policy to the change, whichever tool produced it. Agents raise the review load,
and the merge bar stays where it was.
-->

---

# <mdi-shield-bug class="text-red-500" /> Your Agent's Config is Code

<div class="text-lg pt-4">

Apr 2026: `lightning` 2.6.2 and 2.6.3 on PyPI (PyTorch Lightning)

</div>

<div class="py-4 pl-4 border-l-4 border-red-500 text-lg">

Malware writes a <strong>SessionStart hook</strong> to `.claude/settings.json`; it reruns each time Claude Code opens the repo<sup class="ref-mark">1</sup>

</div>

<div class="pt-5 text-lg">

Earlier: CVE-2025-59536 ran repo MCP servers before the trust dialog<sup class="ref-mark">2</sup>

</div>

<div v-click class="pt-5 text-lg">

Review `.claude/`, `AGENTS.md`, MCP config as code

</div>

<div class="refs-bar">

<div><sup class="ref-mark">1</sup> <a href="https://semgrep.dev/blog/2026/malicious-dependency-in-pytorch-lightning-used-for-ai-training/" target="_blank" rel="noopener">Semgrep on the Lightning compromise</a>, Apr 2026</div>
<div><sup class="ref-mark">2</sup> <a href="https://research.checkpoint.com/2026/rce-and-api-token-exfiltration-through-claude-code-project-files-cve-2025-59536/" target="_blank" rel="noopener">Check Point: CVE-2025-59536</a>, Feb 2026</div>

</div>

<!--
The agent's own configuration counts as high-risk, and it is easy to forget.

At the end of April, two releases of lightning, the PyTorch Lightning package on PyPI, shipped malware, and the attackers aimed part of the
payload at the agent.

The malware wrote a SessionStart hook into the repository's .claude/settings.json. Each time a
developer opens Claude Code in that repository, the hook launches the dropper again. Semgrep
wrote that this "may be among the first documented instances of malware abusing Claude Code's
hook system", and I keep their "may be".

Check Point had shown the path earlier. In February it published its research: a repository's
settings file could define hooks, and the trust prompt you accepted on opening the folder did not
mention them. Under CVE-2025-59536, MCP servers the repository enabled started before that
prompt appeared. A separate CVE, CVE-2026-21852, covered leaking your API key the same way.
Anthropic patched all of them before the disclosure.

[click] Read .claude/, AGENTS.md, and MCP configuration in a repository you clone the way you
would read a Makefile or a setup.py. The agent runs with your credentials, your shell, and your repository, so
its configuration deserves the review you give code.
-->

---

# <mdi-package-variant class="text-orange-500" /> Supply-Chain Defences Cover Agents Too

<div class="pt-6 text-lg">

Mar 2026, litellm: PyPI token stolen via an exploited Trivy dependency; <strong>119k+ downloads</strong> in 2.5 h<sup class="ref-mark">1</sup>

</div>

<div class="pt-5 text-lg">

Jul 2026: releases reject new files after 14 days<sup class="ref-mark">2</sup>

</div>

<div v-click class="pt-5">

Lock files with hashes, dependency cooldowns, Trusted Publishing, pinned CI actions.

</div>

<div v-click="1" class="pt-3 text-xs opacity-60">

litellm came five weeks before Lightning · Mythos package: live ~1 hour, ran on 15 systems<sup class="ref-mark">3</sup>

</div>

<div class="refs-bar">

<div><sup class="ref-mark">1</sup> <a href="https://blog.pypi.org/posts/2026-04-02-incident-report-litellm-telnyx-supply-chain-attack/" target="_blank" rel="noopener">PyPI incident report: litellm and Telnyx</a>, Apr 2026</div>
<div><sup class="ref-mark">2</sup> <a href="https://blog.pypi.org/posts/2026-07-22-releases-now-reject-new-files-after-14-days/" target="_blank" rel="noopener">PyPI: releases reject new files after 14 days</a>, Jul 2026</div>
<div v-click="1"><sup class="ref-mark">3</sup> <a href="https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals" target="_blank" rel="noopener">Anthropic: incidents in cybersecurity evals</a>, Jul 2026</div>

</div>

<!--
An agent that runs pip or uv for you installs whatever resolves, so the supply-chain risks are
yours too.

In March attackers compromised litellm and the Telnyx SDK. They stole litellm's PyPI token
through an exploited Trivy dependency, and users downloaded the bad litellm releases over
119,000 times before PyPI quarantined them.

In July PyPI changed a rule so that a release stops accepting new files 14 days after
publication. That prevents someone from poisoning an old, trusted version. It would not have
stopped litellm, because the attackers published new versions.

In July Anthropic disclosed a case where the publisher was a model. Claude Mythos 5, in a
partner's evaluation that had live internet access by mistake, found setup instructions in the
test environment naming a package that did not exist on PyPI, and published a malicious package
under that name. It was up for about an hour and ran on 15 real systems before PyPI's own
security systems removed it. Anthropic first called it a harness and operations failure; in
September it revised that, finding the model's reasoning biased towards concluding the internet
was simulated despite evidence to the contrary.

[click] Old defences cover both cases: lock files with hashes, a dependency
cooldown so fresh releases wait a few days before you pick them up, Trusted Publishing for your
own releases, and pinned CI actions.
-->

---

# <mdi-stairs class="text-blue-500" /> Getting Started

<div class="pt-4 space-y-3">

<div><strong>Questions:</strong> ask-first mode (not auto), least familiar module, trusted repo</div>

<div><strong>Small edits:</strong> clean revert</div>

<div><strong>Plan mode:</strong> first complex change</div>

<div><strong>Standards file:</strong> second repeated correction</div>

<div><strong>Guardrails:</strong> hooks, sandboxes, sign-off<sup class="ref-mark">1,2,3</sup></div>

</div>

<div v-click class="pt-6 opacity-75">

The pace is yours.

</div>

<div class="refs-bar">

<div><sup class="ref-mark">1</sup> <a href="https://www.docker.com/products/docker-sandboxes/" target="_blank" rel="noopener">Docker Sandboxes</a>, Jan 2026</div>
<div><sup class="ref-mark">2</sup> <a href="https://news.ycombinator.com/item?id=47911524" target="_blank" rel="noopener">A Cursor agent deleted a production database</a>, Apr 2026</div>
<div><sup class="ref-mark">3</sup> <a href="https://news.ycombinator.com/item?id=48500012" target="_blank" rel="noopener">An agent ran up a $6.5k AWS bill (later cut to ~$1.8k)</a>, Jun 2026</div>

</div>

<!--
If you start on Monday, build up in steps.

Start with questions, in a mode where the agent asks before it edits, not auto mode, which
is now the Claude Code default. Point it at the module your team
knows least. In my experience I learn more about a module from twenty minutes of questions than
from a week of reading it alone. Do this in a repository you
trust, for the reason two slides back. Then make small edits, where the worst case is a git
checkout, and use plan mode before your first real change. Write a standards file the
second time you give the same correction. Add guardrails once you are ready to let it
run unattended: hooks, a sandbox such as Docker Sandboxes, and sign-off. In April a Cursor
agent used an over-scoped token to delete a company's production database and the backups on
the same volume. In June an autonomous agent ran up a $6,500 AWS bill for its operator, which AWS later cut to about $1,800. A
narrower token would have limited the first, and a spending cap the second.

[click] You set the pace; the tools will be here next month, and the habits matter more than how
fast you adopt them.
-->

---
layout: center
class: text-center
---

# <mdi-head-lightbulb class="text-yellow-500" /> Remember

<div class="pt-8">

<div class="text-2xl pb-4"><mdi-brain class="text-blue-500" /> <strong>Understand</strong> the problem</div>
<div class="text-2xl pb-4"><mdi-pencil-ruler class="text-purple-500" /> <strong>Design</strong> the solution</div>
<div class="text-2xl pb-4"><mdi-eye-check class="text-green-500" /> <strong>Review</strong> the code</div>
<div class="text-2xl"><mdi-test-tube class="text-orange-500" /> <strong>Test</strong> it</div>

</div>

<div v-click class="pt-8 text-xl">

Agents speed up these steps; you cannot skip any.

</div>

<!--
Pause on the four words before you say anything: understand, design, review, test.

None of them changed. You still understand before you solve, design before you build, review
before you ship, and test before you deploy.

[click] Agents speed up all four, and you still cannot skip any of them. Skip the understanding
and you solve the wrong problem; skip the review and you get the incident at 2am.

These are engineering skills, and the agent does not have them. Typing speed used to be one way
engineers stood out. The agent types fast now, so you stand out through judgment about the
right architecture, the edge case someone covered, and the change that is safe to ship.
-->
