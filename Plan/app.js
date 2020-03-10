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
    data: {
        plans: ['The Good', 'The Bad', 'The Ugly']
    }
})