<template>
<div class="wrapper">
  <div class="navigation">
      <AppNavbarLeft/>
      <AppSidebar/>
  </div>
  <div class="content">
      <router-view/>
  </div>
</div>
</template>

<script lang="ts">
import { ref } from 'vue'
import AppNavbarLeft from './components/AppNavbarLeft/AppNavbarLeft.vue'
import AppSidebar from './components/AppSidebar/AppSidebar.vue'

export default {
  name: 'Layout',
  components: {
    AppNavbarLeft,
    AppSidebar
  }
}

</script>
<style lang="scss" scoped>

  .wrapper{
    display: flex;
    height: 100vh;
    width: 100%;
  }
  .navigation{
    display: flex;
    height: 100%;
  }

  .content{
    flex: 1;
    min-width: 0;
    z-index: 0;
    overflow-x: auto;
    overflow-y: hidden;
    will-change: margin-left;
    background-color: #FFFFFF;
    transition: margin-left .3s cubic-bezier(.2,0,0,1) 0s;
  }
</style>
