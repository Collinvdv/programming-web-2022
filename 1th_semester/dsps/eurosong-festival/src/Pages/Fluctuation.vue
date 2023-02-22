<template>
  <div>
    <h1>FLUCTUATION</h1>
    <table border="1">
      <tr>
        <th>Code</th>
        <th>Name</th>
      </tr>
      <tr v-if="dates.fluctuation > 0"></tr>
      <tr v-for="item in dates" :key="item.base">
        <td>{{ item }}</td>
      </tr>
      
    </table>
  </div>
</template>

<script>
export default {
  name: "FluctuationPage",
  mounted() {
    this.fetchFluctuation();
  },
  data() {
    return {
      dates: [],
    };
  },
  methods: {
    fetchFluctuation() {
      var myHeaders = new Headers();
      myHeaders.append("apikey", "5n0shYHzSIrAf8g6120aXOoIuk2zQm1J");

      var requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
      };

      fetch(
        "https://api.apilayer.com/exchangerates_data/fluctuation?start_date=2023-01-09&end_date=2023-01-10",
        requestOptions
      )
        .then((response) => response.text())
        
        .then((dates) => (this.dates = dates))
        .catch((error) => console.log("error", error));
    },
  },
};
</script>

<style>
</style>