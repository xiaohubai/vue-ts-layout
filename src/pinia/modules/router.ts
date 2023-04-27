import { defineStore } from 'pinia'
import router from '@/router'
import { getRoleMenuList } from '@/api/menu'
import { ElMessage } from 'element-plus'
import { asyncRouterHandle } from '@/utils/asyncRouter'

export const useRouterStore = defineStore('router', {
  state: () => ({
    asyncRouters: [],
    activeRouteHistoryList: [],
    currentActiveRouteList: [],
    activeRoutePath: '',
    activeRouteName: '',
    activeRouteTitle: ''

  }),
  persist: true,
  getters: {
  },
  actions: {
    async getRouter() {
      const res: any = await getRoleMenuList()
      if (res.code === 0) {
        const menus = res.data
        asyncRouterHandle(menus)
        this.asyncRouters = menus
        this.asyncRouters.forEach(asyncRouter => {
          router.addRoute(asyncRouter)
        })
      } else {
        ElMessage({ type: 'error', message: '路由获取失败' })
      }
    }
  }
})

