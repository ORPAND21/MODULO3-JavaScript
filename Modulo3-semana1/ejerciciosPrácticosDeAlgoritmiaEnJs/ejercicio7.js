//Declara una variable no con un valor numerico del 0 al 10
let nota = 1;

//Creamos una condicion para calificar la nota
if (nota == 10){
    console.log("Sobresaliente")
}else if(nota == 8 || nota == 9){
    console.log("Notable")
}else if(nota == 7){
    console.log("bien")
}else if(nota == 5 || nota ==6){
    console.log("Suficiente")
}else if(nota < 5 && nota >=1){
    console.log("Insuficiente")
}else{
    console.log("Tiene que ser una nota del 1 al 10")
}