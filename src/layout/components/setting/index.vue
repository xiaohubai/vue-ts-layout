<template>
  <div>
    <el-affix>
      <el-button type="primary" class="cls-setting-btn" icon="Setting" @click="showSettingDrawer" />
    </el-affix>
    <el-drawer v-model="isDrawer" title="主题配置" :direction="direction" :before-close="handleClose">
      <div class="cls-setting-img">
        <div class="cls-setting-img-click" @click="changeSetting('sideModeColor', '#ffffff')">
          <el-icon v-if="sideModeColor === '#ffffff'" class="cls-check">
            <check />
          </el-icon>
          <img src="@/assets/side_light.svg">
        </div>
        <div class="cls-setting-img-click" @click="changeSetting('sideModeColor', '#000000')">
          <el-icon v-if="sideModeColor === '#000000'" class="cls-check">
            <check />
          </el-icon>
          <img src="@/assets/side_dark.svg">
        </div>
      </div>
      <el-divider />
      <div>
        <el-form model="form" label-position="left" label-width="auto" size="default">
          <el-form-item label="语言">
            <el-select v-model="form.lang" @change="changeSetting('lang', form.lang)">
              <el-option v-for="item in dictInfo.lang" :key="item.key" :label="item.value" :value="item.key" />
            </el-select>
          </el-form-item>
          <el-form-item label="默认路由">
            <el-cascader v-model="form.defaultRouter" :options="menuOptions"
              :props="{ checkStrictly: true, label: 'title', value: 'name', emitPath: false }" :show-all-levels="false"
              @change="changeSetting('defaultRouter', form.defaultRouter)" />
          </el-form-item>

          <el-form-item label="面包屑">
            <el-radio-group v-model="form.breadcrumb" @change="changeSetting('breadcrumb', form.breadcrumb)">
              <el-radio-button :label="true">
                开启
              </el-radio-button>
              <el-radio-button :label="false">
                关闭
              </el-radio-button>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="侧边栏折叠">
            <el-radio-group v-model="form.collapse" @change="changeSetting('collapse', form.collapse)">
              <el-radio-button :label="true">
                开启
              </el-radio-button>
              <el-radio-button :label="false">
                关闭
              </el-radio-button>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="选中面包屑文本颜色">
            <el-color-picker v-model="form.activeTextColor"
              @change="changeSetting('activeTextColor', form.activeTextColor)" />
          </el-form-item>
          <el-form-item label="选中菜单路由背景色">
            <el-color-picker v-model="form.activeBackgroundColor"
              @change="changeSetting('activeBackgroundColor', form.activeBackgroundColor)" />
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script setup lang="ts" name="Setting">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSettingStore } from '@/pinia/modules/setting'
import { useDictStore } from '@/pinia/modules/dict'
import { getRoleMenuList } from '@/api/menu'

const dictStore = useDictStore()
const { dictInfo } = storeToRefs(dictStore)
const settingStore = useSettingStore()
const {
  lang,
  collapse,
  breadcrumb,
  sideModeColor,
  defaultRouter,
  activeTextColor,
  activeBackgroundColor
} = storeToRefs(settingStore)


const form = ref({
  lang: lang,
  breadcrumb: breadcrumb,
  collapse: collapse,
  defaultRouter: defaultRouter,
  activeTextColor: activeTextColor,
  activeBackgroundColor: activeBackgroundColor
})
const menuOptions = ref([])

const menuListFormat = (menuOptions, list) => {
  list.forEach(item => {
    if (item.meta.hidden) {
      return
    }
    const oData = {
      name: item.name,
      title: item.meta.title,
      children: []
    }
    menuOptions.push(oData)
    if (!item.children) {
      return
    }
    menuListFormat(oData.children, item.children)
  })
}

const getMenuOptions = async () => {
  menuOptions.value = []
  const res: any = await getRoleMenuList()
  if (res.code === 0) {
    const menuList = res.data[0].children
    menuListFormat(menuOptions.value, menuList)
  }
}
const changeSetting = (name, val) => {
  settingStore.updateSetting(name, val)
}

const isDrawer = ref(false)
const direction = ref('rtl')
const handleClose = () => {
  isDrawer.value = false
  window.location.reload()
}
const showSettingDrawer = () => {
  isDrawer.value = true
  getMenuOptions()
}

</script>

<style lang="scss" scoped>
.cls-setting-btn {
  transition: all 0.2s;

  &:hover {
    right: 0
  }

  position: fixed;
  right: -20px;
  bottom: 15%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  color: #fff;
  border-radius: 4px 0 0 4px;
  cursor: pointer;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 10%);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 10%);
}

.cls-setting-img {
  display: flex;
  flex-direction: row;

  .cls-setting-img-click {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-right: 14px;

    .cls-check {
      position: absolute;
      flex-direction: column;
      font-size: 20px;
      color: #00afff;
      right: 10px;
      bottom: 10px;
    }
  }
}
</style>
