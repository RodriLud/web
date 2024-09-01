//inicio de secion
var usuario = document.querySelector("input[type='text']");
var clave = document.querySelector("input[type='password']");

usuario.addEventListener('focus', function(event){
    event.target.style.background = "white";
    event.target.style.color = "black";
});

usuario.addEventListener('blur', function(event){
    event.target.style.background = "white";
    event.target.style.color = "black";
});

clave.addEventListener('focus', function(event){
    event.target.style.background = "black";
    event.target.style.color = "white";
});

clave.addEventListener('blur', function(event){
    event.target.style.background = "white";
    event.target.style.color = "black";
});

var usuarios=["juan" , "carlos", "ana", "luisa", "luis"];
var claves=["juan123" , "carlos123", "ana123", "luisa123", "luis123"];

function cargar(frm){
    var usu=frm.txtusuario.value;
    let i = -1;
    for(let j=0; j<usuarios.length; j++){
        if(usuarios[j]==usu){
            i=j; break; 
        }
    }

    if(i==-1){
        window.event.preventDefault();
        alert("Usuario y/o contraseña no existe"); 
        return;
    }

    var clave=frm.txtclave.value;
    if(clave==claves[i]){
        alert("Bienvenido, "+usu)
        window.open("index.html");
    }
    else{
        window.event.preventDefault();
        alert("Clave no coincide");
    }

}
