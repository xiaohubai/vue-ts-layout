export default [
    {
        url: '/api/v1/get/roleCasbinList',
        method: 'post',
        response: () => {
            return {
                'code': 0,
                'msg': '成功',
                'data': {
                    'page': 1,
                    'pageSize': 10,
                    'total': 10,
                    'list': [
                        {
                            'ID': 1,
                            'roleIDs': '0',
                            'path': '/v1/get/dictList',
                            'method': 'GET',
                            'desc': '获取菜单'
                        },
                        {
                            'ID': 2,
                            'roleIDs': '0',
                            'path': '/v1/get/allMenuList',
                            'method': 'GET',
                            'desc': ''
                        },
                        {
                            'ID': 3,
                            'roleIDs': '0',
                            'path': '/v1/get/roleMenuList',
                            'method': 'GET',
                            'desc': ''
                        },
                        {
                            'ID': 4,
                            'roleIDs': '0',
                            'path': '/v1/get/roleCasbinList',
                            'method': 'POST',
                            'desc': ''
                        },
                        {
                            'ID': 5,
                            'roleIDs': '0',
                            'path': '/v1/get/setting',
                            'method': 'GET',
                            'desc': ''
                        },
                        {
                            'ID': 6,
                            'roleIDs': '0',
                            'path': '/v1/update/setting',
                            'method': 'POST',
                            'desc': ''
                        },
                        {
                            'ID': 7,
                            'roleIDs': '0',
                            'path': '/v1/add/roleMenu',
                            'method': 'POST',
                            'desc': ''
                        },
                        {
                            'ID': 8,
                            'roleIDs': '0',
                            'path': '/v1/delete/roleMenu',
                            'method': 'POST',
                            'desc': ''
                        },
                        {
                            'ID': 9,
                            'roleIDs': '0',
                            'path': '/v1/update/roleMenu',
                            'method': 'POST',
                            'desc': ''
                        },
                        {
                            'ID': 10,
                            'roleIDs': '0',
                            'path': '/v1/add/roleCasbin',
                            'method': 'POST',
                            'desc': ''
                        }
                    ]
                },
                'traceID': '87330ca9d6c660443ebeaf363e55fe89'
            }
        }
    },
    {
        url: '/api/v1/update/roleCasbin',
        method: 'post',
        response: () => {
            return {
                'code': 0,
                'msg': '成功',
                'data': {},
                'traceID': 'b585f21e7b354774478f9cfe737bb824'
            }
        }
    },
    {
        url: '/api/v1/add/roleCasbin',
        method: 'post',
        response: () => {
            return {
                'code': 0,
                'msg': '成功',
                'data': {},
                'traceID': 'd3e77d94be9144d05571650ba071e4ea'
            }
        }
    },
    {
        url: '/api/v1/delete/roleCasbin',
        method: 'post',
        response: () => {
            return {
                'code': 0,
                'msg': '成功',
                'data': {},
                'traceID': 'cd82f9e64fc6b02e4a176d6a463061ce'
            }
        }
    }
]