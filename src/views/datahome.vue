<script lang="ts" setup>
onMounted(() => {
})
</script>

<template>
  <div flex="~" class="homedata-head" style="border: 1px solid;">
    <!-- 跳转管理页面 -->
    <!-- 头部图片 -->
    <div flex="~ center" relative style="border: 1px solid;">
      <AdminManager />
      <img src="@/assets/image/backgroud_head.png" />
      <!-- <img src="@/assets/image/title_head.png" absolute bottom-17 /> -->
    </div>
  </div>
  <!-- <div class="homedata-content" flex="~ h-center" justify="around" mt--8>
    <div flex="~ col v-center" gap="4" h="full">
      <TodayCurrentData />
      <FlowStat />
      <TypeDistribution />
    </div>
    <div flex="~ col [0.85]" mt-8>
      <Map />
      <TopWebsite />
    </div>
    <div flex="~ col v-center shrink-0" gap="4" h="full">
      <TopPurchase />
      <OrderTrendStatistics />
      <UserTrendStatistics />
    </div>
  </div> -->
</template>
<style lang="less" scoped>
.homedata-head {
  position: relative;
  // background: url(@/assets/image/background.jpg) no-repeat;
  height: 4vh;
}
.homedata-content {
  position: relative;
  background-color: antiquewhite;
}
</style>