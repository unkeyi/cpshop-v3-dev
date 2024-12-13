<script setup lang="ts">
import { ref } from "vue"
import { useRoute, useRouter } from 'vue-router';

const isCollapse = ref(false)

const router = useRouter();
const route = useRoute();
console.log(router.options.routes);

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleSelect = (key: string, keyPath: string[]) => {
  // 可以在这里执行路由跳转或其他逻辑
  if (key === 'isCollapse') {
    isCollapse.value = !isCollapse.value
    document.getElementById('layoutRight')!.style.width = isCollapse.value ? '97vw' : '86vw';
    return
  }
  router.push({ path: key });
}
</script>

<template>
  <view class="layout-left">
    <el-menu style="height: 100%;overflow-y: auto;" default-active="2" class="el-menu-vertical-demo"
      :collapse="isCollapse" @open="handleOpen" @close="handleClose" @select="handleSelect">
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon>
          <document />
        </el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting />
        </el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
      <el-menu-item index="isCollapse" style="position: absolute;bottom: 2%;width: 100%;background-color: gainsboro;">
        <el-icon>
          <setting />
        </el-icon>
        <template #title>折叠</template>
      </el-menu-item>
    </el-menu>
  </view>
</template>

<style lang="less" scoped>
.el-menu--collapse {
  width: 3vw;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 14vw;
}

.layout-left,
.layout-right {
  .layout-right-head {
    background-color: aqua;
  }
}
</style>
