<template>
  <div class="position-absolute car_detail_container" :style="{top: car_tool.position.top, left: car_tool.position.left}">
    <div class="d-flex flex-column align-items-center">
      <div v-if="!car_tool.opposite" @mouseover="is_active_img = true" style="margin-bottom: 20px">
        <pretty-square></pretty-square>
      </div>
      <div v-if="car_tool.opposite" class="car_detail_tool" style="margin-bottom: 30px">
        <span>{{car_tool.top_content}}</span>
        <br/>
        <span>{{car_tool.bottom_content}}</span>
      </div>
      <div v-if="is_active_img && car_tool.img"
           @mouseleave="is_active_img = false"
           class="audi_inside_container position-absolute" style="bottom: 70px">
        <router-link :to="{name: 'info-page'}">
          <slot name="img"></slot>
        </router-link>
      </div>
      <div class="stick"></div>
      <div v-if="car_tool.opposite" @mouseover="is_active_img = true" style="margin-top: 20px">
        <pretty-square></pretty-square>
      </div>
      <div v-if="!car_tool.opposite" class="car_detail_tool" style="margin-top: 30px">
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
