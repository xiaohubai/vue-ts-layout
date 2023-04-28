export default [
    {
        url: '/api/v1/get/dictList',
        method: 'get',
        response: () => {
            return {
                'code': 0,
                'msg': '成功',
                'data': {
                    'app_info': {
                        'logo': 'http://172.21.0.2:8080/logo.png',
                        'name': '风控分析平台'
                    },
                    'lang_info': [
                        {
                            'key': 'zh-cn',
                            'value': '简体中文'
                        },
                        {
                            'key': 'en',
                            'value': 'English'
                        }
                    ],
                    'method_info': [
                        {
                            'key': 'POST',
                            'value': 'POST'
                        },
                        {
                            'key': 'GET',
                            'value': 'GET'
                        }
                    ],
                    'role_info': [
                        {
                            'key': '0',
                            'value': '管理员'
                        },
                        {
                            'key': '1',
                            'value': '用户'
                        }
                    ],
                    'state_info': {
                        '0': '初始状态',
                        '1': '使用中',
                        '2': '已停用',
                        '3': '已删除'
                    }
                },
                'traceID': '575660fa5f3f2e192af09e9231855cc4'
            }
        }
    }
]