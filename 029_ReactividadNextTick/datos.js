let MyReactivityComponent = Vue.component('my-reactivity', {
    template: `<div component="my-reactivity">
                  <p>Focus:{{focus}}</p>
                  <input type="text" placeHolder="Nombre"
                                 value="Iván" ref="nombreRef" />
                  <input type="button" @click="DoFocus"
                   value="Hacer foco" />
               </div>`
  
     ,data(){ return {  focus: false } }
     ,watch: {
       focus:function(){
         console.log('Focus:' + this.focus);
         if(this.focus){this.$refs.nombreRef.focus()}
      }
     },
     methods:{
        DoFocus(){;
         console.log('Focus Start');
         this.focus=false;
         console.log('Focus ' +this.focus);

         Vue.nextTick(()=>{
           console.log('Focus NextTick Start');
           this.focus=true;
           console.log('Focus NextTick End');
         });
         console.log('focus fin')
      }
     }
  });
  
  const app = new Vue({ el: '#app', components: { 'my-reactivity': MyReactivityComponent } });
  