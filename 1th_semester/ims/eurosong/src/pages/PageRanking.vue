<template>
    <div>
        <h1>
            PageRanking
        </h1>

    </div>
</template>

<script>
export default {
    name: 'PageRanking',
    mounted() {
        fetch("http://webservies.be/eurosong/Songs")
            .then(response => {
                console.log(response);
                return response.json()
            })
            .then(songs => {
                console.log(songs);
            });
    }
}
</script>
