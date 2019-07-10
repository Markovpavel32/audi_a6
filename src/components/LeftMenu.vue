<template>
  <div>
    <ul class="audi_extended_normal_font">
      <menu-item v-for="set in complete_sets"
                 @change_active_item="change_active_item"
                 :item_name="set.name"
                 :item_cost="set.cost"
                 :is_active="active_item === set.name"
                 :key="set.name">
      </menu-item>
    </ul>
    <custom-button class="d-inline-block float-left clickable"></custom-button>
  </div>
</template>

<script>
import {COMPLETE_SETS} from '../assets/constants/constants'
import MenuItem from './MenuItem'
import CustomButton from './CustomButton'

export default {
  name: 'left-menu',
  components: {CustomButton, MenuItem},
  data () {
    return {
      complete_sets: COMPLETE_SETS,
      active_item: COMPLETE_SETS[0].name
    }
  },
  methods: {
    change_active_item (name) {
      this.active_item = name
    }
  }
}
</script>
