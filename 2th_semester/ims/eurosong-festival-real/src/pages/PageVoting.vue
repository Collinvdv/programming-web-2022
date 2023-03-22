<template>
    <div>
        <h1>Voting page</h1>
        {{ this.songs.length }}
        <div>
            <div 
                style="
                    height: 50px; 
                    border: 1px solid black;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                "
                v-if="songs.length > 0"
            >
                {{ songs[activeSongIndex].artistObject.name }} - {{ songs[activeSongIndex].title }}
            </div>

            <button @click="changeSongIndex(-1)" v-if="activeSongIndex > 0">
                Prev song
            </button>

            <button @click="changeSongIndex(1)" v-if="activeSongIndex < (songs.length - 1)" >
                Next song
            </button>

            <hr>

            <button
                v-for="(button, index) in buttons"
                :key="index"
                 @click="sendVote(index)"
                 :disabled="!button.isActive"
            >
                {{ button.points }} points
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PageVoting',
        mounted() {
            this.fetchSongs();
        },
        data() {
            return {
                songs: [],
                activeSongIndex: 0,
                buttons: [
                    {
                        isActive: true,
                        points: 2
                    },
                    {
                        isActive: true,
                        points: 4
                    },
                    {
                        isActive: true,
                        points: 8
                    },
                ]
            }
        },
        methods: {
            sendVote(buttonIndex) {
                // put button disabled 
                this.buttons[buttonIndex].isActive = false;

                // send vote to the api 
                fetch("http://webservies.be/eurosong/Votes", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "songID": this.songs[this.activeSongIndex].id,
                        "points": this.buttons[buttonIndex].points
                    })
                }).then(response => response.json())
                .then((data) => {
                    // check if there are any activeButtons
                    let activeButtons = this.buttons.filter(button => button.isActive == true);

                    if (activeButtons.length == 0) {
                        console.log("YOUR VOTES ARE SUBMITTED");
                        this.$emit("setActivePage", "Ranking");
                    }
                    console.log(data);
                });
            },

            changeSongIndex(value) {
                this.activeSongIndex += value;
            },
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
                    this.songs = songs.map(song => {
                        let artistObject = artists.find(artist => artist.id == song.artist);

                        song.artistObject = artistObject;

                        return song;
                    });
                });
            }
        }
    }
</script>