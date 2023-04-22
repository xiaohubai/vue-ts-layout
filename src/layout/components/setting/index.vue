<template>
  <div>
    <el-affix>
      <el-button type="primary" class="drawer-container" icon="Setting" @click="showSettingDrawer" />
    </el-affix>
    <el-drawer v-model="drawer" title="主题配置" :direction="direction" :before-close="handleClose">

      <div class="setting_body">
        <div class="setting_card">
          <div class="setting_content">
            <div class="theme-box">
              <div class="item" @click="changeSetting('sideModeColor', 'light')">
                <div class="item-top">
                  <el-icon v-if="sideModeColor === 'light'" class="check">
                    <check />
                  </el-icon>
                  <img src="@/assets/side_light.svg">
                </div>
                <p>简约白</p>
              </div>
              <div class="item" @click="changeSetting('sideModeColor', 'dark')">
                <div class="item-top">
                  <el-icon v-if="sideModeColor === 'dark'" class="check">
                    <check />
                  </el-icon>
                  <img src="@/assets/side_dark.svg">
                </div>
                <p>商务黑</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <el-divider />
      <div class="settingForm">
        <el-form model="form" label-position="left" label-width="auto" size="default">
          <el-form-item label="语言">
            <el-select v-model="form.lang" @change="changeSetting">
              <el-option v-for="item in lang_info" :key="item.key" :label="item.value" :value="item.key" />
            </el-select>
          </el-form-item>

          <el-form-item label="面包屑">
            <el-radio-group v-model="form.breadcrumb" @change="changeSetting('breadcrumb', form.breadcrumb)">
              <el-radio-button :label=true>开启</el-radio-button>
              <el-radio-button :label=false>关闭</el-radio-button>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="侧边栏折叠">
            <el-radio-group v-model="form.collapse" @change="changeSetting('collapse', form.collapse)">
              <el-radio-button :label=true>开启</el-radio-button>
              <el-radio-button :label=false>关闭</el-radio-button>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="默认路由">
            <el-cascader v-model="form.defaultRouter" :options="menuOptions"
              :props="{ checkStrictly: true, label: 'title', value: 'name', emitPath: false }" :show-all-levels="false"
              filterable />
          </el-form-item>

        </el-form>
      </div>
    </el-drawer>
  </div>
</template>



<script setup lang="ts" name="Setting">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSettingStore } from "@/pinia/modules/setting"
import { useDictStore } from '@/pinia/modules/dict';
import { getRoleMenuList } from '@/api/menu'

const dictStore = useDictStore()
const { lang_info } = storeToRefs(dictStore)
const settingStore = useSettingStore()
const { sideModeColor, breadcrumb, lang, collapse, defaultRouter, activeTextColor, activeBackgroundColor } = storeToRefs(settingStore)

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
    let oData = {
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

const drawer = ref(false)
const direction = ref('rtl')
const handleClose = () => {
  drawer.value = false
}
const showSettingDrawer = () => {
  drawer.value = true
  getMenuOptions()
}




</script>

<style lang="scss" scoped>
.settingForm {
  display: flex;
  margin-top: 14px;
  align-items: center;
  justify-content: left;
}

.drawer-container {
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

.setting_body {
  padding: 20px;

  .setting_card {
    margin-bottom: 20px;
  }

  .setting_content {
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    >.theme-box {
      display: flex;
    }

    >.color-box {
      div {
        display: flex;
        flex-direction: column;
      }
    }

    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-right: 20px;

      .item-top {
        position: relative;
      }

      .check {
        position: absolute;
        font-size: 20px;
        color: #00afff;
        right: 10px;
        bottom: 10px;
      }

      p {
        text-align: center;
        font-size: 12px;
      }
    }
  }
}
</style>
