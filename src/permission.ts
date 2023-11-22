import { storeToRefs } from 'pinia'
import router from '@/router'
import { useRouterStore } from '@/pinia/modules/router'
import { useSettingStore } from '@/pinia/modules/setting'
import { useUserStore } from '@/pinia/modules/user'
import getPageTitle from '@/utils/pageTitle'

const whiteList = ['login']
let isRefresh = false

router.beforeEach(async (to: any ) => {
    document.title = getPageTitle(to.meta.title)
    const settingStore = useSettingStore()
    const routerStore = useRouterStore()
    const userStore = useUserStore()

    const { defaultRouter } = storeToRefs(settingStore)
    const { token } = storeToRefs(userStore)

    to.meta.matched = [...to.matched]
    // Check if the route is in the whitelist
    if (whiteList.includes(to.name)) {
        // If the token exists
        if (token.value) {
            // If the page is not refreshed
            if (!isRefresh) {
                isRefresh = true
                await routerStore.getRouter()
            }
            // If the default router exists
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
            // If the page is not refreshed
            if (!isRefresh) {
                await routerStore.getRouter()
                isRefresh = true
                return { ...to, replace: true }
            } else {
                // If the route is matched
                if (to.matched.length) {
                    return true
                } else {
                    return { path: '/404' }
                }
            }
        }
        // If the token does not exist
        if (!token.value) {
            return { name: 'login', query: { redirect: document.location.hash } }
        }
    }
})
