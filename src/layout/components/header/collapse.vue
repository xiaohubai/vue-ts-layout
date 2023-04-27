<template>
  <el-icon class="cls-collapse-icon" @click="changeCollapse">
    <component :is="collapse ? `DArrowRight` : `DArrowLeft`" />
  </el-icon>
</template>

<script setup lang="ts" name="Collapse">
import { storeToRefs } from 'pinia'
import { useSettingStore } from '@/pinia/modules/setting'

const settingStore = useSettingStore()
const { collapse } = storeToRefs(settingStore)

const changeCollapse = () => {
  collapse.value = !collapse.value
}
</script>

<style scoped lang="scss">
.cls-collapse-icon {
  cursor: pointer;
  color: #413d3d;
}
</style>