const finalista1=JSON.parse(localStorage.getItem("ganadorSemis1"));
const finalista2=JSON.parse(localStorage.getItem("ganadorSemis2"));
const argentina= {pais:"Argentina", grupo:"C", puntos:0,difgol:0, bandera:'../img/argentina.png'};
const finaldelMundo=[1,finalista1,finalista2];
const datosFinal={
    fecha:"Domingo 18/12 12:00hs",
    estadio:"Estadio Al Thumama"
}

let botonApretado=false

function finalistas(local, visitante){
    
    const seleccionesFinalistas=document.getElementById("finalistas");
    const seccionFinalistas=document.createElement('section')
    seccionFinalistas.innerHTML=
    `<div class="seleccionesFinalistas d-flex">
    <div class="d-flex">    
        <div class="bandera">
            <img class="bandera" src="${local.bandera}" alt="">
        </div>
            <h5 class="seleccion">${local.pais}</h5>
    </div>        
    </div>
    <p></p>
    <div class="d-flex">    
    <div class="bandera">
        <img class="bandera" src="${visitante.bandera}" alt="">
    </div>
        <h5 class="seleccion">${visitante.pais}</h5>
</div>        
</div>`
seleccionesFinalistas.appendChild(seccionFinalistas)

}
if((localStorage.length)>=30){
    finalistas(finalista1,finalista2)
}else{
    setTimeout(()=>{
        Swal.fire({
            icon: 'error',
            title: 'Para Wanchankein!!',
            text: 'Todavia no clasificaron los finalistas',
            background:"linear-gradient(#3d1723da,#050002dc)",
            color:"rgb(161, 165, 168)",
            iconColor:"e7077793",
            confirmButtonColor:"#e7077793",
            confirmButtonText:"Mala mia!",
            }).then((result)=>{
                if(result.isConfirmed){
                    if((localStorage.length)==28){
                        window.location.href="../pages/semi.html"
                    }else if((localStorage.length)==24){
                        window.location.href="../pages/cuartos.html"
                    }else if((localStorage.length)==16){
                        window.location.href="../pages/octavos.html"
                    }else{window.location.href="../pages/grupos.html"}
                }
            })
    },150)
}
const botonCampeon=document.querySelector("#botonCampeon")
function crearFinaldelMundo(local, visitante,npartido){
    
    const seccionFinal=document.getElementById("seccionFinal")
    const partidoFinal=document.createElement('section');
    partidoFinal.innerHTML=
    `<div class="alineacionSemis">
    <div class="contenedorSemis">
        <div class="partidoSemis">
            <div class="fechaHora">
                <h5>${datosFinal.fecha}</h5>
            </div>
            <div class="estadio">
                <h5>${datosFinal.estadio}</h5>
            </div>
            <div class="partido d-flex">
                <h5 class="equipoL">${local.pais}</h5>
                <img class="bandera" src="${local.bandera}" alt="bandera${local.pais}" />
                <input type="number" id="golesL${npartido}" size="1"/>
                <img class="copa" src="../img/copa.png" alt="copadelmundo"/>
                <input id="golesV${npartido}" type="number" size="1" />
                <img class="bandera" src="${visitante.bandera}" alt="bandera${visitante.pais}" />
                <h5 class="equipoV">${visitante.pais}</h5>
            </div>
            <div class="ganador d-flex">
                <p>Ganador:</p>
                <p id="ganador${npartido}" class="mx-3"></p>
            </div>
        </div>
    </div>
</div>
    `
    seccionFinal.appendChild(partidoFinal)
    botonCampeon.classList.remove("display-none")
    botonApretado=true

}
const botonFinal=document.querySelector("#botonFinal")
botonFinal.addEventListener("click", ()=>{
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
    crearFinaldelMundo(finaldelMundo[1],finaldelMundo[2],finaldelMundo[0])
}})
botonCampeon.addEventListener("click",()=>{
    let golesL=document.querySelector("#golesL1")
    let golesV=document.querySelector("#golesV1")
    let ganador=document.querySelector("#ganador1");
    if(golesL.value==""||golesV.value==""){
        Swal.fire({
            icon: 'error',
            title: 'Es un chiste?',
            text: 'Llegaste hasta aca y te seguis olvidando los goles?',
            background:"linear-gradient(#3d1723da,#050002dc)",
            color:"rgb(161, 165, 168)",
            iconColor:"e7077793",
            confirmButtonColor:"#e7077793",
            confirmButtonText:"Mala mia!"
            });
            

    }else if(golesL.value>golesV.value){
        if(finaldelMundo[1].pais=="Argentina"){
            Swal.fire({
                imageUrl:'../img/messifestejando.jpg',
                title: 'Dale Campeon',
                imageWidth:"450px",
                imageHeight:"250px",
                text: 'CLARO QUE SIII MESSI CAMPEON DEL MUNDO',
                background:"linear-gradient(#3d1723da,#050002dc)",
                color:"rgb(161, 165, 168)",
                iconColor:"e7077793",
                confirmButtonColor:"#e7077793",
                confirmButtonText:"Aguante Todo!"
                })
        }else if(finaldelMundo[2].pais=="Argentina"){
            Swal.fire({
                imageUrl:'../img/messillorando.jpg',
                title: 'Te deberia dar verguenza',
                text: 'Hiciste que Messi pierda otra final',
                background:"linear-gradient(#3d1723da,#050002dc)",
                color:"rgb(161, 165, 168)",
                iconColor:"e7077793",
                confirmButtonColor:"#e7077793",
                confirmButtonText:"Soy una Basura"
                })
        }else{
            Swal.fire({
                imageUrl:'../img/copaFinal.jpg',
                imageWidth:"450px",
                imageHeight:"250px",
                title:finaldelMundo[1].pais + " es el Campeon del Mundo",
                text: 'gracias por participar',
                background:"linear-gradient(#3d1723da,#050002dc)",
                color:"rgb(161, 165, 168)",
                iconColor:"e7077793",
                confirmButtonColor:"#e7077793",
                confirmButtonText:"Gracias por todo"
                })
        }}
        else if(golesL.value==golesV.value){
            if(finaldelMundo[1].pais=="Argentina"||finaldelMundo[2].pais=="Argentina"){
            Swal.fire({
                imageUrl:'../img/estasloco.jpg',
                title: 'Vos estas loco?',
                imageWidth:"450px",
                imageHeight:"250px",
                text: 'pone los resultados de los penales pero tene mucho cuidado!',
                background:"linear-gradient(#3d1723da,#050002dc)",
                color:"rgb(161, 165, 168)",
                iconColor:"e7077793",
                confirmButtonColor:"#e7077793",
                confirmButtonText:"Me gusta el suspenso"
                })}else{
                    Swal.fire({
                        icon: 'info',
                        title:finaldelMundo[1].pais +' y '+ finaldelMundo[2].pais+' A penales???',
                        text: innerHTML='Pone el resultado de los penales!',
                        background:"linear-gradient(#3d1723da,#050002dc)",
                        confirmButtonColor:"#e7077793",
                        iconColor:"e7077793",
                        color:"rgb(161, 165, 168)",
                        });
                }}
                else{
                    if(finaldelMundo[2].pais=="Argentina"){
                        Swal.fire({
                            imageUrl:'../img/messifestejando.jpg',
                            imageWidth:"450px",
                            imageHeight:"250px",
                            title: 'Dale Campeon',
                            text: 'CLARO QUE SIII MESSI CAMPEON DEL MUNDO',
                            background:"linear-gradient(#3d1723da,#050002dc)",
                            color:"rgb(161, 165, 168)",
                            iconColor:"e7077793",
                            confirmButtonColor:"#e7077793",
                            confirmButtonText:"Aguante Todo!"
                            })
                    }else if(finaldelMundo[1].pais=="Argentina"){
                        Swal.fire({
                            imageUrl:'../img/messillorando.jpg',
                            imageWidth:"450px",
                            imageHeight:"250px",
                            title: 'Te deberia dar verguenza',
                            text: 'Hiciste que Messi pierda otra final',
                            background:"linear-gradient(#3d1723da,#050002dc)",
                            color:"rgb(161, 165, 168)",
                            iconColor:"e7077793",
                            confirmButtonColor:"#e7077793",
                            confirmButtonText:"Soy una Basura"
                            })
                    }else{

                            Swal.fire({
                                imageUrl:'../img/copaFinal.jpg',
                                imageWidth:"450px",
                                imageHeight:"250px",
                                title:finaldelMundo[2].pais + " es el Campeon del Mundo",
                                text: 'gracias por participar',
                                background:"linear-gradient(#3d1723da,#050002dc)",
                                color:"rgb(161, 165, 168)",
                                iconColor:"e7077793",
                                confirmButtonColor:"#e7077793",
                                confirmButtonText:"Gracias por todo"
                                })

                    }}

    }
)
let html
const prueba=document.querySelector(".prueba")
function cargarEstadio(numero,posicion){
    fetch("../data/partidos.json")
    .then(respuesta=>respuesta.json())
    .then(data=>{
           const estadio =data.find((el)=>el.npartido===numero)
posicion.innerHTML=estadio.estadio   }); 

    
}


cargarEstadio(1,prueba)
 