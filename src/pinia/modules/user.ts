import { ElMessage } from 'element-plus';
import { defineStore } from 'pinia';
import router from '@/router';
import { jsonInBlacklist } from '@/api/jwt';
import { login } from '@/api/user';
import { useRouterStore } from '@/pinia/modules/router';
import { useSettingStore } from '@/pinia/modules/setting';
import { useDictStore } from '@/pinia/modules/dict';


export const useUserStore = defineStore('user', {
    state: () => ({
        id: '',
        uid: '',
        userName: '',
        nickName: '',
        birth: '',
        avatar: '',
        roleId: '0',
        roleName: '',
        phone: '',
        wechat: '',
        email: '',
        status: '',
        motto: '',
        token: '',
        refreshToken: ''
    }),
    persist: true,
    getters: {
    },
    actions: {
        async LoginOut() {
            const data = {
                token: this.$state.token,
                refreshToken: this.$state.refreshToken
            }
            const res: any = await jsonInBlacklist(data)
            if (res.code === 0) {
                sessionStorage.clear()
                localStorage.clear()
                router.push({ name: 'login', replace: true })
                window.location.reload()
            }
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
                await routerStore.getRouter(this.$state.roleId)

                await router.replace({ name: settingStore.defaultRouter })
                return true
            }
            ElMessage({ type: 'error', message: '登录失败' })
            return false
        },
        async ClearStorage() {
            sessionStorage.clear()
            localStorage.clear()
        }
    }
})