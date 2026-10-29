// Íconos de línea dibujados con SVG (sin emojis ni librerías extra).
const trazos = {
  buscar: 'M4 11a7 7 0 1 0 14 0a7 7 0 1 0 -14 0 M21 21l-4.35-4.35',
  reloj: 'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M12 7v5l3 2',
  plato: 'M4 12a8 8 0 1 0 16 0a8 8 0 1 0 -16 0 M8.5 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0',
  nivel: 'M6 20v-6 M12 20v-11 M18 20v-16',
  lista: 'M9 6h11 M9 12h11 M9 18h11 M4 6h.01 M4 12h.01 M4 18h.01',
  todas: 'M3 3h7v7h-7z M14 3h7v7h-7z M3 14h7v7h-7z M14 14h7v7h-7z',
  desayuno: 'M12 3v3 M5.6 8.6l1.4 1.4 M18.4 8.6l-1.4 1.4 M3 18h18 M7 18a5 5 0 0 1 10 0',
  comida: 'M7 3v7a2 2 0 0 0 2 2v9 M11 3v7a2 2 0 0 1-2 2 M9 3v5 M17 21v-9h-3c0-5 1.5-9 3-9z',
  bebida: 'M6 8h11v5a5.5 5.5 0 0 1-11 0z M17 9.5h1.5a2.5 2.5 0 0 1 0 5h-1.6 M9 2.5v3 M13 2.5v3',
  postre: 'M4 21h16 M5 21v-7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7 M5 16.5c2.3 1.3 4.7 1.3 7 0s4.7-1.3 7 0 M12 12v-4 M12 5.5v.01',
  atras: 'M19 12h-14 M11 18l-6-6 6-6',
  listo: 'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M8 12.5l2.8 2.8 5.2-5.8',
  tip: 'M9 18h6 M10 21.5h4 M12 2.5a6.5 6.5 0 0 0-3.8 11.8c.5.4.8 1 .8 1.6v.6h6v-.6c0-.6.3-1.2.8-1.6a6.5 6.5 0 0 0-3.8-11.8z',
}

function Icon({ nombre, tamano = 18 }) {
  return (
    <svg
      className="icon"
      width={tamano}
      height={tamano}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={trazos[nombre] || trazos.todas} />
    </svg>
  )
}

export default Icon