<template>
    <div>
        <h1>Ranking page</h1>

        <table border="1">
            <!-- Table heading -->
            <tr>
                <th>
                    ID
                </th>
                <th>
                    Name
                </th>
            </tr>

            <!-- Artist -->
            <tr v-for="artist in artists" :key="artist.id">
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

<script>
    export default {
        name: 'PageRanking',
        data() {
            return {
                artists: []
            }
        },
        mounted() {
            fetch("http://webservies.be/eurosong/Artists")
                .then(response => response.json())
                .then(data => {
                    this.artists = data;
                })
        }
    }
</script>