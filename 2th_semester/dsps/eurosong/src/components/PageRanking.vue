<template>
    <div>
        <h1>
            Ranking
        </h1>

        <table border="1">
            <!-- Table headers -->
            <tr>
                <th>
                    Title
                </th>

                <th>
                    Artist
                </th>

                <th>
                    Points
                </th>
            </tr>

            <!-- Table data -->
            <tr v-for="song in this.songs" :key="`song-row-${song.id}`">
                <td>
                    {{ song.title }}
                </td>

                <td>
                    {{  song.artistObject.name }}
                </td>

                <td>
                    {{ song.points }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "PageRanking",
        mounted() {
            fetch("http://webservies.be/eurosong/Songs")
                .then((response) => {
                    return response.json()
                })
                .then((songs) => {
                    // fetch the artists
                    fetch("http://webservies.be/eurosong/Artists")
                        .then((response) => {
                            return response.json()
                        })
                        .then((artists) => {
                            // mix the songs and artists
                            songs = songs.map(song => {
                                song.artistObject = artists.find(artist => {
                                    return  artist.id == song.artist
                                })
                                return song;
                            })

                            // save it to song so I can render my table 
                            // this.songs = songs;

                            // Damn I need votes too, so let me fetch them
                            fetch("http://webservies.be/eurosong/Votes")
                                .then((response) => {
                                    return response.json()
                                })
                                .then((votes) => {
                                    songs = songs.map((song) => {
                                        song.points = 0;

                                        // filter the votes for this song
                                        let votesForSongs = votes.filter((vote) => { 
                                            return vote.songID == song.id;
                                        })

                                        // calculate the points
                                        votesForSongs.forEach((vote) => {
                                            song.points += vote.points;
                                        })

                                        console.log(votesForSongs)
                                        return song;
                                    });

                                    console.log(songs);
                                    this.songs = songs;
                                })
                        })

                })
        },
        data() {
            return {
                songs: []
            }
        }
    }
</script>