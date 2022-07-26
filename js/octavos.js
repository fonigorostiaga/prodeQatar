const ganadorA = JSON.parse(localStorage.getItem("ganadorA"));
const segundoA = JSON.parse(localStorage.getItem("runnerA"));
const ganadorB = JSON.parse(localStorage.getItem("ganadorB"));
const segundoB = JSON.parse(localStorage.getItem("runnerB"));
const ganadorC = JSON.parse(localStorage.getItem("ganadorC"));
const segundoC = JSON.parse(localStorage.getItem("runnerC"));
const ganadorD = JSON.parse(localStorage.getItem("ganadorD"));
const segundoD = JSON.parse(localStorage.getItem("runnerD"));
const ganadorE = JSON.parse(localStorage.getItem("ganadorE"));
const segundoE = JSON.parse(localStorage.getItem("runnerE"));
const ganadorF = JSON.parse(localStorage.getItem("ganadorF"));
const segundoF = JSON.parse(localStorage.getItem("runnerF"));
const ganadorH = JSON.parse(localStorage.getItem("ganadorH"));
const segundoH = JSON.parse(localStorage.getItem("runnerH"));
const ganadorG = JSON.parse(localStorage.getItem("ganadorG"));
const segundoG = JSON.parse(localStorage.getItem("runnerG"));
const partidos=[[1,ganadorA,segundoB],[2,ganadorB,segundoA],[3,ganadorC, segundoD],[4,ganadorD, segundoC], [5, ganadorE, segundoF], [6, ganadorF, segundoE], [7, ganadorG, segundoH], [8,ganadorH, segundoG]]
console.log(ganadorG)


const partidosOctavos = [{
        npartido: 1,
        fecha: "18/01",
        estadio: "bombonera",
    },
    {
        npartido: 2,
        fecha: "18/02",
        estadio: "bombonera",
    },
    {
        npartido: 3,
        fecha: "18/03",
        estadio: "bombonera",
    },
    {
        npartido: 4,
        fecha: "18/04",
        estadio: "bombonera",
    },
    {
        npartido: 5,
        fecha: "18/05",
        estadio: "bombonera",
    },
    {
        npartido: 6,
        fecha: "18/06",
        estadio: "bombonera",
    },
    {
        npartido: 7,
        fecha: "18/07",
        estadio: "bombonera",
    },
    {
        npartido: 8,
        fecha: "18/08",
        estadio: "bombonera",
    }
]
function partidoOctavos(golesL,golesV,equipoL,equipoV){
    
    if(parseInt(golesL)>parseInt(golesV)){
        equipoL.puntos=equipoL.puntos+puntosganador;
        alert("ganador equipo" +equipoL)
    }else{
        equipoV.puntos=equipoV.puntos+puntosganador;
        alert("ganador equipo"+equipoV)
    }
}

function crearPartidOctavos(local, visita, npartido) {
    const seccionOctavos = document.getElementById('seccionOctavos')
    const partido18final = document.createElement('section')
    partido18final.innerHTML =
        `<div class="mt-3 col-lg-4 col-md-6 col-sm-12  alignmentPartidoGrupos">
    <div class="partidoGrupos ">
        <div class="fechaHora mt-2">
            <h5>${partidosOctavos[npartido-1].fecha}</h5>
        </div>
        <div class="estadio">
            <h5>${partidosOctavos[npartido-1].estadio}</h5>
        </div>
        <div class="partido d-flex">
            <h6 class="equipoL">${local.pais}</h6>
            <img class="bandera" src="${local.bandera}" alt="banderasenegal" />
            <input type="value" id="golesL${npartido}" size="1"/>
            <p class="guion">-</p>
            <input id="golesV${npartido}" type="value" size="1" />
            <img class="bandera" src="${visita.bandera}" alt="banderaHolanda" />
            <h6 class="equipoV">${visita.pais}</h6>
        </div>
        <div class="ganador d-flex">
                            <p>Ganador:</p>
                            <p id="ganador${npartido}" class="mx-3"></p>
                        </div>
                        <div class="botones">
                            <button type="button" id="botonprueba" class="btn btn-outline-success">Enviar</button>
                        </div>
    </div>
</div>`
    seccionOctavos.appendChild(partido18final)
    const golesLocal1=`golesL${npartido}`.value;
    const golesVisitante1=`golesV${npartido}`.value;
    return golesLocal1, golesVisitante1;
}


const botonOctavos=document.querySelector("#botonOctavos");
botonOctavos.addEventListener("click",()=>{
for (let partido of [1,2,3,4,5,6,7,8]){
    crearPartidOctavos(partidos[partido-1][1], partidos[partido-1][2],partido)
}})