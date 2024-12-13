<script lang='ts' setup>
import router from '../../router';

const gogo = () => {
  router.push('/manager')
}
</script>

<template>
  <div style="border: 1px solid;" class="bg" cursor-pointer flex="~ v-center" gap="1" z-1>
    <img src="@/assets/image/backstage_manager_icon.png" w-6 h-5 alt="" />
    <router-link to="/menus/adminA">后台</router-link>
    <!-- <span text="5" transparent font="bold" bg="gradient-to-b clip-text"
      class="from-#1af77 to-#1558b3" @click="gogo()"></span> -->
      
  </div>
</template>

<style lang='less' scoped>
.bg {}
</style>