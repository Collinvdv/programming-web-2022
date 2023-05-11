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
            </tr>

            <!-- Table data -->
            <tr v-for="song in this.songs" :key="`song-row-${song.id}`">
                <td>
                    {{ song.title }}
                </td>

                <td>
                    {{  song.artistObject.name }}
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
                            songs = songs.map(song => {
                                song.artistObject = artists.find(artist => {
                                    return  artist.id == song.artist
                                })
                                return song;
                            })

                            console.log(songs);
                            this.songs = songs;
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