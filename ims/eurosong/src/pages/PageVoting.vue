<template>
   <div>
    <h1>
        PageVoting
    </h1>

    <div v-for="(song, index) in songs" :key="'song' + index">
        <div v-if="activeSongIndex == index">
            {{ song.artist.name }} - {{ song.title }}
        </div>
    </div>
   </div>
</template>

<script>
export default {
    name: 'PageVoting',
    data() {
        return {
            songs: [],
            activeSongIndex: 1
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
        
    }
}
</script>
