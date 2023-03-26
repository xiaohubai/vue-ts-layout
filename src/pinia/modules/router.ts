import { defineStore } from 'pinia'
import router from '@/router'
import { getRoleMenus } from '@/api/menu'
import { ElMessage } from 'element-plus'
import { asyncRouterHandle } from '@/utils/asyncRouter'


export const useRouterStore = defineStore('router', {
  state: () => ({
    asyncRouters: [],
    activeList: [],
    activePath: '',
    activeName: '',
    activeTitle: '',

  }),
  persist: true,
  getters: {
  },
  actions: {
    async getRouter(roleId: string) {
      const res: any = await getRoleMenus(roleId)
      if (res.code === 0) {
        const menus = res.data.list
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

