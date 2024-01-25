//  C  L  A  S  E F I N A L

//Variables
let numeroSecreto = 0 ;
let numeroUsuario = 0;
let numeroIntentos = 1;
//let pluralIntento = "intento";
let maximosIntentos = 3;

console.log(numeroSecreto);
numeros = parseInt(prompt("Me indicas el rango máximo de números a generar partiendo de 1:"));
numeroSecreto = Math.floor(Math.random()*numeros)+1; 
while(numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y "+ numeros +" por favor:"));

    console.log(typeof(numeroUsuario));

    if (numeroUsuario == numeroSecreto) {
        alert("Acertaste, el número es: " + numeroUsuario+". Lo hiciste en "+ numeroIntentos + " "+ (numeroIntentos == 1 ? "intento" : "intentos")  +".");
    } else {
        if (numeroUsuario > numeroSecreto){
            alert("El número secreto es menor");

        }  else {
            alert("El número secreto es mayor");
        }
        //Incrementamos el contador cuando no acierta
        numeroIntentos++;
        //pluralIntento = "intentos";
        if (numeroIntentos > maximosIntentos){
            alert("Llegaste al número máximo de "+ maximosIntentos  + " "+ (numeroIntentos == 1 ? "intento" : "intentos")+ " el número era: "+numeroSecreto  );
            break; 
        }
    }  
}
