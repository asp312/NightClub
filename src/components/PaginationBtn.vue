<template>
  <div
    class="pagination-btn d-flex align-center justify-center"
    :class="{'pagination-btn-position-right': checkRight(), 'pagination-btn-position-left': !checkRight()}"
    @click="nextPage">
    <div :class="{'arrowright': checkRight(), 'arrowleft': !checkRight()}"></div>
  </div>
</template>

<script>
export default {
  name: 'Pagination-btn',
  props: ['side'],
  methods: {
    checkRight () {
      return this.side === 'right'
    },
    nextPage () {
      this.$route.name === 'bar' ? this.$router.push({ name: 'club' }) : this.$router.push({ name: 'bar' })
    }
  }
}
</script>

<style scoped>
.pagination-btn {
  height: 100%;
  width: 65px;
  background-color: rgba(0, 0, 0, 0.369);
  transition-duration: 0.3s;
  opacity: 0.4;
}
.pagination-btn:hover {
  opacity: 1;
  transition-duration: 0.3s;
}
.pagination-btn-position-right {
  position: fixed;
  right: 0;
}
.pagination-btn-position-left {
  position: fixed;
  left: 0;
}
.arrowright {
  width: 35px;
  height: 35px;
  margin-right: 15px;
  margin-bottom: 30px;
  border-right: 2px solid gold;
  border-bottom: 2px solid gold;
  transform: rotate(-45deg);
}
.arrowleft {
  width: 35px;
  height: 35px;
  margin-left: 15px;
  margin-bottom: 30px;
  border-left: 2px solid gold;
  border-top: 2px solid gold;
  transform: rotate(-45deg);
}
</style>
