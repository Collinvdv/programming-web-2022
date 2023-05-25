<template>
  <div id="app">
    <ul>
      <li v-for="page in this.pages" :key="page.id">
        <button @click="changeActivePage(page.id)" :disabled="page.disabled">
          {{ page.text }}
        </button>
      </li>
    </ul>

    <PageHome v-if="this.activePage == 'home'" />
    <PageRanking v-if="this.activePage == 'ranking'"/>
    <PageVoting v-if="this.activePage == 'voting'" @changePage="changeActivePage"/>
    <PageArtists v-if="this.activePage == 'artists'"/>
  </div>
</template>

<script>
  // Components 
  import PageHome from './components/PageHome.vue';
  import PageRanking from './components/PageRanking.vue';
  import PageVoting from './components/PageVoting.vue';
  import PageArtists from './components/PageArtists.vue';

  // Export 
  export default {
    name: 'App',
    components: {
      PageHome,
      PageRanking,
      PageVoting,
      PageArtists
    },
    data() {
      return {
        "activePage" : "artists",
        "pages" : [
          {
            id: "home",
            text: "Home",
            disabled: false
          },
          {
            id: "ranking",
            text: "Ranking",
            disabled: false
          },
          {
            id: "voting",
            text: "Voting",
            disabled: false
          },
          {
            id: "artists",
            text: "artists",
            disabled: false
          },
        ]
      }
    },
    methods: {
      changeActivePage(page) {
        this.activePage = page;
      }
    }
  }
</script>
