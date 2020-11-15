const app = new Vue({
    el: '#app',
    data: {
        titulo:'Vincular propiedades',
        rutaImagen: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
        imagenMostrada: '1'
    }, methods: {
        onClickBoton1: function(){
            if(this.imagenMostrada == '1'){
                this.rutaImagen = 'https://upload.wikimedia.org/wikipedia/commons/9/9a/PNG_transparency_demonstration_2.png';
                this.imagenMostrada = '2';
            } else {
                this.rutaImagen = 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
                this.imagenMostrada = '1';
            }

        }
    }
});
