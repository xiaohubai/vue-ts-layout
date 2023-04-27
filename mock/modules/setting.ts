export default [
	{
		url: '/api/v1/get/setting',
		method: 'post',
		response: () => {
			return {
				'code': 0,
				'msg': '成功',
				'data': {
					'ID': 1,
					'lang': 'en',
					'sideModeColor': '#000000',
					'collapse': false,
					'breadcrumb': true,
					'defaultRouter': 'dashboard',
					'activeTextColor': '#096DE6',
					'activeBackgroundColor': '#484fda',
					'UID': '123456789'
				},
				'traceID': 'abf1155da98da70760a2e1651c95ba6b'
			}
		}
	}

]