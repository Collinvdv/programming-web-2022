<template>
   <div>
        Page Home
        <br>
        <input type="text" v-model="newArtist">
        {{  newArtist }}
        <button @click="addArtist()">
            Add Artist
        </button>
        <hr>
        <table border="1">
            <tr>
                <th>
                    ID
                </th>
                <th>
                    Name
                </th>
                <th>
                    Actions
                </th>
            </tr>

            <tr v-for="(artist , index) in artists" :key="index">
                <td>
                    {{  artist.id }}
                </td>
                <td>
                    {{ artist.name }}
                </td>
                <td>
                    <button @click="deleteArtist(artist.id)">
                        Delete the artist
                    </button>
                </td>
            </tr>
        </table>

   </div>
</template>

<script>
export default {
    // The name of the component
    name: 'PageHome',
    mounted() { 
        this.fetchArtists();
    },
    data() {
        return {
            artists: [],
            newArtist: ""
        }
    },
    methods: {
        deleteArtist(id) { 
            fetch(`http://webservies.be/eurosong/Artists?id=${id}`, {
                method: "DELETE",
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
            }).then((response) => {
                return response.json()
            }).then(() => {
                this.fetchArtists();
            });
        },
        addArtist() { 
            fetch("http://webservies.be/eurosong/Artists", {
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                    name: this.newArtist
                })
            }).then((response) => {
                return response.json()
            }).then((result) => {
                this.fetchArtists();
                console.log(result);
            })
        },
        fetchArtists() { 
            fetch('http://webservies.be/eurosong/Artists')
                .then((response) => response.json())
                .then((artists) => {
                    this.artists = artists;
                });
        }
    }
}
</script>
