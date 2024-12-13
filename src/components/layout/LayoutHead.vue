<script setup lang="ts">
import { ref } from "vue"
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const gotoPage = (url: string) => {
  router.push({ path: url });
}
</script>

<template>
  <el-row :gutter="0" style="height: 7vh;">
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
      <div class="h-0.98/1 bg-green">13</div>
    </el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="18">
      <div class="h-0.98/1 bg-purple">
        <el-button @click="gotoPage('/datahome')">地图</el-button>
      </div>
    </el-col>
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
      <div class="h-0.98/1 bg-green">666</div>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped></style>
