<template>
  <div class="wrapper">
    <Header/>
    <div class="wrapper-content">
      <div class="container">
        <router-view/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { defineComponent } from 'vue'

interface IPerson {
  id: number,
  title: string,
  male: boolean,
}

export default defineComponent({
  components: {Footer, Header},
  data() {
    return {
      wizard: {
        id: 11823,
        title: 'wizard',
        male: true,
      } as IPerson
    }
  },
  computed: {
    getName(): string {
      return this.wizard.title
    }
  }
})
</script>


<style lang="scss">

</style>
