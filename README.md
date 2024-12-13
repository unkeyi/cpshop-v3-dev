# VUE3+Typescript+vite+pinia+axios
```
vite配置-文档：https://vitejs.dev/config/
```

## tips

```
npm run dev
npm run build
```
````javascript
// 使用Provide/Inject来代替Vue 2中的this.$parent和this.$children

<script setup>
import { provide, inject } from 'vue';
provide('message', 'Hello');  <=> this.$emit('message', 'Hello')')
const message = inject('message');
</script>
````


## 一些比较有可能安装失败的依赖，可进行手动安装👇👇👇
```
unocss：pnpm i @unocss/reset -S
lodash: 
```


### Compile and Hot-Reload for Development


### Type-Check, Compile and Minify for Production


