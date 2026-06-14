import { useState, type ComponentType } from 'react'
import { CurrentVariant } from './variants/Current'
import { NemotronUltraVariant } from './variants/NemotronUltra'
import { LagunaQwenCoderVariant } from './variants/LagunaQwenCoder'
import { MinimaxM3Variant } from './variants/MinimaxM3'

type VariantKey = 'current' | 'nemotron' | 'laguna_qwen' | 'minimax_m3'

const variants: Record<VariantKey, { label: string; component: ComponentType }> = {
  current: { label: 'Current baseline', component: CurrentVariant },
  nemotron: { label: 'Nemotron Ultra: architecture + UX', component: NemotronUltraVariant },
  laguna_qwen: { label: 'Laguna / Qwen Coder: code-first', component: LagunaQwenCoderVariant },
  minimax_m3: { label: 'MiniMax M3: final synthesis', component: MinimaxM3Variant },
}

export default function App() {
  const [active, setActive] = useState<VariantKey>('current')
  const Active = variants[active].component

  return (
    <main className="app-shell">
      <aside className="experiment-sidebar">
        <div className="brand">
          <span className="brand-mark">N</span>
          <div>
            <strong>Nemo Agent</strong>
            <small>Site A/B Experiment</small>
          </div>
        </div>
        <nav className="variant-nav">
          {Object.entries(variants).map(([key, item]) => (
            <button key={key} className={active === key ? 'active' : ''} onClick={() => setActive(key as VariantKey)}>
              {item.label}
            </button>
          ))}
        </nav>
        <section className="rubric-card">
          <h2>Evaluation rubric</h2>
          <ul>
            <li>Taste</li>
            <li>Code quality</li>
            <li>UX clarity</li>
            <li>Speed</li>
            <li>Conversion</li>
            <li>Brand fit</li>
          </ul>
        </section>
      </aside>
      <section className="variant-stage">
        <Active />
      </section>
    </main>
  )
}
