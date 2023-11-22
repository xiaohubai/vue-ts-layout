import service from '@/utils/request'
export const getSetting = () => {
    return service({
        url: '/v1/get/setting',
        method: 'get'
    })
}

export const updateSetting = (data) => {
    return service({
        url: '/v1/update/setting',
        method: 'post',
        data: data
    })
}