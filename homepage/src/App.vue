<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f9f8fc;
  height: 100%;
  color: #19273b;

  .content {
    padding: 1em;
  }

  .pure-button {
    font-family: "Playfair Display", Georgia, "Times New Roman", Times, serif;
    background: #88abde;
    color: white;
  }
}
</style>
