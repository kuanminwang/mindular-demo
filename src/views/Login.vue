<template>
  <div class="flex justify-content-space-around">
    <div class="auth-container text-align-center">
      <!-- Title -->
      <div class="mb-4">
        <div class="flex align-items-center justify-content-center mt-3 mb-6">
          <div class="ic-brand ic-brand-size"></div>
        </div>
        <div class="mt-2 mb-6 font-bold font-large font-primary">Log in</div>
      </div>
      <!-- Form -->
      <div class="form">
        <div class="auth-form-control">
          <div class="mr-2 ic-auth-size ic-mail"></div>
          <input v-model="username" placeholder="Email"/>
        </div>
        <div class="mt-3 auth-form-control">
          <div class="mr-2 ic-auth-size ic-lock"></div>
          <input
            @keyup.enter="auth"
            placeholder="Password"
            v-model="password"
            type="password"/>
        </div>
      </div>
      <!-- Action -->
      <div class="actions md-layout md-alignment-center-space-between">
        <button @click="auth" class="mt-3 mindular-button-primary width-percentage-100">Sign in</button>
        <button @click="register" class="mt-3 mindular-stroke-button-primary width-percentage-100">Sign up</button>
      </div>
      <a href="#" class="block mt-6 mb-6 font-xsmall font-bold font-primary font-primary--hover">Forgot credentials</a>
      <!-- Social -->
      <div class="flex align-items-center justify-content-center">
        <div class="mr-3">
          <span class="font-bold font-small font-primary font-primary--hover">Quick login with</span>
        </div>
        <div class="ml-1 mr-1 ic-social-size ic-facebook cursor-pointer"></div>
        <div class="ml-1 mr-1 ic-social-size ic-google cursor-pointer"></div>
        <div class="ml-1 mr-1 ic-social-size ic-twitter cursor-pointer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { LOGIN } from "@/store/modules/actions.type"
import { redirectToExtension, saveToken } from '../services/authService'

export default {
  name: "Login",
  data() {
    return {
      loading: false,
      username: "",
      password: "",
      showError: false
    };
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  },
  methods: {
    register() {
      const extensionUri = new URLSearchParams(window.location.search).get('extensionUri');
      const routerConfig = extensionUri ? { name: "Register", params: { extensionUri: extensionUri }} : { name: "Register"};
      this.$router.push(routerConfig)
    },
    auth() {
      // your code to login user
      // this is only for example of loading
      this.loading = true;
      const username = this.username;
      const password = this.password;
      this.$store
        .dispatch(LOGIN, { username, password})
        .then((res) => {
          redirectToExtension(res.token);
          this.$router.push({ name: "Home" })
        })
        .catch(() => {
          this.loading = false
          this.showError = true
        })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
