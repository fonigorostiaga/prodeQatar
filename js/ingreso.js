const user=JSON.parse(localStorage.getItem("ingreso"))
const user2=JSON.parse(sessionStorage.getItem("ingreso"))
const ingresoMail=document.querySelector("#mail");
const ingresoPass=document.querySelector("#pass");
const botonIngreso=document.querySelector("#botonIngreso");
const check=document.querySelector("#check")
const botonRegistro=document.querySelector("#botonRegistro");

function Ingresar(){
    if(user){
        if(ingresoMail.value==""||ingresoPass.value==""){
        Swal.fire({
            icon: 'error',
            title: 'Por favor completa los campos obligatorios',
            // text: 'Te olvidaste los goles Mostro',
            background:"linear-gradient(#3d1723da,#050002dc)",
            color:"rgb(161, 165, 168)",
            iconColor:"e7077793",
            confirmButtonColor:"#e7077793",
            confirmButtonText:"Mala mia!"
            })
    }else if((ingresoMail.value==user.mail && ingresoPass.value==user.pass)){
        setTimeout(()=>{
    window.location.href="../pages/inicio.html"},1000)
}
    else if(ingresoMail.value!=user.mail || ingresoPass.value!=user.pass){
        if(user2){
        if(ingresoMail.value==user2.mail && ingresoPass.value==user2.pass){
            setTimeout(()=>{
                window.location.href="../pages/inicio.html"},1000)
        }}else{
            Swal.fire({
            icon: 'error',
            title: 'Datos incorrectos',
            text: 'Revisa los datos ingresados, si no tenes un usuario por favor registrate',
            background:"linear-gradient(#3d1723da,#050002dc)",
            color:"rgb(161, 165, 168)",
            iconColor:"e7077793",
            confirmButtonColor:"#e7077793",
            confirmButtonText:"Mala mia!"
            })}
    }}else if(user2){
        if(ingresoMail.value==user2.mail && ingresoPass.value==user2.pass){
            setTimeout(()=>{
                window.location.href="../pages/inicio.html"},1000)
    }} else if(ingresoMail.value==""||ingresoPass.value==""){
        Swal.fire({
            icon: 'error',
            title: 'Por favor completa los campos obligatorios',
            // text: 'Te olvidaste los goles Mostro',
            background:"linear-gradient(#3d1723da,#050002dc)",
            color:"rgb(161, 165, 168)",
            iconColor:"e7077793",
            confirmButtonColor:"#e7077793",
            confirmButtonText:"Mala mia!"
            })
    }else{            Swal.fire({
        icon: 'error',
        title: 'Datos incorrectos',
        text: 'Revisa los datos ingresados, si no tenes un usuario por favor registrate',
        background:"linear-gradient(#3d1723da,#050002dc)",
        color:"rgb(161, 165, 168)",
        iconColor:"e7077793",
        confirmButtonColor:"#e7077793",
        confirmButtonText:"Mala mia!"
        })}}



botonIngreso.addEventListener("click", ()=>{
Ingresar()
})
botonRegistro.addEventListener("click",()=>{
    setTimeout(()=>{
        window.location.href="../pages/registro.html"
    },1000)
})