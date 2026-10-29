import { useState, useMemo, useEffect } from 'react'
import recetas from './data/recetas.js'
import RecipeCard from './components/RecipeCard.jsx'
import RecipeDetail from './components/RecipeDetail.jsx'
import Icon from './components/Icon.jsx'

// Categorías del menú: "Todas" + las que existan en las recetas (sin repetir)
const categorias = ['Todas', ...new Set(recetas.map((r) => r.categoria))]

function App() {
  const [seleccionada, setSeleccionada] = useState(null)
  const [busqueda, setBusqueda] = useState('')
  const [categoria, setCategoria] = useState('Todas')

  const filtradas = useMemo(() => {
    const q = busqueda.trim().toLowerCase()
    return recetas.filter((r) => {
      const coincideCategoria = categoria === 'Todas' || r.categoria === categoria
      const coincideTexto =
        !q ||
        r.titulo.toLowerCase().includes(q) ||
        r.categoria.toLowerCase().includes(q) ||
        r.ingredientes.some((i) => i.nombre.toLowerCase().includes(q))
      return coincideCategoria && coincideTexto
    })
  }, [busqueda, categoria])

  // Al cambiar de vista, regresar al inicio de la página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [seleccionada])

  // Ir a una categoría desde el menú (también cierra la receta abierta)
  const elegirCategoria = (cat) => {
    setCategoria(cat)
    setSeleccionada(null)
  }

  // El botón "Buscar" solo evita que el formulario recargue la página;
  // el filtrado ocurre mientras escribes.
  const buscar = (e) => {
    e.preventDefault()
    setSeleccionada(null)
  }

  return (
    <div className="app">
      {/* ---------- Encabezado ---------- */}
      <header className="topbar">
        <div className="topbar__inner">
          <button className="brand" onClick={() => elegirCategoria('Todas')}>
            <span className="brand__name">Recetario</span>
            <span className="brand__tag">cocina de casa</span>
          </button>

          <form className="search" onSubmit={buscar} role="search">
            <Icon nombre="buscar" />
            <input
              type="search"
              placeholder="Busca recetas, categorías o ingredientes"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              aria-label="Buscar recetas"
            />
            <button type="submit" className="search__btn">
              Buscar
            </button>
          </form>
        </div>

        <nav className="menu" aria-label="Categorías">
          {categorias.map((cat) => (
            <button
              key={cat}
              className={categoria === cat ? 'menu__item menu__item--active' : 'menu__item'}
              onClick={() => elegirCategoria(cat)}
            >
              <Icon nombre={cat.toLowerCase()} />
              {cat}
            </button>
          ))}
        </nav>
      </header>

      {/* ---------- Contenido ---------- */}
      {seleccionada ? (
        <RecipeDetail receta={seleccionada} onVolver={() => setSeleccionada(null)} />
      ) : (
        <main className="container">
          <div className="section-title">
            <h1>{categoria === 'Todas' ? 'Todas las recetas' : categoria}</h1>
            <span>
              {filtradas.length} {filtradas.length === 1 ? 'receta' : 'recetas'}
            </span>
          </div>

          <div className="grid">
            {filtradas.map((receta) => (
              <RecipeCard key={receta.id} receta={receta} onAbrir={() => setSeleccionada(receta)} />
            ))}
          </div>

          {filtradas.length === 0 && (
            <div className="empty">
              <Icon nombre="buscar" tamano={32} />
              <p>No encontramos recetas con “{busqueda}”.</p>
              <button
                className="btn btn--ghost"
                onClick={() => {
                  setBusqueda('')
                  setCategoria('Todas')
                }}
              >
                Limpiar búsqueda
              </button>
            </div>
          )}
        </main>
      )}

      <footer className="footer">
        <span className="footer__brand">Recetario</span>
        <span>Hecho con React · {recetas.length} recetas</span>
      </footer>
    </div>
  )
}

export default App