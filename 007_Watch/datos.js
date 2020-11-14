const app = new Vue({
    el: '#app',
    data: {
        mensaje:'Hola vue',
    },
    watch: {
        mensaje: function(nuevoValor, anteriorValor){
            console.log('Anterior valor: ', anteriorValor, 'nuevo valor: ', nuevoValor);
        }
    }
});
