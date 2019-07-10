<template>
  <ul class="audi_extended_normal_font">
    <menu-item v-for="set in complete_sets" :item_name="set.set_name" :item_cost="set.cost" :key="set.set_name"></menu-item>
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
      complete_sets: COMPLETE_SETS
    }
  }
}
</script>
