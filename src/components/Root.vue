<template>
    <div>
      <main-header class="text-center main_header__container"></main-header>
      <div>
        <left-menu class="d-inline-block float-left left_menu_container"></left-menu>
        <car-detail-list class="d-inline-block float-right main_picture">
          <template slot="img">
            <img src="../assets/audi_a6.png" alt="'audi_a6'">
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
  components: {CarDetailList, LeftMenu, MainHeader}
}
</script>
