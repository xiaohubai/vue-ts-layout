<template>
  <div class="cls-breadcrumb">
    <el-tabs v-model="activeRouteName" type="card"
      :closable="!(activeRouteHistoryList.length === 1 && activeRouteName === defaultRouter)" @tab-click="changeTab"
      @tab-remove="removeTab">
      <el-tab-pane v-for="item in activeRouteHistoryList" :key="item.path" :label="item.title" :name="item.name"
        :tab="item">
        <template #label>
          <span :tab="item" :style="{ color: activeRouteName === item.name ? activeTextColor : '#333' }">
            <i class="cls-dot" :style="{ backgroundColor: activeRouteName === item.name ? activeTextColor : '#ddd' }" />
            {{ item.title }}
          </span>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts" name="TabsBreadcrumb">
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useSettingStore } from '@/pinia/modules/setting'
import { useRouterStore } from '@/pinia/modules/router'
const router = useRouter()
const settingStore = useSettingStore()
const routerStore = useRouterStore()

const { activeTextColor, defaultRouter } = storeToRefs(settingStore)
const { activeRouteHistoryList, activeRouteName } = storeToRefs(routerStore)

const changeTab = (TabsPaneContext) => {
  const name = TabsPaneContext?.props?.name
  if (!name) return
  router.push({ name: name })
}

const removeTab = (tab) => {
  const index = activeRouteHistoryList.value.findIndex(
    (item) => item.name === tab
  )
  if (activeRouteName.value === tab) {
    if (activeRouteHistoryList.value.length === 1) {
      router.push({ name: defaultRouter.value })
    } else {
      if (index < activeRouteHistoryList.value.length - 1) {
        router.push({ name: activeRouteHistoryList.value[index + 1].name })
      } else {
        router.push({ name: activeRouteHistoryList.value[index - 1].name })
      }
    }
  }
  activeRouteHistoryList.value.splice(index, 1)
}

</script>

<style scoped lang="scss">
.cls-breadcrumb {
  background-color: #fff;
}

.el-tabs__item .cls-dot {
  content: "";
  width: 9px;
  height: 9px;
  margin-right: 8px;
  display: inline-block;
  border-radius: 50%;
  transition: background-color 0.2s;
}
</style>
