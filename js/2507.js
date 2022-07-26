const paises = [{
    nombre: "Arabia",
    grupo: "C",
    puntos: 0,
    difgol: 0,
    bandera: '../img/arabiasaudita.png'
  },
  {
    nombre: "Alemania",
    grupo: "E",
    puntos: 0,
    difgol: 0,
    bandera: '../img/alemania.png'
  },
  {
    nombre: "Argentina",
    grupo: "C",
    puntos: 0,
    difgol: 0,
    bandera: '../img/argentina.png'
  },
  {
    nombre: "Australia",
    grupo: "D",
    puntos: 0,
    difgol: 0,
    bandera: '../img/australia.png'
  },
  {
    nombre: "Belgica",
    grupo: "F",
    puntos: 0,
    difgol: 0,
    bandera: '../img/belgica.png'
  },
  {
    nombre: "Brasil",
    grupo: "G",
    puntos: 0,
    difgol: 0,
    bandera: '../img/brasil.png'
  },
  {
    nombre: "Camerun",
    grupo: "G",
    puntos: 0,
    difgol: 0,
    bandera: '../img/camerun.png'
  },
  {
    nombre: "Canada",
    grupo: "F",
    puntos: 0,
    difgol: 0,
    bandera: '../img/canada.png'
  },
  {
    nombre: "Corea",
    grupo: "H",
    puntos: 0,
    difgol: 0,
    bandera: '../img/corea.png'
  },
  {
    nombre: "Costa Rica",
    grupo: "E",
    puntos: 0,
    difgol: 0,
    bandera: '../img/costarica.png'
  },
  {
    nombre: "Croacia",
    grupo: "F",
    puntos: 0,
    difgol: 0,
    bandera: '../img/croacia.png'
  },
  {
    nombre: "Dinamarca",
    grupo: "D",
    puntos: 0,
    difgol: 0,
    bandera: '../img/dinamarca.png'
  },
  {
    nombre: "Ecuador",
    grupo: "A",
    puntos: 0,
    difgol: 0,
    bandera: '../img/ecuador.png'
  },
  {
    nombre: "EEUU",
    grupo: "B",
    puntos: 0,
    difgol: 0,
    bandera: '../img/eeuu.png'
  },
  {
    nombre: "España",
    grupo: "E",
    puntos: 0,
    difgol: 0,
    bandera: '../img/espana.png'
  },
  {
    nombre: "Francia",
    grupo: "D",
    puntos: 0,
    difgol: 0,
    bandera: '../img/francia.png'
  },
  {
    nombre: "Gales",
    grupo: "B",
    puntos: 0,
    difgol: 0,
    bandera: '../img/gales.png'
  },
  {
    nombre: "Ghana",
    grupo: "H",
    puntos: 0,
    difgol: 0,
    bandera: '../img/ghana.png'
  },
  {
    nombre: "Holanda",
    grupo: "A",
    puntos: 0,
    difgol: 0,
    bandera: '../img/holanda.png'
  },
  {
    nombre: "Inglaterra",
    grupo: "B",
    puntos: 0,
    difgol: 0,
    bandera: '../img/inglaterra.png'
  },
  {
    nombre: "Iran",
    grupo: "B",
    puntos: 0,
    difgol: 0,
    bandera: '../img/iran.png'
  },
  {
    nombre: "Japon",
    grupo: "E",
    puntos: 0,
    difgol: 0,
    bandera: '../img/japon.png'
  },
  {
    nombre: "Marruecos",
    grupo: "F",
    puntos: 0,
    difgol: 0,
    bandera: '../img/marruecos.png'
  },
  {
    nombre: "Mexico",
    grupo: "C",
    puntos: 0,
    difgol: 0,
    bandera: '../img/mexico.png'
  },
  {
    nombre: "Polonia",
    grupo: "C",
    puntos: 0,
    difgol: 0,
    bandera: '../img/polonia.png'
  },
  {
    nombre: "Portugal",
    grupo: "H",
    puntos: 0,
    difgol: 0,
    bandera: '../img/portuga.png'
  },
  {
    nombre: "Qatar",
    grupo: "A",
    puntos: 0,
    difgol: 0,
    bandera: '../img/qatar.png'
  },
  {
    nombre: "Senegal",
    grupo: "A",
    puntos: 0,
    difgol: 0,
    bandera: '../img/senegal.png'
  },
  {
    nombre: "Serbia",
    grupo: "G",
    puntos: 0,
    difgol: 0,
    bandera: '../img/serbia.png'
  },
  {
    nombre: "Suiza",
    grupo: "G",
    puntos: 0,
    difgol: 0,
    bandera: '../img/suiza.png'
  },
  {
    nombre: "Tunez",
    grupo: "D",
    puntos: 0,
    difgol: 0,
    bandera: '../img/tunes.png'
  },
  {
    nombre: "Uruguay",
    grupo: "H",
    puntos: 0,
    difgol: 0,
    bandera: '../img/uruguay.png'
  },
]

partidosPorGrupo = [{
    grupo: "A",
    partidos: [{
        fecha: "Jornada 1 - Lunes 21/11 07:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Senegal"),
        visitante: paises.find(p => p.nombre === "Holanda"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 1 - Lunes 21/11 13:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Qatar"),
        visitante: paises.find(p => p.nombre === "Ecuador"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 2 - Viernes 25/11 10:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Qatar"),
        visitante: paises.find(p => p.nombre === "Senegal"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 2 - Viernes 25/11 13:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Ecuador"),
        visitante: paises.find(p => p.nombre === "Holanda"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 3 - Martes 29/11 12:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Qatar"),
        visitante: paises.find(p => p.nombre === "Holanda"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 3 - Martes 29/11 12:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Ecuador"),
        visitante: paises.find(p => p.nombre === "Senegal"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
    ]
  },
  {
    grupo: "B",
    partidos: [{
        fecha: "Jornada 1 - Lunes 21/11 10:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Inglaterra"),
        visitante: paises.find(p => p.nombre === "Iran"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 1 - Lunes 21/11 16:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "EEUU"),
        visitante: paises.find(p => p.nombre === "Gales"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 2 - viernes 25/11 07:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Iran"),
        visitante: paises.find(p => p.nombre === "Gales"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 2 - Viernes 25/11 16:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Inglaterra"),
        visitante: paises.find(p => p.nombre === "EEUU"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 3 - Martes 29/11 07:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Inglaterra"),
        visitante: paises.find(p => p.nombre === "Gales"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 3 - Martes 29/11 07:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Iran"),
        visitante: paises.find(p => p.nombre === "EEUU"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
    ]
  },
  {
    grupo: "C",
    partidos: [{
        fecha: "Jornada 1 - Martes 22/11 07:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Argentina"),
        visitante: paises.find(p => p.nombre === "Arabia"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 1 - Martes 22/11 13:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Mexico"),
        visitante: paises.find(p => p.nombre === "Polonia"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 2 - Sabado 26/11 07:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Arabia"),
        visitante: paises.find(p => p.nombre === "Polonia"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 2 - Sabado 26/11 07:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Argentina"),
        visitante: paises.find(p => p.nombre === "Mexico"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 3 - Miercoles 30/11 16:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Argentina"),
        visitante: paises.find(p => p.nombre === "Polonia"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 3 - Miercoles 30/11 16:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Arabia"),
        visitante: paises.find(p => p.nombre === "Mexico"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
    ]
  },
  {
    grupo: "D",
    partidos: [{
        fecha: "Jornada 1 - Lunes 21/11 07:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Dinamarca"),
        visitante: paises.find(p => p.nombre === "Tunez"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 1 - Lunes 21/11 13:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Francia"),
        visitante: paises.find(p => p.nombre === "Australia"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 2 - Viernes 25/11 10:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Australia"),
        visitante: paises.find(p => p.nombre === "Tunez"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 2 - Viernes 25/11 13:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Francia"),
        visitante: paises.find(p => p.nombre === "Dinamarca"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 3 - Martes 29/11 12:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Australia"),
        visitante: paises.find(p => p.nombre === "Dinamarca"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 3 - Martes 29/11 12:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Francia"),
        visitante: paises.find(p => p.nombre === "Tunez"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
    ]
  },
  {
    grupo: "E",
    partidos: [{
        fecha: "Jornada 1 - Lunes 21/11 07:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Alemania"),
        visitante: paises.find(p => p.nombre === "Japon"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 1 - Lunes 21/11 13:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "España"),
        visitante: paises.find(p => p.nombre === "Costa Rica"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 2 - Viernes 25/11 10:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Costa Rica"),
        visitante: paises.find(p => p.nombre === "Japon"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 2 - Viernes 25/11 13:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "España"),
        visitante: paises.find(p => p.nombre === "Alemania"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 3 - Martes 29/11 12:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "España"),
        visitante: paises.find(p => p.nombre === "Japon"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 3 - Martes 29/11 12:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Costa Rica"),
        visitante: paises.find(p => p.nombre === "Alemania"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
    ]
  },
  {
    grupo: "F",
    partidos: [{
        fecha: "Jornada 1 - Lunes 21/11 07:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Marruecos"),
        visitante: paises.find(p => p.nombre === "Croacia"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 1 - Lunes 21/11 13:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Belgica"),
        visitante: paises.find(p => p.nombre === "Canada"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 2 - Viernes 25/11 10:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Belgica"),
        visitante: paises.find(p => p.nombre === "Marruecos"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 2 - Viernes 25/11 13:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Canada"),
        visitante: paises.find(p => p.nombre === "Croacia"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 3 - Martes 29/11 12:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Belgica"),
        visitante: paises.find(p => p.nombre === "Croacia"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 3 - Martes 29/11 12:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Canada"),
        visitante: paises.find(p => p.nombre === "Marruecos"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
    ]
  },
  {
    grupo: "G",
    partidos: [{
        fecha: "Jornada 1 - Lunes 21/11 07:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Suiza"),
        visitante: paises.find(p => p.nombre === "Camerun"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 1 - Lunes 21/11 13:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Brasil"),
        visitante: paises.find(p => p.nombre === "Serbia"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 2 - Viernes 25/11 10:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Serbia"),
        visitante: paises.find(p => p.nombre === "Camerun"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 2 - Viernes 25/11 13:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Brasil"),
        visitante: paises.find(p => p.nombre === "Suiza"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 3 - Martes 29/11 12:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Brasil"),
        visitante: paises.find(p => p.nombre === "Camerun"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 3 - Martes 29/11 12:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Serbia"),
        visitante: paises.find(p => p.nombre === "Suiza"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
    ]
  },
  {
    grupo: "H",
    partidos: [{
        fecha: "Jornada 1 - Lunes 21/11 07:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Uruguay"),
        visitante: paises.find(p => p.nombre === "Corea"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 1 - Lunes 21/11 13:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Portugal"),
        visitante: paises.find(p => p.nombre === "Ghana"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 2 - Viernes 25/11 10:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Ghana"),
        visitante: paises.find(p => p.nombre === "Corea"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 2 - Viernes 25/11 13:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Portugal"),
        visitante: paises.find(p => p.nombre === "Uruguay"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 3 - Martes 29/11 12:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Portugal"),
        visitante: paises.find(p => p.nombre === "Corea"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
      {
        fecha: "Jornada 3 - Martes 29/11 12:00hs",
        estadio: "Al Thumama",
        local: paises.find(p => p.nombre === "Ghana"),
        visitante: paises.find(p => p.nombre === "Uruguay"),
        golesLocal: 0,
        golesVisitante: 0,
        estado: "pendiente"
      },
    ]
  }
]


// Funciones para generar el DOM

function generarHTMLGrupo(letra) {
  const seccionGrupos = document.getElementById('seccionGrupos')
  const paisesGrupo = paises.filter(pais => pais.grupo == letra)
  const htmlGrupo = document.createElement('section')
  htmlGrupo.innerHTML = `
        <div class="grupo">
            <h3 class="tituloGrupos">Grupo ${letra}</h3>
            <div class="banderas container d-flex">
                ${paisesGrupo.map(pais => `
                    <div class="d-flex">
                        <h4>${pais.nombre}</h4>
                        <img class="bandera banderaGrupo" src="${pais.bandera}" alt="bandera${pais.nombre}">
                    </div>
                `).join('')}
            </div>
        </div>
    `
  htmlGrupo.innerHTML += generarPartidosGrupo(letra)
  htmlGrupo.innerHTML += generarTablaGrupo(paisesGrupo)
  seccionGrupos.appendChild(htmlGrupo)
}

function generarTablaGrupo(paises) {
  const paisesOrdenados = paises.sort((a, b) => a.puntos - b.puntos)
  return `
        <div class="container">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Seleccion</th>
                        <th scope="col">Pts</th>
                        <th scope="col">Dif Goles</th>
                    </tr>
                </thead>
                <tbody>
                    ${paisesOrdenados.map((pais, index) => `
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td id="seleA1">${pais.nombre}</td>
                        <td id="ptosA1">${pais.puntos}</td>
                        <td id="difA1">${pais.difgol}</td>
                    </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `
}

function generarPartidosGrupo(letra) {
  const grupo = partidosPorGrupo.filter(grupo => grupo.grupo == letra)
  return `
        ${grupo[0].partidos.map((partido, index) => `
            ${index % 2 == 0 ? `
                <div class="d-flex row container">
            ` : ``}
                <div class="mt-3 col-lg-4 col-md-6 col-sm-12  alignmentPartidoGrupos">
                    <div class="partidoGrupos ">
                        <div class="fechaHora mt-2">
                            <h5>${partido.fecha}</h5>
                        </div>
                        <div class="estadio">
                            <h5>${partido.estadio}</h5>
                        </div>
                        <div class="partido d-flex">
                            <h6 class="equipoL">${partido.local.nombre}</h6>
                            <img class="bandera" src="${partido.local.bandera}" alt="banderasenegal" />
                            <input id="goles${partido.local.nombre}" size="1" />
                            <p class="guion">-</p>
                            <input id="goles${partido.visitante.nombre}" size="1" />
                            <img class="bandera" src="${partido.visitante.bandera}" alt="banderaHolanda" />
                            <h6 class="equipoV">${partido.visitante.nombre}</h6>
                        </div>
                        <div class="ganador d-flex">
                            <p>Ganador:</p>
                            <p id="ganador${index}" class="mx-3"></p>
                        </div>
                        <div class="botones">
                            <button type="button" class="btn btn-outline-success">Enviar</button>
                        </div>
                    </div>
                </div>
            ${index % 2 != 0 ? `
                </div>
            ` : ``}
        `).join('')}
    `
}

for (let letra of ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']) {
  generarHTMLGrupo(letra)
}

// Funciones para la lógica general

const puntosganador = 3
const puntosempate = 1

function partidoGrupo(partido, golesL, golesV) {
  golesL = parseInt(golesL)
  golesV = parseInt(golesV)

  partido.local.goles = golesL
  partido.visitante.goles = golesV

  if (parseInt(golesL) > parseInt(golesV)) {
    partido.local.puntos += puntosganador;
    partido.local.difgol += (golesL - golesV);
    partido.visitante.difgol -= (golesL - golesV);
    ganador(senegal, ganador1)
  } else if (parseInt(golesL) == parseInt(golesV)) {
    partido.local.puntos += puntosempate;
    partido.visitante.puntos += puntosempate;
    empate(ganador1)
  } else {
    partido.visitante.puntos += puntosganador;
    partido.visitante.difgol += (golesV - golesL);
    partido.local.difgol -= (golesV - golesL);
    ganador(holanda, ganador1)
  }
}
