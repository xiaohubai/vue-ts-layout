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
              <div class="item" @click="changeSetting('sideMode', 'light')">
                <div class="item-top">
                  <el-icon v-if="sideMode === 'light'" class="check">
                    <check />
                  </el-icon>
                  <img src="https://gw.alipayobjects.com/zos/antfincdn/NQ%24zoisaD2/jpRkZQMyYRryryPNtyIC.svg">
                </div>
                <p>简约白</p>
              </div>
              <div class="item" @click="changeSetting('sideMode', 'dark')">
                <div class="item-top">
                  <el-icon v-if="sideMode === 'dark'" class="check">
                    <check />
                  </el-icon>
                  <img src="https://gw.alipayobjects.com/zos/antfincdn/XwFOFbLkSM/LCkqqYNmvBEbokSDscrm.svg">
                </div>
                <p>商务黑</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <el-divider />

      <el-form-item label="语言">
        <el-select v-model="lang" size="default" placeholder="选择语言">
          <el-option label="简体中文" value="zh-cn" />
        </el-select>
      </el-form-item>

    </el-drawer>
  </div>
</template>



<script setup lang="ts" name="Setting">
import { ref } from 'vue'


import { storeToRefs } from 'pinia'
import { useSettingStore } from "@/pinia/modules/setting"
const settingStore = useSettingStore()
const { sideMode } = storeToRefs(settingStore)
const lang = "zh"



const changeSetting = (name, val) => {
  settingStore.setSetting(name, val)
}

const drawer = ref(false)
const direction = ref('rtl')
const handleClose = () => {
  drawer.value = false
}
const showSettingDrawer = () => {
  drawer.value = true
}




</script>

<style lang="scss" scoped>
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
