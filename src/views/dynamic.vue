<template>
  <div>
    <el-button type="primary" :disabled="flag" @click="onRegister">注册路由</el-button>
    <el-button type="warning" @click="onUnregister">卸载路由</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { registerRoutes, unregisterRoutes } from 'cub-admin';
import { dynamicRoutes } from '../router/modules/dynamic';

defineOptions({
  name: 'DynamicPage',
});

// TODO 待处理, 重复注册问题
const flag = ref(false);
const onRegister = async () => {
  if (flag.value) return;
  await registerRoutes('test-module', {
    routes: dynamicRoutes,
    viewsPath: '/src/views',
    modules: import.meta.glob('/src/views/**/*.vue', { eager: true }),
  });
  flag.value = true;
};

const onUnregister = () => {
  unregisterRoutes('test-module');
};
</script>
