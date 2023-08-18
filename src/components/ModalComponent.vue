<template>
  <v-dialog v-model="dialogFlag" persistent max-width="600">
      <v-card class="black white--text settings-wrapper">
        <v-card-title>
          Настройки гостей
        </v-card-title>
        <v-card-text>
          <div class="white--text">
            Текущее количество гостей: <strong class="gold--text ml-1">{{ peopleCount }}</strong>
          </div>
          <h3 class="white--text mt-3">Манипуляции с гостями</h3>
          <div class="mt-5">
            <v-row class="white--text">
              <v-col cols="6" class="cborder py-0">
                <input type="number" class="default-input pr-2" placeholder="Количество гостей" v-model="newPeopleCount"/>
                <div class="d-flex align-center mt-2">
                  <label class="pb-1" style="position: relative;">
                    <input type="checkbox" name="rnb" class="mr-1 custom-checkbox" v-model="rnb"/>
                    <div class="checkbox-pic d-flex align-center justify-center"><div class="check__check"></div></div>
                    RnB
                  </label>
                </div>
                <div class="d-flex align-center">
                  <label class="pb-1" style="position: relative;">
                    <input type="checkbox" name="rnb" class="mr-1 custom-checkbox" v-model="electro"/>
                    <div class="checkbox-pic d-flex align-center justify-center"><div class="check__check"></div></div>
                    Electrohouse
                  </label>
                </div>
                <div class="d-flex align-center">
                  <label class="pb-1" style="position: relative;">
                    <input type="checkbox" name="rnb" class="mr-1 custom-checkbox" v-model="pop"/>
                    <div class="checkbox-pic d-flex align-center justify-center"><div class="check__check"></div></div>
                    Pop
                  </label>
                </div>
              </v-col>
              <v-col cols="6" class="py-0 d-flex align-center justify-center">
                <div>
                  <div class="d-flex justify-center">
                    <button class="mr-3 px-4 py-3 cbtn-add" @click="setPeople" :disabled="(rnb === false) && (electro === false) && (pop === false)">Добавить {{ guets }}</button>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-card-text>
        <img src="../assets/close.svg" class="close-pic" @click="closeModal"/>
      </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Modal-component',
  data () {
    return {
      newPeopleCount: 1,
      rnb: false,
      electro: false,
      pop: false
    }
  },
  methods: {
    closeModal () {
      this.$store.dispatch('modal/toogleAction', false)
    },
    setPeople () {
      this.$store.dispatch('composition/addPeopleAction', { count: this.newPeopleCount, rnb: this.rnb, electro: this.electro, pop: this.pop })
      this.newPeopleCount = 1
      this.rnb = false
      this.electro = false
      this.pop = false
    }
  },
  computed: {
    ...mapGetters('modal', { dialogFlag: 'getModalFlag' }),
    ...mapGetters('composition', { peopleCount: 'getAllPeopleLength' }),
    guets () {
      return this.newPeopleCount > 1 ? 'гостей' : 'гостя'
    }
  }
}
</script>

<style scoped>
.settings-wrapper {
  position: relative;
}
.close-pic {
  position: absolute;
  top: 15px;
  right: 5px;
  cursor: pointer;
}
.default-input {
  display: block;
  border-bottom: 1px solid white;
  color: #ffd700;
  outline: none;
}
.default-input::placeholder {
  color: white;
}
.custom-checkbox {
  position: absolute;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.checkbox-pic {
  width: 16px;
  height: 16px;
  position: absolute;
  right: -23px;
  top: 3px;
  border: 1.5px solid #ffd700;
  border-radius: 2px;
}
.check__check {
  width: 8px;
  height: 8px;
  background-color: black;
}
.custom-checkbox:checked ~ .checkbox-pic .check__check {
  background-color: #ffd700;
}
.cborder {
  border-right: 1px solid #ffd700;
}
.cbtn-add {
  border: 1px solid green;
  color: #24d824;
}
.cbtn-remove {
  border: 1px solid red;
  color: #ff2222;
}
.cbtn-add:hover {
  box-shadow: 0.3px 0.3px 7px 2px #24d824;
  cursor: pointer;
}
.cbtn-remove:hover {
  box-shadow: 0.3px 0.3px 7px 2px #ff2222;
  cursor: pointer;
}
</style>
