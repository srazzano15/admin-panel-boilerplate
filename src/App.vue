<template>
  <v-app>
    <sidebar v-if="$store.getters.authenticated"></sidebar>
    <router-view></router-view>
  </v-app>
</template>

<script>
import sidebar from "@/components/SideBar.vue"
export default {
  name: "App",
  components: {
    sidebar
  },
  computed: {

  },
  created() {
    let user = localStorage.getItem('user')
    return user ? this.$store.commit('authorize', JSON.parse(user)) : ''
  }
};
</script>
