<template>
  <ul class="audi_extended_normal_font">
    <menu-item v-for="set in complete_sets"
               @change_active_item="change_active_item"
               :item_name="set.name"
               :item_cost="set.cost"
               :is_active="active_item === set.name"
               :key="set.name">
    </menu-item>
  </ul>
</template>

<script>
import {COMPLETE_SETS} from '../assets/constants/constants'
import MenuItem from './MenuItem'

export default {
  name: 'left-menu',
  components: {MenuItem},
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
