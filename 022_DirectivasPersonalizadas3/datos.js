

const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Directiva personalizada'
        ,subtitulo:'Formato modificadores'
        ,subtitulo1:'y argumentos'
        ,subtitulo2:'o ambos'

    }, 
    directives:{
        "formato":{
            bind(elemento, binding, vnode){
                const modificadores = binding.modifiers;
                if(modificadores.subrayado){
                    elemento.style.textDecoration = 'underline';
                }
                if(modificadores.negrita){
                    elemento.style.fontWeight="bold";
                }
                if(modificadores.grande){
                    elemento.style.fontSize="2em";
                }
            }
        },
        "color":{
            bind(elemento, binding, vnode){
                elemento.style.color=binding.arg;
            }
        }
    }
});
