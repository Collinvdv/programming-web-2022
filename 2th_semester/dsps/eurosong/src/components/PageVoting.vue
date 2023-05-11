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
                    {{ song.artistObject.name }} - {{ song.title }} <br>
                    id: {{ song.id }}
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
        <hr/>
        <div v-for="(voteButton, index) in votes" :key="`button-votes-${index}`">
            <button @click="vote(index)" :disabled="voteButton.isActive == false">
                {{ voteButton.amountOfPoints }}
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageVoting",
        data() {
            return {
                songs: [],
                activeSongIndex: 0,
                votes: [
                    {
                        "amountOfPoints": 2,
                        "isActive": true
                    },
                    {
                        "amountOfPoints": 4,
                        "isActive": true
                    },
                    {
                        "amountOfPoints": 8,
                        "isActive": true
                    }
                ]
            }
        },
        mounted() {
            this.fetchSongs();
        },
        methods: {
            vote(voteButtonIndex) {
                fetch("http://webservies.be/eurosong/Votes", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "songID": this.songs[this.activeSongIndex].id,
                        "points": this.votes[voteButtonIndex].amountOfPoints,
                        "ip": "127.0.0.1"
                    })
                }).then((response) => {
                    return response.json()
                }).then((data) => {
                    this.votes[voteButtonIndex].isActive = false;

                    // loop to see if the game is ended 
                    // let gameEnded = true;

                    // this.votes.forEach((vote) => {
                    //     if (vote.isActive) {
                    //         gameEnded = false;
                    //     }
                    // })

                    // if (gameEnded) {
                    //     console.log("Game ended, redirect");
                    // }

                    let numberOfActiveVotes = this.votes.filter(vote => vote.isActive == true).length == 0;

                    if (numberOfActiveVotes) {
                        this.$emit("changePage", "ranking");
                    }
                    console.log(data);
                })
            },
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