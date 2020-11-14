const app = new Vue({
    el: '#app',
    data: {
        mensaje:'Elementos de la instancia de Vue',
    },
    methods: {
        decirHola: function(){
            return "Hola!!";
        },
        clickMiBoton: function(){
            this.$refs.miSubtitulo.innerHTML="100 ejercicios";
            this.$refs.miSubtitulo.style.color="red";
            this.$refs.miSubtitulo2.innerHTML="para aprender vue";
            this.$refs.miSubtitulo2.style.color="blue";
            console.log([app.$refs.miSubtitulo.innerHTML, app.$refs.miSubtitulo2.innerHTML].join(" "))
        }
    }
});
console.log('$el');
console.log(app.$el.innerHTML);
console.log('$data');
console.log(app.$data);
console.log(app.decirHola());
console.log('$refs');

console.log(app.$refs);