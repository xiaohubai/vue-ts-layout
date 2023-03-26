import { defineStore } from 'pinia'
import { getLayoutSettings, setLayoutSettings } from '@/api/layout'
import { ElMessage } from 'element-plus'

export const useSettingStore = defineStore('setting', {
    state: () => ({
        lang: '',
        sideMode: '',
        collapse: false, //侧边栏折叠
        breadcrumb: true,//面包屑
        defaultRouter: '',//默认路由
        activeTextColor: '',//点击文本颜色
        activeBackgroundColor: '',//点击文本背景色
        appName: '', //logo名字
        appLogo: '', //logo图
        dropDownIcon: true, //下拉菜单
    }),
    persist: true,
    getters: {
    },
    actions: {
        async getSetting() {
            const res: any = await getLayoutSettings()
            if (res.code === 0) {
                this.$state = res.data
                return true
            }
            ElMessage({ type: 'error', message: '获取配置失败' })
            return false
        },
        async setSetting(name: string, val: any) {
            const data = {
                name: val
            }
            const res: any = await setLayoutSettings(data)
            if (res.code === 0) {
                this.$state[name] = val
                ElMessage({ type: 'success', message: '设置成功' })
                return true
            }
            ElMessage({ type: 'error', message: '设置失败' })
            return false
        }
    }
})