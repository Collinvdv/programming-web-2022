<template>
    <div>
        <h1>Home page</h1>
        <CounterComponent :startValue="counter" v-for="(counter, index) in counters" :key="index"/>
    </div>
    
</template>

<script>
    import CounterComponent from '../components/CounterComponent.vue';

    export default {
        name: 'PageHome',
        components: {
            CounterComponent
        },
        data() {
            return {
                counters: [5, 10, 6, 20, 50, 100]
            }
        }
    }
</script>