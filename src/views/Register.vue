<template>
  <div class="flex justify-content-space-around">
    <div class="auth-container text-align-center">
      <!-- Title -->
      <div class="mb-4 text-align-center">
        <div class="flex align-items-center justify-content-center mt-3 mb-6">
          <div class="ic-brand ic-brand-size"></div>
        </div>
        <div class="mt-2 mb-6 font-bold font-large font-primary">Sign up</div>
      </div>
      <!-- Form -->
      <div class="form">
        <div class="mt-3 auth-form-control">
          <div class="mr-2 ic-auth-size ic-mail"></div>
          <input v-model="email" placeholder="Email"/>
        </div>
        <div class="mt-3 auth-form-control">
          <div class="mr-2 ic-auth-size ic-user"></div>
          <input v-model="firstName" placeholder="First name"/>
        </div>
        <div class="mt-3 auth-form-control">
          <div class="mr-2 ic-auth-size ic-user"></div>
          <input v-model="lastName" placeholder="Last name"/>
        </div>
        <div class="mt-3 auth-form-control">
          <div class="mr-2 ic-auth-size ic-lock"></div>
          <input v-model="password" type="password" placeholder="Password"/>
        </div>
        <div class="mt-3 auth-form-control">
          <div class="mr-2 ic-auth-size ic-lock"></div>
          <input v-model="password2" type="password" placeholder="Enter your password again"/>
        </div>
      </div>
      <!-- Action -->
      <div class="actions md-layout md-alignment-center-space-between">
        <button @click="register" class="mt-3 mindular-button-primary width-percentage-100">Sign up</button>
      </div>
      <div class="mt-6 mb-6">
        <router-link to="login">
          <span class="font-small font-bold font-primary font-primary--hover">Already have an account?</span>
        </router-link>
      </div>
       <!-- Social -->
      <div class="mt-3 flex align-items-center justify-content-center">
        <div class="mr-3">
          <span class="font-bold font-small font-primary font-primary--hover">Quick login with</span>
        </div>
        <div class="ml-1 mr-1 ic-social-size ic-facebook"></div>
        <div class="ml-1 mr-1 ic-social-size ic-google"></div>
        <div class="ml-1 mr-1 ic-social-size ic-twitter"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { REGISTER } from "@/store/modules/actions.type"

export default {
  name: "Register",
  data() {
    return {
      loading: false,
      password: "",
      password2: "",
      firstName: "",
      lastName: "",
      email: "",
      showError: false
    };
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  },
  methods: {
    login() {
      this.$router.push({ name: "Login"})
    },
    register() {
      this.loading = true;
      const username = this.email;
      const password = this.password;
      const password2 = this.password2;
      const first_name = this.firstName;
      const last_name = this.lastName;
      const email = this.email;

      if (password !== password2) {
        alert('password are not the same')
      }
      this.$store
        .dispatch(REGISTER, { username, password, password2, first_name, last_name, email})
        .then(() => {
          const extensionUri = new URLSearchParams(window.location.search).get('extensionUri');
          const routerConfig = extensionUri ? { name: "Login", params: { extensionUri: extensionUri }} : { name: "Login"};
          this.$router.push({ name: "Login"})
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
