<template>
   <div>
    <h1>
        Page Ranking
        {{ tableData.length}}
    </h1>

    <table border="1">
        <tr>
            <th @click="sortBy('artist')">
                Artist
            </th>
            <th @click="sortBy('title')">
                Song
            </th>
            <th @click="sortBy('totalPoints')">
                Amount of votes
            </th>
        </tr>

        <tr v-for="(row, index) in tableData" :key="index">
            <td>{{ row.artist.name}}</td>
            <td>{{ row.title}}</td>
            <td>{{ row.totalPoints}}</td>
        </tr>
    </table>
   </div>
</template>

<script>
export default {
    // The name of the component
    name: 'PageRanking',
    mounted() {
        // Fetch to the eurosong api, get all songs
        fetch('http://webservies.be/eurosong/Songs')
            .then((response) => response.json())
            .then((songs) => {
                // Fetch tot he eurosong api, get all artists 
                fetch('http://webservies.be/eurosong/Artists')
                    .then((response) => response.json())
                    .then((artists) => {
                        // Map the songs with artist information 
                        songs = this.getSongsForArtists(songs, artists);

                        // Fetch the votes to get the amount of points
                        fetch('http://webservies.be/eurosong/Votes')
                            .then((response) => response.json())
                            .then((votes) => {
                                songs = this.getVotesForSongs(songs, votes);
                                songs = this.sortBy(songs, 'totalPoints');
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
        getSongsForArtists(songs, artists) {
            return songs.map((song) => {
                let artist = artists.find((artist) => artist.id == song.artist);
                song.artist = artist;

                return song;
            })
        },

        getVotesForSongs(songs, votes) {
            return songs.map((song) => {
                let filteredVotes = votes.filter((vote) => vote.songID == song.id)

                let songPoints = 0;

                filteredVotes.forEach((vote) => {
                    songPoints += vote.points;
                });

                song.totalPoints = songPoints;

                return song;
            });
        },

        sortBy(songs, attributeName) {
            return songs.sort((a, b) => b[attributeName] - a[attributeName]);
        }
    }
}
</script>
