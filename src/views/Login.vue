<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Email"
                  name="login"
                  prepend-icon="mdi-account"
                  type="text"
                  v-model="user.email"
                />

                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  v-model="user.password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn @click.prevent="login" color="primary">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
//import Auth from "@/plugins/firebase/auth";
export default {
  name: "login",
  data() {
    return {
      user: {
        email: "srazzano15@gmail.com",
        password: "password"
      }
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.user);
    }
  }
};
</script>
