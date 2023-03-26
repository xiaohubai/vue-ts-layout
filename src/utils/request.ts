import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/pinia/modules/user'
import { storeToRefs } from 'pinia'

const service = axios.create({
    baseURL: import.meta.env.VITE_SERVER_PREFIX_API,
    timeout: 5000
})

// http request 拦截器
service.interceptors.request.use(
    config => {

        return config
    },
    error => {
        ElMessage({ showClose: true, message: error, type: 'error' })
        return error
    }
)

// http response 拦截器
service.interceptors.response.use(
    response => {
        if (response.data.code != 0) {
            ElMessage({ showClose: true, message: response.data.msg, type: 'error' })
        }
        return response.data
    },
    error => {
        if (!error.response) {
            ElMessage({ showClose: true, message: "not response", type: 'error' })
            return
        }
        switch (error.response.status) {
            case 500:
                ElMessage({ showClose: true, message: "error 500", type: 'error' })
                break
            case 404:
                ElMessage({ showClose: true, message: "error 400", type: 'error' })
                break
        }
        return error
    }
)
export default service