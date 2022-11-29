<template>
  <div id="app">
    <h1>
      Playground vue.js
    </h1>

    <Card title="test 1" showButtons link="https://youtube.com"/>

    <Card title="test 2" />

    <Card title="test 3" showButtons isButtonsDisabled/>

    <Card title="test 4"/>

  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>