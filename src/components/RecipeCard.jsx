function RecipeCard({ receta, onAbrir }) {
  return (
    <article className="card" style={{ '--accent': receta.color }}>
      <button className="card__button" onClick={onAbrir} aria-label={`Ver receta de ${receta.titulo}`}>
        <div className="card__cover">
          <span className="card__emoji" aria-hidden="true">{receta.emoji}</span>
          <span className="chip chip--light">{receta.categoria}</span>
        </div>

        <div className="card__body">
          <h2 className="card__title">{receta.titulo}</h2>
          <p className="card__desc">{receta.descripcion}</p>

          <ul className="meta">
            <li>⏱️ {receta.tiempo} min</li>
            <li>🍽️ {receta.porciones} porciones</li>
            <li>📊 {receta.dificultad}</li>
          </ul>

          <span className="card__cta">Ver receta →</span>
        </div>
      </button>
    </article>
  )
}

export default RecipeCard
