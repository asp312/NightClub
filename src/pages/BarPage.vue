<template>
  <div style="height: 100%" class="bar-place">
    <PaginationBtn :side="'left'"></PaginationBtn>
    <PaginationBtn :side="'right'"></PaginationBtn>
    <div class="bar-zone d-flex justify-center align-center">
      <ManComponent v-for="(item, index) of barPeople" :key="index" class="mr-12"></ManComponent>
    </div>
  </div>
</template>

<script>
import PaginationBtn from '@/components/PaginationBtn.vue'
import ManComponent from '@/components/ManComponent.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Bar-page',
  components: {
    PaginationBtn,
    ManComponent
  },
  computed: {
    ...mapGetters('composition', { barPeople: 'getBarPeoples' })
  }
}
</script>

<style scoped>
.bar-place {
  background-image: url('../assets/bar.jpeg');
  -moz-background-size: 100%;
  -webkit-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
}
.bar-zone {
  width: 100%;
  height: 100%;
  padding-top: 100px;
}
</style>
