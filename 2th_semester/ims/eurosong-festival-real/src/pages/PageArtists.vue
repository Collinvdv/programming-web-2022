<template>
    <div>
        PageArtists

        <hr>
            <input type="text" v-model="newArtist"/>
            <button @click="addArtist()">
                Add Artist
            </button>
        <hr>

        <table border="1">
            <!-- Headers -->
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

            <tr v-for="artist in artists" :key="artist.id">
                <td>
                    {{ artist.id }}
                </td>
                <td>
                    {{ artist.name }}
                </td>
                <td>
                    <button @click="deleteArtist(artist.id)">
                        Delete
                    </button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'PageArtists',
        data() {
            return {
                artists: [],
                newArtist: ""
            }
        },
        mounted() {
           this.fetchArtists();
        },
        methods: {
            fetchArtists() {
                fetch("http://webservies.be/eurosong/Artists", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    .then(response => response.json())
                    .then(_artists => {
                        this.artists = _artists;
                    });
            },
            addArtist() {
                fetch("http://webservies.be/eurosong/Artists", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "name": this.newArtist
                    })
                })
                    .then(response => response.json())
                    .then(() => {
                        this.fetchArtists();
                    });
            },
            deleteArtist(id) {
                fetch("http://webservies.be/eurosong/Artists?id=" + id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(response => response)
                    .then(() => {
                        this.fetchArtists();
                    });
            }
        }
    }
</script>