<!-- Rendering -->
<template>
   <div>
    <h1>
        PageHome
    </h1>

    <h2>
        Add artist
    </h2>

    <input type="text" v-model="newArtist">
    <button @click="addArtist()">
        Add artist
    </button>
    <hr>
    <table border="1">
        <tr>
            <th>
                ID
            </th>
            <th>
                NAME
            </th>
            <th>
                ACTION
            </th>
        </tr>

        <tr v-for="artist in artists" :key="artist.id">
            <td>
                {{ artist.id }}
            </td>

            <td>
                {{ artist.name }}
            </td>

            <td>
                <button @click="deleteArtist(artist.id)">
                    Delete this artist
                </button>
            </td>
        </tr>
    </table>
   </div>
</template>

<!-- Logica -->
<script>
    export default {
        name: 'PageHome',
        mounted() {
        // fetch call naar artists
            this.fetchArtists();
        },
        data() {
            return {
                artists: [],
                newArtist: ""
            }
        },
        methods: {
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
                    console.log(result);
                    this.fetchArtists();
                })
            },
            fetchArtists() {
                fetch('http://webservies.be/eurosong/Artists')
                    .then((response) => response.json())
                    .then((artists) => {
                        this.artists = artists;
                    });
            },
            deleteArtist(id) {
                fetch("http://webservies.be/eurosong/Artists?id=" + id, {
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
            }
        }
    }
</script>
