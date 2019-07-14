<template>
  <div>
    <div class="position-absolute">
      <car-detail v-for="car_tool in car_tools" :car_tool="car_tool" :key="car_tool.top_content">
        <template slot="img">
          <img src="../../static/audi_inside.png" alt="audi_inside" class="audi_inside position-relative">
        </template>
      </car-detail>
      <slot name="img"></slot>
    </div>
  </div>
</template>

<script>
import CarDetail from './CarDetail'
import PrettySquare from '../assets/lib/PrettySquareItem'
import {CAR_TOOLS} from '../assets/constants/constants'
export default {
  name: 'car-detail-list',
  components: {PrettySquare, CarDetail},
  data () {
    return {
      is_active_img: false,
      car_tools: CAR_TOOLS
    }
  }
}
</script>
