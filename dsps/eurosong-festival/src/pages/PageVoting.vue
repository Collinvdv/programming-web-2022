<template>
   <div>
        <h1>
            Page Voting
        </h1>

        <!-- Voting -->
        <!-- buttons.filter((button) => button.isActive == true).length > 0 -->
        <div v-if="this.votes != this.buttons.length">
            <!-- Song carousel -->
            <div v-for="(song, index) in songs" :key="song.id">
                <div v-if="activeSongIndex == index">
                    {{ song.artist.name }} - {{ song.title }}
                </div>
            </div>

            <!-- Buttons -->
            <button @click="prevSong()">
                Prev song
            </button>
            <button @click="nextSong()">
                Next song
            </button>

            <hr>

            <!--  Voting buttons-->
            <div v-for="(button, index) in buttons" :key="'voting-button-' + index">
                <button @click="vote(index)" v-if="button.isActive">
                    Vote for {{ button.points }} points
                </button>
            </div>
        </div>
        
        <!-- End voting -->
        <div v-if="this.votes == this.buttons.length">
            You don't got any votes anymore
        </div>
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
                activeSongIndex: 0,
                votes: 0,
                buttons: [
                    {
                        points: 2,
                        isActive: true
                    },
                    {
                        points: 4,
                        isActive: true
                    },
                    {
                        points: 8,
                        isActive: true
                    }
                ]
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
        },
        vote(buttonIndex) {
            this.votes++;
            // hide buttons
            this.buttons[buttonIndex].isActive = false;

            // send a http request
            fetch("http://webservies.be/eurosong/Votes", {
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                    songID: this.songs[this.activeSongIndex].id,
                    points: this.buttons[buttonIndex].points
                })
            }).then((response) => {
                return response.json()
            }).then((result) => {
                console.log(result);
            })
        }
    }
    }
</script>
