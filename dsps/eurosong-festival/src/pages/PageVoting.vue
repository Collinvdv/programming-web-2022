<template>
   <div>
        <h1>
            Page Voting
        </h1>

        <!-- Song carousel -->
        <div v-for="(song, index) in songs" :key="song.id">
            <div v-if="activeSongIndex == index">
                {{song.artist.name}} - {{ song.title}} 
            </div>
        </div>

        <!-- Buttons -->
        <button @click="prevSong()">
            Prev song
        </button>
        <button @click="nextSong()">
            Next song
        </button>
   </div>
</template>

<script>
    export default {
        // The name of the component
    name: 'PageVoting',
    mounted() {
        // get all the songs
        fetch('http://webservies.be/eurosong/Songs')
            .then((response) => response.json())
            .then((songs) => {
                fetch('http://webservies.be/eurosong/Artists')
                    .then((response) => response.json())
                    .then((artists) => {
                        // enricht the song with artist information 
                        songs = songs.map((song) => {
                            let artistObject = artists.find((artist) => artist.id == song.artist);
                            song.artist = artistObject;
                            return song;
                        })

                        // overwrite songs so template is rerendered
                        this.songs = songs;
                    });
            });
    },
    data() {
        return {
                songs: [],
                activeSongIndex: 0
            }
    },
    methods: {
        nextSong() {
            if (this.activeSongIndex == (this.songs.length - 1)) {
                this.activeSongIndex = 0;
            } else {
                this.activeSongIndex++;
            }
        },
        prevSong() {
            if (this.activeSongIndex == 0) {
                this.activeSongIndex = this.songs.length - 1;
            } else {
                this.activeSongIndex--;
            }
        }
    }
    }
</script>
