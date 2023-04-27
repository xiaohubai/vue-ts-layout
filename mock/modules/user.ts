export default [
    {
        url: '/api/v1/set/userInfo',
        method: 'post',
        response: () => {
            return {
                'code': 0,
                'data': {
                },
                'msg': '成功',
                'trace_id': '48c3b35188f3dae5'
            }
        }
    },
    {
        url: '/api/v1/get/userInfoList',
        method: 'get',
        response: () => {
            return {
                'code': 0,
                'data': {
                    'id': 1,
                    'uid': '67cdf195-574d-456a-a761-c18b5b8585c1',
                    'userName': 'admin',
                    'nickName': '小不点',
                    'birth': '2022-07-20',
                    'avatar': 'https://qmplusimg.henrongyi.top/gva_header.jpg',
                    'roleID': '0',
                    'roleName': '管理员',
                    'phone': '13212345678',
                    'wechat': '',
                    'email': '',
                    'state': '',
                    'motto': '前进的苦，是在于人要逼着自己开辟新的痛苦领域',
                    'createdUser': 'admin',
                    'updatedUser': 'admin',
                    'createAt': '2022-07-20 20:44:58',
                    'updateAt': '2022-07-20 20:44:58'

                },
                'msg': '登录成功'
            }
        }
    }

]