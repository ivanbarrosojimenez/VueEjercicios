const app = new Vue({
    el: '#app',
    data: {
        titulo:'Calculadora',
        operador1: '0',
        operador2: '0',
        operador3: '0',
        operador4: '0'
    },
    computed: {
        resultadoSuma: function(){
            let op1 = parseInt(this.operador1==='' ? 0 : this.operador1);
            let op2 = parseInt(this.operador2==='' ? 0 : this.operador2);
            console.log(op1 + ' + ' + op2 + ' = ' + (op1 + op2));
            return op1 + op2;
        }, 
        resultadoResta: function(){
            let op3 = parseInt(this.operador3==='' ? 0 : this.operador3);
            let op4 = parseInt(this.operador4==='' ? 0 : this.operador4);
            console.log(op3 + ' - ' + op4 + ' = ' + (op3 - op4));
            return op3 - op4;
        }
    }
});
