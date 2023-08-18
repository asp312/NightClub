<template>
  <v-app>
    <v-main>
      <router-view/>
      <ModalComponent></ModalComponent>
    </v-main>
  </v-app>
</template>

<script>
import ModalComponent from './components/ModalComponent.vue'

export default {
  name: 'App',
  components: {
    ModalComponent
  },
  data: () => ({
    //
  }),
  mounted () {
    this.$store.dispatch('composition/firstFilterAction')
  }
}
</script>
