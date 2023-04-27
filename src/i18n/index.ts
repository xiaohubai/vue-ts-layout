import { createI18n } from 'vue-i18n'
import EN from 'element-plus/dist/locale/en.mjs'
import ZHCN from 'element-plus/dist/locale/zh-cn.mjs'
import enLocale from './en.json'
import zhLocale from './zh.json'

const messages = {
	'en': {
		...enLocale,
		...EN
	},
	'zh-cn': {
		...zhLocale,
		...ZHCN
	}
}

const i18n = createI18n({
	legacy: false, // you must set `false`, to use Composition API
	globalInjection: true,
	locale: 'zh-cn',
	fallbackLocale: 'zh-cn', //首选语言缺少翻译时要使用的语言
	silentFallbackWarn: true, //fallbackLocale缺少翻译时 避免控制台告警
	messages
})

export default i18n