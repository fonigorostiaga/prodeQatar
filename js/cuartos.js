const ganadorOctavos1 = JSON.parse(localStorage.getItem("ganadorOctavos1"));
const ganadorOctavos2= JSON.parse(localStorage.getItem("ganadorOctavos2"));
const ganadorOctavos3 = JSON.parse(localStorage.getItem("ganadorOctavos3"));
const ganadorOctavos4 = JSON.parse(localStorage.getItem("ganadorOctavos4"));
const ganadorOctavos5 = JSON.parse(localStorage.getItem("ganadorOctavos5"));
const ganadorOctavos6 = JSON.parse(localStorage.getItem("ganadorOctavos6"));
const ganadorOctavos7 = JSON.parse(localStorage.getItem("ganadorOctavos7"));
const ganadorOctavos8 = JSON.parse(localStorage.getItem("ganadorOctavos8"));
const partidos=[[1,ganadorOctavos5,ganadorOctavos7],[2,ganadorOctavos1,ganadorOctavos3],[3,ganadorOctavos6,ganadorOctavos8],[4,ganadorOctavos2,ganadorOctavos4]];
partidosCuartos=[
    {
        fecha:"Viernes 9/12 12:00hs",
        estadio:"Estadio Al Thumama",

    },
    {
        fecha:"Viernes 9/12 16:00hs",
        estadio:"Estadio Al Bayt",
        
    },
    {
        fecha:"Sabado 10/12 12:00hs",
        estadio:"Estadio Int Khalifa",
        
    },
    {
        fecha:"Sabado 10/12 16:00hs",
        estadio:"Estadio Ciudad Educacion",
        
    }
]
function crearSeleccionesCuartos(array,numero){
    const seleccionesCuartos=document.getElementById("seleccionesCuartos");
    const seccionSeleccionesCuartos=document.createElement('section')
    seccionSeleccionesCuartos.innerHTML=
    `<div class="seleccionesprimeras d-flex">
    <div class="d-flex">    
        <div class="bandera">
            <img class="bandera" src="${array[numero][1].bandera}" alt="">
        </div>
            <h5 class="seleccion">${array[numero][1].pais}</h5>
    </div>        
    </div>
    <p></p>
    <div class="d-flex">    
    <div class="bandera">
        <img class="bandera" src="${array[numero][2].bandera}" alt="">
    </div>
        <h5 class="seleccion">${array[numero][2].pais}</h5>
</div>        
</div>
    `
    seleccionesCuartos.appendChild(seccionSeleccionesCuartos)}
if(localStorage.length>=24){
    for (const numero of [0,1,2,3]) {
        crearSeleccionesCuartos(partidos,numero)
        
    }
}
function crearPartidoCuartos(local, visita, npartido){
    const seccionCuartos=document.getElementById('seccionCuartos');
    const partido14final=document.createElement('section');
    partido14final.innerHTML=
    `<div class="alineacionCuartos">
        <div class="contenedorCuartos">
            <div class="partidoCuartos">
                <div class="fechaHora">
                    <h5>${partidosCuartos[npartido-1].fecha}</h5>
                </div>
                <div class="estadio">
                    <h5>${partidosCuartos[npartido-1].estadio}</h5>
                </div>
                <div class="partido d-flex">
                    <h6 class="equipoL">${local.pais}</h6>
                    <img class="bandera" src="${local.bandera}" alt="bandera${local.pais}" />
                    <input type="value" id="golesL${npartido}" size="1"/>
                    <p class="guion">-</p>
                    <input id="golesV${npartido}" type="value" size="1" />
                    <img class="bandera" src="${visita.bandera}" alt="bandera${visita.pais}" />
                    <h6 class="equipoV">${visita.pais}</h6>
                </div>
                <div class="ganador d-flex">
                    <p>Ganador:</p>
                    <p id="ganador${npartido}" class="mx-3"></p>
                </div>
            </div>
        </div>
    </div>`
    seccionCuartos.appendChild(partido14final);
}
const botonCuartos=document.querySelector("#botonCuartos");
botonCuartos.addEventListener("click", ()=>{
    for(let partido of [1,2,3,4]){
        crearPartidoCuartos(partidos[partido-1][1],partidos[partido-1][2],partido)
    }
})
const botonResultadosCuartos=document.querySelector("#botonresultadocuartos")
botonResultadosCuartos.addEventListener("click", ()=>{
    for(let numero of [1,2,3,4]){
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
            const ganadorCuartos=JSON.stringify(partidos[numero-1][1]);
            localStorage.setItem(`ganadorCuartos${numero}`,ganadorCuartos);
        }else{
            ganador.innerHTML=`<img class="bandera" src="${partidos[numero-1][2].bandera}" alt="" />`+partidos[numero-1][2].pais;
            const ganadorCuartos=JSON.stringify(partidos[numero-1][2]);
            localStorage.setItem(`ganadorCuartos${numero}`,ganadorCuartos);
        }}})
console.log(partidos)