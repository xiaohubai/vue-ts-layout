<template>
  <div class="cls-header">
    <div class="cls-header-up">
      <div class="cls-header-left">
        <div class="cls-collapse">
          <Collapse />
        </div>
        <div class="cls-breadcrumb">
          <Breadcrumb />
        </div>
      </div>
      <div class="cls-header-right">
        <div class="cls-message">
          <Message />
        </div>
        <div class="cls-profile">
          <Profile />
        </div>
      </div>
    </div>
    <el-divider />
    <div v-if="breadcrumb" class="cls-header-down">
      <TabBreadcrumb />
    </div>
  </div>
</template>

<script setup lang="ts" name="Header">
import Collapse from './collapse.vue'
import TabBreadcrumb from './tabs-breadcrumb.vue'
import Breadcrumb from './breadcrumb.vue'
import Profile from './profile.vue'
import Message from './message.vue'
import { storeToRefs } from 'pinia'
import { useSettingStore } from '@/pinia/modules/setting'

const settingStore = useSettingStore()
const { breadcrumb } = storeToRefs(settingStore)
</script>

<style lang="scss" scoped>
.cls-header {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.cls-header-up {
  display: flex;
  height: 60px;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  .cls-header-left {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .cls-collapse {
      margin-top: 6px;
      margin-left: 20px;
    }

    .cls-breadcrumb {
      font-size: 16px;
      margin-left: 20px;
    }
  }

  .cls-header-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .cls-profile {
      margin-right: 10px;
    }

    .cls-message {
      margin-right: 10px;
    }
  }
}

.cls-header-down {
  display: flex;
  height: 40px;
  width: 100%;
}

.el-divider {
  padding: 0;
  margin: 0;
  height: 0;
}
</style>
