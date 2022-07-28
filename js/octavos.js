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
function crearPrimerosOctavos(array,numero){
    const seleccionesOctavos=document.getElementById("seleccionesPrimerasOctavos");
    const seccionSeleccionesOctavos=document.createElement('section')
    seccionSeleccionesOctavos.innerHTML=
    `<div class="seleccionesprimeras d-flex">
    <div class="d-flex">    
        <div class="bandera">
            <img class="bandera" src="${array[numero][1].bandera}" alt="">
        </div>
            <h5 class="seleccion">${array[numero][1].pais}</h5>
    </div>        
    </div>
    `
    seleccionesOctavos.appendChild(seccionSeleccionesOctavos)}

function crearSegundosOctavos(array,numero){
    const seleccionesSegundasOctavos=document.getElementById("seleccionesSegundasOctavos");
    const seccionSegundosOctavos=document.createElement('section')
    seccionSegundosOctavos.innerHTML=
    `<section class="seleccionesSegundas d-flex">
        <div class="bandera">
            <img class="bandera" src="${array[numero][2].bandera}" alt="">
        </div>
            <h5 class="seleccion">${array[numero][2].pais}</h5>
    </section>
    `
    seleccionesSegundasOctavos.appendChild(seccionSegundosOctavos)
}
if(localStorage.length=16){
    for(numero of [0,1,2,3,4,5,6,7]){
    crearPrimerosOctavos(partidos,numero)}
}
if(localStorage.length=16){
    for(numero of [0,1,2,3,4,5,6,7]){
    crearSegundosOctavos(partidos,numero)}
}
const partidosOctavos = [{
        npartido: 1,
        fecha: "Sabado 3/12 12:00 hs",
        estadio: "Estadio Al Thumama",
    },
    {
        npartido: 2,
        fecha: "Domingo 4/12 16:00 hs",
        estadio: "Estadio Al Bayt",
    },
    {
        npartido: 3,
        fecha: "Sabado 3/12 16:00 hs",
        estadio: "Estadio Int Khalifa",
    },
    {
        npartido: 4,
        fecha: "Domingo 4/12 12:00 hs",
        estadio: "Estadio Ahmad Bin Ali",
    },
    {
        npartido: 5,
        fecha: "Lunes 05/12 12:00 hs",
        estadio: "Estadio Al Bayt",
    },
    {
        npartido: 6,
        fecha: "Martes 06/12 12:00",
        estadio: "Estadio 974",
    },
    {
        npartido: 7,
        fecha: "Lunes 05/12 16:00 hs",
        estadio: "Estadio Ciudad Educacion",
    },
    {
        npartido: 8,
        fecha: "Martes 06/12 16:00",
        estadio: "Estadio Lusail",
    }
]
// function partidoOctavos(equipoL,equipoV){
//     if(parseInt(golesL1)>parseInt(golesV1)){
//         alert("ganador equipo" +equipoL.pais)
//     }else{
//         alert("ganador equipo"+equipoV.pais)
//     }
// }

function crearPartidOctavos(local, visita, npartido) {
    const seccionOctavos = document.getElementById('seccionOctavos')
    const partido18final = document.createElement('section')
    partido18final.innerHTML =
        `<div class="alineacionOctavos">
        <div class="contenedorOctavos">
    <div class="partidoOctavos">
        <div class="fechaHora">
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

    </div>
</div>
</div>`
    seccionOctavos.appendChild(partido18final)
}

const botonOctavos=document.querySelector("#botonOctavos");
botonOctavos.addEventListener("click",()=>{
for (let partido of [1,2,3,4,5,6,7,8]){
    crearPartidOctavos(partidos[partido-1][1], partidos[partido-1][2],partido)
}})
botonprueba.addEventListener("click",()=>{
//     // const golesL1=document.querySelector("#golesL1");
//     // const golesV1=document.querySelector("#golesV1");
//     // const golesL2=document.querySelector("#golesL2");
//     // const golesV2=document.querySelector("#golesV2");
//     // const golesL3=document.querySelector("#golesL3");
//     // const golesV3=document.querySelector("#golesV3");
//     // const golesL4=document.querySelector("#golesL4");
//     // const golesV4=document.querySelector("#golesV4");
//     // const golesL5=document.querySelector("#golesL5");
//     // const golesV5=document.querySelector("#golesV5");
//     // const golesL6=document.querySelector("#golesL6");
//     // const golesV6=document.querySelector("#golesV6");
//     // const golesL7=document.querySelector("#golesL7");
//     // const golesV7=document.querySelector("#golesV7");
//     // const golesL8=document.querySelector("#golesL7");
//     // const golesV8=document.querySelector("#golesV7");
    
for(let numero of [1,2,3,4,5,6,7,8]){
        let golesL=document.querySelector(`#golesL${numero}`);
        let golesV=document.querySelector(`#golesV${numero}`);
        let ganador=document.querySelector(`#ganador${numero}`)
        if(golesL.value==""||golesV.value==""){
            Swal.fire({
                icon: 'error',
                title: 'Palo!!',
                text: 'Parece que te olvidaste los Goles!',
                });
                break;
        }else if(golesL.value==golesV.value){
            Swal.fire({
                icon: 'info',
                title:partidos[numero-1][1].pais +' y '+ partidos[numero-1][2].pais+' A penales???',
                text: innerHTML='Pone el resultado de los penales!',
                });
                break;
        }else if
        (golesL.value>golesV.value){
            ganador.innerHTML=`<img class="bandera" src="${partidos[numero-1][1].bandera}" alt="" />`+partidos[numero-1][1].pais;
        }else{
            ganador.innerHTML=`<img class="bandera" src="${partidos[numero-1][2].bandera}" alt="" />`+partidos[numero-1][2].pais}}})