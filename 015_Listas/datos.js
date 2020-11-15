const app = new Vue({
    el: '#app',
    data: {
        titulo:'Listas'
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
