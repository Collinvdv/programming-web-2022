<template>
    <div>
        <h1>Voting page</h1>
    </div>
</template>

<script>
    export default {
        name: 'PageVoting',
        mounted() {
            this.fetchSongs();
        },
        methods: {
            fetchSongs() {
                fetch("http://webservies.be/eurosong/Songs")
                .then(response => {
                    return response.json();
                })
                .then(songs => {
                    this.fetchArtists(songs);
                });
            },

            fetchArtists(songs) {
                fetch("http://webservies.be/eurosong/Artists")
                .then(response => {
                    return response.json();
                })
                .then(artists => {
                    console.log(artists, songs);
                });
            }
        }
    }
</script>