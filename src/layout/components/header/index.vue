<template>
    <div class="cls-header">
        <div class="cls-header-up">
            <div class="cls-header-left">
                <div class="cls-collapse">
                    <Collapse />
                </div>
                <div class="cls-activeTitle">
                    {{ activeTitle }}
                </div>
            </div>
            <div class="cls-header-right">
                <div class="cls-notice">
                    <Notice />
                </div>
                <div class="cls-profile">
                    <Profile />
                </div>

            </div>
        </div>
        <el-divider />
        <div class="cls-header-down" v-if="breadcrumb">
            <Breadcrumb />
        </div>
    </div>
</template>

<script setup lang="ts" name="Header">
import Collapse from './collapse.vue'
import Breadcrumb from './breadcrumb.vue'
import Profile from './profile.vue'
import Notice from './notice.vue'
import { useRouterStore } from '@/pinia/modules/router'
import { storeToRefs } from 'pinia'
import { useSettingStore } from "@/pinia/modules/setting"

const routerStore = useRouterStore()
const settingStore = useSettingStore()

const { breadcrumb } = storeToRefs(settingStore)
const { activeTitle } = storeToRefs(routerStore)
</script>

<style lang="scss" scoped>
.cls-header {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.cls-header-up {
    display: flex;
    height: 60px;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    .cls-header-left {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .cls-collapse {
            margin-top: 6px;
            margin-left: 20px;
        }

        .cls-activeTitle {
            color: #413d3d;
            font-size: 16px;
            margin-left: 20px;
        }
    }

    .cls-header-right {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .cls-profile {
            margin-right: 10px;
        }

        .cls-notice {
            margin-right: 10px;
        }
    }
}

.cls-header-down {
    display: flex;
    height: 40px;
    width: 100%;
}

.el-divider {
    padding: 0;
    margin: 0;
    height: 0;
}
</style>
