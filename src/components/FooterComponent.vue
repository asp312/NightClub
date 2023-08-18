<template>
  <div class="footer black white--text d-flex align-center">
    <div class="mx-6">
      <span class="mr-3">Общее кол-во гостей: <strong class="gold--text">{{ all }}</strong></span>
      <span class="mr-3">На танцполе: <strong class="gold--text">{{ dance.length }}</strong></span>
      <span class="mr-3">В баре: <strong class="gold--text">{{ bar.length }}</strong></span>
      <span class="mr-3">Electro: <strong class="gold--text">{{ electro }}</strong></span>
      <span class="mr-3">Rnb: <strong class="gold--text">{{ rnb }}</strong></span>
      <span class="mr-3">pop: <strong class="gold--text">{{ pop }}</strong></span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FooterComponent',
  computed: {
    ...mapGetters('composition', {
      rnb: 'getRnbCount',
      electro: 'getElectroCount',
      pop: 'getPopCount',
      dance: 'getDancePeople',
      bar: 'getBarPeoples',
      all: 'getAllPeopleLength'
    })
  }
}
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 65px;
  width: 100%;
}
</style>
