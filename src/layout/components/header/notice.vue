<template>
  <div>
    <div class="cls-notice">
      <el-badge :is-dot="isDot" class="cls-dot">
        <el-icon size="16px">
          <Bell />
        </el-icon>
      </el-badge>
    </div>
  </div>
</template>

<script setup lang="ts" name="Notice">

import { ref } from 'vue'
const isDot = ref(true)

</script>

<style scoped lang="scss">
.cls-dot {
  margin-right: 10px;
}
</style>