<template>
  <v-app-bar
    color="primary"
    prominent
  >
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>NAS Notes</v-toolbar-title>

    <v-spacer></v-spacer>

    <template v-if="$vuetify.display.mdAndUp">
      <v-btn icon="mdi-magnify" variant="text"></v-btn>

      <v-btn icon="mdi-filter" variant="text"></v-btn>
    </template>

    <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    :location="$vuetify.display.mobile ? 'bottom' : undefined"
    rail
  >
    <v-list>
      <router-link v-for="item in menuItems" :to="item.routeName">
        <v-list-item :prepend-icon="item.icon" :title="item.title" :value="item.title" />
      </router-link>
    </v-list>
  </v-navigation-drawer>

  <v-main style="height: 500px;">
    <router-view/>
  </v-main>
</template>

<script>
export default {
  watch: {
    group() {
      this.drawer = false
    },
  },
  data() {
    return {
      drawer: true,
      menuItems: [
        {
          title: "Notes",
          icon: "mdi-note-multiple",
          routeName: "notes"
        },
        {
          title: "To DO",
          icon: "mdi-list-status",
          routeName: "todo"
        }
      ],
      group: null
    }
  },
}
</script>
