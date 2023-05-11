<template>
    <div>
        <h1>
            Voting
        </h1>

        <div    
            v-for="(song, index) in this.songs"
            :key="song.id"
        >
            <div  v-if="index == activeSongIndex">
                <h2>
                    {{ song.artistObject.name }} - {{ song.title }}
                </h2>
            </div>
        </div>

        <hr/>
        <button @click="goPrev()" :disabled="activeSongIndex <= 0">
            Prev song
        </button>
        <button @click="goNext()" :disabled="activeSongIndex == (songs.length - 1)">
            Next song
        </button>
    </div>
</template>

<script>

// {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         "songID": this.songs[this.activeSongIndex].id,
//         "points": this.buttons[buttonIndex].points
//     })
// }
    export default {
        name: "PageVoting",
        data() {
            return {
                songs: [],
                activeSongIndex: 0
            }
        },
        mounted() {
            this.fetchSongs();
        },
        methods: {
            goPrev() {
                this.activeSongIndex --;
            },
            goNext() {
                this.activeSongIndex ++;
            },
            fetchSongs() {
                fetch("http://webservies.be/eurosong/Songs")
                    .then((response) => {
                        return response.json()
                    })
                    .then((songs) => {
                        this.fetchArtists(songs)
                    })
            },
            fetchArtists(songs) {
                fetch("http://webservies.be/eurosong/Artists")
                    .then((response) => {
                        return response.json()
                    })
                    .then((artists) => {
                        this.combineSongsAndArtists(songs, artists);
                    })
            },
            combineSongsAndArtists(songs, artists) {
                this.songs = songs.map((song) => {
                    song.artistObject = artists.find((artist) => {
                        return artist.id == song.artist
                    });

                    return song;
                });

                console.log(this.songs);
            }
        }
    }
</script>