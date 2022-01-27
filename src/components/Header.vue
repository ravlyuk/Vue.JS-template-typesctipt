<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-content">
        <router-Link class="navbar-logo" to="/">{{ title }}</router-Link>
        <ul class="navbar-list">
          <li class="navbar-item" v-for="link in links" :key="link.alias">
            <router-link class="navbar-link" :to="link.url">{{ link.title }}</router-link>
          </li>
        </ul>
      </div>

    </div>
  </header>

</template>

<script>
import {app, links} from "@/_config";

export default {
  data() {
    return {
      title: app.title,
      links,
    }
  }
}
</script>

<style scoped>

</style>