import { storeToRefs } from 'pinia';
import router from '@/router';
import { useRouterStore } from '@/pinia/modules/router';
import { useSettingStore } from '@/pinia/modules/setting';
import { useUserStore } from '@/pinia/modules/user';

import getPageTitle from '@/utils/pageTitle';

const whiteList = ['login']

let isRefresh = false;

router.beforeEach(async (to: any, from: any) => {
    document.title = getPageTitle(to.meta.title)
    const settingStore = useSettingStore()
    const routerStore = useRouterStore()
    const userStore = useUserStore()

    const { defaultRouter } = storeToRefs(settingStore)
    const { token, roleID } = storeToRefs(userStore)
    to.meta.matched = [...to.matched]

    if (whiteList.includes(to.name)) {
        if (token.value) {
            if (!isRefresh) {
                isRefresh = true
                await routerStore.getRouter(roleID.value)
            }
            if (defaultRouter.value) {
                return { name: defaultRouter.value }
            } else {
                userStore.ClearStorage()
                return { name: 'login', query: { redirect: document.location.hash } }
            }
        } else {
            return true
        }
    } else {
        if (token.value) {
            if (!isRefresh) {
                await routerStore.getRouter(roleID.value)
                isRefresh = true
                if (token.value) {
                    return { ...to, replace: true }
                } else {
                    return {
                        name: 'login', query: { redirect: to.href }
                    }
                }
            } else {
                if (to.matched.length) {
                    return true
                } else {
                    return { path: '/404' }
                }
            }
        }
        if (!token.value) {
            return { name: 'login', query: { redirect: document.location.hash } }
        }
    }
})
