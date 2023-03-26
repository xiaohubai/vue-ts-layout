import { defineStore } from 'pinia'
import { getDictList } from '@/api/dict'
import { ElMessage } from 'element-plus'

export const useDictStore = defineStore('dict', {
    state: () => ({
        roleIDs: [],
        methods: []

    }),
    persist: true,
    getters: {
    },
    actions: {
        async getDict() {
            const res: any = await getDictList({ type: 'all' })
            if (res.code === 0) {
                this.$state = res.data
                return true
            }
            ElMessage({ type: 'error', message: '获取字典序失败' })
            return false
        },
    }
})