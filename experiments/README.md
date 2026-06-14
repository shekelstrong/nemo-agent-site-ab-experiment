# Nemo Agent Site A/B Experiment

Цель эксперимента — проверить, даёт ли multi-model loop лучший результат, чем текущий landing.

## Варианты

- `Current` — текущий baseline из `shekelstrong/nemo-agent-landing`.
- `NemotronUltra` — архитектура, UX и позиционирование.
- `LagunaQwenCoder` — code-first реализация.
- `MinimaxM3` — финальный synthesis по конверсии и управленческому сообщению.

## Как запускать

```bash
npm install
npm run dev
npm run build
```

## Live-запуск моделей

```bash
export OPENROUTER_API_KEY="..."
export MINIMAX_API_KEY="..."
python experiments/run_live_experiment.py
```

Если ключей нет, скрипт честно покажет, какие provider'ы недоступны.
