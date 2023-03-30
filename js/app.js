let numeroMaquina = Math.floor(Math.random()* (10 - 1) +1);
console.log(numeroMaquina);

let numeroUser= parseInt(prompt("Adivina el numero del 1 al 10"));

let vidas=5;

while(numeroMaquina !== numeroUser && vidas>1){

    vidas--;
    numeroUser= parseInt(prompt("Vuelve a intertarlo, tu vidas:"+vidas));

}

if (numeroMaquina === numeroUser){
    
console.log("Ganaste");

}else{

    console.log("Perdiste, el numero era: "+numeroMaquina);
}
