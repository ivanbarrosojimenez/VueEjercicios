let MisPropiedadesComponente = Vue.component('mis-propiedades-componente',{
    template:`<div component="mis-propiedades-componente">
        <h2>Valor:{{miValor}}</h2>
    </p>
    </div>`
    ,watch:{
        propValue(){this.miValor = this.propValue}
    }
    ,data(){ return { 
        miValor: this.propValue
        }
    },
    props:{
        propValue:{type:String, required:true}
        }
});


const app = new Vue({
    el: '#app',
    data(){return {valorDato:"inicial"}},
    components: {
        "mis-propiedades-componente": MisPropiedadesComponente
    }
});
