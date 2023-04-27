import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/pinia/modules/user'

const service = axios.create({
    baseURL: import.meta.env.VITE_SERVER_PREFIX_API,
    timeout: 5000
})

// http request 拦截器
service.interceptors.request.use(
    config => {
        const userStore = useUserStore()
        if (userStore.token) {
            config.headers.Authorization = `Bearer ${userStore.token}`
        }
        return config
    },
    error => {
        return error
    }
)

// http response 拦截器
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        if (!error.response) {
            ElMessage({ showClose: true, message: 'not response', type: 'error' })
            return
        }
        switch (error.response.status) {
            case 500:
                ElMessage({ showClose: true, message: 'error 500', type: 'error' })
                break
            case 404:
                ElMessage({ showClose: true, message: 'error 404', type: 'error' })
                break
        }
        return error
    }
)
export default service