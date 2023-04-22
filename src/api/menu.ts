import service from '@/utils/request'
export const getRoleMenuList = () => {
  return service({
    url: '/v1/get/roleMenuList',
    method: 'get'
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

export const getAllMenuList = () => {
  return service({
    url: '/v1/get/allMenuList',
    method: 'get'
  })
}

export const deleteRoleMenu = (data) => {
  return service({
    url: '/v1/delete/roleMenu',
    method: 'post',
    data: data
  })
}