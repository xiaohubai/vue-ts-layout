export default [
    {
        url: '/api/v1/login',
        method: 'post',
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
                    'motto': '前进的苦，是在于人要逼着自己开辟新的痛苦领域',
                    'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxMjM0NTY3ODkiLCJ1c2VyTmFtZSI6ImFkbWluIiwicGhvbmUiOiIxMzI2OTExMDgwNiIsInJvbGVJZCI6IjAiLCJyb2xlTmFtZSI6IueuoeeQhuWRmCIsInN0YXRlIjowLCJidWZmZXJUaW1lIjo4NjQwMCwiZXhwIjoxNjgzMjEzNTc0LCJpc3MiOiJ4aWFvaHViYWlAb3V0bG9vay5jb20iLCJuYmYiOjE2ODI2MDc3NzR9.2N0yeq0qw5fQUBZtCOdtZICGj_kBoik1d0mjm1SxK4g',
                    'refreshToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxMjM0NTY3ODkiLCJ1c2VyTmFtZSI6ImFkbWluIiwicGhvbmUiOiIxMzI2OTExMDgwNiIsInJvbGVJZCI6IjAiLCJyb2xlTmFtZSI6IueuoeeQhuWRmCIsInN0YXRlIjowLCJidWZmZXJUaW1lIjo4NjQwMCwiZXhwIjoxNjgzMjEzNTc0LCJpc3MiOiJ4aWFvaHViYWlAb3V0bG9vay5jb20iLCJuYmYiOjE2ODI2MDc3NzR9.2N0yeq0qw5fQUBZtCOdtZICGj_kBoik1d0mjm1SxK4g'
                },
                'traceID': 'c85e9503736dcb10e499a2fb2c034c88'
            }
        }
    },
    {
        url: '/api/v1/captcha',
        method: 'get',
        response: () => {
            return {
                'code': 0,
                'msg': '成功',
                'data': {
                    'captchaID': 'sqBxbScf1HaY2UY4uvRK',
                    'picPath': 'data:image/png;base64,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',
                    'captchaLength': 6
                },
                'traceID': 'b95c3aee401df5a70971ec7081773569'
            }
        }
    }

]