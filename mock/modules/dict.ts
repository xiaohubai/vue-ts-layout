export default [
    {
        url: "/api/v1/get/dictList",
        method: "post",
        response: () => {
            return {
                "code": 0,
                "data": {
                    "roleIDs": [
                        {
                            "ID": 1,
                            "key": "0",
                            "value": '管理员'
                        },
                        {
                            "ID": 2,
                            "key": "1",
                            "value": '用户'
                        },
                    ],
                    "methods": [
                        {
                            "ID": 3,
                            "key": "POST",
                            "value": 'POST'
                        },
                        {
                            "ID": 4,
                            "key": "GET",
                            "value": 'GET'
                        },

                    ]
                },
                "msg": "成功",
                "traceID": "77c9004f04cc8303"
            };
        }
    }
]