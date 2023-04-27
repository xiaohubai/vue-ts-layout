import service from '@/utils/request'

// @Summary 用户登录
// @Produce  application/json
// @Param data body {username:"string",password:"string"}
// @Router /base/login [post]
export const login = (data) => {
  return service({
    url: '/v1/login',
    method: 'post',
    data: data
  })
}

// @Summary 获取验证码
// @Produce  application/json
// @Param data body {username:"string",password:"string"}
// @Router /base/captcha [post]
export const captcha = () => {
  return service({
    url: '/v1/captcha',
    method: 'get'
  })
}

export const updateUserInfo = (data) => {
  return service({
    url: '/v1/update/userInfo',
    method: 'post',
    data: data
  })
}

export const updatePassword = (data) => {
  return service({
    url: '/v1/update/password',
    method: 'post',
    data: data
  })
}

export const getUserInfo = () => {
  return service({
    url: '/v1/get/userInfo',
    method: 'get'
  })
}