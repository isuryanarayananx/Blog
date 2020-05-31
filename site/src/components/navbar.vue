<template>
  <div id="navbar">
    <div id="navbar-button" @click="ToggleNavbarBody(1, 0.7)">
      <NavbarButton />
    </div>
    <div id="navbar-body">
      <div id="navbar-body_wrapper">
        <h1>Menu</h1>
        <router-link to="/">home</router-link>
        <router-link to="/">home</router-link>
        <router-link to="/">home</router-link>
        <router-link to="/">home</router-link>
        <router-link to="/">home</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarButton from "./navbar/NavbarButton";
import { TweenLite, Back } from "gsap";
export default {
  name: "navbar",
  data: () => {
    return {
      navbarState: 0,
    };
  },
  methods: {
    ToggleNavbarBody(delay, xdelay) {
      this.navbarState = !this.navbarState;
      if (this.navbarState == 1) {
        // animate on block
        TweenLite.to("#navbar-body", xdelay, {
          ease: Back.easeOut.config(1.7),
          opacity: 0,
          display: "none",
        });
        this.ExitNavbarBody();
      } else {
        // animate on show
        TweenLite.to("#navbar-body", delay, {
          ease: Back.easeOut.config(1.7),
          opacity: 1,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, #fff 0%, rgba(0,0,0,0.40) 120%) #2c3e50",
          backgroundBlendMode: "multiply,multiply",
          display: "block",
        });
        this.OpenNavbarBody();
      }
    },
    ExitNavbarBody() {
      TweenLite.to("#navbar-body_wrapper", 0.5, {
        top: "0px",
      });
    },
    OpenNavbarBody() {
      TweenLite.to("#navbar-body_wrapper", 0.8, {
        top: "20px",
      });
    },
  },
  components: {
    NavbarButton: NavbarButton,
  },

  mounted() {
    this.ToggleNavbarBody(0, 0);
  },
};
</script>
<style lang="scss">
$color1: #2c3e50;
$color2: #42b983;

#navbar {
  #navbar-body {
    width: 100%;
    height: 100vh;
    background: #111;
    position: absolute;
    padding: 10%;
    #navbar-body_wrapper {
      width: 80%;
      position: relative;
    }
  }

  a {
    font-weight: bold;
    color: $color1;
    padding: 0px 5px 0px 5px;

    &.router-link-exact-active {
      color: white;
      border-radius: 10px;
    }
  }
}
</style>
