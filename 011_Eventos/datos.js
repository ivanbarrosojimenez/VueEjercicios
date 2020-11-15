const app = new Vue({
    el: '#app',
    data: {
        titulo:'Eventos de Vue',
        inputText:'',
        mensaje: 'Escuchando evento enter key up'
    },
    methods: {
        onPulsacionEnter: function(){
            this.mensaje = this.inputText;
            console.log(this.mensaje);
        }
    }
});
