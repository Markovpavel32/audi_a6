<template>
  <div>
    <ul class="audi_extended_normal_font">
      <menu-item v-for="set in complete_sets"
                 @change_active_item="change_active_item"
                 :item_name="set.name"
                 :item_cost="set.cost"
                 :uid="set.uid"
                 :is_active="active_item === set.uid"
                 :key="set.uid">
      </menu-item>
    </ul>
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
      active_item: COMPLETE_SETS[0].uid
    }
  },
  methods: {
    change_active_item (item) {
      this.active_item = item.uid
      this.$emit('change_pic', item)
    }
  }
}
</script>
