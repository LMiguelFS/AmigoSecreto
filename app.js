// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];


function agregarAmigo(){
    let nombre=document.querySelector("#amigo");
    if(nombre.value==""){
        alert("Por favor, inserte un nombre.");
    }else{
        amigos.push(nombre.value);
        document.querySelector("#amigo").value="";
        console.log(amigos);
    }
}s