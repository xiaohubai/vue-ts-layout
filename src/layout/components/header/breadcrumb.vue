<template>
  <div>
    <el-breadcrumb>
      <template v-for="item in currentActiveRouteList" :key="item.path">
        <el-breadcrumb-item :to="{ path: item.path }">
          {{ item.title }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts" name="Breadcrumb">
import { storeToRefs } from 'pinia'
import { useRouterStore } from '@/pinia/modules/router'
const routerStore = useRouterStore()
const { currentActiveRouteList } = storeToRefs(routerStore)

</script>

<style scoped lang="scss"></style>
