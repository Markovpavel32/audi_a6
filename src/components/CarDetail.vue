<template>
  <div class="car_detail_item" :style="{top: car_tool.position.top, left: car_tool.position.left}">
    <div class="d-flex flex-column align-items-center">
      <div @mouseover="is_active_img = true">
        <pretty-square></pretty-square>
      </div>
      <div v-if="is_active_img"
           @mouseleave="is_active_img = false"
           class="audi_inside_container position-absolute" style="bottom: 20px">
        <router-link :to="{name: 'info-page'}">
          <slot name="img"></slot>
        </router-link>
      </div>
      <div class="stick"></div>
      <div class="car_detail_tool">
        <span>{{car_tool.top_content}}</span>
        <br/>
        <span>{{car_tool.bottom_content}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import PrettySquare from '../assets/lib/PrettySquareItem'
export default {
  name: 'car-detail',
  components: {PrettySquare},
  props: {
    car_tool: {
      required: false,
      type: Object
    }
  },
  data () {
    return {
      is_active_img: false
    }
  }
}
</script>
