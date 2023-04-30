## 内容列表
- [介绍](#介绍)
- [安装](#安装)
- [使用说明](#使用说明)
- [vscode插件配置](#vscode插件配置)
- [计划](#计划)
- [使用许可](#使用许可)

## 介绍
vue-ts-layout 是一个前端模板，它基于 Vite4.x、Vue3.x、Vue-router4.x、Pinia、Element-plus、TypeScript 实现。它使用了最新的前端技术栈，内置了 vue-i18n 国际化解决方案，动态路由，提炼了典型的业务模型,它可以帮助你快速搭建企业级中后台产品原型。也可以作为一个示例，用于学习 Vue3、Vite、Ts 等主流技术。

## 安装
- [配置git](https://xiaohubai.github.io/docs/install/#git)
- [安装 node npm pnpm](https://xiaohubai.github.io/docs/install/#node-npm-pnpm)
- [npm源管理](https://xiaohubai.github.io/docs/install/#npm-%E6%BA%90%E7%AE%A1%E7%90%86)
- [eslint配置](https://xiaohubai.github.io/docs/install/#eslint)
```sh
$ git clone https://github.com/xiaohubai/vue-ts-layout.git
$ cd vue-ts-layout
$ pnpm install
$ pnpm run dev
```

## 使用说明
```go
├── README.md
├── deploy						//部署
│   ├── Makefile				//make指令
│   ├── docker-compose.yml		//docker-compose.yml
│   └── volumes					//挂载目录
├── mock						//mock
│   ├── index.ts				//mock对象
│   ├── mockProdServer.ts		//生产环境配置
│   └── modules					//mock对象实际接口
├── public						//静态资源
│   └── favicon.svg				//网址图标
├── src							//内部实现
│   ├── App.vue					//监听语言配置,实时更改i8n和element-plus语言
│   ├── api						//api接口
│   ├── assets					//资源
│   ├── i18n					//i8n
│   │   ├── en.json				//定义英文
│   │   ├── index.ts			//实例i8n
│   │   └── zh.json				//定义中文
│   ├── layout					//布局
│   │   ├── components			//组件
│   │   │   ├── aside			//侧边栏
│   │   │   │   ├── index.vue	//logo和首层路由
│   │   │   │   └── submenu.vue //多级路由
│   │   │   ├── footer			//页脚
│   │   │   │   └── index.vue
│   │   │   ├── header						//header
│   │   │   │   ├── breadcrumb.vue			//面包屑(多级链路)
│   │   │   │   ├── collapse.vue			//控制折叠
│   │   │   │   ├── index.vue				//header布局
│   │   │   │   ├── notice.vue				//即时消息
│   │   │   │   ├── profile.vue				//头像和个人中心
│   │   │   │   └── tabs-breadcrumb.vue		//tab面包屑
│   │   │   └── setting						//布局的个性化设置
│   │   │       └── index.vue
│   │   └── index.vue						//整体布局
│   ├── main.ts								//业务入口
│   ├── permission.ts						//路由拦截器
│   ├── pinia								//store
│   │   ├── index.ts						//pinia实例
│   │   └── modules
│   │       ├── dict.ts						//字典序
│   │       ├── router.ts					//动态路由
│   │       ├── setting.ts					//设置
│   │       └── user.ts						//用户基本信息和token
│   ├── router								//基本路由和白名单
│   │   └── index.ts
│   ├── style								//样式
│   │   └── index.scss
│   ├── utils								//工具
│   │   ├── asyncRouter.ts					//导入路由的component文件路径
│   │   ├── pageTitle.ts					//网址标题
│   │   └── request.ts						//axios封装
│   └── views								//页面
├── index.html								//访问入口
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── vite.config.ts							//vite配置
```
## vscode相关插件配置
[地址](https://xiaohubai.github.io/docs/install/#vscode%E9%85%8D%E7%BD%AE)
- Highlight Matching Tag
- GitLens
- Path Intellisense
- Stylelint
- TypeScript Vue Plugin(volar)
- Vite
- Vue Language Features(Volar)
- Eslint
## 计划
- [x] layout
- [x] pinia
- [x] i18n
- [x] 动态角色路由
- [x] vite,eslint,typescript配置
- [x] mock本地/生产环境
- [x] 登录页面
- [x] 个人信息页面
- [x] 404页面
- [x] 权限管理页面
- [x] 菜单管理页面
- [ ] 字典管理页面
- [ ] 仪表盘页面
- [ ] 上传页面
- [ ] 即时消息


## 使用许可
[MIT](LICENSE) © XiaohuBai



