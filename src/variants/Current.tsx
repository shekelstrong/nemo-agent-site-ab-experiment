export function CurrentVariant() {
  return (
    <article className="variant-card">
      <section className="hero">
        <div>
          <span className="eyebrow">AI agents for business operations</span>
          <h1>Nemo Agent: автономные ИИ-агенты для бизнеса</h1>
          <p>
            Текущий baseline Nemo Agent landing: агентная автоматизация продаж,
            поддержки, контента и отчётности для малого и среднего бизнеса.
          </p>
          <div className="cta-row">
            <a className="cta primary" href="#audit">Получить AI-аудит</a>
            <a className="cta secondary" href="#demo">Смотреть демо</a>
          </div>
          <div className="metrics">
            <div className="metric"><strong>24ч</strong><span>AI-аудит процесса</span></div>
            <div className="metric"><strong>30%</strong><span>снижение рутины</span></div>
            <div className="metric"><strong>3</strong><span>пилота для первых клиентов</span></div>
          </div>
        </div>
        <div className="preview-panel">
          <h2>Current baseline</h2>
          <p>Это копия текущего лендинга из <code>shekelstrong/nemo-agent-landing</code>, помещённая в отдельный экспериментальный репозиторий.</p>
        </div>
      </section>
      <section className="section">
        <h2>Что проверяем</h2>
        <p>Может ли multi-model loop дать более сильный UX, код и конверсию, чем текущая версия.</p>
      </section>
    </article>
  )
}
