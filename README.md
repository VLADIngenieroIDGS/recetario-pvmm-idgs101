# 🍳 Recetario

Aplicación de recetas hecha con **React + Vite**. Las recetas son estáticas (viven en `src/data/recetas.js`), por lo que no usa base de datos.

## Recetas incluidas
- 🌶️ Chilaquiles rojos
- 🌽 Pan de elote

## Funcionalidades
- Búsqueda por nombre, categoría o ingrediente
- Ajuste de porciones (las cantidades se recalculan)
- Lista de ingredientes marcable
- Modo paso a paso con barra de progreso
- Diseño responsive (pestañas en móvil) y modo oscuro automático

## Cómo ejecutar
```bash
npm install
npm run dev
```
Abre http://localhost:5173 en el navegador.

## Estructura
```
src/
├── App.jsx                  # Vista de inicio y búsqueda
├── main.jsx                 # Punto de entrada
├── index.css                # Estilos
├── data/recetas.js          # Recetas estáticas
└── components/
    ├── RecipeCard.jsx       # Tarjeta de receta
    └── RecipeDetail.jsx     # Detalle: ingredientes y pasos
```
