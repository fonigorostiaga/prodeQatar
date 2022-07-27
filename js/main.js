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
const grupoA=[qatar, ecuador, senegal, holanda];
const grupoB=[inglaterra, iran, eeuu, gales];
const grupoC=[argentina, arabia, mexico, polonia];
const grupoD=[francia, australia, dinamarca, tunez];
const grupoE=[espana, costarica, alemania, japon];
const grupoF=[belgica, canada, marruecos, croacia];
const grupoG=[brasil, suiza, serbia, camerun];
const grupoH=[portugal, ghana, uruguay, corea];
//constantes del DOM
const btnp1=document.querySelector("#botonp1");
const ganador1=document.querySelector("#ganador1");
const resL1=document.querySelector("#resultadoL1");
const resV1=document.querySelector("#resultadoV1");
const btnp2=document.querySelector("#botonp2");
const btnp3=document.querySelector("#botonp3");
const btnp4=document.querySelector("#botonp4");
const btnp5=document.querySelector("#botonp5");
const btnp6=document.querySelector("#botonp6");
const ganador2=document.querySelector("#ganador2");
const ganador3=document.querySelector("#ganador3");
const ganador4=document.querySelector("#ganador4");
const ganador5=document.querySelector("#ganador5");
const ganador6=document.querySelector("#ganador6");
const resL2=document.querySelector("#resultadoL2");
const resL3=document.querySelector("#resultadoL3");
const resL4=document.querySelector("#resultadoL4");
const resL5=document.querySelector("#resultadoL5");
const resL6=document.querySelector("#resultadoL6");
const resV2=document.querySelector("#resultadoV2");
const resV3=document.querySelector("#resultadoV3");
const resV4=document.querySelector("#resultadoV4");
const resV5=document.querySelector("#resultadoV5");
const resV6=document.querySelector("#resultadoV6");
const btnp7=document.querySelector("#botonp7");
const btnp8=document.querySelector("#botonp8");
const btnp9=document.querySelector("#botonp9");
const btnp10=document.querySelector("#botonp10");
const btnp11=document.querySelector("#botonp11");
const btnp12=document.querySelector("#botonp12");
const btnp13=document.querySelector("#botonp13");
const btnp14=document.querySelector("#botonp14");
const btnp15=document.querySelector("#botonp15");
const btnp16=document.querySelector("#botonp16");
const btnp17=document.querySelector("#botonp17");
const btnp18=document.querySelector("#botonp18");
const btnp19=document.querySelector("#botonp19");
const btnp20=document.querySelector("#botonp20");
const btnp21=document.querySelector("#botonp21");
const btnp22=document.querySelector("#botonp22");
const btnp23=document.querySelector("#botonp23");
const btnp24=document.querySelector("#botonp24");
const btnp25=document.querySelector("#botonp25");
const btnp26=document.querySelector("#botonp26");
const btnp27=document.querySelector("#botonp27");
const btnp28=document.querySelector("#botonp28");
const btnp29=document.querySelector("#botonp29");
const btnp30=document.querySelector("#botonp30");
const btnp31=document.querySelector("#botonp31");
const btnp32=document.querySelector("#botonp32");
const btnp33=document.querySelector("#botonp33");
const btnp34=document.querySelector("#botonp34");
const btnp35=document.querySelector("#botonp35");
const btnp36=document.querySelector("#botonp36");
const btnp37=document.querySelector("#botonp37");
const btnp38=document.querySelector("#botonp38");
const btnp39=document.querySelector("#botonp39");
const btnp40=document.querySelector("#botonp40");
const btnp41=document.querySelector("#botonp41");
const btnp42=document.querySelector("#botonp42");
const btnp43=document.querySelector("#botonp43");
const btnp44=document.querySelector("#botonp44");
const btnp45=document.querySelector("#botonp45");
const btnp46=document.querySelector("#botonp46");
const btnp47=document.querySelector("#botonp47");
const btnp48=document.querySelector("#botonp48");
const resL7= document.querySelector("#resultadoL7");
const resL8= document.querySelector("#resultadoL8");
const resL9= document.querySelector("#resultadoL9");
const resL10= document.querySelector("#resultadoL10");
const resL11= document.querySelector("#resultadoL11");
const resL12= document.querySelector("#resultadoL12");
const resL13= document.querySelector("#resultadoL13");
const resL14= document.querySelector("#resultadoL14");
const resL15= document.querySelector("#resultadoL15");
const resL16= document.querySelector("#resultadoL16");
const resL17= document.querySelector("#resultadoL17");
const resL18= document.querySelector("#resultadoL18");
const resL19= document.querySelector("#resultadoL19");
const resL20= document.querySelector("#resultadoL20");
const resL21= document.querySelector("#resultadoL21");
const resL22= document.querySelector("#resultadoL22");
const resL23= document.querySelector("#resultadoL23");
const resL24= document.querySelector("#resultadoL24");
const resL25= document.querySelector("#resultadoL25");
const resL26= document.querySelector("#resultadoL26");
const resL27= document.querySelector("#resultadoL27");
const resL28= document.querySelector("#resultadoL28");
const resL29= document.querySelector("#resultadoL29");
const resL30= document.querySelector("#resultadoL30");
const resL31= document.querySelector("#resultadoL31");
const resL32= document.querySelector("#resultadoL32");
const resL33= document.querySelector("#resultadoL33");
const resL34= document.querySelector("#resultadoL34");
const resL35= document.querySelector("#resultadoL35");
const resL36= document.querySelector("#resultadoL36");
const resL37= document.querySelector("#resultadoL37");
const resL38= document.querySelector("#resultadoL38");
const resL39= document.querySelector("#resultadoL39");
const resL40= document.querySelector("#resultadoL40");
const resL41= document.querySelector("#resultadoL41");
const resL42= document.querySelector("#resultadoL42");
const resL43= document.querySelector("#resultadoL43");
const resL44= document.querySelector("#resultadoL44");
const resL45= document.querySelector("#resultadoL45");
const resL46= document.querySelector("#resultadoL46");
const resL47= document.querySelector("#resultadoL47");
const resL48= document.querySelector("#resultadoL48");
const resV7= document.querySelector("#resultadoV7");
const resV8= document.querySelector("#resultadoV8");
const resV9= document.querySelector("#resultadoV9");
const resV10= document.querySelector("#resultadoV10");
const resV11= document.querySelector("#resultadoV11");
const resV12= document.querySelector("#resultadoV12");
const resV13= document.querySelector("#resultadoV13");
const resV14= document.querySelector("#resultadoV14");
const resV15= document.querySelector("#resultadoV15");
const resV16= document.querySelector("#resultadoV16");
const resV17= document.querySelector("#resultadoV17");
const resV18= document.querySelector("#resultadoV18");
const resV19= document.querySelector("#resultadoV19");
const resV20= document.querySelector("#resultadoV20");
const resV21= document.querySelector("#resultadoV21");
const resV22= document.querySelector("#resultadoV22");
const resV23= document.querySelector("#resultadoV23");
const resV24= document.querySelector("#resultadoV24");
const resV25= document.querySelector("#resultadoV25");
const resV26= document.querySelector("#resultadoV26");
const resV27= document.querySelector("#resultadoV27");
const resV28= document.querySelector("#resultadoV28");
const resV29= document.querySelector("#resultadoV29");
const resV30= document.querySelector("#resultadoV30");
const resV31= document.querySelector("#resultadoV31");
const resV32= document.querySelector("#resultadoV32");
const resV33= document.querySelector("#resultadoV33");
const resV34= document.querySelector("#resultadoV34");
const resV35= document.querySelector("#resultadoV35");
const resV36= document.querySelector("#resultadoV36");
const resV37= document.querySelector("#resultadoV37");
const resV38= document.querySelector("#resultadoV38");
const resV39= document.querySelector("#resultadoV39");
const resV40= document.querySelector("#resultadoV40");
const resV41= document.querySelector("#resultadoV41");
const resV42= document.querySelector("#resultadoV42");
const resV43= document.querySelector("#resultadoV43");
const resV44= document.querySelector("#resultadoV44");
const resV45= document.querySelector("#resultadoV45");
const resV46= document.querySelector("#resultadoV46");
const resV47= document.querySelector("#resultadoV47");
const resV48= document.querySelector("#resultadoV48");
const ganador7=document.querySelector("#ganador7");
const ganador8=document.querySelector("#ganador8");
const ganador9=document.querySelector("#ganador9");
const ganador10=document.querySelector("#ganador10");
const ganador11=document.querySelector("#ganador11");
const ganador12=document.querySelector("#ganador12");
const ganador13=document.querySelector("#ganador13");
const ganador14=document.querySelector("#ganador14");
const ganador15=document.querySelector("#ganador15");
const ganador16=document.querySelector("#ganador16");
const ganador17=document.querySelector("#ganador17");
const ganador18=document.querySelector("#ganador18");
const ganador19=document.querySelector("#ganador19");
const ganador20=document.querySelector("#ganador20");
const ganador21=document.querySelector("#ganador21");
const ganador22=document.querySelector("#ganador22");
const ganador23=document.querySelector("#ganador23");
const ganador24=document.querySelector("#ganador24");
const ganador25=document.querySelector("#ganador25");
const ganador26=document.querySelector("#ganador26");
const ganador27=document.querySelector("#ganador27");
const ganador28=document.querySelector("#ganador28");
const ganador29=document.querySelector("#ganador29");
const ganador30=document.querySelector("#ganador30");
const ganador31=document.querySelector("#ganador31");
const ganador32=document.querySelector("#ganador32");
const ganador33=document.querySelector("#ganador33");
const ganador34=document.querySelector("#ganador34");
const ganador35=document.querySelector("#ganador35");
const ganador36=document.querySelector("#ganador36");
const ganador37=document.querySelector("#ganador37");
const ganador38=document.querySelector("#ganador38");
const ganador39=document.querySelector("#ganador39");
const ganador40=document.querySelector("#ganador40");
const ganador41=document.querySelector("#ganador41");
const ganador42=document.querySelector("#ganador42");
const ganador43=document.querySelector("#ganador43");
const ganador44=document.querySelector("#ganador44");
const ganador45=document.querySelector("#ganador45");
const ganador46=document.querySelector("#ganador46");
const ganador47=document.querySelector("#ganador47");
const ganador48=document.querySelector("#ganador48");
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

//funciones
//modifica Objetos del partido
function partidoGrupo(golesL,golesV,equipoL,equipoV){
    if(parseInt(golesL)>parseInt(golesV)){
        equipoL.puntos=equipoL.puntos+puntosganador;
        equipoL.difgol=equipoL.difgol+(golesL-golesV);
        equipoV.difgol=equipoV.difgol-(golesL-golesV);
        
    }else if(golesL==golesV){
        equipoL.puntos=equipoL.puntos+puntosempate;
        equipoV.puntos=equipoV.puntos+puntosempate;
    }else{
        equipoV.puntos=equipoV.puntos+puntosganador;
        equipoV.difgol=equipoV.difgol+(golesV-golesL);
        equipoL.difgol=equipoL.difgol-(golesV-golesL);
    }
    
    
}

// //ordenar grupo post zona Grupos
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
//trae al ganador al campo correcto
function ganador(ganador,posicion){
    posicion.innerText=ganador.pais
}
//trae "empate"
function empate(posicion){
    posicion.innerText="EMPATE"
}
//PARTIDOS DE GRUPO A
btnp1.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL1.value,resV1.value,senegal, holanda)
    golesL=parseInt(resL1.value);
    golesV=parseInt(resV1.value);
    golesL>golesV ? ganador(senegal,ganador1) : golesL==golesV ? empate(ganador1) : ganador(holanda,ganador1)})
    
btnp2.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL2.value,resV2.value,qatar,ecuador)
    golesL=parseInt(resL2.value);
    golesV=parseInt(resV2.value);
    golesL>golesV ? ganador(qatar,ganador2) : golesL==golesV ? empate(ganador2) : ganador(ecuador,ganador2)})
btnp3.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL3.value,resV3.value,qatar,senegal)
    golesL=parseInt(resL3.value);
    golesV=parseInt(resV3.value);
    golesL>golesV ?  ganador(qatar,ganador3): golesL==golesV ? empate(ganador3): ganador(senegal,ganador3)})
btnp4.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL4.value,resV4.value,ecuador,holanda)
    golesL=parseInt(resL4.value);
    golesV=parseInt(resV4.value);
    golesL>golesV ?  ganador(ecuador,ganador4): golesL==golesV ? empate(ganador4):ganador(holanda,ganador4)})
btnp5.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL5.value,resV5.value,qatar,holanda)
    golesL=parseInt(resL5.value);
    golesV=parseInt(resV5.value);
    golesL>golesV ?  ganador(qatar,ganador5): golesL==golesV ?empate(ganador5):ganador(holanda,ganador5)})
btnp6.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL6.value,resV6.value,ecuador,senegal)
    golesL=parseInt(resL6.value);
    golesV=parseInt(resV6.value);
    golesL>golesV ?   ganador(ecuador,ganador6) : golesL==golesV ? empate(ganador6) : ganador(senegal,ganador6)})
btngA.addEventListener("click",()=>{
    ordenar(grupoA)
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

btnp7.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL7.value,resV7.value,inglaterra, iran)
    golesL=parseInt(resL7.value);
    golesV=parseInt(resV7.value);
    golesL>golesV ?    ganador(inglaterra,ganador7): golesL==golesV ? empate(ganador7) : ganador(iran,ganador7)})
btnp8.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL8.value,resV8.value,eeuu, gales)
    golesL=parseInt(resL8.value);
    golesV=parseInt(resV8.value);
    golesL>golesV ?    ganador(eeuu,ganador8) : golesL==golesV ? empate(ganador8) : ganador(gales,ganador8)})
btnp9.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL9.value,resV9.value,iran,gales)
    golesL=parseInt(resL9.value);
    golesV=parseInt(resV9.value);
    golesL>golesV ? ganador(iran,ganador9) : golesL==golesV ? empate(ganador9) : ganador(gales,ganador9)})
btnp10.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL10.value,resV10.value,inglaterra,eeuu)
    golesL=parseInt(resL10.value);
    golesV=parseInt(resV10.value);
    golesL>golesV ? ganador(inglaterra,ganador10) : golesL==golesV ? empate(ganador10):        ganador(eeuu,ganador10)})
btnp11.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL11.value,resV11.value,inglaterra,gales)
    golesL=parseInt(resL11.value);
    golesV=parseInt(resV11.value);
    golesL>golesV ? ganador(inglaterra,ganador11) : golesL==golesV ? empate(ganador11): ganador(gales,ganador11)})
btnp12.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL12.value,resV12.value,iran,eeuu)
    golesL=parseInt(resL12.value);
    golesV=parseInt(resV12.value);
    golesL>golesV ? ganador(iran,ganador12) : golesL==golesV ? empate(ganador12) : ganador(eeuu,ganador12)})
btngB.addEventListener("click",()=>{
    ordenar(grupoB)
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
btnp13.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL13.value,resV13.value,argentina, arabia)
    golesL=parseInt(resL13.value);
    golesV=parseInt(resV13.value);
golesL>golesV ?  ganador(argentina,ganador13) : golesL==golesV ? empate(ganador13): ganador(arabia,ganador13)})
btnp14.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL14.value,resV14.value,mexico, polonia)
    golesL=parseInt(resL14.value);
    golesV=parseInt(resV14.value);
    golesL>golesV ?  ganador(mexico,ganador14)        : golesL==golesV ? empate(ganador14): ganador(polonia,ganador14)})
btnp15.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL15.value,resV9.value,arabia,polonia)
    golesL=parseInt(resL15.value);
    golesV=parseInt(resV15.value);
golesL>golesV ? ganador(arabia,ganador15) : golesL==golesV ? empate(ganador15) : ganador(polonia,ganador15)})
btnp16.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL16.value,resV16.value,argentina,mexico)
    golesL=parseInt(resL16.value);
    golesV=parseInt(resV16.value);
    golesL>golesV ? ganador(argentina,ganador16) : golesL==golesV ? empate(ganador16) : ganador(mexico,ganador16)})
btnp17.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL17.value,resV17.value,argentina,polonia)
    golesL=parseInt(resL17.value);
    golesV=parseInt(resV17.value);
    golesL>golesV ? ganador(argentina,ganador17): golesL==golesV ? empate(ganador17): ganador(polonia,ganador17)})
btnp18.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL18.value,resV18.value,arabia,mexico)
    golesL=parseInt(resL18.value);
    golesV=parseInt(resV18.value);
    golesL>golesV ?ganador(arabia,ganador18) : golesL==golesV ? empate(ganador18):ganador(mexico,ganador18)})
btngC.addEventListener("click",()=>{
    ordenar(grupoC)
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
btnp19.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL19.value,resV19.value,dinamarca, tunez)
    golesL=parseInt(resL19.value);
    golesV=parseInt(resV19.value);
    golesL>golesV ? ganador(dinamarca,ganador19): golesL==golesV ? empate(ganador19): ganador(tunez,ganador19)})
btnp20.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL20.value,resV20.value,francia, australia)
    golesL=parseInt(resL20.value);
    golesV=parseInt(resV20.value);
    golesL>golesV ? ganador(francia,ganador20) : golesL==golesV ? empate(ganador20): ganador(australia,ganador20)})
btnp21.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL21.value,resV21.value,australia,tunez)
    golesL=parseInt(resL21.value);
    golesV=parseInt(resV21.value);
    golesL>golesV ? ganador(australia,ganador21): golesL==golesV ? empate(ganador21) : ganador(tunez,ganador21)})
btnp22.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL22.value,resV22.value,francia,dinamarca)
    golesL=parseInt(resL22.value);
    golesV=parseInt(resV22.value);
    golesL>golesV ? ganador(francia,ganador22): golesL==golesV ?         empate(ganador22): ganador(dinamarca,ganador22)})
btnp23.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL23.value,resV23.value,australia,dinamarca)
    golesL=parseInt(resL23.value);
    golesV=parseInt(resV23.value); 
    golesL>golesV ? ganador(australia,ganador23): golesL>golesV ? empate(ganador23): ganador(dinamarca,ganador23)})
btnp24.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL24.value,resV24.value,francia,tunez)
    golesL=parseInt(resL24.value);
    golesV=parseInt(resV24.value);
    golesL>golesV ? ganador(francia,ganador24): golesL==golesV ?  empate(ganador24): ganador(tunez,ganador24)})
btngD.addEventListener("click",()=>{
    ordenar(grupoD)
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
btnp25.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL25.value,resV25.value,alemania, japon)
    golesL=parseInt(resL25.value);
    golesV=parseInt(resV25.value);
    golesL>golesV ? ganador(alemania,ganador25): golesL==golesV ? empate(ganador25): ganador(japon,ganador25)})
btnp26.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL26.value,resV26.value,espana, costarica)
    golesL=parseInt(resL26.value);
    golesV=parseInt(resV26.value);
    golesL>golesV ? ganador(espana,ganador26): golesL==golesV ? empate(ganador26): ganador(costarica,ganador26)})
btnp27.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL27.value,resV27.value,costarica,japon)
    golesL=parseInt(resL27.value);
    golesV=parseInt(resV27.value);
    golesL>golesV ? ganador(costarica,ganador27): golesL==golesV ? empate(ganador27): ganador(japon,ganador27)})
btnp28.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL28.value,resV28.value,espana,alemania)
    golesL=parseInt(resL28.value);
    golesV=parseInt(resV28.value);
    golesL>golesV ? ganador(espana,ganador28): golesL==golesV ? empate(ganador28): ganador(alemania,ganador28)})
btnp29.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL29.value,resV29.value,espana,japon)
    golesL=parseInt(resL29.value);
    golesV=parseInt(resV29.value);
    golesL>golesV ? ganador(espana,ganador29): golesL==golesV ? empate(ganador29): ganador(japon,ganador29)})
btnp30.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL30.value,resV30.value,costarica,alemania)
    golesL=parseInt(resL30.value);
    golesV=parseInt(resV30.value);
    golesL>golesV ? ganador(costarica,ganador30): golesL==golesV ? empate(ganador30): ganador(alemania,ganador30)})
btngE.addEventListener("click",()=>{
    ordenar(grupoE)
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
btnp31.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL31.value,resV31.value,marruecos, croacia)
    golesL=parseInt(resL31.value);
    golesV=parseInt(resV31.value);
    golesL>golesV ? ganador(marruecos,ganador31): golesL==golesV ? empate(ganador31): ganador(croacia,ganador31)})
btnp32.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL32.value,resV32.value,belgica, canada)
    golesL=parseInt(resL32.value);
    golesV=parseInt(resV32.value);
    golesL>golesV ? ganador(belgica,ganador32): golesL==golesV ? empate(ganador32): ganador(canada,ganador32)})
btnp33.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL33.value,resV33.value,belgica,marruecos)
    golesL=parseInt(resL33.value);
    golesV=parseInt(resV33.value);
    golesL>golesV ? ganador(belgica,ganador33): golesL==golesV ? empate(ganador33): ganador(marruecos,ganador33)})
btnp34.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL34.value,resV34.value,canada,marruecos)
    golesL=parseInt(resL34.value);
    golesV=parseInt(resV34.value);
    golesL>golesV ? ganador(canada,ganador34): golesL==golesV ? empate(ganador34): ganador(marruecos,ganador34)})
btnp35.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL35.value,resV35.value,belgica,croacia)
    golesL=parseInt(resL35.value);
    golesV=parseInt(resV35.value);
    golesL>golesV ? ganador(belgica,ganador35): golesL==golesV ? empate(ganador35): ganador(croacia,ganador35)})
btnp36.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL36.value,resV36.value,canada,marruecos)
    golesL=parseInt(resL36.value);
    golesV=parseInt(resV36.value);
    golesL>golesV ?  ganador(canada,ganador36): golesL==golesV ? empate(ganador36): ganador(marruecos,ganador36)})
btngF.addEventListener("click",()=>{
    ordenar(grupoF)
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
btnp37.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL37.value,resV37.value,suiza, camerun)
    golesL=parseInt(resL37.value);
    golesV=parseInt(resV37.value);
    golesL>golesV ? ganador(suiza,ganador37): golesL==golesV ? empate(ganador37): ganador(camerun,ganador37)})
btnp38.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL38.value,resV38.value,brasil, serbia)
    golesL=parseInt(resL38.value);
    golesV=parseInt(resV38.value);
    golesL>golesV ? ganador(brasil,ganador38): golesL==golesV ? empate(ganador38): ganador(serbia,ganador38)})
btnp39.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL39.value,resV39.value,serbia,camerun)
    golesL=parseInt(resL39.value);
    golesV=parseInt(resV39.value);
    golesL>golesV ? ganador(serbia,ganador39): golesL==golesV ? empate(ganador39): ganador(camerun,ganador39)})
btnp40.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL40.value,resV40.value,brasil,suiza)
    golesL=parseInt(resL40.value);
    golesV=parseInt(resV40.value);
    golesL>golesV ? ganador(brasil,ganador40): golesL==golesV ? empate(ganador40): ganador(suiza,ganador40)})
btnp41.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL41.value,resV41.value,brasil,camerun)
    golesL=parseInt(resL41.value);
    golesV=parseInt(resV41.value);
    golesL>golesV ? ganador(brasil,ganador41): golesL==golesV ? empate(ganador41): ganador(camerun,ganador41)})
btnp42.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL42.value,resV42.value,serbia,suiza)
    golesL=parseInt(resL42.value);
    golesV=parseInt(resV42.value);
    golesL>golesV ? ganador(serbia,ganador42): golesL==golesV ? empate(ganador42): ganador(suiza,ganador42)})
btngG.addEventListener("click",()=>{
    ordenar(grupoG)
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
    // G1.innerText=ganadorG.pais;
})
btnp43.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL43.value,resV43.value,uruguay, corea)
    golesL=parseInt(resL43.value);
    golesV=parseInt(resV43.value);
    golesL>golesV ? ganador(uruguay,ganador43): golesL==golesV ? empate(ganador43): ganador(corea,ganador43)})
btnp44.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL44.value,resV44.value,portugal, ghana)
    golesL=parseInt(resL44.value);
    golesV=parseInt(resV44.value);
    golesL>golesV ? ganador(portugal,ganador44): golesL==golesV ? empate(ganador44): ganador(ghana,ganador44)})
btnp45.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL45.value,resV45.value,ghana,corea)
    golesL=parseInt(resL45.value);
    golesV=parseInt(resV45.value);
    golesL>golesV ? ganador(ghana,ganador45): golesL==golesV ? empate(ganador45): ganador(corea,ganador45)})
btnp46.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL46.value,resV46.value,portugal,uruguay)
    golesL=parseInt(resL46.value);
    golesV=parseInt(resV46.value);
    golesL>golesV ?  ganador(portugal,ganador46): golesL==golesV ? empate(ganador46): ganador(uruguay,ganador46)})
btnp47.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL47.value,resV47.value,portugal,corea)
    golesL=parseInt(resL47.value);
    golesV=parseInt(resV47.value);
    golesL>golesV ? ganador(portugal,ganador47): golesL==golesV ? empate(ganador47): ganador(corea,ganador47)})
btnp48.addEventListener("click",partido=(golesL,golesV)=>{
    partidoGrupo(resL48.value,resV48.value,ghana,uruguay)
    golesL=parseInt(resL48.value);
    golesV=parseInt(resV48.value);
    golesL>golesV ? ganador(ghana,ganador48): golesL==golesV ? empate(ganador48): ganador(uruguay,ganador48)})
btngH.addEventListener("click",()=>{
    ordenar(grupoH)
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
