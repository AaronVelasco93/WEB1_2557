//Funcion basica
function saludar (){

    console.log("Hola como estas");
}

saludar();


//Fucion con argumentos

function Despedida ( nombreUsuario ){

    console.log("Adios: "+nombreUsuario);
}

Despedida("Aaron");

//Fucion con un retorno

function saludo( nombre){
    return "Bievenido :)  "+nombre;

}
console.log( saludo("Aaron Velasco") )