const DateTime=luxon.DateTime
const fechaInicio=DateTime.local(2022,11,21,07,00,00)
const segundos=document.querySelector("#segundos")
const dias=document.querySelector("#dias")
const horas=document.querySelector("#horas")
const minutos=document.querySelector("#minutos")
console.log(fechaInicio)
let diferencia=(fechaInicio).diff(DateTime.now()).milliseconds	
let diferenciaR=parseInt(diferencia/1000)
let diferenciaD=parseInt(diferenciaR/86400);
let diferenciaH=parseInt((diferenciaR%86400)/3600)
let diferenciaM=parseInt(((diferenciaR%86400)%3600)/60)
let diferenciaS=parseInt((((diferenciaR%86400)%3600)%60))

function counter(){
    setInterval(()=>{
    let diferencia=(fechaInicio).diff(DateTime.now()).milliseconds	
let diferenciaR=parseInt(diferencia/1000)
let diferenciaD=parseInt(diferenciaR/86400);
let diferenciaH=parseInt((diferenciaR%86400)/3600)
let diferenciaM=parseInt(((diferenciaR%86400)%3600)/60)
let diferenciaS=parseInt((((diferenciaR%86400)%3600)%60))
dias.innerText=diferenciaD
horas.innerText=diferenciaH
minutos.innerText=diferenciaM
segundos.innerText=diferenciaS
},1000)
}
counter()
const user=JSON.parse(localStorage.getItem("ingreso"))
const user2=JSON.parse(sessionStorage.getItem("ingreso"))
const botonContador=document.querySelector("#botonContador")
function ingresar(){
    if(user){
        setInterval(()=>{
            window.location.href="./pages/grupos.html"
        },1000)
    }else if(user2){
        setInterval(()=>{
            window.location.href="./pages/grupos.html"
        },1000)
    }else{
        window.location.href="./pages/ingreso.html"
    }}
    botonContador.addEventListener("click",()=>{
        ingresar()
    })