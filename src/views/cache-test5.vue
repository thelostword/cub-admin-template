<template>
  <div>
    <h1>带参数缓存测试</h1>
    <el-input v-model="value" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const value = ref('');

onMounted(() => {

});

</script>
