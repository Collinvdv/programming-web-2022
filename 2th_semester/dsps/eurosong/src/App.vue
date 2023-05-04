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
    <PageVoting v-if="this.activePage == 'voting'"/>
  </div>
</template>

<script>
  // Components 
  import PageHome from './components/PageHome.vue';
  import PageRanking from './components/PageRanking.vue';
  import PageVoting from './components/PageVoting.vue';

  // Export 
  export default {
    name: 'App',
    components: {
      PageHome,
      PageRanking,
      PageVoting
    },
    data() {
      return {
        "activePage" : null,
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
            disabled: true
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
