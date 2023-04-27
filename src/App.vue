<template>
  <div id="cls-app">
    <el-config-provider :locale="elocale">
      <router-view />
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useSettingStore } from '@/pinia/modules/setting'
import { useI18n } from 'vue-i18n'

const { messages, locale }: any = useI18n()
const settingStore = useSettingStore()
const { lang } = storeToRefs(settingStore)
const elocale = ref(messages.value[locale.value])

//监听语言设置,实时切换i18n和element-plus语言
const changeLocale = () => {
  locale.value = lang.value === 'zh-cn' ? 'zh-cn' : 'en'
  elocale.value = messages.value[locale.value]
}
watch(() => lang.value, () => { changeLocale() }, { immediate: true, deep: true })
</script>