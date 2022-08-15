export const a = {
    methods: {
        updateAge(){
            this.age++
        }
    },
    mounted() {
        console.log('mounted');
    },
}
export const b = {
    data(){
        return {
            x:100,
            y:200
        }
    }
}