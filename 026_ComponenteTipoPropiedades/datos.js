let MisPropiedades = Vue.component('mis-propiedades',{
    template:`<div component="mis-propiedades">
        <h2>Texto requerido:{{miRequerido}}</h2>
        <p>Objeto:{{NombreCompleto}}</p>
        <p>Objeto:{{Edad}}</p>
        <p>Multiple valor:{{miValorMultiple}}</p>
        <span>Array:</span><ul v-for="elemento in miArray">
          <li>{{elemento}} </li>
        </ul>
    </div>`
    ,data(){ return { 
        miRequerido: this.propRequired,
        miArray: this.propArray,
        miValorMultiple: this.propMultipleValue,
        }
    },
    computed:{
            NombreCompleto(){ 
                if(this.propObject && this.propObject.Name && this.propObject.LastName){
                    return this.propObject.Name + ' ' + this.propObject.LastName;
                }
            },
            Edad(){ 
                if(this.propObject && this.propObject.Age){
                    return 'edad: ' + this.propObject.Age;
                }
            }
    },
    props:{
            propRequired:{type:String, required:true}
            ,propArray:{type:Array, default:()=>{return []} }
            ,propObject:{type:Object, default:()=>{return {}} }
            ,propMultipleValue:[Number, String, Date]
        }
});


const app = new Vue({
    el: '#app',
    components: {
        "mis-propiedades": MisPropiedades
    }
});
