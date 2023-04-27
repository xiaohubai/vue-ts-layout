import { createApp } from 'vue'
import i18n from '@/i18n'
import App from '@/App.vue'
import store from '@/pinia'
import router from '@/router'
import ElementPlus from 'element-plus'
import '@/permission'
import '@/style/index.scss'
import * as ElIcons from '@element-plus/icons-vue'

const app = createApp(App)
for (const iconName in ElIcons) {
    app.component(iconName, ElIcons[iconName])
}

app.use(i18n).use(store).use(router).use(ElementPlus)
app.mount('#app')

