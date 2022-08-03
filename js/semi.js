const ganadorCuartos1=JSON.parse(localStorage.getItem("ganadorCuartos1"));
const ganadorCuartos2=JSON.parse(localStorage.getItem("ganadorCuartos2"));
const ganadorCuartos3=JSON.parse(localStorage.getItem("ganadorCuartos3"));
const ganadorCuartos4=JSON.parse(localStorage.getItem("ganadorCuartos4"));
const footer=document.querySelector("footer")
let botonApretado=false
const partidos= [[1,ganadorCuartos1,ganadorCuartos2],[2, ganadorCuartos3, ganadorCuartos4]];
const botonResultadoSemis=document.querySelector("#botonResultadoSemi");
const botonSemis=document.querySelector("#botonSemis");
const botonsiguiente=document.querySelector("#botonsiguiente");



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
    if((localStorage.length)>=28){
        for(const numero of [0,1]){
            crearSeleccionesSemis(partidos,numero)
        }}else{
            setTimeout(()=>{
                Swal.fire({
                    icon: 'error',
                    title: 'Para Wanchankein!!',
                    text: 'Todavia no clasificaste a nadie a Semi',
                    background:"linear-gradient(#3d1723da,#050002dc)",
                    color:"rgb(161, 165, 168)",
                    iconColor:"e7077793",
                    confirmButtonColor:"#e7077793",
                    confirmButtonText:"Mala mia!",
                    }).then((result)=>{
                        if(result.isConfirmed){
                            if((localStorage.length)>=24){
                                window.location.href="../pages/cuartos.html"
                            }else if((localStorage.length)==16){
                                window.location.href="../pages/octavos.html"
                            }else{window.location.href="../pages/grupos.html"}
                        }
                    })
            },150)
        }


function crearPartidoSemis(local, visita, npartido){
    function cargarEstadio(numero,posicion,posicion2){
        fetch("../data/semis.json")
        .then(respuesta=>respuesta.json())
        .then(data=>{
                const estadio =data.find((el)=>el.npartido===numero)
    posicion.innerHTML=estadio.estadio   
    posicion2.innerHTML=estadio.fecha});
}
    const seccionSemis=document.getElementById('seccionSemi');
    const partidoSemi=document.createElement('section');
    partidoSemi.innerHTML=
    `<div class="alineacionSemis">
        <div class="contenedorSemis">
            <div class="partidoSemis">
                <div class="fechaHora">
                    <h5 class="fecha${npartido}"></h5>
                </div>
                <div class="estadio">
                    <h5 class="estadio${npartido}"></h5>
                </div>
                <div class="partido d-flex">
                    <h6 class="equipoL">${local.pais}</h6>
                    <img class="bandera" src="${local.bandera}" alt="bandera${local.pais}" />
                    <input type="number" id="golesL${npartido}" size="1"/>
                    <p class="guion">-</p>
                    <input id="golesV${npartido}" type="number" size="1" />
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
    botonResultadoSemis.classList.remove("display-none")
    const estadio=document.querySelector(`.estadio${npartido}`);
    const fecha=document.querySelector(`.fecha${npartido}`)
    cargarEstadio(npartido,estadio,fecha)
    botonApretado=true
}

botonSemis.addEventListener("click", ()=>{
    if(botonApretado==true){
        Swal.fire({
            icon: 'error',
            title: 'PARAAAA Emocionado!!',
            text: "Cuanto partido' quere' jugar?",
            background:"linear-gradient(#3d1723da,#050002dc)",
            color:"rgb(161, 165, 168)",
            iconColor:"e7077793",
            confirmButtonColor:"#e7077793",
            confirmButtonText:"Mala mia!",
            })
    }else{
    for(let partido of [1,2]){
        crearPartidoSemis(partidos[partido-1][1],partidos[partido-1][2],partido)
    }
}})

botonResultadoSemis.addEventListener("click", ()=>{
    for(let numero of [1,2]){
        let golesL=document.querySelector(`#golesL${numero}`);
        let golesV=document.querySelector(`#golesV${numero}`);
        let ganador=document.querySelector(`#ganador${numero}`)
        if(golesL.value==""||golesV.value==""){
            Swal.fire({
                icon: 'error',
                title: 'Palo!!',
                text: 'Te olvidaste los goles Mostro',
                background:"linear-gradient(#3d1723da,#050002dc)",
                color:"rgb(161, 165, 168)",
                iconColor:"e7077793",
                confirmButtonColor:"#e7077793",
                confirmButtonText:"Mala mia!"
                });
                break;
        }else if(golesL.value==golesV.value){
            Swal.fire({
                icon: 'info',
                title:partidos[numero-1][1].pais +' y '+ partidos[numero-1][2].pais+' A penales???',
                text: innerHTML='Pone el resultado de los penales!',
                background:"linear-gradient(#3d1723da,#050002dc)",
                confirmButtonColor:"#e7077793",
                iconColor:"e7077793",
                color:"rgb(161, 165, 168)",
                });
                break;
        }else if
        (golesL.value>golesV.value){
            ganador.innerHTML=`<img class="bandera" src="${partidos[numero-1][1].bandera}" alt="" />`+partidos[numero-1][1].pais;
            const ganadorSemis=JSON.stringify(partidos[numero-1][1]);
            localStorage.setItem(`ganadorSemis${numero}`,ganadorSemis);
            botonsiguiente.classList.remove("display-none")

        }else{
            ganador.innerHTML=`<img class="bandera" src="${partidos[numero-1][2].bandera}" alt="" />`+partidos[numero-1][2].pais;
            const ganadorSemis=JSON.stringify(partidos[numero-1][2]);
            localStorage.setItem(`ganadorSemis${numero}`,ganadorSemis);
            botonsiguiente.classList.remove("display-none")

        }}})
botonsiguiente.addEventListener("click",()=>{
    setTimeout(()=>{
        window.location.href="../pages/final.html"
    },500)
})

