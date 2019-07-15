<template>
  <li @click="change_active_item(uid)" class="left_menu_item text-center clickable" :class="{'active': is_active}">
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
    },
    is_active: {
      required: true,
      type: Boolean
    },
    uid: {
      required: true,
      type: String
    }
  },
  methods: {
    change_active_item (uid) {
      this.$emit('change_active_item', {
        uid,
        item_cost: this.item_cost
      })
    }
  }
}
</script>
