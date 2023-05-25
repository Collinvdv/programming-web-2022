<!-- Template -->
<template>
    <div>
        <h1>
            Page artists
        </h1>

        <!-- Create artists -->
        <div v-if="!showConfirmationArtist">
            <h2> Create artists</h2>

            <label for="name">
                Name
            </label>
            <input type="text" id="name" v-model="newArtist">
            {{ newArtist }}

            <button @click="addArtist()">
                Create artists
            </button>
        </div>

        <div v-if="showConfirmationArtist">
            Yihaah you have added an artist.
        </div>

        <!-- Artists -->
        <table border="1">
            <!-- Header -->
            <tr>
                <th>
                    Id
                </th>
                <th>
                    Name
                </th>
            </tr>

            <!-- Body -->
            <tr v-for="artist in this.artists" :key="artist.id">
                <td>
                    {{ artist.id }}
                </td>
                <td>
                    {{ artist.name }}
                </td>
            </tr>
        </table>


    </div>
</template>

<!-- Script -->
<script>
    export default {
        name: "PageArtists",
        data() {
            return {
                artists: [],
                newArtist: "",
                showConfirmationArtist: false
            }
        },
        mounted() {
            this.fetchArtists();
        },
        methods: {
            fetchArtists() {
                fetch("http://webservies.be/eurosong/Artists")
                    .then((response) => {
                        return response.json();
                    })
                    .then((artistsFromApi) => {
                        this.artists = artistsFromApi;
                    })
            },
            addArtist() {
                fetch("http://webservies.be/eurosong/Artists", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: this.newArtist
                    })
                }).then(response => response.json())
                .then(() => {
                    this.newArtist = "";
                    this.showConfirmationArtist = true;
                    this.fetchArtists();
                })
            }
        }
    }
</script>