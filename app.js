//let numeroSecreto = generarNumeroSecreto(); 
//let intentos = 1
//lo que está arriba se cambia porque ya está siendo realizado por las funciones
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log (numeroSecreto);

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;   
    return; 
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        if (numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento ('p', 'el número secreto es menor');    
        } else {
            asignarTextoElemento ('p', 'el número secreto es mayor');
        }
        intentos++;
        limpiarCaja(); 
    }
    return;
}
//la etiqueta input estaba previamente en el hmtl, el cual es el dato que ingrese el usuario
// las funciones siempre se escriben afuera

function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles');
    } else {
        //si el numero generado esta incluido en la lista 
        //el include recorre todos los elementos de la lista y nos dira con un boolenao si esta o no esta dentro de la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); /*con esta recursividad, si el numeroGenerado está en la lista se vuelve a generar 
            un numero aleatorio hasta que salga distinto, y luego ese último numero se queda guardado y se repite todo*/
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}    

function condicionesIniciales() {
    asignarTextoElemento ('h1', 'juego del number secreto');
    asignarTextoElemento ('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); /*no se coloca el let porque no se está declarando varibale*/
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de inicio
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
        //aquí arriba se setó o colocó el atributo de disable con el valor true
}

condicionesIniciales();

