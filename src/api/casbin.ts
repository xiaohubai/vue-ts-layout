import service from '@/utils/request'
export const getRoleCasbinList = (data) => {
    return service({
        url: '/v1/get/roleCasbinList',
        method: 'post',
        data: data
    })
}

export const updateRoleCasbin = (data) => {
    return service({
        url: '/v1/update/roleCasbin',
        method: 'post',
        data: data
    })
}

export const addRoleCasbin = (data) => {
    return service({
        url: '/v1/add/roleCasbin',
        method: 'post',
        data: data
    })
}

export const deleteRoleCasbin = (data) => {
    return service({
        url: '/v1/delete/roleCasbin',
        method: 'post',
        data: data
    })
}
