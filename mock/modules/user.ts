export default [
    {
        url: '/api/v1/update/userInfo',
        method: 'post',
        response: () => {
            return {
                'code': 0,
                'msg': '成功',
                'data': {},
                'traceID': '9bcdc3cfa32aed79ed9d74dd892cfd88'
            }
        }
    },
    {
        url: '/api/v1/get/userInfo',
        method: 'get',
        response: () => {
            return {
                'code': 0,
                'msg': '成功',
                'data': {
                    'ID': 1,
                    'UID': '123456789',
                    'userName': 'admin',
                    'nickName': '小不点',
                    'birth': '2021-01-01',
                    'avatar': 'https://i.postimg.cc/15038Rxn/4.png',
                    'roleID': '0',
                    'roleName': '管理员',
                    'phone': '13269110806',
                    'wechat': 'xiaohubai',
                    'email': 'xiaohubai@outlook.com',
                    'state': 0,
                    'motto': '前进的苦，是在于人要逼着自己开辟新的痛苦领域'
                },
                'traceID': '2bbec0e32fed0c1910d92ceb4e6bd4d1'
            }
        }
    },
    {
        url: '/api/v1/update/password',
        method: 'post',
        response: () => {
            return {
                'code': 0,
                'msg': '成功',
                'data': {},
                'traceID': '24697a081fcd5330ecbe2ce264666fac'
            }
        }
    }

]