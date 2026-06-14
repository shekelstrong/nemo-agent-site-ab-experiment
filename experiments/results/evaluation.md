# A/B Evaluation

Статус: **baseline создан, live-запуск моделей честно показал отсутствие ключей**.

## Live-запуск

Команда выполнена:

```bash
python experiments/run_live_experiment.py
```

Результат в `live-model-outputs.json`:

- `nemotron_ultra` → `MISSING_API_KEY:OPENROUTER_API_KEY`
- `laguna_qwen_coder` → `MISSING_API_KEY:OPENROUTER_API_KEY`
- `minimax_m3` → `MISSING_API_KEY:MINIMAX_API_KEY`

То есть экспериментальная оболочка готова, но финальное сравнение по реальным output'ам моделей требует ключей.

## Пока зафиксировано

- Отдельный репозиторий создан.
- Текущий landing скопирован в `baseline/current/`.
- Vite + React + Tailwind экспериментальная оболочка создана.
- 4 варианта подготовлены:
  - Current;
  - Nemotron Ultra;
  - Laguna / Qwen Coder;
  - MiniMax M3.
- Создан live-скрипт `experiments/run_live_experiment.py`.

## Что будет после live-запуска

```bash
export OPENROUTER_API_KEY="..."
export MINIMAX_API_KEY="..."
python experiments/run_live_experiment.py
npm install
npm run build
```

После этого сюда нужно добавить:

- outputs моделей;
- финальный выбор;
- что переносим в основной лендинг;
- что не переносим;
- следующий шаг внедрения.
