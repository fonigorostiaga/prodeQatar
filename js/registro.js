const registroUser=document.querySelector("#registrousuario");
const registroPais=document.querySelector("#registroPais");
const mail=document.querySelector("#registromail");
const pass=document.querySelector("#registropass");
const check=document.querySelector("#check")
const btn=document.querySelector("#registro")
function Usuario(user, mail, pais, pass){
    this.user=user,
    this.mail=mail,
    this.pais=pais,
    this.pass=pass
}
let foni= new Usuario("foni",  "hola@hla.com", "argentina","1234")

function registrar(user, mail, pais, pass){
    let usuario= new Usuario(user, mail, pais, pass)
    if(check.checked){
        const usuarioNuevo=JSON.stringify(usuario);
        localStorage.setItem("ingreso",usuarioNuevo)
    }else{
        const usuarioNuevo=JSON.stringify(usuario);
        sessionStorage.setItem("ingreso",usuarioNuevo)
    }
}
btn.addEventListener("click",()=>{
    if(registroUser.value==""||registroPais.value==""||mail.value==""||pass.value==""){
        Swal.fire({
            icon: 'error',
            title: 'Por favor completa los campos obligatorios',
            // text: 'Te olvidaste los goles Mostro',
            background:"linear-gradient(#3d1723da,#050002dc)",
            color:"rgb(161, 165, 168)",
            iconColor:"e7077793",
            confirmButtonColor:"#e7077793",
            confirmButtonText:"Mala mia!"
            }).then((result)=>{
                if(result.isConfirmed){
                    window.location.href="../pages/registro.html"
                }
            });
    }else{
    registrar(registroUser.value,  mail.value, registroPais.value, pass.value)
    setTimeout(()=>{
    window.location.href="../pages/grupos.html"},1000)}
    
})