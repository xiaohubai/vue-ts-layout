import service from '@/utils/request'
export const getCasbinList = (data) => {
    return service({
        url: '/v1/get/casbinList',
        method: 'post',
        data: data
    })
}

export const updateRoleCasbin = (data) => {
    return service({
        url: '/v1/update/casbin',
        method: 'post',
        data: data
    })
}

export const addRoleCasbin = (data) => {
    return service({
        url: '/v1/add/casbin',
        method: 'post',
        data: data
    })
}
