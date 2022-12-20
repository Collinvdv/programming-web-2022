<template>
   <div>
    <h1>
        PageHome
    </h1>

    <input type="text" v-model="favoriteCountry" />
    <button @click="screamCountry()">
        Scream favorite country
    </button>
   </div>
</template>

<script>
export default {
    name: 'PageHome',
    mounted() {
        // functie wordt automatisch uitgevoerd van zodra het comp
        // zichtbaar is 
        fetch("http://webservies.be/eurosong/Votes", {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                songID: this.songs[this.activeSongIndex].id,
                points: this.voteButtons[buttonIndex].points
            })
        }).then((response) => {
            return response.json()
        }).then((result) => {
            console.log(result);
        })
    },
    data() {
        return {
            favoriteCountry: ""
        }
    },
    methods: {
        screamCountry() {
            alert(this.favoriteCountry);
        }
    }
}
</script>
