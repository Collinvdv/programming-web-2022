<template>
    <div>
        <h1>Voting page</h1>
    </div>
</template>

<script>
    export default {
        name: 'PageVoting',
        mounted() {
            console.log("Is this page mounted?");
            fetch("http://webservies.be/eurosong/Songs")
                .then(response => {
                    return response.json();
                })
                .then(songs => {
                    console.log(songs);
                });
        }
    }
</script>