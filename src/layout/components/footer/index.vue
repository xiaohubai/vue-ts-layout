<template>
  <div>
    <span>Powered by</span>
    <span>
      <a href="https://github.com/flipped-aurora/gin-vue-admin">{{ app_info.name }}</a>
    </span>
    <el-divider direction="vertical" />
    <span>Copyright</span>
    <span>
      <a href="https://github.com/flipped-aurora">flipped-aurora团队</a>
    </span>
  </div>
</template>

<script setup lang="ts" name="Footer">
import { useDictStore } from '@/pinia/modules/dict';
import { storeToRefs } from 'pinia';
const dictStore = useDictStore()
const { app_info } = storeToRefs(dictStore)
</script>
<style lang="scss" scoped>
a {
  color: #888;
}
span {
  margin: 0 3px;
}
</style>