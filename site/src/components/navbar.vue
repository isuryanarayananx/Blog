<template>
  <div id="navbar">
    <div id="navbar-button" @click="ToggleNavbarBody(1, 0.7)">
      <NavbarButton />
    </div>
    <div id="navbar-body">
      <div id="navbar-body_wrapper">
        <div id="wrapper-split">
          <div id="split_left">
            <div class="login" v-show="authstate">
              <a href="#" @click="ToggleAuthState()">Create a new account</a>
              <div id="login-brand">
                <h1>Login to your account</h1>
              </div>
              <div class="login-username">
                <input type="text" name="" placeholder="Username" id="" />
              </div>
              <div class="login-password">
                <input type="text" name="" placeholder="Password" id="" />
              </div>
            </div>
            <div class="signup" v-show="!authstate">
              <a href="#" @click="ToggleAuthState()"
                >Already have an account?</a
              >
              <div id="signup-brand">
                <h1>Create an account</h1>
              </div>
              <div class="signup-username">
                <input type="text" name="" placeholder="Username" id="" />
              </div>
              <div class="signup-password">
                <input type="text" name="" placeholder="Password" id="" />
              </div>
              <div class="signup-password-confirm">
                <input
                  type="text"
                  name=""
                  placeholder="Confirm Password"
                  id=""
                />
              </div>
              <div class="signup-nickname">
                <input type="text" name="" placeholder="Nick Name" id="" />
              </div>
            </div>
          </div>
          <div id="split_right">
            <div class="button">
              <router-link to="/">Home</router-link>
            </div>
            <div class="button">
              <router-link to="login/">Login</router-link>
            </div>
            <div class="button">
              <router-link to="signup/">Signup</router-link>
            </div>
            <div class="button">
              <router-link to="dashboard/">Dashboard</router-link>
            </div>
            <div class="button">
              <router-link to="donated/">Donate </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
$color1: #2c3e50;
$color2: #42b983;

#navbar {
  #navbar-body {
    width: 100%;
    height: 100vh;
    background: white;
    position: absolute;
    #navbar-body_wrapper {
      padding: 10%;
      position: relative;
      #wrapper-split {
        width: 100%;

        display: inline-grid;
        grid-template-columns: 50% 50%;
        #split_left {
          input {
            width: 70%;
            background: transparent;
            border: 0px solid white;
            box-shadow: 0px 1px 0px $color2;
            padding: 10px;
          }
          input:focus {
            outline: none;
            color: #42b983;
          }
        }
        #split_right {
          height: 20px;
          color: $color2;
          display: inline-grid;
          padding: 10px;
          grid-template-columns: 60% 60%;
          .button {
            text-align: center;
            padding: 10px;
            border-radius: 5px;
            z-index: 9999999;
          }
          .button:hover {
            transition: 0.1s ease;
            box-shadow: -1px -1px 1200px $color1;
          }
        }
      }
    }
  }

  a {
    font-weight: bold;
    color: slategrey;
    padding: 0px 5px 0px 5px;

    &.router-link-exact-active {
      color: $color2;
      border-radius: 10px;
    }
  }
}
</style>

<script>
import NavbarButton from "./navbar/NavbarButton";
import { TweenLite, Back } from "gsap";
export default {
  name: "navbar",
  data: () => {
    return {
      navbarState: 0,
      authstate: false,
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
    ToggleAuthState() {
      this.authstate = !this.authstate;
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
