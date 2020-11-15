Vue.directive("color",{
    bind: function(elemento, binding, vnode){
        elemento.style.color=binding.arg;
        elemento.style.fontSize="2em";
    }
});

const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Directiva personalizada'
        ,subtitulo:'Con otro color'
    }
});
