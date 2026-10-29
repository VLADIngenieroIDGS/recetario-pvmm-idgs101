import { useState } from 'react'
import Icon from './Icon.jsx'

// Muestra cantidades amigables: 0.5 -> ½, 1.5 -> 1 ½, etc.
function formatearCantidad(valor) {
  const fracciones = { 0.25: '¼', 0.5: '½', 0.75: '¾' }
  const entero = Math.floor(valor)
  const decimal = Math.round((valor - entero) * 100) / 100
  if (decimal === 0) return String(entero)
  if (fracciones[decimal]) return entero > 0 ? `${entero} ${fracciones[decimal]}` : fracciones[decimal]
  return String(valor)
}

// Agrega o quita una posición de la lista (para tachar / destachar)
function alternar(lista, index) {
  return lista.includes(index) ? lista.filter((i) => i !== index) : [...lista, index]
}

function RecipeDetail({ receta, onVolver }) {
  const [pasosHechos, setPasosHechos] = useState([]) // pasos tachados
  const [marcados, setMarcados] = useState([]) // ingredientes tachados

  const terminado = pasosHechos.length === receta.pasos.length

  return (
    <div className="detail" style={{ '--tint': receta.color }}>
      <header className="detail__hero">
        <div className="detail__hero-inner">
          <button className="btn btn--back" onClick={onVolver}>
            <Icon nombre="atras" tamano={16} /> Volver
          </button>

          <div className="detail__heading">
            <span className="detail__initial" aria-hidden="true">
              {receta.titulo.charAt(0)}
            </span>
            <div>
              <span className="chip">{receta.categoria}</span>
              <h1 className="detail__title">{receta.titulo}</h1>
              <p className="detail__desc">{receta.descripcion}</p>
              <ul className="meta">
                <li><Icon nombre="reloj" tamano={16} /> {receta.tiempo} min</li>
                <li><Icon nombre="plato" tamano={16} /> {receta.porciones} porciones</li>
                <li><Icon nombre="nivel" tamano={16} /> {receta.dificultad}</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="detail__content">
        {/* ---------- 1. Preparación ---------- */}
        <section className="panel">
          <div className="panel__head">
            <h2>Preparación</h2>
            <span className="counter">
              {pasosHechos.length} de {receta.pasos.length} pasos
            </span>
          </div>
          <p className="hint">Toca un paso para tacharlo cuando lo termines.</p>

          <ol className="checklist">
            {receta.pasos.map((paso, i) => {
              const hecho = pasosHechos.includes(i)
              return (
                <li key={i}>
                  <label className={hecho ? 'check check--done' : 'check'}>
                    <input
                      type="checkbox"
                      checked={hecho}
                      onChange={() => setPasosHechos((p) => alternar(p, i))}
                    />
                    <span className="check__box check__box--num" aria-hidden="true">
                      {hecho ? '✓' : i + 1}
                    </span>
                    <span className="check__text">{paso}</span>
                  </label>
                </li>
              )
            })}
          </ol>

          {terminado && (
            <div className="done">
              <Icon nombre="listo" tamano={36} />
              <p>¡Listo! Buen provecho.</p>
            </div>
          )}

          {receta.tip && (
            <aside className="tip">
              <Icon nombre="tip" />
              <p>
                <strong>Tip:</strong> {receta.tip}
              </p>
            </aside>
          )}
        </section>

        {/* ---------- 2. Ingredientes ---------- */}
        <section className="panel">
          <div className="panel__head">
            <h2>Ingredientes</h2>
            <span className="counter">
              {marcados.length} de {receta.ingredientes.length} listos
            </span>
          </div>
          <p className="hint">Toca un ingrediente para tacharlo cuando ya lo tengas.</p>

          <ul className="checklist checklist--two">
            {receta.ingredientes.map((ing, i) => {
              const listo = marcados.includes(i)
              return (
                <li key={i}>
                  <label className={listo ? 'check check--done' : 'check'}>
                    <input
                      type="checkbox"
                      checked={listo}
                      onChange={() => setMarcados((m) => alternar(m, i))}
                    />
                    <span className="check__box" aria-hidden="true">{listo ? '✓' : ''}</span>
                    <span className="check__text">
                      <strong>
                        {formatearCantidad(ing.cantidad)} {ing.unidad}
                      </strong>{' '}
                      {ing.nombre}
                    </span>
                  </label>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default RecipeDetail