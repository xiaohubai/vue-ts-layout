export default [
    {
        url: "/api/v1/get/casbinList",
        method: "post",
        response: () => {
            return {
                "code": 0,
                "data": {
                    "list": [
                        {
                            "ID": 1,
                            "roleIDs": "0",
                            "path": "/v1/add/casbin",
                            "method": "POST",
                            "desc": '增加权限路由'
                        },
                        {
                            "ID": 3,
                            "roleIDs": "0",
                            "path": "/v1/get/dict",
                            "method": "POST",
                            "desc": '获取字典序'
                        },
                        {
                            "ID": 4,
                            "roleIDs": "0",
                            "path": "/v1/get/casbinList",
                            "method": "POST",
                            "desc": '获取权限列表'
                        },
                        {
                            "ID": 5,
                            "roleIDs": "0",
                            "path": "/v1/get/roleMenuList",
                            "method": "POST",
                            "desc": '获取角色菜单'
                        },
                        {
                            "ID": 6,
                            "roleIDs": "0",
                            "path": "/v1/get/userInfo",
                            "method": "GET",
                            "desc": '获取用户信息'
                        },
                        {
                            "ID": 7,
                            "roleIDs": "0",
                            "path": "/v1/get/allUserInfoList",
                            "method": "GET",
                            "desc": '获取全部用户信息'
                        },
                        {
                            "ID": 8,
                            "roleIDs": "0",
                            "path": "/v1/setUserInfo",
                            "method": "POST",
                            "desc": '设置用户信息'
                        }
                    ],
                    "page": 1,
                    "pageSize": 10,
                    "total": 8
                },
                "msg": "成功",
                "traceID": "77c9004f04cc8303"
            };
        }
    },
    {
        url: "/api/v1/update/casbin",
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
        url: "/api/v1/add/casbin",
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