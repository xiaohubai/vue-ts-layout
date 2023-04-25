<template>
    <el-container>
        <el-aside :width="collapse ? '60px' : '220px'">
            <Aside />
        </el-aside>
        <el-container>
            <el-header>
                <Header />
            </el-header>
            <el-main>
                <router-view />
            </el-main>
            <el-footer>
                <Footer />
            </el-footer>
            <Setting />
        </el-container>
    </el-container>
</template>

<script setup lang="ts" name="Layout">
import { ref, watch } from 'vue'
import Setting from '@/layout/components/setting/index.vue'
import Aside from '@/layout/components/aside/index.vue'
import Footer from '@/layout/components/footer/index.vue'
import Header from '@/layout/components/header/index.vue'
import { storeToRefs } from 'pinia'
import { useSettingStore } from "@/pinia/modules/setting"

const settingStore = useSettingStore()
const { collapse, breadcrumb } = storeToRefs(settingStore)

const headerHeight = ref('60px')
const getHeaderHeight = () => {
    if (breadcrumb.value) {
        headerHeight.value = '100px'
    } else {
        headerHeight.value = '60px'
    }
}

watch(() => breadcrumb.value, () => { getHeaderHeight() }, { immediate: true, deep: true })

</script>

<style  lang="scss" scoped>
.el-container {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: relative;

    ::-webkit-scrollbar {
        display: none;
    }

    .el-aside {
        overflow: hidden;
    }

    .el-header {
        margin: 0;
        padding: 0;
        height: v-bind(headerHeight);
        background: #fff;
    }

    .el-main {
        height: calc(100% - v-bind(headerHeight));
        margin: 14px 15px 20px 15px;
        padding: 0;
    }

    .el-footer {
        height: 30px;
        line-height: 12px;
    }

}
</style>
