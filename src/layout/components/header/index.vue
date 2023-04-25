<template>
    <div class="topfix">
        <div class="header">
            <div class="header-left">
                <div class="collapse">
                    <Collapse />
                </div>
                <div class="activeTitle">
                    {{ activeTitle }}
                </div>
            </div>
            <div class="header-right">
                <div class="profile">
                    <Profile />
                </div>
            </div>
        </div>
        <el-divider />
        <div class="breadcrumb" v-if="breadcrumb">
            <Breadcrumb />
        </div>

    </div>
</template>

<script setup lang="ts" name="Header">
import Collapse from './collapse.vue'
import Breadcrumb from './breadcrumb.vue'
import Profile from './profile.vue'
import { useRouterStore } from '@/pinia/modules/router'
import { storeToRefs } from 'pinia'
import { useSettingStore } from "@/pinia/modules/setting"

const routerStore = useRouterStore()
const settingStore = useSettingStore()

const { breadcrumb } = storeToRefs(settingStore)
const { activeTitle } = storeToRefs(routerStore)
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 60px;
    line-height: 60px;
}

.header-left {
    @extend .header;

    .collapse {
        margin-top: 6px;
        margin-left: 20px;
    }

    .activeTitle {
        color: #413d3d;
        font-size: 16px;
        margin-left: 20px;
    }
}

.header-right {
    @extend .header;
    justify-content: right;
    margin: 0;
    padding: 0;


    .profile {
        margin-right: 10px;
    }

}


.breadcrumb {
    height: 40px;
}

.el-divider {
    padding: 0;
    margin: 0;
    height: 0;
}
</style>
