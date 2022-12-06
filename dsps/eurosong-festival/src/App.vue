<template>
  <div id="app">
    <!-- Navigation -->
    <nav>
      <ul>
        <li v-for="(page, index) in pages" :key="index" @click="changePage(page)">
          {{ page }}
        </li>
      </ul>
    </nav>

    <!-- Pages -->
    <PageHome v-if="activePage == 'home'"/>
    <PageRanking v-if="activePage == 'ranking'" />
    <PageVoting v-if="activePage == 'voting'"/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {

    },
    data() {
        return {
          activePage: 'ranking', 
          pages: [
            "home",
            "ranking",
            "voting"
          ]
        }
    },
    methods: {
      changePage(page) {
        this.activePage = page;
      }
    }
  }
</script>