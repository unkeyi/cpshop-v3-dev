<template>
  <div h-200 w-300 b-1 mt-10 ml-10>666</div>
</template>
<script lang="ts">
import api from "@/api/demoJson";
export default defineComponent({
  name: "classDemo",
  setup() {
    // trucksDemo
    const _data: any = [];
    const getTrucks = () => ({
      // _data = api.trucksDemod
      // console.log('>>>', _data)
    });
    onMounted(() => {
      getTrucks();
    });
  },
});
</script>
<style scoped></style>
