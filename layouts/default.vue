<template>
  <v-app>
    <v-app-bar id="navbar" :elevation="2" color="secondary">
      <v-img id="navbar-logo" src="@/assets/images/logo.png"></v-img>
    </v-app-bar>
    <slot />
  </v-app>
</template>

<script setup></script>

<style lang="scss" scoped>
#navbar {
  position: relative;
}
#navbar-logo {
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
}
</style>
