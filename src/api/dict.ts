import service from '@/utils/request'
export const getDictList = () => {
    return service({
        url: '/v1/get/dictList',
        method: 'get',
    })
}
