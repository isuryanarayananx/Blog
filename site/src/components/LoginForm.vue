<template>
  <div class="form">
    <input
      v-model="email"
      class="form--email"
      type="text"
      placeholder="Email"
    />
    <div v-if="ERRORS" class="errors">
      <div v-if="ERRORS.email" class="email-errors">
        {{ ERRORS.email[0] }}
      </div>
    </div>
    <input
      v-model="password"
      class="form--password"
      type="password"
      placeholder="Password"
    />
    <div v-if="ERRORS" class="errors">
      <div v-if="ERRORS.password" class="password-errors">
        {{ ERRORS.password[0] }}
      </div>
    </div>
    <button @click="login()" class="form--submit" type="button">
      Submit
    </button>
    <div v-if="ERRORS" class="errors">
      <div v-if="ERRORS.non_field_errors" class="password-errors">
        {{ ERRORS.non_field_errors[0] }}
      </div>
    </div>
  </div>
</template>
<script>
// import { mapGetters } from "vuex";
export default {
  name: "navbar",
  components: {},
  data() {
    return {
      email: undefined,
      password: undefined,
      ERRORS: undefined,
    };
  },
  // computed: { ...mapGetters(["config/GET_authenticated"]) },
  methods: {
    login: function() {
      this.$store
        .dispatch("auth/GET_token", {
          email: this.email,
          password: this.password,
        })
        .then((xhr) => {
          if (xhr.status == 400) {
            this.ERRORS = JSON.parse(xhr.response);
          }
        });
    },
  },
  mounted: function() {},
  computed: {},
};
</script>
<style lang="scss">
.errors {
  text-align: left;
  padding: 5px;
  font-size: 10px;
  color: red;
}
</style>
