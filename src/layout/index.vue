<template>
  <CubLayout>
    <template #logo="{ isCollapse }">
      <div class="h-full flex justify-center items-center gap-x-3">
        <img src="/logo.svg" class="h-3/5" alt="Cub Admin Logo" />
        <span v-show="!isCollapse" class="font-bold whitespace-nowrap">Cub Admin</span>
      </div>
    </template>

    <template #headerLeft>
      <!-- headerLeft -->
      <!-- 使用组合菜单 -->
      <!-- <CubTopMixedMenu /> -->
    </template>

    <template #headerTools>
      <CubModeSwitch />
      <CubPrimaryColorChange />
    </template>

    <template #headerRight>
      <div>headerRight</div>
    </template>
  </CubLayout>
</template>

<script setup>
import { CubLayout } from 'cub-admin';
import CubModeSwitch from './components/cub-mode-switch.vue';
import CubPrimaryColorChange from './components/cub-primary-color-change.vue';
// import { CubTopMixedMenu } from 'cub-admin';
</script>

<style lang="scss" scoped>
</style>
