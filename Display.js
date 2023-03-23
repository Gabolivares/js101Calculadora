class Display {
    //
    constructor(displayValorAnterior, displayValorActual){
        //
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.tipoOperacion = undefined;
        //
        this.calculador = new Calculadora();
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            dividir: '/',
            multiplicar: 'x'
        }

    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        //setear valor anterior, si hay un valor anterior pasa a ser el actual, si no ha actual solo cambia el tipo de operador
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }



    //agregar numeros a la calculadora
    agregarNumero(numero) {
        //el valor actual, el numero q estoy agregand sea = al numero que recibimos
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString() ;
        //imprimir los valores
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        /*agrego el signo al valor anterior, y si el tipo de operacion es =, devuelve un espacio en blanco
         xq no queremos ver ningun signo cunado lo presionesmos */
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular(){
        //ibamos a trabajar entre str y numeros reales, hay que poner un parsefloat para q vuelva a ser numero
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        //cuando no hay numero que devuelva error
        if( isNaN( valorActual ) || isNaN( valorAnterior ) ) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior,valorActual);
    }
}