import service from '@/utils/request'
export const getDictList = (data) => {
    return service({
        url: '/v1/get/dictList',
        method: 'post',
        data: data
    })
}
