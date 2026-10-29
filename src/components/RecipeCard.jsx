import Icon from './Icon.jsx'

function RecipeCard({ receta, onAbrir }) {
  return (
    <article className="card" style={{ '--tint': receta.color }}>
      <button className="card__button" onClick={onAbrir} aria-label={`Ver receta de ${receta.titulo}`}>
        <div className="card__cover">
          <span className="chip">{receta.categoria}</span>
          <span className="card__initial" aria-hidden="true">
            {receta.titulo.charAt(0)}
          </span>
        </div>

        <div className="card__body">
          <h2 className="card__title">{receta.titulo}</h2>
          <p className="card__desc">{receta.descripcion}</p>

          <ul className="meta">
            <li><Icon nombre="reloj" tamano={16} /> {receta.tiempo} min</li>
            <li><Icon nombre="plato" tamano={16} /> {receta.porciones} porc.</li>
            <li><Icon nombre="nivel" tamano={16} /> {receta.dificultad}</li>
          </ul>

          <span className="card__cta">Ver receta →</span>
        </div>
      </button>
    </article>
  )
}

export default RecipeCard