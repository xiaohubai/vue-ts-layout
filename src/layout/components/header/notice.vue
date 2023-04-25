<template>
  <div>
    <div class="cls-notice">
      <el-badge :is-dot="isDot" class="item">
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
.item {
  margin-right: 10px;
}
</style>