<template>
  <div id="navbar">
    <div class="navbar-body">
      <router-link to="/">home</router-link>
      <router-link to="/get-started">getStarted</router-link>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "navbar",
  methods: {
    ...mapGetters([]),
  },
  components: {},
};
</script>
<style lang="scss">
$color1: #2c3e50;
$color2: #42b983;

#navbar {
  padding: 10px 10px 10px 10px;

  a {
    font-weight: bold;
    color: $color1;
    padding: 0px 5px 0px 5px;

    &.router-link-exact-active {
      color: black;
      border-radius: 10px;
    }
  }
}
</style>
