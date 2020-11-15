const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Mouse move'
        ,mouseX:'0'
        ,mouseY:'0'
    }, methods: {
        mover: function(evento){
            this.mouseX = evento.clientX;
            this.mouseY = evento.clientY;
        }
    }
});
