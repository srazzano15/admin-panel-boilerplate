<template>
  <v-card>
      <v-list>
        <v-list-item>Steve Razzano</v-list-item>
      </v-list>
      <v-navigation-drawer
        app
        permanent
      >
        <v-list>
          <v-list-item 
            v-for="(item, index) in items" 
            :key="index" 
            link
            :to="item.href"
          >

          <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
        <v-list-item link @click.prevent="logout">
          <v-list-item-icon>
              <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-icon>
          
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
        </v-list>
      </v-navigation-drawer>
  </v-card>
</template>

<script>
import Cookies from 'js-cookie'
export default {
    name: "sidebar",
    data() {
        return {
            items: [
              {
                text: 'User Management',
                icon: 'mdi-account-supervisor',
                href: 'users'
              },
              {
                text: 'Forms',
                icon: 'mdi-file-document-edit',
                href: 'forms'
              },
              {
                text: 'Reports',
                icon: 'mdi-chart-bar',
                href: 'reports'
              },
              {
                text: 'Settings',
                icon: 'mdi-settings',
                href: 'settings'
              },
            ]
        }
    },
    methods: {
      logout() {
        localStorage.removeItem('user')
        Cookies.remove('token')
        let user = {}
        this.$store.commit('authorize', user)
        this.$router.push('/login')
      }
    }
}
</script>
