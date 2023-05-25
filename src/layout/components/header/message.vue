<template>
  <div class="cls-message">
    <el-popover placement="bottom" :width="310" trigger="click">
      <template #reference>
        <el-badge :is-dot="isDot" class="cls-dot">
          <el-icon size="16px">
            <Bell />
          </el-icon>
        </el-badge>
      </template>
      <el-tabs v-model="activeName" @tab-click="changeTab">
        <el-tab-pane label="通知(2)" name="notice">
          <div class="cls-message-content">
            <span class="message-title">创建用户成功</span>
          </div>
          <div class="cls-message-content">
            <span class="message-title">创建菜单成功</span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="消息(1)" name="message">
          <div class="cls-message-content">
            <span class="message-title">毛毛虫:你的项目很棒给你star.</span>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-popover>

  </div>
</template>

<script setup lang="ts" name="Message">

import { ref } from 'vue'
const isDot = ref(true)
const activeName = ref("notice");
const read = ref([])
const changeTab = (TabsPaneContext) => {
  const name = TabsPaneContext?.props?.name
  if (!name) return
  read.value.push({ name: name })
}
</script>

<style scoped lang="scss">
.cls-dot {
  margin-right: 10px;
}


.cls-message-content {
  display: flex;
  flex-direction: column;
  height: 40px;
  background: rgba(205, 179, 178, 0.57) !important;
  border-radius: 4px;
  box-shadow: 0 0 2px 1px rgba(205, 179, 178, 0.57) !important;
  margin-bottom: 5px;
  justify-content: center;
}
</style>