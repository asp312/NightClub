<template>
  <div class="header black d-flex align-center">
    <v-row class="mx-6">
      <v-col cols="12" class="d-flex justify-space-between gold--text">
          <button class="setting-btn px-4 py-3" @click="openSettings">Настройки гостей</button>
          <h1>Night Club</h1>
          <div class="d-flex align-center white--text">
            <div class="prev" @click="nextComposition"></div><strong class="gold--text mx-3">{{ currentComposition }}</strong><div class="next" @click="nextComposition"></div>
          </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header-component',
  methods: {
    nextComposition () {
      this.$store.dispatch('composition/setNewComposition')
    },
    openSettings () {
      this.$store.dispatch('modal/toogleAction', true)
    }
  },
  computed: {
    ...mapGetters('composition', { currentComposition: 'getCurrentCmpositionType' })
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 65px;
  width: 100%;
}
.setting-btn {
  border: 1px solid gold;
}
.setting-btn:hover {
  box-shadow: 0.3px 0.3px 7px 2px rgb(255, 223, 41);
  cursor: pointer;
}
.prev {
  width: 8px;
  height: 8px;
  border-right: 2px solid gold;
  border-bottom: 2px solid gold;
  transform: rotate(135deg);
  cursor: pointer;
}
.next {
  width: 8px;
  height: 8px;
  border-right: 2px solid gold;
  border-bottom: 2px solid gold;
  transform: rotate(-45deg);
  cursor: pointer;
}
</style>
