<template>
    <div>
      <main-header class="text-center main_header__container"></main-header>
      <div>
        <left-menu class="d-inline-block float-left left_menu_container"></left-menu>
        <div class="d-inline-block float-right main_picture">
          <img src="../assets/audi_a6.png" alt="'audi_a6'">
        </div>
      </div>
    </div>
</template>

<script>
import MainHeader from './MainHeader'
import LeftMenu from './LeftMenu'
export default {
  name: 'root',
  components: {LeftMenu, MainHeader}
}
</script>
