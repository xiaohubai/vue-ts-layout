<template>
  <div>
    <div class="logo" :style="{ background: theme.backgroundColor }">
      <img class="img" :src="appLogo">
      <div v-if="!collapse" class="title" :style="{ color: sideMode == 'dark' ? '#fff' : '#191a23' }">{{
        appName }}
      </div>
    </div>

    <div :style="{ background: theme.backgroundColor }">
      <el-scrollbar style="height: calc(100vh - 60px)">
        <el-menu :default-active="activePath" :collapse="collapse" :collapse-transition="false"
          :text-color="theme.textColor" :background-color="theme.backgroundColor"
          :active-text-color="theme.activeTextColor" :router="true" :unique-opened="true">
          <template v-for="item in asyncRouters[0].children" :key="item.path">
            <!-- 一级菜单 -->
            <template v-if="!(item.children && item.children.length)">
              <el-menu-item v-if="!item.meta.hidden" :index="item.path" :key="item.path">
                <el-icon v-if="item.meta.icon">
                  <component :is="item.meta.icon" />
                </el-icon>
                <span :hidden="collapse ? true : false">{{ item.meta.title }}</span>
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
import { useRouterStore } from '@/pinia/modules/router';
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useSettingStore } from "@/pinia/modules/setting"

const settingStore = useSettingStore()
const routerStore = useRouterStore()
const router = useRouter()


const { asyncRouters, activeName, activePath, activeTitle, activeList } = storeToRefs(routerStore)
const { collapse, appLogo, sideMode, appName, activeTextColor, activeBackgroundColor } = storeToRefs(settingStore)

const theme = ref({
  backgroundColor: '',
  textColor: '',
  activeTextColor: activeTextColor.value,
  activeBackgroundColor: activeBackgroundColor.value,
})

const getTheme = () => {
  switch (sideMode.value) {
    case 'light':
      theme.value = {
        backgroundColor: '#fff',
        textColor: '#191a23',
        activeTextColor: activeTextColor.value,
        activeBackgroundColor: activeBackgroundColor.value,
      }

      break
    case 'dark':
      theme.value = {
        backgroundColor: '#191a23',
        textColor: '#fff',
        activeTextColor: activeTextColor.value,
        activeBackgroundColor: activeBackgroundColor.value,
      }
      break
  }
}

// AddActiveRouter 将活动路由储存到activeList用于面包屑
const AddActiveRouter = (item: any) => {
  activePath.value = item.path
  activeName.value = item.name
  activeTitle.value = item.meta.title

  const index = activeList.value.findIndex(
    (i) => i.name === item.name
  )
  if (index === -1) {
    activeList.value.push({
      name: item.name,
      path: item.path,
      title: item.meta.title
    })
  }
}

watch(() => sideMode, () => { getTheme() }, { immediate: true, deep: true })
watch(() => router.currentRoute.value, (item: any) => { AddActiveRouter(item) }, { immediate: true, deep: true })

</script>

<style lang="scss" scoped>
.logo {
  min-height: 60px;
  line-height: 60px;
  text-align: center;
  transition: all 0.3s;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .img {
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    padding: 3px;
  }

  .title {
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    padding-left: 10px;
  }
}

.el-menu {
  border-right: none;
}
</style>