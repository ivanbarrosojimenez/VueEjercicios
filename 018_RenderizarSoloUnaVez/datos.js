Vue.filter('textoAMayusculas', function(value){
    if(!value) return '';
    value = value.toString();
    return value.toUpperCase();
});
const app = new Vue({
    el: '#app',
    data: {
        titulo:'Renderizar una sola vez'
       
    }
});
