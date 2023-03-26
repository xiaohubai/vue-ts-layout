<template>
  <div class="breadcrumb">
    <el-tabs v-model="activeName" :closable="!(activeList.length === 1 && activeName === defaultRouter)" type="card"
      @tab-click="changeTab" @tab-remove="removeTab">
      <el-tab-pane v-for="item in activeList" :key="item.path" :label="item.title" :name="item.name" :tab="item">
        <template #label>
          <span :tab="item" :style="{ color: activeName === item.name ? activeTextColor : '#333' }">
            <i class="dot" :style="{ backgroundColor: activeName === item.name ? activeTextColor : '#ddd' }" />
            {{ item.title }}
          </span>
        </template>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script setup lang="ts" name="Breadcrumb">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia';
import { useSettingStore } from '@/pinia/modules/setting';
import { useRouterStore } from '@/pinia/modules/router';
const router = useRouter()
const settingStore = useSettingStore()
const routerStore = useRouterStore()

const { activeTextColor, defaultRouter } = storeToRefs(settingStore)
const { activeList, activeName } = storeToRefs(routerStore)

const changeTab = (TabsPaneContext) => {
  const name = TabsPaneContext?.props?.name
  if (!name) return
  router.push({ name: name })
}

const removeTab = (tab) => {
  const index = activeList.value.findIndex(
    (item) => item.name === tab
  )
  if (activeName.value === tab) {
    if (activeList.value.length === 1) {
      router.push({ name: defaultRouter.value })
    } else {
      if (index < activeList.value.length - 1) {
        router.push({ name: activeList.value[index + 1].name })
      } else {
        router.push({ name: activeList.value[index - 1].name })
      }
    }
  }
  activeList.value.splice(index, 1)
}


</script>

<style scoped lang="scss">
.breadcrumb {
  background-color: #fff;
}


.el-tabs__item .dot {
  content: "";
  width: 9px;
  height: 9px;
  margin-right: 8px;
  display: inline-block;
  border-radius: 50%;
  transition: background-color 0.2s;
}
</style>
