import service from '@/utils/request'
export const getLayoutSettings = () => {
    return service({
        url: '/v1/get/layoutSettings',
        method: 'get'
    })
}

export const setLayoutSettings = (data) => {
    return service({
        url: '/v1/set/layoutSettings',
        method: 'post',
        data: data
    })
}