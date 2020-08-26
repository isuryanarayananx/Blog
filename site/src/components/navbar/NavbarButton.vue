<template>
  <div
    id="navbar-button"
    @click="toggleClicked()"
    v-bind:class="{ active: isActive }"
    class="nav"
  >
    getStarted
  </div>
</template>
<script>
import { TweenLite } from "gsap";
export default {
  name: "navbar-button",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleClicked: function() {
      this.isActive = !this.isActive;
    },
  },
  components: {},
  mounted: () => {
    TweenLite.to("#navbar-button", {});
  },
};
</script>
<style lang="scss">
#navbar-button {
  position: absolute;
  z-index: 99999;
  padding: 10px;
}
.active {
  color: #42b983;
}
.active::before {
  content: "don't";
}
</style>
