<template>
  <div class="getstarted">
    <navbar></navbar>
    <div class="getstarted_auth_card" v-if="!authenticated">
      <div id="login">
        <div id="login_header">
          <h2>Login to your account.</h2>
        </div>
        <LoginForm></LoginForm>
      </div>
      <div id="register">
        <div id="register_header">
          <h2>Dont have an account?</h2>
        </div>
        <RegisterForm></RegisterForm>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import LoginForm from "../components/LoginForm.vue";
import RegisterForm from "../components/RegisterForm.vue";
export default {
  name: "getstarted",
  data() {
    return {};
  },
  components: {
    navbar,
    LoginForm,
    RegisterForm,
  },
  methods: {},

  computed: {
    authenticated() {
      return this.$store.getters["config/GET_authenticated"];
    },
  },
};
</script>

<style lang="scss" scoped>
.getstarted_auth_card {
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  #login {
    height: 50vh;
    text-align: center;
  }

  #register {
    height: 50vh;
    text-align: center;
  }
}
</style>
