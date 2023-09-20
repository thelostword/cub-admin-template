<template>
  <CubLayout>
    <template #logo="{ isCollapse }">
      <div class="h-full flex justify-center items-center gap-x-3">
        <img src="/logo.svg" class="h-3/5" alt="Cub Admin Logo" />
        <span v-show="!isCollapse" class="font-bold whitespace-nowrap">Cub Admin</span>
      </div>
    </template>

    <template #headerLeft>
      headerLeft
    </template>

    <template #headerTools>
      <CubModeSwitch />
      <CubPrimaryColorChange />
      <CubFullscreen />
    </template>

    <template #headerRight>
      <div>headerRight</div>
    </template>
  </CubLayout>
</template>

<script setup>
import { CubLayout } from 'cub-admin';

import {
  CubFullscreen, CubModeSwitch, CubPrimaryColorChange,
} from 'cub-admin/dist/components';
</script>

<style lang="scss" scoped>
</style>
