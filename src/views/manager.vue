<script lang="ts" setup>
import exampleOptions from "@/components/options/exampleOptions.ts";

const xData = $ref(["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]);
const data = $ref([5, 20, 36, 10, 10, 20]);
const _options = $ref(exampleOptions(xData, data));
</script>

<template>
  <div h-200 w-300>
    <EchartsContainer :option="_options" />
  </div>
</template>
