from __future__ import annotations

import json
import os
from dataclasses import dataclass
from pathlib import Path
from urllib import request, error


@dataclass(frozen=True)
class Provider:
    name: str
    base_url: str
    api_key_env: str


PROVIDERS = [
    Provider("openrouter", "https://openrouter.ai/api/v1", "OPENROUTER_API_KEY"),
    Provider("minimax", os.getenv("MINIMAX_BASE_URL", "https://api.minimaxi.chat/v1"), "MINIMAX_API_KEY"),
]

TASKS = {
    "nemotron_ultra": {
        "provider": "openrouter",
        "model": "nvidia/nemotron-3-ultra-550b-a55b:free",
        "prompt_path": "experiments/prompts/nemotron-ultra.md",
    },
    "laguna_qwen_coder": {
        "provider": "openrouter",
        "model": "poolside/laguna-m.1:free",
        "prompt_path": "experiments/prompts/laguna-qwen-coder.md",
    },
    "minimax_m3": {
        "provider": "minimax",
        "model": "minimax/minimax-m3",
        "prompt_path": "experiments/prompts/minimax-m3.md",
    },
}


def chat(provider: Provider, model: str, prompt: str) -> str:
    key = os.getenv(provider.api_key_env)
    if not key:
        return f"MISSING_API_KEY:{provider.api_key_env}"

    payload = {
        "model": model,
        "messages": [
            {"role": "system", "content": "Ты часть Nemo Model Government. Отвечай структурированно, без выдуманных секретов."},
            {"role": "user", "content": prompt},
        ],
        "temperature": 0.25,
        "max_tokens": 6000,
    }
    req = request.Request(
        provider.base_url.rstrip("/") + "/chat/completions",
        data=json.dumps(payload).encode(),
        headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"},
        method="POST",
    )
    try:
        with request.urlopen(req, timeout=90) as resp:
            body = json.loads(resp.read().decode())
        return body["choices"][0]["message"]["content"]
    except error.HTTPError as exc:
        return f"HTTP_ERROR:{exc.code}:{exc.read().decode(errors='replace')[:1000]}"
    except Exception as exc:  # noqa: BLE001
        return f"ERROR:{type(exc).__name__}:{exc}"


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    results = {}
    for name, spec in TASKS.items():
        provider = next(item for item in PROVIDERS if item.name == spec["provider"])
        prompt = (root / spec["prompt_path"]).read_text(encoding="utf-8")
        results[name] = chat(provider, spec["model"], prompt)

    out = root / "experiments" / "results" / "live-model-outputs.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    print(out)


if __name__ == "__main__":
    main()
