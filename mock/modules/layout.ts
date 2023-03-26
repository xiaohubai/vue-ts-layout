export default [
    {
        url: "/api/v1/get/layoutSettings",
        method: "get",
        response: () => {
            return {
                "code": 0,
                "data": {
                    "lang": 'zh-cn',
                    "collapse": false,
                    "sideMode": 'dark',
                    "breadcrumb": true,
                    "defaultRouter": "dashboard",
                    "activeTextColor": "#0571e3",
                    "activebBackgroundColor": '#484fda',
                    "appName": '风控与分析平台',
                    "appLogo": 'https://www.gin-vue-admin.com/img/logo.png'
                },
                "msg": "成功",
                "trace_id": "48c3b35188f3dae5"
            };
        }
    },
    {
        url: "/api/v1/set/layoutSettings",
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