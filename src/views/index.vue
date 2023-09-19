<template>
  <div class="page1">
    <CubPageHeader>
      <template #extra>
        <div class="flex-inline gap-x-2">
          <el-tag type="success">
            示例
          </el-tag>
          <el-tag type="danger">
            示例
          </el-tag>
        </div>
      </template>
      <template #right>
        <el-button>引用草稿</el-button>
        <el-button type="primary">
          存草稿
        </el-button>
      </template>
    </CubPageHeader>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { CubPageHeader } from 'cub-admin/components';

defineOptions({
  name: 'PageHome',
});

onMounted(() => {

});

</script>

<style lang="scss" scoped>
.icon {
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
