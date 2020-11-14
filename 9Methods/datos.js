const app = new Vue({
    el: '#app',
    data: {
        titulo:'Hola Vue',
    },
    methods: {
        mostrarMensaje: function(){
            console.log('Mostrando mensaje: ' + this.titulo + ' aprendamos');
            return this.titulo + ' aprendamos';
        }
    }
});
