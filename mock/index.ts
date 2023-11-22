import user from './modules/user'
import menu from './modules/menu'
import casbin from './modules/casbin'
import login from './modules/login'
import dict from './modules/dict'
import setting from './modules/setting'

export default [
    ...menu,
    ...login,
    ...user,
    ...casbin,
    ...dict,
    ...setting
]
