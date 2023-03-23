const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');



//cada vez que agrego un boton, se ponga en el display
const display = new Display(displayValorAnterior,displayValorActual);

botonesNumeros.forEach( boton => {
    boton.addEventListener('click', () => {
        display.agregarNumero(boton.innerHTML)
        //innerHTML pasa el numero del boton de index.html 
})
}) ;

//pongo value en html xq no me sirve en la operacion matematia mezclar los numeros ocn operadores
botonesOperadores.forEach( boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
})