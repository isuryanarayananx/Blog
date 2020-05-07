<template>
  <div id="app">
    <div class="cursor"></div>
    <router-view />
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["ONLOAD"]),
    onload: function() {
      this.ONLOAD();
    },
  },

  mounted: function() {
    /* pre auth validation */
    this.onload();
    /* cursor javascript */
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
      cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
      );
    });

    document.addEventListener("click", () => {
      cursor.classList.add("expand");

      setTimeout(() => {
        cursor.classList.remove("expand");
      }, 500);
    });
  },
};
</script>
<style lang="scss">
$color1: #2c3e50;
$color2: #42b983;

body {
  padding: 0;
  margin: 0;
  overflow: hidden;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: $color1;
}

::-webkit-scrollbar {
  width: 3px;
  background-color: $color1;
}

::-webkit-scrollbar-thumb {
  background-color: $color2;
  border: 1px solid $color2;
}

#app {
  @import url("https://fonts.googleapis.com/css?family=Merriweather&display=swap");
  font-family: "Merriweather", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color1;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  // cursor: n  one;
  height: 100vh;
}
.cursor {
  width: 20px;
  height: 20px;
  border: 2px solid white;
  border-radius: 50%;
  position: absolute;
  transition-duration: 300ms;
  transition-timing-function: ease-out;
  animation: cursorAnim2 0.5s infinite alternate;
  pointer-events: none;
}

.cursor::after {
  content: "";
  width: 20px;
  height: 20px;
  position: absolute;
  border: 4px solid black;
  border-radius: 50%;
  opacity: 0.2;
  top: -4px;
  left: -4px;
}

@keyframes cursorAnim {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.7);
  }
}

@keyframes cursorAnim2 {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.4);
  }
}

@keyframes cursorAnim3 {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

.expand {
  animation: cursorAnim3 0.5s forwards;
  border: 1px solid red;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: auto;

  .form--email {
    border: 0px;
    border-bottom: 1px solid #43ddae;
    padding: 5px;
  }

  .form--password {
    border: 0px;
    border-bottom: 1px solid #43ddae;
    padding: 5px;
  }

  .form--submit {
    background: transparent;
    border: none;
    color: #43ddae;
    font-style: oblique;
    text-align: left;
  }
}
</style>
