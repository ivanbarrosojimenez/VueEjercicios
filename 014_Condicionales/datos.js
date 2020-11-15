const app = new Vue({
    el: '#app',
    data: {
        titulo:'Condicionales if else',
        mascota: '',
        rutaImagen: ''
    }, methods: {
        elegirMascota: function(){
            if(this.mascota == 'Gato'){
                console.log('elige gato');
                this.rutaImagen = 'https://upload.wikimedia.org/wikipedia/commons/9/9a/PNG_transparency_demonstration_2.png';
            } else if(this.mascota == 'Perro'){
                console.log('elige perro');

                this.rutaImagen = 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png';
            }

        }
    }
});
