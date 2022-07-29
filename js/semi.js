const ganadorCuartos1=JSON.parse(localStorage.getItem("ganadorCuartos1"));
const ganadorCuartos2=JSON.parse(localStorage.getItem("ganadorCuartos2"));
const ganadorCuartos3=JSON.parse(localStorage.getItem("ganadorCuartos3"));
const ganadorCuartos4=JSON.parse(localStorage.getItem("ganadorCuartos4"));
console.log(ganadorCuartos4, ganadorCuartos2, ganadorCuartos3, ganadorCuartos1)
const datosPartidos=[
    {
        fecha:"Martes 13/12 16:00hs",
        estadio:"Estadio Lusail",
    },
    {
        fecha:"Miercoles 14/12 16:00hs",
        estadio:"Estadio Al Bayt",
    }
]
const partidos= [[1,ganadorCuartos1,ganadorCuartos2],[2, ganadorCuartos3, ganadorCuartos4]];
function crearSeleccionesSemis(array,numero){
    const seleccionesSemis=document.getElementById("seleccionesSemiFinal");
    const seccionSeleccionesSemis=document.createElement('section')
    seccionSeleccionesSemis.innerHTML=
    `<div class="seleecionesSemis d-flex">
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
    seleccionesSemis.appendChild(seccionSeleccionesSemis)}
    if(localStorage.length>=28){
        for(const numero of [0,1]){
            crearSeleccionesSemis(partidos,numero)
        }
    }
    function crearPartidoSemis(local, visita, npartido){
        const seccionSemis=document.getElementById('seccionSemi');
        const partidoSemi=document.createElement('section');
        partidoSemi.innerHTML=
        `<div class="alineacionSemis">
            <div class="contenedorSemis">
                <div class="partidoSemis">
                    <div class="fechaHora">
                        <h5>${datosPartidos[npartido-1].fecha}</h5>
                    </div>
                    <div class="estadio">
                        <h5>${datosPartidos[npartido-1].estadio}</h5>
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
        seccionSemis.appendChild(partidoSemi);
    }
    const botonSemis=document.querySelector("#botonSemis");
    const botonResultadoSemis=document.querySelector("#botonResultadoSemi");
    botonSemis.addEventListener("click", ()=>{
        for(let partido of [1,2]){
            crearPartidoSemis(partidos[partido-1][1],partidos[partido-1][2],partido)
        }
    })
    botonResultadoSemis.addEventListener("click", ()=>{
        for(let numero of [1,2]){
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
                const ganadorSemis=JSON.stringify(partidos[numero-1][1]);
                localStorage.setItem(`ganadorSemis${numero}`,ganadorSemis);
            }else{
                ganador.innerHTML=`<img class="bandera" src="${partidos[numero-1][2].bandera}" alt="" />`+partidos[numero-1][2].pais;
                const ganadorSemis=JSON.stringify(partidos[numero-1][2]);
                localStorage.setItem(`ganadorSemis${numero}`,ganadorSemis);
            }}})