<template>
  <div class="home-title">
    <h1 class="title">Star Wars</h1>
    <p>
      Type Script, Services, Vuex3, Rest API
      <router-link to="/about">and more</router-link>
    </p>
  </div>
  <div v-if="loading">
    <Spinner/>
  </div>
  <div v-else>
    <table>
      <!-- header-->
      <thead>
      <tr>
        <td>name</td>
        <td>gender</td>
        <td>mass</td>
      </tr>
      </thead>
      <!-- body-->
      <tbody>
      <tr v-for="(people, index) in peoples.results" :key="index">
        <td>{{ people.name }}</td>
        <td>{{ people.gender }}</td>
        <td>{{ people.mass }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Spinner from "@/components/UI/Spinner.vue"
import DataService from "@/services/DataService";
import ResponseData from "@/types/ResponseData";
import Peoples from "@/types/Peoples";

export default defineComponent({
  name: "home",
  components: {Spinner},
  data() {
    return {
      loading: true as boolean,
      peoples: {} as Peoples,
    }
  },
  mounted() {
    this.getPeople()
  },
  methods: {
    getPeople() {
      DataService.getAll()
          .then((res: ResponseData) => {
            this.peoples = res.data
            this.loading = false
          })
          .catch((e: Error) => console.log(e))
    },

  }
})
</script>

<style scoped>
.home-title {
  text-align: center;
  margin: 2em 0;
}
</style>