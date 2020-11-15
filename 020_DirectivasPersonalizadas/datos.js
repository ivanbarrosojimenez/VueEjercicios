Vue.directive("red",{
    bind: function(elemento, binding, vnode){
        elemento.style.color="red";
        elemento.style.fontSize="2em";
    }
});
Vue.directive("blue",{
    bind: function(elemento, binding, vnode){
        elemento.style.color="blue";
        elemento.style.fontSize="1.5em";
        elemento.style.fontWeight="bold";

    }
});
const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Directiva personalizada'
        ,subtitulo:'Con otro color'
    }
});
