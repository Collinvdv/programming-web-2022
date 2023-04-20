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
    <PageArtists v-if="this.activePage == 'Artists'" />
  </div>
</template>

<script>
  import PageHome from './pages/PageHome.vue';
  import PageVoting from './pages/PageVoting.vue';
  import PageRanking from './pages/PageRanking.vue';
  import PageArtists from './pages/PageArtists.vue';

  export default {
    name: 'App',
    components: {
      PageHome,
      PageVoting,
      PageRanking,
      PageArtists
    },
    data() {
      return {
        activePage: 'Artists',
        links: [
          "Home",
          "Ranking",
          "Voting",
          "Artists"
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
