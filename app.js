
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled')

    }else{

        //el uusario no acerto

        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor')
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }

    intentos++;
    limpiarcaja();

    }
   
    return;
}

function limpiarcaja(){

    document.querySelector('#valorUsuario').value = '';
}


function GenerarnumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);


    //si ya sorteamos todos los numero
    if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p','Se sortearon todos los numeros posibles');

    }else {

    //si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return GenerarnumeroSecreto();

        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }


}

//condiciones iniciales del juego
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Ingresa un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = GenerarnumeroSecreto();
    intentos = 1;
    
}

function reiniciarJuego() {

    //limpiar la caja
    limpiarcaja();
    //indicar mensaje de inicio
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar boton
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();


