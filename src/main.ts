import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { createApp } from 'vue';

import App from '@/App.vue';
import store from '@/pinia';
import router from '@/router';
import '@/permission';
import '@/style/index.scss';


import * as ElIcons from '@element-plus/icons-vue';

const app = createApp(App)
app.use(store).use(router).use(ElementPlus, { locale: zhCn })

for (const iconName in ElIcons) {
    app.component(iconName, ElIcons[iconName])
}
app.mount('#app')
