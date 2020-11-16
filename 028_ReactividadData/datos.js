let MyReactivityComponent = Vue.component('my-reactivity', {
    template: `<div component="my-reactivity">
                  <p v-if="persona"><b>(Reactividad Objeto)Persona:</b>
                    <span>{{persona.Nombre}} {{persona.Apellido}} {{persona.Edad}}</span></p>
                  <input type="text" placeHolder="Nombre"
                                  v-model="name" @change="OnChangeName" />
  
                  <p><b>(Reactividad)Edad:</b>{{edad}}</p>
                  <input type="number" placeHolder="Edad" v-model="edad"/>
                    <br />
                  <input type="button" @click="DeleteFirstName" value="Borra Nombre" />
                  <input type="button" @click="AddAge" value="Añade Edad" />
               </div>`
  
     ,data(){ return {  persona: this.propPersona, name:null, edad:null } }
     ,props:{ propPersona: {type:Object} }
     ,methods:{
        OnChangeName(){ //this.persona.Nombre=this.name;
          Vue.set(this.persona,"Nombre", this.name) }
       ,DeleteFirstName() { //delete this.person.FirstName;
          Vue.delete(this.persona,"Nombre") }
       ,AddAge() { //this.person.Age=this.edad
         Vue.set(this.persona,"Edad", this.edad) }
     }
  })
  
  const app = new Vue({ el: '#app', components: { 'my-reactivity': MyReactivityComponent } });
  