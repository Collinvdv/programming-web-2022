<template>
  <div id="app">
    <!-- Navigation -->
    <ul>
      <li 
        v-for="(link, index) in links"
        :key="index"

        :style="getStyleActivePage(link)" 
        @click="setActivePage(link)">
           {{ link }}
      </li>
    </ul>

    <!-- Pages -->
    <PageHome v-if="this.activePage == 'Home'" />
    <PageVoting v-if="this.activePage == 'Voting'" @setActivePage="setActivePage"/>
    <PageRanking v-if="this.activePage == 'Ranking'" />
  </div>
</template>

<script>
  import PageHome from './pages/PageHome.vue';
  import PageVoting from './pages/PageVoting.vue';
  import PageRanking from './pages/PageRanking.vue';

  export default {
    name: 'App',
    components: {
      PageHome,
      PageVoting,
      PageRanking
    },
    data() {
      return {
        activePage: 'Voting',
        links: [
          "Home",
          "Ranking",
          "Voting"
        ]
      }
    },
    methods: {
      setActivePage(page) {
        console.log(page);
        this.activePage = page;
      },
      getStyleActivePage(page) {
        if (this.activePage == page ) {
          return 'cursor: pointer; text-decoration: underline';
        } else {
          return 'cursor: pointer';
        }
      }
    }
  }
</script>
