console.log('VUE is OK', Vue);

Vue.config.devtools = true;

const goodVibes = new Vue ({
    el: '#root',
    data:{
        newthing: '',
        things: [
            {
                text: 'Disegnare più spesso',
                done: false,
            },
            {
                text: 'Ritornare in palestra',
                done: false,
            },
            {
                text: 'Giocare il meno possibilie al pc',
                done: false,
            }
        ]
    },
    methods:{
        deleteInt(index){
            this.things.splice(index, 1);
        }
    }
        
})