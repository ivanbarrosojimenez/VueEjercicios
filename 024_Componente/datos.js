let Traductor = Vue.component('mi-traductor',{
    template:`<div component="mi-traductor">
        <h1>Traductor</h1>
        <input type="text" :placeholder="placeholderWord" v-model="palabra" />
        <input type="button" @click="limpiar" value="Limpiar" />
        <div v-for="match in AnyMatch">
        <span>{{match.ES}}->{{match.EN}}</span>
        </div>
    </div>`
,data(){ return { placeholderWord:'Introduzca Palabra a traducir', palabra:''
, diccionario:[{'EN':'Hello', 'ES':'Hola'},{'EN':'Bye', 'ES':'Adios'}
              ,{'EN':'Good', 'ES':'Bueno'},{'EN':'Bad', 'ES':'Malo'}] } }
    ,computed:{
        AnyMatch(){ let match=false; let words=[];
            this.diccionario.map((w)=>{if( this.palabra!='' &&
                w.ES.toLowerCase().includes(this.palabra.toLowerCase()) ) words.push(w) })
            return words }
    },
    methods:{
        limpiar(){
            this.palabra = '';
        }
    }
});


const app = new Vue({
    el: '#app',
    components: {
        "mi-traductor": Traductor
    }
});
