<template>
  <div id="register_form" class="form">
    <input
      class="form--email"
      id="register_form--email"
      type="text"
      name="email"
      placeholder="Email"
      value=""
    />
    <input
      class="form--password"
      id="register_form--password"
      type="password"
      placeholder="Password"
      name=""
      value=""
    />
    <input
      class="form--password"
      id="register_form--password2"
      type="password"
      placeholder="Password Confirmation"
      name=""
      value=""
    />
    <button
      class="form--submit"
      id="register_form--submit"
      type="button"
      name="button"
    >
      Submit
    </button>
  </div>
</template>

<script>
export default {
  name: "navbar",
  components: {},
};
</script>
<style lang="scss"></style>
