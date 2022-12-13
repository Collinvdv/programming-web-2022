<template>
    <div>
        <h1>
            PageRanking
        </h1>
 
        <table border="1">
            <!-- Heading -->
            <tr>
                <th>
                    Artist
                </th>
                <th>
                    Song
                </th>
                <th>
                    Votes
                </th>
            </tr>

            <!-- Data -->
            <tr v-for="(song, index) in tableData" :key="index">
                <td>
                    {{ song.artist.name }}
                </td>
                <td>
                    {{ song.title }}
                </td>
                <td>
                    {{ song.totalPoints }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'PageRanking',
    mounted() {
        // fetch call naar songs
        fetch('http://webservies.be/eurosong/Songs')
            .then((response) => response.json())
            .then((songs) => {

                // fetch call naar artists
                fetch('http://webservies.be/eurosong/Artists')
                    .then((response) => response.json())
                    .then((artists) => {
                        songs = this.enrichSongsWithArtist(songs, artists);

                        // Fetch votes
                        fetch('http://webservies.be/eurosong/Votes')
                            .then((response) => response.json())
                            .then((votes) => {
                                songs = this.enrichSongsWithVotes(songs, votes)

                                this.tableData = songs;
                            });
                    });
            });
    },
    data() {
        return {
            tableData: []
        }
    },
    methods: {
        enrichSongsWithArtist(songs, artists) {
            // .map() -> returns new array 
            // .find() -> returns first element which matches the condition
            return songs.map((song) => {
                song.artist = artists.find((artist) => artist.id == song.artist);

                return song;
            });

        },

        enrichSongsWithVotes(songs, votes) {
            return songs.map((song) => {
                let filteredVotes = votes.filter((vote) => vote.songID == song.id)

                let totalPoints = 0;

                filteredVotes.forEach((vote) => {
                    totalPoints += vote.points;
                })

                song.totalPoints = totalPoints;
                return song;
            });
        }
    }
}
</script>
