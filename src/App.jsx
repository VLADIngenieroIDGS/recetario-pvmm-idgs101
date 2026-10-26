import { useState, useMemo, useEffect } from 'react'
import recetas from './data/recetas.js'
import RecipeCard from './components/RecipeCard.jsx'
import RecipeDetail from './components/RecipeDetail.jsx'

function App() {
  const [seleccionada, setSeleccionada] = useState(null)
  const [busqueda, setBusqueda] = useState('')

  const filtradas = useMemo(() => {
    const q = busqueda.trim().toLowerCase()
    if (!q) return recetas
    return recetas.filter(
      (r) =>
        r.titulo.toLowerCase().includes(q) ||
        r.categoria.toLowerCase().includes(q) ||
        r.ingredientes.some((i) => i.nombre.toLowerCase().includes(q)),
    )
  }, [busqueda])

  // Al cambiar de vista, regresar al inicio de la página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [seleccionada])

  if (seleccionada) {
    return <RecipeDetail receta={seleccionada} onVolver={() => setSeleccionada(null)} />
  }

  return (
    <div className="app">
      <header className="hero">
        <span className="hero__badge">🍳 Recetario</span>
        <h1 className="hero__title">
          Cocina rica, <em>sin complicarte</em>
        </h1>
        <p className="hero__subtitle">
          Recetas caseras paso a paso, con ingredientes que encuentras en cualquier mercado.
        </p>

        <label className="search">
          <span className="search__icon" aria-hidden="true">🔍</span>
          <input
            type="search"
            placeholder="Busca por nombre, categoría o ingrediente…"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            aria-label="Buscar recetas"
          />
        </label>
      </header>

      <main className="grid">
        {filtradas.map((receta) => (
          <RecipeCard key={receta.id} receta={receta} onAbrir={() => setSeleccionada(receta)} />
        ))}

        {filtradas.length === 0 && (
          <div className="empty">
            <span className="empty__emoji">🥄</span>
            <p>No encontramos recetas con “{busqueda}”.</p>
            <button className="btn btn--ghost" onClick={() => setBusqueda('')}>
              Limpiar búsqueda
            </button>
          </div>
        )}
      </main>

      <footer className="footer">Hecho con React · {recetas.length} recetas</footer>
    </div>
  )
}

export default App
