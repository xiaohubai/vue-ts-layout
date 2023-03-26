export default [
    {
        url: "/api/v1/login",
        method: "post",
        response: () => {
            return {
                "code": 0,
                "data": {
                    "id": 1,
                    "uid": "67cdf195-574d-456a-a761-c18b5b8585c1",
                    "userName": "admin",
                    "nickName": "小不点",
                    "birth": "2022-07-20",
                    "avatar": "https://qmplusimg.henrongyi.top/gva_header.jpg",
                    "roleId": "0",
                    "roleName": "管理员",
                    "phone": "13212345678",
                    "wechat": "",
                    "email": "",
                    "state": "",
                    "motto": '前进的苦，是在于人要逼着自己开辟新的痛苦领域',
                    "createdUser": "admin",
                    "updatedUser": "admin",
                    "createAt": "2022-07-20 20:44:58",
                    "updateAt": "2022-07-20 20:44:58",
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVVUlEIjoiOGQzMGYzYWYtOGMxZC00MTg2LWJiZDgtZWY1NWNkMmUyYTk5IiwiSUQiOjEsIlVzZXJuYW1lIjoiYWRtaW4iLCJOaWNrTmFtZSI6Iui2hee6p-euoeeQhuWRmCIsIkF1dGhvcml0eUlkIjo4ODgsIkJ1ZmZlclRpbWUiOjg2NDAwLCJleHAiOjE2NTkwNjY0ODksImlzcyI6InFtUGx1cyIsIm5iZiI6MTY1ODQ2MDY4OX0.jKGW0SGFaV_CeYfw1vsdtcqD9NiDXEuxi6J_dvcQzrE",
                    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVVUlEIjoiOGQzMGYzYWYtOGMxZC00MTg2LWJiZDgtZWY1NWNkMmUyYTk5IiwiSUQiOjEsIlVzZXJuYW1lIjoiYWRtaW4iLCJOaWNrTmFtZSI6Iui2hee6p-euoeeQhuWRmCIsIkF1dGhvcml0eUlkIjo4ODgsIkJ1ZmZlclRpbWUiOjg2NDAwLCJleHAiOjE2NTkwNjY0ODksImlzcyI6InFtUGx1cyIsIm5iZiI6MTY1ODQ2MDY4OX0.jKGW0SGFaV_CeYfw1vsdtcqD9NiDXEuxi6J_dvcQzrE",
                },
                "msg": "登录成功"
            };
        }
    },
    {
        url: "/api/v1/captcha",
        method: "get",
        response: () => {
            return {
                "code": 0,
                "data": {
                    "captchaId": "aUO9uS9ERNeyEGovfsAZ",
                    "picPath": "data:image/png;base64,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",
                    "captchaLength": 6,
                    "openCaptcha": true,
                },
                "msg": "验证码获取成功"
            };
        }
    },

];