<template>
  <el-sub-menu :index="menu.path" :key="menu.path">
    <template #title>
      <el-icon v-if="menu.meta.icon">
        <component :is="menu.meta.icon" />
      </el-icon>
      <span :hidden="collapse ? true : false">{{ menu.meta.title }}</span>

    </template>
    <template v-if="menu.children.length">
      <template v-for="subitem in menu.children" :key="subitem.path">
        <template v-if="!subitem.children">
          <el-menu-item v-if="!subitem.meta.hidden" :index="subitem.path" :key="subitem.path">
            <el-icon v-if="subitem.meta.icon">
              <component :is="subitem.meta.icon" />
            </el-icon>
            <span>{{ subitem.meta.title }}</span>
          </el-menu-item>
        </template>
        <!-- 二级+ 菜单 -->
        <Submenu v-else :menu="subitem" :collapse="collapse" :theme="theme" />
      </template>
    </template>
  </el-sub-menu>
</template>
<script setup lang="ts" name="Submenu">

const props = defineProps({
  menu: {
    type: Object,
    default: () => ({})
  },

  theme: {
    type: Object,
    default: () => ({})
  },
  collapse: {
    type: Boolean
  }
})
</script>
<style scoped lang="scss" ></style>