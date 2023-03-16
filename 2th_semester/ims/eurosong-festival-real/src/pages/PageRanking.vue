<template>
    <div>
        <h1>Ranking page</h1>
        <table border="1">
            <tr>
                <th>
                    Artist
                </th>
                <th>
                    Songname
                </th>
                <th>
                    Points
                </th>

            </tr>
            <tr v-for="song in songs" :key="song.id">
                <td>
                    {{ song.artistObject.name }}
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
            fetch("http://webservies.be/eurosong/Songs")
                .then(response => {
                    return response.json()
                })
                .then(songs => {
                    fetch("http://webservies.be/eurosong/Artists")
                        .then(response => {
                            return response.json()
                        })
                        .then(artists => {
                           this.mixSongsWithArtists(artists, songs);
                        });
                });
        },
        data() {
            return {
                songs: []
            }
        },
        methods: {
            mixSongsWithArtists(artists, songs) {
                let mappedSongs = songs.map(song => {
                    song.artistObject = artists.find(artist => artist.id == song.artist);
                    return song;
                });

                fetch("http://webservies.be/eurosong/Votes")
                        .then(response => {
                            return response.json()
                        })
                        .then(votes => {
                            mappedSongs = mappedSongs.map(song => {
                                let totalVote = 0 
                                let votesForSong = votes.filter(vote => vote.songID == song.id)
                                
                                votesForSong.forEach(vote => {
                                    totalVote += vote.points;
                                });

                                song.totalPoints = totalVote;

                                return song;
                            });

                            this.songs = mappedSongs;
                        });
            }
        }
    }
</script>