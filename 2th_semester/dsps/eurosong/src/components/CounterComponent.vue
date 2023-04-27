<!-- Template is what the user will see -->
<template>
    <div>
        <h2>
            {{ this.value }}
        </h2>
        <button :disabled="this.value <= 0" v-on:click="changeValue(-1)">
            Decrement
        </button>
        <button @click="changeValue(1)" v-if="this.value <= 10">
            Increment
        </button>
    </div>
</template>

<!-- Setting for this component -->
<script>
    export default {
        name: "CounterComponent",
        mounted() {
            this.value = parseInt(this.initialValue);
        },
        props: {
            initialValue: Number
        },
        data() {
            return {
                value: 10
            }
        },
        methods: {
            changeValue(val) {
                this.value += val;
            }
        }
    }
</script>