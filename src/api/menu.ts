import service from '@/utils/request'
export const getRoleMenus = (data) => {
  return service({
    url: '/v1/get/roleMenuList',
    method: 'post',
    data: data
  })
}

export const updateRoleMenu = (data) => {
  return service({
    url: '/v1/update/roleMenu',
    method: 'post',
    data: data
  })
}

export const addRoleMenu = (data) => {
  return service({
    url: '/v1/add/roleMenu',
    method: 'post',
    data: data
  })
}