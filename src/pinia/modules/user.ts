import { defineStore } from 'pinia'
import router from '@/router'
import { ElMessage } from 'element-plus'
import { login } from '@/api/user'
import { useRouterStore } from '@/pinia/modules/router'
import { useSettingStore } from '@/pinia/modules/setting'
import { useDictStore } from '@/pinia/modules/dict'

export const useUserStore = defineStore('user', {
    state: () => ({
        ID: 0,
        UID: '',
        userName: '',
        nickName: '',
        birth: '',
        avatar: '',
        roleID: '0',
        roleName: '',
        phone: '',
        wechat: '',
        email: '',
        state: 0,
        motto: '',
        token: '',
        refreshToken: ''
    }),
    persist: true,
    getters: {
    },
    actions: {
        LoginOut() {
            sessionStorage.clear()
            localStorage.clear()
            router.push({ name: 'login', replace: true })
            window.location.reload()
        },
        setUserInfo(data: any) {
            this.$state = data
        },
        async LoginIn(data: any) {
            const res: any = await login(data)
            if (res.code === 0) {
                this.$state = res.data
                //获取layout配置
                const settingStore = useSettingStore()
                await settingStore.getSetting()

                //获取字典序
                const dictStore = useDictStore()
                await dictStore.getDict()

                //获取动态路由配置
                const routerStore = useRouterStore()
                await routerStore.getRouter()

                await router.replace({ name: settingStore.defaultRouter })
                return true
            }
            ElMessage({ type: 'error', message: '登录失败: ' + res.msg })
            return false
        },
        async ClearStorage() {
            sessionStorage.clear()
            localStorage.clear()
        }
    }
})