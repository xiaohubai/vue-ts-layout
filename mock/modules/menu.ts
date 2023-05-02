export default [
    {
        url: '/api/v1/get/roleMenuList',
        method: 'get',
        response: () => {
            return {
                'code': 0,
                'msg': '成功',
                'data': [
                    {
                        'path': '/layout',
                        'name': 'layout',
                        'component': 'layout/index.vue',
                        'redirect': '/dashboard',
                        'meta': {
                            'ID': 1,
                            'parentID': 0,
                            'roleIDs': '0',
                            'title': '',
                            'icon': '',
                            'hidden': false,
                            'keepAlive': true,
                            'sort': 0
                        },
                        'children': [
                            {
                                'path': '/dashboard',
                                'name': 'dashboard',
                                'component': 'views/dashboard/index.vue',
                                'redirect': '',
                                'meta': {
                                    'ID': 2,
                                    'parentID': 1,
                                    'roleIDs': '0',
                                    'title': '仪表盘',
                                    'icon': 'odometer',
                                    'hidden': false,
                                    'keepAlive': true,
                                    'sort': 1
                                },
                                'children': null
                            },
                            {
                                'path': '/admin',
                                'name': 'admin',
                                'component': '',
                                'redirect': '/casbin',
                                'meta': {
                                    'ID': 3,
                                    'parentID': 1,
                                    'roleIDs': '0',
                                    'title': '管理员',
                                    'icon': 'user',
                                    'hidden': false,
                                    'keepAlive': true,
                                    'sort': 2
                                },
                                'children': [
                                    {
                                        'path': '/casbin',
                                        'name': 'casbin',
                                        'component': 'views/admin/casbin/index.vue',
                                        'redirect': '',
                                        'meta': {
                                            'ID': 4,
                                            'parentID': 3,
                                            'roleIDs': '0',
                                            'title': '权限管理',
                                            'icon': 'platform',
                                            'hidden': false,
                                            'keepAlive': true,
                                            'sort': 1
                                        },
                                        'children': null
                                    },
                                    {
                                        'path': '/menus',
                                        'name': 'menus',
                                        'component': 'views/admin/menus/index.vue',
                                        'redirect': '',
                                        'meta': {
                                            'ID': 5,
                                            'parentID': 3,
                                            'roleIDs': '0',
                                            'title': '菜单管理',
                                            'icon': 'tickets',
                                            'hidden': false,
                                            'keepAlive': true,
                                            'sort': 2
                                        },
                                        'children': null
                                    }
                                ]
                            },
                            {
                                'path': '/about',
                                'name': 'about',
                                'component': 'views/about/index.vue',
                                'redirect': '',
                                'meta': {
                                    'ID': 6,
                                    'parentID': 1,
                                    'roleIDs': '0',
                                    'title': '关于我们',
                                    'icon': 'star',
                                    'hidden': false,
                                    'keepAlive': true,
                                    'sort': 3
                                },
                                'children': null
                            },
                            {
                                'path': '/person',
                                'name': 'person',
                                'component': 'views/person/index.vue',
                                'redirect': '',
                                'meta': {
                                    'ID': 7,
                                    'parentID': 1,
                                    'roleIDs': '0',
                                    'title': '个人信息',
                                    'icon': 'message',
                                    'hidden': true,
                                    'keepAlive': true,
                                    'sort': 4
                                },
                                'children': null
                            },
                            {
                                'path': '/others',
                                'name': 'others',
                                'component': '',
                                'redirect': '/404',
                                'meta': {
                                    'ID': 8,
                                    'parentID': 1,
                                    'roleIDs': '0',
                                    'title': '其他页面',
                                    'icon': 'more',
                                    'hidden': false,
                                    'keepAlive': true,
                                    'sort': 5
                                },
                                'children': [
                                    {
                                        'path': '/404',
                                        'name': '404',
                                        'component': 'views/error/index.vue',
                                        'redirect': '',
                                        'meta': {
                                            'ID': 9,
                                            'parentID': 8,
                                            'roleIDs': '0',
                                            'title': '404',
                                            'icon': 'InfoFilled',
                                            'hidden': true,
                                            'keepAlive': true,
                                            'sort': 1
                                        },
                                        'children': null
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        'path': '/:catchAll(.*)',
                        'name': '',
                        'component': '',
                        'redirect': '/404',
                        'meta': {
                            'ID': 10,
                            'parentID': 0,
                            'roleIDs': '0',
                            'title': '',
                            'icon': '',
                            'hidden': true,
                            'keepAlive': true,
                            'sort': 0
                        },
                        'children': null
                    }
                ],
                'traceID': 'aed24fc6cd46a787e23c8ddf889ae824'
            }
        }
    },

    {
        url: '/api/v1/update/roleMenu',
        method: 'post',
        response: () => {
            return {
                'code': 0,
                'msg': '成功',
                'data': {},
                'traceID': '538a6f9f542fa61885b61f9cdb8cdd42'
            }
        }
    },
    {
        url: '/api/v1/get/allMenuList',
        method: 'get',
        response: () => {
            return {
                'code': 0,
                'msg': '成功',
                'data': [
                    {
                        'path': '/layout',
                        'name': 'layout',
                        'component': 'layout/index.vue',
                        'redirect': '/dashboard',
                        'meta': {
                            'ID': 1,
                            'parentID': 0,
                            'roleIDs': '0',
                            'title': '',
                            'icon': '',
                            'hidden': false,
                            'keepAlive': true,
                            'sort': 0
                        },
                        'children': [
                            {
                                'path': '/dashboard',
                                'name': 'dashboard',
                                'component': 'views/dashboard/index.vue',
                                'redirect': '',
                                'meta': {
                                    'ID': 2,
                                    'parentID': 1,
                                    'roleIDs': '0',
                                    'title': '仪表盘',
                                    'icon': 'odometer',
                                    'hidden': false,
                                    'keepAlive': true,
                                    'sort': 1
                                },
                                'children': null
                            },
                            {
                                'path': '/admin',
                                'name': 'admin',
                                'component': '',
                                'redirect': '/casbin',
                                'meta': {
                                    'ID': 3,
                                    'parentID': 1,
                                    'roleIDs': '0',
                                    'title': '管理员',
                                    'icon': 'user',
                                    'hidden': false,
                                    'keepAlive': true,
                                    'sort': 2
                                },
                                'children': [
                                    {
                                        'path': '/casbin',
                                        'name': 'casbin',
                                        'component': 'views/admin/casbin/index.vue',
                                        'redirect': '',
                                        'meta': {
                                            'ID': 4,
                                            'parentID': 3,
                                            'roleIDs': '0',
                                            'title': '权限管理',
                                            'icon': 'platform',
                                            'hidden': false,
                                            'keepAlive': true,
                                            'sort': 1
                                        },
                                        'children': null
                                    },
                                    {
                                        'path': '/menus',
                                        'name': 'menus',
                                        'component': 'views/admin/menus/index.vue',
                                        'redirect': '',
                                        'meta': {
                                            'ID': 5,
                                            'parentID': 3,
                                            'roleIDs': '0',
                                            'title': '菜单管理',
                                            'icon': 'tickets',
                                            'hidden': false,
                                            'keepAlive': true,
                                            'sort': 2
                                        },
                                        'children': null
                                    }
                                ]
                            },
                            {
                                'path': '/about',
                                'name': 'about',
                                'component': 'views/about/index.vue',
                                'redirect': '',
                                'meta': {
                                    'ID': 6,
                                    'parentID': 1,
                                    'roleIDs': '0',
                                    'title': '关于我们',
                                    'icon': 'star',
                                    'hidden': false,
                                    'keepAlive': true,
                                    'sort': 3
                                },
                                'children': null
                            },
                            {
                                'path': '/person',
                                'name': 'person',
                                'component': 'views/person/index.vue',
                                'redirect': '',
                                'meta': {
                                    'ID': 7,
                                    'parentID': 1,
                                    'roleIDs': '0',
                                    'title': '个人信息',
                                    'icon': 'message',
                                    'hidden': true,
                                    'keepAlive': true,
                                    'sort': 4
                                },
                                'children': null
                            },
                            {
                                'path': '/others',
                                'name': 'others',
                                'component': '',
                                'redirect': '/404',
                                'meta': {
                                    'ID': 8,
                                    'parentID': 1,
                                    'roleIDs': '0',
                                    'title': '其他页面',
                                    'icon': 'more',
                                    'hidden': false,
                                    'keepAlive': true,
                                    'sort': 5
                                },
                                'children': [
                                    {
                                        'path': '/404',
                                        'name': '404',
                                        'component': 'views/error/index.vue',
                                        'redirect': '',
                                        'meta': {
                                            'ID': 9,
                                            'parentID': 8,
                                            'roleIDs': '0',
                                            'title': '404',
                                            'icon': 'InfoFilled',
                                            'hidden': true,
                                            'keepAlive': true,
                                            'sort': 1
                                        },
                                        'children': null
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        'path': '/:catchAll(.*)',
                        'name': '',
                        'component': '',
                        'redirect': '/404',
                        'meta': {
                            'ID': 10,
                            'parentID': 0,
                            'roleIDs': '0',
                            'title': '',
                            'icon': '',
                            'hidden': true,
                            'keepAlive': true,
                            'sort': 0
                        },
                        'children': null
                    }
                ],
                'traceID': '29b1897958fe2149eaf7ef508a94950e'
            }
        }
    },
    {
        url: '/api/v1/add/roleMenu',
        method: 'post',
        response: () => {
            return {
                'code': 0,
                'msg': '成功',
                'data': {},
                'traceID': '87346ff1c440286e3ac5e262f7648a0d'
            }
        }
    },
    {
        url: '/api/v1/delete/roleMenu',
        method: 'post',
        response: () => {
            return {
                'code': 0,
                'msg': '成功',
                'data': {},
                'traceID': '8ae29efc27bfe478bfa89abfcb389715'
            }
        }
    }

]