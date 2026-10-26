// Recetas estáticas: viven directamente en el código, sin base de datos.
// Las cantidades son numéricas para poder ajustar porciones.

const recetas = [
  {
    id: 'chilaquiles-rojos',
    titulo: 'Chilaquiles rojos',
    descripcion:
      'Totopos crujientes bañados en salsa de jitomate y chile guajillo, con crema, queso fresco y cebolla. El desayuno mexicano por excelencia.',
    emoji: '🌶️',
    color: '#c2410c',
    categoria: 'Desayuno',
    tiempo: 30,
    dificultad: 'Fácil',
    porciones: 4,
    ingredientes: [
      { cantidad: 12, unidad: '', nombre: 'tortillas de maíz (del día anterior)' },
      { cantidad: 1, unidad: 'taza', nombre: 'aceite vegetal para freír' },
      { cantidad: 4, unidad: '', nombre: 'jitomates' },
      { cantidad: 3, unidad: '', nombre: 'chiles guajillo desvenados' },
      { cantidad: 1, unidad: '', nombre: 'chile de árbol (opcional)' },
      { cantidad: 2, unidad: 'dientes', nombre: 'de ajo' },
      { cantidad: 0.5, unidad: '', nombre: 'cebolla blanca' },
      { cantidad: 1, unidad: 'taza', nombre: 'caldo de pollo' },
      { cantidad: 0.5, unidad: 'taza', nombre: 'crema' },
      { cantidad: 100, unidad: 'g', nombre: 'queso fresco desmoronado' },
      { cantidad: 1, unidad: 'cdita', nombre: 'sal' },
    ],
    pasos: [
      'Corta las tortillas en triángulos y fríelas en aceite caliente hasta que queden doradas y crujientes. Escúrrelas sobre papel absorbente.',
      'Hierve los jitomates y los chiles en agua durante 8 minutos, hasta que los jitomates se suavicen.',
      'Licúa los jitomates, los chiles, el ajo, la mitad de la cebolla y el caldo de pollo hasta obtener una salsa tersa.',
      'En una sartén grande con una cucharada de aceite, vierte la salsa colada y cocínala 10 minutos a fuego medio. Sazona con sal.',
      'Agrega los totopos a la salsa y mezcla con cuidado durante 1 minuto, solo para que se impregnen sin perder lo crujiente.',
      'Sirve de inmediato y decora con crema, queso fresco y aros de cebolla. Puedes acompañar con frijoles o un huevo estrellado.',
    ],
    tip: 'Usa tortillas del día anterior: tienen menos humedad y quedan mucho más crujientes.',
  },
  {
    id: 'pan-de-elote',
    titulo: 'Pan de elote',
    descripcion:
      'Pan húmedo y esponjoso hecho con granos de elote fresco, leche condensada y mantequilla. Perfecto para acompañar un café de olla.',
    emoji: '🌽',
    color: '#ca8a04',
    categoria: 'Postre',
    tiempo: 60,
    dificultad: 'Media',
    porciones: 8,
    ingredientes: [
      { cantidad: 4, unidad: 'tazas', nombre: 'granos de elote fresco' },
      { cantidad: 1, unidad: 'lata', nombre: 'leche condensada (397 g)' },
      { cantidad: 4, unidad: '', nombre: 'huevos' },
      { cantidad: 120, unidad: 'g', nombre: 'mantequilla derretida' },
      { cantidad: 0.5, unidad: 'taza', nombre: 'harina de trigo' },
      { cantidad: 2, unidad: 'cditas', nombre: 'polvo para hornear' },
      { cantidad: 1, unidad: 'cdita', nombre: 'extracto de vainilla' },
      { cantidad: 1, unidad: 'pizca', nombre: 'de sal' },
    ],
    pasos: [
      'Precalienta el horno a 180 °C y engrasa un molde redondo o rectangular con mantequilla y un poco de harina.',
      'Licúa los granos de elote con la leche condensada, los huevos y la vainilla hasta obtener una mezcla homogénea.',
      'Agrega la mantequilla derretida, la harina, el polvo para hornear y la sal. Licúa unos segundos más, solo para integrar.',
      'Vierte la mezcla en el molde y hornea entre 45 y 50 minutos, hasta que la superficie esté dorada y un palillo salga limpio.',
      'Deja enfriar 15 minutos antes de desmoldar y cortar. Se puede servir tibio o frío.',
    ],
    tip: 'Si tu elote es muy tierno, agrega 2 cucharadas más de harina para que el pan no quede demasiado húmedo.',
  },
]

export default recetas
