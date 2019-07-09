<template>
    <div>
      <main-header class="text-center main_header__container"></main-header>
      <div class="float-right">
        <img src="../assets/audi_a6.png" alt="'audi_a6'" class="main_picture">
      </div>
    </div>
</template>

<script>
import MainHeader from './MainHeader'
export default {
  name: 'root',
  components: {MainHeader}
}
</script>
