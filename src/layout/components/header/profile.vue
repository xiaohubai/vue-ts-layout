<template>
    <div class="profile">
        <el-dropdown trigger="hover" @visible-change="changeDropDown">
            <div class="avatar">
                <img class="img" :src="avatar" :alt="nickName" v-if="avatar">
                <span style="font-size: 1px" v-if="nickName">
                    {{ nickName }}
                </span>
                <el-icon class="icon-drop" :span="5" :offset="2" v-if="nickName">
                    <component :is="dropDownIcon ? `ArrowDownBold` : `ArrowUpBold`" />
                </el-icon>
            </div>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item icon="avatar">{{ roleName }}</el-dropdown-item>
                    <el-dropdown-item icon="User" @click="toPerson">个人信息</el-dropdown-item>
                    <el-dropdown-item icon="SwitchButton" @click="userStore.LoginOut">登 出</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>


<script setup lang="ts" name="Perfile">
import { useRouter, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useSettingStore } from "@/pinia/modules/setting"
import { useUserStore } from '@/pinia/modules/user';
const router = useRouter()
const userStore = useUserStore()
const { nickName, avatar, roleName } = storeToRefs(userStore)
const settingStore = useSettingStore()
const { dropDownIcon } = storeToRefs(settingStore)

const changeDropDown = () => {
    dropDownIcon.value = dropDownIcon.value ? false : true
}
const toPerson = () => {
    router.push({ name: 'person' })
}

</script>

<style lang="scss" scoped>
.avatar {
    display: flex;
    min-height: 60px;
    line-height: 60px;
    text-align: center;
    transition: all 0.3s;
    align-items: center;
    justify-content: center;

    .img {
        width: 30px;
        height: 30px;
        background: #fff;
        border-radius: 50%;
        margin-right: 10px;
        background: black;
    }

    .nickName {
        color: #333;
    }

    .icon-drop {
        padding-left: 10px;
    }

}
</style>