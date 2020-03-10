Vue.component('plan-picker', {
    template: '#plan-picker-template',
    data() {
        return {
            plans: ['The Good', 'The Bad', 'The Ugly']
        }
    }
})

Vue.component('plan', {
    template: '#plan-template',
    props: {
        name : {
            type: String,
        },
        price: Number
    }
})

new Vue({
    el: '#app',
})