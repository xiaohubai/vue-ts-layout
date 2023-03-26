export default [
    {
        url: "/api/v1/get/roleMenuList",
        method: "post",
        response: () => {
            return {
                "code": 0,
                "data": {
                    "list": [
                        {
                            "path": '/layout',
                            "name": 'layout',
                            "redirect": '/dashboard',
                            "component": 'layout/index.vue',
                            "children": [
                                {
                                    "path": "/dashboard",
                                    "name": "dashboard",
                                    "component": "views/dashboard/index.vue",
                                    "meta": {
                                        "ID": 1,
                                        "parentId": 0,
                                        "roleIDs": "0,1",
                                        "title": "仪表盘",
                                        "icon": "odometer",
                                        "hidden": false,
                                        "keepAlive": true,
                                        "sort": 1,
                                    }
                                },
                                {
                                    "path": "/admin",
                                    "name": "admin",
                                    "redirect": '/casbin',
                                    "meta": {
                                        "ID": 2,
                                        "parentId": 0,
                                        "roleIDs": "0",
                                        "title": "管理员",
                                        "icon": "user",
                                        "hidden": false,
                                        "keepAlive": true,
                                        "sort": 2,
                                    },
                                    "children": [
                                        {
                                            "path": "/casbin",
                                            "name": "casbin",
                                            "component": 'views/admin/casbin/index.vue',
                                            "meta": {
                                                "ID": 3,
                                                "parentId": 2,
                                                "roleIDs": "0",
                                                "title": "权限管理",
                                                "icon": "platform",
                                                "hidden": false,
                                                "keepAlive": true,
                                                "sort": 1,
                                            },

                                        },
                                        {

                                            "path": "/menus",
                                            "name": "menus",
                                            "component": 'views/admin/menus/index.vue',
                                            "meta": {
                                                "ID": 4,
                                                "parentId": 2,
                                                "roleIDs": "0",
                                                "title": "菜单管理",
                                                "icon": "tickets",
                                                "hidden": false,
                                                "keepAlive": true,
                                                "sort": 2,
                                            }
                                        },
                                    ]
                                },
                                {

                                    "path": "/about",
                                    "name": "about",
                                    "component": "views/about/index.vue",
                                    "meta": {
                                        "ID": 5,
                                        "parentId": 0,
                                        "roleIDs": "0,1",
                                        "title": "关于我们",
                                        "icon": "info-filled",
                                        "hidden": false,
                                        "keepAlive": true,
                                        "sort": 3,
                                    }
                                },
                                {
                                    "path": "/person",
                                    "name": "person",
                                    "component": "views/person/index.vue",
                                    "meta": {
                                        "ID": 6,
                                        "parentId": 0,
                                        "roleIDs": "0,1",
                                        "title": "个人信息",
                                        "icon": "message",
                                        "hidden": true,
                                        "keepAlive": true,
                                        "sort": 4,
                                    }
                                },
                                {
                                    "path": "/others",
                                    "name": "others",
                                    "redirect": "/404",
                                    "meta": {
                                        "ID": 7,
                                        "parentId": 0,
                                        "roleIDs": "0,1",
                                        "title": "其他页面",
                                        "icon": "odometer",
                                        "hidden": false,
                                        "keepAlive": true,
                                        "sort": 5,
                                    },
                                    "children": [
                                        {
                                            "path": "/404",
                                            "name": "404",
                                            "component": 'views/error/index.vue',
                                            "meta": {
                                                "ID": 8,
                                                "parentId": 7,
                                                "roleIDs": "0,1",
                                                "title": "404",
                                                "icon": "InfoFilled",
                                                "hidden": false,
                                                "keepAlive": true,
                                                "sort": 1,
                                            },

                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            "path": '/:catchAll(.*)',
                            "redirect": '/404'
                        }
                    ],
                    "page": 1,
                    "pageSize": 10,
                    "total": 8
                },
                "msg": "获取成功"
            };
        }
    },
    {
        url: "/api/v1/update/roleMenu",
        method: "post",
        response: () => {
            return {
                "code": 0,
                "data": {
                },
                "msg": "成功",
                "trace_id": "48c3b35188f3dae5"
            };
        }
    },
    {
        url: "/api/v1/addRoleMenu",
        method: "post",
        response: () => {
            return {
                "code": 0,
                "data": {
                },
                "msg": "成功",
                "trace_id": "48c3b35188f3dae5"
            };
        }
    },

]