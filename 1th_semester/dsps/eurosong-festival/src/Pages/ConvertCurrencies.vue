<template>
  <div><h1>CONVERTCURRENCIES</h1>
  <h5>Here you can convert currencies</h5>
  <h5>from</h5><input type="text"><input type="text">
  <h5>to</h5><input type="text"><button @click="fetchConversion()">Convert</button>
  <hr>
  </div>
</template>

<script>
export default {
  name: "ConvertCurrencies",

  methods: {
    fetchConversion() {
      var myHeaders = new Headers();
      myHeaders.append("apikey", "5n0shYHzSIrAf8g6120aXOoIuk2zQm1J");

      var requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
      };

      fetch(
        "https://api.apilayer.com/exchangerates_data/convert?to=to&from=from&amount=amount",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    },
  },
};
</script>

<style>
</style>