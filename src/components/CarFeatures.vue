<template>
  <div class="car_feture_container">
    <div v-for="car_feature_link in car_features" class="car_feature" :key="car_feature_link">
      <img :src="car_feature_link" class="car_feature_img">
    </div>
  </div>
</template>

<script>
import {CAR_FEATURES} from '../assets/constants/constants'

export default {
  name: 'car-features',
  data () {
    return {
      car_features: CAR_FEATURES
    }
  }
}
</script>
