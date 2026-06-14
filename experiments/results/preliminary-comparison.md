# Preliminary comparison

This file is **not** the final live-model verdict. It is the local comparison made from the current baseline and the prepared variants while API keys are missing.

## Local status

- Current baseline is copied from `shekelstrong/nemo-agent-landing`.
- Vite + React + Tailwind experiment shell builds successfully.
- Live model outputs are blocked by missing keys:
  - `OPENROUTER_API_KEY`
  - `MINIMAX_API_KEY`

## Preliminary local comparison

| Criterion | Current baseline | Nemotron Ultra variant | Laguna / Qwen Coder variant | MiniMax M3 variant |
|---|---|---|---|---|
| Taste | Solid premium dark UI | Strongest strategic UX direction | Clean but more utilitarian | Strong executive copy |
| Code | Full Next.js site, heavier | Not live-generated yet | Best code-first shape | Not live-generated yet |
| UX | Clear, but generic “AI agents” | Best reframing: “AI department in 7 days” | Simple funnel | Best business outcome framing |
| Speed | Heavier full app | Not measured | Likely fastest | Not measured |
| Clarity | Good | Strong | Very clear | Strongest for managers |
| Conversion | CTA exists | Better CTA logic | Clear pilot path | Best offer framing |
| Brand fit | Good | Best fit with Nemo ocean/cyan identity | Good | Good |
| AI-slop risk | Low | Medium unless constrained | Low | Medium unless constrained |

## Local provisional winners

- **Taste:** Nemotron Ultra concept.
- **Code:** Laguna / Qwen Coder path.
- **UX:** Nemotron Ultra path.
- **Speed:** Laguna / Qwen Coder path.
- **Clarity:** MiniMax M3 path.
- **Conversion:** MiniMax M3 path.
- **Brand fit:** Nemotron Ultra path.
- **Lowest AI-slop risk:** Laguna / Qwen Coder path.

## What this means

The likely best production recipe is not one model. It is:

```text
Nemotron Ultra → architecture and UX
Laguna / Qwen Coder → implementation
MiniMax M3 → final executive synthesis and conversion copy
Reviewer model → anti-slop, brand, security, and clarity check
```

## Next step

Run:

```bash
export OPENROUTER_API_KEY=*** MINIMAX_API_KEY=***
python experiments/run_live_experiment.py
npm run build
```

Then replace this preliminary comparison with the real live-model verdict.
