<template>
  <el-sub-menu :key="menu.path" :index="menu.path">
    <template #title>
      <el-icon v-if="menu.meta.icon">
        <component :is="menu.meta.icon" />
      </el-icon>
      <span :hidden="collapse ? true : false">{{ menu.meta.title }}</span>
    </template>
    <template v-if="menu.children.length">
      <template v-for="subitem in menu.children" :key="subitem.path">
        <template v-if="!subitem.children">
          <el-menu-item v-if="!subitem.meta.hidden" :key="subitem.path" :index="subitem.path">
            <div class="cls-menu-item">
              <el-icon v-if="subitem.meta.icon">
                <component :is="subitem.meta.icon" />
              </el-icon>
              <span>{{ subitem.meta.title }}</span>
            </div>
          </el-menu-item>
        </template>
        <!-- 二级+ 菜单 -->
        <Submenu v-else :menu="subitem" :collapse="collapse" :theme="theme" />
      </template>
    </template>
  </el-sub-menu>
</template>
<script setup lang="ts" name="Submenu">
import { ref, watch } from 'vue'
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

const activeBackgroundColor = ref(props.theme.activeBackgroundColor)
watch(() => props.theme, () => {
  activeBackgroundColor.value = props.theme.activeBackgroundColor
})
</script>
<style scoped lang="scss">
.cls-menu-item {
  width: 100%;
  flex: 1;
  height: 44px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 4px;
}

.el-menu-item.is-active {
  .cls-menu-item {
    color: #fff !important;
    background: v-bind(activeBackgroundColor) !important;
    border-radius: 4px;
    box-shadow: 0 0 2px 1px v-bind(activeBackgroundColor) !important;
  }
}

.el-menu-item:hover {
  background: transparent;
}
</style>