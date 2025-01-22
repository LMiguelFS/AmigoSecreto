// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];


function agregarAmigo(){
    let nombre=document.querySelector("#amigo");
    if(nombre.value==""){
        alert("Por favor, inserte un nombre.");
    }else{
        amigos.push(nombre.value);
        listarAmigos();
        console.log(amigos)
    }
    return;
}

function listarAmigos(){
    //Seleccionar el elemento ul
    let lista=document.querySelector("#listaAmigos");
    //Limpiar si hay algun contenido
    limpiarCampos(lista);
    for (let i = 0; i < amigos.length; i++) {
        //crear un nuevo elemento <li>
        let item=document.createElement("li")
        //Establecer el contenido al <li>
        item.textContent=amigos[i];
        console.log(amigos[i]);
        //Agregar el <li> a la lista
        lista.appendChild(item);
    }
    return;
}

function limpiarCampos(lista){
    document.querySelector("#amigo").value="";
    lista.innerHTML="";
    return;
}

function sortearAmigo(){
    if(!amigos.length==0){
      let numeroS=numRandom();
      document.getElementById("resultado").innerHTML=`El amigo secreto es: ${amigos[numeroS]}`;
      console.log(numeroS);  
    }else{
        alert("Ingrese nombre de sus amigos")
    }
    
}

function numRandom(){
    return Math.floor(Math.random()*amigos.length);
}
