import { defineStore } from 'pinia'
import { getDictList } from '@/api/dict'
import { ElMessage } from 'element-plus'

export const useDictStore = defineStore('dict', {
    state: () => ({
        filename: '',
        dictInfo: {
            state: {},
            lang: [],
            role: [],
            method: []
        }
    }),
    persist: true,
    getters: {
    },
    actions: {
        async getDict() {
            const res: any = await getDictList()
            if (res.code === 0) {
                this.dictInfo = res.data.dictInfo
                this.filename = res.data.filename
                return true
            }
            return false
        }
    }
})