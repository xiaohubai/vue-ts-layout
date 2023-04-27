import service from '@/utils/request'
export const jsonInBlacklist = (data) => {
    return service({
        url: '/v1/jwt/jsonInBlacklist',
        method: 'post',
        data: data
    })
}

