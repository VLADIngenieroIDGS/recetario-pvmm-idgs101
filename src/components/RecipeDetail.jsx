import { useState } from 'react'

// Muestra cantidades amigables: 0.5 -> ½, 1.5 -> 1 ½, etc.
function formatearCantidad(valor) {
  const fracciones = { 0.25: '¼', 0.5: '½', 0.75: '¾' }
  const entero = Math.floor(valor)
  const decimal = Math.round((valor - entero) * 100) / 100
  if (decimal === 0) return String(entero)
  if (fracciones[decimal]) return entero > 0 ? `${entero} ${fracciones[decimal]}` : fracciones[decimal]
  return String(Math.round(valor * 10) / 10)
}

function RecipeDetail({ receta, onVolver }) {
  const [porciones, setPorciones] = useState(receta.porciones)
  const [marcados, setMarcados] = useState([])
  const [pasoActual, setPasoActual] = useState(0)
  const [pestana, setPestana] = useState('ingredientes')

  const factor = porciones / receta.porciones
  const totalPasos = receta.pasos.length
  const progreso = Math.round((pasoActual / totalPasos) * 100)
  const terminado = pasoActual === totalPasos

  const toggleIngrediente = (index) => {
    setMarcados((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    )
  }

  return (
    <div className="detail" style={{ '--accent': receta.color }}>
      <header className="detail__hero">
        <button className="btn btn--back" onClick={onVolver}>
          ← Volver
        </button>
        <span className="detail__emoji" aria-hidden="true">{receta.emoji}</span>
        <span className="chip chip--light">{receta.categoria}</span>
        <h1 className="detail__title">{receta.titulo}</h1>
        <p className="detail__desc">{receta.descripcion}</p>
        <ul className="meta meta--light">
          <li>⏱️ {receta.tiempo} min</li>
          <li>📊 {receta.dificultad}</li>
          <li>🧾 {receta.ingredientes.length} ingredientes</li>
        </ul>
      </header>

      {/* Pestañas (en móvil); en escritorio se ven ambas columnas */}
      <nav className="tabs" role="tablist">
        <button
          role="tab"
          aria-selected={pestana === 'ingredientes'}
          className={pestana === 'ingredientes' ? 'tab tab--active' : 'tab'}
          onClick={() => setPestana('ingredientes')}
        >
          Ingredientes
        </button>
        <button
          role="tab"
          aria-selected={pestana === 'pasos'}
          className={pestana === 'pasos' ? 'tab tab--active' : 'tab'}
          onClick={() => setPestana('pasos')}
        >
          Preparación
        </button>
      </nav>

      <div className="detail__content">
        {/* ---------- Ingredientes ---------- */}
        <section className={`panel ${pestana === 'ingredientes' ? 'panel--show' : ''}`}>
          <div className="panel__head">
            <h2>Ingredientes</h2>
            <div className="stepper" aria-label="Ajustar porciones">
              <button
                onClick={() => setPorciones((p) => Math.max(1, p - 1))}
                disabled={porciones <= 1}
                aria-label="Menos porciones"
              >
                −
              </button>
              <span>
                <strong>{porciones}</strong> porc.
              </span>
              <button onClick={() => setPorciones((p) => Math.min(20, p + 1))} aria-label="Más porciones">
                +
              </button>
            </div>
          </div>

          <p className="hint">Toca un ingrediente para marcarlo cuando ya lo tengas.</p>

          <ul className="ingredients">
            {receta.ingredientes.map((ing, i) => {
              const listo = marcados.includes(i)
              return (
                <li key={i}>
                  <label className={listo ? 'ingredient ingredient--done' : 'ingredient'}>
                    <input type="checkbox" checked={listo} onChange={() => toggleIngrediente(i)} />
                    <span className="ingredient__check" aria-hidden="true">{listo ? '✓' : ''}</span>
                    <span>
                      <strong>
                        {formatearCantidad(ing.cantidad * factor)} {ing.unidad}
                      </strong>{' '}
                      {ing.nombre}
                    </span>
                  </label>
                </li>
              )
            })}
          </ul>

          <p className="counter">
            {marcados.length} de {receta.ingredientes.length} listos
          </p>
        </section>

        {/* ---------- Pasos ---------- */}
        <section className={`panel ${pestana === 'pasos' ? 'panel--show' : ''}`}>
          <div className="panel__head">
            <h2>Preparación</h2>
            <span className="counter">{progreso}%</span>
          </div>

          <div className="progress" aria-hidden="true">
            <div className="progress__bar" style={{ width: `${progreso}%` }} />
          </div>

          <ol className="steps">
            {receta.pasos.map((paso, i) => {
              const estado = i < pasoActual ? 'done' : i === pasoActual ? 'current' : 'pending'
              return (
                <li key={i} className={`step step--${estado}`} onClick={() => setPasoActual(i)}>
                  <span className="step__num">{estado === 'done' ? '✓' : i + 1}</span>
                  <p>{paso}</p>
                </li>
              )
            })}
          </ol>

          {terminado ? (
            <div className="done">
              <span>🎉</span>
              <p>¡Listo! A disfrutar tu {receta.titulo.toLowerCase()}.</p>
              <button className="btn btn--ghost" onClick={() => setPasoActual(0)}>
                Empezar de nuevo
              </button>
            </div>
          ) : (
            <div className="step-nav">
              <button
                className="btn btn--ghost"
                onClick={() => setPasoActual((p) => Math.max(0, p - 1))}
                disabled={pasoActual === 0}
              >
                Anterior
              </button>
              <button className="btn btn--primary" onClick={() => setPasoActual((p) => p + 1)}>
                {pasoActual === totalPasos - 1 ? 'Terminar' : 'Siguiente paso'}
              </button>
            </div>
          )}

          {receta.tip && (
            <aside className="tip">
              <strong>💡 Tip:</strong> {receta.tip}
            </aside>
          )}
        </section>
      </div>
    </div>
  )
}

export default RecipeDetail
