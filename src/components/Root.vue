<template>
    <div>
      <main-header class="text-center main_header__container"></main-header>
      <div>
        <left-menu @change_pic="change_pic" class="d-inline-block float-left left_menu_container"></left-menu>
        <car-detail-list class="d-inline-block float-right main_picture">
          <template slot="img">
            <img :src="pic_link" alt="'audi_a6'" class="root-img">
          </template>
        </car-detail-list>
      </div>
    </div>
</template>

<script>
import MainHeader from './MainHeader'
import LeftMenu from './LeftMenu'
import CarDetailList from './CarDetailList'
export default {
  name: 'root',
  components: {CarDetailList, LeftMenu, MainHeader},
  data () {
    return {
      pic_link: '../../static/audi_a6.png'
    }
  },
  methods: {
    change_pic (uid) {
      this.pic_link = `../../static/${uid}.png`
    }
  }
}
</script>
