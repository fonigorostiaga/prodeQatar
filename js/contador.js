const DateTime=luxon.DateTime
const fechaInicio=DateTime.local(2022,11,20,13,00,00)
const segundos=document.querySelector("#segundos")
const dias=document.querySelector("#dias")
const horas=document.querySelector("#horas")
const minutos=document.querySelector("#minutos")
let diferencia=(fechaInicio).diff(DateTime.now()).milliseconds	
let diferenciaR=parseInt(diferencia/1000)
let diferenciaD=parseInt(diferenciaR/86400);
let diferenciaH=parseInt((diferenciaR%86400)/3600)
let diferenciaM=parseInt(((diferenciaR%86400)%3600)/60)
let diferenciaS=parseInt((((diferenciaR%86400)%3600)%60))
const user=JSON.parse(localStorage.getItem("ingreso"))
const user2=JSON.parse(sessionStorage.getItem("ingreso"))
const botonContador=document.querySelector("#botonContador")

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

function ingresar(){
    if(user){
        setTimeout(() => {
            window.location.href="./pages/inicio.html"
        },1000)
    }else if(user2){
        setTimeout(() => {
            window.location.href="./pages/inicio.html"
        },1000)
    }else{
        window.location.href="./pages/ingreso.html"
    }}
botonContador.addEventListener("click",()=>{
    ingresar()
})