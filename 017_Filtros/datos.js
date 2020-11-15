Vue.filter('textoAMayusculas', function(value){
    if(!value) return '';
    value = value.toString();
    return value.toUpperCase();
});
const app = new Vue({
    el: '#app',
    data: {
        titulo:'Filtros'
        ,listaCompra: ['Manzanas', 'Peras', 'Cerveza', 'Leche', 'Agua', 'Pan']
        ,nuevoElemento:''
    }, methods :{
        aniadirElemento:function(){
            if(this.nuevoElemento != '' && !this.listaCompra.includes(this.nuevoElemento)){
                this.listaCompra.push(this.nuevoElemento);
            }
        }
    }
});
