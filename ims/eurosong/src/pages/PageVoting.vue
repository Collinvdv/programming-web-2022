<template>
   <div>
    <h1>
        PageVoting
    </h1>

    <div v-for="(button, index) in voteButtons" :key="index">
        <button  @click="vote(index)" v-if="button.isVoted == false">
            {{button.points}} points
        </button>
    </div>
   </div>
</template>

<script>
export default {
    name: 'PageVoting',
    data() {
        return {
            voteButtons: [
                {
                    points: 2,
                    isVoted: false
                },
                {
                    points: 4,
                    isVoted: false
                },
                {
                    points: 6,
                    isVoted: false
                },
                {
                    points: 8,
                    isVoted: false
                }
            ]
        }
    },
    methods: {
        vote(index) {
            console.log("vote");
            // fetch call 

            // is voted gaan aanpassen
            this.voteButtons[index].isVoted = true;
        }
    }
}
</script>
