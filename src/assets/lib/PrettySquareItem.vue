<template>
  <div class="pretty_square">
    <div class="pretty_square_item pretty_square_item_left"></div>
    <div class="pretty_circle"></div>
    <div class="pretty_square_item pretty_square_item_right"></div>
  </div>
</template>

<script>
export default {
  name: 'pretty-square'
}
</script>
<style>
  .pretty_square {
    display: flex;
    width: 48px;
    height: 48px;
    flex-direction: column;
    justify-content: space-between;
  }

  .pretty_circle {
    align-self: center;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
  }

  .pretty_square_item {
    width: 32px;
    height: 18px;
    border: 1px solid white;
  }

  .pretty_square_item_left {
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-left-radius: 8px;
  }

  .pretty_square_item_right {
    align-self: flex-end;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-right-radius: 8px;
  }
</style>
