<template>
  <footer class="footer">
    <div class="container">
      <ul class="navbar-list">
        <li class="navbar-item" v-for="link in links" :key="link.alias">
          <router-Link class="navbar-link" :to="link.url">{{ link.title }}</router-Link>
        </li>
      </ul>
    </div>
  </footer>

</template>

<script>
import {links} from "@/_config";

export default {
  name: "Footer",
  data() {
    return {
      links,
    }
  }

}
</script>

<style scoped>

</style>