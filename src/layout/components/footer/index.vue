<template>
  <div>
    <span>Powered by</span>
    <span>
      <a href="https://github.com/flipped-aurora/gin-vue-admin">{{ config.appName }}</a>
    </span>
    <el-divider direction="vertical" />
    <span>Copyright</span>
    <span>
      <a href="https://github.com/flipped-aurora">flipped-aurora团队</a>
    </span>
  </div>
</template>

<script setup lang="ts" name="Footer">
import config from '@/config/index'
</script>

<style lang="scss" scoped>
a {
  color: #888;
}

div {
  display: flex;
  justify-content: center;

  span {
    margin: 0 3px;
  }
}
</style>