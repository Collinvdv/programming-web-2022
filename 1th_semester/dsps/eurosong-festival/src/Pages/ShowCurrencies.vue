<template>
  <div>
    <h1>SHOWCURRENCIES</h1>
    <table border="1">
      <tr>
        <th>Code</th>
        <th>Name</th>
      </tr>
      <tr v-for="items in moneys" :key="items.id">
        <!--<td>{{ items.succes }}</td>
        <td>{{ items.symbols }}</td>-->
        <td>{{items}}</td>
      </tr>
    </table>
    <hr />
  </div>
</template>

<script>
export default {
  name: "ShowCurrencies",
  mounted() {
    this.fetchCoins();
  },

  data() {
    return {
      moneys: [],
    };
  },

  methods: {
    fetchCoins() {
      var myHeaders = new Headers();
      myHeaders.append("apikey", "5n0shYHzSIrAf8g6120aXOoIuk2zQm1J");

      var requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
      };

      fetch(
        "https://api.apilayer.com/exchangerates_data/symbols",
        requestOptions
      )
        .then((response) => response.json())
        
        .then((moneys) => (this.moneys = moneys))
        .catch((error) => console.log("error", error));
    },
  },
};
</script>

<style>
</style>