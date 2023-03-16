<!-- Gebruiken we voor wat de gebruiker zal zien  -->
<template>
    <div>
        <h2>
            Counter
        </h2>

        <p>
            Counter: <span>{{ this.value }}</span> <br>
        </p>
        <button @click="changeValue(1)">
            Plus 1
        </button>
        <button @click="changeValue(-1)">
            Min 1
        </button>
    </div>
</template>

<!-- Script -->
<script>
    export default {
        name: "CounterComponent",
        mounted() {
            this.value = parseInt(this.startValue);
        },
        props: {
            startValue: Number
        },
        data() {
            return {
                value: 0
            }
        },
        methods: {
            changeValue(value) {
                this.value += value;
            }
        }
    }
</script>