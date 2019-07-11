<template>
  <div>
    <div class="text-center">
      <slot name="header-text"></slot>
    </div>
    <div v-if="!img" class="stick"></div>
    <div class="text-center">
      <slot name="footer-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'car-detail',
  props: {
    img: {
      required: false,
      default: false
    }
  }
}
</script>
