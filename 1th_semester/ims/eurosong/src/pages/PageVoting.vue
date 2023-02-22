<template>
   <div>
    <h1>
        PageVoting
    </h1>

    <!-- Game -->
    <div v-if="voteButtons.filter((button) => button.isActive).length > 0">
        <!-- Carousel -->
        <div v-for="(song, index) in songs" :key="'song' + index">
            <div v-if="activeSongIndex == index">
                {{ song.artist.name }} - {{ song.title }}
            </div>
        </div>

        <!-- Buttons -->
        <button @click="goToPrevSong()" :disabled="activeSongIndex == 0">
            prev song
        </button>

        <button @click="goToNextSong()" :disabled="activeSongIndex == (songs.length - 1)">
            Next song
        </button>

        <hr>

        <!-- Vote buttons -->
        <div v-if="votedSongs.includes(activeSongIndex) == false">
            <div v-for="(voteButton, index) in voteButtons" :key="'voteButton-' + index">
                <button @click="vote(index)" v-if="voteButton.isActive">
                    Vote {{ voteButton.points }} points
                </button>
            </div>
        </div>
    </div>
   
    <div v-if="voteButtons.filter((button) => button.isActive).length == 0">
        You voted for everything
    </div>
   </div>
</template>

<script>
export default {
    name: 'PageVoting',
    data() {
        return {
            songs: [],
            votedSongs: [],
            activeSongIndex: 0,
            voteButtons: [
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
                },
            ]
        }
    },
    mounted() {
        // fetch query uitsturen (alle songs opvragen)
        fetch('http://webservies.be/eurosong/Songs')
            .then((response) => response.json())
            .then((songs) => {

                // fetch query uitsturen (alle artiesten opvragen)
                fetch('http://webservies.be/eurosong/Artists')
                    .then((response) => response.json())
                    .then((artists) => {
                        // mengen
                        songs = songs.map((song) => {
                            let artistObject = artists.find((artist) => song.artist == artist.id);
                            song.artist = artistObject;
                            return song;
                        })

                        this.songs = songs;
                    });
            });
        
    },
    methods: {
        vote(buttonIndex) {
            // Button gehide
            this.voteButtons[buttonIndex].isActive = false;

            // post vote
            this.votedSongs.push(this.activeSongIndex);

            // send a http request
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
        goToNextSong() {
            if (this.activeSongIndex == this.songs.length - 1) {
                this.activeSongIndex = 0;
            } else {
                this.activeSongIndex++;
            }
        },

        goToPrevSong() {
            this.activeSongIndex--;
        }
    }
}
</script>
