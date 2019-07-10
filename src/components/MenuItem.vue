<template>
  <li class="left_menu_item text-center">
    <div class="left_menu_item_content">
      <span>{{item_name}}</span>
      <br/>
      <span class="left_menu_item_content_cost">
          {{item_cost}}
        </span>
    </div>
  </li>
</template>

<script>
export default {
  name: 'menu-item',
  props: {
    item_name: {
      required: true,
      type: String
    },
    item_cost: {
      required: true,
      type: String
    }
  }
}
</script>
