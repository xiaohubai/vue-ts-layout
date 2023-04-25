<template>
  <div>
    <div class="cls-logo" :style="{ background: theme.backgroundColor }">
      <img class="cls-img" :src="app_info.logo">
      <div v-if="!collapse" class="cls-title" :style="{ color: sideModeColor == '#000000' ? '#ffffff' : '#000000' }">{{
        app_info.name }}
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
import { useRouterStore } from '@/pinia/modules/router';
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useSettingStore } from "@/pinia/modules/setting"
import { useDictStore } from "@/pinia/modules/dict"

const router = useRouter()
const settingStore = useSettingStore()
const routerStore = useRouterStore()
const dictStore = useDictStore()


const { asyncRouters, activeName, activePath, activeTitle, activeList } = storeToRefs(routerStore)
const { collapse, sideModeColor, activeTextColor, activeBackgroundColor } = storeToRefs(settingStore)
const { app_info } = storeToRefs(dictStore)

const theme = ref({
  backgroundColor: '',
  textColor: '',
  activeTextColor: activeTextColor.value,
  activeBackgroundColor: activeBackgroundColor.value,
})

const getTheme = () => {
  switch (sideModeColor.value) {
    case '#ffffff':
      theme.value = {
        backgroundColor: '#ffffff', //背景色
        textColor: '#000000', //前景色
        activeTextColor: activeTextColor.value,
        activeBackgroundColor: activeBackgroundColor.value,
      }

      break
    case '#000000':
      theme.value = {
        backgroundColor: '#000000',
        textColor: '#ffffff',
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

watch(() => sideModeColor.value, () => { getTheme() }, { immediate: true, deep: true })
watch(() => router.currentRoute.value, (item: any) => { AddActiveRouter(item) }, { immediate: true, deep: true })

</script>

<style lang="scss" scoped>
.cls-logo {
  min-height: 60px;
  line-height: 60px;
  text-align: center;
  transition: all 0.3s;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

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

.el-menu {
  border: none;
}
</style>
