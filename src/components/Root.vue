<template>
    <div class="root-container">
      <main-header class="main_header__container"></main-header>
      <div>
        <left-menu @change_pic="change_pic" class="left_menu_container"></left-menu>
        <car-detail-list class="main_picture">
          <template slot="img">
            <img :src="pic_link" alt="'audi_a6'" class="root-img">
          </template>
        </car-detail-list>
        <div class="car_cost">{{car_cost}}</div>
        <div>
          <custom-button></custom-button>
        </div>
      </div>
    </div>
</template>

<script>
import MainHeader from './MainHeader'
import LeftMenu from './LeftMenu'
import CarDetailList from './CarDetailList'
import CustomButton from './CustomButton'
import CarCost from './CarCost'
export default {
  name: 'root',
  components: {CarCost, CustomButton, CarDetailList, LeftMenu, MainHeader},
  data () {
    return {
      pic_link: '../../static/audi_a6.png',
      car_cost: 'от 3 160 000 руб.¹'
    }
  },
  methods: {
    change_pic (item) {
      this.pic_link = `../../static/${item.uid}.png`
      this.car_cost = item.item_cost
    }
  }
}
</script>
