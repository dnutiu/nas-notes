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
    expand-on-hover
    rail
  >
    <v-list>
      <v-list-item prepend-icon="mdi-note-multiple" title="Notes" value="notes"></v-list-item>
      <v-list-item prepend-icon="mdi-list-status" title="To Do" value="todo"></v-list-item>
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
      drawer: false,
      group: null
    }
  },
}
</script>
