export default [
	{
		url: '/api/v1/get/setting',
		method: 'get',
		response: () => {
			return {
				'code': 0,
				'msg': '成功',
				'data': {
					'ID': 1,
					'lang': 'zh-cn',
					'sideModeColor': '#000000',
					'collapse': false,
					'breadcrumb': true,
					'defaultRouter': 'dashboard',
					'activeTextColor': '#096DE6',
					'activeBackgroundColor': '#484fda',
					'UID': '123456789'
				},
				'traceID': 'ca0f177b7c7ef8aad081da23f39893de'
			}
		}
	},
	{
		url: '/api/v1/update/setting',
		method: 'post',
		response: () => {
			return {
				'code': 0,
				'msg': '成功',
				'data': {},
				'traceID': '98bfc141ded9e0c55d63ba134e3d51c4'
			}
		}
	}

]