let frutas = ["manzana","platano","fresa","kiwi","aguacate","papaya","naraja","mandarina"];
console.log(frutas);

console.log(frutas.length);
console.log(frutas[2]);
console.log(frutas[6]);

// let i;
// for (i=0; i< frutas.length;i++){
//     console.log(frutas[i]);
// }

for (let fruta of frutas){

    console.log(fruta);
}


for (let fruta in frutas){

    console.log(fruta);
}
