<template>
  <div class="man-wrapper">
    <div class="man-head" :class="{'hip-hop-dance-head': type === 'rnb' && !checkRoom, 'pop-head-dance': type === 'pop' && !checkRoom, 'blue-type': checkRoom, 'blue': checkRoom}"></div>
    <div class="man-body" :class="{'hip-hop-dance-body': type === 'rnb' && !checkRoom, 'pop-body-dance': type === 'pop' && !checkRoom, 'blue-type': checkRoom}"></div>
    <div class="man-left-arm">
      <div class="man-left-arm-higher" :class="{'blue-type': checkRoom}"></div>
      <div class="man-left-arm-lower" :class="{'hip-hop-dance-left': type === 'rnb' && !checkRoom, 'electro-dande': type === 'electro' && !checkRoom, 'electro-dande-left-lower-arm': type === 'electro' && !checkRoom, 'pop-dande-left-lower-arm': type === 'pop' && !checkRoom, 'blue-type': checkRoom, 'bar-left-lower-arm': checkRoom}"></div>
      <div class="vodka" v-if="checkRoom"></div>
    </div>
    <div class="man-right-arm">
      <div class="man-right-arm-higher" :class="{'blue-type': checkRoom}"></div>
      <div class="man-right-arm-lower" :class="{'hip-hop-dance-right': type === 'rnb' && !checkRoom, 'electro-dande': type === 'electro' && !checkRoom, 'pop-dande-left-lower-arm': type === 'pop' && !checkRoom, 'blue-type': checkRoom}"></div>
    </div>
    <div class="man-left-leg">
      <div class="man-left-leg-higher" :class="{'hip-hop-leg-left-higher': type === 'rnb' && !checkRoom, 'blue-type': checkRoom}"></div>
      <div class="man-left-leg-lower" :class="{'hip-hop-leg-left-lower': type === 'rnb' && !checkRoom, 'blue-type': checkRoom}"></div>
    </div>
    <div class="man-right-leg">
      <div class="man-right-leg-higher" :class="{'hip-hop-leg-right-higher': type === 'rnb' && !checkRoom, 'blue-type': checkRoom}"></div>
      <div class="man-right-leg-lower" :class="{'hip-hop-leg-right-lower': type === 'rnb' && !checkRoom, 'electro-dande-leg': type === 'electro' && !checkRoom, 'pop-dande-leg': type === 'pop' && !checkRoom, 'blue-type': checkRoom}"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Man-component',
  computed: {
    ...mapGetters('composition', { type: 'getCurrentCmpositionType' }),
    checkRoom () {
      return this.$route.name === 'bar'
    }
  }
}
</script>

<style scoped>
.man-wrapper {
  position: relative;
}
.man-head {
  position: absolute;
  top: -24px;
  left: -11px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid black;
  box-shadow: 0.3px 0.3px 7px 5px white;
}
.man-body {
  position: absolute;
  width: 1px;
  height: 33px;
  background-color: black;
  border: 2px solid black;
}
.man-left-arm {
  position: absolute;
  transform: rotate(40deg);
  left: -8px;
  top: 2px;
  /* box-shadow: 0.3px 0.3px 10px 3px white; */
}
.man-left-arm-higher {
  width: 1px;
  height: 22px;
  border: 2px solid black;
}
.man-left-arm-lower {
  position: absolute;
  top: 21px;
  left: 4px;
  width: 1px;
  height: 14px;
  border: 2px solid black;
  transform-origin: left top;
}
.man-right-arm {
  position: absolute;
  transform: rotate(-40deg);
  left: 11px;
  top: -1px;
}
.man-right-arm-higher {
  width: 1px;
  height: 22px;
  border: 2px solid black;
}
.man-right-arm-lower {
  width: 1px;
  height: 14px;
  border: 2px solid black;
  transform-origin: left top;
}
.man-left-leg {
  position: absolute;
  transform: rotate(35deg);
  top: 29px;
  left: -10px;
  /* box-shadow: 0.3px 0.3px 10px 3px white; */
}
.man-left-leg-higher {
  width: 1px;
  height: 20px;
  border: 2px solid black;
}
.man-left-leg-lower {
  width: 1px;
  height: 20px;
  border: 2px solid black;
  transform-origin: left top;
}
.hip-hop-leg-left-higher{
  transform: rotate(38deg);
  height: 22px !important;
  position: absolute;
  top: -6px;
  left: 4px;
}
.hip-hop-leg-left-lower{
  transform: rotate(-73deg);
  position: absolute;
  top: 15px;
  left: -2.5px;
}
.man-right-leg {
  position: absolute;
  transform: rotate(-35deg);
  top: 29px;
  left: 10px;
  /* box-shadow: 0.3px 0.3px 10px 3px white; */
}
.man-right-leg-higher {
  width: 1px;
  height: 20px;
  border: 2px solid black;
}
.man-right-leg-lower {
  width: 1px;
  height: 20px;
  border: 2px solid black;
  transform-origin: left top;
}
.hip-hop-leg-right-higher{
  transform: rotate(-38deg);
  height: 22px !important;
  position: absolute;
  top: -5px;
  left: -7px;
}
.hip-hop-leg-right-lower{
  transform: rotate(73deg);
  position: absolute;
  top: 13px;
  left: 2px;
}
.hip-hop-dance-right {
  transform: rotate(-90deg);
}
.hip-hop-dance-left {
  transform: rotate(90deg);
}
.hip-hop-dance-head {
  animation: hipHopHead 0.6s infinite;
}
.hip-hop-dance-body {
  animation: hipHopBody 0.6s infinite;
}
.electro-dande {
  animation: Electro 1s infinite;
}
.electro-dande-leg {
  animation: ElectroLeg 1s infinite;
}
.electro-dande-left-lower-arm {
  top: 22px;
  left: 0px;
}
.pop-head-dance {
  animation: popHead 1.3s infinite;
}
.pop-body-dance {
  animation: popBody 1.3s infinite;
}
.pop-dande-left-lower-arm {
  top: 22px;
  left: 0px;
  animation: popLeftArm 1.3s infinite;
}
.pop-dande-right-lower-arm {
  top: 22px;
  left: 0px;
  animation: popLeftArm 1.3s infinite;
}
.pop-dande-leg {
  animation: PopLeg 1.8s infinite;
}
.blue-type {
  border: 2px solid #2196F3;
}
.vodka {
  position: absolute;
  top: 3px;
  left: -25px;
  width: 10px;
  height: 15px;
  border-radius: 0px 0px 20px 20px;
  background-color: aquamarine;
  animation: vodkaTrack 2.5s infinite;
}
.bar-left-lower-arm {
  transform: rotate(105deg);
  height: 22px;
  animation: vodkaArm 2.5s infinite;
}
@keyframes vodkaTrack {
  0% {
    top: 3px;
    left: -25px;
  }
  50% {
    transform: rotate(-45deg);
    left: -10px;
    top: 37px;
  }
  100% {
    top: 3px;
    left: -25px;
  }
}
@keyframes vodkaArm {
  0% {
    transform: rotate(105deg);
  }
  50% {
    transform: rotate(0deg);
    left: 0px;
    top: 21px;
  }
  100% {
    transform: rotate(105deg);
  }
}
@keyframes Electro {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes PopLeg {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes ElectroLeg {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-90deg);
  }
}
@keyframes hipHopHead {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}
@keyframes popBody {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}
@keyframes popHead {
  0% {
    transform: scale(1);
  }
  25% {
    left: -10px
  }
  50% {
    left: -12px
  }
  100% {
    left: -11px;
    transform: scale(1.1);
  }
}
@keyframes popLeftArm {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
    left: 4px;
    top: 20px;
  }
}
@keyframes popRightArm {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-90deg);
  }
}
@keyframes hipHopBody {
  0% {
    transform: scale(1);
    width: 1px;
  }
  100% {
    transform: scale(1.1);
    width: 5px;
    left: -1px;
  }
}
</style>
