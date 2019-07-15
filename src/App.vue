<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Root from './components/Root'

export default {
  name: 'App',
  components: {Root}
}
</script>
