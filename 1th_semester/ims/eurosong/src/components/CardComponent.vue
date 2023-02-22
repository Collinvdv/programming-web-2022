<template>
    <div 
        class="c-card"
        :class="getCardClass()"
    >
        <h3>
            {{ cardTitle.toUpperCase() + " " + counter }}
        </h3>

        <p>
            Counter initial value is <span v-once>{{ counter }}</span>
        </p>
        <p>
            Counter value is <span>{{ counter }}</span>
        </p>

        <p v-html="description">
        </p>

        <div v-if="showButtons">
            <button @click="addOne()" :disabled="disabledButtons">
                Add one
            </button>
    
            <button @click="minusOne()" :disabled="disabledButtons">
                Minus one
            </button>
        </div>

        <ul>
            <li v-for="(goat, index) in goats" :key="index">
               {{ goat }}
            </li>
        </ul>

        <ul>
            <li v-for="(goat, index) in goats" :key="index">
                {{ goat }}
            </li>
        </ul>
        <a :href="cardLink">
            go to website
        </a>

        <button @click="changeParentTitle()">
            Change title of parent component
        </button>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    data() {
        return {
            counter: 10,
            description: "Vue is <strong>fun</strong>",
            goats: [
                "T-rex",
                "Conny",
                "Clyde"
            ]
        }
    },
    props: {
        cardTitle: String,
        cardLink: String,
        showButtons: Boolean,
        disabledButtons: Boolean
    },
    methods: {
        changeParentTitle() {
            this.$emit("titleChange")
        },
        addOne() {
            this.counter++;
        },
        minusOne() {
            this.counter--;
        },
        getCardClass() {
            if (this.disabledButtons == true) return "c-card--inactive"
            return ""
        }
    }
    
}
</script>

<style>
/*
        BEM
        Block -> .c-(component)
        Element-> .c-(component)__title
        Modifier-> .c-(component)--red
    */
    .c-card {
        background-color: green;
        margin: 20px;
        padding: 10px;
        border: 2px solid black;
    }

    .c-card--inactive {
        background-color: gainsboro;
    }
</style>