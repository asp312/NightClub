<template>
  <div style="height: 100%;">
    <HeaderComponent></HeaderComponent>
    <div class="view-wrapper">
      <router-view></router-view>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'Club-view',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style scoped>
.view-wrapper {
  padding-top: 65px;
  padding-bottom: 65px;
  height: 100%;
}
</style>
