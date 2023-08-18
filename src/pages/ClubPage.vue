<template>
  <div style="height: 100%" class="dance-place">
    <PaginationBtn :side="'left'"></PaginationBtn>
    <PaginationBtn :side="'right'"></PaginationBtn>
    <div class="dance-floor d-flex justify-center align-end">
      <ManComponent v-for="(item, index) of dancePeoples" :key="index" class="mr-12"></ManComponent>
    </div>
  </div>
</template>

<script>
import PaginationBtn from '@/components/PaginationBtn.vue'
import ManComponent from '@/components/ManComponent.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Club-page',
  components: {
    PaginationBtn,
    ManComponent
  },
  computed: {
    ...mapGetters('composition', { dancePeoples: 'getDancePeople' })
  }
}
</script>

<style scoped>
.dance-place {
  position: relative;
  background-image: url('../assets/dance.jpeg');
  background-size: 100% 100%;
  -moz-background-size: 100%;
  -webkit-background-size: 100%;
  -o-background-size: 100%;
}
.dance-floor {
  width: 100%;
  height: 100%;
  padding-bottom: 75px;
}
</style>
