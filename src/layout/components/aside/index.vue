<template>
  <div class="cls-aside" :style="{ background: theme.backgroundColor }">
    <div class="cls-logo">
      <img class="cls-img" :src="app_info.logo">
      <div v-if="!collapse" class="cls-title" :style="{ color: sideModeColor == '#000000' ? '#ffffff' : '#000000' }">
        {{
          app_info.name }}
      </div>
    </div>

    <div class="cls-menu">
      <el-scrollbar style="height: calc(100vh - 60px)">
        <el-menu :default-active="activeRoutePath" :collapse="collapse" :collapse-transition="false"
                 :text-color="theme.textColor" :background-color="theme.backgroundColor"
                 :active-text-color="theme.activeTextColor" :router="true" :unique-opened="true">
          <template v-for="item in asyncRouters[0].children" :key="item.path">
            <!-- 一级菜单 -->
            <template v-if="!(item.children && item.children.length)">
              <el-menu-item v-if="!item.meta.hidden" :key="item.path" :index="item.path">
                <el-icon v-if="item.meta.icon">
                  <component :is="item.meta.icon" />
                </el-icon>
                <span :hidden="collapse">{{ item.meta.title }}</span>
              </el-menu-item>
            </template>
            <!-- 二级+ 菜单 -->
            <Submenu v-else :menu="item" :collapse="collapse" :theme="theme" />
          </template>
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts"  name="Aside">
import { ref, watch } from 'vue'
import Submenu from '@/layout/components/aside/submenu.vue'
import { useRouterStore } from '@/pinia/modules/router'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useSettingStore } from '@/pinia/modules/setting'
import { useDictStore } from '@/pinia/modules/dict'

const router = useRouter()
const settingStore = useSettingStore()
const routerStore = useRouterStore()
const dictStore = useDictStore()

const {
  asyncRouters,
  activeRouteName,
  activeRoutePath,
  activeRouteTitle,
  activeRouteHistoryList,
  currentActiveRouteList
} = storeToRefs(routerStore)
const { collapse, sideModeColor, activeTextColor, activeBackgroundColor } = storeToRefs(settingStore)
const { app_info } = storeToRefs(dictStore)

const theme = ref({
  backgroundColor: '',
  textColor: '',
  activeTextColor: activeTextColor.value,
  activeBackgroundColor: activeBackgroundColor.value
})

const getTheme = () => {
  switch (sideModeColor.value) {
    case '#ffffff':
      theme.value = {
        backgroundColor: '#ffffff', //背景色
        textColor: '#000000', //前景色
        activeTextColor: activeTextColor.value,
        activeBackgroundColor: activeBackgroundColor.value
      }

      break
    case '#000000':
      theme.value = {
        backgroundColor: '#000000',
        textColor: '#ffffff',
        activeTextColor: activeTextColor.value,
        activeBackgroundColor: activeBackgroundColor.value
      }
      break
  }
}

const AddCurrentRouteToPinia = (route: any) => {
  //当前活跃路由
  activeRoutePath.value = route.path
  activeRouteName.value = route.name
  activeRouteTitle.value = route.meta.title

  //当前活跃路由的 matched,用于面包屑(标题)
  currentActiveRouteList.value = []
  const matched: any = route.matched || []
  const length = Object.keys(matched).length
  if (length >= 1) {
    Object.values(matched).forEach((item: any) => {
      if (item.path && item.path !== '/layout') {
        const data: any = {
          path: item.path,
          name: item.name,
          title: item.meta.title
        }
        currentActiveRouteList.value.push(data)
      }
    })
  }
  //活跃过的历史路由,用于面包屑(tabs)
  const index = activeRouteHistoryList.value.findIndex(
    (i) => i.name === route.name
  )
  if (index === -1) {
    activeRouteHistoryList.value.push({
      name: route.name,
      path: route.path,
      title: route.meta.title
    })
  }
}

watch(() => sideModeColor.value, () => { getTheme() }, { immediate: true, deep: true })
watch(() => router.currentRoute.value, (route: any) => { AddCurrentRouteToPinia(route) }, { immediate: true, deep: true })
</script>

<style lang="scss" scoped>
.cls-aside {
  display: flex;
  align-items: center;
  flex-direction: column;

  .cls-logo {
    min-height: 60px;
    line-height: 60px;
    text-align: center;
    transition: all 0.3s;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

    .cls-img {
      width: 30px;
      height: 30px;
      background: #fff;
      border-radius: 50%;
      padding: 3px;
    }

    .cls-title {
      color: #fff;
      font-weight: 600;
      font-size: 20px;
      padding-left: 10px;
    }
  }

  .cls-menu {
    width: 100%;
  }
}

.el-menu {
  border: none;
}
</style>
