const puntosganador=3
const puntosempate=1;

//array [Pais, grupo, Puntos, DifGoles!]
const arabia= {pais:"Arabia", grupo:"C", puntos:0,difgol:0, bandera:'../img/arabiasaudita.png'};
const alemania={pais:"Alemania",grupo:"E",puntos:0,difgol:0, bandera:'../img/alemania.png'};
const argentina= {pais:"Argentina", grupo:"C", puntos:0,difgol:0, bandera:'../img/argentina.png'};
const australia={pais:"Australia", grupo:"D", puntos:0,difgol:0, bandera:'../img/australia.png'};
const belgica={pais:"Belgica",grupo:"F",puntos:0,difgol:0, bandera:'../img/belgica.png'};
const brasil={pais:"Brasil",grupo:"G",puntos:0,difgol:0, bandera:'../img/brasil.png'};
const camerun={pais:"Camerun",grupo:"G",puntos:0,difgol:0, bandera:'../img/camerun.png'};
const canada={pais:"Canada",grupo:"F",puntos:0,difgol:0, bandera:'../img/canada.png'};
const corea={pais:"Corea",grupo:"H",puntos:0,difgol:0, bandera:'../img/corea.png'};
const costarica={pais:"Costa Rica",grupo:"E",puntos:0,difgol:0, bandera:'../img/costarica.png'};
const croacia={pais:"Croacia",grupo:"F",puntos:0,difgol:0, bandera:'../img/croacia.png'};
const dinamarca={pais:"Dinamarca", grupo:"D", puntos:0,difgol:0, bandera:'../img/dinamarca.png'};
const ecuador={pais:"Ecuador", grupo:"A", puntos:0,difgol:0, bandera:'../img/ecuador.png'};
const eeuu={pais:"EEUU", grupo:"B", puntos:0,difgol:0, bandera:'../img/eeuu.png'};
const espana={pais:"España",grupo:"E",puntos:0,difgol:0, bandera:'../img/espana.png'};
const francia={pais:"Francia", grupo:"D", puntos:0,difgol:0, bandera:'../img/francia.png'};
const gales={pais:"Gales", grupo:"B", puntos:0,difgol:0, bandera:'../img/gales.png'};
const ghana={pais:"Ghana",grupo:"H",puntos:0,difgol:0, bandera:'../img/ghana.png'};
const holanda={pais:"Holanda", grupo:"A", puntos:0,difgol:0, bandera:'../img/holanda.png'};
const inglaterra={pais:"Inglaterra", grupo:"B", puntos:0,difgol:0, bandera:'../img/inglaterra.png'};
const iran={pais:"Iran", grupo:"B", puntos:0,difgol:0, bandera:'../img/iran.png'};
const japon={pais:"Japon",grupo:"E",puntos:0,difgol:0, bandera:'../img/japon.png'};
const marruecos={pais:"Marruecos",grupo:"F",puntos:0,difgol:0, bandera:'../img/marruecos.png'};
const mexico= {pais:"Mexico", grupo:"C", puntos:0,difgol:0, bandera:'../img/mexico.png'};
const polonia= {pais:"Polonia", grupo:"C", puntos:0,difgol:0, bandera:'../img/polonia.png'};
const portugal={pais:"Portugal",grupo:"H",puntos:0,difgol:0, bandera:'../img/portugal.png'};
const qatar={pais:"Qatar", grupo:"A", puntos:0,difgol:0, bandera:'../img/qatar.png'};
const senegal={pais:"Senegal", grupo:"A", puntos:0,difgol:0, bandera:'../img/senegal.png'};
const serbia={pais:"Serbia",grupo:"G",puntos:0,difgol:0, bandera:'../img/serbia.png'};
const suiza={pais:"Suiza",grupo:"G",puntos:0,difgol:0, bandera:'../img/suiza.png'};
const tunez={pais:"Tunez", grupo:"D", puntos:0,difgol:0, bandera:'../img/tunez.png'};
const uruguay={pais:"Uruguay",grupo:"H",puntos:0,difgol:0, bandera:'../img/uruguay.png'};
//Grupos desordenados
const partidos=[[1,senegal,holanda],[2,qatar, ecuador],[3, qatar, senegal],[4, ecuador, holanda],[5, qatar, holanda],[6, ecuador, senegal],[7,inglaterra,iran],[8,eeuu,gales],[9,iran,gales],[10,inglaterra,eeuu],[11,inglaterra,gales],[12,iran,eeuu],[13,argentina,arabia],[14,mexico,polonia],[15,arabia,polonia],[16,argentina,mexico],[17,argentina,polonia],[18,arabia,mexico],[19,dinamarca,tunez],[20,francia,australia],[21,australia,tunez],[22,francia,dinamarca],[23,australia,dinamarca],[24,francia,tunez],[25,alemania,japon],[26,espana,costarica],[27,costarica,japon],[28,espana,alemania],[29,espana,japon],[30,costarica,alemania],[31,marruecos,croacia],[32,belgica,canada],[33,belgica,marruecos],[34,canada,croacia],[35,belgica,croacia],[36,canada,marruecos],[37,suiza,camerun],[38,brasil,serbia],[39,serbia,camerun],[40,brasil,suiza],[41,brasil,camerun],[42,serbia,suiza],[43,uruguay,corea],[44,portugal,ghana],[45,ghana,corea],[46,portugal,uruguay],[47,portugal,corea],[48,ghana,uruguay]]
const grupoA=[qatar, ecuador, senegal, holanda];
const grupoB=[inglaterra, iran, eeuu, gales];
const grupoC=[argentina, arabia, mexico, polonia];
const grupoD=[francia, australia, dinamarca, tunez];
const grupoE=[espana, costarica, alemania, japon];
const grupoF=[belgica, canada, marruecos, croacia];
const grupoG=[brasil, suiza, serbia, camerun];
const grupoH=[portugal, ghana, uruguay, corea];
//constantes del DOM

const btngA=document.querySelector("#botongA");
const sele1A=document.querySelector("#seleA1");
const ptos1A=document.querySelector("#ptosA1");
const dif1A=document.querySelector("#difA1");
const sele2A=document.querySelector("#seleA2");
const ptos2A=document.querySelector("#ptosA2");
const dif2A=document.querySelector("#difA2");
const sele3A=document.querySelector("#seleA3");
const ptos3A=document.querySelector("#ptosA3");
const dif3A=document.querySelector("#difA3");
const sele4A=document.querySelector("#seleA4");
const ptos4A=document.querySelector("#ptosA4");
const dif4A=document.querySelector("#difA4");
const sele1B= document.querySelector("#seleB1");
const sele2B= document.querySelector("#seleB2");
const sele3B= document.querySelector("#seleB3");
const sele4B= document.querySelector("#seleB4");
const ptos1B= document.querySelector("#ptosB1");
const ptos2B= document.querySelector("#ptosB2");
const ptos3B= document.querySelector("#ptosB3");
const ptos4B= document.querySelector("#ptosB4");
const dif1B= document.querySelector("#difB1");
const dif2B= document.querySelector("#difB2");
const dif3B= document.querySelector("#difB3");
const dif4B= document.querySelector("#difB4");
const btngB=document.querySelector("#botongB");
const sele1C= document.querySelector("#seleC1");
const sele2C= document.querySelector("#seleC2");
const sele3C= document.querySelector("#seleC3");
const sele4C= document.querySelector("#seleC4");
const ptos1C= document.querySelector("#ptosC1");
const ptos2C= document.querySelector("#ptosC2");
const ptos3C= document.querySelector("#ptosC3");
const ptos4C= document.querySelector("#ptosC4");
const dif1C= document.querySelector("#difC1");
const dif2C= document.querySelector("#difC2");
const dif3C= document.querySelector("#difC3");
const dif4C= document.querySelector("#difC4");
const btngC=document.querySelector("#botongC");
const sele1D= document.querySelector("#seleD1");
const sele2D= document.querySelector("#seleD2");
const sele3D= document.querySelector("#seleD3");
const sele4D= document.querySelector("#seleD4");
const ptos1D= document.querySelector("#ptosD1");
const ptos2D= document.querySelector("#ptosD2");
const ptos3D= document.querySelector("#ptosD3");
const ptos4D= document.querySelector("#ptosD4");
const dif1D= document.querySelector("#difD1");
const dif2D= document.querySelector("#difD2");
const dif3D= document.querySelector("#difD3");
const dif4D= document.querySelector("#difD4");
const btngD=document.querySelector("#botongD");
const sele1E= document.querySelector("#seleE1");
const sele2E= document.querySelector("#seleE2");
const sele3E= document.querySelector("#seleE3");
const sele4E= document.querySelector("#seleE4");
const ptos1E= document.querySelector("#ptosE1");
const ptos2E= document.querySelector("#ptosE2");
const ptos3E= document.querySelector("#ptosE3");
const ptos4E= document.querySelector("#ptosE4");
const dif1E= document.querySelector("#difE1");
const dif2E= document.querySelector("#difE2");
const dif3E= document.querySelector("#difE3");
const dif4E= document.querySelector("#difE4");
const btngE=document.querySelector("#botongE");
const sele1F= document.querySelector("#seleF1");
const sele2F= document.querySelector("#seleF2");
const sele3F= document.querySelector("#seleF3");
const sele4F= document.querySelector("#seleF4");
const ptos1F= document.querySelector("#ptosF1");
const ptos2F= document.querySelector("#ptosF2");
const ptos3F= document.querySelector("#ptosF3");
const ptos4F= document.querySelector("#ptosF4");
const dif1F= document.querySelector("#difF1");
const dif2F= document.querySelector("#difF2");
const dif3F= document.querySelector("#difF3");
const dif4F= document.querySelector("#difF4");
const btngF=document.querySelector("#botongF");
const sele1G= document.querySelector("#seleG1");
const sele2G= document.querySelector("#seleG2");
const sele3G= document.querySelector("#seleG3");
const sele4G= document.querySelector("#seleG4");
const ptos1G= document.querySelector("#ptosG1");
const ptos2G= document.querySelector("#ptosG2");
const ptos3G= document.querySelector("#ptosG3");
const ptos4G= document.querySelector("#ptosG4");
const dif1G= document.querySelector("#difG1");
const dif2G= document.querySelector("#difG2");
const dif3G= document.querySelector("#difG3");
const dif4G= document.querySelector("#difG4");
const btngG=document.querySelector("#botongG");
const sele1H= document.querySelector("#seleH1");
const sele2H= document.querySelector("#seleH2");
const sele3H= document.querySelector("#seleH3");
const sele4H= document.querySelector("#seleH4");
const ptos1H= document.querySelector("#ptosH1");
const ptos2H= document.querySelector("#ptosH2");
const ptos3H= document.querySelector("#ptosH3");
const ptos4H= document.querySelector("#ptosH4");
const dif1H= document.querySelector("#difH1");
const dif2H= document.querySelector("#difH2");
const dif3H= document.querySelector("#difH3");
const dif4H= document.querySelector("#difH4");
const btngH=document.querySelector("#botongH");

function ordenar(grupo){
    grupo.sort((a,b)=>{
        if(a.puntos>b.puntos){
            return -1
        }else if(a.puntos==b.puntos){
            return 0
        }else{
            return 1
        }
    })}


//PARTIDOS DE GRUPO A

btngA.addEventListener("click",()=>{
    for(partido of [1,2,3,4,5,6]){
        let golesL=document.querySelector(`#resultadoL${partido}`);
        let golesV=document.querySelector(`#resultadoV${partido}`);
        let ganador=document.querySelector(`#ganador${partido}`);
        if(golesL.value==""||golesV.value==""){

            Swal.fire({
                icon: 'error',
                title: 'Palo!!',
                text: 'Te olvidaste los goles Mostro',
                })
                
            }else if(golesL.value>golesV.value){
            partidos[partido-1][1].puntos=partidos[partido-1][1].puntos+puntosganador;
            partidos[partido-1][1].difgol=partidos[partido-1][1].difgol+(golesL.value-golesV.value);
            partidos[partido-1][2].difgol=partidos[partido-1][2].difgol-(golesL.value-golesV.value);
            ganador.innerHTML=`<img class="bandera" src="${partidos[partido-1][1].bandera}" alt="" />`+partidos[partido-1][1].pais
        }else if(golesL.value==golesV.value){
            ganador.innerText="Empate";
            partidos[partido-1][1].puntos++;
            partidos[partido-1][2].puntos++;
        }else if(golesL.value<golesV.value){
            partidos[partido-1][2].puntos=partidos[partido-1][2].puntos+puntosganador;
            partidos[partido-1][2].difgol=partidos[partido-1][2].difgol-(golesL.value-golesV.value);
            partidos[partido-1][1].difgol=partidos[partido-1][1].difgol+(golesL.value-golesV.value);
            ganador.innerHTML=`<img class="bandera" src="${partidos[partido-1][2].bandera}" alt="" />`+partidos[partido-1][2].pais}};

    

        ordenar(grupoA)
    
        Toastify({
        text: grupoA[0].pais+" y "+grupoA[1].pais+" a Octavos",
        duration: 3000,
                gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, rgb(122, 32, 32), rgb(48, 27, 27))",
        },
        onClick: function(){} // Callback after click
      }).showToast();

    console.log(grupoA)
    sele1A.innerHTML=`<img src="${grupoA[0].bandera}" class="banderaGrupo bandera">`+grupoA[0].pais;
    sele2A.innerHTML=`<img src="${grupoA[1].bandera}" class="banderaGrupo bandera">`+grupoA[1].pais;
    sele3A.innerHTML=`<img src="${grupoA[2].bandera}" class="banderaGrupo bandera">`+grupoA[2].pais;
    sele4A.innerHTML=`<img src="${grupoA[3].bandera}" class="banderaGrupo bandera">`+grupoA[3].pais;
    ptos1A.innerHTML=grupoA[0].puntos;
    ptos2A.innerHTML=grupoA[1].puntos;
    ptos3A.innerHTML=grupoA[2].puntos;
    ptos4A.innerHTML=grupoA[3].puntos;
    dif1A.innerHTML=grupoA[0].difgol;
    dif2A.innerHTML=grupoA[1].difgol;
    dif3A.innerHTML=grupoA[2].difgol;
    dif4A.innerHTML=grupoA[3].difgol;
    const primeroA=JSON.stringify(grupoA[0]);
    localStorage.setItem("ganadorA",primeroA);
    const ganadorA=JSON.parse(primeroA);
    localStorage.getItem("ganadorA");
    const segundoA=JSON.stringify(grupoA[1]);
    localStorage.setItem("runnerA",segundoA);
    const runnerA=JSON.parse(segundoA);
    localStorage.getItem("runnerA");
    // A1.innerText=ganadorA.pais
    

})
btngB.addEventListener("click",()=>{
    for(partido of [7,8,9,10,11,12]){
        let golesL=document.querySelector(`#resultadoL${partido}`);
        let golesV=document.querySelector(`#resultadoV${partido}`);
        let ganador=document.querySelector(`#ganador${partido}`);
        if(golesL.value==""||golesV.value==""){

            Swal.fire({
                icon: 'error',
                title: 'Palo!!',
                text: 'Te olvidaste los goles Mostro',
                })
                
            }else if(golesL.value>golesV.value){
            partidos[partido-1][1].puntos=partidos[partido-1][1].puntos+puntosganador;
            partidos[partido-1][1].difgol=partidos[partido-1][1].difgol+(golesL.value-golesV.value);
            partidos[partido-1][2].difgol=partidos[partido-1][2].difgol-(golesL.value-golesV.value);
            ganador.innerHTML=`<img class="bandera" src="${partidos[partido-1][1].bandera}" alt="" />`+partidos[partido-1][1].pais
        }else if(golesL.value==golesV.value){
            ganador.innerText="Empate";
            partidos[partido-1][1].puntos++;
            partidos[partido-1][2].puntos++;
        }else if(golesL.value<golesV.value){
            partidos[partido-1][2].puntos=partidos[partido-1][2].puntos+puntosganador;
            partidos[partido-1][2].difgol=partidos[partido-1][2].difgol-(golesL.value-golesV.value);
            partidos[partido-1][1].difgol=partidos[partido-1][1].difgol+(golesL.value-golesV.value);
            ganador.innerHTML=`<img class="bandera" src="${partidos[partido-1][2].bandera}" alt="" />`+partidos[partido-1][2].pais}};

    
        ordenar(grupoB)
    
        Toastify({
        text: grupoB[0].pais+" y "+grupoB[1].pais+" a Octavos",
        duration: 3000,
                gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, rgb(122, 32, 32), rgb(48, 27, 27))",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    console.log(grupoA)
    sele1B.innerHTML=`<img src="${grupoB[0].bandera}" class="banderaGrupo bandera">`+grupoB[0].pais;
    sele2B.innerHTML=`<img src="${grupoB[1].bandera}" class="banderaGrupo bandera">`+grupoB[1].pais;
    sele3B.innerHTML=`<img src="${grupoB[2].bandera}" class="banderaGrupo bandera">`+grupoB[2].pais;
    sele4B.innerHTML=`<img src="${grupoB[3].bandera}" class="banderaGrupo bandera">`+grupoB[3].pais;
    ptos1B.innerHTML=grupoB[0].puntos;
    ptos2B.innerHTML=grupoB[1].puntos;
    ptos3B.innerHTML=grupoB[2].puntos;
    ptos4B.innerHTML=grupoB[3].puntos;
    dif1B.innerHTML=grupoB[0].difgol;
    dif2B.innerHTML=grupoB[1].difgol;
    dif3B.innerHTML=grupoB[2].difgol;
    dif4B.innerHTML=grupoB[3].difgol;
    const primeroB=JSON.stringify(grupoB[0])
    localStorage.setItem("ganadorB",primeroB);
    const ganadorB=JSON.parse(primeroB)
    localStorage.getItem("ganadorB")
    const segundoB=JSON.stringify(grupoB[1])
    localStorage.setItem("runnerB",segundoB);
    const runnerB=JSON.parse(segundoB)
    localStorage.getItem("runnerB")
    // B1.innerText=ganadorB.pais
})

btngC.addEventListener("click",()=>{
    for(partido of [13,14,15,16,17,18]){
        let golesL=document.querySelector(`#resultadoL${partido}`);
        let golesV=document.querySelector(`#resultadoV${partido}`);
        let ganador=document.querySelector(`#ganador${partido}`);
        if(golesL.value==""||golesV.value==""){

            Swal.fire({
                icon: 'error',
                title: 'Palo!!',
                text: 'Te olvidaste los goles Mostro',
                })
                
            }else if(golesL.value>golesV.value){
            partidos[partido-1][1].puntos=partidos[partido-1][1].puntos+puntosganador;
            partidos[partido-1][1].difgol=partidos[partido-1][1].difgol+(golesL.value-golesV.value);
            partidos[partido-1][2].difgol=partidos[partido-1][2].difgol-(golesL.value-golesV.value);
            ganador.innerHTML=`<img class="bandera" src="${partidos[partido-1][1].bandera}" alt="" />`+partidos[partido-1][1].pais
        }else if(golesL.value==golesV.value){
            ganador.innerText="Empate";
            partidos[partido-1][1].puntos++;
            partidos[partido-1][2].puntos++;
        }else if(golesL.value<golesV.value){
            partidos[partido-1][2].puntos=partidos[partido-1][2].puntos+puntosganador;
            partidos[partido-1][2].difgol=partidos[partido-1][2].difgol-(golesL.value-golesV.value);
            partidos[partido-1][1].difgol=partidos[partido-1][1].difgol+(golesL.value-golesV.value);
            ganador.innerHTML=`<img class="bandera" src="${partidos[partido-1][2].bandera}" alt="" />`+partidos[partido-1][2].pais}};

    

        ordenar(grupoC)
    
        Toastify({
        text: grupoC[0].pais+" y "+grupoC[1].pais+" a Octavos",
        duration: 3000,
                gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, rgb(122, 32, 32), rgb(48, 27, 27))",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    console.log(grupoA)
    sele1C.innerHTML=`<img src="${grupoC[0].bandera}" class="banderaGrupo bandera">`+grupoC[0].pais;
    sele2C.innerHTML=`<img src="${grupoC[1].bandera}" class="banderaGrupo bandera">`+grupoC[1].pais;
    sele3C.innerHTML=`<img src="${grupoC[2].bandera}" class="banderaGrupo bandera">`+grupoC[2].pais;
    sele4C.innerHTML=`<img src="${grupoC[3].bandera}" class="banderaGrupo bandera">`+grupoC[3].pais;
    ptos1C.innerHTML=grupoC[0].puntos;
    ptos2C.innerHTML=grupoC[1].puntos;
    ptos3C.innerHTML=grupoC[2].puntos;
    ptos4C.innerHTML=grupoC[3].puntos;
    dif1C.innerHTML=grupoC[0].difgol;
    dif2C.innerHTML=grupoC[1].difgol;
    dif3C.innerHTML=grupoC[2].difgol;
    dif4C.innerHTML=grupoC[3].difgol;
    const primeroC=JSON.stringify(grupoC[0])
    localStorage.setItem("ganadorC",primeroC);
    const ganadorC=JSON.parse(primeroC)
    localStorage.getItem("ganadorC")
    const segundoC=JSON.stringify(grupoC[1])
    localStorage.setItem("runnerC",segundoC);
    const runnerC=JSON.parse(segundoC)
    localStorage.getItem("runnerC")
    // C1.innerText=ganadorC.pais
})

btngD.addEventListener("click",()=>{
    for(partido of [19,20,21,22,23,24]){
        let golesL=document.querySelector(`#resultadoL${partido}`);
        let golesV=document.querySelector(`#resultadoV${partido}`);
        let ganador=document.querySelector(`#ganador${partido}`);
        if(golesL.value==""||golesV.value==""){

            Swal.fire({
                icon: 'error',
                title: 'Palo!!',
                text: 'Te olvidaste los goles Mostro',
                })
                
            }else if(golesL.value>golesV.value){
            partidos[partido-1][1].puntos=partidos[partido-1][1].puntos+puntosganador;
            partidos[partido-1][1].difgol=partidos[partido-1][1].difgol+(golesL.value-golesV.value);
            partidos[partido-1][2].difgol=partidos[partido-1][2].difgol-(golesL.value-golesV.value);
            ganador.innerHTML=`<img class="bandera" src="${partidos[partido-1][1].bandera}" alt="" />`+partidos[partido-1][1].pais
        }else if(golesL.value==golesV.value){
            ganador.innerText="Empate";
            partidos[partido-1][1].puntos++;
            partidos[partido-1][2].puntos++;
        }else if(golesL.value<golesV.value){
            partidos[partido-1][2].puntos=partidos[partido-1][2].puntos+puntosganador;
            partidos[partido-1][2].difgol=partidos[partido-1][2].difgol-(golesL.value-golesV.value);
            partidos[partido-1][1].difgol=partidos[partido-1][1].difgol+(golesL.value-golesV.value);
            ganador.innerHTML=`<img class="bandera" src="${partidos[partido-1][2].bandera}" alt="" />`+partidos[partido-1][2].pais}};

    
        ordenar(grupoD)
    
        Toastify({
        text: grupoD[0].pais+" y "+grupoD[1].pais+" a Octavos",
        duration: 3000,
                gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, rgb(122, 32, 32), rgb(48, 27, 27))",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    console.log(grupoA)
    sele1D.innerHTML=`<img src="${grupoD[0].bandera}" class="banderaGrupo bandera">`+grupoD[0].pais;
    sele2D.innerHTML=`<img src="${grupoD[1].bandera}" class="banderaGrupo bandera">`+grupoD[1].pais;
    sele3D.innerHTML=`<img src="${grupoD[2].bandera}" class="banderaGrupo bandera">`+grupoD[2].pais;
    sele4D.innerHTML=`<img src="${grupoD[3].bandera}" class="banderaGrupo bandera">`+grupoD[3].pais;
    ptos1D.innerHTML=grupoD[0].puntos;
    ptos2D.innerHTML=grupoD[1].puntos;
    ptos3D.innerHTML=grupoD[2].puntos;
    ptos4D.innerHTML=grupoD[3].puntos;
    dif1D.innerHTML=grupoD[0].difgol;
    dif2D.innerHTML=grupoD[1].difgol;
    dif3D.innerHTML=grupoD[2].difgol;
    dif4D.innerHTML=grupoD[3].difgol;
    const primeroD=JSON.stringify(grupoD[0])
    localStorage.setItem("ganadorD",primeroD);
    const ganadorD=JSON.parse(primeroD)
    localStorage.getItem("ganadorD")
    const segundoD=JSON.stringify(grupoD[1])
    localStorage.setItem("runnerD",segundoD);
    const runnerD=JSON.parse(segundoD)
    localStorage.getItem("runnerD");
    // D1.innerText=ganadorD.pais
})

btngE.addEventListener("click",()=>{
    for(partido of [25,26,27,28,29,30]){
        let golesL=document.querySelector(`#resultadoL${partido}`);
        let golesV=document.querySelector(`#resultadoV${partido}`);
        let ganador=document.querySelector(`#ganador${partido}`);
        if(golesL.value==""||golesV.value==""){

            Swal.fire({
                icon: 'error',
                title: 'Palo!!',
                text: 'Te olvidaste los goles Mostro',
                })
                
            }else if(golesL.value>golesV.value){
            partidos[partido-1][1].puntos=partidos[partido-1][1].puntos+puntosganador;
            partidos[partido-1][1].difgol=partidos[partido-1][1].difgol+(golesL.value-golesV.value);
            partidos[partido-1][2].difgol=partidos[partido-1][2].difgol-(golesL.value-golesV.value);
            ganador.innerHTML=`<img class="bandera" src="${partidos[partido-1][1].bandera}" alt="" />`+partidos[partido-1][1].pais
        }else if(golesL.value==golesV.value){
            ganador.innerText="Empate";
            partidos[partido-1][1].puntos++;
            partidos[partido-1][2].puntos++;
        }else if(golesL.value<golesV.value){
            partidos[partido-1][2].puntos=partidos[partido-1][2].puntos+puntosganador;
            partidos[partido-1][2].difgol=partidos[partido-1][2].difgol-(golesL.value-golesV.value);
            partidos[partido-1][1].difgol=partidos[partido-1][1].difgol+(golesL.value-golesV.value);
            ganador.innerHTML=`<img class="bandera" src="${partidos[partido-1][2].bandera}" alt="" />`+partidos[partido-1][2].pais}};

    

        ordenar(grupoE)
    
        Toastify({
        text: grupoE[0].pais+" y "+grupoE[1].pais+" a Octavos",
        duration: 3000,
                gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, rgb(122, 32, 32), rgb(48, 27, 27))",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    console.log(grupoA)
    sele1E.innerHTML=`<img src="${grupoE[0].bandera}" class="banderaGrupo bandera">`+grupoE[0].pais;
    sele2E.innerHTML=`<img src="${grupoE[1].bandera}" class="banderaGrupo bandera">`+grupoE[1].pais;
    sele3E.innerHTML=`<img src="${grupoE[2].bandera}" class="banderaGrupo bandera">`+grupoE[2].pais;
    sele4E.innerHTML=`<img src="${grupoE[3].bandera}" class="banderaGrupo bandera">`+grupoE[3].pais;
    ptos1E.innerHTML=grupoE[0].puntos;
    ptos2E.innerHTML=grupoE[1].puntos;
    ptos3E.innerHTML=grupoE[2].puntos;
    ptos4E.innerHTML=grupoE[3].puntos;
    dif1E.innerHTML=grupoE[0].difgol;
    dif2E.innerHTML=grupoE[1].difgol;
    dif3E.innerHTML=grupoE[2].difgol;
    dif4E.innerHTML=grupoE[3].difgol;
    const primeroE=JSON.stringify(grupoE[0])
    localStorage.setItem("ganadorE",primeroE);
    const ganadorE=JSON.parse(primeroE)
    localStorage.getItem("ganadorE")
    const segundoE=JSON.stringify(grupoE[1])
    localStorage.setItem("runnerE",segundoE);
    const runnerE=JSON.parse(segundoE)
    localStorage.getItem("runnerE");
    // E1.innerText=ganadorE.pais
})

btngF.addEventListener("click",()=>{
    for(partido of [31,32,33,34,35,36]){
        let golesL=document.querySelector(`#resultadoL${partido}`);
        let golesV=document.querySelector(`#resultadoV${partido}`);
        let ganador=document.querySelector(`#ganador${partido}`);
        if(golesL.value==""||golesV.value==""){

            Swal.fire({
                icon: 'error',
                title: 'Palo!!',
                text: 'Te olvidaste los goles Mostro',
                })
                
            }else if(golesL.value>golesV.value){
            partidos[partido-1][1].puntos=partidos[partido-1][1].puntos+puntosganador;
            partidos[partido-1][1].difgol=partidos[partido-1][1].difgol+(golesL.value-golesV.value);
            partidos[partido-1][2].difgol=partidos[partido-1][2].difgol-(golesL.value-golesV.value);
            ganador.innerHTML=`<img class="bandera" src="${partidos[partido-1][1].bandera}" alt="" />`+partidos[partido-1][1].pais
        }else if(golesL.value==golesV.value){
            ganador.innerText="Empate";
            partidos[partido-1][1].puntos++;
            partidos[partido-1][2].puntos++;
        }else if(golesL.value<golesV.value){
            partidos[partido-1][2].puntos=partidos[partido-1][2].puntos+puntosganador;
            partidos[partido-1][2].difgol=partidos[partido-1][2].difgol-(golesL.value-golesV.value);
            partidos[partido-1][1].difgol=partidos[partido-1][1].difgol+(golesL.value-golesV.value);
            ganador.innerHTML=`<img class="bandera" src="${partidos[partido-1][2].bandera}" alt="" />`+partidos[partido-1][2].pais}};

    
        ordenar(grupoF)
    
        Toastify({
        text: grupoF[0].pais+" y "+grupoF[1].pais+" a Octavos",
        duration: 3000,
                gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, rgb(122, 32, 32), rgb(48, 27, 27))",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    console.log(grupoA)
    sele1F.innerHTML=`<img src="${grupoF[0].bandera}" class="banderaGrupo bandera">`+grupoF[0].pais;
    sele2F.innerHTML=`<img src="${grupoF[1].bandera}" class="banderaGrupo bandera">`+grupoF[1].pais;
    sele3F.innerHTML=`<img src="${grupoF[2].bandera}" class="banderaGrupo bandera">`+grupoF[2].pais;
    sele4F.innerHTML=`<img src="${grupoF[3].bandera}" class="banderaGrupo bandera">`+grupoF[3].pais;
    ptos1F.innerHTML=grupoF[0].puntos;
    ptos2F.innerHTML=grupoF[1].puntos;
    ptos3F.innerHTML=grupoF[2].puntos;
    ptos4F.innerHTML=grupoF[3].puntos;
    dif1F.innerHTML=grupoF[0].difgol;
    dif2F.innerHTML=grupoF[1].difgol;
    dif3F.innerHTML=grupoF[2].difgol;
    dif4F.innerHTML=grupoF[3].difgol;
    const primeroF=JSON.stringify(grupoF[0])
    localStorage.setItem("ganadorF",primeroF);
    const ganadorF=JSON.parse(primeroF)
    localStorage.getItem("ganadorA")
    const segundoF=JSON.stringify(grupoF[1])
    localStorage.setItem("runnerF",segundoF);
    const runnerF=JSON.parse(segundoF);
    localStorage.getItem("runnerF");
    // F1.innerText=ganadorF.pais
})

btngG.addEventListener("click",()=>{for(partido of [37,38,39,40,41,42]){
        let golesL=document.querySelector(`#resultadoL${partido}`);
        let golesV=document.querySelector(`#resultadoV${partido}`);
        let ganador=document.querySelector(`#ganador${partido}`);

        if(golesL.value==""||golesV.value==""){
            Swal.fire({
                icon: 'error',
                title: 'Palo!!',
                text: 'Te olvidaste los goles Mostro',
                })
                
            }else if(golesL.value>golesV.value){
            partidos[partido-1][1].puntos=partidos[partido-1][1].puntos+puntosganador;
            partidos[partido-1][1].difgol=partidos[partido-1][1].difgol+(golesL.value-golesV.value);
            partidos[partido-1][2].difgol=partidos[partido-1][2].difgol-(golesL.value-golesV.value);
            ganador.innerHTML=`<img class="bandera" src="${partidos[partido-1][1].bandera}" alt="" />`+partidos[partido-1][1].pais
        }else if(golesL.value==golesV.value){
            ganador.innerText="Empate";
            partidos[partido-1][1].puntos++;
            partidos[partido-1][2].puntos++;
        }else if(golesL.value<golesV.value){
            partidos[partido-1][2].puntos=partidos[partido-1][2].puntos+puntosganador;
            partidos[partido-1][2].difgol=partidos[partido-1][2].difgol-(golesL.value-golesV.value);
            partidos[partido-1][1].difgol=partidos[partido-1][1].difgol+(golesL.value-golesV.value);
            ganador.innerHTML=`<img class="bandera" src="${partidos[partido-1][2].bandera}" alt="" />`+partidos[partido-1][2].pais}};

    
        ordenar(grupoG)
    
        Toastify({
        text: grupoG[0].pais+" y "+grupoG[1].pais+" a Octavos",
        duration: 3000,
                gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {background: "linear-gradient(to right, rgb(122, 32, 32), rgb(48, 27, 27))",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    console.log(grupoG)
    sele1G.innerHTML=`<img src="${grupoG[0].bandera}" class="banderaGrupo bandera">`+grupoG[0].pais;
    sele2G.innerHTML=`<img src="${grupoG[1].bandera}" class="banderaGrupo bandera">`+grupoG[1].pais;
    sele3G.innerHTML=`<img src="${grupoG[2].bandera}" class="banderaGrupo bandera">`+grupoG[2].pais;
    sele4G.innerHTML=`<img src="${grupoG[3].bandera}" class="banderaGrupo bandera">`+grupoG[3].pais;
    ptos1G.innerHTML=grupoG[0].puntos;
    ptos2G.innerHTML=grupoG[1].puntos;
    ptos3G.innerHTML=grupoG[2].puntos;
    ptos4G.innerHTML=grupoG[3].puntos;
    dif1G.innerHTML=grupoG[0].difgol;
    dif2G.innerHTML=grupoG[1].difgol;
    dif3G.innerHTML=grupoG[2].difgol;
    dif4G.innerHTML=grupoG[3].difgol;
    const primeroG=JSON.stringify(grupoG[0])
    localStorage.setItem("ganadorG",primeroG);
    const ganadorG=JSON.parse(primeroG)
    localStorage.getItem("ganadorG")
    const segundoG=JSON.stringify(grupoG[1])
    localStorage.setItem("runnerG",segundoG);
    const runnerG=JSON.parse(segundoG)
    localStorage.getItem("runnerG");
})


btngH.addEventListener("click",()=>{
    for(partido of [43,44,45,46,47,48]){
        let golesL=document.querySelector(`#resultadoL${partido}`);
        let golesV=document.querySelector(`#resultadoV${partido}`);
        let ganador=document.querySelector(`#ganador${partido}`);
        if(golesL.value==""||golesV.value==""){

            Swal.fire({
                icon: 'error',
                title: 'Palo!!',
                text: 'Te olvidaste los goles Mostro',
                })
                
            }else if(golesL.value>golesV.value){
            partidos[partido-1][1].puntos=partidos[partido-1][1].puntos+puntosganador;
            partidos[partido-1][1].difgol=partidos[partido-1][1].difgol+(golesL.value-golesV.value);
            partidos[partido-1][2].difgol=partidos[partido-1][2].difgol-(golesL.value-golesV.value);
            ganador.innerHTML=`<img class="bandera" src="${partidos[partido-1][1].bandera}" alt="" />`+partidos[partido-1][1].pais
        }else if(golesL.value==golesV.value){
            ganador.innerText="Empate";
            partidos[partido-1][1].puntos++;
            partidos[partido-1][2].puntos++;
        }else if(golesL.value<golesV.value){
            partidos[partido-1][2].puntos=partidos[partido-1][2].puntos+puntosganador;
            partidos[partido-1][2].difgol=partidos[partido-1][2].difgol-(golesL.value-golesV.value);
            partidos[partido-1][1].difgol=partidos[partido-1][1].difgol+(golesL.value-golesV.value);
            ganador.innerHTML=`<img class="bandera" src="${partidos[partido-1][2].bandera}" alt="" />`+partidos[partido-1][2].pais}};

    
        ordenar(grupoH)
    
        Toastify({
        text: grupoH[0].pais+" y "+grupoH[1].pais+" a Octavos",
        duration: 3000,
                gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {background: "linear-gradient(to right, rgb(122, 32, 32), rgb(48, 27, 27))",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    console.log(grupoH)
    sele1H.innerHTML=`<img src="${grupoH[0].bandera}" class="banderaGrupo bandera">`+grupoH[0].pais;
    sele2H.innerHTML=`<img src="${grupoH[1].bandera}" class="banderaGrupo bandera">`+grupoH[1].pais;
    sele3H.innerHTML=`<img src="${grupoH[2].bandera}" class="banderaGrupo bandera">`+grupoH[2].pais;
    sele4H.innerHTML=`<img src="${grupoH[3].bandera}" class="banderaGrupo bandera">`+grupoH[3].pais;
    ptos1H.innerHTML=grupoH[0].puntos;
    ptos2H.innerHTML=grupoH[1].puntos;
    ptos3H.innerHTML=grupoH[2].puntos;
    ptos4H.innerHTML=grupoH[3].puntos;
    dif1H.innerHTML=grupoH[0].difgol;
    dif2H.innerHTML=grupoH[1].difgol;
    dif3H.innerHTML=grupoH[2].difgol;
    dif4H.innerHTML=grupoH[3].difgol;
    const primeroH=JSON.stringify(grupoH[0])
    localStorage.setItem("ganadorH",primeroH);
    const ganadorH=JSON.parse(primeroH)
    localStorage.getItem("ganadorH")
    const segundoH=JSON.stringify(grupoH[1])
    localStorage.setItem("runnerH",segundoH);
    const runnerH=JSON.parse(segundoH)
    localStorage.getItem("runnerH");
})
