<script setup lang="ts">
import { ref } from "vue"
</script>

<template>
  <view class="layout-right" id="layoutRight" style="width: 86vw;">
    <view class="layout-right-head pl-2" :span="24" style="background-color:aqua; height:4vh;padding-top: 1vh;">
      <!-- <el-breadcrumb :separator-icon="ArrowRight"> -->
      <el-breadcrumb>
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>promotion management</el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
    </view>
    <view class="layout-right-content" :span="24" style="height: 88vh;background-color:#e5e9f2;overflow-y: auto;">
      <view style="height: 1000px;display: block;">
        <!-- 路由页面 -->
        <router-view />
      </view>
    </view>
  </view>
</template>

<style lang="less" scoped>
.layout-left,
.layout-right {
  .layout-right-head {
    background-color: aqua;
  }
}
</style>
