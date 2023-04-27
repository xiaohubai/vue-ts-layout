module.exports = {
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 2020
	},
	extends: [
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	rules: {
		quotes: ['error', 'single'],// 强制使用一致的反勾号、双引号或单引号
		eqeqeq: 'off', // 要求使用 === 和 !==
		semi: ['error', 'never'], // 要求或禁止使用分号代替 ASI
		'max-len': ['error', 240], // 强制一行的最大长度
		'eol-last': 'off', // 要求或禁止文件末尾存在空行
		'no-shadow': 'off', // 禁止变量声明与外层作用域的变量同名
		'import/no-cycle': 'off', // 禁止一个模块导入一个有依赖路径的模块回到自己身上
		'arrow-parens': 'off', // 要求箭头函数的参数使用圆括号
		'no-use-before-define': 'off', // 禁止在变量定义之前使用它们，则倾向于默认输出
		'prefer-const': 'warn', // 要求使用 const 声明那些声明后不再被修改的变量
		'global-require': 'off', // 要求 require() 出现在顶层模块作用域中
		'one-var-declaration-per-line': 'off', // 要求或禁止在变量声明周围换行
		'one-var': 'off', // 强制函数中的变量要么一起声明要么分开声明
		'object-curly-newline': 'off', // 强制大括号内换行符的一致性
		'default-case': 'off', // 要求 switch 语句中有 default 分支
		'no-trailing-spaces': 'off', // 禁用行尾空格
		'no-multi-spaces': 2,
		'no-unused-expressions': 'off', // 禁止出现未使用过的表达式
		'no-underscore-dangle': 'off', // 禁止标识符中有悬空下划线
		'no-await-in-loop': 'off', // 禁止在循环中出现 await
		'import/no-unresolved': 'off', // 确保导入指向一个可以解析的文件/模块
		'space-before-function-paren': 'off',
		'comma-dangle': ['error', 'never'],// 要求或禁止末尾逗号
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'vue/custom-event-name-casing': 'off',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^h$',
				varsIgnorePattern: '^h$'
			}
		],
		'vue/max-attributes-per-line': ['error', {
			'singleline': {
				'max': 5
			},
			'multiline': {
				'max': 5
			}
		}],
		'vue/first-attribute-linebreak': ['error', {
			'singleline': 'beside',
			'multiline': 'beside'
		}],
		'vue/html-closing-bracket-newline': ['error', {
			'singleline': 'never',
			'multiline': 'never'
		}],
		'vue/multi-word-component-names': 0, //开启 关闭驼峰命名规则
		'no-multiple-empty-lines': [2, {
			max: 1
		}]

	}
}

