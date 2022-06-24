<template>
  <v-app>
    <v-main>
      <v-treeview></v-treeview>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
